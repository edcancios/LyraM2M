import React, { useState, useRef, useEffect } from "react";
import qs from "qs";
import axios from "axios";
import moment from "moment";
import intl from "react-intl-universal";
import {
  IconButton,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanel,
  Tooltip,
  Tab,
  Tabs
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  ExpandMore as ExpandMoreIcon,
  Delete as DeleteIcon,
  Done as DoneIcon
} from "@material-ui/icons";

import API from "../../API";
import MockData from "./MockData";
import LoadFilter from "./LoadFilter";
import SaveFilter from "./SaveFilter";
/* import SaveGroup from "./SaveGroup"; */

import {
  FieldBytes,
  FieldRange,
  FieldDateTime,
  FieldDateMonth,
  FieldDateShort,
  FieldSuggest,
  FieldSuggestId,
  FieldSelectSuggest,
  FieldGroupRadio
} from "./Fields";

const CancelToken = axios.CancelToken;

const useStyles = makeStyles(theme => ({
  container: {
    width: 350
  },
  button: {
    margin: "10px",
    color: theme.palettePers.text.icon
  },
  title: {
    marginBottom: 0,
    padding: 0,
    marginTop: "3%",
    fontFamily: theme.typography.fontFamily,
    fontSize: "0.9em"
  },
  listPanel: {
    height: "calc(100vh - 186px)",
    overflowY: "scroll",
    overflowX: "hidden",
    backgroundColor: theme.palettePers.fourth,
    padding: "5px",
    textAlign: "center",
    fontFamily: theme.typography.fontFamily,
    border: `1px solid ${theme.palettePers.line}`
  },
  buttonsPanel: {
    height: 70,
    textAlign: "center",
    backgroundColor: theme.palettePers.secondary,
    color: theme.palettePers.primary
  },
  listFilters: {
    width: "100%",
    textAlign: "left"
  },
  expansionPanel: {
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: theme.palettePers.tertiary
  },
  expansionPanelSummary: {
    paddingLeft: "10px",
    color: theme.palettePers.text.tertiary,
    fontWeight: "bold"
  },
  expansionPanelDetails: {
    paddingRight: "3%",
    paddingLeft: "3%",
    paddingTop: "0px",
    paddingBottom: "10px"
  },
  tabs: {
    backgroundColor: theme.palettePers.secondary,
    color: theme.palettePers.text.secondary
  },
  tabLabel: {
    color: theme.palettePers.text.secondary
  },
  indicator: {
    backgroundColor: theme.palettePers.text.secondary
  }
}));

const defaultFilters = {
  filterLoaded: [],
  error: false,
  errorMessage: "",
  isFetching: false,
  isCancelled: false
};

