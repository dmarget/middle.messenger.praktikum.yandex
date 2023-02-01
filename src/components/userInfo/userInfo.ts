import { Block } from "../../blocks/block/block";
import template from "./userInfo.hbs";
import { Input } from "../input/input";
import { ProfileData } from "../profileData/profileData";
import './userInfo.scss';

type UserInfoProps = {
  inputs?: Input[];
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
