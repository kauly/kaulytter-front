import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CircularProgress } from "@material-ui/core";
import moment from "moment";
const useStyle = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    padding: 10,
    border: "1px solid black",
    borderRadius: 5,
    fontFamily: "Helvetica",

    fontSize: 15,
    marginBottom: 20
  },
  content: {
    margin: "20px 0",
    fontSize: 18
  },
  header: {
    display: "flex",
    width: "100%",
    "& span": {
      fontSize: 22,
      color: "#1DA1F2",
      margin: "0 0 0 auto"
    }
  },
  bottom: {
    display: "flex",
    "& span": {
      marginRight: 20,
      "&:hover": {
        color: "rgb(29 161 242)",
        cursor: "pointer"
      },
      "& i": {
        marginRight: 5
      }
    },
    "& span:nth-last-child(2)": {
      margin: "0 auto 0 0"
    }
  },
  img: {
    widht: 33,
    height: 33,
    borderRadius: "50%",
    paddingRight: 5
  },
  name: {
    textTransform: "capitalize"
  },
  nick: {
    fontSize: 12,
    color: "rgb(101 119 134)"
  },
  userContainer: {
    display: "flex",

    padding: 3
  },
  userInfo: {
    display: "flex",
    flexDirection: "column"
  }
});

export default ({ tweet, user }) => {
  const classes = useStyle();
  const User = () => (
    <div className={classes.userContainer}>
      <img src={user.profileImg} className={classes.img} alt="user" />
      <div className={classes.userInfo}>
        <p className={classes.name}>{`${user.firstName} ${user.lastName}`}</p>
        <p className={classes.nick}>{`@${user.name}`}</p>
      </div>
    </div>
  );
  return tweet ? (
    <div className={classes.container}>
      <div className={classes.header}>
        <User />
        <span>
          <i className="fab fa-twitter" />
        </span>
      </div>
      <div className={classes.content}>{tweet.content}</div>
      <div className={classes.bottom}>
        <span>
          <i className="far fa-comment" />
          12
        </span>
        <span>
          <i className="far fa-heart" />
          12
        </span>
        <span>
          <i className="fas fa-retweet" />
          12
        </span>
        <span>
          <i className="far fa-envelope" />
        </span>

        <span>{moment(tweet.date).format("DD MMM YYYY")}</span>
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
};
