import { Block } from "../../blocks/block/block";
import template from "./signIn.hbs";
import { Input } from "../../components/input/input";
import { UserInfo } from "../../components/userInfo/userInfo";
import { Button } from "../../components/button/button";
import { UserAction } from "../../components/userAction/userAction";
import {
  onSubmit,
  validateOnBlur,
} from "../../blocks/formValidation/formValidation";
import Router from '../../blocks/router/Router';
import { ErrorInput } from "../../components/errorInput/errorInput";

type SignInPageProps = {
  title: string;
};

export class SignIn extends Block<SignInPageProps> {
  constructor(props: any) {
    super(props, "div");
  }

  init() {
    this.children.userInfo = new UserInfo({
      inputs: [
        new ErrorInput({
          labelText: "Логин",
          input: new Input({
            inputType: "text",
            inputName: "login",
            inputClass: "input input_fullWidth ",
            events: {
              blur: validateOnBlur,
              focus: validateOnBlur,
            },
          }),
        }),
        new ErrorInput({
          labelText: "Пароль",
          input: new Input({
            inputType: "password",
            inputName: "password",
            inputClass: "input input_fullWidth",
            events: {
              blur: validateOnBlur,
              focus: validateOnBlur,
            },
          }),
        }),
      ],
    });

    this.children.userAction = new UserAction({
      buttons: [
        new Button({
          text: "Войти",
          class: "button button_fullWidth user-info__action",
          events: {
            click: (e) => {
              onSubmit(e, "/messenger");
            },
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
              Router.go('/register')
            },
          },
        }),
      ],
    });
  }

  render() {
    return this.compile(template, { title: this.props.title });
  }
}
