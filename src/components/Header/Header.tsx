import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="my-5 flex w-full items-center justify-between px-20">
      <div className="h-auto w-[100px] cursor-pointer" onClick={() => navigate('/')}>
        <img src="img/logo.png" alt="logo" />
      </div>
      <div className="flex w-[80%] justify-center text-3xl font-bold uppercase">
        Kino<span className="text-mainColor">v</span>
        <span className="text-accentColor">topku</span>
      </div>
    </header>
  );
};
