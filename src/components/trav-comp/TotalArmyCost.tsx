import { useState } from "react";
import Button from "../Button"
import Typography from "../Typography"
import ArmyCost from "./ArmyCost"
import useDeviceDetectService from "../../services/device-detect";

const TotalArmyCost = () => {
	const [components, setComponents] = useState<React.ReactNode[]>([]);
	const [index, setIndex] = useState<number>(100);
	const { isScreenMini } = useDeviceDetectService();

	const calculateIndex = () => {
		setIndex(prevIndex => prevIndex -1)
	}

	const addNewComponent = () => {
		calculateIndex();
		setComponents(prevComponents => [
			...prevComponents,
			<ArmyCost key={prevComponents.length} hideThead={components.length > 0} index={index} /> 
		]);
	};

	return (
		<div className="total_army_cost_component">
			<div className="description">
				<Typography mode="blue" family="lg">Troops Cost & Compare Troops</Typography>
				<Typography mode="grey" family="xs">Find out how much your army will cost you. Also here you can find out how much the army costs if you want to make an NPC without a crop.</Typography>
				<Typography mode="grey" family="xs">You can also compare the troops from several points of view, cost / defense force / attack force, etc.</Typography>
			</div>

			{ !isScreenMini && <Button className="add_new_line" type="primary small" onClick={addNewComponent}>Add New Troop</Button> }
			{ isScreenMini && <ArmyCost key={100} hideThead={true} index={100} />  }

			<div className="army_cost_components">
				{components.length > 0 && components}
			</div>
		</div>
	)
}

export default TotalArmyCost