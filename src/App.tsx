import { createContext, useState, useEffect } from 'react'
import './App.css'
import bankData from './assets/banks.json';
import { BankInfo, getValidInterest } from './BankInfo';
import type {BankDataType, BankSDType}  from './Type';

export const DepositContext = createContext(1);

function App() {
  const [depositMoney,setDepositMoney] = useState(0);

  const bankDataArr:BankDataType[] = bankData;
  
  return(
    <>
      <h1>Termínované vklady</h1>
      <div>
        <label htmlFor="moneyDeposit">Vklad: </label>
        <input onChange={e=>setDepositMoney(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value) >= 0 ? parseInt(e.target.value) : 0)} type="number" name="moneyDeposit" id="moneyDeposit" />
      </div>
      <table id='bankSorter'>
        <thead>
          <tr className='bank' id='tableNames'>
            <th className='bankLogo'>Banka</th>
            <th className='bankInterest'>Hrubé úroky</th>
            <th className='bankInterest'>Čisté úroky</th>
            <th className='bankTax'>Zaplatím na daních</th>
            <th className='bankFinalMoney'>Budu mít celkem peněz</th>
          </tr>
        </thead>
        
        <tbody>
          <BankTable bankDataArr={bankDataArr} depositMoney={depositMoney}/>
        </tbody>
      </table>

    </>
  )
}

function BankTable({bankDataArr, depositMoney}:{bankDataArr:BankDataType[],depositMoney:number}){
  
  var BankSpecificDepositArr:BankSDType[] = 
  [
    {
      Name:"Placeholder",
      Logo:"https://developer.valvesoftware.com/w/images/thumb/8/8b/Debugempty.png/200px-Debugempty.png",
      Interest:1
    }
  ]
  
  const [sortedBankDataArr,setSortedBankDataArr] = useState(BankSpecificDepositArr);


  useEffect(()=>{
    BankSpecificDepositArr = [];
    
    for (let index = 0; index < bankDataArr.length; index++) {
      BankSpecificDepositArr.push(
        {
          Name:bankDataArr[index].Name,
          Logo:bankDataArr[index].Logo,
          Interest:getValidInterest(bankDataArr[index], depositMoney)
         }
      );  
    }

    setSortedBankDataArr(BankSpecificDepositArr.sort(compareBanks));
  },
  [depositMoney]
  )

  return (
    <>
        {
          sortedBankDataArr.map((bank)=>
            <BankInfo key={bank.Name} bankData={bank} depositMoney={depositMoney}/>
          )
        }
    </>
  );
}

function compareBanks( bankA:BankSDType, bankB:BankSDType){

  if ( bankA.Interest < bankB.Interest ){
    return 1;
  } else if ( bankA.Interest > bankB.Interest ){
    return -1;
  }
  return 0;
}

export default App
