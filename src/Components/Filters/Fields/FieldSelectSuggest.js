import React, { useState, useEffect, useRef, useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import Select from "react-select";
import intl from "react-intl-universal";

import { Context } from "../../../Reducer";

import {
  InputAdornment,
  TextField,
  MenuItem,
  Typography,
  Tooltip
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  alignSelect: {
    height: 40,
    width: "100%",
    fontSize: "0.8em",
    fontFamily: theme.typography.fontFamily,
    color: theme.palettePers.text.tertiary
  },
  formControl: {
    width: "100%"
  },
  input: {
    color: theme.palettePers.text.tertiary
  },
  div: {
    paddingRight: 3,
    marginTop: 5,
    marginBottom: 5
  },
  equal: {
    color: theme.palettePers.text.tertiary
  },
  notEqual: {
    color: "red"
  }
}));

const FieldSelectSuggest = props => {
  const classes = useStyles();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "",
      backgroundColor: stateContext.theme.data.palette.tertiary,
      color: stateContext.theme.data.palette.text.tertiary
    }),
    control: (provided, state) => ({
      ...provided,
      border: !state.selectProps.value.value
        ? `1px solid ${stateContext.theme.data.palette.text.tertiary}`
        : `2px solid ${stateContext.theme.data.palette.text.tertiary}`,
      "&:hover": {
        border: !state.selectProps.value.value
          ? `1px solid ${stateContext.theme.data.palette.text.tertiary}`
          : `2px solid ${stateContext.theme.data.palette.text.tertiary}`,
        "&:active": {
          border: !state.selectProps.value.value
            ? `1px solid ${stateContext.theme.data.palette.text.tertiary}`
            : `2px solid ${stateContext.theme.data.palette.text.tertiary}`
        }
      },
      fontSize: "0.8em",
      backgroundColor: stateContext.theme.data.palette.tertiary,
      color: stateContext.theme.data.palette.text.tertiary
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: stateContext.theme.data.palette.text.tertiary,
      opacity: !state.selectProps.value.value ? "0.4" : 1,
      marginLeft: state.selectProps.value.value && enableNotEquals ? 10 : 0
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: stateContext.theme.data.palette.text.tertiary
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      color: stateContext.theme.data.palette.text.tertiary
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: stateContext.theme.data.palette.text.tertiary,
      marginLeft: state.selectProps.value.value && enableNotEquals ? 15 : 0
    }),
    input: (provided, state) => ({
      ...provided,
      fontFamily: stateContext.theme.data.typography.fontFamily,
      color: stateContext.theme.data.palette.text.tertiary
    }),
    menu: (provided, state) => ({
      ...provided,
      overflowY: "auto",
      maxHeight: "400px",
      backgroundColor: stateContext.theme.data.palette.tertiary,
      border: `1px solid ${stateContext.theme.data.palette.text.tertiary}`,
      borderRadius: "5px",
      fontSize: "1em"
    })
  };

  const filterState = {
    behavior: props.filter.behavior,
    defaultName: props.filter.defaultName,
    hasSuggested: props.filter.hasSuggested,
    isSuggested: props.filter.isSuggested,
    minToMakeRequest: props.filter.minToMakeRequest,
    type: props.filter.type,
    value: props.filter.value,
    condition: props.filter.condition,
    enableNotEquals: props.filter.enableNotEquals
  };

  const { listOptions, filter, enableNotEquals } = props;

  const [data, setData] = useState(filterState);

  const [stateContext] = useContext(Context);

  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current === true) {
      firstLoad.current = false;
      return;
    } else {
      props.onUpdate(data);
    }
  }, [data]);

  const handleChange = value => {
    const chosenValue = value;
    if (chosenValue === null) {
      setData({ ...data, value: "", label: "" });
    } else {
      setData({
        ...data,
        value: chosenValue.value,
        label: chosenValue.label,
        isSuggested: true
      });
    }
  };

  const handleClickCondition = () => {
    setData(data => ({ ...data, condition: !data.condition }));
  };

  const ControlComponent = props => (
    <TextField
      style={{ width: "100%" }}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            {filter.value &&
              enableNotEquals &&
              (!data.condition ? (
                <Tooltip title={intl.get(`words.notEqual`)}>
                  <Typography
                    className={classes.notEqual}
                    component="h2"
                    variant="subheading"
                    onClick={handleClickCondition}
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
    />
  );

  return (
    <div className={classes.div}>
      <Select
        classNamePrefix={intl.get(`titles.${props.filter.defaultName}`)}
        placeholder={intl.get(`titles.${props.filter.defaultName}`)}
        value={
          props.filter.value === ""
            ? ""
            : listOptions.find(x => x.value === props.filter.value)
        }
        isSearchable={true}
        name={intl.get(`titles.${props.filter.defaultName}`)}
        options={listOptions ? listOptions : []}
        onChange={handleChange}
        styles={customStyles}
        backspaceRemoves={true}
        isClearable
        inputProps={{ className: classes.input }}
        components={{ Input: ControlComponent }}
      />
    </div>
  );
};

export default FieldSelectSuggest;
