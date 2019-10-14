const express = require("express");
const bodyParser = require("body-parser");
const dbDecorator = require("./database/decorator");

const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(dbDecorator);

app.get("/api/contact", (req, res) => {
  return req.db.Contact.fetchAll()
    .then(results => {
    return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`server started on PORT:${PORT}`);
});
