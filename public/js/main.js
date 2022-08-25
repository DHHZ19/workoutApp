const deleteBtn = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");
const deleteExerciseProf = document.querySelectorAll(".del")
const selected = document.querySelectorAll('span.selected')
const unSelected = document.querySelectorAll('span.non')
Array.from(unSelected).forEach((el) => {
  el.addEventListener('click', select)
})
Array.from(selected).forEach((el) => {
  el.addEventListener('click', unSelect)
})
Array.from(deleteExerciseProf).forEach((el) => {
  el.addEventListener('click', deleteExerciseProfile)
})
Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});

Array.from(todoItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});

Array.from(todoComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

async function deleteTodo() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,

      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function deleteExerciseProfile() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("/todos/deleteExerciseProfile", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,

      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function unSelect() {
  console.log('clicked unSelect')
  const id = this.parentNode.dataset.id;
  try {
    const response = await fetch("/todos/unSelect",{
      method: 'put',
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify({
        todoIdFromJSFile : id
      })
    })
    const data = await response.json();
    location.reload();
  } catch (error) {
    console.error(error)
  }
}

async function select() {
  console.log('clicked select')
  const id = this.parentNode.dataset.id;
  try {
    const response = await fetch("/todos/select",{
      method: 'put',
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify({
        todoIdFromJSFile : id
      })
    })
    const data = await response.json();
    console.log(data)
    location.reload();
  } catch (error) {
    console.error(error)
  }
}