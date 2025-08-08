export const getRoot = (req, res) => {
  return res.status(200).send('I am get request.');
};

export const postRoot = (req, res) => {
  return res.status(200).send('I am post request.');
};