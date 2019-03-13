import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import logo from "../img/user.png";

const useStyles = makeStyles({
  container: {
    display: "flex",

    flexWrap: "wrap",
    justifyContent: "space-around",
    "& img": {
      widht: 63,
      height: 63,
      borderRadius: 20,
      margin: "2px 2px 0 0"
    },
    marginBottom: 30
  },
  text: {
    fontFamily: "Helvetica",
    fontSize: 14,
    color: "#1DA1F2",
    marginTop: 16,
    "& i": {
      marginRight: 5
    }
  }
});

export default () => {
  const classes = useStyles();
  return (
    <Fragment>
      <p className={classes.text}>
        <i className="far fa-image" />6 Photos and Videos
      </p>

      <div className={classes.container}>
        <img src={logo} alt="carrousel" />
        <img src={logo} alt="carrousel" />
        <img src={logo} alt="carrousel" />
        <img src={logo} alt="carrousel" />
        <img src={logo} alt="carrousel" />
        <img src={logo} alt="carrousel" />
      </div>
    </Fragment>
  );
};
