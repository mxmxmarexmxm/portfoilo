import maske from '../assets/img/maske.png';
import maskePhone from '../assets/img/maskephone.png';

const Work = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center font-bold">
        <span className="text-gray-500 ">E-COMMERCE APPLICATION</span>
        <h2 className="text-5xl text-center font-bold">Maske.rs</h2>
      </div>
      <div className="flex justify-center my-4 w-full items-center">
        <div className="w-2/3 mr-6 sm:mr-16">
          <img src={maske} className="w-full" />
        </div>
        <div className="w-1/6 mr-6">
          <img src={maskePhone} className="w-full" />
        </div>
      </div>
      <div>
        <p className="my-5">
          Online store for selling mobile devices equipment, especially for
          covers.
        </p>
        <a
          href="https://maske.rs/"
          target="_blanc"
          className="text-blue-500 visited:text-blue-300 my-8"
        >
          Visit the app
        </a>
      </div>
    </div>
  );
};

export default Work;
