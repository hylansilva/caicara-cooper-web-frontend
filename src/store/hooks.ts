import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispath } from ".";


export const useAppDispatch: () => AppDispath = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector