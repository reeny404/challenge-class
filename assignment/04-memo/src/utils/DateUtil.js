class DateUtil {
  /*
  return 예시 : '오후 09:00' 
  */
  static getTimeString(value) {
    const date = this.#parseDate(value);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const meridiemText = hour < 12 ? "오전" : "오후";

    return `${meridiemText} ${hour > 12 ? hour - 12 : hour}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  }

  static getDateString(value, token) {
    const date = this.#parseDate(value);
    if (token) {
      return `${date.getFullYear()}${token} ${
        date.getMonth() + 1
      }${token} ${date.getDate()}`;
    }
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  }

  static isToday(value) {
    return new Date().toDateString() === this.#parseDate(value).toDateString();
  }

  static #parseDate(date = new Date()) {
    return typeof date === "string" ? new Date(date) : date;
  }
}

export default DateUtil;
