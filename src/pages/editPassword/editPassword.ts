import { Block } from "../../blocks/block/block";
import template from "./editPassword.hbs";
import { Input } from "../../components/input/input";
import { UserInfo } from "../../components/userInfo/userInfo";
import { Button } from "../../components/button/button";
import { UserAction } from "../../components/userAction/userAction";
import { route } from "../../utils/route";
import { ProfilePage } from "../profile/profile";
import { validateOnBlur } from "../../blocks/formValidation/formValidation";
import { ErrorInput } from "../../components/errorInput/errorInput";

export class EditPasswordPage extends Block {
  constructor(props: any) {
    super("div", props);
  }

  init() {
    this.children.userInfo = new UserInfo({
      inputs: [
        new ErrorInput({
          labelText: "Старый пароль",
          inputWrapperClass: "user-info__input",
          input: new Input({
            inputType: "password",
            inputName: "old_password",
            inputClass: "input input_fullWidth",
            events: {
              blur: validateOnBlur,
              focus: validateOnBlur,
            },
          }),
        }),
        new ErrorInput({
          labelText: "Новый пароль",
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
          labelText: "Новый пароль (ещё раз)",
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
          text: "Сохранить",
          class: "button button_fullWidth user-info__action",
          events: {
            click: () => {},
          },
        }),
        new Button({
          text: "Отмена",
          link: true,
          class: "link user-info__action user-info__link",
          url: "../registration/registration.hbs",
          events: {
            click: (e) => {
              e.preventDefault();
              const profilePage = new ProfilePage({});
              route(profilePage);
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
