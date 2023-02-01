import { Block } from "../../blocks/block/block";
import template from "./profile.hbs";
import { UserInfo } from "../../components/userInfo/userInfo";
import { Button } from "../../components/button/button";
import { UserAction } from "../../components/userAction/userAction";
import { SignInPage } from "../signUp/signUp";
import { route } from "../../utils/route";
import { ProfileData } from "../../components/profileData/profileData";
import { EditPasswordPage } from "../editPassword/editPassword";
import { EditProfilePage } from "../editProfile/editProfile";

// временное
const MOCK_DATA = {
  Почта: "email@example.com",
  Логин: "ivan",
  Имя: "Иван",
  Фамилия: "Иванов",
  "Имя в чате": "Иван",
  Телефон: "89100000000",
};

export class ProfilePage extends Block {
  constructor(props:any) {
    super("div", props);
  }

  init() {
    this.children.userInfo = new UserInfo({
      profileData: Object.entries(MOCK_DATA).map(([key, value]) => new ProfileData({ key, value })),
    });

    this.children.userAction = new UserAction({
      buttons: [
        new Button({
          text: "Изменить данные",
          link: true,
          class: "link user-info__action user-info__link",
          events: {
            click: (e) => {
              e.preventDefault();
              const editProfilePage = new EditProfilePage({
                title: "Регистрация",
              });
              route(editProfilePage);
            },
          },
        }),
        new Button({
          text: "Изменить пароль",
          link: true,
          class: "link user-info__action user-info__link",
          url: "../registration/registration.hbs",
          events: {
            click: (e) => {
              e.preventDefault();
              const editPasswordPage = new EditPasswordPage({});
              route(editPasswordPage);
            },
          },
        }),
        new Button({
          text: "Выйти",
          link: true,
          class: "link user-info__action user-info__link",
          url: "../registration/registration.hbs",
          events: {
            click: (e) => {
              e.preventDefault();
              const registrationPage = new SignInPage({
                title: "Регистрация",
              });
              route(registrationPage);
            },
          },
        }),
      ],
    });
  }

  render() {
    return this.compile(template, {});
  }
}
