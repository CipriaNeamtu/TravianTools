
type SvgProps = {
	fill?: string;
	stroke?: string;
}

export const ArrowDown = ({ fill, stroke }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<path d="M18 9L12 15L6 9" stroke={stroke ? stroke: '#33363F'} strokeWidth="2"/>
		</svg>
	)
}

export const ArrowUp = ({ fill, stroke }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<path d="M18 15L12 9L6 15" stroke={stroke ? stroke: '#33363F'} strokeWidth="2"/>
		</svg>
	)
}

export const Copy = ({ fill, stroke }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<path d="M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14" stroke={stroke ? stroke: '#33363F'} strokeWidth="2"/>
			<rect x="10" y="10" width="10" height="10" rx="2" stroke={stroke ? stroke: '#33363F'} strokeWidth="2"/>
		</svg>
	)
}

export const Success = ({ fill, stroke }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<circle cx="12" cy="12" r="9" stroke={stroke ? stroke: '#33363F'} strokeWidth="2"/>
			<path d="M8 12L11 15L16 9" stroke={stroke ? stroke: '#33363F'} strokeWidth="2"/>
		</svg>
	)
}

export const Home = ({ fill, stroke }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<path d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z" stroke={stroke ? stroke: '#33363F'} strokeWidth="2"/>
			<path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21" stroke={stroke ? stroke: '#33363F'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
}

export const About = ({ fill, stroke }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<path d="M10.5 12H12V16H14M12 8H12.01M13.5628 20.8633C14.7268 20.658 15.8389 20.2256 16.8357 19.5905C17.8325 18.9555 18.6945 18.1303 19.3724 17.1622C20.0503 16.194 20.5309 15.1018 20.7867 13.948C21.0425 12.7941 21.0685 11.6011 20.8633 10.4372C20.658 9.27322 20.2256 8.1611 19.5905 7.1643C18.9555 6.1675 18.1303 5.30554 17.1622 4.62763C16.194 3.94972 15.1018 3.46914 13.948 3.21334C12.7941 2.95753 11.6011 2.9315 10.4372 3.13673C9.27322 3.34196 8.1611 3.77444 7.1643 4.40948C6.1675 5.04451 5.30554 5.86966 4.62763 6.83781C3.94972 7.80597 3.46914 8.89816 3.21334 10.052C2.95753 11.2059 2.9315 12.3989 3.13673 13.5628C3.34197 14.7268 3.77445 15.8389 4.40948 16.8357C5.04451 17.8325 5.86966 18.6945 6.83781 19.3724C7.80597 20.0503 8.89816 20.5309 10.052 20.7867C11.2059 21.0425 12.3989 21.0685 13.5628 20.8633Z" stroke={stroke ? stroke: '#33363F'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
}

export const Contact = ({ fill }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<path fillRule="evenodd" clipRule="evenodd" d="M3.0132 9.15129C3 9.69022 3 10.3021 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 10.3021 21 9.69022 20.9868 9.15129L12.9713 13.6044C12.3672 13.9399 11.6328 13.9399 11.0287 13.6044L3.0132 9.15129ZM3.24297 7.02971C3.32584 7.05052 3.4074 7.08237 3.48564 7.12584L12 11.856L20.5144 7.12584C20.5926 7.08237 20.6742 7.05052 20.757 7.02971C20.6271 6.55619 20.4276 6.18491 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868C3.57245 6.18491 3.37294 6.55619 3.24297 7.02971Z" fill={fill ? fill : 'none'}/>
		</svg>
	)
}

export const Admin = ({ fill }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<path d="M13.1818 3.50648L18.3939 5.74026C18.7616 5.89784 19 6.25938 19 6.65941V11.9123C19 13.85 18.0642 15.6684 16.4874 16.7947L13.1625 19.1697C12.4671 19.6664 11.5329 19.6664 10.8375 19.1697L7.51257 16.7947C5.93579 15.6684 5 13.85 5 11.9123V6.65941C5 6.25938 5.2384 5.89784 5.60608 5.74026L10.8182 3.50648C11.5729 3.18306 12.4271 3.18306 13.1818 3.50648Z" fill={fill ? fill : 'none'}/>
		</svg>
	)
}

