import { MAX_COLS, MAX_ROWS, SPEEDS, WALL_TILE_STYLE } from "./constants";
import type { speedType, tileType } from "./types";

export const isRowColEqual = (row: number, col: number, tile: tileType) => {
    return row === tile.row && col === tile.col;
}

export const createWall = (
    startTile: tileType,
    endTile: tileType,
    speed: speedType
) => {
    const delay = 6 * SPEEDS.find((s) => s.value === speed)!.value - 1;

    for (let row = 0; row < MAX_ROWS; row++) {
        setTimeout(() => {
        for (let col = 0; col < MAX_COLS; col++) {
            if (row % 2 === 0 || col % 2 === 0) {
                if (
                    !isRowColEqual(row, col, startTile) &&
                    !isRowColEqual(row, col, endTile)
                ) {
                    setTimeout(() => {
                    document.getElementById(
                        `${row}-${col}`
                    )!.className = `${WALL_TILE_STYLE} animate-wall`;
                    }, delay * col);
                }
            }
        }
        }, delay * (MAX_ROWS / 2) * row);
    }
}