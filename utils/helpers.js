const date = require("date-and-time");

module.exports = {
  date_format: (createdAt) => {
    const dateObj = new Date(createdAt);
    const formattedDate = date.format(dateObj, "M/D/YY h:mm A");
    return `${formattedDate}`;
  },
};
