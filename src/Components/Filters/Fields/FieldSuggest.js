import _ from "lodash";
import axios from "axios";
import intl from "react-intl-universal";
import API from "../../../API";
import Autosuggest from "react-autosuggest";
import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Paper,
  MenuItem,
  TextField,
  InputAdornment,
  Tooltip,
  Typography
} from "@material-ui/core";
import { Context } from "../../../Reducer";

const CancelToken = axios.CancelToken;

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: "0.8em",
    fontFamily: theme.typography.fontFamily,
    height: 40,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    border: `1px solid ${theme.palettePers.text.tertiary}`,
    overflow: "hidden",
    borderRadius: 4,
    color: theme.palettePers.text.tertiary,
    marginBottom: 5,
    marginTop: 5
  },
  container: {
    position: "relative",
    margin: 0
  },
  suggestionsContainerOpen: {
    zIndex: 1,
    marginTop: 5,
    maxHeight: 400,
    width: "100%",
    borderRadius: 5,
    overflowY: "auto",
    position: "absolute",
    border: `1px solid ${theme.palettePers.line}`,
    backgroundColor: theme.palettePers.tertiary,
    color: theme.palettePers.text.tertiary
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  div: {
    paddingRight: "5%"
  },
  menuItem: {
    color: theme.palettePers.text.tertiary
  },
  equal: {
    color: theme.palettePers.text.tertiary
  },
  notEqual: {
    color: "red"
  }
}));

const defaultRequest = {
  suggestionsTotal: [],
  isFetching: false,
  error: false,
  errorMessage: ""
};

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const FieldSuggest = props => {
  const classes = useStyles();
  const { onUpdate, row, filterParameters, verifyValue, filter } = props;
  const prevFilter = usePrevious(filter);
  const [state, setState] = useState({});
  const axiosToken = useRef(CancelToken.source());
  const [request, setRequest] = useState(defaultRequest);
  const [suggest, setSuggest] = useState([]);
  const [stateContext] = useContext(Context);
  const firstLoad = useRef(true);

  useEffect(() => {
    if (!_.isEqual(prevFilter, filter)) {
      setState({ ...filter });
    }
  });

  useEffect(() => {
    if (firstLoad.current === true) {
      firstLoad.current = false;
      return;
    }
    validateValue();
  }, [state.value]);

  useEffect(() => {
    if (firstLoad.current === true) {
      firstLoad.current = false;
      return;
    }
    validateValue();
  }, [suggest]);

  useEffect(() => {
    if (firstLoad.current === true) {
      firstLoad.current = false;
      return;
    }
    setSuggest(getMatchingLanguages(state.value));
  }, [request]);

  const getMatchingLanguages = value => {
    const escapedValue =
      value !== undefined &&
      escapeRegexCharacters(
        value
          .toString()
          .toLowerCase()
          .trim()
      );

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");

    return request.suggestionsTotal.filter(suggest =>
      regex.test(suggest.label)
    );
  };

  const escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const getSuggestionValue = suggestion => {
    validateValue();
    return suggestion.label.toString();
  };

  const renderSuggestion = (suggestion, { query, isHighlighted }) => {
    return (
      <MenuItem
        selected={isHighlighted}
        component="div"
        classes={{
          root: classes.menuItem
        }}
      >
        <span>{suggestion.label}</span>
      </MenuItem>
    );
  };

  const validateValue = () => {
    let stateExport = {
      ...state
    };

    const foundElement = suggest.filter(
      suggest =>
        suggest.label.toString().toLowerCase() ===
        stateExport.value.toString().toLowerCase()
    );

    if (foundElement && foundElement.length === 1) {
      stateExport.isSuggested = true;
      stateExport.id = foundElement[0].id;
    } else {
      stateExport.isSuggested = false;
    }

    onUpdate(stateExport);
  };

  const loadSuggestions = value => {
    let newState = filterParameters;
    newState[state.defaultName] && delete newState[state.defaultName];

    let filtersSelected = [];
    Object.keys(newState).map(item => {
      return filtersSelected.push(verifyValue(item));
    });

    let filtersCleaned = filtersSelected.filter(item => {
      return item !== null;
    });

    let filtersReady = {};
    filtersCleaned.map(item => {
      if (Array.isArray(item)) {
        item.map(sub => {
          return (filtersReady[sub.defaultColumn] = sub.value);
        });
      } else {
        return (filtersReady[item.defaultColumn] = item.value);
      }
      return null;
    });

    // Cancela o request
    if (request.isFetching === true) {
      return;
    }

    setRequest({
      ...request,
      isFetching: true
    });

    ///API DEFINITIVA
    API.Filters.getSuggestion(
      axios,
      axiosToken.current.token,
      state.defaultName,
      state.value,
      state.suggestionUrl,
      filtersReady
    )
      .then(res => {
        setRequest({
          ...request,
          suggestionsTotal: res.data,
          isFetching: false
        });
      })
      .catch(err => {
        if (err !== `cancelled`) {
          setRequest({
            ...request,
            isFetching: false,
            error: true,
            errMessage: err
          });
        }
      });
  };

  const handleClickCondition = () => {
    setState({ ...state, condition: !state.condition });
  };

  const handleSuggestionsFetchRequested = ({ value }) => {
    if (
      state.hasSuggested === true &&
      value.length > state.minToMakeRequest &&
      request.isFetching === false
    ) {
      loadSuggestions(value);
    } else if (
      state.hasSuggested === true &&
      request.isFetching === false &&
      request.suggestionsTotal.length > 0
    ) {
      loadSuggestions(value);
    }
  };

  const handleSuggestionsClearRequested = () => {};
  const handleChange = (event, { newValue }) => {};

  const renderInputComponent = inputProps => {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;
    return (
      <TextField
        key={`${filter.defaultName}`}
        type="text"
        fullWidth
        InputProps={{
          classes: {
            root: classes.root
          },
          style: {
            border:
              state.value &&
              state.value.length > 0 &&
              `2px solid ${stateContext.theme.data.palette.text.tertiary}`
          },
          disableUnderline: true,
          value: state.value,
          onChange: event => {
            setState({ ...state, value: event.target.value });
            handleSuggestionsFetchRequested({ value: event.target.value });
          },
          startAdornment: (
            <InputAdornment
              position="start"
              style={{
                marginRight: filter.value && state.enableNotEquals ? 8 : 0
              }}
            >
              {filter.value &&
                state.enableNotEquals &&
                (!state.condition ? (
                  <Tooltip title={intl.get(`words.notEqual`)}>
                    <Typography
                      className={classes.notEqual}
                      component="h2"
                      variant="subheading"
                      onClick={handleClickCondition}
                      style={{ color: "red" }}
                    >
                      &#8800;
                    </Typography>
                  </Tooltip>
                ) : (
                  <Tooltip title={intl.get(`words.equal`)}>
                    <Typography
                      className={classes.equal}
                      component="h2"
                      variant="subheading"
                      onClick={handleClickCondition}
                    >
                      &#61;
                    </Typography>
                  </Tooltip>
                ))}
            </InputAdornment>
          )
        }}
        className={classes.alignLeft}
        {...other}
      />
    );
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: suggest,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue: getSuggestionValue,
    renderSuggestion: renderSuggestion
  };

  return (
    <div className={classes.div}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes: {
            root: classes.root
          },
          placeholder: intl.get(`titles.` + state.defaultName),
          value: "",
          onChange: handleChange,
          column: state.defaultName
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
    </div>
  );
};

export default FieldSuggest;
