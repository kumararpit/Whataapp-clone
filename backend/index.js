const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/user");
const login = require("./routes/login");
const app = express();

//connect mongodb
mongoose
  .connect("mongodb://localhost/whatapp-clone", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.error("mongodb is not connected"));
app.use(express.json());
app.use("/api/user", user);
app.use("/api/login", login);
const port = process.env.Port || 5000;
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
