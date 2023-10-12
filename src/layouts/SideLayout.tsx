import "styles/layout.side.scss"
import {SideProps} from "layouts/index";
import {useEffect, useRef} from "react";

function SideLayout(prop: SideProps) {
    const element = useRef<HTMLDivElement>();

    useEffect(() => {
        if (element.current) {
            //获取屏幕宽度
            const screenWidth = window.screen.width;
            element.current.style.width = screenWidth / 11.7 + "px";
        }
    }, [element])

    const conSide = (el: HTMLDivElement) => {
        element.current = el;
    }

    return (
        <>
            <div className={"side-layout"} ref={conSide}>
                <div className={"side-com"}>
                    <div className={"side-header"}>
                        {prop.header}
                    </div>
                    <div className={"side-search"}>
                        {prop.search}
                    </div>
                    <div className={"side-menu"}>
                        {prop.menu}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideLayout;