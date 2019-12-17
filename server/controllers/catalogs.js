import models from '../models';

const listStatusTypes = async (req, res) => {
  try {
    const response = await models.Status.findAll({
      attributes: ['id', 'value']
    });
    res.send(response);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

const listRequestTypes = async (req, res) => {
  try {
    const response = await models.Request.findAll({
      attributes: ['id', 'value']
    });
    res.send(response);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

export { listStatusTypes, listRequestTypes };
