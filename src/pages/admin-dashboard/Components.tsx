import { useState } from "react"
import Button from "../../components/Button"
import Typography from "../../components/Typography"
import AdTypography from "./ad-components/ad-typography"
import AdButton from "./ad-components/ad-button"

const Components = () => {
	const [selectedComponent, setSelectedComponent] = useState<string>('');

	const changeComponent = (component: string) => {
		setSelectedComponent(component);
	}

	return (
		<>
			<Typography className="text_center" mode="grey" family="xl">CN Project Components</Typography>

			<div className="components">
				<div className="buttons">
					<Button	className="full_width" type="primary small" onClick={() => changeComponent('typography')}>Typography</Button>
					<Button	className="full_width" type="primary small" onClick={() => changeComponent('button')}>Button</Button>
					<Button	className="full_width" type="primary small" onClick={() => changeComponent('input')}>Input</Button>
					<Button	className="full_width" type="primary small" onClick={() => changeComponent('alert')}>Alert</Button>
					<Button	className="full_width" type="primary small" onClick={() => changeComponent('cards')}>Cards</Button>
				</div>

				<div className="examples">
					{ selectedComponent === 'typography' && <AdTypography /> }
					{ selectedComponent === 'button' && <AdButton /> }
				</div>
			</div>
		</>
	)
}

export default Components