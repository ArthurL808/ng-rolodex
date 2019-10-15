const express = require("express");
const bodyParser = require("body-parser");
const dbDecorator = require("./database/decorator");
const contactRoutes = require('./routes/contacts')

const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(dbDecorator);

app.use("/api/contact", contactRoutes)

app.listen(PORT, () => {
  console.log(`server started on PORT:${PORT}`);
});
