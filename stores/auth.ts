export const useAuth = defineStore("auth", () => {
  // User data
  class User {
    id: string | null = null;
    email: string = "";
    name: string = "";
    given_name: string = "";
    picture?: string;
  }
  const user = ref<User>(new User());
  const users = ref<Types.CustomUser[]>([]);
  // url
  const userUrl = "/users";
  // nuxt.config
  const {
    public: { imageURL, fakeToken },
  } = useRuntimeConfig();

  // Actions
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
      (user) => user.email === email && user.pasword === password
    );
    if (isValid) {
      console.log("isValid");
      user.value.id = isValid.id;
      user.value.given_name = isValid.name;
      user.value.email = isValid.email;
      user.value.picture = imageURL as string;
      const token = useCookie("token");
      const clientId = useCookie("clientId");
      token.value = fakeToken;
      clientId.value = user.value.id;
      return true;
    }
    console.log("outside if");
    console.log("isValid", isValid);
    console.log("users", users.value);
    return false;
  };
  const postUser = async <T>(data: Types.CustomUser) => {
    try {
      if (data) {
        if (await isUserExists(data)) {
          console.log("this email is already exist");
          return false;
        } else {
          const { $api } = useNuxtApp();
          const response = await $api.post(userUrl, data);
          console.log("successfully added new user");
          navigateTo({ name: "login" });
          return true;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const isUserExists = async (data: Types.CustomUser): Promise<boolean> => {
    await fetchUser();
    const isValid = users.value.find((user) => user.email === data.email);
    if (isValid) return true;
    else return false;
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
