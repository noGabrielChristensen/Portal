import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const usernameInput = document.getElementById('username');
const addBtn = document.getElementById('addBtn');
const profilesList = document.getElementById('profilesList');

async function fetchProfiles() {
  const { data, error } = await supabase.from('profiles').select('*');
  if (error) console.error(error);
  profilesList.innerHTML = '';
  data.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.id} - ${p.username}`;
    profilesList.appendChild(li);
  });
}

addBtn.addEventListener('click', async () => {
  const username = usernameInput.value.trim();
  if (!username) return;
  const { data, error } = await supabase.from('profiles').insert([{ username }]);
  if (error) console.error(error);
  usernameInput.value = '';
  fetchProfiles();
});

// Load profiles on page load
fetchProfiles();
