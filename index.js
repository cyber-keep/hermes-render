const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Example “Hermes-ready” endpoint
app.get("/", (req, res) => {
  res.send("Hermes is running on Render 🚀");
});

// Example API route (useful for agents later)
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.NODE_ENV || "development"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
