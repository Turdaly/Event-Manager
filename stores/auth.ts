export const useAuth = defineStore("auth", () => {
  class User {
    id: string | null = null;
    email: string = "";
    name: string = "";
    given_name: string = "";
    picture?: string;
  }
  const user = ref<User>(new User());

  const logout = () => {
    user.value = new User();
    const token = useCookie("token");
    const clientId = useCookie("clientId");
    token.value = undefined;
    clientId.value = undefined;
    navigateTo({ name: "login" });
  };

  const signUp = async () => {

  }
  return { user, logout };
});
