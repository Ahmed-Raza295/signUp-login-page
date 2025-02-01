

const {createClient} = supabase;
const supabaseUrl = 'https://kaiqlyflstpmchaqinbv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthaXFseWZsc3RwbWNoYXFpbmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2NjYzOTYsImV4cCI6MjA1MjI0MjM5Nn0.qeGqzSyotVBkzJmiOWG3V56l1tnJv778roDhvWmiqLQ"
const supabaseClient = createClient(supabaseUrl, supabaseKey);

window.supabase = supabaseClient;