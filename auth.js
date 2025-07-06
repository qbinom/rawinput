document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  document.getElementById('register').addEventListener('click', async () => {
    const { data, error } = await supabase.auth.signUp({
      email: emailInput.value,
      password: passwordInput.value,
    });
    if (error) {
      alert("Error al registrar: " + error.message);
    } else {
      alert("Revisá tu email para confirmar tu cuenta.");
    }
  });

  document.getElementById('login').addEventListener('click', async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailInput.value,
      password: passwordInput.value,
    });
    if (error) {
      alert("Error al iniciar sesión: " + error.message);
    } else {
      window.location.href = "notas.html";
    }
  });
});