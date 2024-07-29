export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");
  if (token.value) {
    if (to.name === "login" || to.name === "auth") {
      console.log("navigated to index page, authorized");
      return navigateTo({ name: "index" });
    }
  }
  // else {
  //   if (to.name !== "login" && to.name !== "auth") return navigateTo({ name: "login" });
  // }
});
