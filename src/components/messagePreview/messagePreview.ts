import { Block } from "../../blocks/block/block";
import template from "./messagePreview.hbs";
import "./messagePreview.scss";

type MessagePreviewProps = {
  previewTitle: string;
  previewDate: string;
  previewMessage: string;
  previewCount?: number;
}

export class MessagePreview extends Block<MessagePreviewProps> {
  constructor(props: MessagePreviewProps) {
    super(props, "div");
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
