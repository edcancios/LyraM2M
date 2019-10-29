import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/styles";
import intl from "react-intl-universal";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  label: {
    color: theme.palettePers.text.tertiary
  },
  radio: {
    color: theme.palettePers.text.tertiary,
    "&$checked": {
      color: theme.palettePers.text.tertiary,
      backgroundColor: theme.palettePers.text.tertiary
    }
  }
}));

/* const RadioStyle = withStyles({
  root: {},
  checked: {}
})(props => <Radio color="default" {...props} />); */

const FieldGroupRadio = props => {
  const classes = useStyles();
  const state = {
    behavior: props.filter.behavior,
    defaultName: props.filter.defaultName,
    type: props.filter.type,
    value: props.filter.value
  };

  const [data, setData] = useState(state);

  const handleChange = event => {
    setData({ ...data, value: event.target.value });
  };

  useEffect(() => {
    props.onUpdate(data);
  }, [data]);

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="position"
        name="position"
        value={data.value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          classes={{
            label: classes.label
          }}
          value="month"
          control={
            <Radio
              className={classes.radio}
              onChange={handleChange}
              value="month"
              color="primary"
            />
          }
          label={intl.get(`buttons.forMonth`)}
          labelPlacement="end"
        />
        <FormControlLabel
          classes={{
            label: classes.label
          }}
          value="day"
          control={
            <Radio
              className={classes.radio}
              onChange={handleChange}
              value="day"
              color="primary"
            />
          }
          label={intl.get(`buttons.forDay`)}
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default FieldGroupRadio;
