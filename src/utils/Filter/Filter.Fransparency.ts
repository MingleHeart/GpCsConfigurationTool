import {getNumber} from "@antv/x6/es/registry/filter/util";

export interface Fransparency {
    opacity?: number
}

export function opacityOption(
    arg: Fransparency = {}
) {
    const op = getNumber(arg.opacity, 1);
    if (op > 1 || op < 0) {
        throw new Error('opacity must be between 0 and 1');
    }
    return `
        <filter id="opacity_filter">

        </filter>
    `.trim();
}