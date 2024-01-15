function About() {
  return (
    <div className='xl:sticky 2xl:top-24 top-16 flex flex-col max-w-lg h-fit mx-auto p-5 pb-16'>
      <div className='flex flex-col sm:flex-row sm:text-left items-center text-center'>
        <img
          src='aricin-portrait2.jpg'
          alt='Profile'
          className='mb-3 w-28 h-28 sm:w-36 sm:h-36 rounded-full'
        />
        <div className='sm:pl-5'>
          <h1 className='text-4xl sm:text-5xl text-white mb-2 font-semibold'>Aricin Rotarius</h1>
          <p className='text-md sm:text-xl text-gray-300'>Full-Stack Software Engineer</p>
          <p className='text-md sm:text-xl text-gray-300'>Recent Grad @ UW-Madison</p>
          <div className='flex mt-3 space-x-3 justify-center sm:justify-start'> 
            <a href='https://linkedin.com/in/aricin/' target='_blank' className=''>
              <img src='linkedin.svg' alt='LinkedIn' className='w-8 h-8' />
            </a>
            <a href='https://github.com/aricin' target='_blank' className=''>
              <img src='github.svg' alt='GitHub' className='w-8 h-8' />
            </a>
            <a href='https://twitter.com/aricin_' target='_blank' className=''>
              <img src='x.svg' alt='X' className='w-8 h-8' />
            </a>
          </div>
        </div>
      </div>
      <p className='mt-10 text-gray-300 text-center sm:text-start'>
        Hello! I&apos;m a recent graduate from the University of Wisconsin-Madison, where I earned a Bachelor of Science in Computer Science and a certificate in Entrepreneurship. I&apos;m currently looking for my next positon as a Software Engineer, bringing along my passion for innovation and building cool stuff.
      </p>
      <a href='https://chat.openai.com/g/g-ldBGWxlD0-aricingpt' className='flex row mt-6 justify-center sm:justify-start' target='_blank'>
        &#128073;
        <p className=' text-gray-300 underline hover:text-white'>
          Ask me anything with AricinGPT
        </p>
      </a>
    </div>
  );
}

export default About;