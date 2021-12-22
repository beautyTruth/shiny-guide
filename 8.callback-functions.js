const getDataBtn = document.querySelector("button");
const cat = document.querySelector(".cat");
const dog = document.querySelector(".dog");

getDataBtn.addEventListener("click", getData);

function getData() {
  let getToDos = (blueBalls) => {
    const data = new XMLHttpRequest();

    data.addEventListener("readystatechange", function () {
      if (this.status === 200 && this.readyState === 4) {
        const dataRetrieved = JSON.parse(data.responseText);
        blueBalls(undefined, dataRetrieved);
      } else if (this.readyState === 4) {
        blueBalls("Error Fetching Data", undefined);
      }
    });

    data.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
    // data.open("GET", "https://jsonplaceholder.typicode.com/qwertytodos/", true);

    data.send();

    console.log(typeof blueBalls);
  };

  cat.classList.add("show");

  getToDos((error, toDoData) => {
    if (error) {
      console.log(error);
    } else {
      console.log(toDoData);
    }
  });

  dog.classList.add("show");
}

// get busy living or get busy dying
