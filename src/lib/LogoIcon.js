import React from "react";
import { LOGO_ICON_MAP, getNameByType } from "./constant";

const FileIcon = ({ type = "box" }) => {
  const logoImg = LOGO_ICON_MAP[getNameByType(type)];

  return (
    <img src={logoImg} />
  )
};

export default FileIcon;
