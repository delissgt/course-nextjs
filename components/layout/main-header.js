import { Fragment } from "react";
import Link from "next/link";

import classes from "./main-header.module.css";

function MainHeader () {

  return(
      <Fragment>
        <header className={classes.header}>
          <div className={classes.logo}>
            <Link href={"/"} >NextEvents</Link>
          </div>
          <nav className={classes.navigation}>
            <ul>
              <li>
                <Link href={"/events"}> browse All events</Link>
              </li>
            </ul>
          </nav>
        </header>
      </Fragment>
  )
}

export default MainHeader;