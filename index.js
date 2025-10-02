const express = require("express");
const { supabase } = require("./supabase");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/add-profile", async (req, res) => {
  const { uuid, name } = req.body;
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

app.listen(PORT, () =>
  console.log(`🔥 Mega App running at http://localhost:${PORT}`)
);
