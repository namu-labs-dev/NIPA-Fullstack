interface SearchProps {
  type: 'squre' | 'rounded';
  text: string;
  placeholder: string;
  onChangeText: () => void;
}

export const Search = (props: SearchProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
