const MemberShip = () => {
  return (
    <section className="min-h-screen shadow-2xl bg-white rounded-lg mx-5">
      {/* Membership Text */}
      <h1 className="text-center text-3xl mt-10 pt-10 font-bold">Membership</h1>

      {/* Current Plan section */}
      <div className="px-10">
        <h1 className="lg:text-2xl md:text-2xl text-lg text-center lg:text-left md:text-left">
          Current Plan
        </h1>

        {/* Current Plan div style */}
        <div className="bg-gradient-to-r from-[#FC495F] to-[#FFC371] bg-size-200 lg:flex md:flex hidden justify-between rounded-xl px-6 py-3 mt-2 text-white font-bold">
          <p>Membership</p>
          <p>Payment Method</p>
          <p className="lg:mr-8 md:mr-8">Start Date</p>
          <p>End Date</p>
        </div>

        {/* Current Plan Data div style */}
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          {/* Current Plan Data */}
          <div className="lg:flex md:flex lg:justify-between md:justify-between space-y-3 lg:space-y-0 md:space-y-0">
            <p className="lg:ml-8 md:ml-8">Trial</p>
            <p className="lg:ml-11 md:ml-11">One Time</p>
            <p>32/12/1996</p>
            <p>31/12/1996</p>
          </div>
        </div>

        {/* Change Plan button */}
        <div className="flex justify-center mt-4">
          <button className="rounded-lg px-4 py-2 bg-gradient-to-r from-[#FC495F] to-[#FFC371] text-white">
            Change Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default MemberShip;
