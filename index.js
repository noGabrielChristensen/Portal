// index.js
import express from "express";
import { supabase } from "./supabase.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON (if you plan to insert data later)
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

// Example route to insert a new profile
app.post("/add-profile", async (req, res) => {
  const { uuid, name } = req.body; // send JSON { uuid, name } in POST request
  try {
    const { data, error } = await supabase
      .from("profiles")
      .insert([{ uuid, name, created_at: new Date() }]);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(PORT, () =>
  console.log(`🔥 Mega App running at http://localhost:${PORT}`)
);
