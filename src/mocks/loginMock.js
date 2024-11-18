export const loginMock = async ({ email, password }) => {
  const mockUser = {
    email: "user@bellissare.com",
    password: "123456",
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === mockUser.email && password === mockUser.password) {
        resolve({ message: "Login realizado com sucesso!" });
      } else {
        reject({ message: "Credenciais inválidas!" });
      }
    }, 1000); // Simula um delay de 1 segundo
  });
};
