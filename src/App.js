
import './App.css';

import React,{useState,useEffact} from 'react';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import{BrowserRouter as Router , Switch ,Route} from 'react-router-dom';

import{collection, getDocs} from 'firebase/firestore'
function App() {

  const [transaction, setTransaction] = useState ([]);
  

  const addTransaction = ((amount, item, transactionType)=>{

    setTransaction ((items)=>[...items,{
      amount:amount,
      item:item,
      transactionType:transactionType,
    }])
  })
  console.log(transaction);

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/home">
        <Home list ={transaction} add ={addTransaction}/>
        </Route>
      </Switch>
     
    </Router>


    
  );
}

export default App;
