import React from 'react'
import ReactDOM from 'react-dom/client'
import 'styles/index.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {RouterProvider} from 'react-router-dom'
import "styles/basic.scss"
import router from "@/router"
import {registerNode} from "utils/Registered.Nodes.ts"
import {HY_NODE} from "types/lib.node";

const nodes: HY_NODE[] = [
    /////////////////////////////////////485///////////////////////////////////////////
    {
        img: 'svg_485_hy1031.svg',
        width: 77.75,
        height: 56.75,
        name: 'no_485',
        ports: {
            groups: {
                485: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
            },
            items: [
                {
                    group: "485",
                    id: 'n485-port-A',
                    args: {
                        x: 12 * 2,
                        y: 0
                    }
                },
                {
                    group: "485",
                    id: 'n485-port-B',
                    args: {
                        x: 38.7778 * 2,
                        y: 0
                    }
                },
                {
                    group: "485",
                    id: 'n485-port-G',
                    args: {
                        x: 65.7778 * 2,
                        y: 0
                    }
                }
            ]
        }
    },
    ///////////////////////////////////////bat////////////////////////////////////////
    {
        img: 'svg_BAT_hy1031.svg',
        width: 48.25,
        height: 57.52,
        name: 'no_bat',
        ports: {
            groups: {
                noBat: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
            },
            items: [
                {
                    group: "noBat",
                    id: 'nbat-port-12V',
                    args: {
                        x: 12.5 * 2,
                        y: 0
                    }
                },
                {
                    group: "noBat",
                    id: 'nbat-port-G',
                    args: {
                        x: 35.5 * 2,
                        y: 0
                    }
                }
            ]
        }
    },
    /////////////////////////////////////debug//////////////////////////////////////////
    {
        img: 'svg_Debug_hy1031.svg',
        width: 78.25,
        height: 57.25,
        name: 'no_debug',
        ports: {
            groups: {
                debug232: {
                    position: 'top',
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
            },
            items: [
                {
                    group: "debug232",
                    id: 'ndebug-port-1',
                },
                {
                    group: "debug232",
                    id: 'ndebug-port-2',
                },
                {
                    group: "debug232",
                    id: 'ndebug-port-3',
                }
            ]
        }
    },
    ////////////////////////////////////moni///////////////////////////////////////////
    {
        img: 'svg_moni-1100_hy1031.svg',
        width: 416,
        height: 57,
        name: 'no_moni_1100',
        ports: {
            groups: {
                'moni_1100_ch1': {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
                'moni_1100_ch2': {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
                'moni_1100_ch3': {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
                'moni_1100_ch4': {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
            },
            items: [
                {
                    group: "moni_1100_ch1",
                    id: 'moni-1100-1-port-*',
                    args: {
                        x: 13 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch1",
                    id: 'moni-1100-1-port-+',
                    args: {
                        x: 39 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch1",
                    id: 'moni-1100-1-port--',
                    args: {
                        x: 65 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch1",
                    id: 'moni-1100-1-port-R',
                    args: {
                        x: 91 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch2",
                    id: 'moni-1100-2-port-*',
                    args: {
                        x: 117 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch2",
                    id: 'moni-1100-2-port-+',
                    args: {
                        x: 143 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch2",
                    id: 'moni-1100-2-port--',
                    args: {
                        x: 169 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch2",
                    id: 'moni-1100-2-port-R',
                    args: {
                        x: 195 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch3",
                    id: 'moni-1100-3-port-*',
                    args: {
                        x: 221 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch3",
                    id: 'moni-1100-3-port-+',
                    args: {
                        x: 247 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch3",
                    id: 'moni-1100-3-port--',
                    args: {
                        x: 273 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch3",
                    id: 'moni-1100-3-port-R',
                    args: {
                        x: 299 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch4",
                    id: 'moni-1100-4-port-*',
                    args: {
                        x: 325 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch4",
                    id: 'moni-1100-4-port-+',
                    args: {
                        x: 351 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch4",
                    id: 'moni-1100-4-port--',
                    args: {
                        x: 377 * 2,
                        y: 0
                    }
                },
                {
                    group: "moni_1100_ch4",
                    id: 'moni-1100-4-port-R',
                    args: {
                        x: 403 * 2,
                        y: 0
                    }
                },
            ]
        }
    },
    ////////////////////////////////////////////rs1////////////////////////////////////////
    {
        img: 'svg_rs1_hy1031.svg',
        width: 78,
        height: 57,
        name: 'no_rs1',
        ports: {
            groups: {
                rs232_1: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
            },
            items: [
                {
                    group: "rs232_1",
                    id: 'rs232_1-port-R',
                    args: {
                        x: 12 * 2,
                        y: 0
                    }
                },
                {
                    group: "rs232_1",
                    id: 'rs232_1-port-T',
                    args: {
                        x: 38.7778 * 2,
                        y: 0
                    }
                },
                {
                    group: "rs232_1",
                    id: 'rs232_1-port-G',
                    args: {
                        x: 65.7778 * 2,
                        y: 0
                    }
                }
            ]
        }
    },
    ////////////////////////////////////////////rs2////////////////////////////////////////
    {
        img: 'svg_rs2_hy1031.svg',
        width: 78,
        height: 57,
        name: 'no_rs2',
        ports: {
            groups: {
                rs232_2: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
            },
            items: [
                {
                    group: "rs232_2",
                    id: 'rs232_2-port-R',
                    args: {
                        x: 12 * 2,
                        y: 0
                    }
                },
                {
                    group: "rs232_2",
                    id: 'rs232_2-port-T',
                    args: {
                        x: 38.7778 * 2,
                        y: 0
                    }
                },
                {
                    group: "rs232_2",
                    id: 'rs232_2-port-G',
                    args: {
                        x: 65.7778 * 2,
                        y: 0
                    }
                }
            ]
        }
    },
    ////////////////////////////////////////////rs3////////////////////////////////////////
    {
        img: 'svg_rs3_hy1031.svg',
        width: 78,
        height: 57,
        name: 'no_rs3',
        ports: {
            groups: {
                rs232_3: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
            },
            items: [
                {
                    group: "rs232_3",
                    id: 'rs232_3-port-R',
                    args: {
                        x: 12 * 2,
                        y: 0
                    }
                },
                {
                    group: "rs232_3",
                    id: 'rs232_3-port-T',
                    args: {
                        x: 38.7778 * 2,
                        y: 0
                    }
                },
                {
                    group: "rs232_3",
                    id: 'rs232_3-port-G',
                    args: {
                        x: 65.7778 * 2,
                        y: 0
                    }
                }
            ]
        }
    },
    //////////////////////////////////////////shuzi-1100////////////////////////////////////////
    {
        img: 'svg_shuzi-1100_hy1031.svg',
        width: 286.52,
        height: 57.25,
        name: 'no_shuzi_1100',
        ports: {
            groups: {
                shuzi_1100_d1: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
                shuzi_1100_d2: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
                shuzi_1100_d3: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
                shuzi_1100_d4: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
            },
            items: [
                {
                    group: "shuzi_1100_d1",
                    id: 'shuzi_1100_d1_d1',
                    args: {
                        x: 11.8333 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d1",
                    id: 'shuzi_1100_d1_G',
                    args: {
                        x: 40.8333 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d2",
                    id: 'shuzi_1100_d2_5V',
                    args: {
                        x: 64 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d2",
                    id: 'shuzi_1100_d2_d2',
                    args: {
                        x: 90.7778 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d2",
                    id: 'shuzi_1100_d2_G',
                    args: {
                        x: 117.7778 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d3",
                    id: 'shuzi_1100_d3_5V',
                    args: {
                        x: 141 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d3",
                    id: 'shuzi_1100_d3_d3',
                    args: {
                        x: 167.7778 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d3",
                    id: 'shuzi_1100_d3_G',
                    args: {
                        x: 194.7778 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d4",
                    id: 'shuzi_1100_d4_5V',
                    args: {
                        x: 220 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d4",
                    id: 'shuzi_1100_d4_d4',
                    args: {
                        x: 246.7778 * 2,
                        y: 0
                    }
                },
                {
                    group: "shuzi_1100_d4",
                    id: 'shuzi_1100_d4_G',
                    args: {
                        x: 273.7778 * 2,
                        y: 0
                    }
                },
            ]
        }
    },
    //////////////////////////////////////////t//////////////////////////////////////////////////
    {
        img: 'svg_temperature_hy1031.svg',
        width: 98.52,
        height: 57.25,
        name: 'no_temp',
        ports: {
            groups: {},
            items: []
        }
    },
    ////////////////////////////////////////////VDC///////////////////////////////////////////////
    {
        img: 'svg_VDC_hy1031.svg',
        width: 48.52,
        height: 57.52,
        name: 'no_vdc',
        ports: {
            groups: {
                noVdc: {
                    position: {
                        name: "absolute",
                        args: {
                            x: 0,
                            y: 0,
                        }
                    },
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    },
                },
            },
            items: [
                {
                    group: "noVdc",
                    id: 'nvdc-port-12V',
                    args: {
                        x: 12.5 * 2,
                        y: 0
                    }
                },
                {
                    group: "noVdc",
                    id: 'nvdc-port-G',
                    args: {
                        x: 35.5 * 2,
                        y: 0
                    }
                }
            ]
        }
    },
    ///////////////////////////////////串口/////////////////////////////////////////////
    {
        img: 'svg_chuankou-img_hy1031.svg',
        width: 78.25,
        height: 28.25,
        name: 'no_chuankou_img',
        ports: {
            groups: {
                chuankou_img: {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    }
                }
            },
            items: [
                {
                    group: 'chuankou_img',
                    id: 'chuankou-port-1'
                },
                {
                    group: 'chuankou_img',
                    id: 'chuankou-port-2'
                },
                {
                    group: 'chuankou_img',
                    id: 'chuankou-port-3'
                }
            ]
        }
    },
    {
        img: 'svg_chuankou-icon_hy1031.svg',
        width: 32.25,
        height: 32.25,
        name: 'no_chuankou_icon',
        ports: {
            groups: {},
            items: []
        }
    },
    ////////////////////////////////////////////电阻/////////////////////////////////////////////
    {
        img: 'svg_dz-img_hy1031.svg',
        width: 106.25,
        height: 28.25,
        name: 'no_dz_img',
        ports: {
            groups: {
                'dz_img': {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    }
                }
            },
            items: [
                {
                    group: 'dz_img',
                    id: 'dz-port-1'
                },
                {
                    group: 'dz_img',
                    id: 'dz-port-2'
                },
                {
                    group: 'dz_img',
                    id: 'dz-port-3'
                },
                {
                    group: 'dz_img',
                    id: 'dz-port-4'
                }
            ]
        }
    },
    {
        img: 'svg_dz-icon_hy1031.svg',
        width: 32.25,
        height: 32.25,
        name: 'no_dz_icon',
        ports: {
            groups: {},
            items: []
        }
    },
    /////////////////////////////////////////////电流/////////////////////////////////////////////
    {
        img: 'svg_I-img_hy1031.svg',
        width: 28.25,
        height: 28.25,
        name: 'no_I_img',
        ports: {
            groups: {
                'I_img': {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    }
                }
            },
            items: [
                {
                    group: 'I_img',
                    id: 'I-port-1'
                }
            ]
        }
    },
    {
        img: 'svg_I-icon_hy1031.svg',
        width: 32.25,
        height: 32.25,
        name: 'no_I_icon',
        ports: {
            groups: {},
            items: []
        }
    },
    ////////////////////////////////////////////数字输入/////////////////////////////////////////////
    {
        img: 'svg_ninput-img_hy1031.svg',
        width: 28.25,
        height: 28.25,
        name: 'no_ninput_img',
        ports: {
            groups: {
                'ninput_img': {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    }
                }
            },
            items: [
                {
                    group: 'ninput_img',
                    id: 'ninput-port-1'
                }
            ]
        }
    },
    {
        img: 'svg_ninput-icon_hy1031.svg',
        width: 32.25,
        height: 32.25,
        name: 'no_ninput_icon',
        ports: {
            groups: {},
            items: []
        }
    },
    //////////////////////////////////////////////单端电压/////////////////////////////////////////////
    {
        img: 'svg_ov-img_hy1031.svg',
        width: 28.25,
        height: 28.25,
        name: 'no_ov_img',
        ports: {
            groups: {
                'ov_img': {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    }
                }
            },
            items: [
                {
                    group: 'ov_img',
                    id: 'ov-port-1'
                }
            ]
        }
    },
    {
        img: 'svg_ov-icon_hy1031.svg',
        width: 32.25,
        height: 32.25,
        name: 'no_ov_icon',
        ports: {
            groups: {},
            items: []
        }
    },
    /////////////////////////////////////////////电压差///////////////////////////////////////////////
    {
        img: 'svg_vpd-img_hy1031.svg',
        width: 54.25,
        height: 28.43,
        name: 'no_vpd_img',
        ports: {
            groups: {
                'vpd_img': {
                    position: 'bottom',
                    attrs: {
                        circle: {
                            magnet: true,
                            stroke: '#8f8f8f',
                            r: 3,
                        },
                    }
                }
            },
            items: [
                {
                    group: 'vpd_img',
                    id: 'vpd-port-1'
                },
                {
                    group: 'vpd_img',
                    id: 'vpd-port-2'
                }
            ]
        }
    },
    {
        img: 'svg_vpd-icon_hy1031.svg',
        width: 32.25,
        height: 32.25,
        name: 'no_vpd_icon',
        ports: {
            groups: {},
            items: []
        }
    }


]

// const filters: { name: string, fn: () => string }[] = [
//     {
//         name: 'opacity',
//         fn: opacityOption
//     }
// ]

registerNode(nodes);
// registeredFilter(filters);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
