export interface BillItem {
  dup: string;
  adj: string;
  dosRange: string;
  BillNumber: number;
  category: string;
  amountBilled: number;
  paid: number;
  balance: number;
  feeSchedule: number;
  billLine: BillLine[];
}

export interface BillLine {
  dos: string;
  cptCode: string;
  endNotes: string;
  amountBilled: number;
  paid: number;
  balance: number;
}
