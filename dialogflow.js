async function callDialogflow(query) {
    const url = 'https://dialogflow.googleapis.com/v2/projects/TU_PROYECTO/agent/sessions/123456:detectIntent';
    const accessToken = 'TU_ACCESS_TOKEN';
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        queryInput: {
          text: {
            text: query,
            languageCode: 'es',
          }
        }
      })
    });
  
    const data = await response.json();
    return data.queryResult.fulfillmentText;
  }
  
  // Usar Dialogflow para procesar comandos
  function processCommand(command) {
    callDialogflow(command)
      .then(response => {
        document.getElementById('status').textContent = response;
      })
      .catch(error => {
        document.getElementById('status').textContent = "Hubo un error en el procesamiento de la respuesta.";
      });
  }
  