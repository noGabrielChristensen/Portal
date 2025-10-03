const express = require("express");
const cors = require("cors");
const { supabase } = require("./supabase");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Get all profiles
app.get("/profiles", async (req, res) => {
  try {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a profile
app.post("/add-profile", async (req, res) => {
  const { name } = req.body;
  try {
    const { data, error } = await supabase
      .from("profiles")
      .insert([{ name, id: crypto.randomUUID(), created_at: new Date() }]);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`🔥 Mega App running at http://localhost:${PORT}`));
