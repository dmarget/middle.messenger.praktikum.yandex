import { Block } from "../../blocks/block/block";
import template from "./profile.hbs";
import { UserInfo } from "../../components/userInfo/userInfo";
import { Button } from "../../components/button/button";
import { UserAction } from "../../components/userAction/userAction";
import route from "../../blocks/router/Router";
import { ProfileData } from "../../components/profileData/profileData";

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
              route.go('/register');
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
              route.go("/editPassword");
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
              route.go("/register");
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
