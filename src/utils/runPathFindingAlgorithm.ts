import { bfs } from "../lib/algorithms/algorithms/bfs";
import type { algorithmType, gridType, tileType } from "./types"

export const runPathFindingAlgorithm = ({
    algorithm,
    startTile,
    endTile,
    grid
} : {
    algorithm: algorithmType;
    startTile: tileType;
    endTile: tileType;
    grid: gridType
}) => {
    switch(algorithm) {
        case "BFS":
            return bfs(grid, startTile, endTile);
        // case "DFS":
        //     return
        // case "Djikstras":
        //     return
        default: 
            return bfs(grid, startTile, endTile);
        
    }
}