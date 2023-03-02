export const signIn = async (login, password) => {
  const host = "https://ya-praktikum.tech";
  const url = `${host}/api/v2/auth/signin`;
  const data = {
    login,
    password,
  };
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const signUp = async (
  firstName,
  secondName,
  login,
  email,
  phone,
  password
) => {
  const host = "https://ya-praktikum.tech";
  const url = `${host}/api/v2/auth/signup`;
  const data = {
    first_name: firstName,
    second_name: secondName,
    login: login,
    email: email,
    phone: phone,
    password: password,
  };
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const profile = async () => {
  const host = "https://ya-praktikum.tech";
  const url = `${host}/api/v2/auth/user`;
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "include",
  });
  return response;
};

export const logOut = async () => {
  const host = "https://ya-praktikum.tech";
  const url = `${host}/api/v2/auth/logout`;

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  return response;
};