export const Info = ({ fill, stroke }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<circle cx="12" cy="12" r="9" stroke={stroke ? stroke: '#33363F'} strokeWidth="2"/>
			<path d="M12.5 7.5C12.5 7.77614 12.2761 8 12 8C11.7239 8 11.5 7.77614 11.5 7.5C11.5 7.22386 11.7239 7 12 7C12.2761 7 12.5 7.22386 12.5 7.5Z" fill={fill ? fill : '#33363F'} stroke={stroke ? stroke: '#33363F'}/>
			<path d="M12 17V10" stroke={stroke ? stroke: '#33363F'} strokeWidth="2"/>
		</svg>
	)
}

export const Google = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
			<path fillRule="evenodd" clipRule="evenodd" d="M19.6 10.2273C19.6 9.51819 19.5364 8.83637 19.4182 8.18182H10V12.05H15.3818C15.15 13.3 14.4455 14.3591 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2727 19.6 10.2273Z" fill="#4285F4"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M10 20C12.7 20 14.9636 19.1045 16.6182 17.5772L13.3864 15.0681C12.4909 15.6681 11.3455 16.0227 10 16.0227C7.39546 16.0227 5.19091 14.2636 4.40455 11.9H1.06364V14.4909C2.70909 17.7591 6.09091 20 10 20Z" fill="#34A853"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M4.40455 11.8999C4.20455 11.2999 4.09091 10.659 4.09091 9.99994C4.09091 9.34085 4.20455 8.69994 4.40455 8.09994V5.50903H1.06364C0.386364 6.85903 0 8.38631 0 9.99994C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.8999Z" fill="#FBBC05"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8227 5.47273L16.6909 2.60455C14.9591 0.990909 12.6955 0 10 0C6.09091 0 2.70909 2.24091 1.06364 5.50909L4.40455 8.1C5.19091 5.73636 7.39546 3.97727 10 3.97727Z" fill="#EA4335"/>
		</svg>
	)
}

export const Facebook = () => {
	return (
		<svg width="24px" height="24px" viewBox="0 0 0.48 0.48" xmlns="http://www.w3.org/2000/svg" fill="none">
			<path fill="#1877F2" d="M0.45 0.24a0.21 0.21 0 0 0 -0.21 -0.21 0.21 0.21 0 0 0 -0.033 0.417v-0.147H0.154V0.24h0.053V0.194c0 -0.053 0.031 -0.082 0.079 -0.082 0.023 0 0.047 0.004 0.047 0.004v0.052h-0.026c-0.026 0 -0.034 0.016 -0.034 0.033V0.24h0.058l-0.009 0.061H0.273v0.147A0.21 0.21 0 0 0 0.45 0.24"/>
			<path fill="#ffffff" d="M0.322 0.301 0.331 0.24H0.273V0.201c0 -0.017 0.008 -0.033 0.034 -0.033h0.026V0.116s-0.024 -0.004 -0.047 -0.004c-0.048 0 -0.079 0.029 -0.079 0.082V0.24H0.154v0.061h0.053v0.147a0.21 0.21 0 0 0 0.066 0v-0.147z"/>
		</svg>
	)
}

export const SearchLight = ({ fill, stroke }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'}>
			<circle cx="11" cy="11" r="6" stroke={stroke ? stroke: '#33363F'}/>
			<path d="M20 20L17 17" stroke={stroke ? stroke: '#33363F'} strokeLinecap="round"/>
		</svg>
	)
}

export const Trash = ({ fill, stroke }: SvgProps) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill={fill ? fill : 'none'} xmlns="http://www.w3.org/2000/svg">
			<path d="M10 15L10 12" stroke={stroke ? stroke: '#33363F'} strokeWidth="2" strokeLinecap="round"/>
			<path d="M14 15L14 12" stroke={stroke ? stroke: '#33363F'} strokeWidth="2" strokeLinecap="round"/>
			<path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke={stroke ? stroke: '#33363F'} strokeWidth="2" strokeLinecap="round"/>
			<path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke={stroke ? stroke: '#33363F'} strokeWidth="2" strokeLinecap="round"/>
		</svg>
	)
}

