import {Hero, VideoCard} from '../components';

const Home = () => {
  return (
    <section>
      <Hero />
      <section className="px-5 mb-12">
        <div>
          <h2 className="bg-blue-300 text-white max-w-80 text-center font-bold text-2xl mb-5 rounded-md py-2 uppercase">
            CATEGORIA
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
          <VideoCard />
        </div>
      </section>
      <section className="px-5 mb-12">
        <div>
          <h2 className="bg-green-500 text-white max-w-80 text-center font-bold text-2xl mb-5 rounded-md py-2 uppercase">
            CATEGORIA
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
          <VideoCard />
        </div>
      </section>
      <section className="px-5 mb-12">
        <div>
          <h2 className="bg-yellow-500 text-white max-w-80 text-center font-bold text-2xl mb-5 rounded-md py-2 uppercase">
            CATEGORIA
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
          <VideoCard />
        </div>
      </section>
    </section>
  );
};

export default Home;
