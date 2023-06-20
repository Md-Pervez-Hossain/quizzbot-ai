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

        <div className="lg:flex md:flex md:justify-between lg:justify-between items-center ">
          {/* Current Plan Data div style */}
          <div className="bg-gray-100 rounded-lg p-4 w-full mt-4">
            {/* Current Plan Data */}
            <div className="lg:flex md:flex lg:justify-between  lg:items-center space-y-3 lg:space-y-0 md:space-y-0  ">
              <p className="ml-8">Trial</p>
              <p>One Time</p>
              <p>32/12/1996</p>
              <p>31/12/1996</p>
              <button className="rounded-lg px-2 py-[1.1rem] mt-[0.90rem] bg-gradient-to-r from-[#FC495F] to-[#FFC371] text-white text-sm">
                Change Plan
              </button>
            </div>
          </div>

          {/* Change Plan button */}
        </div>
      </div>
    </section>
  );
};

export default MemberShip;
