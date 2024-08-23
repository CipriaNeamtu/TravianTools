import Dropdown from "../Dropdown"
import { useEffect, useState } from 'react';
import { 
	GAME_SPEED, 
	TRIBES_TRAIN_LEVELS,
	HELMETS, 
	ALLY_RECRUITMENT_BONUS, 
	HelmetsProps, 
	ROMAN_TROOPS_ICONS 
} from '../../utils/trav-const';
import Typography from "../Typography";
import { generateOptions, convertInSeconds, convertInFormatedTime } from "../../utils/useful-functions";

type CurrentTroopProps = {
	option: string;
	x1: string;
	x2: string;
	x3: string;
	x5: string;
	x10: string;
}

const ArmyProduction = () => {
	const romanTroopsLvlOne = TRIBES_TRAIN_LEVELS[0].tribe[0].troops;

	const [currentSpeed, setCurrentSpeed] = useState<string>('x1');
	const [selectedTribe, setSelectedTribe] = useState(TRIBES_TRAIN_LEVELS[0].tribe);
	const [troops, setTroops] = useState(romanTroopsLvlOne);
	const [currentTroop, setCurrentTroop] = useState<CurrentTroopProps | null>(null);
	const [currentHelmet, setCurrentHelmet] = useState<HelmetsProps | null>(null);
	const [currentRecruitmentBonus, setCurrentRecruitmentBonus] = useState<HelmetsProps | null>(null);
	const [trainingTime, setTrainingTime] = useState('00:00:00');
	const [statistics, setStatistics] = useState([0, 0, 0, 0]);
	const [isTribeSelected, setIsTribeSelected] = useState<boolean>(false);

	const [currentTroopIcon, setCurrentTroopIcon] = useState([]);

	const setNumberOfVillages = () => {
		const numberOfVillages = generateOptions(30);
		return numberOfVillages;
	}
	const [villagesNumber] = useState(setNumberOfVillages());
	const [selectedVillagesNumber, selectNumberOfVillages] = useState(0);

	const handleTrainingTime = () => {
		let localTrainigTime: string | null = null;
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		localTrainigTime = currentTroop?.[currentSpeed] ?? null;

		if (localTrainigTime) {
			setTrainingTime(localTrainigTime);
			let timeForHelmetsOrRecruitmentBonus: string | null = null;
			let selectedHelmetTime: string | null = null;
			let selectedRecruitmentTime: string | null = null;

			if (currentHelmet && currentHelmet.percent != 0) {
				const helmetBonusTime = applyBonus(selectedRecruitmentTime ?? localTrainigTime, currentHelmet.percent);
				
				if (helmetBonusTime) {
					timeForHelmetsOrRecruitmentBonus = helmetBonusTime;
					selectedHelmetTime = helmetBonusTime;
				}
			}

			if (currentRecruitmentBonus) {
				const recruitmentBonusTime = applyBonus(selectedHelmetTime ?? localTrainigTime, currentRecruitmentBonus.percent);

				if (recruitmentBonusTime) {
					timeForHelmetsOrRecruitmentBonus = recruitmentBonusTime;
					selectedRecruitmentTime = recruitmentBonusTime;
				}
			}

			if (timeForHelmetsOrRecruitmentBonus) {
				setTrainingTime(timeForHelmetsOrRecruitmentBonus);
			}
		}
	}

	const selectTroop = (troop: string) => {
		setIsTribeSelected(false);
		try {
			const disableIcon = false;
			if (disableIcon) {
				setTroopIcon(troop);
			}
			
			const [selectedTroop] = troops.filter(thisTroop => thisTroop.option === troop);
			setCurrentTroop(selectedTroop);
		} catch (error) {
			console.error('ArmyProduction::selectTroop:', error)
		}
	}

	const selectTrainLevel = (level: string) => {
		try {
			const filteredLevel = selectedTribe.find(build => build.option === level);
	
			if (filteredLevel) {
				setTroops(filteredLevel.troops);
	
				const [selectedTroopLevel] = filteredLevel.troops.filter(troop => troop.option === currentTroop?.option);
				setCurrentTroop(selectedTroopLevel);
			}
		} catch (error) {
			console.error('ArmyProduction::selectTrainLevel:', error)
		}
	}

	const selectHelmet = (helmet: string) => {
		try {
			const [filteredHelmet] = HELMETS.filter(thisHelmet => thisHelmet.option === helmet);
			setCurrentHelmet(filteredHelmet);
		} catch (error) {
			console.error('ArmyProduction::selectHelmet:', error)
		}
	}

	const applyBonus = (time: string, percent: number) => {
		try {
			const timeInSeconds = convertInSeconds(time);
			const timePercentInSeconds = timeInSeconds * percent;
			const trainingTimeWithBonus = timeInSeconds - timePercentInSeconds;
			const finalTrainingTime = convertInFormatedTime(trainingTimeWithBonus);

			return finalTrainingTime;
		} catch (error) {
			console.error('ArmyProduction::applyBonus:', error)
		}
	}

	const selectRecruitmentBonus = (bonus: string) => {
		try {
			const [selectedRecruitmentBonus] = ALLY_RECRUITMENT_BONUS.filter(thisBonus => thisBonus.option === bonus);
			setCurrentRecruitmentBonus(selectedRecruitmentBonus);
		} catch (error) {
			console.error('ArmyProduction::selectRecruitmentBonus:', error)
		}
	}

	const setTroopIcon = (troop: string) => {
		const [filteredTroopsIcons] = ROMAN_TROOPS_ICONS.filter(thisTroop => thisTroop.option === troop);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		setCurrentTroopIcon(filteredTroopsIcons.icon);
	}

	const selectSpeed = (speed: string) => {
		setCurrentSpeed(speed);
	}

	const selectTribe = (tribe: string) => {
		if (tribe === 'Romans') {
			setSelectedTribe(TRIBES_TRAIN_LEVELS[0].tribe)
			setTroops(TRIBES_TRAIN_LEVELS[0].tribe[0].troops);
		}
		if (tribe === 'Teutons') {
			setSelectedTribe(TRIBES_TRAIN_LEVELS[1].tribe)
			setTroops(TRIBES_TRAIN_LEVELS[1].tribe[0].troops);
		}
		if (tribe === 'Gallics') {
			setSelectedTribe(TRIBES_TRAIN_LEVELS[2].tribe)
			setTroops(TRIBES_TRAIN_LEVELS[2].tribe[0].troops);
		}
		if (tribe === 'Egyptians') {
			setSelectedTribe(TRIBES_TRAIN_LEVELS[3].tribe)
			setTroops(TRIBES_TRAIN_LEVELS[3].tribe[0].troops);
		}
		if (tribe === 'Huns') {
			setSelectedTribe(TRIBES_TRAIN_LEVELS[4].tribe)
			setTroops(TRIBES_TRAIN_LEVELS[4].tribe[0].troops);
		}
		if (tribe === 'Spartans') {
			setSelectedTribe(TRIBES_TRAIN_LEVELS[5].tribe)
			setTroops(TRIBES_TRAIN_LEVELS[5].tribe[0].troops);
		}
		setIsTribeSelected(true);
		setCurrentTroop({ option: 'Select a troop', x1: '00:00:00', x2: '00:00:00', x3: '00:00:00', x5: '00:00:00', x10: '00:00:00' });
	}

	const displayStatistics = () => {
		try {
			const oneHourInSeconds = convertInSeconds('01:00:00');
			const oneDayInSeconds = convertInSeconds('24:00:00');
			const sevenDaysInSeconds = convertInSeconds('168:00:00');
			const thirtiethInSeconds = convertInSeconds('720:00:00');
	
			const trainingTimeInSeconds = convertInSeconds(trainingTime);
			const unitsPerHour = Math.floor(oneHourInSeconds / trainingTimeInSeconds);
			const unitsPerDay = Math.floor(oneDayInSeconds / trainingTimeInSeconds);
			const unitsPer7Days = Math.floor(sevenDaysInSeconds / trainingTimeInSeconds);
			const unitsPer30Days = Math.floor(thirtiethInSeconds / trainingTimeInSeconds);
	
			const currentStatistics = [...statistics];
			currentStatistics[0] = unitsPerHour;
			currentStatistics[1] = unitsPerDay;
			currentStatistics[2] = unitsPer7Days;
			currentStatistics[3] = unitsPer30Days;
	
			setStatistics(currentStatistics);
		} catch (error) {
			console.error('ArmyProduction::displayStatistics:', error)
		}
	}

	useEffect(() => {
		if (currentHelmet?.percent === 0 && currentTroop) {
			selectTroop(currentTroop.option);
		}

		if (trainingTime != '00:00:00') {
			displayStatistics();
		}

		if (currentTroop) {
			handleTrainingTime();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[trainingTime, currentHelmet, currentTroop, currentRecruitmentBonus, currentSpeed, selectedTribe])

	return (
		<div className="army_production_component">
			<Typography mode="blue" family="lg">Troops Production</Typography>
			<Typography mode="grey" family="xs">Find out with the help of this tool how long will take to train a beautiful army.</Typography>

			<div className="ap_selectors">
				<Dropdown className="lg" items={GAME_SPEED} selected={(option) => selectSpeed(option)} text="Select Speed" dropdownIndex={6} label="Speed (default: x1)" />
				<Dropdown className="lg" items={TRIBES_TRAIN_LEVELS} selected={(option) => selectTribe(option)} text="Select Tribe" dropdownIndex={5} label="Tribe (default: Romans)" />
				<Dropdown className="lg" items={troops} selected={(option) => selectTroop(option)} text="Select Troop" dropdownIndex={4} label="Troop" refreshItems={isTribeSelected} />
				<Dropdown className="lg" items={selectedTribe} selected={(option) => selectTrainLevel(option)} text="Select Level" dropdownIndex={3} label="Train Level" refreshItems={isTribeSelected} />
				<Dropdown className="lg" items={HELMETS} selected={(option) => selectHelmet(option)} text="Select Helmet" dropdownIndex={2} label="Helmet" />
				<Dropdown className="lg" items={ALLY_RECRUITMENT_BONUS} selected={(option) => selectRecruitmentBonus(option)} text="Select Level" dropdownIndex={1} label="Recruitment Level" />
				<Dropdown className="lg" items={villagesNumber} selected={(option) => selectNumberOfVillages(Number(option))} text="Number of Villages" dropdownIndex={0} label="Number of Villages" />
			</div>

			<div className="table_wrapper">
				<div className="army_prod_title">
					<Typography mode="black" family="xl">Production Calculator:</Typography>
					<Typography mode="blue" family="xl">{currentTroop?.option ?? 'Select a troop'}</Typography>
				</div>

				<div className="trainig_time">
					<Typography className="inline" mode="grey" family="lg">Trainig Time: </Typography>
					<Typography className="inline" mode="red" family="lg">{trainingTime}</Typography>
				</div>

				<table className="army_production_table">  
					<thead>
						<tr>
							<th>Villages Nr.</th>
							<th>{currentTroopIcon ?? ''} Prod / 1 hour</th>
							<th>{currentTroopIcon ?? ''} Prod / 1 day</th>
							<th>{currentTroopIcon ?? ''} Prod / 7 Days</th>
							<th>{currentTroopIcon ?? ''} Prod / 30 days</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>1</td>
							<td>{statistics[0]}</td>
							<td>{statistics[1]}</td>
							<td>{statistics[2]}</td>
							<td>{statistics[3]}</td>
						</tr>
						<tr>
							<td>{selectedVillagesNumber}</td>
							<td>{statistics[0] * selectedVillagesNumber}</td>
							<td>{statistics[1] * selectedVillagesNumber}</td>
							<td>{statistics[2] * selectedVillagesNumber}</td>
							<td>{statistics[3] * selectedVillagesNumber}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ArmyProduction