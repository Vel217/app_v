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

export const getProfile = async () => {
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

export const changeProfile = async (
  firstName,
  secondName,
  login,
  email,
  phone
) => {
  const host = "https://ya-praktikum.tech";
  const url = `${host}/api/v2/user/profile`;
  const data = {
    first_name: firstName,
    second_name: secondName,
    login: login,
    email: email,
    phone: phone,
    display_name: `${firstName} ${secondName}`,
  };
  const response = await fetch(url, {
    method: "PUT",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};

export const changePassword = async (oldPassword, newPassword) => {
  const host = "https://ya-praktikum.tech";
  const url = `${host}/api/v2/user/password`;
  const data = {
    oldPassword: oldPassword,
    newPassword: newPassword,
  };
  const response = await fetch(url, {
    method: "PUT",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};

export const createChat = async (nameChat) => {
  const host = "https://ya-praktikum.tech";
  const url = `${host}/api/v2/chats`;
  const data = {
    title: nameChat,
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

export const searchUser = async (personName) => {
  const host = "https://ya-praktikum.tech";
  const url = `${host}/api/v2/user/search`;
  const data = {
    login: personName,
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

export const addUserToChat = async (personId, chatId) => {
  const host = "https://ya-praktikum.tech";
  const url = `${host}/api/v2/chats/users`;
  const data = {
    users: [personId],
    chatId: chatId,
  };
  const response = await fetch(url, {
    method: "PUT",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};
