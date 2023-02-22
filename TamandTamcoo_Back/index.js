const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

mongoose.set("strictQuery", false);

const cors = require('cors');
app.use(cors({
  credentials: true,
  origin: ['https://tamandtamcoo.vercel.app/', 'http://tamandtamcoo.vercel.app/'],
  optionsSuccessStatus: 200,
})
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/users", require("./routes/users"));
app.use("/api/backgrounds", require("./routes/backgrounds"));
// app.use('/auth/content', require('./routes/content'))
// app.use('/api/content', require('./routes/content'))
app.use("/api/timelines", require("./routes/timelines"));
app.use("/api/contents", require("./routes/contents"));
app.use("/file", express.static("file"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
