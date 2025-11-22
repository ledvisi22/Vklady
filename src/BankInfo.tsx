import type {BankDataType, BankSDType} from './Type';

export function BankInfo({ bankData, depositMoney,best }: { bankData: BankSDType, depositMoney:number, best:boolean}) {

  if (bankData.Interest == 0 || depositMoney == 0) {
    return (
    <>
      <tr className='bank'>
        <td className='bankLogo'><img src={bankData?.Logo} alt={bankData.Name} title={bankData.Name} /></td>
        <td className='bankInterest'>-</td>
        <td className='bankInterestWithTax'>-</td>
        <td className='bankTax'>-</td>
        <td className='bankFinalMoney'>{Math.round(depositMoney + (bankData.Interest * depositMoney / 100 * 0.85))} CZK</td>
      </tr>
    </>
    )
  }

  return (
    <>
      <tr className={best ? "bestBank bank" : "bank"}>
        <td className='bankLogo'><img src={bankData?.Logo} alt={bankData.Name} title={bankData.Name} /></td>
        <td className='bankInterest'>{Math.round(bankData.Interest * depositMoney / 100)} CZK</td>
        <td className='bankInterestWithTax'>{Math.round(bankData.Interest * depositMoney * 0.85 / 100)} CZK</td>
        <td className='bankTax'>{Math.round(bankData.Interest * depositMoney / 100 * 0.15)} CZK</td>
        <td className='bankFinalMoney'>{Math.round(depositMoney + (bankData.Interest * depositMoney / 100 * 0.85))} CZK</td>
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
