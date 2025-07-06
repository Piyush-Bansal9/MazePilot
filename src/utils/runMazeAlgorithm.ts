import { binaryTree } from "../lib/algorithms/maze/binaryTree";
import type { gridType, mazeType, speedType, tileType } from "./types"

export const runMazeAlgorithm = async ({
    grid,
    startTile,
    endTile,
    maze,
    speed,
    setIsDisabled,
} : {
    grid: gridType;
    startTile: tileType;
    endTile: tileType;
    maze: mazeType;
    speed: speedType;
    setIsDisabled: (disabled: boolean) => void;
}) => {
    if(maze === "Binary_Tree") {
        await binaryTree(grid, startTile, endTile, setIsDisabled, speed);
    }
}