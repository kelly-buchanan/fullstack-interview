const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let messages = [];

// TODO: Implement POST /messages endpoint

// TODO: Implement GET /search endpoint

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
