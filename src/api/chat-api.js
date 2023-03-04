const FETCH_COMMON_OPTIONS = {
  mode: "cors",
  credentials: "include",
  headers: {
    "content-type": "application/json",
  },
};

const FETCH_POST_OPTIONS = {
  method: "POST",
  ...FETCH_COMMON_OPTIONS,
};

const FETCH_PUT_OPTIONS = {
  method: "PUT",
  ...FETCH_COMMON_OPTIONS,
};

const host = "https://ya-praktikum.tech/api/v2";

export const signIn = async (login, password) => {
  const url = `${host}/auth/signin`;
  const data = {
    login,
    password,
  };
  const response = await fetch(url, {
    ...FETCH_POST_OPTIONS,
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
  const url = `${host}/auth/signup`;
  const data = {
    first_name: firstName,
    second_name: secondName,
    login: login,
    email: email,
    phone: phone,
    password: password,
  };
  const response = await fetch(url, {
    ...FETCH_POST_OPTIONS,
    body: JSON.stringify(data),
  });
  return response;
};

export const getProfile = async () => {
  const url = `${host}/auth/user`;
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "include",
  });
  return response;
};

export const logOut = async () => {
  const url = `${host}/auth/logout`;

  const response = await fetch(url, {
    ...FETCH_POST_OPTIONS,
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
  const url = `${host}/user/profile`;
  const data = {
    first_name: firstName,
    second_name: secondName,
    login: login,
    email: email,
    phone: phone,
    display_name: `${firstName} ${secondName}`,
  };
  const response = await fetch(url, {
    ...FETCH_PUT_OPTIONS,
    body: JSON.stringify(data),
  });

  return response;
};

export const changePassword = async (oldPassword, newPassword) => {
  const url = `${host}/user/password`;
  const data = {
    oldPassword: oldPassword,
    newPassword: newPassword,
  };
  const response = await fetch(url, {
    ...FETCH_PUT_OPTIONS,
    body: JSON.stringify(data),
  });

  return response;
};

export const createChat = async (nameChat) => {
  const url = `${host}/chats`;
  const data = {
    title: nameChat,
  };
  const response = await fetch(url, {
    ...FETCH_POST_OPTIONS,
    body: JSON.stringify(data),
  });

  return response;
};

export const searchUser = async (personName) => {
  const url = `${host}/user/search`;
  const data = {
    login: personName,
  };
  const response = await fetch(url, {
    ...FETCH_POST_OPTIONS,
    body: JSON.stringify(data),
  });

  return response;
};

export const addUserToChat = async (usersIds, chatId) => {
  const url = `${host}/chats/users`;
  const data = {
    users: usersIds,
    chatId: chatId,
  };
  const response = await fetch(url, {
    ...FETCH_PUT_OPTIONS,
    body: JSON.stringify(data),
  });

  return response;
};
