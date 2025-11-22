import type {BankDataType, BankSDType} from './Type';

export function BankInfo({ bankData, depositMoney }: { bankData: BankSDType, depositMoney:number}) {

  return (
    <>
      <tr className='bank' id='tableNames'>
        <td className='bankLogo'><img src={bankData?.Logo} alt={bankData.Name} title={bankData.Name} /></td>
        <td className='bankInterest'>{Math.round(bankData.Interest * depositMoney / 100)}</td>
        <td className='bankInterestWithTax'>{Math.round(bankData.Interest * depositMoney * 0.85 / 100)}</td>
        <td className='bankTax'>{Math.round(bankData.Interest * depositMoney / 100 * 0.15)}</td>
        <td className='bankFinalMoney'>{Math.round(depositMoney + (bankData.Interest * depositMoney / 100 * 0.85))}</td>
      </tr>
    </>
  );
}

export function getValidInterest(bankData:BankDataType, depositMoney:number) {
  var interest:number = 0;
  
  bankData.InterestPerYear.forEach(InterestInterval => { 
    if (depositMoney >= InterestInterval.From) {
      interest = InterestInterval.Interest;
    }
  });

  return interest
}
