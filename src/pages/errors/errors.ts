import { Block } from "../../blocks/block/block";
import template from "./errors.hbs";
import "./errors.scss";
import { Button } from "../../components/button/button";
import route from "../../blocks/router/Router";

type ErrorsPageProps = {
  title: string;
  subtitle: string;
}

export class ErrorsPage extends Block<ErrorsPageProps> {
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
          route.go("/messenger")
        },
      },
    });
  }
  render() {
    return this.compile(template, {});
  }
}
