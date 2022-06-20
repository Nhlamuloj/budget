import '../css/balance.css'
import React from 'react';
function BudgetBalance(){
    return(
        <div>
            <h4>Your balance</h4>
            <h2>R4000</h2>

            <div className="balance">
                <div>
                    <h3>Income</h3>

                    <h3 style={{color:"green"}}>R12000</h3>
                </div>

                <div className="line">
                    <div>
                        <h3>Expense</h3>
                        <h3 style={{color:"red"}}>R8000</h3>
                    </div>
                </div>
            </div>
        
            
            
        </div>

    
    )
  
    
}  export  {BudgetBalance};