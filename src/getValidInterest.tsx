import type { BankDataType } from './Type';


export function getValidInterest(bankData: BankDataType, depositMoney: number) {
  var interest: number = 0;

  bankData.InterestPerYear.forEach(InterestInterval => {
    if (depositMoney >= InterestInterval.From) {
      interest = InterestInterval.Interest;
    }
  });

  return interest;
}
