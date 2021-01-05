import React from "react";
import {NavLink} from "react-router-dom";
import s from './h5.module.css'
import {PATH} from "./Routes";

type HeaderPropsType = {
    collapsed: boolean
    showHeader: () => void
}

function Header(props: HeaderPropsType) {
    const arrowClassName = `${s.arrow}  ${props.collapsed === false ? '' : s.arrowClosed}`
    const headerClassName = `${s.header} ${props.collapsed === false ? '' : s.headerClosed}`
    return (
        <div className={headerClassName}>

            <div className={s.navbar}>

                <NavLink to={PATH.PRE_JUNIOR} className={s.navLink} activeClassName={s.activeNav}>PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.navLink} activeClassName={s.activeNav}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.navLink} activeClassName={s.activeNav}>JuniorPlus</NavLink>
            </div>
            <div className={arrowClassName} onClick={() => props.showHeader()}>
                <img src="https://image.flaticon.com/icons/png/512/45/45736.png" alt="arrow" className={s.arrowImg}/>
            </div>


        </div>
    );
}

export default Header;
