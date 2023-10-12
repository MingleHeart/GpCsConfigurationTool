import {Cell, CellView, Graph, Node, NodeView} from "@antv/x6";
import {useEffect, useRef, useState} from "react";
import {History} from "@antv/x6-plugin-history";
import {Selection} from "@antv/x6-plugin-selection";
import 'styles/comp.container.scss'
import {Keyboard} from "@antv/x6-plugin-keyboard";
import ContainerDnd from "comps/ContainerDnd.tsx";

function CanContainer() {
    const elementRoot = useRef<HTMLDivElement>();
    const [graph, setGraph] = useState<Graph>();
    const [nodes] = useState<Array<Cell<Cell.Properties>>>([]);
    useEffect(() => {
        const g = new Graph({
            container: elementRoot.current,
            background: {
                color: '#F2F7FA',
            },
            virtual: false,
            grid: {
                visible: true,
                type: 'doubleMesh',
                args: [
                    {
                        color: '#eee', // 主网格线颜色
                        thickness: 1, // 主网格线宽度
                    },
                    {
                        color: '#ddd', // 次网格线颜色
                        thickness: 1, // 次网格线宽度
                        factor: 4, // 主次网格线间隔
                    },
                ],
            },
            interacting: {
                nodeMovable: cellView => {
                    return !(cellView.cell.getData() !== undefined && cellView.cell.getData()?.disableMove);
                },
                edgeMovable: false,
                vertexAddable: false,
                vertexMovable: false,
                magnetConnectable: false
            },
            translating: {
                restrict: (view) => {
                    if (view) {
                        const cell = view.cell
                        if (cell.isNode()) {
                            const parent = cell.getParent()
                            if (parent) {
                                const node = cell as Node;
                                const data = node.getData();
                                if (data !== undefined) {
                                    // console.log(data?.event)
                                    if (data?.event === 'mousedown') {
                                        return null;
                                    }
                                }

                                return parent.getBBox()
                            }
                        }
                    }
                    return null
                },
            },
            highlighting: {
                embedding: {
                    name: 'stroke',
                    args: {
                        padding: 4,
                        attrs: {
                            'stroke-width': 2,
                            stroke: 'red',
                        }
                    },
                }
            },
            embedding: {
                enabled: true,
                findParent: (args: { node: Node<Node.Properties>; view: NodeView<Node<Node.Properties>, NodeView.Options> }) => {
                    const array = new Array<Cell<Cell.Properties>>();
                    const nData = args.node.getData();
                    if (nData !== undefined) {
                        const parent: string = nData.parent;
                        if (parent !== undefined) {
                            if (nodes) {
                                for (const n of nodes) {
                                    const data = n.getData();
                                    if (data !== undefined) {
                                        const child = data?.child;
                                        if (child && child === parent) {
                                            //判断两个的position的向量模长
                                            const parentNode = n as Node;
                                            const cp = args.node.position();
                                            const pp = parentNode.position();
                                            const d = Math.sqrt(Math.pow(cp.x - pp.x, 2) + Math.pow(cp.y - pp.y, 2));
                                            // console.log(d);
                                            if (d < 100) {
                                                // parent.removeChild(cell)
                                                // if (array.length > 0) {
                                                //     array.pop();
                                                // }
                                                array.push(n);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    // console.log(array.length);
                    return array;
                },
                frontOnly: true,
                validate: (args: {
                    child: Node<Node.Properties>,
                    parent: Node<Node.Properties>,
                    childView: CellView<Cell<Cell.Properties>, CellView.Options>,
                    parentView: CellView<Cell<Cell.Properties>, CellView.Options>
                }) => {
                    //TODO 预留位置判断组件位置是否被占用
                    return !!args;
                }
            },


        })
        setGraph(g);

        // init window hook
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window!.__x6_instances__ = []

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window!.__x6_instances__.push(g!)

        graph?.use(
            new History({
                enabled: true,

            })
        )
        graph?.use(
            new Keyboard(
                {
                    enabled: true,
                }
            )
        )

        graph?.use(
            new Selection({
                enabled: true,
                multiple: false,
                rubberband: false,
                movable: false,
                showNodeSelectionBox: true,
            }),
        )
    }, [])

    useEffect(() => {
        if (graph) {
            // graph.current.fromJSON({...data.current});

            graph.addNode({
                shape: 'no_485',
                x: 914.5,
                y: 0,
                data: {
                    disableMove: true
                },
                attrs: {
                    img: {
                        filter: {
                            name: 'grayScale',
                            args: {amount: 1},
                        }
                    }
                }
            })

            // source.setVisible(false)

            graph.addNode({
                shape: 'no_moni_1100',
                x: 0,
                y: 500,
                data: {
                    disableMove: true
                }
            })

            graph?.addNode({
                shape: 'no_bat',
                x: 1256.5,
                y: 500,
                data: {
                    disableMove: true
                },

            })

            graph?.addNode({
                shape: 'no_debug',
                x: 1160.5,
                y: 0,
                data: {
                    disableMove: true
                }
            })

            graph?.addNode({
                shape: 'no_rs1',
                x: 582.5,
                y: 0,
                data: {
                    disableMove: true
                }
            })

            graph?.addNode({
                shape: 'no_rs2',
                x: 748.5,
                y: 0,
                data: {
                    disableMove: true
                }
            })

            graph?.addNode({
                shape: 'no_shuzi_1100',
                x: 0,
                y: 0,
                data: {
                    disableMove: true
                }
            })

            graph?.addNode({
                shape: 'no_temp',
                x: 1150,
                y: 200,
                data: {
                    disableMove: true
                }
            })

            graph?.addNode({
                shape: 'no_vdc',
                x: 1150,
                y: 500,
                data: {
                    disableMove: true
                },
                attrs: {
                    img: {
                        filter: {
                            name: 'sepia',
                            args: {amount: 1},
                        },
                    }
                }
            })

            const parent_node = graph?.addNode({
                shape: 'rect',
                x: 914,
                y: -200,
                attrs: {
                    body: {
                        fill: '#ffffff00',
                        stroke: '#00000000',
                        strokeWidth: 1,
                    }
                },
                data: {
                    child: 'chuankou_parent',
                    disableMove: true
                },
                width: 156.5,
                height: 56.5
            })
            const parent_node1 = graph?.addNode({
                shape: 'rect',
                x: 600,
                y: -200,
                attrs: {
                    body: {
                        fill: '#ffffff00',
                        stroke: '#00000000',
                        strokeWidth: 1,
                    }
                },
                data: {
                    child: 'chuankou_parent',
                    disableMove: true
                },
                width: 156.5,
                height: 56.5
            })

            nodes.push(parent_node);
            nodes.push(parent_node1);

            graph.centerContent();
        }
    }, [graph]);
    const getRootElement = (ref: HTMLDivElement) => {
        elementRoot.current = ref;
    }

    return (
        <>
            <div className={"backgournd-grid-app"}>
                <ContainerDnd graph={graph!}/>
                <div id={"container"} className={"app-content"} ref={getRootElement}/>
            </div>
        </>
    )
}

export default CanContainer