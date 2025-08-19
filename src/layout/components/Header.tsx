import { memo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// img
import LogoMovie from "../../shared/assets/LogoMovie.svg"
import LogoNavbarOne from "../../shared/assets/LogoNavbarTV.svg"
import LogoNavbarTB from "../../shared/assets/LogoNavbarTB.svg"
import LogoNavbarBL from "../../shared/assets/LogoNavbarBL.svg"
import LogoNavbarSe from "../../shared/assets/LogoNavbarSe.svg"
import RussianFlag from "../../shared/assets/RussianFlag.svg"
import Menu from "../../shared/assets/more.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="Header relative">
      <header className='w-full h-[70px] bg-[#000000]'>
        <nav className="container h-[70px] w-full flex items-center justify-between">
          <div>
            <img onClick={() => navigate("/")} className="w-[112px] h-[36px] cursor-pointer" src={LogoMovie} alt="Logo" />
          </div>

          <ul className={`text-[#A1A1A1] flex gap-[30px] ml-[150px] max-[590px]:hidden`}>
            <li>
              <NavLink to={"/"}>
                <div>
                  <img className="flex mx-auto w-[24px] h-[24px]" src={LogoNavbarOne} alt="" />
                  <p>Афиша</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"movies"}>
                <div>
                  <img className="flex mx-auto w-[24px] h-[24px]" src={LogoNavbarTB} alt="" />
                  <p>Сеансы</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"bookmark"}>
                <div>
                  <img className="flex mx-auto w-[24px] h-[24px]" src={LogoNavbarBL} alt="" />
                  <p>Билеты</p>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to={"bookmark"}>
                <div>
                  <img className="flex mx-auto w-[24px] h-[24px]" src={LogoNavbarSe} alt="" />
                  <p>Поиск</p>
                </div>
              </NavLink>
            </li>
          </ul>

          <div className="flex gap-[30px] items-center max-[1200px]:hidden">
            <button className="flex cursor-pointer text-white w-[82px] items-center pl-[10px] gap-[10px] rounded-[12px] h-[47px] bg-[#0E0E0E]">
              <img className="w-[20px] h-[20px]" src={RussianFlag} alt="" />Ру
            </button>
            <button className="w-[130px] cursor-pointer text-white rounded-[12px] h-[47px] bg-[#C61F1F]">
              Войти
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hidden max-[590px]:flex flex-col gap-1"
          >
            <img src={Menu} alt="Menu" />
          </button>
        </nav>

        {isMenuOpen && (
          <div className="absolute z-20 top-[70px] left-0 w-full bg-[#000] text-white  flex-col items-center gap-4 py-4 max-[590px]:flex hidden">
            <NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>Афиша</NavLink>
            <NavLink to={"movies"} onClick={() => setIsMenuOpen(false)}>Сеансы</NavLink>
            <NavLink to={"bookmark"} onClick={() => setIsMenuOpen(false)}>Билеты</NavLink>
            <NavLink to={"bookmark"} onClick={() => setIsMenuOpen(false)}>Поиск</NavLink>
            <button className="w-[82px] bg-[#0E0E0E] rounded-[12px] h-[47px]">Ру</button>
            <button className="w-[130px] bg-[#C61F1F] rounded-[12px] h-[47px]">Войти</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default memo(Header);
