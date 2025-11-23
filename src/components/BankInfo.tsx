import type {BankSDType} from '../assets/types/Type';

export function BankInfo({ bankData, depositMoney,best, time }: { bankData: BankSDType, depositMoney:number, best:number, time:number}) {

  const bankRankCol = 255/best*bankData.Interest;

  if (bankData.Interest == 0 || depositMoney == 0) {
    const bankFinalMoney = Intl.NumberFormat("cs-CZ",{ style: "currency", currency: "CZK" }).format(
      0
    )
    return (
    <>
      <tr className='bank'>
        <td className='bankLogo'><img src={bankData?.Logo} alt={bankData.Name} title={bankData.Name} /></td>
        <td className='bankInterest'>-</td>
        <td className='bankInterestWithTax'>-</td>
        <td className='bankTax'>-</td>
        <td className='bankFinalMoney'>{bankFinalMoney}</td>
      </tr>
    </>
    )
  }

  const bankInterest = Intl.NumberFormat("cs-CZ",{ style: "currency", currency: "CZK" }).format(
    bankData.Interest * depositMoney / 100 / 12 * time 
  )
  const bankInterestWithTax = Intl.NumberFormat("cs-CZ",{ style: "currency", currency: "CZK" }).format(
    bankData.Interest * depositMoney * 0.85 / 100 / 12 * time 
  )
  const bankTax = Intl.NumberFormat("cs-CZ",{ style: "currency", currency: "CZK" }).format(
    bankData.Interest * depositMoney / 100 * 0.15 / 12 * time 
  )
  const bankFinalMoney = Intl.NumberFormat("cs-CZ",{ style: "currency", currency: "CZK" }).format(
    depositMoney + (bankData.Interest * depositMoney / 100 * 0.85 / 12 * time )
  )

  return (
    <>
      <tr className={best == bankData.Interest ? "bestBank bank" : "bank"}>
        <td className='bankLogo'><img src={bankData?.Logo} alt={bankData.Name} title={bankData.Name} /></td>
        <td className='bankInterest'>{bankInterest}</td>
        <td className='bankInterestWithTax'>{bankInterestWithTax}</td>
        <td className='bankTax'>{bankTax}</td>
        <td style={{borderRight:"5px solid rgb(" + (255 - bankRankCol) + ", " + bankRankCol + ", 0)"}} className='bankFinalMoney'>{bankFinalMoney}</td>
      </tr>
    </>
  );
}


