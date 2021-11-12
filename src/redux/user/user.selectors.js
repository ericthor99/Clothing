import { createSelector } from "reselect";
// import { selectCurrentUser } from "./user.selectors";

const selectUser = state => state.user;
// const selectCart = stae => state.cart;

export const selectCurrentUser = createSelector (
    [selectUser],
    (user) => user.currentUser
);