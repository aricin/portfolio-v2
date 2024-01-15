function ProjectCard({ projectImage, title, date, description, linkValue1, linkText1, linkValue2, linkText2 }) {
    return (
        <div className='group bg-slate-600 bg-opacity-10 border backdrop-blur-sm border-slate-600 hover:shadow-lg transition-transform hover:-translate-y-1 transform-gpu text-white p-6 rounded-lg max-w-3xl'>
          <div className='flex row'>
            <img className='w-36 h-max rounded mr-6' src={projectImage} alt=''/>
            <div className=''>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>
                      {title}{' '}         
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h1>
                    <span className='text-sm text-gray-400'>{date}</span>
                </div>
                <p className='mt-2 text-gray-300'>
                    {description}
                </p>
                <div className='flex flex-col mt-4'>
                    {linkValue1 && linkText1 && (
                        <a className='flex items-center mt-2 text-blue-400 hover:text-blue-600' href={linkValue1} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
                            {linkText1}
                        </a>
                    )}
                    {linkValue2 && linkText2 && (
                        <a className='flex items-center mt-2 text-gray-400 hover:text-gray-600' href={linkValue2} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github mr-2"></i>
                            {linkText2}
                        </a>
                    )}
                </div>  
              </div>
            </div>
        </div>
    );
}

export default ProjectCard;
