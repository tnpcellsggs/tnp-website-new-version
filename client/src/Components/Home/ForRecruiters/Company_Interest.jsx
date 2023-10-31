import React,{useEffect} from 'react';

export const Company_Interest = () => {
  useEffect(() => {
    document.title = "Company Interest Form | SGGS Training & Placement";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='w-[80%] mx-auto my-4'>
        <h2 className='m-4 text-[24px]'>Company Interest Form (TEMPLATE ONLY)</h2>
        <div>
          <button className='p-4 m-4 bg-gray-300 border-2 border-black rounded-xl'>JNF direct recuritment</button>
          <button className='p-4 m-4 bg-gray-300 border-2 border-black rounded-xl'>JNF internship</button>
        </div>
      </div>

      <div className='w-[80%] mx-auto my-4 nav-light-shadows p-2'>
        <h2 className='m-4 text-[24px]'>Company Details</h2>
        <div className='flex flex-col m-4'>
          Company Name: __________________ <br />
          Official Email-Id: __________________ <br />
          Company's Website Link(if any): __________________ <br />
        </div>
      </div>
      <div className='w-[80%] mx-auto my-4 nav-light-shadows p-2'>
        <h2 className='m-4 text-[24px]'>Contact Information</h2>
        <div className='flex flex-col m-4'>
          HR Mobile No.: __________________ <br />
          Alternate Contact no.: __________________ <br />
          HR Mail ID: __________________ <br />
        </div>
      </div>
      <div className='w-[80%] mx-auto my-4 nav-light-shadows p-2'>
        <h2 className='m-4 text-[24px]'>Any Message</h2>
        <h3 className='m-4'>
          Message:
        </h3>
      </div>
    </>
  )
}
