document.addEventListener('DOMContentLoaded', () => {
  console.log("main.js cargado");

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  if (!window.Supabase) {
    console.error("Supabase aún no está disponible.");
    return;
  }

  console.log("Creando cliente Supabase...");
  const supabaseUrl = 'https://byenalrkrkrhdxkyucyj.supabase.co';
  const supabaseKey = 'eyJhbgciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZW5hbHJrcmtyaGR4a3l1Y3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MzM1ODgsImV4cCI6MjAzMzk1OTU4OH0.K0y05P9hvn3xqXo3gOp6LoF5ghKHid7fYHdL7UsXlsQ';
  const supabase = Supabase.createClient(supabaseUrl, supabaseKey);
  console.log("Cliente Supabase creado:", supabase);

  document.getElementById('register').addEventListener('click', async () => {
    console.log("Click en Registrarse");
    const { data, error } = await supabase.auth.signUp({
      email: emailInput.value,
      password: passwordInput.value,
    });
    if (error) {
      alert("Error al registrar: " + error.message);
      console.error(error);
    } else {
      alert("Revisá tu email para confirmar tu cuenta.");
    }
  });

  document.getElementById('login').addEventListener('click', async () => {
    console.log("Click en Login");
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailInput.value,
      password: passwordInput.value,
    });
    if (error) {
      alert("Error al iniciar sesión: " + error.message);
      console.error(error);
    } else {
      alert("Login exitoso");
      window.location.href = "notas.html";
    }
  });
});