let ExampleData = {
  scope: "inventory_filter",
  filterPossibilities: [
    {
      type: "text",
      group: "simcard",
      behavior: "text",
      defaultName: "companyName",
      hasSuggested: true,
      suggestionUrl: "company_filter",
      minToMakeRequest: 2
    },
    {
      type: "select",
      group: "simcard",
      behavior: "folder",
      defaultName: "folder",
      hasSuggested: false,
      suggestionUrl: "folder_filter",
      minToMakeRequest: 1
    },
    {
      type: "number",
      group: "simcard",
      behavior: "text",
      defaultName: "msisdn",
      hasSuggested: true,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "text",
      group: "simcard",
      behavior: "text",
      defaultName: "iccid",
      hasSuggested: true,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 2
    },
    {
      type: "number",
      group: "connectivity",
      behavior: "text",
      defaultName: "cellid",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "number",
      group: "simcard",
      behavior: "text",
      defaultName: "plmn",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "select",
      group: "simcard",
      behavior: "carrier",
      defaultName: "carrier",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "text",
      group: "simcard",
      behavior: "text",
      defaultName: "imei",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "range",
      group: "consumption",
      behavior: "bytes",
      defaultName: "plan",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "range",
      group: "consumption",
      behavior: "bytes",
      defaultName: "amount",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "range",
      group: "consumption",
      behavior: "number",
      defaultName: "consumptionPercentage",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 2
    },
    {
      type: "range",
      group: "consumption",
      behavior: "bytes",
      defaultName: "forecast",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "range",
      group: "consumption",
      behavior: "number",
      defaultName: "forecastPercentage",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 2
    },
    {
      type: "number",
      group: "connectivity",
      behavior: "text",
      defaultName: "lac",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 2
    },
    {
      type: "text",
      group: "simcard",
      behavior: "text",
      defaultName: "lifeCycle",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 5
    },
    {
      type: "select",
      group: "simcard",
      behavior: "status",
      defaultName: "status",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "text",
      group: "connectivity",
      behavior: "text",
      defaultName: "ip",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 5
    },
    {
      type: "text",
      group: "connectivity",
      behavior: "text",
      defaultName: "apn",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "date",
      group: "baseDate",
      behavior: "date",
      defaultName: "lastConnection",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "text",
      group: "simcard",
      behavior: "text",
      defaultName: "companyName",
      hasSuggested: true,
      suggestionUrl: "company_filter",
      minToMakeRequest: 0
    },
    {
      type: "number",
      group: "simcard",
      behavior: "text",
      defaultName: "msisdn",
      hasSuggested: true,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "text",
      group: "connectivity",
      behavior: "text",
      defaultName: "nasIpAddress",
      hasSuggested: false,
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 1
    },
    {
      type: "text",
      group: "connectivity",
      behavior: "text",
      defaultName: "ipAddress",
      hasSuggested: false,
      suggestionUrl: "",
      minToMakeRequest: 1
    },
    {
      type: "text",
      group: "connectivity",
      behavior: "text",
      defaultName: "sessionApn",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      minToMakeRequest: 1
    },
    {
      type: "select",
      group: "connectivity",
      behavior: "sessionType",
      defaultName: "sessionType",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      enableNotEquals: true,
      minToMakeRequest: 1
    },
    {
      type: "text",
      group: "connectivity",
      behavior: "text",
      defaultName: "terminateCause",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      enableNotEquals: true,
      minToMakeRequest: 1
    },
    {
      type: "text",
      group: "connectivity",
      behavior: "text",
      defaultName: "plmn",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      minToMakeRequest: 1
    },
    {
      type: "select",
      group: "connectivity",
      behavior: "tecnology",
      defaultName: "tecnology",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      enableNotEquals: true,
      minToMakeRequest: 1
    },
    {
      type: "range",
      group: "consumption",
      behavior: "bytes",
      defaultName: "download",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      minToMakeRequest: 0
    },
    {
      type: "range",
      group: "consumption",
      behavior: "bytes",
      defaultName: "upload",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      minToMakeRequest: 0
    },
    {
      type: "date",
      group: "baseDate",
      behavior: "date",
      defaultName: "sessionStartDate",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      minToMakeRequest: 0
    },
    {
      type: "date",
      group: "baseDate",
      behavior: "date",
      defaultName: "sessionUpdateDate",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      minToMakeRequest: 0
    },
    {
      type: "date",
      group: "baseDate",
      behavior: "date",
      defaultName: "sessionStopDate",
      hasSuggested: false,
      suggestionUrl: "session_filter",
      minToMakeRequest: 0
    },
    {
      type: "radio",
      group: "agroup",
      value: "month",
      behavior: "radio",
      defaultName: "agroup",
      visibleGroup: "month"
    },
    {
      type: "text",
      group: "simcard",
      behavior: "text",
      defaultName: "companyName",
      hasSuggested: true,
      visibleGroup: "month",
      suggestionUrl: "company_filter",
      minToMakeRequest: 0
    },
    {
      type: "number",
      group: "simcard",
      behavior: "text",
      defaultName: "msisdn",
      hasSuggested: true,
      visibleGroup: "month",
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "range",
      group: "consumption",
      behavior: "bytes",
      defaultName: "total",
      hasSuggested: false,
      visibleGroup: "month",
      suggestionUrl: "consumption_month_filter",
      minToMakeRequest: 0
    },
    {
      type: "month",
      group: "baseDate",
      behavior: "date",
      defaultName: "month",
      hasSuggested: false,
      visibleGroup: "month",
      suggestionUrl: "consumption_month_filter",
      minToMakeRequest: 0
    },
    {
      type: "select",
      group: "simcard",
      behavior: "carrier",
      defaultName: "carrier",
      hasSuggested: false,
      visibleGroup: "month",
      suggestionUrl: "inventory_filter",
      minToMakeRequest: 3
    },
    {
      type: "range",
      group: "consumption",
      behavior: "number",
      defaultName: "consumptionPercentage",
      hasSuggested: false,
      visibleGroup: "month",
      suggestionUrl: "consumption_month_filter",
      minToMakeRequest: 2
    },
    {
      type: "text",
      group: "process",
      behavior: "text",
      defaultName: "companyName",
      hasSuggested: true,
      visibleGroup: "",
      suggestionUrl: "company_filter",
      minToMakeRequest: 0
    },
    {
      type: "select",
      group: "process",
      behavior: "processScope",
      defaultName: "scope",
      hasSuggested: false,
      visibleGroup: "",
      suggestionUrl: "",
      minToMakeRequest: 3
    },
    {
      type: "select",
      group: "process",
      behavior: "processName",
      defaultName: "processName",
      hasSuggested: false,
      visibleGroup: "",
      suggestionUrl: "",
      minToMakeRequest: 3
    },
    {
      type: "select",
      group: "process",
      behavior: "processStatus",
      defaultName: "status",
      hasSuggested: false,
      visibleGroup: "",
      suggestionUrl: "",
      minToMakeRequest: 3
    },
    {
      type: "range",
      group: "process",
      behavior: "bytes",
      defaultName: "fileSize",
      hasSuggested: false,
      visibleGroup: "",
      suggestionUrl: "t",
      minToMakeRequest: 0
    },
    {
      type: "range",
      group: "process",
      behavior: "number",
      defaultName: "attempts",
      hasSuggested: false,
      visibleGroup: "",
      suggestionUrl: "",
      minToMakeRequest: 0
    },
    {
      type: "date",
      group: "baseDate",
      behavior: "date",
      defaultName: "createdAt",
      hasSuggested: false,
      visibleGroup: "",
      suggestionUrl: "",
      minToMakeRequest: 0
    },
    {
      type: "date",
      group: "baseDate",
      behavior: "date",
      defaultName: "updatedAt",
      hasSuggested: false,
      visibleGroup: "",
      suggestionUrl: "",
      minToMakeRequest: 0
    },
    {
      type: "date",
      group: "baseDate",
      behavior: "date",
      defaultName: "expireAt",
      hasSuggested: false,
      visibleGroup: "",
      suggestionUrl: "",
      minToMakeRequest: 0
    }
  ],
  groupsPossibilities: [
    { name: "simcard" },
    { name: "consumption" },
    { name: "baseDate" },
    { name: "agroup" },
    { name: "connectivity" },
    { name: "process" }
  ],
  carriers: [
    {
      id: 6,
      carrier: "ALGAR",
      alias: "Algar",
      url: "/img/logos/algar.png",
      type: "png",
      height: 15
    },
    {
      id: 7,
      carrier: "CLARO",
      alias: "Claro",
      url: "/img/logos/claro.png",
      type: "png",
      height: 15
    },
    {
      id: 12,
      carrier: "CONECTA",
      alias: "Conecta",
      url: "/img/logos/conecta.png",
      type: "png",
      height: 10
    },
    {
      id: 15,
      carrier: "MOVISTAR",
      alias: "Movistar",
      url: "/img/logos/telefonica.png",
      type: "png",
      height: 10
    },
    {
      id: 8,
      carrier: "OI",
      alias: "Oi",
      url: "/img/logos/oi.png",
      type: "png",
      height: 20
    },
    {
      id: 13,
      carrier: "TIGO",
      alias: "Tigo",
      url: "/img/logos/tigo.png",
      type: "png",
      height: 17
    },
    {
      id: 9,
      carrier: "TIM",
      alias: "TIM",
      url: "/img/logos/tim.png",
      type: "png",
      height: 12
    },
    {
      id: 10,
      carrier: "VIVO",
      alias: "Vivo",
      url: "/img/logos/vivo.png",
      type: "png",
      height: 15
    },
    {
      id: 11,
      carrier: "VODAFONE",
      alias: "Vodafone",
      url: "/img/logos/vodafone.png",
      type: "png",
      height: 17
    }
  ],
  folders: [
    {
      id: 30979,
      name: ".131",
      company_id: 8983,
      count: 2,
      company_name: "[GPRS-TESTE] VANDERLEI"
    },
    {
      id: 30980,
      name: ".132",
      company_id: 8983,
      count: 2,
      company_name: "[GPRS-TESTE] VANDERLEI"
    },
    {
      id: 30981,
      name: ".133",
      company_id: 8983,
      count: 2,
      company_name: "[GPRS-TESTE] VANDERLEI"
    },
    {
      id: 30982,
      name: ".134",
      company_id: 8983,
      count: 1,
      company_name: "[GPRS-TESTE] VANDERLEI"
    },
    {
      id: 30983,
      name: ".99",
      company_id: 8983,
      count: 1,
      company_name: "[GPRS-TESTE] VANDERLEI"
    },
    {
      id: 10991,
      name: "01_TELECHEQUE",
      company_id: 2216,
      count: 5,
      company_name: "MULTINET"
    },
    {
      id: 11851,
      name: "02_ESTOQUE_MATRIZ",
      company_id: 2216,
      count: 8,
      company_name: "MULTINET"
    },
    {
      id: 10492,
      name: "1651_CLARO",
      company_id: 541,
      count: 8,
      company_name: "FIRST DATA"
    },
    {
      id: 27632,
      name: "1_CANCELAMENTO/REPOSIÇÃO",
      company_id: 4923,
      count: 4822,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27872,
      name: "1_EM ANÁLISE",
      company_id: 4923,
      count: 1291,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27862,
      name: "1_EM ESTOQUE",
      company_id: 4923,
      count: 22537,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27892,
      name: "1_EM ESTOQUE BARUERI",
      company_id: 4923,
      count: 264,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27672,
      name: "2_AF_BA.SALVADOR",
      company_id: 4923,
      count: 49,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 23453,
      name: "2_AF_CE.JNORTE",
      company_id: 4923,
      count: 6,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 28332,
      name: "2_AF_ES.VITORIA",
      company_id: 4923,
      count: 42,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21491,
      name: "2_AF_PE.RECIFE",
      company_id: 4923,
      count: 256,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27682,
      name: "2_AF_RIODEJANEIRO",
      company_id: 4923,
      count: 251,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 28352,
      name: "2_AF_RO.RONDONIA",
      company_id: 4923,
      count: 3,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27692,
      name: "2_AF_RS.SERRAGAUCHA",
      company_id: 4923,
      count: 103,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27702,
      name: "2_AF_SE.SERGIPE",
      company_id: 4923,
      count: 394,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21703,
      name: "2_AF_SJRPR",
      company_id: 4923,
      count: 166,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21793,
      name: "2_MG.BELOHORIZONTE",
      company_id: 4923,
      count: 31,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 12022,
      name: "3ia",
      company_id: 62,
      count: 13271,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 27712,
      name: "3_ALUGUEL_ACQIO",
      company_id: 4923,
      count: 18,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 10470,
      name: "700 TIM",
      company_id: 541,
      count: 0,
      company_name: "FIRST DATA"
    },
    {
      id: 10472,
      name: "900_OI",
      company_id: 541,
      count: 4,
      company_name: "FIRST DATA"
    },
    {
      id: 12699,
      name: "Adaltech",
      company_id: 1321,
      count: 10,
      company_name: "ADALTECH"
    },
    {
      id: 12020,
      name: "ADMZ",
      company_id: 2118,
      count: 49,
      company_name: "AGROAVES"
    },
    {
      id: 21713,
      name: "AL.ARAPIRACA",
      company_id: 4923,
      count: 510,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 22523,
      name: "AM.MANAUS",
      company_id: 4923,
      count: 406,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 12095,
      name: "Ambiente Teste Tribanco 01",
      company_id: 25,
      count: 2,
      company_name: "TRIBANCO"
    },
    {
      id: 23793,
      name: "AP.MACAPA",
      company_id: 4923,
      count: 2,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 24523,
      name: "APPI_IPIRANGA",
      company_id: 4,
      count: 478,
      company_name: "APPI"
    },
    {
      id: 24543,
      name: "APPI_NEXXPAGO",
      company_id: 4,
      count: 625,
      company_name: "APPI"
    },
    {
      id: 24603,
      name: "APPI_PLSERVICE",
      company_id: 4,
      count: 86,
      company_name: "APPI"
    },
    {
      id: 24573,
      name: "APPI_UNIK",
      company_id: 4,
      count: 71,
      company_name: "APPI"
    },
    {
      id: 27372,
      name: "AppNavs",
      company_id: 1651,
      count: 50,
      company_name: "REDE USE"
    },
    {
      id: 24943,
      name: "Araguaina",
      company_id: 1061,
      count: 5,
      company_name: "BRASILCARD"
    },
    {
      id: 28522,
      name: "Autopass",
      company_id: 62,
      count: 11,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 17121,
      name: "B2BPOS",
      company_id: 2420,
      count: 4,
      company_name: "NOSVAMOS"
    },
    {
      id: 22533,
      name: "BA.LAUROFREITAS",
      company_id: 4923,
      count: 500,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21461,
      name: "BA.OESTE",
      company_id: 4923,
      count: 84,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21813,
      name: "BA.PORTOSEGURO",
      company_id: 4923,
      count: 1305,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21371,
      name: "BA.SALVADOR",
      company_id: 4923,
      count: 2,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 11096,
      name: "Bauminas",
      company_id: 2328,
      count: 1,
      company_name: "BRASIL TELEMETRIA"
    },
    {
      id: 24953,
      name: "Belem",
      company_id: 1061,
      count: 111,
      company_name: "BRASILCARD"
    },
    {
      id: 30839,
      name: "BH",
      company_id: 2540,
      count: 1,
      company_name: "STOPFACIL"
    },
    {
      id: 12781,
      name: "Bloqueado - Sem Rota",
      company_id: 1081,
      count: 0,
      company_name: "HANA LATIN AMERICA"
    },
    {
      id: 27722,
      name: "BM_CENTRO.OESTE",
      company_id: 4923,
      count: 24,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27732,
      name: "BM_NORDESTE",
      company_id: 4923,
      count: 8,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 25532,
      name: "BNB_MA.MARANHÃO",
      company_id: 4923,
      count: 0,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 22893,
      name: "BNB_MG.MONTESCLAROS",
      company_id: 4923,
      count: 0,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 23383,
      name: "BraveTicket-M2M",
      company_id: 2420,
      count: 50,
      company_name: "NOSVAMOS"
    },
    {
      id: 9620,
      name: "BRB",
      company_id: 1841,
      count: 55,
      company_name: "PERTO S.A"
    },
    {
      id: 23953,
      name: "Caio",
      company_id: 4923,
      count: 21363,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 19181,
      name: "CAMPO",
      company_id: 94,
      count: 37,
      company_name: "TEFTI"
    },
    {
      id: 25102,
      name: "Campo Grande",
      company_id: 1061,
      count: 34,
      company_name: "BRASILCARD"
    },
    {
      id: 1501,
      name: "Cancelar_TIM",
      company_id: 51,
      count: 6,
      company_name: "LEMON BANK"
    },
    {
      id: 26012,
      name: "Caruana",
      company_id: 2540,
      count: 98,
      company_name: "STOPFACIL"
    },
    {
      id: 30920,
      name: "Carulla",
      company_id: 10,
      count: 1,
      company_name: "LYRA BRASIL"
    },
    {
      id: 21521,
      name: "CE.FORTALEZA",
      company_id: 4923,
      count: 791,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 14711,
      name: "Central Park Sorocaba",
      company_id: 2494,
      count: 1,
      company_name: "PRATICO"
    },
    {
      id: 25122,
      name: "Charles",
      company_id: 5273,
      count: 20,
      company_name: "UAI PAGUEI"
    },
    {
      id: 9958,
      name: "CHECK FORTE",
      company_id: 541,
      count: 0,
      company_name: "FIRST DATA"
    },
    {
      id: 24893,
      name: "chips ABS tele",
      company_id: 2328,
      count: 3,
      company_name: "BRASIL TELEMETRIA"
    },
    {
      id: 21033,
      name: "CHIPS CANCELADOS",
      company_id: 4903,
      count: 14056,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 28322,
      name: "CHIPS CANCELADOS",
      company_id: 4,
      count: 1451,
      company_name: "APPI"
    },
    {
      id: 25372,
      name: "CHIPS INATIVOS",
      company_id: 1208,
      count: 1,
      company_name: "CREDIALIMENTAÇÃO"
    },
    {
      id: 28232,
      name: "chips prontos",
      company_id: 7452,
      count: 30,
      company_name: "BRASIL CASH"
    },
    {
      id: 481,
      name: "CLARO",
      company_id: 39,
      count: 3042,
      company_name: "SICREDI"
    },
    {
      id: 541,
      name: "CLARO",
      company_id: 2502,
      count: 2449,
      company_name: "DACASA"
    },
    {
      id: 951,
      name: "CLARO",
      company_id: 311,
      count: 10,
      company_name: "BARRIGA VERDE"
    },
    {
      id: 1821,
      name: "CLARO",
      company_id: 3,
      count: 548,
      company_name: "DD CRED"
    },
    {
      id: 2041,
      name: "CLARO",
      company_id: 541,
      count: 76,
      company_name: "FIRST DATA"
    },
    {
      id: 2171,
      name: "CLARO",
      company_id: 401,
      count: 428,
      company_name: "UP BRASIL- EMPÓRIO CARD LTDA"
    },
    {
      id: 2791,
      name: "CLARO",
      company_id: 461,
      count: 5706,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 3841,
      name: "CLARO",
      company_id: 18,
      count: 2,
      company_name: "EXPAND CARDS"
    },
    {
      id: 3911,
      name: "CLARO",
      company_id: 621,
      count: 23,
      company_name: "VIVA (TOPCARD)"
    },
    {
      id: 4611,
      name: "CLARO",
      company_id: 1101,
      count: 5,
      company_name: "COMUNIX"
    },
    {
      id: 4691,
      name: "CLARO",
      company_id: 1121,
      count: 2,
      company_name: "TK ELETRON"
    },
    {
      id: 4721,
      name: "CLARO",
      company_id: 1151,
      count: 10,
      company_name: "FINNET"
    },
    {
      id: 4818,
      name: "CLARO",
      company_id: 1167,
      count: 11,
      company_name: "E-CARDES"
    },
    {
      id: 4826,
      name: "CLARO",
      company_id: 1166,
      count: 92,
      company_name: "DM CARD"
    },
    {
      id: 5681,
      name: "CLARO",
      company_id: 1451,
      count: 0,
      company_name: "BRASIL CONVENIOS"
    },
    {
      id: 6001,
      name: "CLARO",
      company_id: 1531,
      count: 16,
      company_name: "ICI"
    },
    {
      id: 6241,
      name: "CLARO",
      company_id: 1601,
      count: 128,
      company_name: "IPRIME"
    },
    {
      id: 6431,
      name: "CLARO",
      company_id: 391,
      count: 73,
      company_name: "SIGACRED"
    },
    {
      id: 7101,
      name: "CLARO",
      company_id: 1111,
      count: 16,
      company_name: "ENTERPAG"
    },
    {
      id: 7611,
      name: "CLARO",
      company_id: 2287,
      count: 2,
      company_name: "CONDUCTOR"
    },
    {
      id: 8801,
      name: "CLARO",
      company_id: 1208,
      count: 68,
      company_name: "CREDIALIMENTAÇÃO"
    },
    {
      id: 9510,
      name: "CLARO",
      company_id: 2079,
      count: 5,
      company_name: "BORBA CARD"
    },
    {
      id: 9595,
      name: "CLARO",
      company_id: 1961,
      count: 106,
      company_name: "SOUZA COMERCIO"
    },
    {
      id: 9698,
      name: "CLARO",
      company_id: 1841,
      count: 72,
      company_name: "PERTO S.A"
    },
    {
      id: 9788,
      name: "CLARO",
      company_id: 2099,
      count: 2,
      company_name: "AVANTICARD"
    },
    {
      id: 9880,
      name: "CLARO",
      company_id: 2124,
      count: 181,
      company_name: "OMNI"
    },
    {
      id: 9904,
      name: "CLARO",
      company_id: 2127,
      count: 4,
      company_name: "OK SUPERATACADO"
    },
    {
      id: 10131,
      name: "CLARO",
      company_id: 2184,
      count: 20,
      company_name: "FAMILLY CARD"
    },
    {
      id: 10141,
      name: "CLARO",
      company_id: 2185,
      count: 2,
      company_name: "SP INSTALL"
    },
    {
      id: 10348,
      name: "CLARO",
      company_id: 2214,
      count: 4,
      company_name: "ARC SOLUCOES"
    },
    {
      id: 10430,
      name: "CLARO",
      company_id: 2234,
      count: 9,
      company_name: "TK 14"
    },
    {
      id: 10529,
      name: "CLARO",
      company_id: 2252,
      count: 2,
      company_name: "MFC ADM"
    },
    {
      id: 10577,
      name: "CLARO",
      company_id: 103,
      count: 20,
      company_name: "JOCKEY SP"
    },
    {
      id: 10635,
      name: "CLARO",
      company_id: 1951,
      count: 20,
      company_name: "MURY"
    },
    {
      id: 10737,
      name: "CLARO",
      company_id: 102,
      count: 11,
      company_name: "COOPERCRED"
    },
    {
      id: 10738,
      name: "CLARO",
      company_id: 2126,
      count: 15,
      company_name: "MAXXCARD"
    },
    {
      id: 10952,
      name: "CLARO",
      company_id: 1471,
      count: 13,
      company_name: "VALECONCARD"
    },
    {
      id: 10970,
      name: "CLARO",
      company_id: 2313,
      count: 91,
      company_name: "RESTAURANTE WEB"
    },
    {
      id: 11046,
      name: "CLARO",
      company_id: 2110,
      count: 59,
      company_name: "3E ENGENHARIA"
    },
    {
      id: 11049,
      name: "CLARO",
      company_id: 2322,
      count: 1,
      company_name: "ARAPOCA BILHARES"
    },
    {
      id: 11120,
      name: "CLARO",
      company_id: 1651,
      count: 66,
      company_name: "REDE USE"
    },
    {
      id: 11131,
      name: "CLARO",
      company_id: 25,
      count: 652,
      company_name: "TRIBANCO"
    },
    {
      id: 11194,
      name: "CLARO",
      company_id: 2338,
      count: 45,
      company_name: "REDECONV"
    },
    {
      id: 11303,
      name: "CLARO",
      company_id: 2147,
      count: 78,
      company_name: "GUICHE WEB"
    },
    {
      id: 11319,
      name: "CLARO",
      company_id: 2356,
      count: 0,
      company_name: "BILHETERIA DIGITAL"
    },
    {
      id: 11451,
      name: "CLARO",
      company_id: 2328,
      count: 5,
      company_name: "BRASIL TELEMETRIA"
    },
    {
      id: 11491,
      name: "CLARO",
      company_id: 2386,
      count: 343,
      company_name: "FITCARD"
    },
    {
      id: 11524,
      name: "CLARO",
      company_id: 1001,
      count: 1,
      company_name: "Softnex"
    },
    {
      id: 11541,
      name: "CLARO",
      company_id: 2378,
      count: 4,
      company_name: "MULTIPLOCARD"
    },
    {
      id: 11547,
      name: "CLARO",
      company_id: 2370,
      count: 70,
      company_name: "ADIAN TI"
    },
    {
      id: 11725,
      name: "CLARO",
      company_id: 2104,
      count: 12,
      company_name: "ACG ADMINISTRADORA"
    },
    {
      id: 11883,
      name: "CLARO",
      company_id: 106,
      count: 38,
      company_name: "SENFFNET"
    },
    {
      id: 12077,
      name: "CLARO",
      company_id: 2458,
      count: 48,
      company_name: "SICOOB CREDPIT"
    },
    {
      id: 12150,
      name: "CLARO",
      company_id: 2473,
      count: 70,
      company_name: "SICOOB CREDIPARNOR"
    },
    {
      id: 12222,
      name: "CLARO",
      company_id: 2263,
      count: 1,
      company_name: "BIGCLUB CARD"
    },
    {
      id: 12229,
      name: "CLARO",
      company_id: 2469,
      count: 161,
      company_name: "VAILOG"
    },
    {
      id: 12266,
      name: "CLARO",
      company_id: 2489,
      count: 150,
      company_name: "VALLE CARD"
    },
    {
      id: 12275,
      name: "CLARO",
      company_id: 1311,
      count: 2,
      company_name: "TECBIZ"
    },
    {
      id: 12365,
      name: "CLARO",
      company_id: 2505,
      count: 1,
      company_name: "NEUS MINAS"
    },
    {
      id: 12463,
      name: "CLARO",
      company_id: 2513,
      count: 29,
      company_name: "CONSORCIO METROPOLIT (AUTOPASS)"
    },
    {
      id: 12557,
      name: "CLARO",
      company_id: 2530,
      count: 0,
      company_name: "NEXXPAGO"
    },
    {
      id: 12636,
      name: "CLARO",
      company_id: 2546,
      count: 0,
      company_name: "CARD PLAN"
    },
    {
      id: 12651,
      name: "CLARO",
      company_id: 2088,
      count: 2,
      company_name: "GRANDCARD"
    },
    {
      id: 12892,
      name: "CLARO",
      company_id: 2465,
      count: 1,
      company_name: "OPERAPAG (MULTICARD)"
    },
    {
      id: 13102,
      name: "CLARO",
      company_id: 2509,
      count: 2,
      company_name: "BANCO RODOBENS"
    },
    {
      id: 13982,
      name: "CLARO",
      company_id: 3012,
      count: 0,
      company_name: "PAYNET"
    },
    {
      id: 14032,
      name: "CLARO",
      company_id: 3022,
      count: 5,
      company_name: "[GPRS-TESTE] BELA VIAGEM"
    },
    {
      id: 16901,
      name: "CLARO",
      company_id: 3391,
      count: 350,
      company_name: "CINTIA CHAVES GONCALVES"
    },
    {
      id: 17361,
      name: "CLARO",
      company_id: 3511,
      count: 11,
      company_name: "REDE PONTO MAIS"
    },
    {
      id: 17841,
      name: "CLARO",
      company_id: 2702,
      count: 1,
      company_name: "WAY UP"
    },
    {
      id: 17921,
      name: "CLARO",
      company_id: 2832,
      count: 177,
      company_name: "ENOPP"
    },
    {
      id: 21043,
      name: "CLARO",
      company_id: 4903,
      count: 1082,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 30841,
      name: "CLARO",
      company_id: 4,
      count: 35,
      company_name: "APPI"
    },
    {
      id: 30843,
      name: "CLARO",
      company_id: 51,
      count: 512,
      company_name: "LEMON BANK"
    },
    {
      id: 30865,
      name: "CLARO",
      company_id: 81,
      count: 81,
      company_name: "ONECARD"
    },
    {
      id: 30927,
      name: "CLARO",
      company_id: 1081,
      count: 1,
      company_name: "HANA LATIN AMERICA"
    },
    {
      id: 30932,
      name: "CLARO",
      company_id: 111,
      count: 1,
      company_name: "RELEASE"
    },
    {
      id: 30936,
      name: "CLARO",
      company_id: 161,
      count: 0,
      company_name: "VISAO CARD"
    },
    {
      id: 30938,
      name: "CLARO",
      company_id: 1991,
      count: 0,
      company_name: "GRUPO ARARA AZUL"
    },
    {
      id: 30941,
      name: "CLARO",
      company_id: 8977,
      count: 37,
      company_name: "REDECARD SERVIÇOS"
    },
    {
      id: 30943,
      name: "CLARO",
      company_id: 8970,
      count: 1,
      company_name: "FIN IN NET"
    },
    {
      id: 30958,
      name: "CLARO",
      company_id: 8967,
      count: 5,
      company_name: "CPFL"
    },
    {
      id: 30962,
      name: "CLARO",
      company_id: 8984,
      count: 1,
      company_name: "[TESTE] AUTOCRED"
    },
    {
      id: 30966,
      name: "CLARO",
      company_id: 2183,
      count: 5,
      company_name: "ABRAPETITE"
    },
    {
      id: 30967,
      name: "CLARO",
      company_id: 8976,
      count: 30925,
      company_name: "REDECARD GERENCIAMENTO"
    },
    {
      id: 30971,
      name: "CLARO",
      company_id: 8963,
      count: 8,
      company_name: "ADIL LELIS"
    },
    {
      id: 30984,
      name: "CLARO",
      company_id: 8980,
      count: 1,
      company_name: "[GPRS-TESTE] BOA DIVERSAO"
    },
    {
      id: 30987,
      name: "CLARO",
      company_id: 8964,
      count: 3,
      company_name: "ATL"
    },
    {
      id: 30996,
      name: "CLARO",
      company_id: 8974,
      count: 2467,
      company_name: "PONTO CERTO"
    },
    {
      id: 31003,
      name: "Claro",
      company_id: 531,
      count: 0,
      company_name: "LYRA VENEZUELA"
    },
    {
      id: 31004,
      name: "CLARO",
      company_id: 551,
      count: 5,
      company_name: "WEX (FASTCRED)"
    },
    {
      id: 31007,
      name: "CLARO",
      company_id: 8968,
      count: 2692,
      company_name: "CREDISHOP"
    },
    {
      id: 30997,
      name: "CLARO 999",
      company_id: 8974,
      count: 975,
      company_name: "PONTO CERTO"
    },
    {
      id: 30998,
      name: "CLARO CGE",
      company_id: 8974,
      count: 26,
      company_name: "PONTO CERTO"
    },
    {
      id: 30999,
      name: "CLAROIII",
      company_id: 8974,
      count: 332,
      company_name: "PONTO CERTO"
    },
    {
      id: 30968,
      name: "CLARO_COPA",
      company_id: 8976,
      count: 291,
      company_name: "REDECARD GERENCIAMENTO"
    },
    {
      id: 24013,
      name: "Clientes",
      company_id: 5833,
      count: 97,
      company_name: "OMEGA CARD"
    },
    {
      id: 26002,
      name: "Clientes Teste",
      company_id: 6382,
      count: 1,
      company_name: "[GPRS-TESTE] FROGPAY"
    },
    {
      id: 27502,
      name: "CNB",
      company_id: 541,
      count: 14,
      company_name: "FIRST DATA"
    },
    {
      id: 25042,
      name: "Colombia",
      company_id: 3012,
      count: 0,
      company_name: "PAYNET"
    },
    {
      id: 12040,
      name: "Comodatos",
      company_id: 62,
      count: 882,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 13122,
      name: "COMPROCARD",
      company_id: 241,
      count: 158,
      company_name: "COMPROCARD"
    },
    {
      id: 24093,
      name: "CONECTA",
      company_id: 1961,
      count: 0,
      company_name: "SOUZA COMERCIO"
    },
    {
      id: 25382,
      name: "CONECTA",
      company_id: 1208,
      count: 10,
      company_name: "CREDIALIMENTAÇÃO"
    },
    {
      id: 27022,
      name: "CONECTA",
      company_id: 2502,
      count: 120,
      company_name: "DACASA"
    },
    {
      id: 10383,
      name: "CONTA CIDADA",
      company_id: 2110,
      count: 3,
      company_name: "3E ENGENHARIA"
    },
    {
      id: 19371,
      name: "Convênios Card",
      company_id: 1651,
      count: 123,
      company_name: "REDE USE"
    },
    {
      id: 23493,
      name: "Coopercred 2",
      company_id: 102,
      count: 1,
      company_name: "COOPERCRED"
    },
    {
      id: 31000,
      name: "CORBAN",
      company_id: 8974,
      count: 151,
      company_name: "PONTO CERTO"
    },
    {
      id: 21953,
      name: "crc",
      company_id: 4591,
      count: 2,
      company_name: "SERRANA ENGENHARIA"
    },
    {
      id: 30977,
      name: "Cross",
      company_id: 8981,
      count: 4,
      company_name: "[GPRS-TESTE] CROSSCARD"
    },
    {
      id: 25092,
      name: "Cuiaba",
      company_id: 1061,
      count: 1,
      company_name: "BRASILCARD"
    },
    {
      id: 18321,
      name: "DB CENTRÃO",
      company_id: 461,
      count: 1575,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 18531,
      name: "DB GRUPO CARD",
      company_id: 461,
      count: 83,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 19931,
      name: "ddd 81",
      company_id: 2469,
      count: 2,
      company_name: "VAILOG"
    },
    {
      id: 23883,
      name: "DDD 83",
      company_id: 2448,
      count: 0,
      company_name: "TELERIO"
    },
    {
      id: 23903,
      name: "DDD 84",
      company_id: 2448,
      count: 0,
      company_name: "TELERIO"
    },
    {
      id: 23893,
      name: "DDD 86",
      company_id: 2448,
      count: 0,
      company_name: "TELERIO"
    },
    {
      id: 23823,
      name: "DDD 88",
      company_id: 2448,
      count: 0,
      company_name: "TELERIO"
    },
    {
      id: 23873,
      name: "DDD 89",
      company_id: 2448,
      count: 0,
      company_name: "TELERIO"
    },
    {
      id: 451,
      name: "default",
      company_id: 2502,
      count: 1796,
      company_name: "DACASA"
    },
    {
      id: 1211,
      name: "default",
      company_id: 461,
      count: 38236,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 1601,
      name: "default",
      company_id: 551,
      count: 224,
      company_name: "WEX (FASTCRED)"
    },
    {
      id: 1951,
      name: "default",
      company_id: 621,
      count: 31,
      company_name: "VIVA (TOPCARD)"
    },
    {
      id: 2031,
      name: "default",
      company_id: 541,
      count: 137304,
      company_name: "FIRST DATA"
    },
    {
      id: 2161,
      name: "default",
      company_id: 401,
      count: 1108,
      company_name: "UP BRASIL- EMPÓRIO CARD LTDA"
    },
    {
      id: 10779,
      name: "default",
      company_id: 1471,
      count: 10,
      company_name: "VALECONCARD"
    },
    {
      id: 10969,
      name: "default",
      company_id: 2313,
      count: 17,
      company_name: "RESTAURANTE WEB"
    },
    {
      id: 11098,
      name: "default",
      company_id: 25,
      count: 7189,
      company_name: "TRIBANCO"
    },
    {
      id: 11318,
      name: "default",
      company_id: 2356,
      count: 8,
      company_name: "BILHETERIA DIGITAL"
    },
    {
      id: 11454,
      name: "default",
      company_id: 2370,
      count: 15,
      company_name: "ADIAN TI"
    },
    {
      id: 11490,
      name: "default",
      company_id: 2386,
      count: 5500,
      company_name: "FITCARD"
    },
    {
      id: 11927,
      name: "default",
      company_id: 2446,
      count: 76,
      company_name: "SAVEGNAGO"
    },
    {
      id: 11938,
      name: "default",
      company_id: 2448,
      count: 0,
      company_name: "TELERIO"
    },
    {
      id: 12047,
      name: "default",
      company_id: 2350,
      count: 325,
      company_name: "M.M DA COSTA EIRELLI"
    },
    {
      id: 12076,
      name: "default",
      company_id: 2458,
      count: 10,
      company_name: "SICOOB CREDPIT"
    },
    {
      id: 12112,
      name: "default",
      company_id: 2469,
      count: 142,
      company_name: "VAILOG"
    },
    {
      id: 12218,
      name: "default",
      company_id: 2263,
      count: 11,
      company_name: "BIGCLUB CARD"
    },
    {
      id: 12448,
      name: "default",
      company_id: 2513,
      count: 1,
      company_name: "CONSORCIO METROPOLIT (AUTOPASS)"
    },
    {
      id: 12511,
      name: "default",
      company_id: 2524,
      count: 1,
      company_name: "ALIANCA TECNOLOGIA"
    },
    {
      id: 12558,
      name: "default",
      company_id: 2533,
      count: 99,
      company_name: "MGM LOGISTICA"
    },
    {
      id: 12724,
      name: "default",
      company_id: 241,
      count: 910,
      company_name: "COMPROCARD"
    },
    {
      id: 12730,
      name: "default",
      company_id: 2567,
      count: 69,
      company_name: "DISCOVERCARD"
    },
    {
      id: 12842,
      name: "default",
      company_id: 2465,
      count: 11,
      company_name: "OPERAPAG (MULTICARD)"
    },
    {
      id: 12982,
      name: "default",
      company_id: 2509,
      count: 56,
      company_name: "BANCO RODOBENS"
    },
    {
      id: 13622,
      name: "default",
      company_id: 2832,
      count: 3945,
      company_name: "ENOPP"
    },
    {
      id: 13962,
      name: "default",
      company_id: 3012,
      count: 171,
      company_name: "PAYNET"
    },
    {
      id: 16741,
      name: "default",
      company_id: 2358,
      count: 1,
      company_name: "TIM"
    },
    {
      id: 16771,
      name: "default",
      company_id: 3391,
      count: 1180,
      company_name: "CINTIA CHAVES GONCALVES"
    },
    {
      id: 17041,
      name: "default",
      company_id: 3461,
      count: 2,
      company_name: "[GPRS-TESTE] ARSPAG"
    },
    {
      id: 17351,
      name: "default",
      company_id: 3511,
      count: 559,
      company_name: "REDE PONTO MAIS"
    },
    {
      id: 17941,
      name: "default",
      company_id: 3581,
      count: 34,
      company_name: "SAMAR"
    },
    {
      id: 18161,
      name: "default",
      company_id: 3711,
      count: 165,
      company_name: "SICOOB ARCOMCREDI"
    },
    {
      id: 18181,
      name: "default",
      company_id: 3761,
      count: 8299,
      company_name: "BEBLUE"
    },
    {
      id: 18391,
      name: "default",
      company_id: 3861,
      count: 802,
      company_name: "REDEPAY"
    },
    {
      id: 18551,
      name: "default",
      company_id: 3911,
      count: 270,
      company_name: "TECPAY"
    },
    {
      id: 18581,
      name: "default",
      company_id: 3901,
      count: 67,
      company_name: "SICOOB ACICREDI"
    },
    {
      id: 18731,
      name: "default",
      company_id: 3951,
      count: 890,
      company_name: "GO"
    },
    {
      id: 18781,
      name: "default",
      company_id: 2274,
      count: 17,
      company_name: "SOLUCARD"
    },
    {
      id: 18941,
      name: "default",
      company_id: 4031,
      count: 757,
      company_name: "CIANO SOLUCOES FINAN LTDA"
    },
    {
      id: 18951,
      name: "default",
      company_id: 281,
      count: 120730,
      company_name: "BANCO SAFRA"
    },
    {
      id: 19041,
      name: "default",
      company_id: 4041,
      count: 13,
      company_name: "BENEMUSIC - TEST"
    },
    {
      id: 19141,
      name: "default",
      company_id: 4101,
      count: 0,
      company_name: "PAGPOP"
    },
    {
      id: 19241,
      name: "default",
      company_id: 4151,
      count: 119,
      company_name: "GERTEC"
    },
    {
      id: 19291,
      name: "default",
      company_id: 2378,
      count: 16,
      company_name: "MULTIPLOCARD"
    },
    {
      id: 19331,
      name: "default",
      company_id: 4191,
      count: 3,
      company_name: "NEXTIA"
    },
    {
      id: 19461,
      name: "default",
      company_id: 4241,
      count: 8,
      company_name: "[GPRS-TESTE] SERVOFIEL TECNOLOGIA"
    },
    {
      id: 19471,
      name: "default",
      company_id: 2174,
      count: 87,
      company_name: "JSL"
    },
    {
      id: 19561,
      name: "default",
      company_id: 4321,
      count: 59,
      company_name: "SAMT"
    },
    {
      id: 19661,
      name: "default",
      company_id: 2285,
      count: 0,
      company_name: "EVOLUCARD"
    },
    {
      id: 19671,
      name: "default",
      company_id: 2099,
      count: 84,
      company_name: "AVANTICARD"
    },
    {
      id: 19681,
      name: "default",
      company_id: 4371,
      count: 39,
      company_name: "SIA CARD"
    },
    {
      id: 19731,
      name: "default",
      company_id: 4381,
      count: 5,
      company_name: "PAYLEVEN"
    },
    {
      id: 19751,
      name: "default",
      company_id: 4181,
      count: 354,
      company_name: "AMERICA PAYMENT"
    },
    {
      id: 19851,
      name: "default",
      company_id: 4401,
      count: 20,
      company_name: "[GPRS-TESTE] IDENT EVEN"
    },
    {
      id: 19871,
      name: "default",
      company_id: 4391,
      count: 0,
      company_name: "SICOOB SERTAO MINAS"
    },
    {
      id: 19961,
      name: "default",
      company_id: 4431,
      count: 1259,
      company_name: "DCL SERVIÇOS (ALFASIG)"
    },
    {
      id: 20121,
      name: "default",
      company_id: 4461,
      count: 18,
      company_name: "PILARCRED"
    },
    {
      id: 20141,
      name: "default",
      company_id: 4491,
      count: 180,
      company_name: "FLEXPAG"
    },
    {
      id: 20271,
      name: "default",
      company_id: 4561,
      count: 125,
      company_name: "QIWI"
    },
    {
      id: 20291,
      name: "default",
      company_id: 4581,
      count: 9,
      company_name: "SICONCARD"
    },
    {
      id: 20341,
      name: "default",
      company_id: 4621,
      count: 8,
      company_name: "[GPRS-TESTE] CICLUM"
    },
    {
      id: 20351,
      name: "default",
      company_id: 4641,
      count: 2,
      company_name: "BRAXCARD"
    },
    {
      id: 20381,
      name: "default",
      company_id: 4661,
      count: 9,
      company_name: "UAI TICKET"
    },
    {
      id: 20441,
      name: "default",
      company_id: 4681,
      count: 228,
      company_name: "POLOCRED"
    },
    {
      id: 20451,
      name: "default",
      company_id: 4691,
      count: 121,
      company_name: "HOLDING PAGAMENTO"
    },
    {
      id: 20461,
      name: "default",
      company_id: 4701,
      count: 56,
      company_name: "FACE CARD"
    },
    {
      id: 20481,
      name: "default",
      company_id: 4721,
      count: 9,
      company_name: "NEOCOM"
    },
    {
      id: 20501,
      name: "default",
      company_id: 4251,
      count: 48,
      company_name: "BE MY GUEST"
    },
    {
      id: 20543,
      name: "default",
      company_id: 4743,
      count: 14,
      company_name: "QUERO 2 INGRESSOS"
    },
    {
      id: 20573,
      name: "default",
      company_id: 4773,
      count: 115,
      company_name: "ENTREGUE COMERCIO"
    },
    {
      id: 20633,
      name: "default",
      company_id: 4591,
      count: 122,
      company_name: "SERRANA ENGENHARIA"
    },
    {
      id: 20943,
      name: "default",
      company_id: 4953,
      count: 6,
      company_name: "[GPRS-TESTE] CONTA FACIL"
    },
    {
      id: 20963,
      name: "default",
      company_id: 4963,
      count: 0,
      company_name: "HUB MEIOS DE PAGAMENTO"
    },
    {
      id: 21023,
      name: "default",
      company_id: 4903,
      count: 12317,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 21133,
      name: "default",
      company_id: 4993,
      count: 3,
      company_name: "[GPRS-TESTE] EWALLY TEC."
    },
    {
      id: 21143,
      name: "default",
      company_id: 4933,
      count: 19,
      company_name: "PRINTICKETS"
    },
    {
      id: 21223,
      name: "default",
      company_id: 5053,
      count: 4,
      company_name: "[TESTE] MY EVENT"
    },
    {
      id: 21233,
      name: "default",
      company_id: 5063,
      count: 38,
      company_name: "CARTOES VIVA (VIVA CARD)"
    },
    {
      id: 21243,
      name: "default",
      company_id: 5073,
      count: 40,
      company_name: "INNOVA"
    },
    {
      id: 21273,
      name: "default",
      company_id: 5083,
      count: 29,
      company_name: "VINYA"
    },
    {
      id: 21571,
      name: "default",
      company_id: 5121,
      count: 1045,
      company_name: "SOULPAY (FSC CONSULTORIA)"
    },
    {
      id: 21581,
      name: "default",
      company_id: 5111,
      count: 105,
      company_name: "SINDICATO DO COMERCIO"
    },
    {
      id: 21633,
      name: "default",
      company_id: 5123,
      count: 681,
      company_name: "AKIREDE"
    },
    {
      id: 21833,
      name: "default",
      company_id: 5133,
      count: 1,
      company_name: "PAYMENU"
    },
    {
      id: 21843,
      name: "default",
      company_id: 5143,
      count: 455,
      company_name: "PAYSCOUT"
    },
    {
      id: 21943,
      name: "default",
      company_id: 5153,
      count: 8,
      company_name: "[GPRS-TESTE] TERRA CARD"
    },
    {
      id: 21963,
      name: "default",
      company_id: 5163,
      count: 10,
      company_name: "FANTASIA TH7"
    },
    {
      id: 22033,
      name: "default",
      company_id: 5213,
      count: 1,
      company_name: "COND MORADA"
    },
    {
      id: 22103,
      name: "default",
      company_id: 5233,
      count: 68,
      company_name: "BIZ SOLUCOES"
    },
    {
      id: 22213,
      name: "default",
      company_id: 5263,
      count: 1934,
      company_name: "ADIQ SOLUÇÕES DE PAGAMENTO S/A (BANCO BONSUCESSO)"
    },
    {
      id: 22243,
      name: "default",
      company_id: 5273,
      count: 211,
      company_name: "UAI PAGUEI"
    },
    {
      id: 22383,
      name: "default",
      company_id: 5353,
      count: 10,
      company_name: "[GPRS-TESTE] YOOPAY"
    },
    {
      id: 22463,
      name: "default",
      company_id: 5413,
      count: 145,
      company_name: "NWAY"
    },
    {
      id: 22693,
      name: "default",
      company_id: 5473,
      count: 12,
      company_name: "[GPRS-TESTE] CORSAN"
    },
    {
      id: 22703,
      name: "default",
      company_id: 5483,
      count: 44,
      company_name: "SWA"
    },
    {
      id: 22713,
      name: "default",
      company_id: 5493,
      count: 19,
      company_name: "BILHETERIA RAPIDA"
    },
    {
      id: 22973,
      name: "default",
      company_id: 5583,
      count: 411,
      company_name: "BELLUNO"
    },
    {
      id: 23343,
      name: "default",
      company_id: 5643,
      count: 11,
      company_name: "[GPRS-TESTE] FOUNDBOX"
    },
    {
      id: 23463,
      name: "default",
      company_id: 5683,
      count: 10,
      company_name: "FHR MEIOS DE PAGAMENTO LTDA ( TOTAL PAG)"
    },
    {
      id: 23603,
      name: "default",
      company_id: 5693,
      count: 41,
      company_name: "DVR"
    },
    {
      id: 23613,
      name: "default",
      company_id: 5703,
      count: 5,
      company_name: "G&R CARD"
    },
    {
      id: 23913,
      name: "default",
      company_id: 381,
      count: 52,
      company_name: "FORTBRASIL"
    },
    {
      id: 24003,
      name: "default",
      company_id: 5803,
      count: 0,
      company_name: "REDEFONE"
    },
    {
      id: 24023,
      name: "default",
      company_id: 5843,
      count: 34,
      company_name: "GONNAPET"
    },
    {
      id: 24033,
      name: "default",
      company_id: 5863,
      count: 26,
      company_name: "[GPRS-TESTE] AREATEC"
    },
    {
      id: 24103,
      name: "default",
      company_id: 5893,
      count: 37,
      company_name: "FIDELICARDS"
    },
    {
      id: 24163,
      name: "default",
      company_id: 5873,
      count: 377,
      company_name: "PROVER"
    },
    {
      id: 24323,
      name: "DEFAULT",
      company_id: 94,
      count: 11,
      company_name: "TEFTI"
    },
    {
      id: 24773,
      name: "default",
      company_id: 6003,
      count: 7,
      company_name: "[GPRS-TESTE] ROADPAY"
    },
    {
      id: 24793,
      name: "default",
      company_id: 6013,
      count: 137,
      company_name: "LOG PAY"
    },
    {
      id: 24813,
      name: "default",
      company_id: 6023,
      count: 7,
      company_name: "[GPRS-TESTE] DIRECT FACIL"
    },
    {
      id: 24983,
      name: "default",
      company_id: 6053,
      count: 20,
      company_name: "BLOCO DO QUEIJO"
    },
    {
      id: 25322,
      name: "default",
      company_id: 6122,
      count: 4,
      company_name: "[GPRS-TESTE] ZELADORIA BANDEIRA"
    },
    {
      id: 25332,
      name: "default",
      company_id: 5283,
      count: 394,
      company_name: "CARTOS FINTECH"
    },
    {
      id: 25402,
      name: "default",
      company_id: 6142,
      count: 11,
      company_name: "SUPER AGENDADOR"
    },
    {
      id: 25472,
      name: "default",
      company_id: 6172,
      count: 29,
      company_name: "DAVO"
    },
    {
      id: 25552,
      name: "default",
      company_id: 6182,
      count: 53,
      company_name: "DISCOVERY"
    },
    {
      id: 25692,
      name: "default",
      company_id: 6192,
      count: 4,
      company_name: "[GPRS-TESTE] CONNECT"
    },
    {
      id: 25712,
      name: "default",
      company_id: 6202,
      count: 7,
      company_name: "[GPRS-TESTE] VITAL BUSINESS"
    },
    {
      id: 25752,
      name: "default",
      company_id: 97,
      count: 5,
      company_name: "[GPRS-TESTE] FACIL CARD"
    },
    {
      id: 25762,
      name: "default",
      company_id: 6252,
      count: 30,
      company_name: "[GPRS-TESTE] SEEN TECNOLOGIA"
    },
    {
      id: 25772,
      name: "default",
      company_id: 6262,
      count: 59,
      company_name: "ATUALPAG"
    },
    {
      id: 25812,
      name: "default",
      company_id: 6332,
      count: 5,
      company_name: "[GPRS-TESTE] TORRA TORRA"
    },
    {
      id: 25912,
      name: "default",
      company_id: 6352,
      count: 4,
      company_name: "ART VIAGENS"
    },
    {
      id: 25952,
      name: "default",
      company_id: 6382,
      count: 10,
      company_name: "[GPRS-TESTE] FROGPAY"
    },
    {
      id: 26042,
      name: "default",
      company_id: 6422,
      count: 60,
      company_name: "JUNTOS PAGAMENTOS"
    },
    {
      id: 26062,
      name: "default",
      company_id: 6432,
      count: 255,
      company_name: "ICON PAGAMENTOS"
    },
    {
      id: 26182,
      name: "default",
      company_id: 6452,
      count: 515,
      company_name: "BERLIN FINANCE - SELFPAY"
    },
    {
      id: 26232,
      name: "default",
      company_id: 6462,
      count: 31,
      company_name: "[GPRS-TESTE] TICKTERIA"
    },
    {
      id: 26272,
      name: "default",
      company_id: 6472,
      count: 28,
      company_name: "VIBEMINAS"
    },
    {
      id: 26312,
      name: "default",
      company_id: 6502,
      count: 26,
      company_name: "FRANCISCO WAGNER"
    },
    {
      id: 26332,
      name: "default",
      company_id: 6512,
      count: 625,
      company_name: "CABAL"
    },
    {
      id: 26362,
      name: "default",
      company_id: 6532,
      count: 161,
      company_name: "T3L"
    },
    {
      id: 26422,
      name: "default",
      company_id: 6622,
      count: 820,
      company_name: "ZIGNET"
    },
    {
      id: 26452,
      name: "default",
      company_id: 851,
      count: 7,
      company_name: "GLOBAL AUTOMAÇÃO"
    },
    {
      id: 26482,
      name: "default",
      company_id: 4221,
      count: 4568,
      company_name: "NETPDV"
    },
    {
      id: 26562,
      name: "default",
      company_id: 2493,
      count: 5,
      company_name: "SIAPNET"
    },
    {
      id: 26572,
      name: "default",
      company_id: 6692,
      count: 53,
      company_name: "TICKET FACIL"
    },
    {
      id: 26672,
      name: "default",
      company_id: 6722,
      count: 133,
      company_name: "SKYTEF (BAM)"
    },
    {
      id: 26742,
      name: "default",
      company_id: 6812,
      count: 35,
      company_name: "MUNDIALMIX"
    },
    {
      id: 26782,
      name: "default",
      company_id: 6822,
      count: 75,
      company_name: "GREEN CARD"
    },
    {
      id: 26802,
      name: "default",
      company_id: 6832,
      count: 1060,
      company_name: "CRISTAL"
    },
    {
      id: 26822,
      name: "default",
      company_id: 6842,
      count: 11108,
      company_name: "BEVIPAG"
    },
    {
      id: 26902,
      name: "default",
      company_id: 6892,
      count: 42,
      company_name: "MV VALLE BRASIL"
    },
    {
      id: 26912,
      name: "default",
      company_id: 6902,
      count: 1024,
      company_name: "SERVELOJA"
    },
    {
      id: 26942,
      name: "default",
      company_id: 6912,
      count: 309,
      company_name: "CLICK PAY"
    },
    {
      id: 26962,
      name: "default",
      company_id: 6932,
      count: 610,
      company_name: "JUSTA PAGAMENTOS"
    },
    {
      id: 26972,
      name: "default",
      company_id: 6952,
      count: 0,
      company_name: "RS SOLUTIONS"
    },
    {
      id: 27052,
      name: "default",
      company_id: 7002,
      count: 115,
      company_name: "MADEIRA CORRETORA"
    },
    {
      id: 27112,
      name: "default",
      company_id: 7022,
      count: 34,
      company_name: "WOW SOLUCOES"
    },
    {
      id: 27242,
      name: "default",
      company_id: 6982,
      count: 94,
      company_name: "WP SOLUCOES"
    },
    {
      id: 27252,
      name: "default",
      company_id: 7042,
      count: 10565,
      company_name: "TRIPAG"
    },
    {
      id: 27262,
      name: "default",
      company_id: 7092,
      count: 131,
      company_name: "RV CARDS"
    },
    {
      id: 27272,
      name: "default",
      company_id: 7102,
      count: 1,
      company_name: "PRIMOCARD"
    },
    {
      id: 27352,
      name: "default",
      company_id: 7112,
      count: 5,
      company_name: "[GPRS-TESTE] LINX SISTEMAS"
    },
    {
      id: 27412,
      name: "default",
      company_id: 7122,
      count: 3829,
      company_name: "PASSE PAG"
    },
    {
      id: 27482,
      name: "default",
      company_id: 7152,
      count: 3,
      company_name: "[GPRS-TESTE] MAGAZINE AMERICANA"
    },
    {
      id: 27542,
      name: "default",
      company_id: 7182,
      count: 7,
      company_name: "GOIASCARD"
    },
    {
      id: 27552,
      name: "default",
      company_id: 7222,
      count: 20,
      company_name: "INTERMEIO SOLUCOES"
    },
    {
      id: 27642,
      name: "default",
      company_id: 7242,
      count: 100,
      company_name: "BUSINESSPAY"
    },
    {
      id: 27902,
      name: "default",
      company_id: 7322,
      count: 128,
      company_name: "PAGCOM"
    },
    {
      id: 27922,
      name: "default",
      company_id: 7332,
      count: 9,
      company_name: "SCIC"
    },
    {
      id: 27932,
      name: "default",
      company_id: 7342,
      count: 0,
      company_name: "[GPRS-TESTE] PAG.AI"
    },
    {
      id: 27962,
      name: "default",
      company_id: 7362,
      count: 149,
      company_name: "CARUANA FINANCEIRA"
    },
    {
      id: 28002,
      name: "default",
      company_id: 7372,
      count: 1007,
      company_name: "ORBES"
    },
    {
      id: 28022,
      name: "default",
      company_id: 7402,
      count: 1440,
      company_name: "NETSET"
    },
    {
      id: 28052,
      name: "default",
      company_id: 7432,
      count: 392,
      company_name: "FIX PAY"
    },
    {
      id: 28082,
      name: "default",
      company_id: 7442,
      count: 163,
      company_name: "ALPE"
    },
    {
      id: 28092,
      name: "default",
      company_id: 7452,
      count: 1208,
      company_name: "BRASIL CASH"
    },
    {
      id: 28102,
      name: "default",
      company_id: 7472,
      count: 13,
      company_name: "PLANETA INGRESSOS"
    },
    {
      id: 28202,
      name: "default",
      company_id: 7532,
      count: 49,
      company_name: "BANCO MAXIMA"
    },
    {
      id: 28302,
      name: "default",
      company_id: 7552,
      count: 150,
      company_name: "VERTIPAY"
    },
    {
      id: 28312,
      name: "default",
      company_id: 7562,
      count: 165,
      company_name: "SMART PAGAMENTOS"
    },
    {
      id: 28453,
      name: "default",
      company_id: 7643,
      count: 18,
      company_name: "[GPRS-TESTE] VALOREM"
    },
    {
      id: 28492,
      name: "default",
      company_id: 7682,
      count: 10780,
      company_name: "3J COMERCIO"
    },
    {
      id: 28582,
      name: "default",
      company_id: 2463,
      count: 5,
      company_name: "CREDPUBLICO"
    },
    {
      id: 28722,
      name: "default",
      company_id: 7872,
      count: 24,
      company_name: "SANTA FICHA"
    },
    {
      id: 28732,
      name: "default",
      company_id: 7882,
      count: 4,
      company_name:
        "GAROPABASURF PROVEDOR DE ACESSO A REDES DE TELECOMUNICAÇÕES"
    },
    {
      id: 28742,
      name: "default",
      company_id: 7902,
      count: 4,
      company_name: "[GPRS-TESTE] AIXMOBIL SERVIÇOS"
    },
    {
      id: 30829,
      name: "default",
      company_id: 8938,
      count: 55,
      company_name: "AGUILA DE ORO DE COLOMBIA LTDA"
    },
    {
      id: 30830,
      name: "default",
      company_id: 8939,
      count: 352,
      company_name: "SEMA S.A.S"
    },
    {
      id: 30838,
      name: "default",
      company_id: 2530,
      count: 80,
      company_name: "NEXXPAGO"
    },
    {
      id: 30840,
      name: "default",
      company_id: 2546,
      count: 3,
      company_name: "CARD PLAN"
    },
    {
      id: 30849,
      name: "default",
      company_id: 5663,
      count: 0,
      company_name: "[GPRS-TESTE] ULTRAGAZ"
    },
    {
      id: 30850,
      name: "default",
      company_id: 5923,
      count: 0,
      company_name: "[GPRS-TESTE] ENGINEERING"
    },
    {
      id: 30853,
      name: "default",
      company_id: 7903,
      count: 4,
      company_name: "[GPRS-TESTE] COMEF"
    },
    {
      id: 30854,
      name: "default",
      company_id: 7352,
      count: 150,
      company_name: "UP BRASIL - POLICARD (GPRS)"
    },
    {
      id: 30855,
      name: "default",
      company_id: 7908,
      count: 3351,
      company_name: "LUCREE SOLUCOES"
    },
    {
      id: 30856,
      name: "default",
      company_id: 7907,
      count: 2,
      company_name: "BILHETE CERTO"
    },
    {
      id: 30857,
      name: "default",
      company_id: 7905,
      count: 4,
      company_name: "[GPRS-TESTE] TSKIL EVENTOS"
    },
    {
      id: 30858,
      name: "default",
      company_id: 7904,
      count: 120,
      company_name: "SULCREDI-CREDILUZ"
    },
    {
      id: 30859,
      name: "default",
      company_id: 7906,
      count: 8,
      company_name: "[TESTE GPRS M2M]ARELSA BRASIL LTDA"
    },
    {
      id: 30860,
      name: "default",
      company_id: 7909,
      count: 452,
      company_name: "LINX PAY"
    },
    {
      id: 30861,
      name: "default",
      company_id: 7912,
      count: 4,
      company_name: "[TESTE GPRS] UNNE PAY"
    },
    {
      id: 30862,
      name: "default",
      company_id: 7910,
      count: 234,
      company_name: "4 KEYS"
    },
    {
      id: 30863,
      name: "default",
      company_id: 7914,
      count: 100,
      company_name: "CÂMARA DE DIRIGENTES"
    },
    {
      id: 30864,
      name: "default",
      company_id: 7911,
      count: 10,
      company_name: "DELIVERY PAY"
    },
    {
      id: 30866,
      name: "default",
      company_id: 7924,
      count: 85,
      company_name: "PRIMEPAG"
    },
    {
      id: 30867,
      name: "default",
      company_id: 7923,
      count: 3,
      company_name: "LYRA TESTE"
    },
    {
      id: 30903,
      name: "default",
      company_id: 8941,
      count: 0,
      company_name: "SEINSE"
    },
    {
      id: 30904,
      name: "default",
      company_id: 8942,
      count: 55,
      company_name: "TELEGUARDIA"
    },
    {
      id: 30905,
      name: "default",
      company_id: 8943,
      count: 867,
      company_name: "TELESENTINEL"
    },
    {
      id: 30921,
      name: "default",
      company_id: 10,
      count: 1,
      company_name: "LYRA BRASIL"
    },
    {
      id: 30930,
      name: "default",
      company_id: 8966,
      count: 188,
      company_name: "CIELO"
    },
    {
      id: 30988,
      name: "default",
      company_id: 8982,
      count: 10,
      company_name: "[GPRS-TESTE] TELEMATICA - TESTE GPRS"
    },
    {
      id: 30989,
      name: "default",
      company_id: 8979,
      count: 4,
      company_name: "[GPRS-TESTE] ANTECIPADÃO"
    },
    {
      id: 30990,
      name: "default",
      company_id: 3791,
      count: 3,
      company_name: "[GPRS-TESTE] LLOYDS"
    },
    {
      id: 24723,
      name: "DESAPARECIDO",
      company_id: 5273,
      count: 1,
      company_name: "UAI PAGUEI"
    },
    {
      id: 12085,
      name: "DescontoVip",
      company_id: 2457,
      count: 4,
      company_name: "DESCONTO VIP"
    },
    {
      id: 9628,
      name: "DESENV-HOMOLOG",
      company_id: 1841,
      count: 1,
      company_name: "PERTO S.A"
    },
    {
      id: 28902,
      name: "Despachante Alfredo",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 28942,
      name: "Despachante Central emplacamentos",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 28892,
      name: "Despachante centro de Condutores",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 28862,
      name: "Despachante Gilmar Eggers",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 28432,
      name: "Despachante Machado",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 28882,
      name: "Despachante Marcieli de Paula",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 28912,
      name: "Despachante Martins",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 28442,
      name: "Detran Manaus",
      company_id: 5483,
      count: 7,
      company_name: "SWA"
    },
    {
      id: 30846,
      name: "Detran Parana",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 13462,
      name: "DEV",
      company_id: 2540,
      count: 0,
      company_name: "STOPFACIL"
    },
    {
      id: 30906,
      name: "Dev 2",
      company_id: 2540,
      count: 3,
      company_name: "STOPFACIL"
    },
    {
      id: 21301,
      name: "DF.BRASILIA",
      company_id: 4923,
      count: 1357,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 30922,
      name: "E - Constantes Fallos",
      company_id: 10,
      count: 1,
      company_name: "LYRA BRASIL"
    },
    {
      id: 10105,
      name: "Ecoelce - CE",
      company_id: 2110,
      count: 26,
      company_name: "3E ENGENHARIA"
    },
    {
      id: 21763,
      name: "ES.VITORIA",
      company_id: 4923,
      count: 295,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 10711,
      name: "ESTOQUE",
      company_id: 92,
      count: 1,
      company_name: "VALECARD"
    },
    {
      id: 12348,
      name: "Estoque",
      company_id: 62,
      count: 145,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 16751,
      name: "estoque",
      company_id: 461,
      count: 1560,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 23923,
      name: "Estoque",
      company_id: 2832,
      count: 4998,
      company_name: "ENOPP"
    },
    {
      id: 24303,
      name: "ESTOQUE",
      company_id: 94,
      count: 441,
      company_name: "TEFTI"
    },
    {
      id: 25542,
      name: "ESTOQUE",
      company_id: 5273,
      count: 21,
      company_name: "UAI PAGUEI"
    },
    {
      id: 25652,
      name: "ESTOQUE",
      company_id: 2469,
      count: 0,
      company_name: "VAILOG"
    },
    {
      id: 28652,
      name: "Expedição - Triplo Corte",
      company_id: 62,
      count: 1951,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 28372,
      name: "Expedição-BC",
      company_id: 62,
      count: 2845,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 21663,
      name: "FEDERAL_INVEST",
      company_id: 4923,
      count: 22,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 23093,
      name: "FEDEX",
      company_id: 4903,
      count: 4011,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 29002,
      name: "FEDEX",
      company_id: 541,
      count: 3013,
      company_name: "FIRST DATA"
    },
    {
      id: 12024,
      name: "Feiras",
      company_id: 62,
      count: 208,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 28712,
      name: "Feiras - 2019",
      company_id: 62,
      count: 201,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 27802,
      name: "Feiras - CDS",
      company_id: 62,
      count: 127,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 18891,
      name: "FILIAL MS",
      company_id: 2652,
      count: 1,
      company_name: "REDE TENDENCIA"
    },
    {
      id: 19391,
      name: "Filial NE",
      company_id: 3871,
      count: 1,
      company_name: "[GPRS-TESTE] REDIPE"
    },
    {
      id: 30993,
      name: "FILIAL NE",
      company_id: 3951,
      count: 1,
      company_name: "GO"
    },
    {
      id: 18761,
      name: "FILIAL SP",
      company_id: 3951,
      count: 1,
      company_name: "GO"
    },
    {
      id: 18881,
      name: "FILIAL SP",
      company_id: 2652,
      count: 3,
      company_name: "REDE TENDENCIA"
    },
    {
      id: 30991,
      name: "Filial Sp",
      company_id: 3871,
      count: 1,
      company_name: "[GPRS-TESTE] REDIPE"
    },
    {
      id: 30937,
      name: "Flex Frota",
      company_id: 1651,
      count: 1,
      company_name: "REDE USE"
    },
    {
      id: 22493,
      name: "Foco / Interno",
      company_id: 3012,
      count: 0,
      company_name: "PAYNET"
    },
    {
      id: 12129,
      name: "Geral",
      company_id: 1061,
      count: 913,
      company_name: "BRASILCARD"
    },
    {
      id: 26662,
      name: "GERTEC",
      company_id: 541,
      count: 9445,
      company_name: "FIRST DATA"
    },
    {
      id: 21341,
      name: "GO.GOIANIA",
      company_id: 4923,
      count: 1824,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 12334,
      name: "GR&CARD",
      company_id: 2495,
      count: 7,
      company_name: "MIX CARD"
    },
    {
      id: 24873,
      name: "Guilherme",
      company_id: 5273,
      count: 30,
      company_name: "UAI PAGUEI"
    },
    {
      id: 24923,
      name: "Gurupi",
      company_id: 1061,
      count: 5,
      company_name: "BRASILCARD"
    },
    {
      id: 26932,
      name: "HELP DESK ( DANILO )",
      company_id: 94,
      count: 6,
      company_name: "TEFTI"
    },
    {
      id: 30847,
      name: "Help Recursos",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 24633,
      name: "HELPGET",
      company_id: 94,
      count: 3,
      company_name: "TEFTI"
    },
    {
      id: 13702,
      name: "homologação novo POS",
      company_id: 2104,
      count: 0,
      company_name: "ACG ADMINISTRADORA"
    },
    {
      id: 28672,
      name: "Hotel Tambau",
      company_id: 5483,
      count: 2,
      company_name: "SWA"
    },
    {
      id: 21591,
      name: "ICON",
      company_id: 94,
      count: 86,
      company_name: "TEFTI"
    },
    {
      id: 12792,
      name: "Ingenico",
      company_id: 37,
      count: 29,
      company_name: "INGENICO"
    },
    {
      id: 28502,
      name: "INGENICO",
      company_id: 541,
      count: 346,
      company_name: "FIRST DATA"
    },
    {
      id: 15401,
      name: "LABORATÓRIO",
      company_id: 94,
      count: 6,
      company_name: "TEFTI"
    },
    {
      id: 18211,
      name: "Laboratório",
      company_id: 62,
      count: 28,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 22503,
      name: "Litoral",
      company_id: 2322,
      count: 2,
      company_name: "ARAPOCA BILHARES"
    },
    {
      id: 12539,
      name: "LOG - CLARO",
      company_id: 461,
      count: 332,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 12540,
      name: "LOG - VIVO",
      company_id: 461,
      count: 778,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 18081,
      name: "LOG FEIRA DE SANTANNA",
      company_id: 461,
      count: 223,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 28872,
      name: "Logística",
      company_id: 62,
      count: 7351,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 30851,
      name: "Logística - Triplo Corte",
      company_id: 62,
      count: 2447,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 24693,
      name: "Luciana",
      company_id: 5273,
      count: 11,
      company_name: "UAI PAGUEI"
    },
    { id: 1, name: "Lyra", company_id: 1, count: 0, company_name: "Lyra" },
    {
      id: 10504,
      name: "M2M",
      company_id: 661,
      count: 0,
      company_name: "UP BRASIL - POLICARD"
    },
    {
      id: 19251,
      name: "M2M",
      company_id: 4141,
      count: 58,
      company_name: "COMPRE INGRESSO.COM"
    },
    {
      id: 19261,
      name: "M2M",
      company_id: 2652,
      count: 4,
      company_name: "REDE TENDENCIA"
    },
    {
      id: 19921,
      name: "M2M",
      company_id: 401,
      count: 6,
      company_name: "UP BRASIL- EMPÓRIO CARD LTDA"
    },
    {
      id: 20171,
      name: "M2M",
      company_id: 4501,
      count: 10,
      company_name: "[GPRS-TESTE] MVS ASSESORIA"
    },
    {
      id: 20431,
      name: "M2M",
      company_id: 2356,
      count: 2,
      company_name: "BILHETERIA DIGITAL"
    },
    {
      id: 20593,
      name: "M2M",
      company_id: 102,
      count: 1,
      company_name: "COOPERCRED"
    },
    {
      id: 20933,
      name: "M2M",
      company_id: 4943,
      count: 2,
      company_name: "[GPRS-TESTE] STELO"
    },
    {
      id: 27952,
      name: "M2M",
      company_id: 7352,
      count: 383,
      company_name: "UP BRASIL - POLICARD (GPRS)"
    },
    {
      id: 18201,
      name: "M2MBEBLUE",
      company_id: 3761,
      count: 614,
      company_name: "BEBLUE"
    },
    {
      id: 21773,
      name: "MA.MARANHAO",
      company_id: 4923,
      count: 1248,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 11467,
      name: "MFC",
      company_id: 2252,
      count: 36,
      company_name: "MFC ADM"
    },
    {
      id: 24643,
      name: "MG-SJDelRei",
      company_id: 4741,
      count: 27,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 20603,
      name: "MG-SSParaíso",
      company_id: 4741,
      count: 17,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 21611,
      name: "MG.BELOHORIZONTE",
      company_id: 4923,
      count: 523,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 24823,
      name: "MG.CONTAGEM",
      company_id: 4923,
      count: 610,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 23863,
      name: "MG.GVALADARES",
      company_id: 4923,
      count: 794,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27762,
      name: "MG.JUIZDEFORA",
      company_id: 4923,
      count: 111,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21441,
      name: "MG.MONTESCLAROS",
      company_id: 4923,
      count: 535,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21421,
      name: "MG.SUL",
      company_id: 4923,
      count: 581,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21411,
      name: "MG.TRIANGULO",
      company_id: 4923,
      count: 249,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 19061,
      name: "MONITORAÇÃO",
      company_id: 541,
      count: 0,
      company_name: "FIRST DATA"
    },
    {
      id: 25522,
      name: "MOURA",
      company_id: 4923,
      count: 5,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 20723,
      name: "MS-TresLagoas",
      company_id: 4741,
      count: 25,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 21481,
      name: "MS.CAMPOGRANDE",
      company_id: 4923,
      count: 597,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21311,
      name: "MT.CUIABA",
      company_id: 4923,
      count: 416,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 30976,
      name: "MultCard",
      company_id: 2465,
      count: 2,
      company_name: "OPERAPAG (MULTICARD)"
    },
    {
      id: 23393,
      name: "NosVamos-M2M",
      company_id: 2420,
      count: 12,
      company_name: "NOSVAMOS"
    },
    {
      id: 4809,
      name: "NOVA APN",
      company_id: 461,
      count: 63,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 15781,
      name: "NOVO_VALE",
      company_id: 3271,
      count: 148,
      company_name: "NOVOVALE"
    },
    {
      id: 28682,
      name: "Oceano Praia",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 1221,
      name: "OI",
      company_id: 461,
      count: 3853,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 1921,
      name: "OI",
      company_id: 551,
      count: 4,
      company_name: "WEX (FASTCRED)"
    },
    {
      id: 1971,
      name: "OI",
      company_id: 621,
      count: 9,
      company_name: "VIVA (TOPCARD)"
    },
    {
      id: 2191,
      name: "OI",
      company_id: 401,
      count: 244,
      company_name: "UP BRASIL- EMPÓRIO CARD LTDA"
    },
    {
      id: 2351,
      name: "OI",
      company_id: 102,
      count: 35,
      company_name: "COOPERCRED"
    },
    {
      id: 3781,
      name: "OI",
      company_id: 111,
      count: 1,
      company_name: "RELEASE"
    },
    { id: 3801, name: "OI", company_id: 4, count: 2, company_name: "APPI" },
    {
      id: 3851,
      name: "OI",
      company_id: 18,
      count: 2,
      company_name: "EXPAND CARDS"
    },
    {
      id: 3891,
      name: "OI",
      company_id: 81,
      count: 35,
      company_name: "ONECARD"
    },
    {
      id: 4391,
      name: "OI",
      company_id: 39,
      count: 367,
      company_name: "SICREDI"
    },
    {
      id: 4741,
      name: "OI",
      company_id: 1151,
      count: 13,
      company_name: "FINNET"
    },
    {
      id: 4871,
      name: "OI",
      company_id: 311,
      count: 1,
      company_name: "BARRIGA VERDE"
    },
    {
      id: 5331,
      name: "OI",
      company_id: 106,
      count: 56,
      company_name: "SENFFNET"
    },
    { id: 6011, name: "OI", company_id: 1531, count: 58, company_name: "ICI" },
    {
      id: 6811,
      name: "OI",
      company_id: 1451,
      count: 0,
      company_name: "BRASIL CONVENIOS"
    },
    {
      id: 7731,
      name: "OI",
      company_id: 1651,
      count: 83,
      company_name: "REDE USE"
    },
    {
      id: 8401,
      name: "OI",
      company_id: 391,
      count: 3,
      company_name: "SIGACRED"
    },
    {
      id: 8641,
      name: "OI",
      company_id: 1961,
      count: 47,
      company_name: "SOUZA COMERCIO"
    },
    {
      id: 8811,
      name: "OI",
      company_id: 1208,
      count: 40,
      company_name: "CREDIALIMENTAÇÃO"
    },
    {
      id: 9171,
      name: "OI",
      company_id: 1991,
      count: 15,
      company_name: "GRUPO ARARA AZUL"
    },
    {
      id: 9515,
      name: "OI",
      company_id: 2021,
      count: 3,
      company_name: "REDE MAIS VOCE (TELECOM SERVICE)"
    },
    {
      id: 9528,
      name: "OI",
      company_id: 1841,
      count: 47,
      company_name: "PERTO S.A"
    },
    {
      id: 9903,
      name: "OI",
      company_id: 541,
      count: 1395,
      company_name: "FIRST DATA"
    },
    {
      id: 9948,
      name: "OI",
      company_id: 2126,
      count: 13,
      company_name: "MAXXCARD"
    },
    {
      id: 10117,
      name: "OI",
      company_id: 2180,
      count: 21,
      company_name: "ZAP TRACKER"
    },
    {
      id: 10132,
      name: "OI",
      company_id: 2184,
      count: 5,
      company_name: "FAMILLY CARD"
    },
    {
      id: 10138,
      name: "OI",
      company_id: 2185,
      count: 3,
      company_name: "SP INSTALL"
    },
    {
      id: 10206,
      name: "OI",
      company_id: 1951,
      count: 22,
      company_name: "MURY"
    },
    {
      id: 10349,
      name: "OI",
      company_id: 2214,
      count: 2,
      company_name: "ARC SOLUCOES"
    },
    {
      id: 10578,
      name: "OI",
      company_id: 103,
      count: 19,
      company_name: "JOCKEY SP"
    },
    {
      id: 10828,
      name: "OI",
      company_id: 2305,
      count: 3,
      company_name: "AGAPE SOLUÇÕES"
    },
    {
      id: 10972,
      name: "OI",
      company_id: 2313,
      count: 37,
      company_name: "RESTAURANTE WEB"
    },
    {
      id: 11048,
      name: "OI",
      company_id: 2322,
      count: 1,
      company_name: "ARAPOCA BILHARES"
    },
    {
      id: 11130,
      name: "OI",
      company_id: 25,
      count: 228,
      company_name: "TRIBANCO"
    },
    {
      id: 11170,
      name: "OI",
      company_id: 2338,
      count: 15,
      company_name: "REDECONV"
    },
    {
      id: 11320,
      name: "OI",
      company_id: 2356,
      count: 0,
      company_name: "BILHETERIA DIGITAL"
    },
    {
      id: 11462,
      name: "OI",
      company_id: 2370,
      count: 61,
      company_name: "ADIAN TI"
    },
    {
      id: 11492,
      name: "OI",
      company_id: 2386,
      count: 200,
      company_name: "FITCARD"
    },
    {
      id: 11542,
      name: "OI",
      company_id: 2378,
      count: 1,
      company_name: "MULTIPLOCARD"
    },
    {
      id: 11786,
      name: "OI",
      company_id: 3,
      count: 251,
      company_name: "DD CRED"
    },
    {
      id: 12078,
      name: "OI",
      company_id: 2458,
      count: 23,
      company_name: "SICOOB CREDPIT"
    },
    {
      id: 12114,
      name: "OI",
      company_id: 2469,
      count: 102,
      company_name: "VAILOG"
    },
    {
      id: 12149,
      name: "OI",
      company_id: 2104,
      count: 0,
      company_name: "ACG ADMINISTRADORA"
    },
    {
      id: 12379,
      name: "OI",
      company_id: 2502,
      count: 376,
      company_name: "DACASA"
    },
    {
      id: 12419,
      name: "OI",
      company_id: 2489,
      count: 280,
      company_name: "VALLE CARD"
    },
    {
      id: 12622,
      name: "OI",
      company_id: 2079,
      count: 18,
      company_name: "BORBA CARD"
    },
    {
      id: 12634,
      name: "OI",
      company_id: 2546,
      count: 4,
      company_name: "CARD PLAN"
    },
    {
      id: 14042,
      name: "OI",
      company_id: 3022,
      count: 3,
      company_name: "[GPRS-TESTE] BELA VIAGEM"
    },
    {
      id: 15451,
      name: "OI",
      company_id: 2110,
      count: 7,
      company_name: "3E ENGENHARIA"
    },
    {
      id: 16871,
      name: "OI",
      company_id: 3391,
      count: 150,
      company_name: "CINTIA CHAVES GONCALVES"
    },
    {
      id: 17391,
      name: "OI",
      company_id: 3511,
      count: 9,
      company_name: "REDE PONTO MAIS"
    },
    {
      id: 17871,
      name: "OI",
      company_id: 2702,
      count: 1,
      company_name: "WAY UP"
    },
    {
      id: 17931,
      name: "OI",
      company_id: 2832,
      count: 33,
      company_name: "ENOPP"
    },
    {
      id: 21073,
      name: "OI",
      company_id: 4903,
      count: 544,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 30844,
      name: "OI",
      company_id: 51,
      count: 329,
      company_name: "LEMON BANK"
    },
    {
      id: 30868,
      name: "OI",
      company_id: 92,
      count: 1,
      company_name: "VALECARD"
    },
    {
      id: 30924,
      name: "OI",
      company_id: 1001,
      count: 1,
      company_name: "Softnex"
    },
    {
      id: 30928,
      name: "OI",
      company_id: 1081,
      count: 1,
      company_name: "HANA LATIN AMERICA"
    },
    {
      id: 30939,
      name: "OI",
      company_id: 8969,
      count: 15,
      company_name: "E-PAY"
    },
    {
      id: 30942,
      name: "OI",
      company_id: 8977,
      count: 2584,
      company_name: "REDECARD SERVIÇOS"
    },
    {
      id: 30944,
      name: "OI",
      company_id: 8970,
      count: 1,
      company_name: "FIN IN NET"
    },
    {
      id: 30948,
      name: "OI",
      company_id: 2099,
      count: 2,
      company_name: "AVANTICARD"
    },
    {
      id: 30953,
      name: "OI",
      company_id: 8971,
      count: 10,
      company_name: "GRUPO MASTER"
    },
    {
      id: 30957,
      name: "OI",
      company_id: 8975,
      count: 2218,
      company_name: "REDECARD AQUARIUS"
    },
    { id: 30959, name: "OI", company_id: 8967, count: 3, company_name: "CPFL" },
    {
      id: 30963,
      name: "OI",
      company_id: 8984,
      count: 1,
      company_name: "[TESTE] AUTOCRED"
    },
    {
      id: 30969,
      name: "OI",
      company_id: 8976,
      count: 2582,
      company_name: "REDECARD GERENCIAMENTO"
    },
    {
      id: 30973,
      name: "OI",
      company_id: 2252,
      count: 1,
      company_name: "MFC ADM"
    },
    {
      id: 30986,
      name: "OI",
      company_id: 3581,
      count: 1,
      company_name: "SAMAR"
    },
    {
      id: 30995,
      name: "OI",
      company_id: 42,
      count: 0,
      company_name: "CONVEYNET"
    },
    {
      id: 30914,
      name: "ÔNIX – TEFTI",
      company_id: 4,
      count: 0,
      company_name: "APPI"
    },
    {
      id: 24853,
      name: "OPERAÇÕES",
      company_id: 94,
      count: 3,
      company_name: "TEFTI"
    },
    {
      id: 28342,
      name: "OPERAÇÕES",
      company_id: 4923,
      count: 6,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 12039,
      name: "Outros",
      company_id: 62,
      count: 1413,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 22023,
      name: "PA.BELEM",
      company_id: 4923,
      count: 297,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 24833,
      name: "PA.BELEMCAPITAL",
      company_id: 4923,
      count: 316,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 22593,
      name: "PA.SANTAREM",
      company_id: 4923,
      count: 28,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21893,
      name: "PA.SUL",
      company_id: 4923,
      count: 368,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 14701,
      name: "Padaria São João",
      company_id: 2494,
      count: 1,
      company_name: "PRATICO"
    },
    {
      id: 24273,
      name: "PAGUE VELOZ",
      company_id: 94,
      count: 377,
      company_name: "TEFTI"
    },
    {
      id: 13422,
      name: "Paranaiba",
      company_id: 2540,
      count: 30,
      company_name: "STOPFACIL"
    },
    {
      id: 27612,
      name: "Parking",
      company_id: 1841,
      count: 4,
      company_name: "PERTO S.A"
    },
    {
      id: 31009,
      name: "Pasta de chips inativos da rede",
      company_id: 7404,
      count: 0,
      company_name: "REDE"
    },
    {
      id: 31010,
      name: "pasta teste",
      company_id: 541,
      count: 0,
      company_name: "FIRST DATA"
    },
    {
      id: 28192,
      name: "paulinia",
      company_id: 6912,
      count: 1,
      company_name: "CLICK PAY"
    },
    {
      id: 23623,
      name: "paynet-dev",
      company_id: 3012,
      count: 35,
      company_name: "PAYNET"
    },
    {
      id: 23083,
      name: "PAYTEC",
      company_id: 4903,
      count: 3965,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 21743,
      name: "PB.PARAIBA",
      company_id: 4923,
      count: 1292,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 23303,
      name: "PDC_NORDESTE",
      company_id: 4923,
      count: 4,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27782,
      name: "PE.CARUARU",
      company_id: 4923,
      count: 116,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 22553,
      name: "PE.PETROLINA",
      company_id: 4923,
      count: 149,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27882,
      name: "PE.RECIFE",
      company_id: 4923,
      count: 866,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 25302,
      name: "Pedro",
      company_id: 5273,
      count: 36,
      company_name: "UAI PAGUEI"
    },
    {
      id: 27012,
      name: "PEIXE URBANO",
      company_id: 94,
      count: 2,
      company_name: "TEFTI"
    },
    {
      id: 12023,
      name: "Perto",
      company_id: 62,
      count: 6736,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 21783,
      name: "PI.TERESINA",
      company_id: 4923,
      count: 455,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 11934,
      name: "Plantão Card",
      company_id: 2273,
      count: 264,
      company_name: "DROGABELLA"
    },
    {
      id: 24933,
      name: "Porto N",
      company_id: 1061,
      count: 3,
      company_name: "BRASILCARD"
    },
    {
      id: 21361,
      name: "PR.CURITIBA",
      company_id: 4923,
      count: 212,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21351,
      name: "PR.LONDRINA",
      company_id: 4923,
      count: 1054,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 25252,
      name: "PR.PONTAGROSSA",
      company_id: 4923,
      count: 62,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21451,
      name: "PR.SUL",
      company_id: 4923,
      count: 1128,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 30848,
      name: "Prefeitura União da Vitoria",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 12541,
      name: "Produção",
      company_id: 2524,
      count: 27,
      company_name: "ALIANCA TECNOLOGIA"
    },
    {
      id: 12735,
      name: "Produção",
      company_id: 2567,
      count: 724,
      company_name: "DISCOVERCARD"
    },
    {
      id: 9679,
      name: "RAPIDÃO COMETA",
      company_id: 39,
      count: 475,
      company_name: "SICREDI"
    },
    {
      id: 10841,
      name: "Recicle Mais - RS",
      company_id: 2110,
      count: 1,
      company_name: "3E ENGENHARIA"
    },
    {
      id: 284,
      name: "REDE",
      company_id: 7404,
      count: 1787160,
      company_name: "REDE"
    },
    {
      id: 30917,
      name: "Redefone Mobile - Produção",
      company_id: 5803,
      count: 2,
      company_name: "REDEFONE"
    },
    {
      id: 30918,
      name: "Redefone Mobile Estoque",
      company_id: 5803,
      count: 0,
      company_name: "REDEFONE"
    },
    {
      id: 12034,
      name: "REDEUZE",
      company_id: 2124,
      count: 169,
      company_name: "OMNI"
    },
    {
      id: 25082,
      name: "REDEUZE",
      company_id: 94,
      count: 58,
      company_name: "TEFTI"
    },
    {
      id: 30985,
      name: "REDEUZE",
      company_id: 331,
      count: 1,
      company_name: "ALGORIX"
    },
    {
      id: 24963,
      name: "Rio Verde",
      company_id: 1061,
      count: 24,
      company_name: "BRASILCARD"
    },
    {
      id: 22563,
      name: "RJ.INTERIOR",
      company_id: 4923,
      count: 543,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21643,
      name: "RJ.RIODEJANEIRO",
      company_id: 4923,
      count: 389,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21723,
      name: "RJ.VOLTAREDONDA",
      company_id: 4923,
      count: 605,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 22353,
      name: "RN.NATAL",
      company_id: 4923,
      count: 361,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 19081,
      name: "ROADCARD",
      company_id: 94,
      count: 23,
      company_name: "TEFTI"
    },
    {
      id: 24733,
      name: "Ronaldo",
      company_id: 5273,
      count: 6,
      company_name: "UAI PAGUEI"
    },
    {
      id: 30912,
      name: "Rondonópolis",
      company_id: 1061,
      count: 7,
      company_name: "BRASILCARD"
    },
    {
      id: 30946,
      name: "Rota_ 200.150.15.133",
      company_id: 8973,
      count: 4,
      company_name: "M2M TELEMETRIA"
    },
    {
      id: 21733,
      name: "RS.CANOAS",
      company_id: 4923,
      count: 275,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 22633,
      name: "RS.CAXIASDOSUL",
      company_id: 4923,
      count: 18,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21803,
      name: "RS.SAOGABRIEL",
      company_id: 4923,
      count: 227,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 23073,
      name: "SABANCO",
      company_id: 4903,
      count: 30,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 21331,
      name: "SC.BLUMENAU",
      company_id: 4923,
      count: 1071,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21321,
      name: "SC.FLORIANOPOLIS",
      company_id: 4923,
      count: 487,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 12422,
      name: "SENFF",
      company_id: 106,
      count: 726,
      company_name: "SENFFNET"
    },
    {
      id: 27102,
      name: "SEQUOIA",
      company_id: 4903,
      count: 6827,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 16681,
      name: "ServiceNet",
      company_id: 2031,
      count: 62,
      company_name: "LOG CRED"
    },
    {
      id: 10413,
      name: "Setor de TI",
      company_id: 2110,
      count: 1,
      company_name: "3E ENGENHARIA"
    },
    {
      id: 10102,
      name: "Sorocaba",
      company_id: 2110,
      count: 74,
      company_name: "3E ENGENHARIA"
    },
    {
      id: 25422,
      name: "SP-Mococa",
      company_id: 4741,
      count: 24,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 28483,
      name: "SP-MogiMirim",
      company_id: 4741,
      count: 5,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 27382,
      name: "SP-Orlandia",
      company_id: 4741,
      count: 12,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 27362,
      name: "SP-RioDasPedras",
      company_id: 4741,
      count: 10,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 21471,
      name: "SP.ABC",
      company_id: 4923,
      count: 688,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 25502,
      name: "SP.BAURU",
      company_id: 4923,
      count: 532,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21401,
      name: "SP.CACAPAVA",
      company_id: 4923,
      count: 199,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21203,
      name: "SP.CAMPINAS",
      company_id: 4923,
      count: 6787,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 25262,
      name: "SP.CAPITAL",
      company_id: 4923,
      count: 15,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21541,
      name: "SP.GUARULHOS",
      company_id: 4923,
      count: 701,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 23443,
      name: "SP.ITAPETININGA",
      company_id: 4923,
      count: 974,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21501,
      name: "SP.SANTOS",
      company_id: 4923,
      count: 811,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21263,
      name: "SP.SJRPR",
      company_id: 4923,
      count: 671,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21381,
      name: "SP.SOROCABA",
      company_id: 4923,
      count: 596,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21391,
      name: "SP.TAUBATE",
      company_id: 4923,
      count: 454,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21551,
      name: "SP.ZNLESTE",
      company_id: 4923,
      count: 1044,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21531,
      name: "SP.ZNNORTE",
      company_id: 4923,
      count: 853,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 22583,
      name: "SP.ZNOESTE",
      company_id: 4923,
      count: 961,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 12615,
      name: "Suregs",
      company_id: 62,
      count: 45,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 12578,
      name: "Suspensos",
      company_id: 2540,
      count: 4,
      company_name: "STOPFACIL"
    },
    {
      id: 24263,
      name: "TECNOLOGIA E PRODUTOS",
      company_id: 94,
      count: 8,
      company_name: "TEFTI"
    },
    {
      id: 12021,
      name: "Tef Ti",
      company_id: 62,
      count: 6714,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 30842,
      name: "TEF/MUXIPAY - SOLAR",
      company_id: 4,
      count: 12,
      company_name: "APPI"
    },
    {
      id: 12088,
      name: "TELECOM - SERVICENET",
      company_id: 2021,
      count: 72,
      company_name: "REDE MAIS VOCE (TELECOM SERVICE)"
    },
    {
      id: 11692,
      name: "TERAPAR",
      company_id: 3,
      count: 10,
      company_name: "DD CRED"
    },
    {
      id: 30929,
      name: "TERAPAR",
      company_id: 1081,
      count: 1,
      company_name: "HANA LATIN AMERICA"
    },
    {
      id: 30975,
      name: "TERAPAR",
      company_id: 8972,
      count: 1,
      company_name: "M2M SOLUTINS"
    },
    {
      id: 10499,
      name: "Teste ",
      company_id: 391,
      count: 6,
      company_name: "SIGACRED"
    },
    {
      id: 12660,
      name: "Teste",
      company_id: 2386,
      count: 1,
      company_name: "FITCARD"
    },
    {
      id: 14731,
      name: "Teste",
      company_id: 3102,
      count: 0,
      company_name: "CARDTRUE"
    },
    {
      id: 17821,
      name: "TESTE",
      company_id: 2446,
      count: 6,
      company_name: "SAVEGNAGO"
    },
    {
      id: 18251,
      name: "TESTE",
      company_id: 3791,
      count: 1,
      company_name: "[GPRS-TESTE] LLOYDS"
    },
    {
      id: 20231,
      name: "Teste",
      company_id: 1601,
      count: 28,
      company_name: "IPRIME"
    },
    {
      id: 30834,
      name: "teste",
      company_id: 10,
      count: 0,
      company_name: "LYRA BRASIL"
    },
    { id: 31012, name: "teste", company_id: 1, count: 0, company_name: "Lyra" },
    {
      id: 31011,
      name: "teste 01",
      company_id: 541,
      count: 0,
      company_name: "FIRST DATA"
    },
    {
      id: 27422,
      name: "Teste lyra",
      company_id: 6982,
      count: 6,
      company_name: "WP SOLUCOES"
    },
    {
      id: 30835,
      name: "teste2",
      company_id: 10,
      count: 1,
      company_name: "LYRA BRASIL"
    },
    {
      id: 30923,
      name: "Teste3",
      company_id: 10,
      count: 1,
      company_name: "LYRA BRASIL"
    },
    {
      id: 12108,
      name: "TESTEREDEUZE",
      company_id: 331,
      count: 2,
      company_name: "ALGORIX"
    },
    {
      id: 18521,
      name: "Testes",
      company_id: 3871,
      count: 3,
      company_name: "[GPRS-TESTE] REDIPE"
    },
    {
      id: 18751,
      name: "Testes",
      company_id: 3951,
      count: 3,
      company_name: "GO"
    },
    {
      id: 23173,
      name: "TESTES",
      company_id: 5613,
      count: 53,
      company_name: "ALO INGRESSO"
    },
    {
      id: 30940,
      name: "TESTE_16669",
      company_id: 8969,
      count: 9,
      company_name: "E-PAY"
    },
    {
      id: 31008,
      name: "the",
      company_id: 8968,
      count: 1,
      company_name: "CREDISHOP"
    },
    {
      id: 2891,
      name: "TIM",
      company_id: 461,
      count: 317,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 3471,
      name: "TIM",
      company_id: 401,
      count: 58,
      company_name: "UP BRASIL- EMPÓRIO CARD LTDA"
    },
    { id: 3791, name: "TIM", company_id: 4, count: 59, company_name: "APPI" },
    {
      id: 4731,
      name: "TIM",
      company_id: 1151,
      count: 18,
      company_name: "FINNET"
    },
    {
      id: 6821,
      name: "TIM",
      company_id: 1451,
      count: 0,
      company_name: "BRASIL CONVENIOS"
    },
    {
      id: 9531,
      name: "TIM",
      company_id: 2021,
      count: 2,
      company_name: "REDE MAIS VOCE (TELECOM SERVICE)"
    },
    {
      id: 9637,
      name: "TIM",
      company_id: 621,
      count: 7,
      company_name: "VIVA (TOPCARD)"
    },
    {
      id: 9699,
      name: "TIM",
      company_id: 1841,
      count: 17,
      company_name: "PERTO S.A"
    },
    {
      id: 9780,
      name: "TIM",
      company_id: 18,
      count: 2,
      company_name: "EXPAND CARDS"
    },
    {
      id: 9800,
      name: "TIM",
      company_id: 1208,
      count: 39,
      company_name: "CREDIALIMENTAÇÃO"
    },
    {
      id: 9860,
      name: "TIM",
      company_id: 1961,
      count: 5,
      company_name: "SOUZA COMERCIO"
    },
    {
      id: 9881,
      name: "TIM",
      company_id: 2124,
      count: 220,
      company_name: "OMNI"
    },
    {
      id: 9957,
      name: "TIM",
      company_id: 541,
      count: 37,
      company_name: "FIRST DATA"
    },
    {
      id: 10129,
      name: "TIM",
      company_id: 2183,
      count: 30,
      company_name: "ABRAPETITE"
    },
    {
      id: 10191,
      name: "TIM",
      company_id: 1651,
      count: 37,
      company_name: "REDE USE"
    },
    {
      id: 10207,
      name: "TIM",
      company_id: 1951,
      count: 12,
      company_name: "MURY"
    },
    {
      id: 10350,
      name: "TIM",
      company_id: 2214,
      count: 1,
      company_name: "ARC SOLUCOES"
    },
    {
      id: 10407,
      name: "TIM",
      company_id: 391,
      count: 7,
      company_name: "SIGACRED"
    },
    {
      id: 10579,
      name: "TIM",
      company_id: 103,
      count: 11,
      company_name: "JOCKEY SP"
    },
    {
      id: 10798,
      name: "TIM",
      company_id: 1471,
      count: 14,
      company_name: "VALECONCARD"
    },
    {
      id: 10826,
      name: "TIM",
      company_id: 2305,
      count: 19,
      company_name: "AGAPE SOLUÇÕES"
    },
    {
      id: 10973,
      name: "TIM",
      company_id: 2313,
      count: 22,
      company_name: "RESTAURANTE WEB"
    },
    {
      id: 11050,
      name: "TIM",
      company_id: 2322,
      count: 4,
      company_name: "ARAPOCA BILHARES"
    },
    {
      id: 11129,
      name: "TIM",
      company_id: 25,
      count: 199,
      company_name: "TRIBANCO"
    },
    {
      id: 11148,
      name: "TIM",
      company_id: 106,
      count: 9,
      company_name: "SENFFNET"
    },
    {
      id: 11171,
      name: "TIM",
      company_id: 2338,
      count: 3,
      company_name: "REDECONV"
    },
    {
      id: 11193,
      name: "TIM",
      company_id: 2110,
      count: 33,
      company_name: "3E ENGENHARIA"
    },
    {
      id: 11209,
      name: "TIM",
      company_id: 81,
      count: 9,
      company_name: "ONECARD"
    },
    {
      id: 11347,
      name: "TIM",
      company_id: 2358,
      count: 249,
      company_name: "TIM"
    },
    {
      id: 11493,
      name: "TIM",
      company_id: 2386,
      count: 158,
      company_name: "FITCARD"
    },
    {
      id: 11543,
      name: "TIM",
      company_id: 2378,
      count: 4,
      company_name: "MULTIPLOCARD"
    },
    {
      id: 11805,
      name: "TIM",
      company_id: 1601,
      count: 122,
      company_name: "IPRIME"
    },
    {
      id: 11882,
      name: "TIM",
      company_id: 2328,
      count: 3,
      company_name: "BRASIL TELEMETRIA"
    },
    {
      id: 11928,
      name: "TIM",
      company_id: 2446,
      count: 36,
      company_name: "SAVEGNAGO"
    },
    {
      id: 11993,
      name: "TIM",
      company_id: 2370,
      count: 35,
      company_name: "ADIAN TI"
    },
    {
      id: 12075,
      name: "TIM",
      company_id: 2350,
      count: 10,
      company_name: "M.M DA COSTA EIRELLI"
    },
    {
      id: 12228,
      name: "TIM",
      company_id: 2469,
      count: 192,
      company_name: "VAILOG"
    },
    {
      id: 12265,
      name: "TIM",
      company_id: 2489,
      count: 106,
      company_name: "VALLE CARD"
    },
    {
      id: 12464,
      name: "TIM",
      company_id: 2513,
      count: 26,
      company_name: "CONSORCIO METROPOLIT (AUTOPASS)"
    },
    {
      id: 12633,
      name: "TIM",
      company_id: 2546,
      count: 1,
      company_name: "CARD PLAN"
    },
    {
      id: 12872,
      name: "TIM",
      company_id: 2465,
      count: 1,
      company_name: "OPERAPAG (MULTICARD)"
    },
    {
      id: 13692,
      name: "TIM",
      company_id: 2842,
      count: 1,
      company_name: "STEPCARD - TEST"
    },
    {
      id: 14022,
      name: "TIM",
      company_id: 3022,
      count: 5,
      company_name: "[GPRS-TESTE] BELA VIAGEM"
    },
    {
      id: 14332,
      name: "TIM",
      company_id: 2509,
      count: 1,
      company_name: "BANCO RODOBENS"
    },
    {
      id: 15811,
      name: "TIM",
      company_id: 2530,
      count: 0,
      company_name: "NEXXPAGO"
    },
    {
      id: 17381,
      name: "TIM",
      company_id: 3511,
      count: 8,
      company_name: "REDE PONTO MAIS"
    },
    {
      id: 17851,
      name: "TIM",
      company_id: 2702,
      count: 1,
      company_name: "WAY UP"
    },
    {
      id: 21093,
      name: "TIM",
      company_id: 4903,
      count: 330,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 30836,
      name: "TIM",
      company_id: 2084,
      count: 3,
      company_name: "REDECARD"
    },
    {
      id: 30837,
      name: "TIM",
      company_id: 2252,
      count: 3,
      company_name: "MFC ADM"
    },
    {
      id: 30845,
      name: "TIM",
      company_id: 51,
      count: 285,
      company_name: "LEMON BANK"
    },
    {
      id: 30925,
      name: "TIM",
      company_id: 1001,
      count: 1,
      company_name: "Softnex"
    },
    {
      id: 30931,
      name: "TIM",
      company_id: 1101,
      count: 5,
      company_name: "COMUNIX"
    },
    {
      id: 30933,
      name: "TIM",
      company_id: 111,
      count: 1,
      company_name: "RELEASE"
    },
    {
      id: 30949,
      name: "TIM",
      company_id: 2099,
      count: 1,
      company_name: "AVANTICARD"
    },
    {
      id: 30952,
      name: "TIM",
      company_id: 2127,
      count: 1,
      company_name: "OK SUPERATACADO"
    },
    {
      id: 30954,
      name: "TIM",
      company_id: 8971,
      count: 20,
      company_name: "GRUPO MASTER"
    },
    {
      id: 30956,
      name: "TIM",
      company_id: 2153,
      count: 1,
      company_name: "RIMA"
    },
    {
      id: 30960,
      name: "TIM",
      company_id: 8967,
      count: 5,
      company_name: "CPFL"
    },
    {
      id: 30964,
      name: "TIM",
      company_id: 8984,
      count: 1,
      company_name: "[TESTE] AUTOCRED"
    },
    {
      id: 30970,
      name: "TIM",
      company_id: 8976,
      count: 7062,
      company_name: "REDECARD GERENCIAMENTO"
    },
    {
      id: 30972,
      name: "TIM",
      company_id: 8963,
      count: 99,
      company_name: "ADIL LELIS"
    },
    {
      id: 30974,
      name: "TIM",
      company_id: 8962,
      count: 10,
      company_name: "1 OFICIAL DE REGISTR"
    },
    {
      id: 30992,
      name: "TIM",
      company_id: 39,
      count: 13,
      company_name: "SICREDI"
    },
    {
      id: 30994,
      name: "TIM",
      company_id: 411,
      count: 0,
      company_name: "CONDUCTOR (NEUS)"
    },
    {
      id: 31001,
      name: "tim",
      company_id: 8974,
      count: 11,
      company_name: "PONTO CERTO"
    },
    {
      id: 31005,
      name: "TIM",
      company_id: 551,
      count: 5,
      company_name: "WEX (FASTCRED)"
    },
    {
      id: 31006,
      name: "TIM",
      company_id: 8965,
      count: 2,
      company_name: "BRINKS"
    },
    {
      id: 31002,
      name: "TIM1",
      company_id: 8974,
      count: 1,
      company_name: "PONTO CERTO"
    },
    {
      id: 24843,
      name: "TI_GERTEC",
      company_id: 4923,
      count: 1,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 22283,
      name: "TI_RECIFE",
      company_id: 4923,
      count: 4,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 27492,
      name: "TI_SÃOPAULO",
      company_id: 4923,
      count: 4,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 21511,
      name: "TO.TOCANTINS",
      company_id: 4923,
      count: 780,
      company_name: "ACQIO PAYMENTS"
    },
    {
      id: 12912,
      name: "Ultracred",
      company_id: 2169,
      count: 12,
      company_name: "ULTRACRED"
    },
    {
      id: 28122,
      name: "USA CARD SKYTEF 2",
      company_id: 491,
      count: 30,
      company_name: "USACARD"
    },
    {
      id: 23743,
      name: "Vero",
      company_id: 62,
      count: 1273,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 30852,
      name: "Vero - Testes",
      company_id: 62,
      count: 2,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 28103,
      name: "Vero - Triplo Corte",
      company_id: 62,
      count: 142,
      company_name: "BANRISUL - GPRS"
    },
    {
      id: 28962,
      name: "Vitalis Farmacia",
      company_id: 5483,
      count: 1,
      company_name: "SWA"
    },
    {
      id: 1431,
      name: "VIVO",
      company_id: 39,
      count: 778,
      company_name: "SICREDI"
    },
    {
      id: 2241,
      name: "VIVO",
      company_id: 541,
      count: 6495,
      company_name: "FIRST DATA"
    },
    {
      id: 3091,
      name: "VIVO",
      company_id: 401,
      count: 402,
      company_name: "UP BRASIL- EMPÓRIO CARD LTDA"
    },
    {
      id: 4711,
      name: "VIVO",
      company_id: 1121,
      count: 2,
      company_name: "TK ELETRON"
    },
    {
      id: 4751,
      name: "VIVO",
      company_id: 1151,
      count: 78,
      company_name: "FINNET"
    },
    { id: 4794, name: "VIVO", company_id: 4, count: 92, company_name: "APPI" },
    {
      id: 7791,
      name: "VIVO",
      company_id: 2084,
      count: 0,
      company_name: "REDECARD"
    },
    {
      id: 8081,
      name: "VIVO",
      company_id: 461,
      count: 4444,
      company_name: "RV TECNOLOGIA"
    },
    {
      id: 8161,
      name: "VIVO",
      company_id: 51,
      count: 1083,
      company_name: "LEMON BANK"
    },
    {
      id: 8411,
      name: "VIVO",
      company_id: 391,
      count: 116,
      company_name: "SIGACRED"
    },
    {
      id: 8821,
      name: "VIVO",
      company_id: 621,
      count: 41,
      company_name: "VIVA (TOPCARD)"
    },
    {
      id: 9181,
      name: "VIVO",
      company_id: 1991,
      count: 6,
      company_name: "GRUPO ARARA AZUL"
    },
    {
      id: 9462,
      name: "VIVO",
      company_id: 1451,
      count: 0,
      company_name: "BRASIL CONVENIOS"
    },
    {
      id: 9506,
      name: "VIVO",
      company_id: 1167,
      count: 0,
      company_name: "E-CARDES"
    },
    {
      id: 9511,
      name: "VIVO",
      company_id: 2079,
      count: 50,
      company_name: "BORBA CARD"
    },
    {
      id: 9529,
      name: "VIVO",
      company_id: 1841,
      count: 62,
      company_name: "PERTO S.A"
    },
    {
      id: 9555,
      name: "VIVO",
      company_id: 1651,
      count: 134,
      company_name: "REDE USE"
    },
    {
      id: 9596,
      name: "VIVO",
      company_id: 1961,
      count: 52,
      company_name: "SOUZA COMERCIO"
    },
    {
      id: 9662,
      name: "VIVO",
      company_id: 18,
      count: 13,
      company_name: "EXPAND CARDS"
    },
    {
      id: 9736,
      name: "VIVO",
      company_id: 81,
      count: 97,
      company_name: "ONECARD"
    },
    {
      id: 9801,
      name: "VIVO",
      company_id: 1208,
      count: 41,
      company_name: "CREDIALIMENTAÇÃO"
    },
    {
      id: 9882,
      name: "VIVO",
      company_id: 2124,
      count: 154,
      company_name: "OMNI"
    },
    {
      id: 9901,
      name: "VIVO",
      company_id: 2126,
      count: 16,
      company_name: "MAXXCARD"
    },
    {
      id: 9961,
      name: "VIVO",
      company_id: 2153,
      count: 5,
      company_name: "RIMA"
    },
    {
      id: 10044,
      name: "VIVO",
      company_id: 991,
      count: 50,
      company_name: "UP BRASIL ADMINISTRACAO"
    },
    {
      id: 10130,
      name: "VIVO",
      company_id: 2183,
      count: 27,
      company_name: "ABRAPETITE"
    },
    {
      id: 10134,
      name: "VIVO",
      company_id: 2184,
      count: 2,
      company_name: "FAMILLY CARD"
    },
    {
      id: 10139,
      name: "VIVO",
      company_id: 2185,
      count: 20,
      company_name: "SP INSTALL"
    },
    {
      id: 10260,
      name: "VIVO",
      company_id: 2147,
      count: 273,
      company_name: "GUICHE WEB"
    },
    {
      id: 10351,
      name: "VIVO",
      company_id: 2214,
      count: 4,
      company_name: "ARC SOLUCOES"
    },
    {
      id: 10432,
      name: "VIVO",
      company_id: 2234,
      count: 9,
      company_name: "TK 14"
    },
    {
      id: 10530,
      name: "VIVO",
      company_id: 2252,
      count: 1,
      company_name: "MFC ADM"
    },
    {
      id: 10558,
      name: "VIVO",
      company_id: 2088,
      count: 7,
      company_name: "GRANDCARD"
    },
    {
      id: 10799,
      name: "VIVO",
      company_id: 1471,
      count: 16,
      company_name: "VALECONCARD"
    },
    {
      id: 10827,
      name: "VIVO",
      company_id: 2305,
      count: 13,
      company_name: "AGAPE SOLUÇÕES"
    },
    {
      id: 10971,
      name: "VIVO",
      company_id: 2313,
      count: 156,
      company_name: "RESTAURANTE WEB"
    },
    {
      id: 11045,
      name: "VIVO",
      company_id: 1165,
      count: 243,
      company_name: "CENTRAL DOS EVENTOS"
    },
    {
      id: 11051,
      name: "VIVO",
      company_id: 2322,
      count: 12,
      company_name: "ARAPOCA BILHARES"
    },
    {
      id: 11105,
      name: "VIVO",
      company_id: 2328,
      count: 19,
      company_name: "BRASIL TELEMETRIA"
    },
    {
      id: 11128,
      name: "VIVO",
      company_id: 25,
      count: 930,
      company_name: "TRIBANCO"
    },
    {
      id: 11172,
      name: "VIVO",
      company_id: 2338,
      count: 73,
      company_name: "REDECONV"
    },
    {
      id: 11175,
      name: "VIVO",
      company_id: 2335,
      count: 37,
      company_name: "GUAPORE MONITORAMENTO"
    },
    {
      id: 11321,
      name: "VIVO",
      company_id: 2356,
      count: 6,
      company_name: "BILHETERIA DIGITAL"
    },
    {
      id: 11384,
      name: "VIVO",
      company_id: 2127,
      count: 1,
      company_name: "OK SUPERATACADO"
    },
    {
      id: 11461,
      name: "VIVO",
      company_id: 2370,
      count: 155,
      company_name: "ADIAN TI"
    },
    {
      id: 11494,
      name: "VIVO",
      company_id: 2386,
      count: 1377,
      company_name: "FITCARD"
    },
    {
      id: 11544,
      name: "VIVO",
      company_id: 2378,
      count: 1,
      company_name: "MULTIPLOCARD"
    },
    {
      id: 11749,
      name: "VIVO",
      company_id: 2421,
      count: 22,
      company_name: "WAY TICKET"
    },
    {
      id: 11787,
      name: "VIVO",
      company_id: 3,
      count: 139,
      company_name: "DD CRED"
    },
    {
      id: 11804,
      name: "VIVO",
      company_id: 2110,
      count: 78,
      company_name: "3E ENGENHARIA"
    },
    {
      id: 12048,
      name: "VIVO",
      company_id: 2350,
      count: 25,
      company_name: "M.M DA COSTA EIRELLI"
    },
    {
      id: 12113,
      name: "VIVO",
      company_id: 2469,
      count: 295,
      company_name: "VAILOG"
    },
    {
      id: 12267,
      name: "VIVO",
      company_id: 2489,
      count: 219,
      company_name: "VALLE CARD"
    },
    {
      id: 12276,
      name: "VIVO",
      company_id: 1311,
      count: 13,
      company_name: "TECBIZ"
    },
    {
      id: 12345,
      name: "VIVO",
      company_id: 106,
      count: 73,
      company_name: "SENFFNET"
    },
    {
      id: 12378,
      name: "VIVO",
      company_id: 2502,
      count: 2767,
      company_name: "DACASA"
    },
    {
      id: 12462,
      name: "VIVO",
      company_id: 2513,
      count: 16,
      company_name: "CONSORCIO METROPOLIT (AUTOPASS)"
    },
    {
      id: 12556,
      name: "VIVO",
      company_id: 2530,
      count: 0,
      company_name: "NEXXPAGO"
    },
    {
      id: 12608,
      name: "VIVO",
      company_id: 2287,
      count: 48,
      company_name: "CONDUCTOR"
    },
    {
      id: 12635,
      name: "VIVO",
      company_id: 2546,
      count: 2,
      company_name: "CARD PLAN"
    },
    {
      id: 12744,
      name: "VIVO",
      company_id: 103,
      count: 1,
      company_name: "JOCKEY SP"
    },
    {
      id: 13112,
      name: "VIVO",
      company_id: 2509,
      count: 1,
      company_name: "BANCO RODOBENS"
    },
    {
      id: 13632,
      name: "VIVO",
      company_id: 2832,
      count: 100,
      company_name: "ENOPP"
    },
    {
      id: 13972,
      name: "VIVO",
      company_id: 3012,
      count: 0,
      company_name: "PAYNET"
    },
    {
      id: 16841,
      name: "VIVO",
      company_id: 2358,
      count: 1,
      company_name: "TIM"
    },
    {
      id: 17261,
      name: "VIVO",
      company_id: 2458,
      count: 4,
      company_name: "SICOOB CREDPIT"
    },
    {
      id: 17371,
      name: "VIVO",
      company_id: 3511,
      count: 7,
      company_name: "REDE PONTO MAIS"
    },
    {
      id: 17861,
      name: "VIVO",
      company_id: 2702,
      count: 1,
      company_name: "WAY UP"
    },
    {
      id: 17961,
      name: "VIVO",
      company_id: 3581,
      count: 26,
      company_name: "SAMAR"
    },
    {
      id: 21103,
      name: "VIVO",
      company_id: 4903,
      count: 1628,
      company_name: "GLOBAL PAYMENTS-GPRS"
    },
    {
      id: 21153,
      name: "VIVO",
      company_id: 1166,
      count: 232,
      company_name: "DM CARD"
    },
    {
      id: 30907,
      name: "VIVO",
      company_id: 7923,
      count: 1,
      company_name: "LYRA TESTE"
    },
    {
      id: 30926,
      name: "VIVO",
      company_id: 1001,
      count: 1,
      company_name: "Softnex"
    },
    {
      id: 30934,
      name: "VIVO",
      company_id: 111,
      count: 3,
      company_name: "RELEASE"
    },
    {
      id: 30935,
      name: "VIVO",
      company_id: 1601,
      count: 3,
      company_name: "IPRIME"
    },
    {
      id: 30945,
      name: "VIVO",
      company_id: 8970,
      count: 3,
      company_name: "FIN IN NET"
    },
    {
      id: 30947,
      name: "VIVO",
      company_id: 8973,
      count: 1,
      company_name: "M2M TELEMETRIA"
    },
    {
      id: 30950,
      name: "VIVO",
      company_id: 2099,
      count: 2,
      company_name: "AVANTICARD"
    },
    {
      id: 30951,
      name: "VIVO",
      company_id: 2104,
      count: 2,
      company_name: "ACG ADMINISTRADORA"
    },
    {
      id: 30955,
      name: "VIVO",
      company_id: 8971,
      count: 5,
      company_name: "GRUPO MASTER"
    },
    {
      id: 30961,
      name: "VIVO",
      company_id: 8967,
      count: 4,
      company_name: "CPFL"
    },
    {
      id: 30965,
      name: "VIVO",
      company_id: 8984,
      count: 1,
      company_name: "[TESTE] AUTOCRED"
    },
    {
      id: 13452,
      name: "VIVO Rio do Sul",
      company_id: 2540,
      count: 73,
      company_name: "STOPFACIL"
    },
    {
      id: 17231,
      name: "VODAFONE",
      company_id: 106,
      count: 11,
      company_name: "SENFFNET"
    },
    {
      id: 17881,
      name: "VODAFONE",
      company_id: 2702,
      count: 1,
      company_name: "WAY UP"
    },
    {
      id: 30978,
      name: "VODAFONE",
      company_id: 8978,
      count: 2,
      company_name: "SICREDICAR"
    },
    {
      id: 11060,
      name: "VOXCRED",
      company_id: 94,
      count: 36,
      company_name: "TEFTI"
    },
    {
      id: 24313,
      name: "WINGS",
      company_id: 94,
      count: 15,
      company_name: "TEFTI"
    },
    {
      id: 20521,
      name: "_Estoque",
      company_id: 4741,
      count: 13,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 27622,
      name: "_Expert",
      company_id: 4741,
      count: 2,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 27452,
      name: "_Perdidos",
      company_id: 4741,
      count: 16,
      company_name: "CENTRAL PARK SERVICE"
    },
    {
      id: 20613,
      name: "_Teste",
      company_id: 4741,
      count: 2,
      company_name: "CENTRAL PARK SERVICE"
    }
  ],
  processScopeOptions: [
    { id: 10, name: "alert" },
    { id: 5, name: "inventory" },
    { id: 11, name: "report" }
  ],
  processNameOptions: [
    { id: 5, name: "export_all_inventory_by_carrier", scope: "inventory" },
    { id: 6, name: "export_all_inventory", scope: "inventory" },
    { id: 7, name: "export_all_inventory_by_consumption", scope: "inventory" },
    {
      id: 8,
      name: "export_all_inventory_by_consumption_percentage",
      scope: "inventory"
    },
    { id: 9, name: "export_all_inventory_by_filter", scope: "inventory" },
    { id: 10, name: "export_all_alert_consumption", scope: "alert" },
    { id: 11, name: "export_all_report_connection", scope: "report" },
    {
      id: 12,
      name: "export_all_report_consumption_by_filter",
      scope: "report"
    },
    { id: 13, name: "export_all_alert_tacs", scope: "alert" }
  ],
  processStatusOptions: [
    { id: 18, name: "end" },
    { id: 19, name: "error" },
    { id: 7, name: "internal_error_invalid_export_command" },
    { id: 10, name: "internal_error_on_create_the_file_hash" },
    { id: 8, name: "internal_error_on_execute_the_export_command" },
    { id: 4, name: "internal_error_on_find_where_create_csv" },
    { id: 2, name: "internal_error_on_manipulate_data" },
    { id: 13, name: "internal_error_on_obtain_the_zip_info" },
    { id: 6, name: "internal_error_on_prepare_the_export_command" },
    { id: 5, name: "internal_error_on_save_the_auxiliary_information" },
    { id: 11, name: "internal_error_on_save_the_file_hash" },
    { id: 14, name: "internal_error_on_save_the_zip" },
    { id: 12, name: "internal_error_on_send_the_file_zip_to_server" },
    { id: 1, name: "internal_error_on_update_the_export_stage" },
    { id: 9, name: "internal_error_on_zip_the_export_data" },
    { id: 21, name: "queue" },
    { id: 20, name: "running" },
    { id: 22, name: "vinicius" }
  ]
};

export default ExampleData;
