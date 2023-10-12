import "styles/layout.root.scss"
import {RootProps} from "layouts/index";
import React from "react";

const RootLayout: React.FC<RootProps> = (prop: RootProps) => {

    return (
        <div className={"root-layout"}>
            {prop.children}
        </div>
    )
}

export default RootLayout;