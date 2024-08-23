import Typography from "../Typography"
import { CULTURE_POINTS } from "../../utils/trav-const"
import useDeviceDetectService from "../../services/device-detect"


const CulturePoints = () => {
	const { isScreenMini } = useDeviceDetectService();

	return (
		<div className="culture_points_component">
			<Typography mode="blue" family="lg">Culture Points Calculator</Typography>
			<Typography mode="grey" family="xs">Culture points will help you to found new villages.</Typography>
			<Typography mode="grey" family="xs">Find out here which are the most profitable buildings to build your empire faster!</Typography>

			<table className="culture_points_table">
				<thead>
					<tr>
						<th>
							<Typography mode="white" family={isScreenMini ? '2xs' : 'sm'}>Building LVL</Typography>
						</th>

						{CULTURE_POINTS[10].cp.map((_, index) => (
							<th key={index}>
								<Typography mode="white" family={isScreenMini ? '2xs' : 'sm'}>{index + 1}</Typography>
							</th>
						))}
					</tr>
				</thead>

				<tbody>
					{CULTURE_POINTS?.map((item, index) => (
						<tr key={index}>
							<td>
								<Typography mode="black" family="xs">{item.building}</Typography>
							</td>

							{item.cp.map((cpLevel, cpIndex) => (
								<td key={cpIndex}>
									{cpLevel}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default CulturePoints