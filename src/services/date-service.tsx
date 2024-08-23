
// year: getFullYear(),
// month: getMonth() + 1,
// day: getDate(),
// hour: getHours(),
// minute: getMinutes(),
// second: getSeconds(),

const formatDay = (number: number) => {
	return number.toString().padStart(2, '0');
  };

const getCurrentDate = () => {
	const currentDate = new Date();
	const month = currentDate.toLocaleString('default', { month: 'long' });
	const dayMonthYear = `${formatDay(currentDate.getDate())} ${month} ${currentDate.getFullYear()}`

	return dayMonthYear;
};

const getDate = (timestamp: number) => {
	const date = new Date(timestamp);
	const month = date.toLocaleString('default', { month: 'long' });
	const dayMonthYear = `${formatDay(date.getDate())} ${month} ${date.getFullYear()}`

	return dayMonthYear;
}

const getDateAndHour = (timestamp: number) => {
	const date = new Date(timestamp);
	const month = date.toLocaleString('default', { month: 'long' });
	const dateAndHour = `${formatDay(date.getDate())} ${month} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

	return dateAndHour;
}

const getCurrentDateTimeStamp = () => {
	const currentDate = new Date();
	const timestamp = currentDate.getTime();
	return timestamp;
}

export { getCurrentDate, getDate, getCurrentDateTimeStamp, getDateAndHour }