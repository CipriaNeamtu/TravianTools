import { ChangeEvent, useEffect, useState } from "react";
import { RESOURCES_MANAGER } from "../../utils/trav-const";
import Input from "../Input";
import Typography from "../Typography";
import { LumberSvg, ClaySvg, IronSvg, CropSvg } from "./travSvg";
import Icon from "../Icon";
import { Tooltip } from "react-tooltip";
import useDeviceDetectService from "../../services/device-detect";

const ResourcesManager = () => {
	const [values, setValues] = useState(RESOURCES_MANAGER);
	const [total, setTotal] = useState([0, 0, 0, 0, 0]);
	const { isScreenMini } = useDeviceDetectService();
	
	

	const setValue = (e: ChangeEvent<HTMLInputElement>, index: number, key: string) => {
		const newValues = [...values];
		
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(newValues[index] as any)[key] = e.target.value;

		const currentValues = [Number(newValues[index].lumber), Number(newValues[index].clay), Number(newValues[index].iron), Number(newValues[index].crop)];
		newValues[index].total = currentValues.reduce((acc, curr) => acc + curr, 0);

		setValues(newValues);
	}

	const generateTotal = () => {
		const totalResults = [0, 0, 0, 0, 0]
		
		values.forEach((item) => {
			totalResults[0] += Number(item.lumber);
			totalResults[1] += Number(item.clay);
			totalResults[2] += Number(item.iron);
			totalResults[3] += Number(item.crop);
			totalResults[4] += Number(item.total);
		})

		setTotal(totalResults);
	}

	const clearLine = (index: number) => {
		const currentValues = [...values];
		currentValues[index].lumber = 0;
		currentValues[index].clay = 0;
		currentValues[index].iron = 0;
		currentValues[index].crop = 0;
		currentValues[index].total = 0;
		setValues(currentValues);
	}

	useEffect(() => {
		generateTotal();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values])

	return (
		<div className="resources_manager_component">
			<div className="resources_manager_title">
				<Typography mode="blue" family="lg">Resources Manager</Typography>
				<Typography mode="grey" family="xs">You can manage the resources easier if you need to send resources between your villages.</Typography>
				<Typography mode="grey" family="xs">The more villages you have, the harder it will be to know how many resources you need to send per village to continue building or training troops.</Typography>
			</div>
			<table>
				<thead>
					<tr>
						<th>
							<Typography mode="grey" family="md">{isScreenMini ? 'Nr' : 'Village'}</Typography>
						</th>
						<th><LumberSvg /></th>
						<th><ClaySvg /></th>
						<th><IronSvg /></th>
						<th><CropSvg /></th>
						<th>
							<Typography mode="grey" family="md">Total</Typography>
						</th>
					</tr>
				</thead>

				<tbody>
					{RESOURCES_MANAGER.map((option, index) => (
						<tr key={index}>
							<td className="village">{option.village}</td>

							{Object.keys(option)
								.filter(key => key !== 'village' && key !== 'total')
								.map((key, subIndex) => (
									<td key={subIndex}>
										<Input className={ isScreenMini ? 'size_3xs' : 'size_sm'} type="number" value={(values[index] as never)[key]} onChange={(e) => setValue(e, index, key)} />
									</td>
							))}
							<td className="total">{option.total}</td>
							<td>
								<Icon className="trash_btn" variant="trash" color="red" onClick={() => clearLine(index)} />
								<Tooltip anchorSelect=".trash_btn" place="right">Clear this line!</Tooltip>
							</td>
						</tr>
					))}

					<tr>
						<td className="total_general">Total</td>
						<td className="total_general">{total[0]}</td>
						<td className="total_general">{total[1]}</td>
						<td className="total_general">{total[2]}</td>
						<td className="total_general">{total[3]}</td>
						<td className="total_general">{total[4]}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default ResourcesManager