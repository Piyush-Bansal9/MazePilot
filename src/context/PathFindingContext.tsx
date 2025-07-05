import { createContext, useState } from "react";
import type {ReactNode} from "react";
import type { algorithmType, gridType, mazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";

interface PathFindingContextInterface {
    algorithm: algorithmType;
    setAlgorithm : (algorithm : algorithmType) => void;
    maze : mazeType;
    setMaze : (maze: mazeType) => void;
    grid: gridType;
    setGrid : (grid: gridType) => void;
    isGraphVisualised: boolean;
    setIsGraphVisualised: (isGraphVisualised : boolean) => void;
}

export const PathFindingContext = createContext<PathFindingContextInterface | undefined>(undefined);

export const PathFindingProvider = ({children} : {children : ReactNode}) => {
    const [algorithm, setAlgorithm] = useState<algorithmType>("BFS");
    const [maze, setMaze] = useState<mazeType>("NONE");
    const [grid, setGrid] = useState<gridType>(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION));
    const [isGraphVisualised, setIsGraphVisualised] = useState<boolean>(false);

    return <PathFindingContext.Provider value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualised,
        setIsGraphVisualised
        }}> {children}
    </PathFindingContext.Provider>
}

