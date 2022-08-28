import React, { useEffect, useState } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header';
import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';
import TotalAmount from './components/TotalAmount';

const LOCAL_STORAGE_KEY = 'listItem.list'

function App() {
  const [input, setInput] = useState({
    expense:"",
    amount:""
  });
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [editId, setEditId] = useState("");
  const [buttonText, setButtonText] = useState("Add");
  const [filter, setFilter] = useState("all");

  useEffect(()=>{
    const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedList)
      setList(prevList => [...prevList,...storedList]);
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
  },[list, setList, buttonText])

  useEffect(()=>{
    let sum=0;
    list.forEach((item) => sum+=item.amount);
    setTotal(sum);
  },[list, setList, buttonText])

  const addClick = () => {
    if(input.expense==="" || input.amount==="")
      return;
    if(isNaN(input.amount)){
      alert("The amount is not a valid number");
      return;
    }
    if(buttonText==="Add"){
      setList(prevList => {
        return [...prevList,{id: uuidv4(), expense: input.expense,amount: parseInt(input.amount)}]
      });
    }
    else{
      setList(prevList=>{
        const newList = prevList;
        const item = newList.find(item => item.id===editId);
        item.expense = input.expense;
        item.amount = parseInt(input.amount);
        return newList;
      })
      setButtonText("Add");
    }
    setInput({expense: "", amount: ""});
  }
  
  const editItem = (id) => {
    const item = list.find(item => item.id===id);
    setButtonText("Update");
    setEditId(id);
    setInput({expense:item.expense,amount:item.amount});
  }

  const deleteItem = (id) => {
    setList(prevList => {
      return prevList.filter(item => item.id!==id)
    })
  }

  return (
    <>
      <Header/>
      <div className='budgetApp'>
        <InputArea input={input} setInput={setInput} buttonText={buttonText} addClick={addClick} filter={filter} setFilter={setFilter}/>
        <OutputArea list={list} editItem={editItem} deleteItem={deleteItem} filter={filter}/>
        <TotalAmount total={total} setList={setList}/>
      </div>
    </>
  );
}

export default App;