export const PayPal = () => {
	return (
		<svg width="256px" height="302px" viewBox="0 0 256 302" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
			<g>
				<path d="M217.168476,23.5070146 C203.234077,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.3030619,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.076601 C-0.637664968,263.946149 3.13311322,268.357876 8.06925331,268.357876 L65.804612,268.357876 L80.3050438,176.385849 L79.8555471,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.46841,167.970272 C174.366398,167.970272 216.569147,146.078116 228.897012,82.7490197 C229.263268,80.8761167 229.579581,79.0531577 229.854273,77.2718188 C228.297683,76.4477414 228.297683,76.4477414 229.854273,77.2718188 C233.525163,53.8646924 229.829301,37.9325302 217.168476,23.5070146" fill="#27346A"></path>
				<path d="M102.396976,68.8395929 C103.936919,68.1070797 105.651665,67.699203 107.449652,67.699203 L180.767565,67.699203 C189.449511,67.699203 197.548776,68.265236 204.948824,69.4555699 C207.071448,69.7968545 209.127479,70.1880831 211.125242,70.6375799 C213.123006,71.0787526 215.062501,71.5781934 216.943728,72.1275783 C217.884341,72.4022708 218.808307,72.6852872 219.715624,72.9849517 C223.353218,74.2002577 226.741092,75.61534 229.854273,77.2718188 C233.525163,53.8563683 229.829301,37.9325302 217.168476,23.5070146 C203.225753,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.2947379,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.068277 C-0.637664968,263.946149 3.13311322,268.349552 8.0609293,268.349552 L65.804612,268.349552 L95.8875974,77.5798073 C96.5035744,73.6675208 99.0174265,70.4627756 102.396976,68.8395929 Z" fill="#27346A"></path>
				<path d="M228.897012,82.7490197 C216.569147,146.069792 174.366398,167.970272 120.46841,167.970272 L93.0241367,167.970272 C86.4398419,167.970272 80.8794007,172.764903 79.8555471,179.265958 L61.8174095,293.621258 C61.1431644,297.883153 64.4394738,301.745495 68.7513129,301.745495 L117.421821,301.745495 C123.182038,301.745495 128.084882,297.550192 128.983876,291.864891 L129.458344,289.384335 L138.631407,231.249423 L139.222412,228.036354 C140.121406,222.351053 145.02425,218.15575 150.784467,218.15575 L158.067979,218.15575 C205.215193,218.15575 242.132193,199.002194 252.920115,143.605884 C257.423406,120.456802 255.092683,101.128442 243.181019,87.5519756 C239.568397,83.4399129 235.081754,80.0437153 229.854273,77.2718188 C229.571257,79.0614817 229.263268,80.8761167 228.897012,82.7490197 L228.897012,82.7490197 Z" fill="#2790C3"></path>
				<path d="M216.952052,72.1275783 C215.070825,71.5781934 213.13133,71.0787526 211.133566,70.6375799 C209.135803,70.1964071 207.071448,69.8051785 204.957148,69.4638939 C197.548776,68.265236 189.457835,67.699203 180.767565,67.699203 L107.457976,67.699203 C105.651665,67.699203 103.936919,68.1070797 102.4053,68.8479169 C99.0174265,70.4710996 96.5118984,73.6675208 95.8959214,77.5881313 L80.3133678,176.385849 L79.8638711,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.476734,167.970272 C174.374722,167.970272 216.577471,146.078116 228.905336,82.7490197 C229.271592,80.8761167 229.579581,79.0614817 229.862597,77.2718188 C226.741092,75.623664 223.361542,74.2002577 219.723948,72.9932757 C218.816631,72.6936112 217.892665,72.4022708 216.952052,72.1275783" fill="#1F264F"></path>
			</g>
		</svg>
	)
}

export const Dashboard = ({ fill }: SvgProps) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M21 7V4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1M10 20v-3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1" fill={fill ? fill : 'none'} />
			<path d="M9 12H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1m12 8v-7a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1" fill={fill ? fill : 'none'} />
		</svg>
	)
}

export const Tools = ({ fill }: SvgProps) => {
	return (
		<svg width="24" height="24" viewBox="0 0 30.72 30.72" xmlns="http://www.w3.org/2000/svg">
			<path fill={fill ? fill : '#33363F'} d="M22.932 7.642a10.551 10.551 0 0 1 2.59 4.476H28.8v5.762H25.523a10.551 10.551 0 0 1 -2.59 4.479l1.642 2.842 -4.988 2.88 -1.638 -2.842a10.579 10.579 0 0 1 -5.174 0L11.134 28.08l-4.988 -2.88 1.642 -2.842a10.551 10.551 0 0 1 -2.59 -4.479H1.92v-5.76h3.277a10.551 10.551 0 0 1 2.59 -4.479L6.144 4.8l4.986 -2.88h0.006l1.64 2.838a10.579 10.579 0 0 1 5.174 0L19.584 1.92h0.004L24.576 4.8l-1.642 2.842zM21.12 14.999a5.76 5.76 0 1 0 -11.52 0 5.76 5.76 0 0 0 11.52 0" />
		</svg>
	)
}

