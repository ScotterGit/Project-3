import React, { useState } from "react";
import {
    Link
  } from "react-router-dom";


function Nav(props) {
    return (
        
            <div className={"nav-list"}>
                <div className={"list-item"}>
                    <Link to="/about" activeClassName="underline text-white">
                        <span className={'text-xl text-white font-bold cursor-pointer'}>About</span>
                    </Link>
                </div>
                <div className={"list-item"}>
                    <Link to="/todos" activeClassName="underline text-white">
                        <span className={'text-xl text-white font-bold cursor-pointer'}>Todos</span>
                    </Link>
                </div>
                <div className={"list-item"}>
                    <Link to="/contact" activeClassName="underline text-white">
                        <span className={'text-xl text-white font-bold cursor-pointer'}>Contact</span>
                    </Link>
                </div>
            </div>
        
    );
}


export default Nav;
