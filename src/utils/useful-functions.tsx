export const removeSpacesBetweenWords = (text: string) => {
	return text.replace(/\s+/g, '');
}

export const validateEmail = (email: string) => {
	const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
	return regex.test(email);
}

export const containsUpperCase = (text: string) => {
	return /[A-Z]/.test(text);
}

export const containsSpecialCharacter = (text: string) => {
	return /[!@#$%^&*]/.test(text);
}

export const containsNumber = (text: string) => {
	return /\d/.test(text);
}

export const generateOptions = (numberOfOptions: number) => {
	const options = [];

	for (let i = 0; i <= numberOfOptions; i++) {
		options.push({ option: i.toString() });
	}

	return options;
}

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

export const capitalizeFirstLetter = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export const convertInSeconds = (time: string) => {
	const [hours, minutes, seconds] = time.split(':').map(Number);
	return hours * 3600 + minutes * 60 + seconds;
}

export const convertInFormatedTime = (timeInSeconds: number) => {
	try {
		const hoursResult = Math.floor(timeInSeconds / 3600);
		const minutesResult = Math.floor((timeInSeconds % 3600) / 60);
		const secondsResult = Math.round(timeInSeconds % 60);

		const formattedHours = hoursResult < 10 ? `0${hoursResult}` : hoursResult;
		const formattedMinutes = minutesResult < 10 ? `0${minutesResult}` : minutesResult;
		const formattedSeconds = secondsResult < 10 ? `0${secondsResult}` : secondsResult;

		const formatedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
		return formatedTime;		
	} catch (error) {
		console.error('ArmyProduction::convertInFormatedTime:', error)
	}
}