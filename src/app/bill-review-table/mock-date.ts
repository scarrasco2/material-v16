import { BillItem } from './bill.interface';

export const MOCK_DATA: BillItem[] = [
  {
    dup: '1',
    adj: 'Y',
    dosRange: '9/26/22 - 10/24/23',
    BillNumber: 54689,
    category: 'IME',
    amountBilled: 200,
    paid: 20,
    balance: 180,
    feeSchedule: 180,
    billLine: [
      {
        dos: '12/14/22',
        cptCode: '97124',
        endNotes: 'x123',
        amountBilled: 200,
        paid: 200,
        balance: 200,
      },
      {
        dos: '12/14/22',
        cptCode: '97039',
        endNotes: 'x134',
        amountBilled: 2000.22,
        paid: 2000.22,
        balance: 20000.22,
      },
      {
        dos: '12/14/22',
        cptCode: '97034',
        endNotes: 'x125',
        amountBilled: 300,
        paid: 20.04,
        balance: 35.99,
      },
    ],
  },
  {
    dup: '-',
    adj: 'N',
    dosRange: '9/26/22 - 10/24/23',
    BillNumber: 54690,
    category: 'Fee Schedule',
    amountBilled: 200.22,
    paid: 0,
    balance: 200.22,
    feeSchedule: 200.22,
    billLine: [
      {
        dos: '12/14/22',
        cptCode: '97124',
        endNotes: 'x123',
        amountBilled: 200,
        paid: 200,
        balance: 200,
      },
      {
        dos: '12/14/22',
        cptCode: '97039',
        endNotes: 'x134',
        amountBilled: 2000.22,
        paid: 2000.22,
        balance: 20000.22,
      },
      {
        dos: '12/14/22',
        cptCode: '97034',
        endNotes: 'x125',
        amountBilled: 300,
        paid: 20.04,
        balance: 35.99,
      },
    ],
  },
];
