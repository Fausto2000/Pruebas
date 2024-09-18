function getWeather(city) {
    const apiKey = 'TU_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const temp = data.main.temp;
          const weather = data.weather[0].description;
          document.getElementById('status').textContent = `El clima en ${city} es de ${temp}°C con ${weather}.`;
        } else {
          document.getElementById('status').textContent = "No pude encontrar la ciudad.";
        }
      })
      .catch(error => {
        document.getElementById('status').textContent = "Hubo un error al consultar el clima.";
      });
  }
  
  // En el procesamiento de comandos, puedes llamar esta función
  function processCommand(command) {
    if (command.includes('clima en')) {
      const city = command.split('clima en ')[1];
      getWeather(city);
    }
    // Otros comandos...
  }
  