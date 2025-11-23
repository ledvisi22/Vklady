import type { BankSDType } from '../types/Type';


export function compareBanks(bankA: BankSDType, bankB: BankSDType) {

  if (bankA.Interest < bankB.Interest) {
    return 1;
  } else if (bankA.Interest > bankB.Interest) {
    return -1;
  }
  return 0;
}
