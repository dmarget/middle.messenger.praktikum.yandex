import { Block } from "../../blocks/block/block";
import template from "./profileData.hbs";
import "./profileData.scss";

type ProfileDataProps = {
  key: string;
  value: string;
}

export class ProfileData extends Block<ProfileDataProps> {
  constructor(props: ProfileDataProps) {
    super(props, "p");
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