const Filters = props => {
  const {
    onFilter,
    filterPossibilities,
    groupsPossibilities,
    scope,
    providers,
    systemroles,
    onAgroupChange,
    configStatus,
    carriers,
    processScopeOptions,
    processNameOptions,
    processStatusOptions,
    folders,
    hasSave,
    hasSaveGroup
  } = props;

  const firstRender = useRef(true);
  const classes = useStyles();
  const axiosToken = useRef(CancelToken.source());
  const [tab, setTab] = useState(0);
  const [stateOriginal, setStateOriginal] = useState({});
  const [state, setState] = useState({});
  const [filters, setFilters] = useState(defaultFilters);
  const [rowSelected, setRowSelected] = useState({});
  const [agroupMode, setAgroupMode] = useState("month");
  const [configFilters, setConfigFilters] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");

  const [carriersList, setcarriersList] = useState([]);
  const [processScopeList, setprocessScopeList] = useState([]);
  const [processNameList, setprocessNameList] = useState([]);
  const [processStatusList, setprocessStatusList] = useState([]);
  const [foldersList, setfoldersList] = useState([]);

  useEffect(() => {
    if (JSON.stringify(stateOriginal) !== "{}") {
      setState({ ...stateOriginal });
    }
  }, [stateOriginal]);

  const convertDataToSelect = (data, labelParam, valueParam, intlRef) => {
    function comparar(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      // a deve ser igual a b
      return 0;
    }
    let newArray = [];
    Array.isArray(data) &&
      data.map(item => {
        let newItem = {
          ...item,
          label: intlRef
            ? intl.get(`${intlRef}.${item[labelParam]}`)
            : item[labelParam],
          value: item[valueParam]
        };
        return newArray.push(newItem);
      });
    return newArray.sort(function(a, b) {
      if (a.label > b.label) {
        return 1;
      }
      if (a.label < b.label) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  };

  useEffect(() => {
    let newCarriers =
      carriers &&
      carriers.length > 0 &&
      convertDataToSelect(carriers, "carrier", "carrier");
    setcarriersList(newCarriers);
  }, [carriers]);

  useEffect(() => {
    let newFolders =
      folders &&
      folders.length > 0 &&
      convertDataToSelect(folders, "name", "id");
    setfoldersList(newFolders);
  }, [folders]);

  useEffect(() => {
    let newProcessScope =
      processScopeOptions &&
      processScopeOptions.length > 0 &&
      convertDataToSelect(processScopeOptions, "name", "name", "pages");
    console.log(newProcessScope);
    setprocessScopeList(newProcessScope);
  }, [processScopeOptions]);

  useEffect(() => {
    let newProcessName =
      processNameOptions &&
      processNameOptions.length > 0 &&
      convertDataToSelect(processNameOptions, "name", "name", "phrases");
    setprocessNameList(newProcessName);
  }, [processNameOptions]);

  useEffect(() => {
    let newProcessStatus =
      processStatusOptions &&
      processStatusOptions.length > 0 &&
      convertDataToSelect(processStatusOptions, "name", "name", "phrases");
    console.log(newProcessStatus);
    setprocessStatusList(newProcessStatus);
  }, [processStatusOptions]);

  useEffect(() => {
    filterPossibilities && mountState();
  }, [filterPossibilities]);

  /* useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    onAgroupChange(agroupMode);
  }, [agroupMode]); */

  /* useEffect(() => {
    !configStatus && setConfigFilters(false);
  }, [configStatus]); */

  /* useEffect(() => {
    proccessFilters();
  }, [state]); */

  //Atualiza os valores da propriedade do state
  const updateState = element => {
    if (element.defaultName === "agroup") {
      if (element.value !== agroupMode) {
        setState({
          ...state,
          [element.defaultName]: {
            ...element
          }
        });
        setAgroupMode(element.value);
        setConfigFilters(true);
      }
    } else {
      setState({
        ...state,
        [element.defaultName]: {
          ...element
        }
      });
    }
  };

  //Processa e retorna os valores do filtro e define a query
  const proccessFilters = () => {
    let filtersSelected = [];
    let momentState = state;
    Object.keys(momentState).map(item => {
      if (filterPossibilities.findIndex(x => x.defaultName === item) >= 0) {
        return filtersSelected.push(verifyValue(item));
      } else {
        return null;
      }
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
    const newQuery = qs.stringify(filtersReady, { addQueryPrefix: false });
    setFilterQuery(newQuery);
    return filtersReady;
  };

  //Envia os filtros para execução
  const mountFilter = () => {
    let filtersReady = proccessFilters();
    return onFilter(filtersReady);
  };

  //Carrega o id do filtro armazenado pelo usuário
  const loadFilterSaved = id => {
    setTab(0);
    getLoadFilterDetail(id);
  };

  //Carrega e aplica as configurações do filtro armazenado no state atual
  const getLoadFilterDetail = id => {
    if (filters.isFetching) {
      return;
    }

    setFilters({
      ...defaultFilters,
      isFetching: true
    });

    API.Filters.getLoadFilterDetail(axios, axiosToken.current.token, id, scope)
      .then(res => {
        setState({
          ...state,
          ...res.data
        });
        setFilters({
          ...defaultFilters,
          isFetching: false
        });
      })
      .catch(err => {
        if (err !== `cancelled`) {
          setFilters({
            ...defaultFilters,
            error: true,
            errorMessage: err
          });
        }
      });
  };

  //Solicita a limpeza dos filtros
  const cleanFilters = () => {
    emptyState();
    setRowSelected({});
  };

  //Realiza a limpeza do state
  const emptyState = () => {
    setState({
      ...stateOriginal
    }); /* if (filterPossibilities && Array.isArray(filterPossibilities)) {
      let newState = {};

      filterPossibilities.map(filter => {
        if (!newState.hasOwnProperty(filter.defaultName)) {
          return (newState[filter.defaultName] = createFilterState(filter));
        } else {
          return null;
        }
      });
      setState({ ...newState });
    } */
  };

  //Verifica as informações e aplica o nome das propriedades
  const verifyValue = item => {
    let arrayValues = [];
    switch (state[item].type) {
      case "text":
        let conditionText = !state[item].condition && "NotEqual";
        if (
          state[item].value !== null &&
          state[item].value !== undefined &&
          state[item].value !== ""
        ) {
          if (!state[item].isSuggested) {
            return {
              defaultColumn: `${item}Start${conditionText}`,
              value: state[item].value
            };
          } else {
            if (
              state[item].hasOwnProperty("columnIdName") &&
              state[item].columnIdName !== state[item].defaultName
            ) {
              return {
                defaultColumn: `${state[item].columnIdName}${conditionText}`,
                value: state[item].id
              };
            } else {
              return {
                defaultColumn: `${item}${conditionText}`,
                value: state[item].value
              };
            }
          }
        } else {
          return null;
        }
      case "date":
        if (
          state[item].timeStart !== null &&
          state[item].timeStart !== undefined &&
          state[item].timeStart !== "" &&
          moment(state[item].timeStart, "HH:mm:ss", true).isValid() &&
          state[item].dateStart !== null &&
          state[item].dateStart !== undefined &&
          state[item].dateStart !== ""
        ) {
          let dateStart = state[item].dateStart;
          while (dateStart.indexOf("/") >= 0) {
            dateStart = dateStart.replace("/", "-");
          }
          arrayValues.push({
            defaultColumn: `${item}Start`,
            value: `${dateStart} ${state[item].timeStart}`
          });
        }
        if (
          state[item].timeEnd !== null &&
          state[item].timeEnd !== undefined &&
          state[item].timeEnd !== "" &&
          moment(state[item].timeEnd, "HH:mm:ss", true).isValid() &&
          state[item].dateEnd !== null &&
          state[item].dateEnd !== undefined &&
          state[item].dateEnd !== ""
        ) {
          let dateEnd = state[item].dateEnd;
          while (dateEnd.indexOf("/") >= 0) {
            dateEnd = dateEnd.replace("/", "-");
          }
          arrayValues.push({
            defaultColumn: `${item}End`,
            value: `${dateEnd} ${state[item].timeEnd}`
          });
        }
        if (arrayValues.length > 0) {
          return arrayValues;
        } else {
          return null;
        }
      case "month":
        if (
          state[item].dateStart !== null &&
          state[item].dateStart !== undefined &&
          state[item].dateStart !== ""
        ) {
          let dateStart = moment(state[item].dateStart)
            .startOf("month")
            .format("YYYY-MM-DD");
          while (dateStart.indexOf("/") >= 0) {
            dateStart = dateStart.replace("/", "-");
          }
          arrayValues.push({
            defaultColumn: `${item}Start`,
            value: `${dateStart}`
          });
        }
        if (
          state[item].dateEnd !== null &&
          state[item].dateEnd !== undefined &&
          state[item].dateEnd !== ""
        ) {
          let dateEnd = moment(state[item].dateEnd)
            .endOf("month")
            .format("YYYY-MM-DD");
          while (dateEnd.indexOf("/") >= 0) {
            dateEnd = dateEnd.replace("/", "-");
          }
          arrayValues.push({
            defaultColumn: `${item}End`,
            value: `${dateEnd}`
          });
        }
        if (arrayValues.length > 0) {
          return arrayValues;
        } else {
          return null;
        }
      case "shortDate":
        if (
          state[item].dateStart !== null &&
          state[item].dateStart !== undefined &&
          state[item].dateStart !== ""
        ) {
          let dateStart = moment(state[item].dateStart).format("YYYY-MM-DD");
          while (dateStart.indexOf("/") >= 0) {
            dateStart = dateStart.replace("/", "-");
          }
          arrayValues.push({
            defaultColumn: `${item}Start`,
            value: `${dateStart}`
          });
        }
        if (
          state[item].dateEnd !== null &&
          state[item].dateEnd !== undefined &&
          state[item].dateEnd !== ""
        ) {
          let dateEnd = moment(state[item].dateEnd).format("YYYY-MM-DD");
          while (dateEnd.indexOf("/") >= 0) {
            dateEnd = dateEnd.replace("/", "-");
          }
          arrayValues.push({
            defaultColumn: `${item}End`,
            value: `${dateEnd}`
          });
        }
        if (arrayValues.length > 0) {
          return arrayValues;
        } else {
          return null;
        }
      case "number":
        if (
          state[item].value !== null &&
          state[item].value !== undefined &&
          state[item].value !== ""
        ) {
          if (!state[item].isSuggested) {
            return {
              defaultColumn: !state[item].condition
                ? `${item}StartNotEqual`
                : `${item}Start`,
              value: state[item].value
            };
          } else {
            if (
              state[item].hasOwnProperty("columnIdName") &&
              state[item].columnIdName !== state[item].defaultName
            ) {
              return {
                defaultColumn: !state[item].condition
                  ? `${state[item].columnIdName}NotEqual`
                  : state[item].columnIdName,
                value: state[item].id
              };
            } else {
              return {
                defaultColumn: !state[item].condition
                  ? `${item}NotEqual`
                  : `${item}`,
                value: state[item].value
              };
            }
          }
        } else {
          return null;
        }
      case "range":
        if (state[item].behavior === "bytes") {
          if (
            state[item].valueMin !== null &&
            state[item].valueMin !== undefined &&
            state[item].valueMin !== ""
          ) {
            arrayValues.push({
              defaultColumn: `${item}Min`,
              value: convertBytes(item, state[item].valueMin)
            });
          }
          if (
            state[item].valueMax !== null &&
            state[item].valueMax !== undefined &&
            state[item].valueMax !== ""
          ) {
            arrayValues.push({
              defaultColumn: `${item}Max`,
              value: convertBytes(item, state[item].valueMax)
            });
          }
          return arrayValues;
        } else if (state[item].behavior === "number") {
          if (
            state[item].valueMin !== null &&
            state[item].valueMin !== undefined &&
            state[item].valueMin !== ""
          ) {
            arrayValues.push({
              defaultColumn: `${item}Min`,
              value: state[item].valueMin
            });
          }
          if (
            state[item].valueMax !== null &&
            state[item].valueMax !== undefined &&
            state[item].valueMax !== ""
          ) {
            arrayValues.push({
              defaultColumn: `${item}Max`,
              value: state[item].valueMax
            });
          }
          return arrayValues;
        }
        break;
      case "select":
        if (
          state[item].value !== null &&
          state[item].value !== undefined &&
          state[item].value !== ""
        ) {
          return {
            defaultColumn: !state[item].condition
              ? `${item}NotEqual`
              : `${item}`,
            value: state[item].value
          };
        } else {
          return null;
        }

      case "id":
        if (
          state[item].value !== null &&
          state[item].value !== undefined &&
          state[item].value !== ""
        ) {
          if (
            state[item].hasOwnProperty("columnIdName") &&
            state[item].columnIdName !== state[item].defaultName
          ) {
            return {
              defaultColumn: !state[item].condition
                ? `${state[item].columnIdName}NotEqual`
                : state[item].columnIdName,
              value: state[item].id
            };
          } else {
            return {
              defaultColumn: !state[item].condition
                ? `${item}NotEqual`
                : `${item}`,
              value: state[item].id
            };
          }
        } else {
          return null;
        }
      case "radio":
        return {
          defaultColumn: state[item].defaultName,
          value: state[item].value
        };
      default:
        return null;
    }
  };

  //Criar as props do state de acordo com o objeto do backend filterPossibilities
  const createFilterState = filter => {
    const defaultStateObject = {
      behavior: "",
      defaultName: "",
      type: "",
      condition: true,
      enableNotEquals: false
    };
    switch (filter.type) {
      case "text":
        return {
          ...defaultStateObject,
          hasSuggested: false,
          isSuggested: false,
          minToMakeRequest: 0,
          suggestions: [],
          suggestionUrl: "",
          value: "",
          ...filter
        };
      case "id":
        return {
          ...defaultStateObject,
          columnIdName: "",
          hasSuggested: false,
          isSuggested: false,
          minToMakeRequest: 0,
          suggestions: [],
          suggestionUrl: "",
          value: "",
          ...filter
        };
      case "number":
        return {
          ...defaultStateObject,
          columnIdName: "",
          hasSuggested: false,
          isSuggested: false,
          minToMakeRequest: 0,
          suggestions: [],
          suggestionUrl: "",
          value: "",
          condition: true,
          ...filter
        };
      case "range":
        return {
          ...defaultStateObject,
          hasSuggested: false,
          isSuggested: false,
          minToMakeRequest: 0,
          suggestions: [],
          suggestionUrl: "",
          density: "B",
          valueMin: "",
          valueMinBytes: 0,
          valueMax: "",
          valueMaxBytes: 0,
          ...filter
        };
      case "date":
        return {
          ...defaultStateObject,
          hasSuggested: false,
          isSuggested: false,
          minToMakeRequest: 0,
          suggestions: [],
          suggestionUrl: "",
          timeStart: "",
          timeEnd: "",
          dateStart: "",
          dateEnd: "",
          ...filter
        };
      case "month" || "shortDate":
        return {
          ...defaultStateObject,
          hasSuggested: false,
          isSuggested: false,
          minToMakeRequest: 0,
          suggestions: [],
          suggestionUrl: "",
          dateStart: "",
          dateEnd: "",
          ...filter
        };
      case "select":
        return {
          ...defaultStateObject,
          hasSuggested: false,
          isSuggested: false,
          minToMakeRequest: 0,
          suggestions: [],
          suggestionUrl: "",
          value: "",
          ...filter
        };
      case "radio":
        return {
          ...defaultStateObject,
          value: "",
          ...filter
        };
      default:
        console.log(
          `O state da propriedade type: ${filter.type} em ${
            filter.defaultName
          } não está configurado`
        );
        return null;
    }
  };

  //Criar os componentes de acordo com o objeto do backend filterPossibilities
  const renderElementFilter = filter => {
    if (state[filter].defaultName) {
      switch (state[filter].type) {
        case "text":
          return (
            <FieldSuggest
              key={state[filter].defaultName}
              onUpdate={updateState}
              filter={state[filter]}
              row={rowSelected}
              filterParameters={state}
              verifyValue={verifyValue}
            />
          );
        case "id":
          return (
            <FieldSuggestId
              key={state[filter].defaultName}
              onUpdate={updateState}
              filter={state[filter]}
              row={rowSelected}
              filterParameters={state}
              verifyValue={verifyValue}
            />
          );
        case "number":
          return (
            <FieldSuggest
              key={state[filter].defaultName}
              onUpdate={updateState}
              filter={state[filter]}
              row={rowSelected}
              filterParameters={state}
              verifyValue={verifyValue}
            />
          );
        case "range":
          if (state[filter].behavior === "number") {
            return (
              <FieldRange
                key={state[filter].defaultName}
                filter={state[filter]}
                onUpdate={updateState}
              />
            );
          } else if (state[filter].behavior === "bytes") {
            return (
              <FieldBytes
                key={state[filter].defaultName}
                filter={state[filter]}
                onUpdate={updateState}
              />
            );
          }
          break;
        case "date":
          return (
            <FieldDateTime
              key={state[filter].defaultName}
              filter={state[filter]}
              onUpdate={updateState}
            />
          );
        case "month":
          return (
            <FieldDateMonth
              key={state[filter].defaultName}
              filter={state[filter]}
              onUpdate={updateState}
            />
          );
        case "shortDate":
          return (
            <FieldDateShort
              key={state[filter].defaultName}
              filter={state[filter]}
              onUpdate={updateState}
            />
          );

        case "select":
          let listOptions = [];
          switch (state[filter].behavior) {
            case "carrier":
              listOptions = carriersList;
              break;
            case "status":
              listOptions = MockData.statusList;
              break;
            case "folder":
              listOptions = foldersList;
              break;
            case "tecnology":
              listOptions = MockData.tecnologiesList;
              break;
            case "sessionType":
              listOptions = MockData.sessionTypes;
              break;
            case "boolean":
              listOptions = MockData.booleanTypes;
              break;
            case "systemrole":
              listOptions = systemroles;
              break;
            case "provider":
              listOptions = providers;
              break;
            case "processName":
              listOptions = processNameList;
              break;
            case "processScope":
              listOptions = processScopeList;
              break;
            case "processStatus":
              listOptions = processStatusList;
              break;
            case "severity":
              listOptions = MockData.severityTypes;
              break;
            default:
              listOptions = [];
              break;
          }
          return (
            <FieldSelectSuggest
              key={state[filter].defaultName}
              filter={state[filter]}
              onUpdate={updateState}
              listOptions={listOptions}
              enableNotEquals={
                filter.enableNotEquals ? filter.enableNotEquals : false
              }
            />
          );

        case "radio":
          return (
            <FieldGroupRadio
              key={state[filter].defaultName}
              onUpdate={updateState}
              filter={state[filter]}
            />
          );
        default:
          return console.log(
            `O valor da propriedade type: ${state[filter].type} em ${
              state[filter].defaultName
            } não está configurado`
          );
      }
    } else {
      return console.log(
        "Propriedade defaultName não foi encontrada em",
        state[filter].defaultName
      );
    }
  };

  //Converte as informações do select de bytes
  const convertBytes = (item, value) => {
    switch (state[item].density) {
      case "KB":
        return value * 1024;
      case "MB":
        return value * 1048576;
      default:
        return value;
    }
  };

  //Monta o state do componente
  const mountState = () => {
    if (filterPossibilities && Array.isArray(filterPossibilities)) {
      let newState = {};

      filterPossibilities.map(filter => {
        if (!state.hasOwnProperty(filter.defaultName)) {
          return (newState[filter.defaultName] = createFilterState(filter));
        } else {
          return (newState[filter.defaultName] = {
            ...state[filter.defaultName]
          });
        }
      });
      setStateOriginal({ ...newState });
    }
  };

  //Cria os cards de grupo
  const renderGroup = group => {
    return (
      <ExpansionPanel
        className={classes.expansionPanel}
        defaultExpanded={true}
        key={group}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          className={classes.expansionPanelSummary}
        >
          <label className={classes.title}>{intl.get(`words.${group}`)}</label>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <div className={classes.listFilters}>
            {stateOriginal &&
              Object.keys(stateOriginal).map(filter => {
                if (stateOriginal[filter].group === group) {
                  return renderElementFilter(filter);
                } else {
                  return null;
                }
              })}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };

  return (
    <div className={classes.container}>
      <Tabs
        value={tab}
        onChange={(e, value) => {
          setTab(value);
        }}
        className={classes.tabs}
        classes={{ indicator: classes.indicator }}
      >
        <Tab label={intl.get(`buttons.filters`)} className={classes.tabLabel} />
        {hasSave && (
          <Tab
            label={intl.get(`buttons.savedFilters`)}
            className={classes.tabLabel}
          />
        )}
      </Tabs>
      {tab === 0 && (
        <div>
          {!configFilters && state ? (
            <div className={classes.listPanel}>
              {groupsPossibilities && groupsPossibilities.length > 0 ? (
                Object.keys(state).length > 0 &&
                groupsPossibilities &&
                groupsPossibilities.map(group => {
                  return renderGroup(group.name);
                })
              ) : (
                <label>{intl.get(`phrases.loadingFilters`)}</label>
              )}
            </div>
          ) : (
            <div className={classes.listPanel}>
              <label>{intl.get(`phrases.reconfigFilters`)}</label>
            </div>
          )}
          <div className={classes.buttonsPanel}>
            <Tooltip
              title={intl.get(`words.apply`)}
              aria-label={intl.get(`words.apply`)}
            >
              <IconButton
                color="default"
                onClick={mountFilter}
                className={classes.button}
              >
                <DoneIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title={intl.get(`words.clean`)}
              aria-label={intl.get(`words.clean`)}
            >
              <IconButton
                color="default"
                onClick={cleanFilters}
                className={classes.button}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            {/* hasSave && (
              <SaveFilter
                color="default"
                filters={{ ...state }}
                filterQuery={filterQuery}
                className={classes.button}
                scope={scope}
              />
            ) */}
            {/* hasSaveGroup && (
              <SaveGroup
                color="default"
                filters={{ ...state }}
                filterQuery={filterQuery}
                className={classes.button}
                scope={scope}
              />
            ) */}
          </div>
        </div>
      )}
      {tab === 1 && hasSave && (
        <LoadFilter onUpdate={loadFilterSaved} scope={scope} />
      )}
    </div>
  );
};

export default Filters;
