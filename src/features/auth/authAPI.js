// // api calling
// export function createUser(userData) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/auth/signup", {
//       method: "POST",
//       credentials: "include",
//       body: JSON.stringify(userData),
//       headers: { "Content-type": "application/json" },
//     });
//     // onServer it will give relevant info only not password, it can be id or email
//     const data = await response.json();
//     resolve({ data });
//   });
// }
// export function updateUser(update) {
//   console.log("update from update uswer", update);
//   // data which we want to update= update an object consist of user id
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/user/" + update.id, {
//       method: "PATCH",
//       credentials: "include",
//       body: JSON.stringify(update),
//       headers: { "Content-type": "application/json" },
//     });
//     // onServer it will give relevant info only not password, it can be id or email
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// export function signOut(userId) {
//   return new Promise(async (resolve) => {
//     resolve({ data: "success" });
//   });
// }
