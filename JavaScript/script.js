const form = document.getElementById("task-form");
console.log(form);

const list = document.createElement("div"); //creo div
list.classList.add("list"); // aggiungo classe al div
const uList = document.createElement("ul"); //creo ul

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskInput = document.getElementById("task"); // prendo l'input
  const submitBtn = document.getElementById("submit-btn"); //prendo bottone
  const taskValue = taskInput.value;
  console.log(taskValue);

  const taskLi = document.createElement("li"); //creo li
  taskLi.innerText = taskInput.value; //assegno il valore dell input in li
  taskLi.classList.add("list-style");

  const removeList = document.createElement("button"); // creo bottone
  removeList.innerText = "elimina"; //aggiungo testo
  removeList.classList.add("removeBtn"); //aggiungo classe

  removeList.addEventListener("click", function () {
    taskLi.remove(); //funzione per rimuovere li
  });
  console.log(taskLi.innerText);

  taskLi.append(removeList); //appendo bottone a lista
  uList.append(taskLi); // inserisco il testo dentro li
  list.append(uList); //  appendo li a ul

  taskLi.addEventListener("click", function () {
    taskLi.classList.toggle("cestina"); //funzione per stile li
  });
  const taskSection = document.getElementById("task-section");
  console.log(taskSection);

  taskSection.appendChild(list);
  console.log(list);

  taskInput.value = "";
});
