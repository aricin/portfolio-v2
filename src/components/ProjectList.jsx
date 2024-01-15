import ProjectCard from './ProjectCard';

function ProjectList() {
  return (
    <div className='flex flex-col space-y-4'>
      <ProjectCard
        title="cardgamer.club"
        date='March 2023'
        description="This is a card game inspired by similar games such as Dutch Blitz or Nertz.
          It plays 2-6 people. When a user first loads the website they are automatically put in
          a lobby with a unique id. A user can invite their friends to play by sending them an invite link containing the lobby id.
          It was built with vanilla JS, Firebase's Realtime Database, and was deployed with Netlify."
        linkText1='cardgamer.club'
        linkValue1='https://cardgamer.club'
        linkText2='GitHub Repo'
        linkValue2='https://github.com/aricin/apple-crisp'
        projectImage='applepic.PNG'
      />
      <ProjectCard
        title="MagiPad"
        date='March 2023'
        description="As part of a team of two, this was our submission for the Uncommon Hacks 2023 hackathon at the University of Chicago.
          The original idea was to create a productivity iPad app that uses voice commands as input. We eventually did a slight pivot and
          decided to put an emphasize on AI art generation. MagiPad uses OpenAI's DALL-E API to give users the ability to create AI art at their fingertips.
          It was built with Swift and UIKit."
        linkText1='DevPost'
        linkValue1='https://devpost.com/software/magipad?ref_content=my-projects-tab&ref_feature=my_projects'
        linkText2='GitHub Repo'
        linkValue2='https://github.com/isaacrestrick/MagiPad/tree/main'
        projectImage='minecraft.jpg'
      />
      <ProjectCard
        title="Canvas Plus Plus"
        date='January - May 2023'
        description="This was a semester long project as part of a team of 6. Our goal was to rebuild Canvas with additional
          features to make a more user friendly experience. Throughout the process the team practiced Agile, Scrum, and XP principles.
          The project is fully containerized in Docker and built with Django, and MySQL."
        projectImage='canvas.PNG'
      />
      <ProjectCard
        title="Aricin's Blog"
        date='June 2022'
        description="This was my first project using Django. It is a simple blog application where
          users can sign up and make posts. I'm using S3 to store profile images.
          It uses SQLite3 for the database and was deployed with PythonAnywhere."
        linkText1='aricin.pythonanywhere.com'
        linkValue1='https://aricin.pythonanywhere.com/'
        linkText2='GitHub Repo'
        linkValue2='https://github.com/aricin/aricins-blog'
        projectImage='blog2.PNG'
      />
      <ProjectCard
        title="aricin.dev v2"
        date='May 2023'
        description="This is my portfolio website. It was built with React and deployed with Netlify. I also used Vite as my build tool."
        projectImage='portpic2.PNG'
      />
    </div>
  );
}

export default ProjectList;