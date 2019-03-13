import React from "react";
import { Button } from "@material-ui/core";

const style = type => {
  return {
    borderRadius: "40px",
    border: "2px solid rgb(29 161 242)",
    backgroundColor: type === "outline" ? "white" : "rgb(29 161 242)",
    width: 250,
    textTransform: "capitalize",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: type === "outline" ? "rgb(29 161 242)" : "white"
  };
};

export default ({ type, action, dp, text }) => (
  <Button style={style(type)} onClick={() => action(dp)}>
    {text}
  </Button>
);
