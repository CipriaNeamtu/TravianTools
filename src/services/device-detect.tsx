import { useState, useEffect } from "react";

type useDeviceDetectServiceProps = {
	isScreenMini?: boolean | null;
	isScreenSmall?: boolean | null;
	isScreenMedium?: boolean | null;
	isScreenLarge?: boolean | null;
	isScreenExtraLarge?: boolean | null;
	isScreenMegaLarge?: boolean | null;
	isScreenExtraMegaLarge?: boolean | null;
}

/**
 * It will detect the current device
 */
const useDeviceDetectService = (): useDeviceDetectServiceProps => {
	const [screenSize, setScreenSize] = useState<string>('');

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;

			if (width <= 576) {
				setScreenSize("isScreenMini");
			} else if (width <= 768) {
				setScreenSize("isScreenSmall");
			} else if (width <= 992) {
				setScreenSize("isScreenMedium");
			} else if (width < 1200 && width > 992) {
				setScreenSize("isScreenLarge");
			} else if (width < 1400 && width > 1200) {
				setScreenSize("isScreenExtraLarge");
			} else if (width < 1900 && width > 1400) {
				setScreenSize("isScreenMegaLarge");
			} else {
				setScreenSize("isScreenExtraMegaLarge");
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	
	}, []);

	return { [screenSize]: true };
};

export default useDeviceDetectService;
