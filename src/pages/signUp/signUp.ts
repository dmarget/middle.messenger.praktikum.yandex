import { Block } from "../../blocks/block/block";
import template from "./signUp.hbs";
import { Input } from "../../components/input/input";
import { UserInfo } from "../../components/userInfo/userInfo";
import { Button } from "../../components/button/button";
import { UserAction } from "../../components/userAction/userAction";
import { ErrorInput } from "../../components/errorInput/errorInput";
import { onSubmit, validateOnBlur } from "../../blocks/formValidation/formValidation";
import { MessengerPage } from "../messenger/messenger";

export class SignInPage extends Block {
  constructor(props: any) {
    super("div", props);
  }

  init() {
    this.children.userInfo = new UserInfo({
      inputs: [
        new ErrorInput({
          labelText: "Имя",
          inputWrapperClass: "user-info__input",
          input: new Input({
            inputType: "text",
            inputName: "first_name",
            inputClass: "input input_fullWidth ",
            events: {
              blur: validateOnBlur,
              focus: validateOnBlur,
            },
          }),
        }),
        new ErrorInput({
          labelText: "Фамилия",
          inputWrapperClass: "user-info__input",
          input: new Input({
            inputType: "text",
            inputName: "second_name",
            inputClass: "input input_fullWidth ",
            events: {
              blur: validateOnBlur,
              focus: validateOnBlur,
            },
          }),
        }),
        new ErrorInput({
          labelText: "Логин",
          inputWrapperClass: "user-info__input",
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
          labelText: "Отображаемое имя",
          inputWrapperClass: "user-info__input",
          input: new Input({
            inputType: "text",
            inputName: "display_name",
            inputClass: "input input_fullWidth ",
            events: {
              blur: validateOnBlur,
              focus: validateOnBlur,
            },
          }),
        }),
        new ErrorInput({
          labelText: "Почта",
          inputWrapperClass: "user-info__input",
          input: new Input({
            inputType: "text",
            inputName: "email",
            inputClass: "input input_fullWidth ",
            events: {
              blur: validateOnBlur,
              focus: validateOnBlur,
            },
          }),
        }),
        new ErrorInput({
          labelText: "Телефон",
          inputWrapperClass: "user-info__input",
          input: new Input({
            inputType: "tel",
            inputName: "phone",
            inputClass: "input input_fullWidth ",
            events: {
              blur: validateOnBlur,
              focus: validateOnBlur,
            },
          }),
        }),
        new ErrorInput({
          labelText: "Пароль",
          inputWrapperClass: "user-info__input",
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
        new ErrorInput({
          labelText: "Пароль (ещё раз)",
          inputWrapperClass: "user-info__input",
          input: new Input({
            inputType: "password",
            inputName: "repeat_password",
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
          text: "Зарегистрироваться",
          class: "button button_fullWidth user-info__action",
          events: {
            click: (e) => {
              const messengerPage = new MessengerPage({});
              onSubmit(e, messengerPage);
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
