import Gig from '../models/Gig';

const getAll = async (req, res) => {
  console.log('ENTRAAAA!');

  try {
    const dato = await Gig.findAll();
    console.log('TCL: getAll -> dato', dato);
    res.send(200);
  } catch (err) {
    console.log('getAll', err);
    res.send(500);
  }
};

const add = (req, res) => {
  console.log('ENTRAAAA!');
  const data = {
    title: 'title',
    technologies: 'technologies',
    description: 'desc',
    budget: 'budget',
    contact_email: 'email'
  };

  Gig.create(data)
    .then(gig => res.send(gig))
    .catch(err => console.log('add', err));
};

export { getAll, add };
