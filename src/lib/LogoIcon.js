import React from "react";
import { LOGO_ICON_MAP } from "./constant";

const FileIcon = ({ type = "box" }) => {
  const logoImg = LOGO_ICON_MAP[type] || LOGO_ICON_MAP["box"];

  return (
    <img src={logoImg} />
  )
};

export default FileIcon;
