import { Block } from "../../blocks/block/block";
import template from "./messenger.hbs";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { MessagePreview } from "../../components/messagePreview/messagePreview";
import "./messenger.scss";
import { ProfilePage } from "../profile/profile";
import { route } from "../../utils/route";
import { ErrorInput } from "../../components/errorInput/errorInput";

type MessengerPageProps = {
  title: string;
};

export class MessengerPage extends Block<MessengerPageProps> {
  constructor(props: any) {
    super(props, "div");
  }

  init() {
    this.children.messagePreviews = [
      new MessagePreview({
        previewMessage: "Ivan",
        previewTitle: "Hello, World",
        previewDate: "15:31",
        previewCount: 4,
      }),
      new MessagePreview({
        previewMessage: "Alex",
        previewTitle: "Привет",
        previewDate: "15:31",
      }),
    ];
    this.children.profileLink = new Button({
      text: "Профиль >",
      link: true,
      class: "link chats__profile-link",
      events: {
        click: (e) => {
          e.preventDefault();
          const profilePage = new ProfilePage({});
          route(profilePage);
        },
      },
    });
    (this.children.searchInput = new ErrorInput({
      labelText: "Поиск",
      labelClass: "chats__search-label",
      input: new Input({
        inputType: "text",
        inputName: "message",
        inputClass: "input chats__search",
        inputPlaceholder: "Поиск чата",
      }),
    }));
    (this.children.inputMessage = new ErrorInput({
      labelText: "Сообщение",
      input: new Input({
        inputType: "text",
        inputName: "message",
        inputClass: "input input_fullWidth chat__input",
      }),
    }));
    (this.children.buttons = [
      new Button({
        text: "Отправить",
        class: "button chat__footer-button",
        events: {
          click: () => {},
        },
      }),
    ]);
  }

  render() {
    return this.compile(template, {});
  }
}
