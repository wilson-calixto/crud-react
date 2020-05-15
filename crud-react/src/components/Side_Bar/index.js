
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Side_Bar() {


    return (
            <div>
                <ul>
                    <li>
                        <Link  to="/product">Create a product</Link>
                    </li>
                    <li>
                        <Link to="/product/my">My products</Link>
                    </li>                    
                    <li>
                        <Link to="/tabela">tabela</Link>
                    </li>
                    <li>
                        <Link to="/tema">tema</Link>
                    </li>
                </ul>
                <hr />

            </div>
    );
}


