import { ReactComponent as BackgroundT } from '../../assets/bg_top.svg';
import { ReactComponent as BackgroundM } from '../../assets/bg_hero.svg';

export default function Hero() {
  return (
    <div className="relative">
      <div className="px-5 pt-16 pb-20 sm:pb-28 md:pb-36 lg:pb-42 xl:pb-64 lg:pt-24">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mx-auto font-black">
          <span className="underline decoration-42 decoration-red">Front-End</span><br />Developer
        </h1>
        <p className="text-xs md:text-sm xl:text-lg sm:w-3/4 lg:w-1/2 2xl:max-w-lg mt-16 lg:mt-24 xl:mt-32 mx-auto leading-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dapibus augue non sapien. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Aliquam id dolor. Fusce tellus. Nulla non arcu lacinia neque faucibus fringilla. Maecenas aliquet accumsan leo. Fusce consectetuer risus a nunc. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Etiam bibendum elit eget erat.
        </p>
      </div>
      <BackgroundT className="absolute bottom-0 left-0" />
      <BackgroundM className="absolute bottom-0 left-0" />
    </div>
  );
}
