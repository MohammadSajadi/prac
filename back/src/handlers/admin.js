const prisma = require('../db');

const createNewAdmin = async (req, res) => {

  const admin = await prisma.admin.create({
    data: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    },
  });

  res.json(admin);
};

const adminSignin = async (req, res) => {
  const admin = await prisma.admin.findUnique({
    where: { username: req.body.username },
  });

  if (req.body.password === admin.password) {
    res.json(admin);
  } else {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }
};

  module.exports = {createNewAdmin,adminSignin}
  