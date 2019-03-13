import React, { useState, useEffect } from "react";
import API from "../utils/util";
import axios from "axios";

import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import io from "socket.io-client";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import ProfileInfo from "../components/ProfileInfo";
import ProfileCarrousel from "../components/ProfileCarrousel";
import Tweets from "../components/Tweets";
import Follow from "../components/Follow";
import Modal from "../components/Modal";

const socket = io(process.env.REACT_APP_API);

const useStyles = makeStyles({
  container: {
    backgroundColor: "rgb(225 232 237)",
    height: "100%"
  },
  contentContainer: {
    padding: "0 100px",
    "@media (max-width: 800px)": {
      padding: "0 0"
    }
  },
  hide: {
    "@media (max-width: 800px)": {
      display: "none"
    }
  }
});

export default ({ match, history }) => {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [modalType, setModalType] = useState("");
  const [userName, setUserName] = useState(null);

  const socketConf = () => socket.on("reloadUser", () => getUser());
  const protect = () => {
    const localUserName = localStorage.getItem("userName");
    if (!localUserName) {
      history.push("/login");
    } else {
      setUserName(localUserName);
    }
  };

  const getUser = async () => {
    try {
      const localUserName = localStorage.getItem("userName");
      const token = localStorage.getItem("token");
      const request = await axios.post(
        "https://floating-ravine-92260.herokuapp.com/api/user/find",
        { name: localUserName },
        { headers: { authorization: `Bearer ${token}` } }
      );
      setUser(request.data.content);
      if (request.data.content.newUser) {
        setModalType("profile");
        setModalState(true);
      }
    } catch (err) {
      return null;
    }
  };
  useEffect(() => {
    protect();
  }, []);
  useEffect(() => {
    getUser();
  }, [userName]);

  useEffect(() => {
    socketConf();
  }, []);

  return (
    <div className={classes.container}>
      <Navbar user={user} trigger={setModalState} modalType={setModalType} />
      <BottomBar trigger={setModalState} user={user} modalType={setModalType} />
      <Grid container className={classes.contentContainer} spacing={16}>
        <Grid item md={2} className={classes.hide}>
          <ProfileInfo user={user} />
          <ProfileCarrousel />
        </Grid>
        <Grid item md={8} className={classes.top} xs={12}>
          <Tweets user={user} />
        </Grid>
        <Grid item md={2} className={classes.hide}>
          <Follow />
        </Grid>
      </Grid>
      <Modal
        open={modalState}
        trigger={setModalState}
        userName={userName}
        type={modalType}
      />
    </div>
  );
};
