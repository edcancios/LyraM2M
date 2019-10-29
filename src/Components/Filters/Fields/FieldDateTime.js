import _ from "lodash";
import moment from "moment";
import "moment/locale/pt-br";
import intl from "react-intl-universal";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, {
  useState,
  useEffect,
  useRef,
  Fragment,
  useContext
} from "react";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import MaskedInput from "react-text-mask";
import DateFnsUtils from "@date-io/date-fns";
import frLocale from "date-fns/locale/fr";
import esLocale from "date-fns/locale/es";
import ptLocale from "date-fns/locale/pt";
import { Context } from "../../../Reducer";
import { CalendarToday } from "@material-ui/icons";

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
  alignLeft: {
    width: "60%",
    paddingRight: 0,
    marginRight: "5%"
  },
  alignRight: {
    fontSize: "0.8em",
    width: "33%",
    marginTop: 5,
    borderRadius: 4,
    border: `1px solid ${theme.palettePers.text.tertiary}`,
    "&:hover": {
      borderColor: theme.palettePers.text.tertiary,
      "&:active": {
        borderColor: theme.palettePers.text.tertiary
      }
    },
    fontFamily: theme.typography.fontFamily,
    height: 40,
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: "center",
    color: theme.palettePers.text.tertiary,
    "&:placeholder": {
      color: theme.palettePers.text.tertiary
    },
    backgroundColor: theme.palettePers.tertiary
  },
  title: {
    color: theme.palettePers.text.tertiary
  }
}));

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const FieldDateTime = ({ filter, onUpdate }) => {
  const classes = useStyles();
  const firstLoad = useRef(true);
  const prevFilter = usePrevious(filter);
  const [data, setData] = useState(filter);
  const [locale, setLocale] = useState("pt-br");
  const [state] = useContext(Context);

  useEffect(() => {
    state && setLocale(state.user.language);
  }, []);

  const localeMap = {
    fr: frLocale,
    es: esLocale,
    "pt-BR": ptLocale
  };

  useEffect(() => {
    if (!_.isEqual(prevFilter, filter)) {
      setData(filter);
    }
  });

  useEffect(() => {
    if (firstLoad.current === true) {
      firstLoad.current = false;
      return;
    }

    if (
      data.dateStart.length > 0 &&
      data.dateEnd.length > 0 &&
      data.dateStart > data.dateEnd
    ) {
      setData({
        ...data,
        dateEnd: data.dateStart
      });
    } else {
      onUpdate(data);
    }
  }, [data]);

  const handleDataStart = date => {
    if (date !== null) {
      let newData = {
        ...data,
        dateStart: moment(date).format("YYYY/MM/DD"),
        timeStart: data.timeStart ? data.timeStart : "00:00:00"
      };
      setData(newData);
    } else {
      let newData = {
        ...data,
        dateStart: "",
        timeStart: ""
      };
      setData(newData);
    }
  };

  const handleDataEnd = date => {
    if (date !== null) {
      let newData = {
        ...data,
        dateEnd: moment(date).format("YYYY/MM/DD"),
        timeEnd: data.timeEnd ? data.timeEnd : "23:59:59"
      };
      setData(newData);
    } else {
      let newData = {
        ...data,
        dateEnd: "",
        timeEnd: ""
      };
      setData(newData);
    }
  };

  const handleTimeStart = event => {
    if (data.dateStart !== null && data.dateStart !== "") {
      let newData = {
        ...data,
        timeStart: event.target.value
      };
      setData(newData);
    } else {
      let newData = {
        ...data,
        dateStart: moment().format("YYYY/MM/DD"),
        timeStart: event.target.value
      };
      setData(newData);
    }
  };

  const handleTimeEnd = event => {
    if (data.dateEnd !== null && data.dateEnd !== "") {
      let newData = {
        ...data,
        timeEnd: event.target.value
      };
      setData(newData);
    } else {
      let newData = {
        ...data,
        dateEnd: moment().format("YYYY/MM/DD"),
        timeEnd: event.target.value
      };
      setData(newData);
    }
  };

  function FormataStringData(data) {
    if (data.length === 0) {
      return "";
    }
    var ano = data.split("/")[0];
    var mes = data.split("/")[1];
    var dia = data.split("/")[2];

    return `0${dia}`.slice(-2) + "/" + `0${mes}`.slice(-2) + `/${ano}`;
  }

  return (
    <Fragment>
      <Typography className={classes.title}>
        {intl.get(`titles.${filter.defaultName}`)}
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale]}>
        <DatePicker
          key={`${filter.defaultName}DateStart`}
          placeholder={intl.get(`phrases.dateStart`)}
          onChange={handleDataStart}
          cancelLabel={intl.get("buttons.cancel")}
          okLabel={intl.get("buttons.confirm")}
          clearLabel={intl.get("buttons.clear")}
          InputProps={{
            classes: {
              root: classes.root
            },
            style: {
              border:
                filter.dateStart.length > 0 &&
                `2px solid ${state.theme.data.palette.text.tertiary}`,
              color:
                filter.dateStart.length > 0 &&
                state.theme.data.palette.text.tertiary
            },
            disableUnderline: true,
            value: filter.dateStart && FormataStringData(filter.dateStart)
          }}
          animateYearScrolling
          className={classes.alignLeft}
          disableFuture
          allowKeyboardControl
          views={["year", "month", "day"]}
          clearable
          keyboard
          keyboardIcon={
            <CalendarToday
              style={{
                color: state.theme.data.palette.text.tertiary
              }}
            />
          }
        />
        <MaskedInput
          key={`${filter.defaultName}TimeStart`}
          mask={[/\d/, /\d/, ":", /\d/, /\d/, ":", /\d/, /\d/]}
          placeholder={"00:00:00"}
          className={classes.alignRight}
          guide={false}
          onChange={handleTimeStart}
          style={{
            border:
              filter.dateStart.length > 0 &&
              `2px solid ${state.theme.data.palette.text.tertiary}`,
            color: !moment(data.timeStart, "HH:mm:ss", true).isValid() && "red"
          }}
          value={data.timeStart}
        />
        <p />
        <DatePicker
          key={`${filter.defaultName}DateEnd`}
          placeholder={intl.get(`phrases.dateEnd`)}
          onChange={handleDataEnd}
          cancelLabel={intl.get("buttons.cancel")}
          okLabel={intl.get("buttons.confirm")}
          clearLabel={intl.get("buttons.clear")}
          InputProps={{
            classes: {
              root: classes.root
            },
            style: {
              border:
                filter.dateEnd.length > 0 &&
                `2px solid ${state.theme.data.palette.text.tertiary}`
            },
            disableUnderline: true,
            value: filter.dateEnd && FormataStringData(filter.dateEnd)
          }}
          animateYearScrolling
          className={classes.alignLeft}
          disableFuture
          allowKeyboardControl
          views={["year", "month", "day"]}
          clearable
          keyboard
          keyboardIcon={
            <CalendarToday
              style={{
                color: state.theme.data.palette.text.tertiary
              }}
            />
          }
        />
        <MaskedInput
          key={`${filter.defaultName}TimeEnd`}
          mask={[/\d/, /\d/, ":", /\d/, /\d/, ":", /\d/, /\d/]}
          placeholder={"23:59:59"}
          className={classes.alignRight}
          guide={false}
          onChange={handleTimeEnd}
          style={{
            border:
              filter.dateEnd.length > 0 &&
              `2px solid ${state.theme.data.palette.text.tertiary}`,
            color: !moment(data.timeEnd, "HH:mm:ss", true).isValid() && "red"
          }}
          value={data.timeEnd}
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
};

export default FieldDateTime;
