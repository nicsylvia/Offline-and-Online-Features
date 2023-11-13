import { ChangeEvent } from "react";

export function getPlaceholder(e: ChangeEvent<HTMLInputElement>) {
  let value = "";
  let { target } = e;
  let { type } = target;
  if (type.length !== 0) {
    value = type;
  } else {
    value = "No PlaceHolder";
  }
  return value;
}
