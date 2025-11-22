
export interface BankDataType {
  Name: string;
  Logo: string;
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
