import models from '../../database/models';

export const addTeacher = async (req, res) => {
  try {
    const { body } = req;

    const createTeacher = await models.Teachers.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      age: body.age
    });

    return res.status(201).send(createTeacher);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const addCourse = async (req, res) => {
  try {
    const { body } = req;

    const createCourse = await models.Courses.create({
      name: body.name,
      credits: body.credits
    });

    return res.status(201).send(createCourse);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const addAssocitation = async (req, res) => {
  try {
    const { body } = req;

    const add = await models.CourseTeachers.create({
      teacherId: body.teacherId,
      courseId: body.courseId
    });

    return res.status(201).send(add);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getTeachers = async (req, res) => {
  console.log('<<<<< HERE >>>');
  try {
    const { params } = req;

    const getTeacher = await models.Teachers.findByPk(params.id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: models.Courses
      }
    });
    console.log('🚀 ~ file:  getTeacher', getTeacher);

    return res.status(201).send(getTeacher);
  } catch (error) {
    console.log('🚀 ~ error', error);
    return res.status(500).send(error);
  }
};
