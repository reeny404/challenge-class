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

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (token) {
      return `${year}${token} ${month}${token} ${day}`;
    }
    return `${year}년 ${month}월 ${day}일`;
  }

  static isToday(value) {
    return new Date().toDateString() === this.#parseDate(value).toDateString();
  }

  static #parseDate(date = new Date()) {
    return typeof date === "string" ? new Date(date) : date;
  }
}

export default DateUtil;
