import { END_TILE_CONFIGURATION, MAX_COLS, MAX_ROWS, START_TILE_CONFIGURATION, TILE_STYLE } from "./constants";
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

export const checkStartOrEnd = (row: number, col: number) => {
    return (row === 1 && col == 1) || (row == MAX_ROWS - 2 && col == MAX_COLS - 2 ) ;
}

export const createNewGrid = (grid: gridType, row: number, col: number) => {
    const newGrid = grid.slice();
    const newTile = {
        ...newGrid[row][col],
        isWall : !newGrid[row][col].isWall
    }
    newGrid[row][col] = newTile;
    return newGrid;
}

export const isEqual = (tile1 : tileType, tile2: tileType) => {
    return tile1.row === tile2.row && tile1.col === tile2.col;
}

export const resetGrid = ({
    grid,
    startTile = START_TILE_CONFIGURATION,
    endTile = END_TILE_CONFIGURATION,
} : {
    grid: gridType;
    startTile: tileType;
    endTile: tileType;
}) => {
    for(let row = 0; row < MAX_ROWS; row++) {
        for(let col = 0; col < MAX_COLS; col++) {
            const tile = grid[row][col];
            tile.distance = Infinity;
            tile.isTraversed = false;
            tile.isPath = false;
            tile.isWall = false;
            tile.parent = null;

            if(!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                const tileElement = document.getElementById(`${row}-${col}`);

                if(tileElement) {
                    tileElement.className = TILE_STYLE;
                }

                if(tile.row === MAX_ROWS - 1) {
                    tileElement?.classList.add("border-b");
                }

                if(tile.col === 0) {
                    tileElement?.classList.add("border-l");
                }
            }
        }
    }
}

export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getRandInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

export const dropFromQueue = (tile: tileType, queue: tileType[]) => {
    for (let i = 0; i < queue.length; i++) {
        if (isEqual(tile, queue[i])) {
        queue.splice(i, 1);
        break;
        }
    }
};