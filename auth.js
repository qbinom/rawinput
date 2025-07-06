document.addEventListener('DOMContentLoaded', () => {
  console.log("auth.js cargado");

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  if (!emailInput || !passwordInput) {
    console.error("No se encontraron los campos de email o contraseña.");
    return;
  }

  console.log("Campos encontrados");
  console.log("Supabase:", typeof supabase !== 'undefined' ? "inicializado" : "no definido");

  document.getElementById('register').addEventListener('click', async () => {
    console.log("Botón REGISTRARSE presionado");
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
    console.log("Botón LOGIN presionado");
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailInput.value,
      password: passwordInput.value,
    });
    if (error) {
      alert("Error al iniciar sesión: " + error.message);
      console.error(error);
    } else {
      alert("Inicio de sesión exitoso");
      window.location.href = "notas.html";
    }
  });
});