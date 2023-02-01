import { Block } from "../../blocks/block/block";
import template from "./input.hbs";
import "./input.scss";

type InputProps = {
  labelClass?: string;
  labelText: string;
  inputType: string;
  inputValue?: string;
  inputName: string;
  inputPlaceholder?: string;
  inputClass: string;
  inputWrapperClass?: string;
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props, "input");
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
