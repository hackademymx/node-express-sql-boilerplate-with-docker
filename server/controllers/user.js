import models from '../models';

/** Example controller */
const getUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

/** Example controller */
const getUserById = async (req, res) => {
  try {
    const users = await models.User.findByPk(req.params.userId);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getUsers, getUserById };
