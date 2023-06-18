const MemberShip = () => {
  return (
    <section className="min-h-screen shadow-2xl bg-white rounded-lg mx-5">
      {/* Membership Text */}
      <h1 className="text-center text-3xl mt-10 pt-10 font-bold">Membership</h1>

      {/* Current Plan section */}
      <div className="px-10">
        <h1 className="text-2xl">Current Plan</h1>

        {/* Current Plan div style */}
        <div className="bg-gradient-to-r from-[#FC495F] to-[#FFC371] bg-size-200 flex justify-between rounded-xl px-6 py-3 mt-2 text-white font-bold">
          <p>Membership</p>
          <p>Payment Method</p>
          <p>Start Date</p>
          <p className="mr-36">End Date</p>
        </div>

        {/* Current Plan Data div style */}
        <div className="flex">
          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            {/* Current Plan Data */}
            <div className="flex justify-between">
              <p className="ml-9">Trial</p>
              <p className="ml-[17.8rem]">One Time</p>
              <p className="ml-[15.5rem]">32/12/1996</p>
              <p className="ml-[13.2rem]">31/12/1996</p>
            </div>
          </div>

          {/* Change Plan button */}
          <div className="flex justify-center mt-4 ml-3">
            <button className="rounded-lg px-4 bg-gradient-to-r from-[#FC495F] to-[#FFC371] text-white">
              Change Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberShip;
