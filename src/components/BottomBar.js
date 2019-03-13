import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import userDefault from "../img/user.png";

const colors = {
  eeLightGrey: "rgb(245 248 250)",
  darkGrey: "rgb(101 119 134)",
  blue: "rgb(29 161 242)"
};

const buttonStyle = {
  borderRadius: "40px",
  border: "2px solid rgb(29 161 242)",
  backgroundColor: "white",
  textTransform: "capitalize",
  fontSize: 15,
  fontWeight: "bold",
  fontFamily: "Helvetica",
  color: "rgb(29 161 242)"
};

export default ({ trigger, user, modalType }) => {
  const useStyles = makeStyles({
    container: {
      backgroundColor: colors.eeLightGrey,
      height: 50,
      display: "flex",
      alignItems: "center",
      padding: "0 100px",
      marginBottom: 5,
      border: "px solid green",
      "@media (max-width: 800px)": {
        marginBottom: 80
      }
    },
    navLinks: {
      color: colors.darkGrey,
      textAlign: "center",
      padding: "16px 16px",
      textDecoration: "none",
      fontSize: 13,
      fontFamily: "Helvetica",
      fontWeight: "bold",
      borderBottom: `3px solid ${colors.blue}`,

      marginLeft: 80,
      "@media (max-width: 800px)": {
        display: "none"
      }
    },

    profileImg: {
      width: 200,
      height: 200,
      border: "5px solid white",
      borderRadius: 200,
      "@media (max-width: 800px)": {}
    },

    leftItems: {
      display: "flex",
      margin: "0 0 0 auto",
      alignItems: "center"
    },
    coverStyle: {
      height: 300,
      backgroundColor: colors.blue,
      "@media (max-width: 800px)": {
        height: 150
      },

      "& img": {
        width: "100%",
        height: "100%",
        minWidth: "100%",
        minHeight: "100%"
      }
    }
  });
  const classes = useStyles();
  const modalTrigger = () => {
    modalType("profile");
    trigger(true);
  };
  return (
    <Fragment>
      <div className={classes.coverStyle}>
        <img src={user && user.coverImg} />
      </div>

      <div className={classes.container}>
        <img
          src={user && user.profileImg ? user.profileImg : userDefault}
          className={classes.profileImg}
        />
        <a href="#home" className={classes.navLinks}>
          Tweet
        </a>
        <div className={classes.leftItems}>
          <Button style={buttonStyle} onClick={() => modalTrigger()}>
            edit
          </Button>
        </div>
      </div>
    </Fragment>
  );
};
