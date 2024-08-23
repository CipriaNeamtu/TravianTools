import { useEffect, useState } from "react";
import Typography from "../../../components/Typography"
import Dropdown from "../../../components/Dropdown"
import Syntax from "../../../components/Syntax";
import Button from "../../../components/Button";
import { iconList } from "../../../utils/constants";

const AdButton = () => {
	const variants = [{ option: 'primary' }, { option: 'secondary' }, { option: 'text' }];
	const colors = [{ option: 'default' }, { option: 'white' }, { option: 'black' }, { option: 'grey' }, { option: 'light_blue' }, { option: 'red' }, { option: 'yellow' }, { option: 'green' }];
	const sizes = [{ option: 'default' }, { option: 'mini' }, { option: 'small' }, { option: 'medium' }, { option: 'large' }];
	const icons = iconList;

	

	const [selectedVariant, setSelectedVariant] = useState<string>('primary');
	const [selectedColor, setSelectedColor] = useState<string>('');
	const [selectedSize, setSelectedSize] = useState<string>('');
	const [selectedIcon, setSelectedIcon] = useState<string>('');
	const [isValueSelected, setIsValueSelected] = useState<boolean>(false);
	
	const selection = `${selectedVariant}${selectedColor ? '_' + selectedColor : ''} ${selectedSize ? selectedSize : ''}`;
	const buttonExample = `<Button type="${selection.trim()}">Your Button</Button>`;
	
	useEffect(() => {
		setIsValueSelected(true);
	},[selectedColor, selectedSize])
	
	const handleValueChange = () => {
		setIsValueSelected(false);
	}

	return (
		<div className="components_template">
			<Typography mode="blue" family="lg">Button Component</Typography>

			<div className="variants_selection">
				<div className="dropdowns">
					<Dropdown className="lg" items={variants} selected={(option) => setSelectedVariant(option)} text="variants" dropdownIndex={3} />
					<Dropdown className="md" items={colors} selected={(option) => {
						if (option === 'default') {
							option = '';
						}
						setSelectedColor(option)
					}} text="colors" dropdownIndex={2} />
					<Dropdown className="md" items={sizes} selected={(option) => {
						if (option === 'default') {
							option = '';
						}
						setSelectedSize(option)
					}} text="size" dropdownIndex={1} />
					<Dropdown className="lg" items={icons} selected={(option) => setSelectedIcon(option)} text="icons" dropdownIndex={0} />
				</div>
				<Syntax code={buttonExample} defaultState={isValueSelected} reselect={handleValueChange} />
			</div>

			<Typography className="example" mode="blue" family="md">Live example:</Typography>
			<Button type={selection.trim()} icon={selectedIcon}>Your Button</Button>

			<div className="examples">
				<Typography mode="grey" family="md">All Button types:</Typography>
				
				<div className="all_types">
					<Typography className="info_points" mode="blue" family="xs">1. Buttons: Primary | Secondary | Text</Typography>
					<div className="button_types variants">
							<Button type="primary">Button</Button>
							<Button type="secondary">Button</Button>
							<Button type="text_grey large">Button</Button>
					</div>

					<Typography className="info_points" mode="blue" family="xs">2. Here you can see all colors for primary button.</Typography>
					<div className="type_colors">
						<Button type="primary">Button</Button>
						<Button type="primary_red">Button</Button>
						<Button type="primary_green">Button</Button>
						<Button type="primary_yellow">Button</Button>
						<Button type="primary_black">Button</Button>
						<Button type="primary_grey">Button</Button>
						<Button type="primary_white">Button</Button>
						<Button type="primary_light_blue">Button</Button>
					</div>

					<Typography className="info_points" mode="blue" family="xs">3. Button Variants</Typography>
					<div className="button_types">
						<div className="button_type">
							<Button type="primary mini">Button</Button>
							<Button type="secondary mini">Button</Button>
							<Typography mode="grey" family="xs">Primary & Secondary - variant mini</Typography>
						</div>
						<div className="button_type">
							<Button type="primary small">Button</Button>
							<Button type="secondary small">Button</Button>
							<Typography mode="grey" family="xs">Primary & Secondary - variant small</Typography>
						</div>
						<div className="button_type">
							<Button type="primary medium">Button</Button>
							<Button type="secondary medium">Button</Button>
							<Typography mode="grey" family="xs">Primary & Secondary - variant medium</Typography>
						</div>
						<div className="button_type">
							<Button type="primary large">Button</Button>
							<Button type="secondary large">Button</Button>
							<Typography mode="grey" family="xs">Primary & Secondary - variant large</Typography>
						</div>
					</div>

					<Typography className="info_points" mode="blue" family="xs">4. Buttons with Icons</Typography>
					<div className="button_types">
						<div className="button_type">
							<Button type="primary small" icon="success">Button</Button>
							<Button className="icon_left" type="primary small" icon="success">Button</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdButton