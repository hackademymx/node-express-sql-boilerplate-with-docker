import models from '../models';
import { isEmpty } from '../utils/nativeMethods';
import { tickets } from '.';

const userNotFound = 'User does not exist';
const requestNotFound = 'Request does not exist';
const employeeNotFound = 'Employee does not exist';
const ticketNotFound = 'Ticket does not exist';
const statusNotFound = 'Status does not exist';
const descRequired = 'Description required';
const FeedbackRequired = 'Feedback required';
const employeeRequired = 'Employee required';
const statusRequired = 'Status required';
const ticketStatusClosed =
  'Status must be Closed successfully or Closed unsuccessfully';

/**
 * Crear ticket por usuario:
 * - Se introduce "description", validar que no este vacia.
 * - Validar que el usuario exista.
 * - Validar que el requests id exista en el catalog.
 * - El ticket se crea con un status "wait" por default.
 */
const createTicket = async (req, res) => {
  try {
    const { body, params } = req;

    if (isEmpty(body.description)) return res.status(400).send(descRequired);

    const [user, request] = await Promise.all([
      models.User.findByPk(params.userId),
      models.Request.findByPk(body.requestId)
    ]);

    if (!user) return res.status(404).send(userNotFound);
    if (!request) return res.status(404).send(requestNotFound);

    body.statusId = 1;
    body.userId = params.userId;

    const ticket = await models.Ticket.create(body);

    res.send(ticket).status(201);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

/**
 * Listar tickets:
 */
const list = async (req, res) => {
  try {
    const data = await models.Ticket.findAll({
      attributes: ['id', 'description', 'feedback'],
      include: [
        {
          model: models.Status,
          attributes: ['id', 'value']
        },
        {
          model: models.Request,
          attributes: ['id', 'value']
        },
        {
          model: models.User,
          attributes: ['id', 'name', 'email']
        },
        {
          model: models.Employee,
          attributes: ['id', 'name', 'email']
        }
      ]
    });

    res.send(data).status(200);
  } catch (error) {
    res.status(500).send(err.errors[0].message);
  }
};

/**
 * Listar detalle de ticket:
 */
const detail = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const data = await models.Ticket.findByPk(ticketId, {
      attributes: ['id', 'description', 'feedback'],
      include: [
        {
          model: models.Status,
          attributes: ['id', 'value']
        },
        {
          model: models.Request,
          attributes: ['id', 'value']
        },
        {
          model: models.User,
          attributes: ['id', 'name', 'email']
        },
        {
          model: models.Employee,
          attributes: ['id', 'name', 'email']
        }
      ]
    });

    if (isEmpty(data)) return res.status(404).send(ticketNotFound);

    res.send(data).status(200);
  } catch (error) {
    res.status(500).send(err.errors[0].message);
  }
};

/**
 * Contestar ticket por empleado:
 * - Se introduce "Feedback", validar feedback no este vacio.
 * - Validar que el empleado exista
 * - Validar que el ticker exista
 * - El ticket cambia el status "wait" por "Process".
 */
const responseTicket = async (req, res) => {
  try {
    const { body, params } = req;

    if (isEmpty(body.feedback)) return res.status(400).send(FeedbackRequired);
    if (isEmpty(body.employeeId)) return res.status(400).send(employeeRequired);

    const [employee, ticket] = await Promise.all([
      models.Employee.findByPk(body.employeeId),
      models.Ticket.findByPk(params.ticketId)
    ]);

    if (isEmpty(employee)) return res.status(404).send(employeeNotFound);
    if (isEmpty(ticket)) return res.status(404).send(ticketNotFound);

    body.statusId = 2;
    body.ticketId = params.ticketId;

    const data = await models.Ticket.update(body, {
      where: { id: params.ticketId }
    });

    res.send(data).status(201);
  } catch (error) {
    res.status(500).send(err.errors[0].message);
  }
};

/**
 * Cierre de ticket por usuario:
 * - Validar que el status exista
 * - Validar que el usuario exista
 * - Validar que el ticker exista
 * - El ticket cambia el status "Process" por "Closed successfully/Closed unsuccessfully".
 * - Validar que el estatus id corresponda a "Closed successfully/Closed unsuccessfully".
 */
const closeTicket = async (req, res) => {
  try {
    const { body, params } = req;

    if (isEmpty(body.statusId)) return res.status(400).send(statusRequired);

    const [user, status, ticket] = await Promise.all([
      models.User.findByPk(body.userId),
      models.Status.findByPk(body.statusId),
      models.Ticket.findByPk(params.ticketId)
    ]);

    if (isEmpty(user)) return res.status(404).send(userNotFound);
    if (isEmpty(status)) return res.status(404).send(statusNotFound);
    if (isEmpty(ticket)) return res.status(404).send(ticketNotFound);

    if (body.statusId !== 3 && body.statusId !== 4) {
      return res.status(400).send(ticketStatusClosed);
    }

    const data = await models.Ticket.update(body, {
      where: { id: params.ticketId }
    });

    res.send(data).status(201);
  } catch (error) {
    res.status(500).send(err.errors[0].message);
  }
};

export { createTicket, list, detail, responseTicket, closeTicket };
