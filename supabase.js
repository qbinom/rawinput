// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// URL de tu proyecto Supabase
const supabaseUrl = 'https://byenalkrrkrhdxkyucyj.supabase.co'

// Clave pública anónima (la encontrás en Settings → API → Anon Public Key)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZW5hbGtycmtyaGR4a3l1Y3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMzQzODIsImV4cCI6MjA2NjcxMDM4Mn0.s_IySe5Pk87zhwiCMgdb5iKG2SKdgCK7-k953zqZloE
export const supabase = createClient(supabaseUrl, supabaseKey)