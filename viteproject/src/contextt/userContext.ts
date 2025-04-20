import { createContext } from "react"
import { userType } from "./UserDashboard"

export const UserContext=createContext<userType|undefined>(undefined)
