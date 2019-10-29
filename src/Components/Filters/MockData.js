import React from "react";
import intl from "react-intl-universal";

let MockData = {
  tecnologiesList: [
    {
      value: "2G",
      label: "2G"
    },
    {
      value: "3G",
      label: "3G"
    },
    {
      value: "4G",
      label: "4G"
    },
    {
      value: "WI-FI",
      label: "WI-FI"
    },
    {
      value: "GAN",
      label: "GAN"
    }
  ],
  sessionTypes: [
    {
      value: "Start",
      label: "Start"
    },
    {
      value: "Interim-Update",
      label: "Interim-Update"
    },
    {
      value: "Stop",
      label: "Stop"
    }
  ],
  statusList: [
    {
      value: "activated",
      label: intl.get(`status.activated`)
    },
    {
      value: "cancellationRequest",
      label: intl.get(`status.cancellationRequest`)
    },
    {
      value: "cancelled",
      label: intl.get(`status.cancelled`)
    },
    {
      value: "replace",
      label: intl.get(`status.replace`)
    },
    {
      value: "replacementRequest",
      label: intl.get(`status.replacementRequest`)
    },
    {
      value: "activated",
      label: intl.get(`status.activated`)
    },
    {
      value: "suspended",
      label: intl.get(`status.suspended`)
    }
  ],
  booleanTypes: [
    {
      value: true,
      label: intl.get(`buttons.yes`)
    },
    {
      value: false,
      label: intl.get(`buttons.no`)
    }
  ],
  severityTypes: [
    {
      value: "Not Classified",
      label: intl.get(`alerts.Not Classified`)
    },
    {
      value: "Information",
      label: intl.get(`alerts.Information`)
    },
    {
      value: "Warning",
      label: intl.get(`alerts.Warning`)
    },
    {
      value: "Average",
      label: intl.get(`alerts.Average`)
    },
    {
      value: "High",
      label: intl.get(`alerts.High`)
    },
    {
      value: "Disaster",
      label: intl.get(`alerts.Disaster`)
    }
  ]
};

export default MockData;
