import {Graph, Node} from "@antv/x6";
import {Dnd} from "@antv/x6-plugin-dnd";
import 'styles/comp.dnd.scss'


interface Props {
    graph: Graph
}

function ContainerDnd(props: Props) {
    const {graph} = props;

    const dnd = new Dnd({
        target: graph,
        getDragNode: (node) => node.clone({keepId: true}),
        getDropNode: (node) => node.clone({keepId: true}),
    })

    graph?.on('node:added', ({node}) => {

        const data = node.getData();
        if (data !== undefined) {
            if (data?.comp) {
                const parent = node.getParent()
                if (!parent) {

                    graph.removeNode(node)
                } else {
                    //位置吸附到parent
                    const parent = node.getParent();
                    if (parent) {
                        const pn = parent as Node;
                        node.position(
                            pn.position().x,
                            pn.position().y
                        )
                    }
                }
            }
        }
    })


    graph?.on('node:mousedown', ({cell}) => {
        if (cell) {
            //组件虚化
            const node = cell as Node;
            node.setAttrs({
                    img: {
                        filter: 'opacity(0.5)',
                    }
                },
                {
                    deep: true,
                    overwrite: true
                }
            )

            node.setData({
                    event: 'mousedown'
                },
                {}
            );

        }
    });
    graph?.on('node:mouseup', ({cell}) => {
        if (cell) {
            //组件虚化
            const node = cell as Node;
            node.setAttrs({
                    img: {
                        filter: 'opacity(1)',
                    }
                },
                {
                    deep: true,
                    overwrite: true
                }
            )

            if (!node.getParent()) {
                console.log('mouseup no parent')
                // graph.removeNode(node);
            } else {
                //位置吸附到parent
                const parent = node.getParent();
                if (parent) {
                    const pn = parent as Node;
                    node.position(
                        pn.position().x,
                        pn.position().y
                    );
                }
            }
        }
    })

    graph?.on('cell:mousemove', ({cell}) => {
        if (cell) {
            const parent = cell.getParent();
            if (!parent) {
                //检查cell是否与其他cell重叠
                if (cell.isNode()) {
                    const node = cell as Node;
                    // console.log(node.position());
                    node.setData({
                        event: 'mousemove'
                    }, {});
                }
            }
        }
    })

    function startDrag(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const node = graph.createNode({
            shape: 'no_chuankou_img',
            data: {
                disableMove: false,
                comp: true,
                parent: 'chuankou_parent'
            },
        })


        dnd.start(node, e.nativeEvent);

    }

    return (
        <>
            <div className={"dnd_co"}>
                <div onMouseDown={startDrag} datatype={'rect'} className={'dnd_move_1'}>
                    测试
                </div>
            </div>
        </>
    )
}

export default ContainerDnd;