import models from '../../database/models';

export const addUser = async (req, res) => {
  try {
    const { body } = req;
    console.log('🚀 ~ file: user.js ~ line 6 ~ addUser ~ body', body);

    const createUser = await models.User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      age: body.age
    });

    res.status(201).send(createUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { params } = req;
    const user = await models.User.findByPk(params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
