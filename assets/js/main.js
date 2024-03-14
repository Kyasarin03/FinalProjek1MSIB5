const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value === "") {
    alert("Masukkan Pesan Anda !!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputbox.value = "";
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  const tasks = Array.from(listcontainer.querySelectorAll("li"));
  const data = tasks.map((task) => task.outerHTML).join("");
  localStorage.setItem("data", data);
}

function showTask() {
  const data = localStorage.getItem("data");
  if (data) {
    listcontainer.innerHTML = data;
  }
}
showTask();

document.addEventListener("DOMContentLoaded", function () {
  const allLink = document.getElementById("all");
  const sistemInformasiLink = document.getElementById("sistem_informasi");
  const profilLink = document.getElementById("profil");
  const workList = document.querySelectorAll(".work");

  allLink.addEventListener("click", function (e) {
    e.preventDefault();
    filterWorks("all");
  });

  sistemInformasiLink.addEventListener("click", function (e) {
    e.preventDefault();
    filterWorks("sistem_informasi");
  });

  profilLink.addEventListener("click", function (e) {
    e.preventDefault();
    filterWorks("profil");
  });

  function filterWorks(category) {
    workList.forEach(function (work) {
      if (category === "all" || work.id === category) {
        work.style.display = "block";
      } else {
        work.style.display = "none";
      }
    });
  }
});
