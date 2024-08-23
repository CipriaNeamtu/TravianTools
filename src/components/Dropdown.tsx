import { ChangeEvent, useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "./SvgBase";
import Typography from "./Typography";
import Input from "./Input";
import Icon from "./Icon";
import { useClickOutside } from "../services/click-outside";
interface DropdownOption {
	option?: string;
}

type DropdownProps<T> = {
	items: T[];
	className?: 'sm' | 'md' | 'lg';
	selected: (option: string) => void;
	text?: string;
	dropdownIndex?: number;
	label?: string;
	refreshItems?: boolean;
	fullWidth?: boolean;
}

const Dropdown = <T extends DropdownOption>({ items, className, selected, text, dropdownIndex, label, refreshItems = false, fullWidth = false }: DropdownProps<T>) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<DropdownOption>({});
	const [searchValue, setSearchValue] = useState('');
	const [localItems, setLocalItems] = useState<DropdownOption[]>(items);
	
	const ref = useClickOutside(() => {
		closeDropdown();
	});
	
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	}

	const closeDropdown = () => {
		setIsOpen(false);
	}

	const handleItem = (item: DropdownOption) => {
		setSelectedItem(item);
		
		if (item.option) {
			selected(item?.option);
		}
		toggleDropdown();
		setSearchValue('');
		setLocalItems(items);
	}

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value;
		setSearchValue(inputValue);
		
		const filteredItems = items.filter((item) => item.option?.toLowerCase()?.includes(inputValue.toLowerCase()));

		if (filteredItems.length === 0) {
			setLocalItems([{ option: 'Nothing found' }]);
			return;
		}
		setLocalItems(filteredItems);
	}

	useEffect(() => {
		setLocalItems(items);

		if (refreshItems) {
			setSelectedItem({});
		}
	},[items, refreshItems])

	return (
		<div className={`dropdown_component ${fullWidth ? 'full_width' : ''}`}>
			{ label && <Typography className="label" mode="grey" family="xs">{label}</Typography> }

			<div className={`dropdown ${fullWidth ? 'full_width' : ''} ${className ? className : ''}`} style={{ zIndex: dropdownIndex }} ref={ref}>
				<div className="dropdown_selector" onClick={toggleDropdown}>
					<Typography className="selected_option" mode="black" family="xs">
						{selectedItem.option ? selectedItem.option : text ? text: 'Select an option'}
					</Typography>
					{ !isOpen && <ArrowDown stroke="#0099FF" /> }
					{ isOpen && <ArrowUp stroke="#0099FF" /> }
				</div>

				{ isOpen && (
					<div className="dropdown_content">
						{ items.length >= 6 && 
							<div className="search_wrapper">
								<Icon variant="light-search" color="grey" />
								<Input placeholder="Search" onChange={handleSearch} value={searchValue} /> 
							</div>
						}

						<div className={`dropdown_items ${items.length >= 6 ? 'search' : ''}`}>
							{ localItems.map((item, index) => (
								<Typography className="item" mode="grey" family="xs" key={index} onClick={() => handleItem(item)}>
									{item.option}
								</Typography>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Dropdown