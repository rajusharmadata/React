import RandGif from "./components/RandGif";
import RandGif2 from "./components/RandGif2";
const App = () => {
  return (
    <div className="bg-gradient-to-bl from-gray-700 to-[#242323] min-h-screen  relative overflow-hidden  flex flex-col items-center ">
      <h1 className="  text-white  border border-gray-400  py-2 text-center rounded mt-6  w-11/12 text-2xl font-bold">
        Random Gifs{" "}
      </h1>
      <div className="w-full flex flex-col items-center h-full mt-14 overflow-hidden">
        <RandGif />
      </div>
      <div className="w-full flex flex-col items-center h-full mt-14 overflow-hidden ">
        <RandGif2 />
      </div>
      
    </div>
  );
};

export default App;
