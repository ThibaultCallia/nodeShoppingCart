import express from "express";

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
