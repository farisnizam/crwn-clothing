import { createSelector } from "reselect";
import { UserState } from "./user.reducer";

export const selectUserreducer = (state): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserreducer,
  (user) => user.currentUser
);
