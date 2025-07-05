export type tileType = {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    parent: tileType | null;
    distance: number;
    isWall: boolean;
    isPath: boolean ;
    isTraversed: boolean;
}

export type gridType = tileType[][];

export type algorithmType = "BFS" | "DFS" | "Djikstras";

export type mazeType = "NONE" | "Binary_Tree" | "Recursive_Division";

export type speedType = 2 | 1 | 0.5;