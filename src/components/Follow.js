import React from "react";
import { Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../img/user.png";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justiftContent: "center",
    padding: 10,
    fontFamily: "Helvetica",
    fontWeight: "bold"
  },
  main: {
    fontSize: 21,
    textTransform: "capitalize",
    paddingBottom: 10
  },
  img: {
    widht: 43,
    height: 43,
    borderRadius: "50%",
    paddingRight: 5
  },
  name: {
    fontSize: 15,
    textTransform: "capitalize",
    paddingBottom: 5
  },
  userContainer: {
    display: "flex",
    borderBottom: "1px solid #E1E8ED",
    alignItems: "center",
    justiftContent: "center",
    padding: 3,
    marginBottom: 10
  },
  userInfo: {
    display: "flex",
    flexDirection: "column"
  }
});

const buttonStyle = {
  borderRadius: "40px",
  border: "1px solid rgb(29 161 242)",
  backgroundColor: "white",
  textTransform: "capitalize",
  fontSize: 13,
  fontWeight: "bold",
  fontFamily: "Helvetica",
  color: "rgb(29 161 242)",
  padding: 5
};

export default () => {
  const classes = useStyles();
  const User = () => (
    <div className={classes.userContainer}>
      <img src={logo} className={classes.img} alt="user" />
      <div className={classes.userInfo}>
        <p className={classes.name}>kauly bohm</p>
        <Button style={buttonStyle}>follow</Button>
      </div>
    </div>
  );
  return (
    <Card className={classes.container}>
      <p className={classes.main}>who to follow</p>
      <User />
      <User />
      <User />
    </Card>
  );
};
