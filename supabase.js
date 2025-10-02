// supabase.js
import { createClient } from "@supabase/supabase-js";

// Grove’s Supabase vault
const SUPABASE_URL = "https://hrkwjmdaalvxkuxbqxvu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhya3dqbWRhYWx2eGt1eGJxeHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwODQ0MDIsImV4cCI6MjA3NDY2MDQwMn0.jxpqqeeoK--xl2nTkrQVWCKZYoqs5Dpu8AeMjPbbcpE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
