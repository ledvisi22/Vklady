import { useState } from 'react';
import './App.css';
import './css/buttons.css';
import bankData from './assets/banks.json';
import type {BankDataType}  from './Type';
import { BankTable } from './BankTable';

function App() {
  const [depositMoney,setDepositMoney] = useState(0);
  const [time,setTime] = useState(12);

  const bankDataArr:BankDataType[] = bankData;
  
  return(
    <>
      <h1>Termínované vklady</h1>
      <div id='depositDiv'>
        <div>
          <label htmlFor="moneyDeposit">Vklad: </label>
          <input onChange={e=>setDepositMoney(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value) >= 0 ? parseInt(e.target.value) : 0)} type="number" name="moneyDeposit" id="moneyDeposit" />
        </div>
        <div id='timeSelector'>
          <button onClick={()=>{setTime(3)}} className={ time === 3 ? 'selected' : '' }>3 měsíce</button>
          <button onClick={()=>{setTime(6)}} className={ time === 6 ? 'selected' : '' }>6 měsíců</button>
          <button onClick={()=>{setTime(12)}} className={ time === 12 ? 'selected' : '' }>12 měsíců</button>
        </div>
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
          <BankTable bankDataArr={bankDataArr} depositMoney={depositMoney} time={time}/>
        </tbody>
      </table>

    </>
  )
}

export default App
