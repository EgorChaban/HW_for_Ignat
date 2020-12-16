import React from "react"
import {Switch, Redirect, Route} from "react-router-dom"
import PreJunior from "./pages/PreJunior";
import {JuniorPlus} from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";
import {Junior} from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: "/PreJunior",
    JUNIOR: '/Junior',
    JUNIOR_PLUS: '/JuniorPlus',

}

function Routes() {
    return (
        <div>

            <Switch>


                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>

                <Route render={() => <Error404/>}/>


            </Switch>
        </div>
    );
}

export default Routes;
