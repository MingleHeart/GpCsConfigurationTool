import {Graph} from "@antv/x6";

export function registeredFilter(args: { name: string, fn: () => string }[]) {
    args.map(item => {
        Graph.registerFilter(item.name, item.fn);
    })
}