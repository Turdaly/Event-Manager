export const useAuth = defineStore("auth", () => {
  class User {
    id: string | null = null;
    email: string = "";
    name: string = "";
    given_name: string = "";
    picture?: string;
  }
  const user = ref<User>(new User());
  const users = ref<Types.CustomUser[]>([]);
  const userUrl = "/users";
  const logout = () => {
    user.value = new User();
    const token = useCookie("token");
    const clientId = useCookie("clientId");
    token.value = undefined;
    clientId.value = undefined;
    navigateTo({ name: "login" });
  };
  const validateUserCredentials = (
    email: string,
    password: string
  ): boolean => {
    const isValid = users.value.find(
      (user) => user.email === email && user.pasword === "user@user.com"
    );
    if (isValid) return true;
    else return false;
  };
  const postUser = async <T>(data: Types.CustomUser) => {
    try {
      if (data) {
        const { $api } = useNuxtApp();
        const response = await $api.post(userUrl, data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUser = async () => {
    try {
      const { $api } = useNuxtApp();
      const response = await $api.get(userUrl);
      users.value = response.data;
      console.log("users.value", users.value);
    } catch (err) {
      console.log(err);
    }
  };

  return { user, users, logout, postUser, fetchUser, validateUserCredentials };
});
