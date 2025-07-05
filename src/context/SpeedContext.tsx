import { createContext, useState } from "react";
import type { speedType } from "../utils/types";
import type {ReactNode} from "react";


interface SpeedContexInterface {
    speed: speedType;
    setSpeed: (speed: speedType) => void;
}


export const speedContext = createContext<SpeedContexInterface | undefined>(undefined);

export const SpeedContextProvider = ({children} : {children: ReactNode}) => {
    const [speed, setSpeed] = useState<speedType>(0.5);
    
    return (
        <speedContext.Provider
            value ={{
                speed, setSpeed
            }}
        >
            {children}
        </speedContext.Provider>
    )
}