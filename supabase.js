// supabase.js

// Creamos una instancia del cliente Supabase usando la librería cargada desde CDN.
// Esta versión es compatible con navegadores sin usar módulos ES.

// Reemplazá estas dos líneas con tu URL real y tu anon key:
const supabaseUrl = 'https://byenalrkrkrhdxkyucyj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZW5hbGtycmtyaGR4a3l1Y3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMzQzODIsImV4cCI6MjA2NjcxMDM4Mn0.s_IySe5Pk87zhwiCMgdb5iKG2SKdgCK7-k953zqZloE

// Inicializamos Supabase para poder usarlo en el resto del código
const supabase = supabase.createClient(supabaseUrl, supabaseKey);



