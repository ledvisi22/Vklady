import { useState, useEffect } from 'react';
import { BankInfo } from './BankInfo';
import { getValidInterest } from '../assets/functions/getValidInterest';
import type { BankDataType, BankSDType } from '../assets/types/Type';
import { compareBanks } from '../assets/functions/compareBanks';

export function BankTable({ bankDataArr, depositMoney, time }: { bankDataArr: BankDataType[]; depositMoney: number; time:number; }) {

  var BankSpecificDepositArr: BankSDType[] = [
    {
      Name: "Placeholder",
      Logo: "https://developer.valvesoftware.com/w/images/thumb/8/8b/Debugempty.png/200px-Debugempty.png",
      Interest: 1
    }
  ];

  const [sortedBankDataArr, setSortedBankDataArr] = useState(BankSpecificDepositArr);


  useEffect(() => {
    BankSpecificDepositArr = [];

    for (let index = 0; index < bankDataArr.length; index++) {
      BankSpecificDepositArr.push(
        {
          Name: bankDataArr[index].Name,
          Logo: bankDataArr[index].Logo,
          Interest: getValidInterest(bankDataArr[index], depositMoney, time)
        }
      );
    }

    setSortedBankDataArr(BankSpecificDepositArr.sort(compareBanks));
  },
    [depositMoney, time]
  );

  const bestInterest = Math.max(...sortedBankDataArr.map(bank => bank.Interest));

  return (
    <>
      {sortedBankDataArr.map((bank) => <BankInfo key={bank.Name} best={bestInterest} bankData={bank} depositMoney={depositMoney} time={time} />
      )}
    </>
  );
}