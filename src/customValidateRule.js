import { Validator } from "vee-validate";

// 必須大於 0
Validator.extend("numberThanZero", {
  validate: (value) => {
    const num = Number(value);
    if (isNaN(num)) {
      return true;
    }

    return num > 0;
  }
});

// 時間必須是今天之後(含今天)
Validator.extend("thanNewDate", {
  validate: (value) => {
    const startDate = new Date(value);
    const date = `${new Date().getFullYear()}/${
      new Date().getMonth() + 1
    }/${new Date().getDate()}`;

    return startDate.getTime() >= new Date(date).getTime();
  }
});
// 必須大於等於傳入時間(以日期為單位)
Validator.extend("thanDateByDay", {
  validate: (value, param) => {
    const startAt = new Date(param[0]);
    const endAt = new Date(value);
    const endDate = `${endAt.getFullYear()}/${
      endAt.getMonth() + 1
    }/${endAt.getDate()}`;
    const startDate = `${startAt.getFullYear()}/${
      startAt.getMonth() + 1
    }/${startAt.getDate()}`;

    return new Date(startDate).getTime() <= new Date(endDate).getTime();
  }
});

// 必須大於等於傳入時間(允許傳入時間為空)
Validator.extend("customAfter", {
  validate: (value, param) => {
    if (param[0] === "null") {
      return true;
    }
    const startAt = new Date(param[0]);
    const endAt = new Date(value);

    return startAt < endAt;
  }
});

// 限制行數
Validator.extend("rowMaxLength", {
  validate: (value, param) => {
    const num = Number(param[0]);
    const rowLength = value.split("\n").length;
    return rowLength >= 1 && rowLength <= num;
  }
});

// 限制每行字數
Validator.extend("perLineMaxCount", {
  validate: (value, param) => {
    const num = Number(param[0]);
    let returnValue = true;
    const arrayOfLines = value.match(/[^\r\n]+/g);
    if (arrayOfLines !== null) {
      arrayOfLines.forEach((data) => {
        if (data.length > num) {
          returnValue = false;
        }
      });
    }
    return returnValue;
  }
});

/**
 *參數驗證
 * @param {傳入的參數} param[0]
 * @param {運算子} param[1]
 * @param {運算元} param[2]
 * @param {傳入參數的中文名稱} param[3]
 */
Validator.extend("validateParameter", {
  validate: (value, param) => {
    debugger;
    const parameter =
      typeof param[0] === "number" ? Number(param[0]) : param[0];
    const operator = String(param[1]);
    const operand = typeof param[2] === "number" ? Number(param[2]) : param[2];

    switch (operator) {
      case ">":
        return parameter > operand;
      case "<":
        return parameter < operand;
      case "=":
        return parameter === operand;
      case "!=":
        return parameter !== operand;
      default:
        return false;
    }
  }
});
