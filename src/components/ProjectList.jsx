import ProjectCard from './ProjectCard';

function ProjectList() {
  return (
    <div>
      {/* <h2 className='sticky text-center top-24 text-2xl font-bold p-5 z-10'>Projects</h2> */}
      <div className='flex flex-col space-y-4'>
        <ProjectCard
          title="cardgamer.club"
          date='March 2023'
          description="Inspired by the likes of Dutch Blitz and Nerts.
            Plays 2-6 people. When a user first loads the website they are put in
            a private lobby with a unique invite link. Along the way, my approach was to find the lightest weight
            solution for each problem. This led me to build a completely serverless application using
            Firebase's Realtime Database and Netlify Functions."
          linkValue1='https://github.com/aricin/apple-crisp'
          projectImage='applepic.PNG'
          technologies={['JavaScript', 'Node.js', 'Firebase']}
        />
        <ProjectCard
          title="aricin.dev v2"
          date='Jan 2024'
          description="I decided to redo my website and get familiar with Next.js along the way. 
            I learned about app vs pages directory structures and client vs server side components.
            Also, Tailwind is pretty cool."
          linkValue1='https://github.com/aricin/portfolio-v2'
          projectImage='portfoliov2.PNG'
          technologies={['JavaScript', 'Next.js', 'React.js', 'Tailwind']}
        />
        <ProjectCard
          title="MagiPad"
          date='March 2023'
          description="Designed, developed, and presented our iPad app prototype within a 24-hour time frame for Uncommon Hacks 2023. The original idea was to create a productivity app that enabled rapid ideation with voice commands as input. We eventually pivoted and decided to lean into the AI art generation using DALL-E 2. It turned out to be a lot of fun to play around with."
          linkValue1='https://devpost.com/software/magipad?ref_content=my-projects-tab&ref_feature=my_projects'
          projectImage='minecraft.jpg'
          technologies={['Swift', 'UIKit', 'DALL-E 2']}
        />
        <ProjectCard
          title="Canvas Plus Plus"
          date='January - May 2023'
          description="Final project for Software Engineering class. Practiced agile, scrum, and XP principles within a team of 6. Our goal was to rebuild Canvas with additional features and better UX. I setup dev environments for teammates by configuring Django-MySQL integration with Docker and assumed additional role as product owner."
          projectImage='canvas.PNG'
          linkValue1='https://github.com/aricin/cpp'
          technologies={['Python', 'Django', 'MySQL', 'Docker']}
        />
        <ProjectCard
          title="Aricin's Blog"
          date='May 2022'
          description="This was my first project using Django. It is a simple blog application where
            users can sign up and make posts. I learned about MVC architecture, user authenticaiton, and authorization. 
            Uses S3 to store profile imagess and deployed to PythonAnywhere."
          linkValue1='https://github.com/aricin/aricins-blog'
          projectImage='blog2.PNG'
          technologies={['Python', 'Django', 'Docker']}
        />
      </div>
    </div>
  );
}

export default ProjectList;