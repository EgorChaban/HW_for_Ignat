import React from "react";
import s from "./pages.module.css"
import {NavLink} from "react-router-dom";


function Error404() {
    return (
        <div className={s.errorWrap}>
            <div className={s.errorImg}><img src="https://static.thenounproject.com/png/2157372-200.png" alt="404"/></div>
            <div className={s.errorNumber}>404</div>
            <div className={s.ErrorPageNotFound}>Page not found!</div>
            <button className={s.errorHome}><NavLink to={"/PreJunior"} className={s.errorLink}>go home</NavLink></button>
        </div>
    );
}

export default Error404;
