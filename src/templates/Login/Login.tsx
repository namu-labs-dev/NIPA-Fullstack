interface LoginProps {
  onClickApple: () => void;
  onClickGoogle: () => void;
}

export const Login = (props: LoginProps) => {
  return <div className="w-mob flex items-center justify-between"></div>;
};
