import axios from "axios";
import API from "../../API";
import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect, useRef, Fragment } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditFilter from "./EditFilter";
import DeleteFilter from "./DeleteFilter";

import intl from "react-intl-universal";

const CancelToken = axios.CancelToken;

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100%",
    overflowY: "auto"
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
    backgroundColor: theme.palettePers.secondary
  },
  itemFilter: {
    backgroundColor: theme.palettePers.tertiary,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 5,
    fontFamily: theme.typography.fontFamily,
    fontSize: "0.9em",
    minHeight: 50,
    color: theme.palettePers.text.secondary
  },
  itemText: {
    color: theme.palettePers.text.tertiary
  },
  itemTextLocked: {
    color: theme.palettePers.text.tertiary,
    maxWidth: "80%"
  },
  emptyData: {
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palettePers.fourth,
    color: theme.palettePers.text.fourth
  }
}));

const defaultFiltersSaved = {
  data: [],
  error: false,
  errorMessage: "",
  isFetching: false,
  isCancelled: false
};

const LoadFilter = props => {
  const {
    onUpdate,

    scope
  } = props;
  const classes = useStyles();
  const axiosToken = useRef(CancelToken.source());

  const [filtersSavedRequest, setFiltersSavedRequest] = useState(
    defaultFiltersSaved
  );

  const handleListItemClick = value => {
    onUpdate(value);
  };

  useEffect(() => {
    getFiltersSaved();
    return () => {
      axiosToken.current.cancel(`Cancelled on unmount`);
    };
  }, []);

  const getFiltersSaved = () => {
    if (filtersSavedRequest.isFetching) {
      return;
    }

    setFiltersSavedRequest({
      ...defaultFiltersSaved,
      isFetching: true
    });

    API.Filters.getFiltersSaved(axios, axiosToken, scope)
      .then(data => {
        setFiltersSavedRequest({
          ...defaultFiltersSaved,
          ...data
        });
      })
      .catch(err => {
        if (err !== `cancelled`) {
          setFiltersSavedRequest({
            ...defaultFiltersSaved,
            error: true,
            errorMessage: err
          });
        }
      });
  };

  return (
    <Fragment>
      <div className={classes.listPanel}>
        {!filtersSavedRequest.isFetching ? (
          filtersSavedRequest && filtersSavedRequest.data.length > 0 ? (
            <List>
              {filtersSavedRequest.data.map(filter => (
                <ListItem
                  button
                  onClick={() => handleListItemClick(filter.id)}
                  key={filter.id}
                  className={classes.itemFilter}
                >
                  <ListItemText
                    primary={
                      !filter.isLocked ? (
                        <p className={classes.itemTextLocked}>{filter.name}</p>
                      ) : (
                        <p className={classes.itemText}>{filter.name}</p>
                      )
                    }
                  />
                  {!filter.isLocked && (
                    <ListItemSecondaryAction>
                      <EditFilter
                        filter={filter.id}
                        name={filter.name}
                        scope={scope}
                        onUpdate={getFiltersSaved}
                      />
                      <DeleteFilter
                        filter={filter.id}
                        name={filter.name}
                        scope={scope}
                        onUpdate={getFiltersSaved}
                      />
                    </ListItemSecondaryAction>
                  )}
                </ListItem>
              ))}
            </List>
          ) : (
            <label className={classes.emptyData}>
              {intl.get(`phrases.noInformationAvailable`)}
            </label>
          )
        ) : (
          <label className={classes.emptyData}>
            {intl.get(`words.loading`)}
          </label>
        )}
      </div>
      <div className={classes.buttonsPanel} />
    </Fragment>
  );
};

export default LoadFilter;
