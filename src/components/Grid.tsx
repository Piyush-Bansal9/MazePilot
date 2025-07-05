import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../hooks/usePathFinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";
import { useEffect, useState, type MutableRefObject } from "react";
import { checkStartOrEnd, createNewGrid } from "../utils/helpers";


export function Grid({isVisualisationRunning} : {
    isVisualisationRunning: MutableRefObject<boolean>
}) {
    const {grid, setGrid} = usePathFinding();

    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        const handleMouseUp = () => setIsMouseDown(false);
        window.addEventListener("mouseup", handleMouseUp);
        return () => window.removeEventListener("mouseup", handleMouseUp);
    }, []);

    const handleMouseDown = (row: number, col: number) => {
        if(isVisualisationRunning.current || checkStartOrEnd(row, col)) {
            return;
        }

        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    }

    const handleMouseUp = (row: number, col: number) => {
        if(isVisualisationRunning || checkStartOrEnd(row, col)) {
            return;
        }
        setIsMouseDown(false);
    }

    const handleMouseEnter = (row: number, col: number) => {
        if (isVisualisationRunning.current || checkStartOrEnd(row, col)) {
            return;
        }

        if (isMouseDown) {
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid);
        }
    };

    return (
        <div
        className={twMerge(
            // Base classes
            "flex items-center flex-col justify-center border-sky-300 mt-10",
            // Control Grid height
            `lg:min-h-[${MAX_ROWS * 17}px]  md:min-h-[${
            MAX_ROWS * 15
            }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
            // Controlling grid width
            `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${
            MAX_COLS * 8
            }px] w-[${MAX_COLS * 7}px]`
        )}
        >
            {grid.map((r, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {r.map((tile, tileIndex) => {
            const { row, col, isEnd, isStart, isPath, isTraversed, isWall } =
                    tile;
                    return (
                        <Tile
                            key={tileIndex}
                            row={tile.row}
                            col={tile.col}
                            isEnd={isEnd}
                            isStart={isStart}
                            isPath={isPath}
                            isTraversed={isTraversed}
                            isWall={isWall}
                            handleMouseDown={() => handleMouseDown(row, col)}
                            handleMouseUp={() => handleMouseUp(row, col)}
                            handleMouseEnter={() => handleMouseEnter(row, col)}
                        />
                        );
                })}
                </div>
            ))}
        </div>
    )
}