/* Component Name: SideDrawer
 * Function: Container for the navigation items when the application
 *           is being viewed on a smaller screen.
 *
 * Props Received: None
 *
 */

import React from "react";

import classes from "./SideDrawer.css";
import NavItems from "../NavItems/NavItems";
import RegisterNav from "../RegisterNav/RegisterNav";

const sideDrawer = props => {
    return (
        <div className={classes.SideDrawer}>
            {/*Logo*/}
            <NavItems />
            <RegisterNav />
        </div>
    );
};

export default sideDrawer;
