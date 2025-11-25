const users = [
  { id: 1, name: "Ana", email: "ana@example.com" },
  { id: 2, name: "Luis", email: "luis@example.com" },
  { id: 3, name: "Maria", email: "maria@example.com" },
  { id: 4, name: "Carlos", email: "carlos@example.com" },
  { id: 5, name: "Sofia", email: "sofia@example.com" },
  { id: 6, name: "Pedro", email: "pedro@example.com" },
  { id: 7, name: "Lucia", email: "lucia@example.com" },
  { id: 8, name: "Jorge", email: "jorge@example.com" },
  { id: 9, name: "Elena", email: "elena@example.com" },
  { id: 10, name: "Miguel", email: "miguel@example.com" },
];

function generateComponentUserCards(users) {
  const container = document.createElement("div");
  container.className = "row g-3 mt-4"; // Bootstrap grid with gap

  users.forEach((user) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-5 col-lg-3";

    const card = document.createElement("div");
    card.className = "card h-100";

    card.innerHTML = `
            <img src="https://i.pravatar.cc/150?img=${user.id}" class="card-img-top" alt="Avatar de ${user.name}">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">ID: ${user.id}</h6>
                <p class="card-text">Email: ${user.email}</p>
            </div>
        `;

    col.appendChild(card);
    container.appendChild(col);
  });

  return container;
}

// Evento de carga de la ventana
window.onload = function () {
  const app = document.querySelector(".container-fluid");
  // limpia el contenido del nodo app ("elimina todos los hijos")
  app.innerHTML = "";
  const userCardsComponent = generateComponentUserCards(users);
  app.appendChild(userCardsComponent);
};
