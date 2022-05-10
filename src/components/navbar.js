import React from "react";
import { Link } from "gatsby";
import Menu from "./menu"
function NavBar() {
  return (
    <div>
      <nav className="bg-white-800 border">
        <div>
          <div className="flex items-center justify-between h-16 ">
            <div></div>
            <div className="text-center">
              <Link to={`/`}>
                <h1 className="text-3xl font-extralight font-serif">zuck_pa;</h1>
                <p className="text-xs">The untold stories</p>
              </Link>
            </div>
            <div></div>

          </div>
        </div>

      </nav>

    </div>
  );
}
export default NavBar;