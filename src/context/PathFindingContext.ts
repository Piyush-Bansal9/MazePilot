import { createContext, useState } from "react";
import type {ReactNode} from "react";
import type { algorithmType, gridType, mazeType } from "../utils/types";

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
    const [grid, setGrid] = useState<gridType>([]);
    const [isGraphVisualised, setIsGraphVisualised] = useState<boolean>(false);
}