const prisma = require('../db');

const createNewUser = async (req, res) => {

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    },
  });

  res.json(user);
};

const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { username: req.body.username },
  });

  if (req.body.password === user.password) {
    res.json(user);
  } else {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }
};

  module.exports = {createNewUser,signin}
  