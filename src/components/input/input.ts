import { Block } from "../../blocks/block/block";
import template from "./input.hbs";
import "./input.scss";

type InputProps = {
  inputType: string;
  inputValue?: string;
  inputName: string;
  inputPlaceholder?: string;
  inputClass: string;
  events?: {
    blur: (e:Event) => void;
    focus: (e:Event) => void;
  };
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props, "input");
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
