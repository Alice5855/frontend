import axios from "axios";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import CBoardServices from "./CBoardServices";
import { Link } from "react-router-dom";
import CBoardList from "./CBoardList";
import CboardReadForm from "./CboardReadForm";

import CBoardCUD from "./CBoardCUD";
import InputForm from "./InputForm";
import { render } from "@testing-library/react";




class CBoardComponent extends Component {
    render(){
        
        return(
            <div className="container-fluid py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <h1 className="Title" style={{color: '#25C1FF'}}>
                        커뮤니티
                    </h1>
                </div>
                <Route path={"/Community"} component={CBoardList} exact={true} />
                <Route path={"/Community/crud:crud"} component={CBoardCUD} />
                <Route path={"/Community/view/bnum=:bnum"} component={CboardReadForm} />
                
                
            </div>
        )
    }
}
export default CBoardComponent;