// supabase.js

// URL y clave pública del proyecto RAW_INPUT en Supabase
const supabaseUrl = 'https://byenalrkrkrhdxkyucyj.supabase.co';
const supabaseKey = 'eyJhbgciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZW5hbHJrcmtyaGR4a3l1Y3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgMzgzNTg4LCJleHAiOjIwMzM5NTk1ODh9.K0y05P9hvn3xqXo3gOp6LoF5ghKHid7fYHdL7UsXlsQ';

// Creamos el cliente y lo asignamos al objeto global "window" para que auth.js lo pueda usar
window.supabase = supabase = supabase.createClient(supabaseUrl, supabaseKey);

