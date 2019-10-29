import _ from "lodash";
import intl from "react-intl-universal";
import { makeStyles } from "@material-ui/styles";
import React, {
  useState,
  useEffect,
  useRef,
  Fragment,
  useContext
} from "react";
import { Select, MenuItem, TextField, Typography } from "@material-ui/core";
import { Context } from "../../../Reducer";

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
  selected: {
    fontSize: "0.8em",
    fontFamily: theme.typography.fontFamily,
    height: 40,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    border: `2px solid ${theme.palettePers.text.tertiary}`,
    overflow: "hidden",
    borderRadius: 4,
    color: theme.palettePers.text.tertiary,
    marginBottom: 5,
    marginTop: 5
  },
  focused: {},
  alignLeft: {
    width: "26%",
    marginRight: "10%"
  },
  alignRight: {
    width: "26%",
    marginRight: "10%"
  },
  alignSelect: {
    width: "27%"
  },
  title: {
    color: theme.palettePers.text.tertiary
  },
  menuItem: {
    /* color: theme.palettePers.text.tertiary */
  }
}));

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const FieldBytes = ({ filter, onUpdate }) => {
  const classes = useStyles();
  const prevFilter = usePrevious(filter);
  const [data, setData] = useState(filter);
  const [state] = useContext(Context);

  useEffect(() => {
    if (!_.isEqual(prevFilter, filter)) {
      setData(filter);
    }
  });

  const firstLoad = useRef(true);
  useEffect(() => {
    if (firstLoad.current === true) {
      firstLoad.current = false;
      return;
    } else {
      validateValue();
    }
  }, [data]);

  function validateValue() {
    onUpdate(data);
  }

  return (
    <Fragment>
      <Typography className={classes.title}>
        {intl.get(`titles.${filter.defaultName}`)}
      </Typography>
      <TextField
        placeholder={intl.get(`words.min`)}
        type="number"
        fullWidth
        InputProps={{
          classes: {
            root: classes.root
          },
          style: {
            border:
              filter.valueMin.length > 0 &&
              `2px solid ${state.theme.data.palette.text.tertiary}`,
            color:
              filter.valueMin.length > 0 &&
              state.theme.data.palette.text.tertiary
          },
          disableUnderline: true,
          value: filter.valueMin,
          onChange: event => setData({ ...data, valueMin: event.target.value })
        }}
        className={classes.alignLeft}
      />
      <TextField
        placeholder={intl.get(`words.max`)}
        type="number"
        fullWidth
        InputProps={{
          classes: {
            root: classes.root
          },
          style: {
            border:
              filter.valueMax.length > 0 &&
              `2px solid ${state.theme.data.palette.text.tertiary}`,
            color:
              filter.valueMax.length > 0 &&
              state.theme.data.palette.text.tertiary
          },
          disableUnderline: true,
          value: filter.valueMax,
          onChange: event => setData({ ...data, valueMax: event.target.value })
        }}
        className={classes.alignRight}
      />
      <Select
        disableUnderline={true}
        value={filter.density}
        onChange={e => setData({ ...data, density: e.target.value })}
        inputProps={{
          name: "Density",
          id: `${filter.defaultName}Density`,
          classes: {
            root: filter.density === "B" ? classes.root : classes.selected
          }
        }}
        className={classes.alignSelect}
      >
        <MenuItem
          classes={{
            root: classes.menuItem
          }}
          value={"B"}
        >
          B
        </MenuItem>
        <MenuItem
          classes={{
            root: classes.menuItem
          }}
          value={"KB"}
        >
          KB
        </MenuItem>
        <MenuItem
          classes={{
            root: classes.menuItem
          }}
          value={"MB"}
        >
          MB
        </MenuItem>
      </Select>
    </Fragment>
  );
};

export default FieldBytes;
