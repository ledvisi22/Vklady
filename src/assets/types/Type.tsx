
export interface BankDataType {
  Name: string;
  Logo: string;
  InterestPerThree: {
    From:number,
    Interest:number
  }[];
  InterestPerSix: {
    From:number,
    Interest:number
  }[];
  InterestPerYear: {
    From:number,
    Interest:number
  }[];
}

//BankSpecificDeposit
export interface BankSDType {
  Name: string;
  Logo: string;
  Interest:number;
}
