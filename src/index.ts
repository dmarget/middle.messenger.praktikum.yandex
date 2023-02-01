import { SignIn } from "./pages/signIn/signIn";
import "./styles.scss";
import { route } from "./utils/route";

window.addEventListener("DOMContentLoaded", () => {
  const authorizationPage = new SignIn({
    title: "Авторизация",
  });

  route(authorizationPage);
});
