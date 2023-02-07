import { Block } from "../../blocks/block/block";
import { Input } from "../input/input";
import template from "../errorInput/errorInput.hbs";
import "./errorInput.scss";

type ErrorInputProps = {
  labelClass?: string;
  labelText: string;
  inputWrapperClass?: string;
  input: Input
}

export class ErrorInput extends Block<ErrorInputProps> {
  constructor(props: ErrorInputProps) {
    super(props, "div");
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
