const express = require("express");
const cors = require("cors");
const { supabase } = require("./supabase.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// GET all profiles
app.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new profile
app.post("/add-profile", async (req, res) => {
  const { id } = req.body; // send JSON { id } in POST request
  try {
    const { data, error } = await supabase
      .from("profiles")
      .insert([{ id, created_at: new Date() }]);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () =>
  console.log(`🔥 Mega App running at http://localhost:${PORT}`)
);
