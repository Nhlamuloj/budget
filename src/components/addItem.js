import React, {useState} from "react";
import "../css/add.css"

import{db} from '../components/config/firebase'

import {addDoc, collection} from 'firebase/firestore'
function AddItem(props){

    const [amount, setAmount] = useState("");
    const [item, setItem] = useState("");
    const [transactionType, settransactionType] = useState("");
    
    const add =(()=>{
       
        const collectionRef= collection(db, "transaction");
        
        const transaction ={
            item:item ,
            amount:amount,
            transactionType:transactionType
        };
        addDoc(collectionRef, transaction).then (()=>{
            alert("Added successfully")
        }).catch((error)=>{
            console.log(error);
        })

        props.add(amount, item, transactionType);
    })
    return(
     <div>

         <h1 style={{paddingTop:"5px"}}>Add transaction</h1>
         <input placeholder="Enter item"
          onChange={(e)=>setItem(e.target.value)}
         />{" "}
         <br></br>
         <input placeholder="Enter amount"
         onChange={(e)=>setAmount(e.target.value)}
         />{" "}
         <br></br>
         <select onChange={(e)=>settransactionType(e.target.value)}  ><br></br>
             <option value="Income">Income</option><br></br>
             <option value="Expense">Expense</option><br></br>
         </select>{" "}
         <br></br>
         <button id="btn" onClick={add}>Add</button>
     </div>  

    

        
    )
}



export default AddItem