import type { gridType, speedType, tileType } from "../../../utils/types";
import { verticalDivision } from "./verticalDivision";
import { horizontalDivision } from "./horizontalDivision";

export default async function recursiveDivision({
    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width,
    setIsDisabled,
    speed,
}: {
    grid: gridType;
    startTile: tileType;
    endTile: tileType;
    row: number;
    col: number;
    height: number;
    width: number;
    setIsDisabled: (disabled: boolean) => void;
    speed: speedType;
}) {
    if (height <= 1 || width <= 1) {
        return; 
    }

    if (height > width) {
        await horizontalDivision({
            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed,
        });
    } else {
        await verticalDivision({
            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed,
        });
    }
}