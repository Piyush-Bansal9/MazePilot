import { MAX_COLS, MAX_ROWS } from "./constants";
import type { gridType, tileType } from "./types";

const createRow = (startTile: tileType, endTile: tileType, row: number) => {
    const currentRow = []
    for(let col  = 0; col < MAX_COLS; col++) {
        currentRow.push({
            row, 
            col, 
            isEnd: row === endTile.row && col === endTile.col ? true : false,
            isStart: row === startTile.row && col === startTile.col ? true : false,
            isWall: false,
            isPath: false,
            distance: Infinity,
            parent: null,
            isTraversed: false,
        })
    }
    return currentRow;
}

export const createGrid = (startTile: tileType, endTile: tileType) => {
    const grid: gridType = [];
    for(let row  = 0; row < MAX_ROWS; row++) {
        grid.push(createRow(startTile, endTile, row));
    }
    return grid
}