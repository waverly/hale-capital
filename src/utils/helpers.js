import React from "react";

export const getExtension = filename => filename.split(".").pop();

export const isImage = filename => {
  const ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case "jpg":
    case "jpeg":
    case "gif":
    case "bmp":
    case "png":
      return true;
  }
  return false;
};

export const isVideo = filename => {
  const ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case "m4v":
    case "avi":
    case "mpg":
    case "mp4":
      return true;
  }
  return false;
};

export const returnImage = (media, active) =>
  `<img
    className="slide"
    src=${media}
    style={{
      transition: "opacity 0.5s",
      opacity: ${active ? "1" : "0"}
    }}/>`;

export const returnVideo = (media, active) => (
  <video
    className="slide"
    playsInline
    autoPlay
    muted
    loop
    src={media}
    style={{
      transition: "opacity 0.5s",
      opacity: { active } ? "1" : "0",
      backgroundSize: "cover",
      top: "50%",
      left: "50%",
      minWidth: "100%",
      minHeight: "100%"
    }}
  />
);
