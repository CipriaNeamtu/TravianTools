import { useEffect, useState } from "react";
import { LEVELS_1_20, mainBuildingsProps, BUILDINGS } from "../../utils/trav-const";
import Dropdown from "../Dropdown";
import Typography from "../Typography";
import Button from "../Button";
import useDeviceDetectService from "../../services/device-detect";
import NpcTable from "./NpcTable";
import { copyTextToClipboard } from "../../services/clipboard-copy";
import Icon from "../Icon";
import { Tooltip } from "react-tooltip";

type GeneralSumProps = {
	buildingName: string;
	results: number[];
}

const NpcCalculator = () => {
	/* Npc Simple Building Calculator */
	const [simpleStartLevel, setSimpleStartLevel] = useState<number>(0);
	const [simpleEndLevel, setSimpleEndLevel] = useState<number>(0);
	const [simpleBuildingCost, setSimpleBuildingCost] = useState<number[]>([0, 0, 0, 0, 0]);
	const [simpleSelectedLevels, setSimpleSelectedLevels] = useState<mainBuildingsProps[]>([{ level: 0, lumber: '0', clay: '0', iron: '0', crop: '0', cost: '0' }]);
	const [simpleBuildingName, setSimpleBuildingName] = useState<string | null>(null);

	/* Npc Multiple Building Calculator */
	const [multipleSelectedBuilding, setMultipleSelectedBuilding] = useState<mainBuildingsProps[] | null>(null);
	const [multipleSelectedLevel, setMultipleSelectedLevel] = useState<mainBuildingsProps>({ level: 0, lumber: '0', clay: '0', iron: '0', crop: '0', cost: '0' });
	const [multipleNumberOfBuildings, setMultipleNumberOfBuildings] = useState<number>(0);
	const [multipleBuildingCost, setMultipleBuildingCost] = useState<number[]>([0, 0, 0, 0, 0]);
	const [multipleBuildingName, setMultipleBuildingName] = useState<string | null>(null);

	/* Copy to clipboard selections */
	const [simpleCCSelections, setSimpleCCSelections] = useState<boolean[]>([false, false, false, false]);
	const [multipleCCSelections, setMultipleCCSelections] = useState<boolean[]>([false, false, false, false]);

	const [generalSum, setGeneralSum] = useState<GeneralSumProps[]>([]);
	const [generalSumResult, setGeneralSumResult] = useState<number[]>([0, 0, 0, 0, 0]);
	const [resultSelected, setResultSelected] = useState<boolean[]>([false, false, false, false]);
	const [resultsList, setResultsList] = useState<number[][]>([]);

	const { isScreenMini } = useDeviceDetectService();

	const copyResult = (result: number, index: number) => {
		const currentResult = [...resultSelected];
		currentResult[index] = true;
		setResultSelected(currentResult);

		copyTextToClipboard(result.toString());
	}
	
	const selectBuildingSimple = (option: string) => {
		const [filteredBuilding] = BUILDINGS.filter(building => building.option === option);
		const filteredBuildingCopy = {...filteredBuilding};

		if (simpleStartLevel != 0 && simpleEndLevel != 0) {
			filteredBuildingCopy.building = filteredBuildingCopy.building.slice(simpleStartLevel - 1, simpleEndLevel);
		}
		
		setSimpleSelectedLevels(filteredBuildingCopy.building);
		setSimpleBuildingName(filteredBuildingCopy.option);
	}

	const selectBuildingMultiple = (option: string) => {
		const [filteredBuilding] = BUILDINGS.filter(building => building.option === option);
		
		setMultipleSelectedBuilding(filteredBuilding.building);
		setMultipleCCSelections([false, false, false, false]);
		setMultipleBuildingName(filteredBuilding.option);
	}

	const selectRangeBetweenLevels = (start: number, end: number) => {
		const [filteredBuilding] = BUILDINGS.filter(building => building.option === simpleBuildingName);
		const filteredLevels = filteredBuilding.building.filter(building => building.level >= start && building.level <= end);
		setSimpleSelectedLevels(filteredLevels);
	}

	const selectSimpleBuildingLevels = (option: number, position: string) => {
		if (position === 'start') {
			setSimpleStartLevel(option);

			if (simpleEndLevel === 0) {
				selectRangeBetweenLevels(option, 20);
				return;
			}
			selectRangeBetweenLevels(option, simpleEndLevel);
		} else {
			setSimpleEndLevel(option);

			if (simpleStartLevel === 0) {
				selectRangeBetweenLevels(1, option);
				return;
			}
			selectRangeBetweenLevels(simpleStartLevel, option);
		}
	}

	const calculateSimpleBuildingCost = () => {
		// lumber | clay | iron | crop | total
		const resources = [0, 0, 0, 0, 0];

		simpleSelectedLevels.forEach((building) => { resources[0] += parseInt(building.lumber) });
		simpleSelectedLevels.forEach((building) => { resources[1] += parseInt(building.clay) });
		simpleSelectedLevels.forEach((building) => { resources[2] += parseInt(building.iron) });
		simpleSelectedLevels.forEach((building) => { resources[3] += parseInt(building.crop) });
		simpleSelectedLevels.forEach((building) => { resources[4] += parseInt(building.cost) });

		setSimpleBuildingCost(resources);
	}

	const selectMultipleBuildingLevel = (level: number) => {
		if (multipleSelectedBuilding) {
			const [buildingLevel] = multipleSelectedBuilding.filter(building => building.level === level);
			setMultipleSelectedLevel(buildingLevel);
		}
		setSimpleCCSelections([false, false, false, false]);
	}

	const calculateMultipleBuildingCost = () => {
		const buildingCost = { ...multipleSelectedLevel };

		const lumber = Number(buildingCost.lumber) * multipleNumberOfBuildings;
		const clay = Number(buildingCost.clay) * multipleNumberOfBuildings;
		const iron = Number(buildingCost.iron) * multipleNumberOfBuildings;
		const crop = Number(buildingCost.crop) * multipleNumberOfBuildings;
		const cost = lumber + clay + iron + crop;

		setMultipleBuildingCost([lumber, clay, iron, crop, cost]);
	}

	const calculateGeneralSum = () => {
		try {
			if (generalSum[0]) {
				const currentGeneralSum = [...generalSum];
				const currentResultsList: number[][] = [...resultsList];

				const sumResult = currentGeneralSum[0]?.results.map((_, index) => currentResultsList.reduce((sum, curr) => sum + curr[index], 0));
				setGeneralSumResult(sumResult);
			}
		} catch (error) {
			console.error('NpcCalculator::calculateGeneralSum:', error)
		}
	}

	const updateGeneralSum = (buildingName: string, buildingCost: number[]) => {
		if (!buildingCost[0]) {
			return;
		}

		const currentGeneralSum = [...generalSum];
		const currentResultsList: number[][] = [...resultsList];
		currentGeneralSum.push({ buildingName, results: buildingCost });
		currentResultsList.push(buildingCost);

		setGeneralSum(currentGeneralSum);
		setResultsList(currentResultsList);
	}

	const resetGeneralSumTable = () => {
		setGeneralSum([]);
		setResultsList([]);
		setGeneralSumResult([0, 0, 0, 0, 0]);
	}
	
	const removeResultFromGeneralSum = (selectedResultIndex: number) => {
		const currentGeneralSum = [...generalSum];
		currentGeneralSum.splice(selectedResultIndex, 1);
		setGeneralSum(currentGeneralSum);

		const currentResultsList = [...resultsList];
		currentResultsList.splice(selectedResultIndex, 1);
		if (!currentResultsList[0]) {
			resetGeneralSumTable();
		}
		
		setResultsList(currentResultsList);
	}
	
	useEffect(() => {
		calculateSimpleBuildingCost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [simpleSelectedLevels])

	useEffect(() => {
		if (multipleSelectedLevel.level === 0) {
			multipleSelectedLevel.level = 1;
		}
		selectMultipleBuildingLevel(multipleSelectedLevel.level);
		calculateMultipleBuildingCost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [multipleSelectedBuilding, multipleSelectedLevel, multipleNumberOfBuildings])

	useEffect(() => {
		calculateGeneralSum();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [resultsList])

	return (
		<div className="npc_calculator_component">
			<Typography mode="blue" family="lg">Npc Calculator</Typography>
			<Typography mode="grey" family="xs">This tool is very useful for me because it helps me to save a large amount of gold and at the same time to manage resources more easily.</Typography>
			<Typography mode="grey" family="xs">You can find out how many resources you need to build several levels of a building or several buildings at once, or both.</Typography>
			
			<div className="sum_table">
				<Typography mode="blue" family="lg">General SUM</Typography>
				
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Lumber</th>
							<th>Clay</th>
							<th>Iron</th>
							<th>Crop</th>
							<th>Cost</th>
							<th>Reset</th>
						</tr>
					</thead>

					<tbody>
						{generalSum.map((item, index) => (
							<tr key={index}>
								<td>{item.buildingName}</td>

								{item.results.map((result, resultIndex) => (
									<td key={resultIndex}>{result}</td>
								))}
								<td className="remove_btn"><Icon variant="trash" color="red" onClick={() => removeResultFromGeneralSum(index)} /></td>
								
							</tr>
						))}

						<tr>
							<td>Total Sum</td>
							{generalSumResult.map((item, index) => (

								<td key={index}>
									<div className="sum_results_wrapper">
										{item}
										<Button
											className="copy_btn"
											type={resultSelected[index] ? 'primary_green mini' : 'primary mini'}
											icon="copy"
											onClick={() => copyResult(generalSumResult[index], index)}>{''}
										</Button>
									</div>
								</td>
							))}
							<td className="reset_table_btn"><Icon variant="trash" color="red" onClick={resetGeneralSumTable} /></td>
						</tr>
					</tbody>
				</table>

				<Tooltip anchorSelect=".remove_btn" place="right">Remove this line!</Tooltip>
				<Tooltip anchorSelect=".reset_table_btn" place="right">Reset Table!</Tooltip>
			</div>

			<div className="npc_calculators_wrapper">
				<div className="npc_simple_buildings">
					<div className="npc_buildings_title">
						<Typography mode="blue" family="lg">Npc Simple Building Calculator</Typography>
						<Typography className="npc_description" mode="grey" family="2xs">
							You can select a range, for example Main Building from level 1 to 10, and the calculator will show how many resources are needed to build all 10 levels.
						</Typography>
					</div>

					<div className="selectors_wrapper">
						<div className="selectors">
							<Dropdown className="lg" items={BUILDINGS} selected={(option) => selectBuildingSimple(option)} text="Select building" label="Building" dropdownIndex={2} />
							<Dropdown className="md" items={LEVELS_1_20} selected={(option) => selectSimpleBuildingLevels(Number(option), 'start')} text="Start Level" label="Start Level" dropdownIndex={1} />
							<Dropdown className="md" items={LEVELS_1_20} selected={(option) => selectSimpleBuildingLevels(Number(option), 'end')} text="End Level" label="End Level" dropdownIndex={0} />
						</div>

						<div className="npc_results_buttons">
							<Button
								className={isScreenMini ? 'full_width' : ''}
								type="primary_yellow"
								onClick={() => updateGeneralSum(`${simpleBuildingName} ${simpleStartLevel} -> ${simpleEndLevel}` ?? '', simpleBuildingCost)}
							>
								Add to Sum
							</Button>
						</div>
					</div>

					<NpcTable
						items={simpleSelectedLevels}
						currentBuildingName={simpleBuildingName ?? ''}
						resourceCost={simpleBuildingCost}
						copyToClipboardSelections={simpleCCSelections}
					/>
				</div>

				<div className="npc_multiple_buildings">
					<div className="npc_buildings_title">
						<Typography mode="blue" family="lg">Npc Multiple Buildings Calculator</Typography>
						<div className="npc_description">
							<Typography mode="grey" family="2xs">
								Find out how much it costs to build the same building several times! This tool is very useful if you want to calculate resources cost.
							</Typography>
						</div>
					</div>

					<div className="selectors_wrapper">
						<div className="selectors">
							<Dropdown className="lg" items={BUILDINGS} selected={(option) => selectBuildingMultiple(option)} text="Select building" label="Building" dropdownIndex={5} />
							<Dropdown className="md" items={LEVELS_1_20} selected={(option) => selectMultipleBuildingLevel(Number(option))} text="Level" label="Level" dropdownIndex={4} />
							<Dropdown className="lg" items={LEVELS_1_20} selected={(option) => setMultipleNumberOfBuildings(Number(option))} text="Number of Buildings" label="Number of Buildings" dropdownIndex={3} />
						</div>

						<div className="npc_results_buttons">
							<Button
								className={isScreenMini ? 'full_width' : ''}
								type="primary_yellow"
								onClick={() => updateGeneralSum(`${multipleNumberOfBuildings} * ${multipleBuildingName} lvl ${multipleSelectedLevel.level}` ?? '', multipleBuildingCost)}
							>
								Add to Sum
							</Button>
						</div>
					</div>

					<NpcTable
						multipleLevels={multipleSelectedLevel}
						currentBuildingName={multipleBuildingName ?? ''}
						resourceCost={multipleBuildingCost}
						copyToClipboardSelections={multipleCCSelections}
					/>
				</div>
			</div>
		</div>
	)
}

export default NpcCalculator