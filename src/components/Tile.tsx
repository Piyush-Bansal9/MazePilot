import { twMerge } from "tailwind-merge";
import { END_TILE_STYLE, MAX_ROWS, PATH_TILE_STYLE, START_TILE_STYLE, TILE_STYLE, TRAVERSED_TILE_STYLE, WALL_TILE_STYLE } from "../utils/constants";

export function Tile({
    row,
    col,
    isStart,
    isEnd,
    isTraversed,
    isWall,
    isPath,
    }: {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isTraversed: boolean;
    isWall: boolean;
    isPath: boolean;
}) {
    let tileStyles;

    if (isStart) {
        tileStyles = START_TILE_STYLE;
    } else if (isEnd) {
            tileStyles = END_TILE_STYLE;
    } else if (isWall) {
            tileStyles = WALL_TILE_STYLE;
    } else if (isPath) {
            tileStyles = PATH_TILE_STYLE;
    } else if (isTraversed) {
            tileStyles = TRAVERSED_TILE_STYLE;
    } else {
            tileStyles = TILE_STYLE;
    }

    const borderStyle = row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
    const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

    return (
        <div
            className={twMerge(tileStyles, borderStyle, edgeStyle)}
            id={`${row}-${col}`}
        />
    )
}