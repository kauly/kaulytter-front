import React from "react";
import { Button } from "@material-ui/core";

const buttonStyle = (type, width) => {
  return {
    borderRadius: "40px",
    border: "2px solid rgb(29 161 242)",
    backgroundColor: type === "outline" ? "white" : "rgb(29 161 242)",
    textTransform: "capitalize",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: type === "outline" ? "rgb(29 161 242)" : "white",
    width
  };
};

const TwitterButton = ({ text, type, width, action, ap }) => {
  if (action) {
    return (
      <Button
        style={buttonStyle(type, width)}
        component="span"
        onClick={() => action(ap)}
      >
        {text}
      </Button>
    );
  }
  return (
    <Button style={buttonStyle(type, width)} component="span">
      {text}
    </Button>
  );
};

export default TwitterButton;
