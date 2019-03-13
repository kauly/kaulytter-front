import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, TextField, CircularProgress, Button } from "@material-ui/core";
import API from "../utils/util";

const useStyle = makeStyles({
  textStyle: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 16
  },
  logo: {
    fontSize: 32,
    color: "#1DA1F2",
    textAlign: "center"
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    "& div": {
      marginRight: 10
    }
  }
});

const buttonStyle = type => {
  return {
    borderRadius: "40px",
    border: "2px solid rgb(29 161 242)",
    backgroundColor: type === "outline" ? "white" : "rgb(29 161 242)",
    textTransform: "capitalize",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: type === "outline" ? "rgb(29 161 242)" : "white"
  };
};

const MainButton = ({ type, text, action, ap }) => (
  <Button style={buttonStyle(type)} onClick={() => action(ap)}>
    {text}
  </Button>
);

export default ({ trigger, userName }) => {
  const classes = useStyle();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [contentErr, setContentErr] = useState(false);

  const errorText = "Add some text here.";

  const validate = () => {
    setLoading(true);
    if (content === "") {
      setLoading(false);
      setContentErr(true);
      return 0;
    } else {
      return addTwitter();
    }
  };

  const addTwitter = async () => {
    try {
      await API.post("/user/addtwitter", { content, name: userName });
      setLoading(false);
      trigger(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <Grid container spacing={32}>
        <Grid item className={classes.logo} xs={12}>
          <i className="fab fa-twitter" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={content}
            error={contentErr}
            helperText={contentErr && errorText}
            label="Text"
            className={classes.textStyle}
            onChange={e => setContent(e.target.value)}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <div className={classes.buttons}>
          <div>
            <MainButton
              type="outline"
              text="cancel"
              action={trigger}
              ap={false}
            />
          </div>

          {loading ? (
            <CircularProgress />
          ) : (
            <MainButton
              type="fill"
              text="save"
              action={validate}
              ap={content}
            />
          )}
        </div>
      </Grid>
    </Fragment>
  );
};
