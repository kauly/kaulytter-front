import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, InputAdornment, Avatar } from "@material-ui/core";
import userDefault from "../img/user.png";
import classNames from "classnames";
import MainButtom from "./mainButtom";

const colors = {
  eeLightGrey: "rgb(245 248 250)",
  darkGrey: "rgb(101 119 134)",
  blue: "rgb(29 161 242)"
};

const useStyles = makeStyles({
  container: {
    position: "fixed",
    width: "100%",
    backgroundColor: colors.eeLightGrey,
    height: 50,
    display: "flex",
    alignItems: "center",
    padding: "0 100px",
    zIndex: 1000,
    "@media (max-width: 800px)": {
      padding: "0 0",
      position: "static",
      justifyContent: "space-around"
    }
  },
  navLinks: {
    float: "left",
    display: "block",
    textDecoration: "none",
    color: colors.darkGrey,
    fontSize: 13,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textAlign: "center",
    padding: "16px 16px",
    "& a": {
      textDecoration: "none",
      color: colors.darkGrey
    },
    borderBottom: "3px solid transparent",

    "&:hover": {
      borderBottom: `3px solid ${colors.blue}`,
      color: colors.blue,
      "& a": {
        color: colors.blue
      }
    },
    "&:active": {
      borderBottom: `3px solid ${colors.blue}`,
      color: colors.blue
    },
    "& i": {
      paddingRight: 5
    },
    "@media (max-width: 800px)": {
      "& a": {
        display: "none"
      },
      "& i": {
        fontSize: 22
      }
    }
  },
  imgContainer: {
    padding: "16px 16px",
    color: colors.blue,
    fontSize: 19,
    margin: "auto",
    "@media (max-width: 800px)": {
      display: "none"
    }
  },
  search: {
    "& i": {
      color: colors.darkGrey
    },
    height: 30,
    fontSize: 9,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: colors.darkGrey
  },
  leftItems: {
    display: "flex",
    margin: "0 0 0 auto",
    alignItems: "center",
    "& > div": {
      marginRight: 16
    },
    "@media (max-width: 800px)": {
      display: "none"
    }
  }
});

export default ({ user, trigger, modalType }) => {
  const classes = useStyles();
  const modalTrigger = () => {
    modalType("tweet");
    trigger(true);
  };
  return (
    <div className={classes.container}>
      <span className={classes.navLinks}>
        <i className="fas fa-home" />
        <a href="#home">Home</a>
      </span>
      <span className={classes.navLinks}>
        <i className="fas fa-bolt" />
        <a href="#news">Moments</a>
      </span>
      <span className={classes.navLinks}>
        <i className="fas fa-bell" />
        <a href="#contact">Notifications</a>
      </span>
      <span className={classes.navLinks}>
        <i className="fas fa-envelope" />
        <a href="#contact">Messages</a>
      </span>

      <span className={classes.imgContainer}>
        <div>
          <i className="fab fa-twitter" />
        </div>
      </span>

      <div className={classes.leftItems}>
        <TextField
          variant="outlined"
          className={classNames(classes.search)}
          placeholder="Search Twitter"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <i className="fas fa-search" />
              </InputAdornment>
            )
          }}
        />

        <Avatar src={user && user.profileImg ? user.profileImg : userDefault} />
      </div>
      <MainButtom text="tweet" action={modalTrigger} />
    </div>
  );
};
