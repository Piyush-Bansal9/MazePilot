import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { isEqual } from "../../../utils/helpers";
import type { gridType, tileType } from "../../../utils/types"

export const bfs = (grid: gridType, startTile: tileType, endTile: tileType) => {
    const traversedTiles : tileType[] = [];
    const baseTile = grid[startTile.row][startTile.col];
    baseTile.distance = 0;
    baseTile.isTraversed = true;
    const q = [baseTile];
    while(q.length) {
        const tile = q.shift()!;
        if(tile.isWall) continue;
        if(tile.distance === Infinity) break;
        tile.isTraversed = true;
        traversedTiles.push(tile);
        if(isEqual(tile, endTile)) break;

        const neighbors = getUntraversedNeighbors(grid, tile);
        neighbors.map((neighbor) => {
            const neiTile = grid[neighbor.row][neighbor.col];
            neiTile.distance = tile.distance + 1;
            neiTile.isTraversed = true;
            neiTile.parent = tile;
            q.push(neiTile);
        })
    }

    const path = [];
    let tile = grid[endTile.row][endTile.col];
    while(tile !== null && tile.parent != null) {
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent;
    }
    if(isEqual(tile, baseTile)) path.unshift(tile);
    return {traversedTiles, path};
}