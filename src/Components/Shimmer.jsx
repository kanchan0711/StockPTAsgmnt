

const Shimmer = () => {
  return (
    <div className="m-6 shadow-2xl rounded-lg sm:w-[600px] lg:w-[420px] h-[450px] border-2 border-gray-200">
      <div className="h-[350px] border-2 border-gray-100 rounded-lg">
        <h1 className=" h-8 m-5 bg-gray-100"></h1>
        {/* Card content shimmer */}
        <div>
          <div className="flex justify-between align-middle mt-16">
            <div className="">
              <div className="w-48 h-6 rounded-lg bg-slate-100 mt-8 ml-2"></div>
              <div className="w-48 h-6 rounded-lg bg-slate-100 mt-8 ml-2"></div>
              <div className="w-48 h-6 rounded-lg bg-slate-100 mt-8 ml-2"></div>
            </div>
            <div className="rounded-full border-2 border-white w-48 h-48 object-cover bg-gray-100" />
          </div>
        </div>
      </div>

      {/* Shimmer for the buttons */}
      <div className="flex justify-between px-4 py-6">
        <div className="w-32 h-10 bg-gray-300 rounded-md shimmer-effect"></div>
        <div className="w-32 h-10 bg-gray-300 rounded-md shimmer-effect"></div>
      </div>
    </div>
  );
};

export default Shimmer;
