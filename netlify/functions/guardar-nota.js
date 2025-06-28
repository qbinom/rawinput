// netlify/functions/guardar-nota.js

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body || '{}');

  if (!context.clientContext || !context.clientContext.user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "No autorizado" })
    };
  }

  const nota = data.texto;

  // Por ahora solo mostramos la nota en consola (más adelante: guardarla)
  console.log("Nueva nota recibida:", nota);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Nota recibida correctamente" })
  };
};