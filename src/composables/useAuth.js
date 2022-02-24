import {ref} from "vue";

const isAuthenticated = ref(false);

const user = ref("");

const usersFromDB = [
{username: "admin", password: "admin", name: "Administrator"},
{username: "aquint31", password: "abel123", name: "Administrator"},
];

const useAuth = () => {
    const login = (username, password) => {
      const userFromDB = usersFromDB.find(
        (user) => user.username === username && user.password === password
      );
  
      if (user) {
        isAuthenticated.value = true;
        user.value = user.name;
      }
    };
  
    const logout = () => {
      isAuthenticated.value = false;
      user.value = "";
    };
  
    return { isAuthenticated, login, logout, user };
  };
  
  export default useAuth;
