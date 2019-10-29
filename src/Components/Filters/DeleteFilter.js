import axios from "axios";
import API from "../../API";
import intl from "react-intl-universal";

import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect, useRef, Fragment } from "react";
import {
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const CancelToken = axios.CancelToken;

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    borderColor: theme.palettePers.text.tertiary,
    color: theme.palettePers.text.tertiary
  },
  modal: {
    backgroundColor: theme.palettePers.tertiary,
    color: theme.palettePers.text.tertiary,
    fontFamily: theme.typography.fontFamily
  },
  dialog: {
    fontSize: "1.5em",
    minWidth: "500px"
  },
  formControl: {
    color: theme.palettePers.text.tertiary,
    width: "100%"
  },
  button: {
    margin: "10px",
    color: theme.palettePers.text.icon,
    fontFamily: theme.typography.fontFamily
  },
  buttons: {
    display: "block",
    textAlign: "right"
  },
  buttonOk: {
    margin: 10,
    backgroundColor: theme.palettePers.primary,
    color: theme.palettePers.text.primary,
    fontFamily: theme.typography.fontFamily
  },
  buttonCancel: {
    margin: 10,
    backgroundColor: theme.palettePers.tertiary,
    color: theme.palettePers.text.tertiary,
    fontFamily: theme.typography.fontFamily
  },
  title: {
    color: theme.palettePers.text.tertiary
  }
}));

const DeleteFilter = props => {
  const axiosToken = useRef(CancelToken.source());
  const classes = useStyles();

  const defaultRequest = {
    data: props.filter,
    open: false,
    name: props.name,
    error: false,
    errorMessage: "",
    isFetching: false,
    isCancelled: false
  };
  const [request, setRequest] = useState(defaultRequest);

  useEffect(() => {
    return () => {
      axiosToken.current.cancel(`Cancelled on unmount`);
    };
  }, []);

  const postDeleteFilter = () => {
    API.Filters.postDeleteFilter(
      axios,
      axiosToken.current.token,
      request,
      props.scope
    )
      .then(res => {
        setRequest({
          ...request,
          name: "",
          isFetching: false,
          open: false
        });
        props.onUpdate();
      })
      .catch(err => {
        if (err !== `cancelled`) {
          setRequest({
            ...request,
            error: true,
            isFetching: false,
            errorMessage: err
          });
        }
      });
  };

  const handleClickOpen = () => {
    setRequest({
      ...request,
      open: true
    });
  };

  const handleClose = () => {
    setRequest({
      ...request,
      open: false,
      name: "",
      data: []
    });
  };

  return (
    <Fragment>
      <Tooltip
        title={intl.get(`words.delete`)}
        aria-label={intl.get(`words.delete`)}
      >
        <Delete className={classes.button} onClick={handleClickOpen} />
      </Tooltip>
      <Dialog open={request.open} onClose={handleClose}>
        <DialogTitle id={intl.get(`words.delete`)} className={classes.modal}>
          <label className={classes.title}>
            {intl.get(`phrases.deleteFilters`)}
          </label>
        </DialogTitle>
        <DialogContent className={classes.modal}>
          <DialogContentText className={classes.dialog}>
            {props.name}
          </DialogContentText>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              className={classes.buttonCancel}
              onClick={() => handleClose()}
            >
              {intl.get(`buttons.cancel`)}
            </Button>
            <Button
              variant="contained"
              className={classes.buttonOk}
              onClick={() => postDeleteFilter()}
            >
              {intl.get(`buttons.ok`)}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default DeleteFilter;
