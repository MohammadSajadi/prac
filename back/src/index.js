const dotenv = require("dotenv");
dotenv.config();
const app = require('./server');

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
  });