import axios from "axios";
import API from "./API";
import intl from "react-intl-universal";
import { GroupAdd as GroupAddIcon } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/styles";
import React, {
  useState,
  useEffect,
  useRef,
  Fragment,
  useContext
} from "react";
import {
  IconButton,
  Tooltip,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl
} from "@material-ui/core";
import { Context } from "./Reducer";

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
  focused: {
    color: theme.palettePers.text.tertiary
  },
  modal: {
    backgroundColor: theme.palettePers.tertiary,
    color: theme.palettePers.text.tertiary,
    fontFamily: theme.typography.fontFamily
  },
  modalText: {
    color: theme.palettePers.text.tertiary,
    fontFamily: theme.typography.fontFamily
  },
  modalTextDetails: {
    color: theme.palettePers.text.tertiary,
    fontFamily: theme.typography.fontFamily,
    fontSize: "0.8em"
  },
  dialog: {
    fontSize: "0.8em",
    minWidth: "500px"
  },
  button: {
    margin: "10px",
    color: theme.palettePers.text.icon,
    fontFamily: theme.typography.fontFamily
  },
  formControl: {
    color: theme.palettePers.text.tertiary,
    width: "100%"
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
  nameFilters: {
    width: "100%",
    marginBottom: 5,
    color: theme.palettePers.text.tertiary,
    backgroundColor: theme.palettePers.tertiary
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
  cssFocused: {
    color: theme.palettePers.text.primary
  }
}));

const SaveGroup = props => {
  const axiosToken = useRef(CancelToken.source());
  const classes = useStyles();
  const [stateContext] = useContext(Context);

  const defaultRequest = {
    value: props.filters,
    open: false,
    name: "",
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

  const postSaveGroup = () => {
    API.Filters.postSaveGroup(
      axios,
      axiosToken.current.token,
      request.name,
      props.filters,
      props.filterQuery,
      stateContext.company.name
    )
      .then(res => {
        setRequest({
          ...request,
          name: "",
          isFetching: false,
          open: false
        });
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
      open: false
    });
  };

  return (
    <Fragment>
      <Tooltip title={intl.get(`phrases.saveGroupParameters`)}>
        <IconButton
          className={classes.button}
          color="default"
          onClick={handleClickOpen}
        >
          <GroupAddIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={request.open} onClose={handleClose}>
        <DialogTitle id={intl.get(`words.delete`)} className={classes.modal}>
          <label className={classes.modalText}>
            {intl.get(`phrases.saveGroups`)}
          </label>
          <br />
          <label className={classes.modalTextDetails}>
            {intl.get(`phrases.saveGroupsDetails`)}
          </label>
        </DialogTitle>
        <DialogContent className={classes.modal}>
          <DialogContentText className={classes.dialog}> </DialogContentText>
          <FormControl className={classes.formControl}>
            <TextField
              id="outlined-name"
              label={intl.get(`phrases.insertName`)}
              value={request.name}
              margin="normal"
              variant="outlined"
              InputProps={{
                classes: {
                  root: classes.root,
                  notchedOutline: classes.notchedOutline
                },
                onChange: event =>
                  setRequest({
                    ...request,
                    name: event.target.value.replace(/[^\w\s]/gi, "")
                  })
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
              {intl.get(`buttons.close`)}
            </Button>
            <Button
              variant="contained"
              className={classes.buttonOk}
              onClick={() => postSaveGroup()}
              disabled={request.name.trim() === ""}
            >
              {intl.get(`buttons.save`)}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default SaveGroup;
