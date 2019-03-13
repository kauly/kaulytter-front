import React from "react";
import { Modal } from "@material-ui/core";
import Profile from "./ProfileSettings";
import Tweet from "./Twitter";
import { withStyles } from "@material-ui/core/styles";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 75,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
    "@media (max-width: 800px)": {
      width: "80%"
    }
  }
});

const ModaContainer = ({ open, type, classes, trigger, userName }) => {
  return (
    <Modal open={open} onClose={() => trigger(!open)}>
      <div style={getModalStyle()} className={classes.paper}>
        {type === "profile" ? (
          <Profile trigger={trigger} userName={userName} />
        ) : (
          <Tweet trigger={trigger} userName={userName} />
        )}

        <SimpleModalWrapped />
      </div>
    </Modal>
  );
};

const SimpleModalWrapped = withStyles(styles)(ModaContainer);
export default SimpleModalWrapped;
