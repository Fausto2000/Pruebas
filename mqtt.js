const client = mqtt.connect('wss://broker.hivemq.com:8000/mqtt');

client.on('connect', () => {
  console.log('Conectado a MQTT');
});

function controlDevice(device, action) {
  const topic = `home/${device}`;
  const message = action === 'encender' ? 'ON' : 'OFF';

  client.publish(topic, message);
  document.getElementById('status').textContent = `${device} ${action}ido.`;
}

// Procesar comandos para encender o apagar dispositivos
function processCommand(command) {
  if (command.includes('encender la luz')) {
    controlDevice('luz', 'encender');
  } else if (command.includes('apagar la luz')) {
    controlDevice('luz', 'apagar');
  }
  // Otros comandos...
}
