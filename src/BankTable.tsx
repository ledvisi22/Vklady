import { useState, useEffect } from 'react';
import { BankInfo } from './BankInfo';
import { getValidInterest } from './getValidInterest';
import type { BankDataType, BankSDType } from './Type';

export function BankTable({ bankDataArr, depositMoney }: { bankDataArr: BankDataType[]; depositMoney: number; }) {

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
          Interest: getValidInterest(bankDataArr[index], depositMoney)
        }
      );
    }

    setSortedBankDataArr(BankSpecificDepositArr.sort(compareBanks));
  },
    [depositMoney]
  );

  const bestInterest = Math.max(...sortedBankDataArr.map(bank => bank.Interest));

  return (
    <>
      {sortedBankDataArr.map((bank) => <BankInfo key={bank.Name} best={bestInterest} bankData={bank} depositMoney={depositMoney} />
      )}
    </>
  );
}export function compareBanks(bankA: BankSDType, bankB: BankSDType) {

  if (bankA.Interest < bankB.Interest) {
    return 1;
  } else if (bankA.Interest > bankB.Interest) {
    return -1;
  }
  return 0;
}

