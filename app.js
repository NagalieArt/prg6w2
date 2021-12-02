const express = require('express');
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/notes');

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("Get op /")
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const notesRouter = require("./routes/notesRoute")();

app.use("/api", notesRouter);