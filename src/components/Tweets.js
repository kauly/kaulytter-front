import React, { Fragment } from "react";
import { Paper, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import _ from "lodash";
import Tweet from "./Tweet";

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Helvetica",
    fontSize: 18,
    fontWeight: "bold",
    margin: "0 5% 5px 10%",
    textTransform: "capitalize",
    padding: 10,
    alignItems: "center"
  },
  content: {
    height: "100%"
  }
});

export default ({ user }) => {
  const classes = useStyles();
  return user ? (
    <Fragment>
      <Paper className={classes.main} elevation={1}>
        <p>tweets</p>
      </Paper>
      <Paper
        className={classNames(classes.main, classes.content)}
        elevation={1}
      >
        {user.twitters ? (
          _.orderBy(user.twitters, ["date"], ["desc"]).map(tweet => (
            <Tweet tweet={tweet} key={tweet._id} user={user} />
          ))
        ) : (
          <p>send your first tweet</p>
        )}
      </Paper>
    </Fragment>
  ) : (
    <CircularProgress />
  );
};
