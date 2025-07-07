import { checkStack } from "../../../utils/checkStack";
import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { isEqual } from "../../../utils/helpers";
import type { gridType, tileType } from "../../../utils/types";

export const dfs = (grid: gridType, startTile: tileType, endTile: tileType) => {
    const traversedTiles = []; 
    const base = grid[startTile.row][startTile.col]; 
    base.distance = 0; 
    base.isTraversed = true; 
    const stack = [base]; 

    while (stack.length > 0) {
        const currentTile = stack.pop(); 
        if (currentTile) {
            if (currentTile.isWall) continue; 
            if (currentTile.distance === Infinity) break; 
            currentTile.isTraversed = true; 
            traversedTiles.push(currentTile);
            if (isEqual(currentTile, endTile)) break; 
            const neighbors = getUntraversedNeighbors(grid, currentTile);
            for (let i = 0; i < neighbors.length; i += 1) {
                if (!checkStack(neighbors[i], stack)) {
                    neighbors[i].distance = currentTile.distance + 1; 
                    neighbors[i].parent = currentTile; 
                    stack.push(neighbors[i]); 
                }
            }
        }
    }
    const path = []; 
    let current = grid[endTile.row][endTile.col]; 
    while (current !== null) {
        current.isPath = true; 
        path.unshift(current); 
        current = current.parent!; 
    }
    return { traversedTiles, path };
};