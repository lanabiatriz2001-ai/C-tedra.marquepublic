import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://glzgqlxfvsfivyydfsbz.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsemdxbHhmdnNmaXZ5eWRmc2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0OTU0OTMsImV4cCI6MjA5NjA3MTQ5M30.BZx5_kjbDZfNSccZOmkr46UwuRjyYpj_8OpUGmP43Yg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
