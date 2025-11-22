import type {BankSDType} from './Type';

export function BankInfo({ bankData, depositMoney,best }: { bankData: BankSDType, depositMoney:number, best:boolean}) {

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
    bankData.Interest * depositMoney / 100
  )
  const bankInterestWithTax = Intl.NumberFormat("cs-CZ",{ style: "currency", currency: "CZK" }).format(
    bankData.Interest * depositMoney * 0.85 / 100
  )
  const bankTax = Intl.NumberFormat("cs-CZ",{ style: "currency", currency: "CZK" }).format(
    bankData.Interest * depositMoney / 100 * 0.15
  )
  const bankFinalMoney = Intl.NumberFormat("cs-CZ",{ style: "currency", currency: "CZK" }).format(
    depositMoney + (bankData.Interest * depositMoney / 100 * 0.85)
  )

  return (
    <>
      <tr className={best ? "bestBank bank" : "bank"}>
        <td className='bankLogo'><img src={bankData?.Logo} alt={bankData.Name} title={bankData.Name} /></td>
        <td className='bankInterest'>{bankInterest}</td>
        <td className='bankInterestWithTax'>{bankInterestWithTax}</td>
        <td className='bankTax'>{bankTax}</td>
        <td className='bankFinalMoney'>{bankFinalMoney}</td>
      </tr>
    </>
  );
}


