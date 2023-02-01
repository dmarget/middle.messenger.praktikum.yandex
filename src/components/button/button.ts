import { Block } from "../../blocks/block/block";
import template from "./button.hbs";
import "./button.scss";

type ButtonProps = {
  text: string;
  class: string;
  link?: boolean;
  url?: string;
  events?: {
    click: (e: Event) => void;
  };
};

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props, "button");
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
