import { ReactComponent as BG_bottom } from '../../assets/bg_bottom.svg';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import resume from '../../assets/icons/resume.png';
import instagram from '../../assets/icons/instagram.png';

export default function About() {
  return (
    <div id="About me" className="relative">
      <BG_bottom className="absolute top-0 left-0" />
      <div className=" pt-16 pb-6 lg:pt-24 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-auto font-black tracking-tight text-blue ">ABOUT ME</h2>
            <p className="text-xs md:text-sm xl:text-lg sm:w-3/4  my-8 lg:my-12 xl:my-16 mx-auto leading-2 text-blue">
              Get to know the person behind the code.
            </p>
          </div>
          <div className='flex justify-center gap-x-8'>
            <a href="{resume}" target="_blank" rel="noopener noreferrer">
              <img src={resume} alt="Resume" className="transform scale-125" />
            </a>

            <a href="https://www.linkedin.com/in/martin-mikl%C3%ADk-810479162/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="transform scale-125" />
            </a>

            <a href="https://github.com/miklik1" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="transform scale-125" />
            </a>

            <a href="https://www.instagram.com/martin_miklik/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="transform scale-125" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}