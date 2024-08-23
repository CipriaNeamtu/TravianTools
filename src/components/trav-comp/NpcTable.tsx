import { Tooltip } from "react-tooltip"
import Button from "../Button"
import Typography from "../Typography"
import useDeviceDetectService from "../../services/device-detect";
import { ClaySvg, CropSvg, IronSvg, LumberSvg } from "./travSvg";
import { copyTextToClipboard } from "../../services/clipboard-copy";
import { mainBuildingsProps } from "../../utils/trav-const";
import { useEffect, useState } from "react";

type NpcTableProps = {
	items?: mainBuildingsProps[];
	multipleLevels?: mainBuildingsProps;
	currentBuildingName?: string;
	resourceCost: number[];
	copyToClipboardSelections: boolean[];
}

const NpcTable = ({ items, multipleLevels, currentBuildingName, resourceCost, copyToClipboardSelections }: NpcTableProps) => {
	const { isScreenMini } = useDeviceDetectService();
	const [resultSelected, setResultSelected] = useState<boolean[]>(copyToClipboardSelections);

	const copyResult = (result: number, index: number) => {
		const currentResult = [...resultSelected];
		currentResult[index] = true;
		setResultSelected(currentResult);

		copyTextToClipboard(result.toString());
	}

	useEffect(() => {
		setResultSelected(copyToClipboardSelections);
	}, [copyToClipboardSelections])

	return (
		<div className="npc_table_wrapper">
			{currentBuildingName &&
				<div className="npc_title">
					<Typography mode="black" family={isScreenMini ? 'sm' : 'lg'}>Building:</Typography>
					<Typography mode="blue" family={isScreenMini ? 'sm' : 'lg'}>{currentBuildingName}</Typography>
				</div>
			}

			<table className="npc_table">
				<thead>
					<tr>
						<th>{isScreenMini ? 'Lvl' : 'Level'}</th>
						<th>{isScreenMini ? '' : 'Lumber'} <LumberSvg /></th>
						<th>{isScreenMini ? '' : 'Clay'} <ClaySvg /></th>
						<th>{isScreenMini ? '' : 'Iron'} <IronSvg /></th>
						<th>{isScreenMini ? '' : 'Crop'} <CropSvg /></th>
						<th>Cost </th>
					</tr>
				</thead>

				<tbody>
					{items ? items?.map((item, index) => (
						<tr key={index}>
							<td>{item.level}</td>
							<td>{item.lumber}</td>
							<td>{item.clay}</td>
							<td>{item.iron}</td>
							<td>{item.crop}</td>
							<td>{item.cost}</td>
						</tr>
					)) :
						<tr>
							<td>{multipleLevels?.level}</td>
							<td>{multipleLevels?.lumber}</td>
							<td>{multipleLevels?.clay}</td>
							<td>{multipleLevels?.iron}</td>
							<td>{multipleLevels?.crop}</td>
							<td>{multipleLevels?.cost}</td>
						</tr>
					}
					<tr className={`${multipleLevels ? 'multiple' : ''}`}>
						<td className={`total_cost ${multipleLevels ? 'multiple' : ''}`}>Total</td>
						<td className={`total_cost ${multipleLevels ? 'multiple' : ''}`}>
							<div className="cost_result">
								{resourceCost[0]}
								<Button
									className="copy_btn"
									type={resultSelected[0] ? 'primary_green mini' : 'primary mini'}
									icon="copy"
									onClick={() => copyResult(resourceCost[0], 0)}>{''}
								</Button>
							</div>
						</td>
						<td className={`total_cost ${multipleLevels ? 'multiple' : ''}`}>
							<div className="cost_result">
								{resourceCost[1]}
								<Button
									className="copy_btn"
									type={resultSelected[1] ? 'primary_green mini' : 'primary mini'}
									icon="copy"
									onClick={() => copyResult(resourceCost[1], 1)}>{''}
								</Button>
							</div>
						</td>
						<td className={`total_cost ${multipleLevels ? 'multiple' : ''}`}>
							<div className="cost_result">
								{resourceCost[2]}
								<Button
									className="copy_btn"
									type={resultSelected[2] ? 'primary_green mini' : 'primary mini'}
									icon="copy"
									onClick={() => copyResult(resourceCost[2], 2)}>{''}
								</Button>
							</div>
						</td>
						<td className={`total_cost ${multipleLevels ? 'multiple' : ''}`}>
							<div className="cost_result">
								{resourceCost[3]}
								<Button
									className="copy_btn"
									type={resultSelected[3] ? 'primary_green mini' : 'primary mini'}
									icon="copy"
									onClick={() => copyResult(resourceCost[3], 3)}>{''}
								</Button>
							</div>
						</td>
						<td className={`total_cost ${multipleLevels ? 'multiple' : ''}`}>{resourceCost[4]}</td>
					</tr>
				</tbody>
			</table>

			<Tooltip anchorSelect=".copy_btn" place="top">Copy to clipboard!</Tooltip>
		</div>
	)
}

export default NpcTable