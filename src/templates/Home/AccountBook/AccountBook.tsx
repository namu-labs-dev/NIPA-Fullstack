export interface Transaction {
  type:
    | 'regist'
    | 'request'
    | 'approveRequest'
    | 'rejectRequest'
    | 'report'
    | 'approveReport'
    | 'rejectReport'
    | 'rechargeFee';
  email: string;
  hash: string;
  balance: number;
  created_at: Date;
}

interface AccountBookProps {
  balance: number;
  transactions: Transaction[];
  onClick: () => void;
  onClickExplorer: () => void;
}

export const AccountBook = (props: AccountBookProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