export const Troops = ({ fill }: SvgProps) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path fill={fill ? fill : '#33363F'} d="M21.698.896a.8.8 0 0 0-.806.806c0 .45.356.806.806.806s.806-.355.806-.806a.8.8 0 0 0-.806-.806m-3.764 1.023C10.42 1.957 7.711 12.112.922 6.431c.152 1.725 4.145 3.675 4.145 3.675-1.22.938-1.63 1.158-3.375 1.195 4.879 4.064 15.876-4.678 19.143 1.88l-.108-1.8-2.128-2.18 2.002.028-.028-.478-2.377-1.509 2.269-.338-.033-.52-2.344-1.28 2.245-.413-.028-.501-2.446-1.065 2.367-.274-.038-.652a9.2 9.2 0 0 0-2.255-.28m3.319 1.405.947 19.875.877-.042-.947-19.828a1.8 1.8 0 0 1-.877-.005M16.875 13.73l-2.044 3.281.998 1.172-.735 4.926h.886l.712-4.795 1.313-.947q-.569-1.822-1.13-3.637m-7.345.839-1.35 3.272.961.947.103 4.322h.877l-.103-4.359.919-.933zm-7.414.234-.769 2.902.827.619.697 4.785h.885l-.714-4.907.62-.825-1.544-2.573zm4.029.347-1.322 2.695.708.797-.314 4.467h.877l.319-4.467.745-.666zm6.418 1.514-.914 3.206.909.712.272 2.527h.886l-.277-2.545.788-1.013a542 542 0 0 1-1.664-2.888m6.731.005-.886 3.216.952.727.291 2.498h.88l-.3-2.588.75-.98z"/>
		</svg>
	)
}

export const TroopsCost = ({ fill }: SvgProps) => {
	return (
		<svg width="24" height="24" viewBox="-0.051 0 0.612 0.612" xmlns="http://www.w3.org/2000/svg">
			<path fill={fill ? fill : '#33363F'} d="M.493.308A.238.238 0 1 1 .255.071a.237.237 0 0 1 .238.238M.348.362A.07.07 0 0 0 .331.318a.1.1 0 0 0-.025-.02L.28.289H.279L.255.287.241.286.226.281.215.272V.27A.02.02 0 0 1 .21.257.02.02 0 0 1 .223.238.1.1 0 0 1 .256.229l.012.002h.001l.014.005.011.008A.024.024 0 1 0 .328.21.1.1 0 0 0 .303.192L.279.184V.16a.024.024 0 1 0-.047 0v.023a.1.1 0 0 0-.034.014.07.07 0 0 0-.035.059.07.07 0 0 0 .016.043.1.1 0 0 0 .027.022.1.1 0 0 0 .028.009l.022.002.014.001.014.005.011.009A.02.02 0 0 1 .3.36C.3.363.3.37.288.377a.1.1 0 0 1-.034.009L.239.384.225.38.214.372a.024.024 0 1 0-.036.031.1.1 0 0 0 .029.021L.23.431v.023a.024.024 0 1 0 .047 0V.43A.1.1 0 0 0 .312.416.07.07 0 0 0 .345.359z"/>
		</svg>
	)
}

export const ResourcesManager = ({ fill }: SvgProps) => {
	return (
		<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0.72 0.72" xmlSpace="preserve">
			<path fill={fill ? fill : '#33363F'} d="M.36.69 0 .51.147.435 0 .36.147.285 0 .21.36.03l.36.18-.147.075L.72.36.573.435.72.51zM.132.51l.231.117L.591.51.507.468.36.54.213.465zm0-.15.231.117L.591.36.507.318.36.393.213.318zm0-.15.231.117L.591.21.36.096z"/>
		</svg>
	)
}

