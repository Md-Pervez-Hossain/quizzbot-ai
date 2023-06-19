const Transaction = () => {
  return (
    <section className="border-2 border-[#EEE]  rounded-xl py-5 mt-5 mr-8">
      {/* Membership Text */}
      <h1 className="text-center text-3xl font-bold">Transaction</h1>

      {/* Current Plan section */}
      <div className="px-10 lg:mt-0 md:mt-0 mt-5">
        <h1 className="lg:text-xl md:text-xl text-lg lg:text-left md:text-left text-center">
          Current Plan
        </h1>

        {/* Current Plan div style */}
        <div className="bg-gradient-to-r from-[#FC495F] to-[#FFC371] bg-size-200 lg:flex md:flex justify-between rounded-xl px-6 py-3 mt-2 text-white font-bold hidden">
          <p>Name</p>
          <p>Payment Method</p>
          <p className="mr-10">Email</p>
          <p>Transaction ID</p>
          <p>Payment Date</p>
        </div>

        {/* Current Plan Data div style */}
        <div className="bg-gray-100 rounded-lg py-3 px-7 mt-4">
          {/* Current Plan Data */}
          <div className=" lg:flex md:flex justify-between lg:space-y-0 md:space-y-0 space-y-5">
            <p className="">Trial</p>
            <p className="lg:ml-5 md:ml-5 ml-0">Bkash</p>
            <p className="">p@gmail.com</p>
            <p className="">kdowqpvmsl</p>
            <p className="">31/12/1996</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transaction;
