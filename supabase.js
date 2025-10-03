const { createClient } = require("@supabase/supabase-js");

// Use your Supabase URL and anon key directly if you want
const supabase = createClient(
  "https://hrkwjmdaalvxkuxbqxvu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhya3dqbWRhYWx2eGt1eGJxeHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwODQ0MDIsImV4cCI6MjA3NDY2MDQwMn0.jxpqqeeoK--xl2nTkrQVWCKZYoqs5Dpu8AeMjPbbcpE"
);

module.exports = { supabase };
