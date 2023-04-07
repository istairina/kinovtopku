import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="mx-auto my-5 flex max-w-[1200px] items-center justify-between px-7">
      <div className="h-auto w-[100px] cursor-pointer" onClick={() => navigate('/')}>
        <img src="img/logo.png" alt="logo" />
      </div>
      <div className="flex w-[80%] justify-center text-3xl font-bold uppercase">
        <span className="text-white">Kino</span>
        <span className="text-mainColor">v</span>
        <span className="text-accentColor">topku</span>
      </div>
    </header>
  );
};
