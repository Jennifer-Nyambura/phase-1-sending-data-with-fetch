// Add your code here
// expose function for tests
if (typeof module !== "undefined" && module.exports) {
  module.exports = { submitData };
}
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const body = document.querySelector("body");
      const newElement = document.createElement("p");
      newElement.textContent = `ID: ${data.id}`;
      body.appendChild(newElement);
    })
    .catch((error) => {
      const body = document.querySelector("body");
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      body.appendChild(errorElement);
    });
}
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement("p");
      p.textContent = data.id;
      document.body.appendChild(p);
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement("p");
      p.textContent = data.id;
      document.body.appendChild(p);
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement("p");
      p.textContent = data.id;
      document.body.appendChild(p);
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const p = document.createElement("p");
      p.textContent = data.id;
      document.body.appendChild(p);
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
