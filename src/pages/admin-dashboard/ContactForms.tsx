import { useState, useEffect } from "react";
import Button from "../../components/Button"
import Typography from "../../components/Typography"
import { useStorage, StorageProps, DataProps } from "../../context/storage";
import Modal from "../../components/Modal";
import { getDateAndHour } from "../../services/date-service";
import Icon from "../../components/Icon";
import Alert from "../../components/Alert";
import newEntrySvg from "../../images/svg/newEntry.svg";

const ContactForms = () => {
	const { getCollectionFromDataBase, deleteContactFormFromDb, updateDataBase }:StorageProps = useStorage();
	const [contactFormsList, setContactFormsList] = useState<DataProps[]>([]);
	const [isFormSelected, setIsFormSelected] = useState<boolean>(false);
	const [selectedForm, setSelectedForm] = useState<DataProps>({});
	const [showDeleteFormAlert, setShowDeleteFormAlert] = useState<boolean>(false);
	const [showDeletedFormAlert, setShowDeletedFormAlert] = useState<boolean>(false);
	const [selectedFormForDeletion, setSelectedFormForDeletion] = useState<DataProps | null>(null);
	
	
	const getContactList = async () => {
		if (showDeletedFormAlert) {
			return;
		}

		if (getCollectionFromDataBase) {
			const response = await getCollectionFromDataBase('contact');
			setContactFormsList(response);
		}
	}
	
	const toggleFormModal = () => {
		setIsFormSelected(!isFormSelected);
	}

	const displaySelectedForm = (form: DataProps) => {
		if (form.date) {
			form.formatedDate = getDateAndHour(form.date);
		}
		setSelectedForm(form);
		toggleFormModal();

		if (updateDataBase && form.newEntry && form.id) {
			form.newEntry = false;
			updateDataBase('contact', form.id, form);
		}
	}

	const handleDeleteForm = (form: DataProps) => {
		toggleDeleteFormAlert();
		setSelectedFormForDeletion(form);
	}

	const deleteForm = async () => {
		if (deleteContactFormFromDb && selectedFormForDeletion?.id) {
			await deleteContactFormFromDb(selectedFormForDeletion?.id);
			toggleDeleteFormAlert();
			toggleDeletedFormAlert();
		}
	}

	const toggleDeleteFormAlert = () => {
		setShowDeleteFormAlert(!showDeleteFormAlert);
	}

	const toggleDeletedFormAlert = () => {
		setShowDeletedFormAlert(!showDeletedFormAlert);
	}

	useEffect(() => {
		getContactList()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [showDeletedFormAlert])

	return (
		<div className="contact_dashboard">
			<Typography mode="blue" family="lg">Contact Forms</Typography>

			<div className="contact_forms">
				{contactFormsList.map((form, index) => (
					<div className="contact_form" key={index}>
						{form.name}
						<div className="contact_form_buttons">
							{ form.newEntry && 
								<img className="new_entry_image" src={newEntrySvg} />
							}
							<Button type="secondary small" onClick={() => displaySelectedForm(form)}>Open Form</Button>
							<Icon className="trash_btn" variant="trash" color="red" onClick={() => handleDeleteForm(form)} />
						</div>
					</div>
				))}
			</div>

			{ isFormSelected && 
				<Modal 
					title={`${selectedForm.name}'s Form`}
					subtitle="Contact form information"
					onClose={toggleFormModal}
					primaryBtn="Done"
					primaryBtnAction={toggleFormModal}
				>
					<div className="contact_form_details">
						<div className="contact_form_detail">
							<Typography mode="blue" family="sm">Date:</Typography>
							<Typography mode="grey" family="xs">{selectedForm.formatedDate}</Typography>
						</div>
						<div className="contact_form_detail">
							<Typography mode="blue" family="sm">Email:</Typography>
							<Typography mode="grey" family="xs">{selectedForm.email}</Typography>
						</div>
						<div>
							<Typography mode="blue" family="sm">Message:</Typography>
							<Typography mode="grey" family="xs">{selectedForm.message}</Typography>
						</div>
					</div>
				</Modal> 
			}

			<Alert 
				type="warning" 
				show={showDeleteFormAlert} 
				primaryBtn="No" 
				primaryBtnAction={toggleDeleteFormAlert}
				secondaryBtn="Yes" 
				secondaryBtnAction={deleteForm}
				title="Delete Form"
				text={`Do you want to delete this contact form from: ${selectedFormForDeletion?.email} ?`} 
				onClose={toggleDeleteFormAlert}
			/>

			<Alert 
				type="warning" 
				show={showDeletedFormAlert} 
				primaryBtn="Close" 
				primaryBtnAction={toggleDeletedFormAlert}
				title="User Deleted"
				text={`The contact form: ${selectedFormForDeletion?.email} has been deleted!`} 
				onClose={toggleDeletedFormAlert}
			/>
		</div>
	)
}

export default ContactForms