import type { BankDataType } from './Type';


export function getValidInterest(bankData: BankDataType, depositMoney: number, time:number) {
  var interest: number = 0;

  var InterestPerTime:{
    From:number,
    Interest:number
  }[]

  if (time==3) {
    
    InterestPerTime = bankData.InterestPerThree;
    console.log(InterestPerTime)
  }else if(time==6){
    InterestPerTime = bankData.InterestPerSix;
  }else {
    InterestPerTime = bankData.InterestPerYear;
  }

  if (InterestPerTime == undefined) {
    return 0;
  }

  InterestPerTime.forEach(InterestInterval => {
    if (depositMoney >= InterestInterval.From) {
      interest = InterestInterval.Interest;
    }
  });

  return interest;
}
