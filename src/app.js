
// Evento de carga de la ventana
window.onload = function () {
  const container = document.querySelector(".container-fluid");

  const displayCounter = document.createElement("h2")
  displayCounter.textContent = "0"
  displayCounter.className = 'mt-4'

  const playButton = this.document.createElement("button")
  playButton.textContent = 'Iniciar'
  playButton.className = "btn btn-success m-2"

  const stopButton = this.document.createElement("button")
  stopButton.textContent = 'Parar'
  stopButton.className = "btn btn-danger m-2"

  const restartButton = this.document.createElement("button")
  restartButton.textContent = 'Reiniciar'
  restartButton.className = "btn btn-warning m-2"

  const backButton = this.document.createElement("button")
  backButton.textContent = 'Cuanta atras'
  backButton.className = "btn btn-primary m-2"

  container.appendChild(displayCounter)
  container.appendChild(playButton)
  container.appendChild(stopButton)
  container.appendChild(restartButton)
  container.appendChild(backButton)

  // LOGICA

  let counter = 0
  let interval = null

  playButton.addEventListener('click', () => {
    if (!interval) {
      interval = setInterval(() => {
        counter++
        displayCounter.textContent = counter
      }, 1000)
    }
  })

  stopButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = null
  })

  restartButton.addEventListener('click', () => {
    clearInterval(interval)
    counter = 0
    displayCounter.textContent = counter
    interval = setInterval(() => {
      counter++
      displayCounter.textContent = counter
    }, 1000)

  })

  backButton.addEventListener('click', () => {
    console.log("ENTRAMOS AL EVENTO")
    clearInterval(interval)
    interval = setInterval(() => {
      counter--
      displayCounter.textContent = counter

      if (counter === 0) {
        clearInterval(interval)
        interval = null
      }
    }, 1000)



  })

};
