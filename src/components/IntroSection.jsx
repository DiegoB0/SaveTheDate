import Countdown from './Countdown.jsx';
import HeroImg from './HeroImg.js';

export default function IntroSection() {

  return (
    <section
      className="relative xl:min-h-[calc(100vh-6rem)] overflow-hidden my-12 xl:my-0"
    >
      {/*<div
        style={{
          backgroundImage: `url('/grooms.jpeg')`,
        }}

        className="absolute inset-0 md:bg-contain bg-cover bg-center"
      />*/}
      <div className="xl:absolute inset-0 flex flex-col xl:flex-row justify-center items-center gap-8">
        {/*<img 
          src='/grooms.jpeg'
          className=' h-4/5 opacity-80 sepia-[30%] shadow inset-shadow-2xs border-4  border-[#f2a366]'
        />*/}
        <HeroImg />
        <div 
          className=' h-[85%] w-[0.2rem] bg-[#f7dac6] rounded-xl opacity-70 hidden xl:block'
        />
        <div 
          className=' h-[60%] w-[0.2rem] bg-[#f7dac6] rounded-xl opacity-60 -ml-4 hidden xl:block'
        />
        <div 
          className=' w-[85%] h-[0.2rem] bg-[#f7dac6] rounded-xl opacity-70 xl:hidden'
        />
        <div 
          className=' w-[60%] h-[0.2rem] bg-[#f7dac6] rounded-xl opacity-60 -mt-3 -ml-4 xl:hidden'
        />
        <div className=" z-10">
          <Countdown />
        </div>
      </div>

    </section>
  );
}

