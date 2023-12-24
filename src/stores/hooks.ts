import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from ".";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch; // used to dispatch action
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // used to get data from Store
