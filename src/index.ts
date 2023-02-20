// import { SignIn } from "./pages/signIn/signIn";
// import "./styles.scss";
// import { route } from "./utils/route";

// window.addEventListener("DOMContentLoaded", () => {
//   const authorizationPage = new SignIn({
//     title: "Авторизация",
//   });

//   route(authorizationPage);
// });


import { SignIn } from '../src/pages/signIn/signIn';
import { SignUpPage } from '../src/pages/signUp/signUp';
import { ProfilePage } from '../src/pages/profile/profile';
import { MessengerPage } from '../src/pages/messenger/messenger';
import { ErrorsPage } from '../src/pages/errors/errors';
import { EditProfilePage } from '../src/pages/editProfile/editProfile';
import { EditPasswordPage } from '../src/pages/editPassword/editPassword';
import router from '../src/blocks/router/Router';


export enum Routes {
	SignIn = '/',
	Register = '/register',
	Messenger = '/messenger',
	Profile = '/profile',
	error404 = '/404',
	editProfile = "/editProfile",
	editPassword = "/editPassword"
}

window.addEventListener('DOMContentLoaded', async () => {
	router
		.use(Routes.SignIn, SignIn)
		.use(Routes.Register, SignUpPage)
		.use(Routes.Messenger, MessengerPage)
		.use(Routes.Profile, ProfilePage)
		.use(Routes.error404, ErrorsPage)
		.use(Routes.editPassword, EditPasswordPage)
		.use(Routes.editProfile, EditProfilePage);

  router.go('/');
});
