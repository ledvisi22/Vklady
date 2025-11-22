import { createContext, useState } from 'react'
import './App.css'
import bankData from './assets/banks.json';
import type {BankDataType}  from './Type';
import { BankTable } from './BankTable';

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

export default App
