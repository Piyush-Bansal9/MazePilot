import { useState, type MutableRefObject } from "react";
import { usePathFinding } from "../hooks/usePathFinding";
import { useTile } from "../hooks/useTile";
import { EXTENDED_SLEEP_TIME, MAZES, PATHFINDING_ALGORITHMS, SLEEP_TIME, SPEEDS } from "../utils/constants";
import { resetGrid } from "../utils/helpers";
import type { algorithmType, mazeType, speedType } from "../utils/types";
import { Select } from "./Select";
import { useSpeed } from "../hooks/useSpeed";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { PlayButton } from "./Play";
import { runPathFindingAlgorithm } from "../utils/runPathFindingAlgorithm";
import { animatePath } from "../utils/animatePath";

export function Nav({isVisualisationRunning} : {
    isVisualisationRunning: MutableRefObject<boolean>
}) {
    const {maze, setMaze, grid, setGrid, setIsGraphVisualised, algorithm, setAlgorithm, isGraphVisualised} = usePathFinding();
    const {startTile, endTile} = useTile();
    const [isDisabled, setIsDisabled] = useState(false);
    const {speed, setSpeed} = useSpeed();

    const handleGenerateMaze = (maze: mazeType) => {
        if(maze === "NONE") {
            setMaze(maze);
            resetGrid({grid, startTile, endTile});
            return;
        }

        setMaze(maze);
        setIsDisabled(true);
        runMazeAlgorithm({
            maze,
            grid,
            startTile,
            endTile,
            setIsDisabled,
            speed,
        });
        const newGrid = grid.slice();
        setGrid(newGrid);
        setIsGraphVisualised(false);
    }

    const handleRunVisualizer = () => {
        if(isGraphVisualised) {
            setIsGraphVisualised(false);
            resetGrid({grid: grid.slice(), startTile, endTile});
            return;
        }
        const {traversedTiles, path} = runPathFindingAlgorithm({algorithm, startTile, endTile, grid});

        animatePath(traversedTiles, path, startTile, endTile, speed);
        setIsDisabled(true);
        isVisualisationRunning.current = true;
        setTimeout(() => {
            const newGrid = grid.slice();
            setGrid(newGrid);
            setIsGraphVisualised(true);
            setIsDisabled(false);
            isVisualisationRunning.current = false;
        }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value)
    }

    return (
    <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
        <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
            <h2 className="lg:flex hidden w-[40%] text-2xl pl-1">
                Pathfinding Visualizer
            </h2>
            <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
                <Select
                    label="Maze"
                    value={maze}
                    options={MAZES}
                    onChange={(e) => {
                        handleGenerateMaze(e.target.value as mazeType)
                    }}
                />
                <Select
                    label="Algorithms"
                    value={algorithm}
                    options={PATHFINDING_ALGORITHMS}
                    onChange={(e) => {
                        setAlgorithm(e.target.value as algorithmType)
                    }}
                />
                <Select
                    label="Speed"
                    value={speed}
                    options={SPEEDS}
                    isDisabled={isDisabled}
                    onChange={(e) => {
                        setSpeed(parseInt(e.target.value) as speedType);
                    }}
                />
                <PlayButton
                    isDisabled = {isDisabled}
                    isGraphVisualized = {isGraphVisualised}
                    handlerRunVisualizer={handleRunVisualizer}
                />
            </div>
        </div>
    </div>
    );
}