import { createSelector } from "reselect";
import { UserState } from "./user.reducer";
import { RootState } from "../store";

export const selectUserreducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserreducer,
  (user) => user.currentUser
);
