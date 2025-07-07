import { isEqual } from "./helpers";
import type { tileType } from "./types";

export const checkStack = (tile: tileType, stack: tileType[]) => {
    for (let i = 0; i < stack.length; i++) {
        if (isEqual(stack[i], tile)) return true;
    }
    return false;
};