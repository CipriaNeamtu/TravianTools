import editButton from '../images/icons/edit_duotone_line.svg';

type MiniButtonProps = {
	onClick: () => void;
}

const MiniButton = ({ onClick }: MiniButtonProps) => {
	return (
		<div className='mini_button' onClick={onClick}>
			<img className='img' src={editButton} />
		</div>
	)
}

export default MiniButton