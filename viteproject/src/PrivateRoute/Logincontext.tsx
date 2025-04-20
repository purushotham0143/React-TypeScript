import { createContext } from "react";
import { userType } from "../contextt/UserDashboard";

export type UserType={
    name:string|undefined,
    setName:(args:string|undefined)=>void;
}
export const Logincontext=createContext<UserType|undefined>(undefined)