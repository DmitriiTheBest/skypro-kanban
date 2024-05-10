// const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

const baseHost = "https://wedev-api.sky.pro/api/kanban";

const userHost = "https://wedev-api.sky.pro/api/user";

// authorization - авторизация
export function signIn({ login, password }) {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (!response.status === 400) {
      throw new Error("Wrong login or password");
    }
    return response.json();
  });
}

// get the tasks list - получение списка задач
export async function getTodos({ token }) {
  const response = await fetch(baseHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.status === 200) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  return data;
}

// a new user registration - регистрация нового пользователя
export function signUp({ login, name, password }) {
  return fetch(userHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  }).then((response) => {
    if (!response.status === 400) {
      throw new Error("User with this name already exists");
    }
    return response.json();
  });
}

// // add a new task into the list - добавление новой задачи в список
// export async function postTodo(text) {
//   const response = await fetch(baseHost, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: "POST",
//     body: JSON.stringify({
//       text,
//     }),
//   });

//   if (!response.status === 201) {
//     throw new Error("Something went wrong");
//   }

//   const data = await response.json();
//   return data;
// }

// // change the task - изменение задачи
// export async function putTodo({ text, id }) {
//   const response = await fetch(baseHost + `/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: "PUT",
//     body: JSON.stringify({
//       text,
//     }),
//   });

//   if (!response.status === 201) {
//     throw new Error("Something went wrong");
//   }

//   const data = await response.json();
//   return data;
// }

// // delete the task - удаление задачи
// export async function deleteTodo({ text, id }) {
//   const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method: "DELETE",
//     body: JSON.stringify({
//       text,
//     }),
//   });

//   if (!response.status === 201) {
//     throw new Error("Something went wrong");
//   }

//   const data = await response.json();
//   return data;
// }

// // get the users list
// export async function getUsersList() {
//   const response = await fetch(userHost, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!response.status === 200) {
//     throw new Error("Something went wrong");
//   }

//   const data = await response.json();
//   return data;
// }

// done 
