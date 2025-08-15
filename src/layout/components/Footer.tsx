import { memo } from 'react';
import LogoNavbar from "../../shared/assets/LogoMovie.svg"
import FooterPlay from "../../shared/assets/FooterPlay.svg"
import FooterApp from "../../shared/assets/FooterApp.svg"
import FooterLgOne from "../../shared/assets/FooterLgOne.svg"
import FooterLgTwo from "../../shared/assets/FooterLogoTwo.svg"
import FooterLgThree from "../../shared/assets/FooterLogoThere.svg"
import FooterLgFour from "../../shared/assets/FooterLogoFour.svg"
import FooterLgVid from "../../shared/assets/FooterLogoVid.svg"
import FooterLgFilm from "../../shared/assets/FooterFilm.svg"
import FooterLgIn from "../../shared/assets/FooterInfo.png"
import FooterLgBoll from "../../shared/assets/FooterBoll.svg"
import Instagram from "../../shared/assets/InstagramIcon.svg"
import Facebook from "../../shared/assets/FacebookIcon.svg"
import Youtube from "../../shared/assets/YoutubeIcon.svg"

const Footer = () => {

  return (
    <div className="Footer bg-[#000] pt-[100px] pb-[50px]">
      <footer className="container w-[100%] pb-[30px] h-auto bg-[#111111] rounded-[12px] text-white pt-[40px]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="flex flex-col items-start gap-4 ml-[50px]">
            <img src={LogoNavbar} alt="Logo" className="w-20" />
            <div className="mb-[10px] gap-3">
              <img className="pb-[10px] w-32" src={FooterPlay}  alt="Google Play"/>
              <img src={FooterApp} alt="App Store" className="w-32" />
            </div>
          </div>
          <div className='ml-[50px]'>
            <h3 className="text-lg font-semibold mb-3">О нас</h3>
            <ul className="space-y-2 text-gray-300">
              <li className='flex gap-[10px]'><img src={FooterLgOne} alt="" /> Публичная оферта</li>
              <li className='flex gap-[10px]'><img src={FooterLgTwo} alt="" />Реклама</li>
              <li className='flex gap-[10px]'><img src={FooterLgThree} alt="" />F.A.Q</li>
              <li className='flex gap-[10px]'><img src={FooterLgFour} alt="" />Контакты</li>
            </ul>
          </div>
          <div className='ml-[50px]'>
            <h3 className="text-lg font-semibold mb-3">Категории</h3>
            <ul className="space-y-2 text-gray-300">
              <li className='flex gap-[10px]'><img src={FooterLgVid} alt="" />Кино</li>
              <li className='flex gap-[10px]'><img src={FooterLgFilm} alt="" />Театр</li>
              <li className='flex gap-[10px]'><img src={FooterLgIn} alt="" />Концерты</li>
              <li className='flex gap-[10px]'><img src={FooterLgBoll} alt="" />Спорт</li>
            </ul>
          </div>
          <div className='ml-[50px]'>
            <h3 className="text-lg font-semibold mb-3">Связаться с нами</h3>
            <p className="text-red-500 mb-[33px]">+998 (95) 897-33-38</p>
            <h3 className="text-lg font-semibold mb-3">Социальные сети</h3>
            <div className="flex gap-3 list-none space-y-2 text-gray-300">
              <li><img src={Instagram} alt="" /></li>
              <li><img src={Facebook} alt="" /></li>
              <li><img src={Youtube} alt="" /></li>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default memo(Footer);