export const NpcCalculator = ({ fill }: SvgProps) => {
	return (
		<svg width="24" height="24" viewBox="0 0 0.72 0.72" xmlns="http://www.w3.org/2000/svg">
			<path fill={fill ? fill : '#33363F'} d="M.165.24H.18v.015a.03.03 0 0 0 .06 0V.24h.015a.03.03 0 0 0 0-.06H.24V.165a.03.03 0 0 0-.06 0V.18H.165a.03.03 0 0 0 0 .06M.146.574a.03.03 0 0 0 .042 0L.209.553.23.574a.03.03 0 0 0 .042 0 .03.03 0 0 0 0-.042L.252.51.273.489A.03.03 0 0 0 .231.447L.21.468.189.447a.03.03 0 0 0-.042.042L.168.51.147.531a.03.03 0 0 0 0 .042M.6.03H.12a.09.09 0 0 0-.09.09V.6a.09.09 0 0 0 .09.09H.6A.09.09 0 0 0 .69.6V.12A.09.09 0 0 0 .6.03m-.27.6H.12A.03.03 0 0 1 .09.6V.39h.24Zm0-.3H.09V.12A.03.03 0 0 1 .12.09h.21Zm.3.27A.03.03 0 0 1 .6.63H.39V.39h.24Zm0-.27H.39V.09H.6a.03.03 0 0 1 .03.03ZM.465.495h.09a.03.03 0 0 0 0-.06h-.09a.03.03 0 0 0 0 .06M.555.18h-.09a.03.03 0 0 0 0 .06h.09a.03.03 0 0 0 0-.06m-.09.405h.09a.03.03 0 0 0 0-.06h-.09a.03.03 0 0 0 0 .06"/>
		</svg>
	)
}

export const CulturePoints = ({ fill }: SvgProps) => {
	return (
		<svg width="24" height="24" viewBox="0 0 30.72 30.72">
			<path fill={fill ? fill : '#33363F'} d="M26.711 5.578v-2.61L14.87 5.578h-.998L2.031 2.968v2.61H.786v20.867h12.96v.029l.126-.029h.998l.126.029v-.029h14.938V5.578zm-23.43 0V4.522L13.745 6.83v18.09L3.281 22.611zm22.18-1.058v18.089l-10.465 2.308V6.828zm3.386 12.228h-1.47v-1.473h1.47zM2.655 24.947v-1.195l5.414 1.195zm23.639-1.242v1.24h-5.621zM12.351 10.174 4.594 7.591l.172-.515.225-.671 7.757 2.583zm0 3.35-7.757-2.583.395-1.186 7.757 2.583zm0 3.351-7.757-2.583.395-1.186 7.757 2.583zm0 3.348-7.757-2.582.395-1.186 7.757 2.582zm0 2.965-7.757-2.582.395-1.186 7.757 2.582zm4.041-13.015-.395-1.186 7.756-2.583.225.671.174.515zm0 3.35-.395-1.186 7.756-2.583.395 1.186zm0 3.351-.395-1.186 7.756-2.583.395 1.186zm0 3.348-.395-1.186 7.756-2.582.395 1.186zm0 2.965-.395-1.186 7.756-2.582.395 1.186z" />
		</svg>
	)
}

export const MobileNavigation = ({ fill }: SvgProps) => {
	return (
		<svg width="24" height="24" viewBox="-0.015 0 0.72 0.72" xmlns="http://www.w3.org/2000/svg">
			<path fill={fill ? fill : '#33363F'} d="M0 0h.157v.157H0zm.282 0h.157v.157H.282zM.54 0h.157v.157H.54zM0 .282h.157v.157H0zm.282 0h.157v.157H.282zm.258 0h.157v.157H.54zM0 .563h.157V.72H0zm.282 0h.157V.72H.282zm.258 0h.157V.72H.54z"/>
		</svg>
	)
}

export const Users = ({ fill }: SvgProps) => {
	return (
		<svg width="24" height="24" viewBox="0 0 1.08 1.08" xmlns="http://www.w3.org/2000/svg">
			<path fill={fill ? fill : '#33363F'} d="M.36.484H.334A.26.26 0 0 0 .141.56L.134.568v.248h.122V.675L.273.656.28.647A.33.33 0 0 1 .421.561.2.2 0 0 1 .36.484"/>
			<path fill={fill ? fill : '#33363F'} d="M.94.559A.26.26 0 0 0 .747.483L.714.485a.2.2 0 0 1-.06.073.33.33 0 0 1 .15.09l.007.008.016.019v.141h.118v-.25Z"/>
			<path fill={fill ? fill : '#33363F'} d="M.333.426h.009A.19.19 0 0 1 .435.237a.123.123 0 1 0-.103.19Z"/>
			<path fill={fill ? fill : '#33363F'} d="M.733.403v.021L.75.426h.006A.123.123 0 1 0 .644.24a.2.2 0 0 1 .089.163"/>
			<path fill={fill ? fill : '#33363F'} d="M.67.403a.134.134 0 0 1-.134.135.134.134 0 0 1-.134-.135.134.134 0 0 1 .268 0"/>
			<path fill={fill ? fill : '#33363F'} d="M.543.609A.3.3 0 0 0 .33.69L.323.698v.19a.047.047 0 0 0 .048.046h.345A.047.047 0 0 0 .764.888V.699L.757.69A.3.3 0 0 0 .544.609"/>
			<path d="M0 0h1.08v1.08H0z" fill="none"/>
		</svg>
	)
}

