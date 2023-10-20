const dateConvarter = (selectedDate) => {
  //   const dateString =
  //     "Mon Oct 23 2023 00:00:00 GMT+0600 (Bangladesh Standard Time)";
  //   const dateParts = dateString.split(" "); // Split the date string into parts

  //   // Extract date components
  //   const day = parseInt(dateParts[2], 10); // Day (23)
  //   const month = dateParts[1]; // Month (Oct)
  //   const year = parseInt(dateParts[3], 10); // Year (2023)

  //   // Convert month abbreviation to a number
  //   const monthAbbreviations = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   const monthNumber = monthAbbreviations.indexOf(month);

  //   // Create a new Date object
  //   const inputDate = new Date(year, monthNumber, day);

  //   // Convert to ISO format
  //   const isoDate = inputDate.toISOString().split("T")[0];

  //   console.log(isoDate);
  const inputDateString =
    "Mon Oct 23 2023 00:00:00 GMT+0600 (Bangladesh Standard Time)";
  const inputDate = new Date(selectedDate);

  // Adjust the date and time for the time zone offset
  inputDate.setHours(inputDate.getHours() - 6); // Subtract 6 hours for GMT+0600

  // Convert the adjusted date to ISO 8601 format
  const isoDate = inputDate.toISOString();

  return isoDate;
};

export default dateConvarter;
