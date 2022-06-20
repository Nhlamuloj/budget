
import AddItem from "./addItem";
import DisplayTransaction from "./displayTransaction";
import React from "react";
import {BudgetBalance} from './balance'


function Home (props){
    return(
        <div className="container">
            <BudgetBalance/>
            <DisplayTransaction list={props.list}/>
            <AddItem add={props.add} />
        </div>
    )
}
export default Home;