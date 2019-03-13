import React from "react";
import { makeStyles } from "@material-ui/styles";
import Buttom from "../components/mainButtom";
import classNames from "classnames";
import moment from "moment";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",

    padding: "90px 0 0 0",
    fontFamily: "Helvetica",
    "& > *": {
      paddingBottom: 16
    }
  },
  userName: {
    fontSize: 21,
    fontWeight: "bold",
    "& i": {
      marginLeft: 5,
      color: "rgb(29 161 242)"
    }
  },
  userNickname: {
    fontSize: 14,
    color: "#657786",
    "& i": {
      marginRight: 5
    }
  },
  link: {
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer"
    }
  }
});

export default ({ user }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.userName}>
          {user &&
            (user.firstName && user.lastName
              ? `${user.firstName} ${user.lastName}`
              : "")}
        </p>
        <p className={classes.userNickname}>{`@${user && user.name}`}</p>
      </div>
      <p>{`${user && user.bio ? user.bio : ""}`}</p>
      <p className={classes.userNickname}>
        <i className="fas fa-map-marker-alt" />
        {user &&
          (user.city && user.county && user.state
            ? `${user.city}/${user.county} - ${user.state}`
            : "")}
      </p>
      <p className={classNames(classes.userNickname, classes.link)}>
        <i className="fas fa-link" />
        {`${user && user.site ? user.site : ""}`}
      </p>
      <p className={classes.userNickname}>
        <i className="far fa-calendar-alt" />
        {`Joined ${user && moment(user.joinDate).format("MMM DD")}`}
      </p>
      <Buttom type="fill" text="Tweet to Kauly Bohm" width={200} />
    </div>
  );
};
