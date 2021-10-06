import { createSelector } from 'reselect';

// 'user' is caller in header component.



const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);
