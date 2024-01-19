import { config } from "./config";
// esta funcion busca la lsta de usuarios
export const searchUsers = async (username) => {
  try {
    const response = await fetch(
      `${config.baseUrl}/search/users?q=${username}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

// esta funcion busca un usuario en especifico
export const searchUser = async (username) => {
  try {
    const response = await fetch(`${config.baseUrl}/users/${username}`);

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

// esta es la funcion de los repositorios

export const getRepos = async (username) => {
  try {
    const response = await fetch(
      `${config.baseUrl}/users/${username}/repos?sort=created`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
