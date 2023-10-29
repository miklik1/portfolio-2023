import { ReactComponent as BackgroundT } from '../../assets/bg_top.svg';
import { ReactComponent as BackgroundM } from '../../assets/bg_hero.svg';

export default function Hero() {
  return (
    <div className="relative">
      <div className="px-5 pt-16 pb-20 sm:pb-28 md:pb-36 lg:pb-42 xl:pb-64 lg:pt-24">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mx-auto font-black">
          <span className="underline decoration-42 decoration-red">Front-End</span><br />Developer
        </h1>
        <p className="text-sm md:text-base lg:text-3xl xl:text-4xl sm:w-3/4 lg:w-1/2 2xl:max-w-lg mt-16 lg:mt-24 xl:mt-32 mx-auto leading-2 font-black">
          Turning Lines of Code into Seamless User Journeys
        </p>
      </div>
      <BackgroundT className="absolute bottom-0 left-0" />
      <BackgroundM className="absolute bottom-0 left-0" />
    </div>
  );
}
