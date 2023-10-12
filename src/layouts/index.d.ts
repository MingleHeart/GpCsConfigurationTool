import React from "react";
import Root from "layouts/RootLayout.tsx";
import Side from "layouts/SideLayout.tsx";

interface RootProps {
    children: React.ReactNode;
}

interface SideProps {
    header: React.ReactNode;
    search: React.ReactNode;
    menu: React.ReactNode;
}

export type {RootProps, SideProps};
export default {Root, Side}