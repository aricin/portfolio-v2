import ProjectList from '@/components/ProjectList'
import Stars from '@/components/Stars'
import About from '@/components/About'

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-fit'>
      <Stars />
      {/* <div className='fixed flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0a2985] after:dark:opacity-40 before:lg:h-[360px] z-[-1]'>
      </div> */}
      <div className='flex flex-col xl:flex-row 2xl:space-x-24 2xl:p-24 xl:p-16 xl:space-x-4 p-5 pt-24 z-10'>
        <About className=''/>
        <ProjectList className=''/>
      </div>
    </main>
  )
}
