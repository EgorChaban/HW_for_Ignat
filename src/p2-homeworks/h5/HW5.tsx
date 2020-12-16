import React, {useState} from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
import s from "./h5.module.css"

function HW5() {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    const showHeader = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div className={s.hwWrap}>

            <HashRouter>

                <Header
                    showHeader={showHeader}
                    collapsed={collapsed}
                />

                <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
