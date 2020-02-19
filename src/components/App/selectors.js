import { createSelector } from 'reselect';

export const getApp = ({ app }) => app;
export const getAppTheme = createSelector(
	getApp,
	({ isDarkTheme }) => isDarkTheme
);
export const getLoginStatus = createSelector(
	getApp,
	({ loginFailed }) => loginFailed
);
export const getSearchOpenedState = createSelector(
	getApp,
	({ isSearchOpened }) => isSearchOpened
);
export const getRecipesLimit = createSelector(
	getApp,
	({ recipesLimit }) => recipesLimit
);
export const getFilteredRecipes = createSelector(
	getApp,
	({ filteredRecipes }) => filteredRecipes
);
export const getIsFormOpened = createSelector(
	getApp,
	({ isFormOpened }) => isFormOpened
);
export const getFormType = createSelector(getApp, ({ formType }) => formType);
export const getCurrentlyEditing = createSelector(
	getApp,
	({ currentlyEditing }) => currentlyEditing
);

export const getFirestore = ({ firestore }) => firestore;
export const getOrdered = createSelector(
	getFirestore,
	({ ordered }) => ordered
);
export const getRecipes = createSelector(getOrdered, ({ recipes }) => recipes);

export const getFirebase = ({ firebase }) => firebase;
export const getAuth = createSelector(getFirebase, ({ auth }) => auth);
export const getProfile = createSelector(getFirebase, ({ profile }) => profile);
