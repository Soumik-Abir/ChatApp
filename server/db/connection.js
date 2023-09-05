const mongoose = require("mongoose");

const url = `mongodb+srv://chatapp_admin:admin1234@cluster0.7ftr0u4.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(error => console.log(error))


