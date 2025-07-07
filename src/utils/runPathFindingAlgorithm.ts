import { bfs } from "../lib/algorithms/algorithms/bfs";
import { dfs } from "../lib/algorithms/algorithms/dfs";
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
        case "DFS":
            return dfs(grid, startTile, endTile);
        // case "Djikstras":
        //     return
        default: 
            return bfs(grid, startTile, endTile);
        
    }
}