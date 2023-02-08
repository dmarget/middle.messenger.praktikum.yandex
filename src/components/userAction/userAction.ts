import { Block } from "../../blocks/block/block";
import template from "./userAction.hbs";
import { Button } from "../button/button";

type UserActionProps = {
  buttons: Button[];
}

export class UserAction extends Block<UserActionProps> {
  constructor(props: UserActionProps) {
    super(props, "div");
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
