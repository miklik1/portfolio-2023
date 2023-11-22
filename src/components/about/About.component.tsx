import { ReactComponent as BG_bottom } from '../../assets/bg_bottom.svg';
import githubSvg from '../../assets/icons/github.svg';
import linkedinSvg from '../../assets/icons/linkedin.svg';
import resumeSvg from '../../assets/icons/resume.svg';
import instagramSvg from '../../assets/icons/instagram.svg';

export default function About() {
  return (
    <div id="About me" className="relative">
      <BG_bottom className="absolute top-0 left-0" />
      <div className=" pt-16 pb-6 lg:pt-24 lg:pb-12 xl:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-auto font-black tracking-tight text-blue ">ABOUT ME</h2>
            <p className="text-xs md:text-sm xl:text-lg sm:w-3/4  my-8 lg:my-12 xl:my-16 mx-auto leading-2 text-blue">
              Get to know the person behind the code.
            </p>
          </div>
          <div className='flex justify-center gap-x-8'>
            <a
              href="/CV_2023.pdf"  // Replace with the actual path to your resume PDF file
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={resumeSvg} alt="Resume" className="transform scale-125 w-12 h-12" />
            </a>

            <a href="https://www.linkedin.com/in/martin-mikl%C3%ADk-810479162/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinSvg} alt="LinkedIn" className="transform scale-125 w-12 h-12" />
            </a>

            <a href="https://github.com/miklik1" target="_blank" rel="noopener noreferrer">
              <img src={githubSvg} alt="GitHub" className="transform scale-125 w-12 h-12" />
            </a>

            <a href="https://www.instagram.com/martin_miklik/" target="_blank" rel="noopener noreferrer">
              <img src={instagramSvg} alt="Instagram" className="transform scale-125 w-12 h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
