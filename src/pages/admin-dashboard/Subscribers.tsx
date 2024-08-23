import { useStorage, StorageProps, DataProps } from "../../context/storage";
import { useState, useEffect } from "react";
import SubscribersTable from "../../components/Table";
import Typography from "../../components/Typography";

const Subscribers = () => {
	const { getCollectionFromDataBase }:StorageProps = useStorage();
	const [subscribersList, setSubscribersList] = useState<DataProps[]>([]);
	
	
	const getSubscribersList = async () => {
		if (getCollectionFromDataBase) {
			const response = await getCollectionFromDataBase('subscribe');

			setSubscribersList(response);
		}
	};

	useEffect(() => {
		getSubscribersList()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="subscribers_dashboard">
			<Typography mode="blue" family="lg">Subscribers</Typography>

			<SubscribersTable data={subscribersList}></SubscribersTable>
		</div>
	)
}

export default Subscribers