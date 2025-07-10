import { EXTENDED_SLEEP_TIME, PATH_TILE_STYLE, SLEEP_TIME, SPEEDS, TRAVERSED_TILE_STYLE } from "./constants";
import { isEqual } from "./helpers";
import type { speedType, tileType } from "./types";

export const animatePath = (
    traversedTiles: tileType[],
    path: tileType[],
    startTile: tileType,
    endTile: tileType,
    speed: speedType
) => {
    const speedMultiplier = SPEEDS.find((s) => s.value === speed)!.value;

    // Animate traversed tiles
    for(let i = 0; i < traversedTiles.length; i++) {
        setTimeout(() => {
            const tile = traversedTiles[i];
            if(!isEqual(startTile, tile) && !isEqual(tile, endTile)) {
                document.getElementById(`${tile.row}-${tile.col}`)!.className = `${TRAVERSED_TILE_STYLE} animate-traversed`;
            }
        }, SLEEP_TIME * i * speedMultiplier);
    }

    // Wait for the last traversed animation to end + buffer before animating path
    const totalTraversalTime = SLEEP_TIME * traversedTiles.length * speedMultiplier;
    const bufferTime = 100; // milliseconds to ensure no overlap

    setTimeout(() => {
        for(let i = 0; i < path.length; i++) {
            setTimeout(() => {
                const tile = path[i];
                if(!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                    
                    document.getElementById(`${tile.row}-${tile.col}`)!.className = `${PATH_TILE_STYLE} animate-path`;
                }
            }, EXTENDED_SLEEP_TIME * i * speedMultiplier);
        }
    }, totalTraversalTime + bufferTime);
}
