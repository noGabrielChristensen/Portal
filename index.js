// index.js
const express = require("express");
const { supabase } = require("./supabase.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Test route – fetch all profiles from Supabase
app.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to insert a new profile via POST (optional)
app.post("/add-profile", async (req, res) => {
  const { uuid } = req.body; // Only uuid needed for now
  try {
    const { data, error } = await supabase
      .from("profiles")
      .insert([{ uuid, created_at: new Date() }]);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// NEW ROUTE – create first profile via GET using only uuid
app.get("/create-profile", async (req, res) => {
  try {
    const { data, error } = await supabase.from("profiles").insert([
      {
        uuid: "first-profile-001"
      }
    ]);
    if (error) throw error;
    res.send("✅ Profile created: " + JSON.stringify(data));
  } catch (err) {
    res.status(500).send("❌ Error: " + err.message);
  }
});

// Start the server
app.listen(PORT, () =>
  console.log(`🔥 Mega App running at http://localhost:${PORT}`)
);
