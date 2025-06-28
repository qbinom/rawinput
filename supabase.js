// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// URL de tu proyecto Supabase
const supabaseUrl = 'https://byenalkrrkrhdxkyucyj.supabase.co'

// Clave pública anónima (la encontrás en Settings → API → Anon Public Key)
const supabaseKey = 'AQUÍ_VA_TU_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)