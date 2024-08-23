import React, { ReactNode, useContext } from "react"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { removeSpacesBetweenWords } from "../utils/useful-functions";
import { doc, setDoc, addDoc, getDoc, getDocs, updateDoc, collection, deleteDoc } from "firebase/firestore"; 
import { dataBase } from "../config/firebase";

type StorageProviderProps = {
	children: ReactNode;
}

export interface DataProps {
	user?: string;
	email?: string;
	name?: string;
	message?: string;
	id?: string;
	date?: number;
	formatedDate?: string;
	newEntry?: boolean;
}

export interface DataBaseUserProps {
	email?: string;
	name?: string | null;
	phone?: string | null;
	photo?: string;
	id?: string;
	createdDate?: number;
	formatedDate?: string;
	country?: string | null;
	city?: string | null;
	role?: string;
	isNewUser?: boolean;

	// Only for photo upload
	photoName?: string | null;
}

export interface StorageProps {
	uploadProfilePhoto?: (file: File) => Promise<string>;
	getPhoto?: () => void;
	updateDataBase?: (collections: string, reference: string, data: DataProps) => void;
	updateDataBaseWithId?: (collections: string, data: object) => void;
	getDocsFromDataBase?: (collections: string, reference: string) => void;
	getCollectionFromDataBase?: (collections: string) => Promise<DataProps[]>;
	createUserProfileOnDataBase?: (user: DataBaseUserProps) => Promise<DataBaseUserProps[]>;
	updateUserProfileOnDataBase?: (newUser: DataBaseUserProps, userId: string) => Promise<DataBaseUserProps[]>;
	getUserFromDataBase?: (userId: string) => Promise<DataBaseUserProps>;
	deleteUserFromDb?: (userId: string) => Promise<DataBaseUserProps>;
	deleteContactFormFromDb?: (formId: string) => Promise<void>;
}

const StorageContext = React.createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useStorage() {
	return useContext(StorageContext);
}

export const StorageProvider = ({ children }: StorageProviderProps) => {
	const storage = getStorage();
	
	const uploadProfilePhoto = async (file: File) => {
		const fileName = removeSpacesBetweenWords(file.name).trim();
		const imagesRef = ref(storage, `images/${fileName}`);
		
		try {
			// Photo Upload
			await uploadBytes(imagesRef, file);

			// Create Photo Url
			const photoUrl = await getPhoto(fileName);
			return photoUrl;
			
		} catch (error) {
			console.error('StorageProvider::uploadPhoto:', error);
		}
	}

	const getPhoto = async (fileName: string) => {
		const pathReference = ref(storage, `images/${fileName}`);
		return await getDownloadURL(pathReference);
	}

	
	const updateDataBase = async (collections: string, reference: string, data: string[]) => {
		try {
			await setDoc(doc(dataBase, collections, reference), data );
		} catch (error) {
			console.error('StorageProvider::updateDataBase:', error)
		}
	}

	const updateDataBaseWithId = async (collections: string, data: object) => {
		try {
			const docRef = await addDoc(collection(dataBase, collections), data );
			return docRef.id;
		} catch (error) {
			console.error('StorageProvider::updateDataBaseWithId:', error)
		}
	}

	const createUserProfileOnDataBase = async (user: DataBaseUserProps) => {
		try {
			if (user.id) {
				await setDoc(doc(dataBase, 'users', user.id), user );
				await setDoc(doc(dataBase, 'ids', user.id), { id: user.id});
			}
		} catch (error) {
			console.error('StorageProvider::createUserProfileOnDataBase:', error)
		}
	}

	const updateUserProfileOnDataBase = async (newUser: object, userId: string) => {
		try {
			const userRef = doc(dataBase, 'users', userId);
			await updateDoc(userRef, newUser);
		} catch (error) {
			console.error('StorageProvider::updateUserProfileOnDataBase:', error)
		}
	}

	const getUserFromDataBase = async (userId: string) => {
		try {
			const currentUserFromDb = await getDocsFromDataBase('users', userId);
			return currentUserFromDb;
		} catch (error) {
			console.error('StorageProvider::getUserFromDataBase:', error)
		}
	}

	const getDocsFromDataBase = async (collections: string, reference: string) => {
		try {
			const docRef = doc(dataBase, collections, reference);
			const response = await getDoc(docRef);
		
			return response.data();
		} catch (error) {
			console.error('StorageProvider::getDocsFromDataBase:', error)
		}
	}

	const getCollectionFromDataBase = async (collections: string) => {
		try {
			const querySnapshot = await getDocs(collection(dataBase, collections));
			const collectionResponse = querySnapshot.docs.map((doc) => {
				return doc.data();
			});
		
			return collectionResponse;

		} catch (error) {
			console.error('StorageProvider::getCollectionFromDataBase:', error)
		}
	}

	const deleteUserFromDb = async (userId: string) => {
		try {
			const deleteUserDb = await deleteDoc(doc(dataBase, 'users', userId));
			return deleteUserDb;
		} catch (error) {
			console.error('StorageProvider::deleteUserFromDb:', error)
			throw error;
		}
	}

	const deleteContactFormFromDb = async (formId: string) => {
		try {
			if (formId === 'id') {
				return;
			}

			const response = await deleteDoc(doc(dataBase, 'contact', formId));
			return response;
		} catch (error) {
			console.error('StorageProvider::deleteContactFormFromDb:', error)
			throw error;
		}
	}

	const value = {
		uploadProfilePhoto,
		getPhoto,
		updateDataBase,
		updateDataBaseWithId,
		getDocsFromDataBase,
		getCollectionFromDataBase,
		createUserProfileOnDataBase,
		updateUserProfileOnDataBase,
		getUserFromDataBase,
		deleteUserFromDb,
		deleteContactFormFromDb,
	}

	return (
		<StorageContext.Provider value={value}>
			{children}
		</StorageContext.Provider>
	)
}