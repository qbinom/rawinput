// supabase.js

// Este archivo usa la forma recomendada por Supabase para el navegador

// Supabase URL y anon key del proyecto RAW_INPUT
const supabaseUrl = 'https://byenalrkrkrhdxkyucyj.supabase.co';
const supabaseKey = 'eyJhbgciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZW5hbHJrcmtyaGR4a3l1Y3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MzM1ODgsImV4cCI6MjAzMzk1OTU4OH0.K0y05P9hvn3xqXo3gOp6LoF5ghKHid7fYHdL7UsXlsQ';

// Creamos el cliente de Supabase y lo hacemos global
const supabase = window.supabase = Supabase.createClient(supabaseUrl, supabaseKey);