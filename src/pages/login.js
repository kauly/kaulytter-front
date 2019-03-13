import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Grid, CircularProgress } from "@material-ui/core";
import logo from "../img/logo_blue.png";
import classNames from "classnames";
import API from "../utils/util";
import TwitterButton from "../components/twitterButton";

const colors = {
  primary: "#1DA1F2",
  secondary: "#14171A"
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 15
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: colors.secondary
  },
  titleLarge: {
    fontSize: 30
  },
  error: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "red",
    fontSize: 15
  },

  inputsSize: {
    width: 250
  }
});

export default ({ history }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const signin = async dp => {
    setLoading(true);
    try {
      const request = await API.post(`/auth/${dp}`, {
        name: values.name,
        password: values.password
      });
      if (!request.data.success) {
        throw request.data.content;
      }
      localStorage.setItem("token", request.data.content.token);
      localStorage.setItem("userName", request.data.content.userName);

      history.push(`/`);
    } catch (err) {
      setErr(err);
    }
    setLoading(false);
  };

  return (
    <div className={classes.container}>
      <img height="80" width="80" src={logo} />
      <p className={classNames(classes.title, classes.titleLarge)}>
        Entrar no Twitter.
      </p>
      <Grid container spacing={32} direction="column" alignItems="center">
        <Grid item>
          <TextField
            id="name"
            value={values.name}
            onChange={handleChange("name")}
            label="Nome"
            className={classes.inputsSize}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            type="password"
            value={values.password}
            onChange={handleChange("password")}
            label="Senha"
            className={classes.inputsSize}
          />
        </Grid>
        {err && (
          <Grid item>
            <p className={classes.error}>{err}</p>
          </Grid>
        )}
        {loading ? (
          <CircularProgress />
        ) : (
          <Fragment>
            <Grid item>
              <TwitterButton
                type="outline"
                values={{ name: values.name, password: values.password }}
                action={signin}
                dp="signin"
                text="sign in"
              />
            </Grid>
            <Grid item>
              <TwitterButton
                type="fill"
                values={{ name: values.name, password: values.password }}
                action={signin}
                dp="signup"
                text="sign up"
              />
            </Grid>
          </Fragment>
        )}
      </Grid>
    </div>
  );
};
