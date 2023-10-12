import 'styles/page.home.scss'
import RootLayout from "layouts/RootLayout.tsx";
import SideLayout from "layouts/SideLayout.tsx";
import AntContainer from "pages/AntContainer.tsx";

function AntHome() {

    return (
        <>
            <RootLayout>
                <SideLayout header={<p>header</p>} search={<p>search</p>} menu={<p>menu</p>}/>
                <AntContainer/>
            </RootLayout>
        </>
    )
}

export default AntHome