import { Block } from "../../blocks/block/block";
import template from "./signIn.hbs";
import { Input } from "../../components/input/input";
import { UserInfo } from "../../components/userInfo/userInfo";
import { Button } from "../../components/button/button";
import { UserAction } from "../../components/userAction/userAction";
import { FormValidator } from "../../blocks/formValidation/formValidation";
import { route } from "../../utils/route";
import { SignInPage } from "../signUp/signUp";
import { MessengerPage } from "../messenger/messenger";

type SignInPageProps = {
  title: string;
}

export class SignIn extends Block<SignInPageProps> {
  constructor(props:any) {
    super(props, "div");
  }

  init() {
    this.children.userInfo = new UserInfo({
      inputs: [
        new Input({
          labelText: "Логин",
          inputType: "text",
          inputName: "login",
          inputClass: "input input_fullWidth ",
          inputWrapperClass: "user-info__input",
        }),
        new Input({
          labelText: "Пароль",
          inputType: "password",
          inputName: "password",
          inputClass: "input input_fullWidth",
          inputWrapperClass: "user-info__input",
        }),
      ],
    });

    this.children.userAction = new UserAction({
      buttons: [
        new Button({
          text: "Войти",
          class: "button button_fullWidth user-info__action",
          events: {
            click: () => {},
          },
        }),
        new Button({
          text: "Зарегистрироваться",
          link: true,
          class: "link user-info__action user-info__link",
          url: "../registration/registration.hbs",
          events: {
            click: (e) => {
              e.preventDefault();
              const registrationPage = new SignInPage({});
              route(registrationPage);
            },
          },
        }),
      ],
    });
  }

  addValidation(element: DocumentFragment) {
    const form = element.querySelector(".form") as HTMLFormElement;
    const messengerPage = new MessengerPage({});

    const formValidation = new FormValidator(form, ["login", "password"], () => route(messengerPage));
    formValidation.initialize();
  }

  render() {
    const element = this.compile(template, { title: this.props.title });
    this.addValidation(element);

    return element;
  }
}
