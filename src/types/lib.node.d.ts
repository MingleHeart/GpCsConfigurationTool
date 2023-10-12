import {PortManager} from "@antv/x6/es/model/port";
import PortMetadata = PortManager.PortMetadata;
import GroupMetadata = PortManager.GroupMetadata;

interface HY_NODE {
    img: string;
    width: number;
    height: number;
    name: string;
    ports: {
        groups: {
            [p: string]: GroupMetadata
        }
        items: PortMetadata[] | [];
    }

}