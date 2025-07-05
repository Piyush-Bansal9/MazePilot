import { createContext, useState } from "react";
import type { tileType } from "../utils/types";
import type { ReactNode } from "react";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";

interface TileContextInterface {
    startTile: tileType;
    endTile: tileType;
    setStartTile: (startTile: tileType) => void;
    setEndTile: (endTile: tileType) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(undefined);

export const TileContextProvider = ({children} : {children: ReactNode}) => {
    const [startTile, setStartTile] = useState<tileType>(START_TILE_CONFIGURATION);
    const [endTile, setEndTile] = useState<tileType>(END_TILE_CONFIGURATION);

    return (
        <TileContext.Provider
            value={{
                startTile,
                setStartTile,
                endTile,
                setEndTile,
            }}
        >
            {children}
        </TileContext.Provider>
    );
}


