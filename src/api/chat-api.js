// export const login = (props) => {
//   let getId = new XMLHttpRequest();

//   getId.open("POST", "https://ya-praktikum.tech/api/v2/auth/signup");

//   try {
//     getId.send(props);
//     if (getId.status != 200) {
//       console.log(`Ошибка ${getId.status}: ${getId.statusText}`);
//     } else {
//       console.log(getId.response);
//     }
//   } catch (err) {
//     console.log("Запрос не удался");
//   }
// };
