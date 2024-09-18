// app.js
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = false;
recognition.lang = 'es-ES';

const startBtn = document.getElementById('start-btn');
const status = document.getElementById('status');

// Función para empezar el reconocimiento de voz
startBtn.addEventListener('click', () => {
  recognition.start();
  status.textContent = "Escuchando...";
});

// Manejar los resultados del reconocimiento de voz
recognition.addEventListener('result', (event) => {
  const transcript = event.results[0][0].transcript;
  status.textContent = `Dijiste: "${transcript}"`;

  // Aquí puedes procesar el comando y responder
  processCommand(transcript);
});

// Procesar el comando de voz
function processCommand(command) {
  if (command.includes('hora')) {
    const currentTime = new Date().toLocaleTimeString();
    status.textContent = `La hora actual es ${currentTime}`;
  } else if (command.includes('nombre')) {
    status.textContent = "Soy Yarvist, tu asistente.";
  } else {
    status.textContent = "Lo siento, no entendí el comando.";
  }
}

recognition.addEventListener('end', () => {
  status.textContent = "Haz clic en el botón para hablar de nuevo.";
});
