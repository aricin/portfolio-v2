function ProjectCard({ projectImage, title, date, description, linkValue1, linkText1, linkValue2, linkText2, technologies }) {
    return (
        <a className='group hover:bg-slate-600 hover:bg-opacity-10 border border-transparent hover:backdrop-blur-sm hover:border-slate-600 hover:shadow-lg transition-transform  transform-gpu text-white p-6 rounded-lg max-w-3xl' href={linkValue1} target='_blank'>
          <div className='flex flex-col sm:flex-row'>
            <img className='w-full sm:w-36 h-max rounded mr-6 mb-4' src={projectImage} alt=''/>
            <div className=''>
                <div className='flex flex-col sm:flex-row justify-between sm:items-center'>
                    <h1 className='text-2xl font-bold'>
                      {title}{' '}         
                      <span className="text-lg inline-block transition-transform align-middle group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                      </span>
                    </h1>
                    <span className='text-sm text-gray-400'>{date}</span>
                </div>
                <p className='mt-2 text-gray-300'>
                    {description}
                </p>
                <div className='flex flex-wrap gap-2 mt-4'>
                  {technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-sm rounded-full bg-blue-500 bg-opacity-20 text-blue-400">
                        {tech}
                      </span>
                  ))}
                </div>
                {/* <div className='flex flex-col mt-4'>
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
                </div>   */}
              </div>
            </div>
        </a>
    );
}

export default ProjectCard;
