import { memo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header/>
      <main className='w-[100%] bg-[#000]'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default memo(MainLayout);