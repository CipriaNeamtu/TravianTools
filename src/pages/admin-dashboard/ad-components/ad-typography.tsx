import { useEffect, useState } from "react";
import Typography from "../../../components/Typography"
import Dropdown from "../../../components/Dropdown"
import Syntax from "../../../components/Syntax";

const AdTypography = () => {
	const sizes = [{ option: '2xs' }, { option: 'xs' }, { option: 'sm' }, { option: 'md' }, { option: 'lg' }, { option: 'xl' }, { option: '2xl' }, { option: '3xl' }, { option: '4xl' }];
	const colors = [{ option: 'white' }, { option: 'black' }, { option: 'grey' }, { option: 'blue' }, { option: 'red' }, { option: 'yellow' }, { option: 'green' }, { option: 'light_blue' } ];

	const [selectedColor, setSelectedColor] = useState<string>('white');
	const [selectedSize, setSelectedSize] = useState<string>('sm');
	const [isValueSelected, setIsValueSelected] = useState<boolean>(false);
	
	const typographyExample = `<Typography mode="${selectedColor}" family="${selectedSize}">Typography examples on CN Project!</Typography>`;
	
	useEffect(() => {
		setIsValueSelected(true);
	},[selectedColor, selectedSize])
	
	const handleValueChange = () => {
		setIsValueSelected(false);
	}

	return (
		<div className="components_template">
			<Typography mode="blue" family="lg">Typography Component</Typography>

			<div className="variants_selection">
				<div className="dropdowns">
					<Dropdown className="lg" items={colors} selected={(option) => setSelectedColor(option)} text="color" dropdownIndex={1} />
					<Dropdown className="md" items={sizes} selected={(option) => setSelectedSize(option)} text="size" dropdownIndex={0} />
				</div>
				<Syntax code={typographyExample} defaultState={isValueSelected} reselect={handleValueChange} />
			</div>

			<Typography className="example" mode="blue" family="md">Example:</Typography>
			<Typography mode={selectedColor} family={selectedSize}>Typography examples on CN Project!</Typography>
		</div>
	)
}

export default AdTypography