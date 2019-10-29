import axios from "axios";
import API from "../../API";
import intl from "react-intl-universal";

import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect, useRef, Fragment } from "react";
import {
  Tooltip,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl
} from "@material-ui/core";
import { Create } from "@material-ui/icons";

const CancelToken = axios.CancelToken;

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    borderColor: theme.palettePers.text.tertiary,
    color: theme.palettePers.text.tertiary
  },
  label: {
    color: theme.palettePers.text.tertiary,
    "&$focusedLabel": {
      color: theme.palettePers.text.tertiary
    }
  },
  focusedLabel: {},
  erroredLabel: {},
  focused: {},
  modal: {
    backgroundColor: theme.palettePers.tertiary,
    color: theme.palettePers.text.tertiary,
    fontFamily: theme.typography.fontFamily
  },
  dialog: {
    fontSize: "0.8em",
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
  buttonSave: {
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
  },
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: theme.palettePers.text.tertiary
    },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: theme.palettePers.text.tertiary
    },
    "&$cssFocused $notchedOutline": {
      borderColor: theme.palettePers.text.tertiary
    }
  },
  notchedOutline: {},
  cssFocused: {}
}));

const EditFilter = props => {
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

  const postEditFilter = () => {
    API.Filters.postEditFilter(
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
        title={intl.get(`words.edit`)}
        aria-label={intl.get(`words.edit`)}
      >
        <Create onClick={handleClickOpen} className={classes.button} />
      </Tooltip>
      <Dialog open={request.open} onClose={handleClose}>
        <DialogTitle id={intl.get(`words.edit`)} className={classes.modal}>
          <label className={classes.title}>
            {intl.get(`phrases.editFilters`)}
          </label>
        </DialogTitle>
        <DialogContent className={classes.modal}>
          <DialogContentText className={classes.dialog} />
          <FormControl className={classes.formControl}>
            <TextField
              id="outlined-name"
              label={intl.get(`phrases.insertName`)}
              value={request.name}
              margin="normal"
              variant="outlined"
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline
                },
                onChange: event =>
                  setRequest({ ...request, name: event.target.value })
              }}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel
                }
              }}
              className={classes.nameFilters}
              fullWidth
            />
          </FormControl>
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
              className={classes.buttonSave}
              onClick={() => postEditFilter()}
            >
              {intl.get(`buttons.save`)}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default EditFilter;
