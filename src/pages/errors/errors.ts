import { Block } from "../../blocks/block/block";
import template from "./problem.hbs";
import "./problem.scss";
import { Button } from "../../components/button/button";
import { route } from "../../utils/route";
import { MessengerPage } from "../messenger/messenger";

type ProblemPageProps = {
  title: string;
  subtitle: string;
}

export class ProblemPage extends Block<ProblemPageProps> {
  constructor({ title = "404", subtitle = "не туда попали" }) {
    super({ title, subtitle }, "div");
  }
  protected init() {
    this.children.backLink = new Button({
      text: "К списку чатов",
      link: true,
      class: "link",
      events: {
        click: (e) => {
          e.preventDefault();
          const messengerPage = new MessengerPage({});
          route(messengerPage);
        },
      },
    });
  }
  render() {
    return this.compile(template, {});
  }
}