export const ReactIcon = () => {
	return (
		<svg width="24" height="24" viewBox="0 -1.313 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
			<path d="M19.733 6.921a16 16 0 0 0-.772-.243q.066-.267.119-.527c.585-2.839.203-5.126-1.103-5.879-1.252-.722-3.3.031-5.368 1.831a16 16 0 0 0-.598.548 15 15 0 0 0-.398-.367C9.446.359 7.274-.452 5.969.303c-1.251.724-1.621 2.874-1.094 5.565a16 16 0 0 0 .177.795q-.461.13-.888.279C1.623 7.828 0 9.216 0 10.656c0 1.487 1.742 2.979 4.389 3.884a14 14 0 0 0 .649.203 16 16 0 0 0-.188.857c-.502 2.644-.11 4.743 1.138 5.462 1.288.743 3.451-.021 5.557-1.861a14 14 0 0 0 .501-.462 16 16 0 0 0 .649.592c2.04 1.755 4.054 2.464 5.301 1.742 1.287-.745 1.706-3 1.163-5.744a14 14 0 0 0-.144-.641q.228-.067.446-.14c2.751-.912 4.542-2.385 4.542-3.893 0-1.445-1.675-2.843-4.267-3.735m-.597 6.655q-.197.065-.403.126a24 24 0 0 0-1.215-3.041 24 24 0 0 0 1.168-2.996q.37.106.713.225c2.221.765 3.576 1.895 3.576 2.766 0 .928-1.463 2.132-3.839 2.919m-.986 1.953c.24 1.213.274 2.31.115 3.168-.143.771-.43 1.284-.786 1.49-.756.438-2.374-.131-4.118-1.632a15 15 0 0 1-.603-.55 24 24 0 0 0 2.012-2.554 24 24 0 0 0 3.25-.501q.074.296.13.581m-9.971 4.582c-.739.261-1.328.268-1.683.063-.757-.437-1.072-2.122-.642-4.383a15 15 0 0 1 .175-.797c.983.217 2.071.374 3.234.468a25 25 0 0 0 2.06 2.545 13 13 0 0 1-.457.421c-.931.814-1.864 1.391-2.687 1.682M4.72 13.57c-1.17-.4-2.137-.92-2.799-1.487-.595-.51-.896-1.016-.896-1.426 0-.874 1.303-1.989 3.476-2.746q.396-.138.826-.26c.3.977.694 1.998 1.17 3.031a25 25 0 0 0-1.184 3.074 13 13 0 0 1-.592-.186m1.16-7.899c-.451-2.305-.152-4.044.602-4.48.803-.465 2.578.198 4.45 1.86a14 14 0 0 1 .36.332 25 25 0 0 0-2.045 2.53 25 25 0 0 0-3.203.498 15 15 0 0 1-.165-.739m10.353 2.556a33 33 0 0 0-.73-1.2c.766.097 1.499.225 2.188.383a22 22 0 0 1-.768 2.067 36 36 0 0 0-.69-1.249m-4.222-4.112c.473.512.947 1.084 1.412 1.705a30 30 0 0 0-2.837-.001c.466-.615.944-1.186 1.424-1.704M7.763 8.234a30 30 0 0 0-.678 1.241 23 23 0 0 1-.763-2.077 23 23 0 0 1 2.176-.373 30 30 0 0 0-.736 1.209m.758 6.127a22 22 0 0 1-2.212-.356c.212-.684.473-1.395.778-2.119a30 30 0 0 0 .68 1.242q.365.63.754 1.233m3.52 2.909a23 23 0 0 1-1.444-1.728 36 36 0 0 0 2.853-.005 22 22 0 0 1-1.409 1.733m4.894-5.42c.321.731.591 1.439.806 2.111-.696.159-1.447.287-2.239.382a36 36 0 0 0 .737-1.221 33 33 0 0 0 .696-1.272m-1.584.759a34 34 0 0 1-1.151 1.858 31 31 0 0 1-2.198.077q-1.122 0-2.173-.069a29 29 0 0 1-1.173-1.861 29 29 0 0 1-1.024-1.934 29 29 0 0 1 1.021-1.935 29 29 0 0 1 1.164-1.853 29 29 0 0 1 2.185-.082H12c.743 0 1.476.028 2.189.083a31 31 0 0 1 1.156 1.846 34 34 0 0 1 1.035 1.926 31 31 0 0 1-1.031 1.943m2.115-11.449c.804.464 1.116 2.333.611 4.784q-.049.235-.108.477a24.5 24.5 0 0 0-3.209-.507 24 24 0 0 0-2.029-2.532 15 15 0 0 1 .552-.506c1.772-1.542 3.428-2.151 4.182-1.716M12 8.513a2.143 2.143 0 1 1 0 4.286 2.143 2.143 0 0 1 0-4.286" fill="#00D8FF"/>
		</svg>
	)
}

