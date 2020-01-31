import { createSelector } from 'reselect';

export const getFirestore = ({ firestore }) => firestore;
export const getOrdered = createSelector(
	getFirestore,
	({ ordered }) => ordered
);
export const getRecipes = createSelector(getOrdered, ({ recipes }) => recipes);
