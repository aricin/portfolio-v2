function About() {
  return (
    <div className='xl:sticky 2xl:top-24 top-16 flex flex-col max-w-lg h-fit mx-auto p-5 pb-16'>
      <div className='flex flex-col sm:flex-row sm:text-left items-center sm:items-top text-center'>
        <img
          src='aricin-portrait2.jpg'
          alt='Profile'
          className='mb-3 mt-1 w-28 h-28 sm:w-32 sm:h-32 rounded-full'
        />
        <div className='sm:pl-5'>
          <h1 className='text-4xl sm:text-4xl text-white mb-2 font-semibold'>Aricin Rotarius</h1>
          <p className='text-md sm:text-lg text-gray-300'>Full-Stack Software Engineer</p>
          <div className='flex mt-3 sm:space-x-3 space-x-4 justify-center sm:justify-start'> 
            <a href='https://linkedin.com/in/aricin/' target='_blank' className=''>
              <img src='linkedin.svg' alt='LinkedIn' className='w-10 h-10 fill-white' />
            </a>
            <a href='https://github.com/aricin' target='_blank' className=''>
              <img src='github.svg' alt='GitHub' className='w-10 h-10' />
            </a>
            <a href='https://twitter.com/aricin_' target='_blank' className=''>
              <img src='x.svg' alt='X' className='w-10 h-10' />
            </a>
          </div>
          <a href='https://chat.openai.com/g/g-ldBGWxlD0-aricingpt' className='flex row mt-8 justify-center sm:justify-start' target='_blank'>
            &#128073;
            <p className=' text-gray-300 underline hover:text-white'>
              Ask me anything with AricinGPT
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
