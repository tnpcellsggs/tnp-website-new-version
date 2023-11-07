import React,{useEffect} from 'react';

export const Researches = () => {
  useEffect(() => {
    document.title = "Researches | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='m-4'>
      Click to see researches
      <br />
      <h1 onClick={() => {
        window.open('https://sggs.ac.in/home/page/Research-in-the-Institute','_self')
      }} className='p-2 m-4 text-center border-2 border-black text-bold rounded-xl w-[30%] sm:w-[10%] hover:cursor-pointer'>Click
      </h1>
    </div>
  )
}
