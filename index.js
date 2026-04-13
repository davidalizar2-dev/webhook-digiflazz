const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SERVER HIDUP 🚀");
});

app.post("/webhook", (req, res) => {
  console.log("DATA MASUK DARI DIGIFLAZZ");
  console.log(req.body);
  res.json({ status: "Oke" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