export const Subscribers = ({ fill }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve" width="24" height="24">
			<path fill={fill ? fill : '#33363F'} d="M23.03 2.828H6.399a.97.97 0 0 0-.97.97v3.566h12.172c1.45 0 2.63 1.18 2.63 2.63v4.981h2.799a.97.97 0 0 0 .97-.97V3.798a.97.97 0 0 0-.97-.97"/>
			<path fill={fill ? fill : '#33363F'} d="M17.601 9.024H.97a.97.97 0 0 0-.97.971v10.207c0 .536.434.97.97.97h16.631a.97.97 0 0 0 .97-.97V9.995a.97.97 0 0 0-.97-.97m-.591 10.541a.625.625 0 0 1-.843.047 725 725 0 0 1-4.357-3.627L9.684 17.75a.62.62 0 0 1-.398.144.62.62 0 0 1-.397-.144l-2.126-1.764L2.4 19.608a.622.622 0 1 1-.795-.957l4.184-3.473-4.184-3.473a.622.622 0 1 1 .795-.957l6.886 5.716 6.886-5.716a.622.622 0 1 1 .795.957l-4.184 3.473 4.179 3.472a.625.625 0 0 1 .048.918"/>
		</svg>
	)
}

export const ContactForm = ({ fill }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 0.96 0.96" xmlSpace="preserve">
			<path fill={fill ? fill : '#33363F'} d="M.9.03H.154a.09.09 0 0 0-.092.072A.09.09 0 0 0 .15.21v.06C.1.27.06.31.06.36S.1.45.15.45v.06C.1.51.06.55.06.6S.1.69.15.69v.06a.09.09 0 0 0-.088.108.09.09 0 0 0 .092.072H.9A.03.03 0 0 0 .93.9V.06A.03.03 0 0 0 .9.03M.27.12a.03.03 0 0 1-.03.03H.15C.133.15.12.137.12.12S.133.09.15.09h.09a.03.03 0 0 1 .03.03M.24.87H.15C.133.87.12.857.12.84S.133.81.15.81h.09c.017 0 .03.013.03.03S.257.87.24.87M.12.6A.03.03 0 0 1 .15.57h.09C.257.57.27.583.27.6S.257.63.24.63H.15A.03.03 0 0 1 .12.6m0-.24A.03.03 0 0 1 .15.33h.09c.017 0 .03.013.03.03S.257.39.24.39H.15A.03.03 0 0 1 .12.36m.172.51A.1.1 0 0 0 .3.84.06.06 0 0 0 .24.78H.21V.66h.03a.06.06 0 0 0 0-.12H.21V.42h.03a.06.06 0 0 0 0-.12H.21V.18h.03A.06.06 0 0 0 .3.12.1.1 0 0 0 .292.09H.87v.78zM.628.391A.13.13 0 0 0 .66.3a.09.09 0 1 0-.18 0c0 .043.014.072.032.091A.105.105 0 0 0 .42.495V.54h.03V.495C.45.454.484.42.525.42h.09C.656.42.69.454.69.495V.54h.03V.495A.106.106 0 0 0 .628.391M.57.24A.06.06 0 0 1 .63.3C.63.375.583.39.57.39S.51.375.51.3A.06.06 0 0 1 .57.24M.42.63h.3v.03h-.3zm0 .06h.3v.03h-.3z" />
		</svg>
	)
}

