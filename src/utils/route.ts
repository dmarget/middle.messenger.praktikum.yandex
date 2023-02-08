import { Block } from "../blocks/block/block";

export const route = (page:Block) => {
  const root = document.querySelector("#app")!;
  root.innerHTML = "";

  root.append(page.getContent());
};
