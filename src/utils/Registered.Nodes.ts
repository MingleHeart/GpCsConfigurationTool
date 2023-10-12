import {Graph} from "@antv/x6";
import {HY_NODE} from "types/lib.node";
//注册节点


export const registerNode = (nodes: HY_NODE[]) => {
    nodes.map(item => {
        Graph.registerNode(
            `${item.name}`,
            {
                inherit: 'image', // 继承于 rect 节点
                width: item.width * 2,
                height: item.height * 2,
                markup: [
                    {
                        tagName: 'image', // 标签名称
                        selector: 'body', // 选择器
                    },
                    {
                        tagName: 'image',
                        selector: 'img',
                    },

                ],
                attrs: {
                    body: {
                        stroke: '#8f8f8f',
                        strokeWidth: 1,
                        fill: '#fff',
                        rx: 6,
                        ry: 6,
                    },
                    img: {
                        'xlink:href':
                            `/nodes/${item.img}`,
                        width: item.width * 2,
                        height: item.height * 2,

                    },
                    
                },
                ports: {
                    groups: item.ports.groups,
                    items: item.ports.items,
                }
            },
            true,
        );
    })

}