const MemberShip = () => {
  return (
    <section className="border-2 border-[#EEE] rounded-xl mr-8 py-5 mt-5">
      {/* Membership Text */}
      <h1 className="text-center text-3xl  font-bold">Membership</h1>

      {/* Current Plan section */}
      <div className="px-10">
        <h1 className="lg:text-xl md:text-xl text-lg text-center lg:text-left md:text-left">
          Current Plan
        </h1>

        {/* Current Plan div style */}
        <div className="bg-gradient-to-r from-[#FC495F] to-[#FFC371] bg-size-200 lg:flex md:flex hidden justify-between rounded-xl px-6 py-3 mt-2 text-white font-bold">
          <p>Membership</p>
          <p>Payment Method</p>
          <p className="lg:-ml-10">Start Date</p>
          <p>End Date</p>
          <p>Action</p>
        </div>

        <div className="lg:flex lg:justify-between items-center">
          {/* Current Plan Data div style */}
          <div className="bg-gray-100 rounded-lg p-4 mt-4">
            {/* Current Plan Data */}
            <div className="lg:flex md:flex lg:justify-around md:justify-between space-y-3 lg:space-y-0 md:space-y-0 lg:w-[51rem] md:w-[26rem] overflow-hidden">
              <p className="lg:-ml-6">Trial</p>
              <p className="lg:ml-[4.7rem]">One Time</p>
              <p>32/12/1996</p>
              <p className="lg:mr-3">31/12/1996</p>
            </div>
          </div>

          {/* Change Plan button */}

          <button className="rounded-lg px-2 py-[1.1rem] mt-[0.90rem] bg-gradient-to-r from-[#FC495F] to-[#FFC371] text-white text-sm">
            Change Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default MemberShip;
