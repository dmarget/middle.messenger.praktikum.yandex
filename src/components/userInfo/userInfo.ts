import { Block } from "../../blocks/block/block";
import template from "./userInfo.hbs";
import { ProfileData } from "../profileData/profileData";
import './userInfo.scss';
import { ErrorInput } from "../errorInput/errorInput";

type UserInfoProps = {
  inputs?: ErrorInput[];
  profileData?: ProfileData[];
}

export class UserInfo extends Block<UserInfoProps> {
  constructor(props: UserInfoProps) {
    super(props, "div");
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
