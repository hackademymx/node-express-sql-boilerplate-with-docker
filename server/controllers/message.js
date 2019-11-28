import models from '../models';

/** Example controller */
const getMessages = async (req, res) => {
  try {
    const messages = await models.Message.findAll();
    res.send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
};

/** Example controller */
const getMessageById = async (req, res) => {
  try {
    const message = await models.Message.findByPk(req.params.messageId);
    res.send(message);
  } catch (error) {
    res.status(500).send(error);
  }
};

/** Example controller */
const addMessage = async (req, res) => {
  try {
    const message = await models.Message.create({
      text: req.body.text,
      userId: req.body.userId
    });
    res.send(message);
  } catch (error) {
    res.status(500).send(error);
  }
};

/** Example controller */
const deleteMessage = async (req, res) => {
  try {
    const result = await models.Message.destroy({
      where: {
        id: req.params.messageId
      }
    });
    res.send(true);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getMessages, getMessageById, addMessage, deleteMessage };
