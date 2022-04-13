const messages = {
  after: (field, [target]) => `${field}必須大於${target}`,
  between: (field, [min, max]) => `${field}必須介於${min}到${max}之間`,
  required: (field) => `請填寫${field}`,
  max: (field, [length]) => `${field}不能超過${length}個字`,
  excluded: (field) => `請選取${field}`,
  min_value: (field, [min]) => `${field}必須大於${min - 1}`,
  ext: (field, [ext]) => {
    switch (ext) {
      case "xlsx":
        return "請上傳Excel檔案";
      default:
        return `請上傳副檔名為${[ext]}的檔案`;
    }
  },

  // custom rule message
  numberThanZero: (field) => `${field}必須大於0`,
  thanDateByDay: (field) => `${field}必須大於開始時間`,
  customAfter: (field) => `${field}必須大於開始時間`,
  rowMaxLength: (field, param) => `${field}最多僅允許${param[0]}行`,
  perLineMaxCount: (field, param) =>
    `${field}每行字數最多僅允許${param[0]}個字`,
  validateParameter: (field, param) =>
    param[3] !== undefined ? param[3] : `請選取${field}`,
  thanNewDate: "不能選取過去時間"
};

const attributes = {
  data2: "測試資料data2"
};

const locale = {
  messages,
  attributes
};

const dictionary = {
  locale
};

export default dictionary;
