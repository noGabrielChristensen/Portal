// index.js
const express = require("express");
const cors = require("cors");
const { supabase } = require("./supabase.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Add CORS middleware
app.use(cors());
app.use(express.json());

// Test route – fetch all profiles
app.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example route – insert profile
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

app.listen(PORT, () => {
  console.log(`🔥 Mega App running at http://localhost:${PORT}`);
});
