import { ChangeEvent, useEffect, useState } from "react"
import Typography from "../Typography";
import Input from "../Input";
import Button from "../Button";
import { TROOPS, troopsProps } from "../../utils/trav-const";
import Dropdown from "../Dropdown";
import { LumberSvg, ClaySvg, IronSvg, CropSvg, Attack, InfantryDeff, CavalaryDeff } from "./travSvg";
import { copyTextToClipboard } from "../../services/clipboard-copy";
import { Tooltip } from "react-tooltip";
import useDeviceDetectService from "../../services/device-detect";
import { convertInSeconds, convertInFormatedTime } from "../../utils/useful-functions";

type ArmyCostProps = {
	hideThead: boolean;
	index: number;
}

const ArmyCost = ({ hideThead, index }: ArmyCostProps) => {
	const [troop, setTroop] = useState<troopsProps | null>(null);
	const [currentTroop, setCurrentTroop] = useState<troopsProps | null>();
	const [currentTroops, setCurrentTroops] = useState<troopsProps[]>(TROOPS[0].troops);
	const [numberOfTroops, setNumberOfTroops] = useState<number>(0);
	const [resultSelected, setResultSelected] = useState<boolean[]>([false, false, false, false])
	const [refreshSelectedTroop, setRefreshSelectedTroop] = useState<boolean>(false);
	const [availableResources, setAvailableResources] = useState<number>(0);

	const { isScreenMini } = useDeviceDetectService();

	const timeCalculator = (time: string) => {
		try {
			const timeInSeconds = convertInSeconds(time);
			const timeResult = timeInSeconds * numberOfTroops;
			const finalResult = convertInFormatedTime(timeResult);
			return finalResult;
		} catch (error) {
			console.error('ArmyCost::timeCalculator:', error)
		}
	}

	const changeNumberOfTroops = (e: ChangeEvent<HTMLInputElement>) => {
		if (troop?.option) {
			selectTroop(troop.option)
		}

		setNumberOfTroops(Number(e.target.value))
	}

	const calculate = () => {
		// if (newTroopCosts?.lumber && currentTroop?.lumber && newTroopCosts.lumber > currentTroop.lumber) {
		// 	return;
		// }
		const newTroop: troopsProps = {};
		if (currentTroop) {
			Object.entries(currentTroop).map((item) => {
				if (['cost', 'fieldSpeed', 'option', 'time'].includes(item[0])) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					newTroop[item[0]] = item[1];
				} else {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					newTroop[item[0]] = item[1] * numberOfTroops;
				}

				if(item[0] === 'timeLvl20') {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					newTroop[item[0]] = timeCalculator(item[1]);
				}
			})
		}

		if (newTroop.lumber && newTroop.clay && newTroop.iron && newTroop.crop) {
			newTroop.cost = newTroop.lumber + newTroop.clay + newTroop.iron + newTroop.crop;
			newTroop.onlyLCI = newTroop.lumber + newTroop.clay + newTroop.iron;
		}
		setTroop(newTroop);
	}

	const selectTroop = (selectedTroop: string) => {
		const [filteredTroop] = currentTroops.filter(troop => troop.option === selectedTroop);
		setTroop(filteredTroop);
		setCurrentTroop(filteredTroop);
	}

	const selectTroops = (selectedRace: string) => {
		const [filteredRace] = TROOPS.filter(race => race.option === selectedRace);
		setCurrentTroops(filteredRace.troops);
		refreshTroopsCost();
		setRefreshSelectedTroop(true);
	}

	const refreshTroopsCost = () => {
		setNumberOfTroops(0);
		const newTroopCosts = { ...troop };

		newTroopCosts.lumber = 0;
		newTroopCosts.clay = 0;
		newTroopCosts.iron = 0;
		newTroopCosts.crop = 0;
		newTroopCosts.cost = 0;
		newTroopCosts.onlyLCI = 0;

		setTroop(newTroopCosts);
	}

	const copyResult = (result: number, index: number) => {
		const currentResult = [...resultSelected];
		currentResult[index] = true;
		setResultSelected(currentResult);

		copyTextToClipboard(result.toString());
	}

	const calculateTroops = (inputValue: number) => {
		setAvailableResources(inputValue);
	}

	useEffect(() => {
		if (currentTroop?.cost) {
			const theNumberOfTroopsThatCanBeTrained = Math.floor(availableResources / currentTroop.cost);
			setNumberOfTroops(theNumberOfTroopsThatCanBeTrained);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [availableResources, currentTroop])

	useEffect(() => {
		if (numberOfTroops === 0) {
			return;
		}

		calculate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [numberOfTroops, currentTroop])

	return (
		<div className="army_cost_component">
			{ !isScreenMini &&
				<div className="army_cost_table_wrapper">
					<table className="army_cost_table">
						<thead className={`${hideThead ? 'hide_thead' : ''}`}>
							<tr>
								<th>Tribe</th>
								<th>Troop Name</th>
								<th>Resources</th>
								<th>Troops Number</th>
								<th><LumberSvg /></th>
								<th><ClaySvg /></th>
								<th><IronSvg /></th>
								<th><CropSvg /></th>
								<th>Only R.</th>
								<th>Total Cost</th>
								<th className="attack"><Attack /></th>
								<th className="infantryDeff"><InfantryDeff /></th>
								<th className="cavalaryDeff"><CavalaryDeff /></th>
								<th>Time Lvl 20 (x1)</th>
								<th>Field Speed</th>
								<th>Carry</th>
								<th>Upkeep</th>
							</tr>
							<Tooltip anchorSelect=".attack" place="top">Attack power.</Tooltip>
							<Tooltip anchorSelect=".infantryDeff" place="top">Defensive power against infantry.</Tooltip>
							<Tooltip anchorSelect=".cavalaryDeff" place="top">Defensive power against cavalry.</Tooltip>
						</thead>

						<tbody>
							<tr>
								{/* <td>{troop?.option ?? 'Select troop'}</td> */}
								<td className="tribes"><Dropdown className="lg" items={TROOPS} selected={(option) => selectTroops(option)} text="Romans" fullWidth={true} dropdownIndex={index} /></td>
								<td className="troops"><Dropdown className="lg" items={currentTroops} selected={(option) => selectTroop(option)} text="Select Troop" fullWidth={true} dropdownIndex={index} refreshItems={refreshSelectedTroop} /></td>
								<td className="troop_cost_input"><Input type="number" value={availableResources.toString()} onChange={(e) => calculateTroops(Number(e.target.value))} fullWidth={true} /></td>
								<td className="troop_cost_input"><Input type="number" value={numberOfTroops.toString()} onChange={(e) => changeNumberOfTroops(e)} placeholder="The number of troops" fullWidth={true} /></td>
								<td className="resources">{troop?.lumber ?? 0}</td>
								<td className="resources">{troop?.clay ?? 0}</td>
								<td className="resources">{troop?.iron ?? 0}</td>
								<td className="resources">{troop?.crop ?? 0}</td>
								<td className="onlyLCI_cost">{troop?.onlyLCI ?? 0}</td>
								<td className="troop_total_cost">{troop?.cost ?? 0}</td>
								<td className="troop_attack">{troop?.attack ?? 0}</td>
								<td className="troop_infantryDeff">{troop?.infantryDeff ?? 0}</td>
								<td className="troop_cavalaryDeff">{troop?.cavalaryDeff ?? 0}</td>
								<td className="troop_cavalaryDeff">{troop?.timeLvl20 ?? 0}</td>
								<td className="troop_fieldSpeed">{troop?.fieldSpeed ?? 0}</td>
								<td className="troop_carry">{troop?.carry ?? 0}</td>
								<td className="troop_consumption">{troop?.consumption ?? 0}</td>
							</tr>
						</tbody>
					</table>
				</div>
			}

			{isScreenMini ?
				<div className="selectors_wrapper">
					<div className="troops_selectors">
						<Dropdown items={TROOPS} selected={(option) => selectTroops(option)} text="Romans" fullWidth={true} dropdownIndex={1} />
						<Dropdown items={currentTroops} selected={(option) => selectTroop(option)} text="Select Troop" fullWidth={true} dropdownIndex={0} refreshItems={refreshSelectedTroop} />
					</div>

					{troop?.option &&
						<div className="troops_number">
							<Input type="number" value={availableResources.toString()} onChange={(e) => calculateTroops(Number(e.target.value))} fullWidth={true} label="Available Resources" />
							<Input type="number" value={numberOfTroops.toString()} onChange={(e) => changeNumberOfTroops(e)} placeholder="The number of troops" fullWidth={true} label="Troops Number" />
						</div>
					}

					<div className="troop_powers">
						<Typography className="attack" mode="grey" family="sm"><Attack /> {troop?.attack}</Typography>
						<Tooltip anchorSelect=".attack" place="right">Attack power.</Tooltip>

						<Typography className="infantry_deff" mode="grey" family="sm"><InfantryDeff /> {troop?.infantryDeff}</Typography>
						<Tooltip anchorSelect=".infantry_deff" place="right">Defensive power against infantry.</Tooltip>

						<Typography className="cavalary_deff" mode="grey" family="sm"><CavalaryDeff /> {troop?.cavalaryDeff}</Typography>
						<Tooltip anchorSelect=".cavalary_deff" place="right">Defensive power against cavalry.</Tooltip>

						<Typography mode="grey" family="sm">Filed speed/hour: {troop?.fieldSpeed}</Typography>
						<Typography mode="grey" family="sm">Carry: {troop?.carry}</Typography>
					</div>

					<div className="cost_result">
						<div className="resource_cost">
							<LumberSvg /> {troop?.lumber ?? 0}
							{troop?.lumber != 0 && <Button className="copy_btn" type={resultSelected[0] ? 'primary_green mini' : 'primary mini'} icon="copy" onClick={() => copyResult((troop?.lumber ?? 0), 0)}>{''}</Button>}
						</div>
						<div className="resource_cost">
							<ClaySvg /> {troop?.clay ?? 0}
							{troop?.clay != 0 && <Button className="copy_btn" type={resultSelected[1] ? 'primary_green mini' : 'primary mini'} icon="copy" onClick={() => copyResult((troop?.clay ?? 0), 1)}>{''}</Button>}
						</div>
						<div className="resource_cost">
							<IronSvg /> {troop?.iron ?? 0}
							{troop?.iron != 0 && <Button className="copy_btn" type={resultSelected[2] ? 'primary_green mini' : 'primary mini'} icon="copy" onClick={() => copyResult((troop?.iron ?? 0), 2)}>{''}</Button>}
						</div>
						<div className="resource_cost">
							<CropSvg /> {troop?.crop ?? 0}
							{troop?.crop != 0 && <Button className="copy_btn" type={resultSelected[3] ? 'primary_green mini' : 'primary mini'} icon="copy" onClick={() => copyResult((troop?.crop ?? 0), 3)}>{''}</Button>}
						</div>

						<Tooltip anchorSelect=".copy_btn" place="right">Copy</Tooltip>
						<Typography className="only_lci" mode="grey" family="sm"><LumberSvg /> + <ClaySvg /> + <IronSvg /> = {troop?.onlyLCI ?? 0} Resources</Typography>
						<Typography mode="black" family="sm">Total Cost: {troop?.cost ?? 0}</Typography>
					</div>
				</div>
				: null}
		</div>
	)
}

export default ArmyCost