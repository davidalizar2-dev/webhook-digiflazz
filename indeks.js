const express = require("express");
const app = express();

app.use(express.json());

// test server
app.get("/", (req, res) => {
  res.send("SERVER HIDUP");
});

// webhook digiflazz
app.post("/webhook", (req, res) => {
  console.log("DATA MASUK DARI DIGIFLAZZ");
  console.log(req.body);

  res.json({ status: "Oke" });
});

// port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
