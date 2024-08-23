import defaultPhoto from '../images/svg/user.svg';

type ProfilePictureProps = {
	img?: string;
	onClick?: () => void;
	type?: string;
}

const ProfilePicture = ({ img, onClick, type }: ProfilePictureProps) => {
	return (
		<div className={`profile_picture_component ${type ? type : ''}`} onClick={onClick}>
			<img src={img ? img : defaultPhoto} />
		</div>
	)
}

export default ProfilePicture;