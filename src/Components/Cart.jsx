
const Cart = ({ classes }) => {
  const { avg_rating, batch_start_date, duration, title, is_free, image, language, category } = classes;


  const currentDate = new Date(Date.now());
const formattedDate = currentDate.toISOString().split('T')[0];
    console.log(formattedDate)

  return (
    <div>
      {/* Apply shimmer-effect class here */}
      <div className="m-6 shadow-2xl rounded-lg sm:w-[600px] lg:w-[450px] h-[470px] border-2 border-gray-200 shimmer-effect">
        {/* Card content */}
        <div className="bg-[#5a62ae] text-white border rounded-lg shadow-md px-4 py-2 flex flex-col h-[370px] relative overflow-hidden">
          <span className="inline-block bg-white text-purple-800 px-2 py-1 rounded-lg text-xs uppercase w-10">
            {is_free ? 'Free' : 'Paid'}
          </span>
          <h3 className="text-2xl font-bold mt-2 text-white">{title}</h3>

          <div className="flex justify-between align-middle mt-4">
            {/* Class Details */}
            <div className="jargon text-lg font-bold mt-2 flex flex-col  justify-center">
              <div className="">
                🗓️ Start Date: <span className="text-sm">{batch_start_date ? batch_start_date: formattedDate}</span>
              </div>
              <div className="">
                🕰️ Start Time: {duration}
              </div>
              <div className="">
                ⌛ Duration: {duration}
              </div>
            </div>

            {/* Instructor Image */}
            <div className="ml-4">
              <img
                src={image}
                alt={title}
                className="rounded-full border-2 border-white w-48 h-48 object-cover object-right"
              />
            </div>
          </div>

          <div className="font-bold text-sm text-gray-700 flex justify-between pt-5">
            <span className="py-1 px-3 rounded-lg bg-white">{category.title}</span>
            <span className="py-1 px-3 rounded-lg bg-white">🌐 {language.language_name}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between px-4 py-6">
          <button className="bg-[#5a62ae] hover:bg-purple-400 text-white px-4 py-2 rounded-md">
            Register Now
          </button>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-[#5a62ae] hover:text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
