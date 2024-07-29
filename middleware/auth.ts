export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");
  if (token.value) {
    console.log("to", to);
    console.log(from);
    if (to.name === "login" || to.name === "auth") {
      console.log("navigated to index page, authorized");
      return navigateTo({ name: "index" });
    }
  }
});
