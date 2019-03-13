import React, { useState, Fragment } from "react";
import { TextField, Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import _ from "lodash";
import API from "../utils/util";

import Button from "../components/mainButtom";

const useStyles = makeStyles({
  input: {
    display: "none"
  },
  textStyle: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 16
  },
  imgContainer: {
    display: "flex"
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

export default ({ trigger, userName }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    site: "",
    city: "",
    county: "",
    state: "",
    bio: "",
    profileImg: { name: "", file: null },
    coverImg: { name: "", file: null }
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleFile = name => e => {
    const file = e.target.files[0];
    setValues({ ...values, [name]: { name: file.name, file } });
  };

  const upload = async values => {
    setLoading(true);
    const newValues = {
      ...values,
      profileImg: values.profileImg.file,
      coverImg: values.coverImg.file
    };
    let formData = new FormData();
    formData.append("name", userName);
    _.forIn(_.omitBy(newValues, prop => prop === "" || prop === null), (v, k) =>
      formData.append(k, v)
    );
    try {
      const request = await API.post(
        `${process.env.REACT_APP_API}/api/user/update`,
        formData,
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      );
      setLoading(false);
      trigger(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Grid container spacing={32}>
        <Grid item className={classes.logo} xs={12}>
          <i className="fab fa-twitter" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={values.firstName}
            error={false}
            fullWidth
            label="Name"
            className={classes.textStyle}
            onChange={handleChange("firstName")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={values.lastName}
            error={false}
            fullWidth
            label="Lastname"
            className={classes.textStyle}
            onChange={handleChange("lastName")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={values.city}
            error={false}
            fullWidth
            label="City"
            className={classes.textStyle}
            onChange={handleChange("city")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={values.county}
            error={false}
            label="County"
            fullWidth
            className={classes.textStyle}
            onChange={handleChange("county")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={values.state}
            error={false}
            label="State"
            fullWidth
            className={classes.textStyle}
            onChange={handleChange("state")}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            value={values.site}
            error={false}
            fullWidth
            label="Site"
            className={classes.textStyle}
            onChange={handleChange("site")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={values.bio}
            label="Bio"
            multiline
            rowsMax={2}
            fullWidth
            className={classes.textStyle}
            onChange={handleChange("bio")}
          />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.imgContainer}>
            <TextField
              label="Cover Picture"
              value={values.coverImg.name}
              error={false}
              className={classes.textStyle}
            />
            <input
              accept="image/*"
              className={classes.input}
              id="cover"
              type="file"
              onChange={handleFile("coverImg")}
            />
            <label htmlFor="cover">
              <Button type="outline" text="upload" />
            </label>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.imgContainer}>
            <TextField
              label="Profile Picture"
              value={values.profileImg.name}
              error={false}
              className={classes.textStyle}
            />
            <input
              accept="image/*"
              className={classes.input}
              id="profile"
              type="file"
              onChange={handleFile("profileImg")}
            />
            <label htmlFor="profile">
              <Button type="outline" text="upload" />
            </label>
          </div>
        </Grid>
        <div className={classes.buttons}>
          <div>
            <Button type="outline" text="cancel" action={trigger} ap={false} />
          </div>

          {loading ? (
            <CircularProgress />
          ) : (
            <Button type="fill" text="save" action={upload} ap={values} />
          )}
        </div>
      </Grid>
    </Fragment>
  );
};