export const Grain = ({ fill }: SvgProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve" width="24" height="24">
			<path fill={fill ? fill : '#33363F'} d="M17.331 7.778a2.765 2.765 0 0 0 2.308-2.308l.441-1.597-1.596.441a2.765 2.765 0 0 0-2.309 2.308l-.193.7L.13 23.175a.443.443 0 1 0 .628.628L16.572 7.988z"/>
			<path fill={fill ? fill : '#33363F'} d="m14.436 8.513.817-1.44a2.765 2.765 0 0 0 0-3.264l-.817-1.441-.817 1.441a2.765 2.765 0 0 0 0 3.264zm2.424.167-1.441.817 1.441.817c.478.347 1.042.529 1.632.529s1.155-.183 1.632-.529l1.441-.817-1.441-.817a2.82 2.82 0 0 0-3.264 0m-5.248 2.658.817-1.441a2.765 2.765 0 0 0 0-3.264l-.817-1.441-.817 1.441a2.765 2.765 0 0 0 0 3.264zm2.424.166-1.441.817 1.441.817a2.75 2.75 0 0 0 1.632.53 2.75 2.75 0 0 0 1.632-.53l1.44-.817-1.44-.817a2.82 2.82 0 0 0-3.264 0m-5.248 2.658.817-1.441a2.765 2.765 0 0 0 0-3.264l-.817-1.44-.817 1.44a2.765 2.765 0 0 0 0 3.264zm2.424.166-1.441.817 1.441.817a2.76 2.76 0 0 0 1.632.529 2.76 2.76 0 0 0 1.632-.529l1.441-.817-1.441-.817a2.82 2.82 0 0 0-3.264 0m-5.248 2.657.817-1.44a2.765 2.765 0 0 0 0-3.264l-.817-1.44-.817 1.44a2.765 2.765 0 0 0 0 3.264zm2.424.167-1.441.817 1.441.817c.478.347 1.042.529 1.632.529s1.155-.183 1.632-.529l1.441-.817-1.441-.817a2.82 2.82 0 0 0-3.264 0M3.139 19.81l.817-1.441a2.765 2.765 0 0 0 0-3.264l-.817-1.441-.817 1.441a2.765 2.765 0 0 0 0 3.264zm2.424.166-1.441.817 1.441.817a2.75 2.75 0 0 0 1.632.53 2.75 2.75 0 0 0 1.632-.53l1.441-.817-1.441-.817a2.82 2.82 0 0 0-3.264 0m10.462-16.51a.44.44 0 0 0 .314-.13l2.51-2.51a.443.443 0 1 0-.627-.628l-2.51 2.51a.443.443 0 0 0 .314.758m1.569.497a.44.44 0 0 0 .628 0L21.361.825a.443.443 0 1 0-.629-.627l-3.138 3.138a.444.444 0 0 0 0 .628m5.648-1.255-3.138 3.138a.443.443 0 1 0 .628.628l3.138-3.138a.443.443 0 1 0-.628-.628m-2.824.941a.44.44 0 0 0 .628 0L23.87.826a.443.443 0 1 0-.628-.628l-2.824 2.825a.444.444 0 0 0 0 .628m2.824 1.569-2.51 2.51a.443.443 0 1 0 .628.628l2.51-2.51a.443.443 0 1 0-.628-.628"/>
		</svg>
	)
}

export const Add = ({ fill }: SvgProps) => {
	return (
		<svg width="20" height="20" viewBox="0 0 1.29 1.29" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.254 1.179a.09.09 0 0 1-.075.075 4 4 0 0 1-1.069 0 .09.09 0 0 1-.075-.075 4 4 0 0 1 0-1.069A.09.09 0 0 1 .11.035a4 4 0 0 1 1.069 0 .09.09 0 0 1 .075.075 4 4 0 0 1 0 1.069M1.077.605A5 5 0 0 0 .72.591 5 5 0 0 0 .705.212a.039.039 0 0 0-.079 0A6 6 0 0 0 .611.59a5 5 0 0 0-.378.015.039.039 0 0 0 0 .079q.189.013.379.015.002.178.014.357a.039.039 0 0 0 .079 0Q.718.878.719.698q.178-.002.358-.014a.039.039 0 0 0 0-.079" fill={fill ? fill : '#33363F'} />
		</svg>
	)
}