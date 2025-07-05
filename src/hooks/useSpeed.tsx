import { useContext } from "react"
import { speedContext } from "../context/SpeedContext"


export const useSpeed = () => {
    const context = useContext(speedContext);
    if(!context) {
        throw new Error("useSpeed must be used with in SpeedContextProvider");
    }
    return context;
}