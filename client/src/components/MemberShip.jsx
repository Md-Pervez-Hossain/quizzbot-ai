import PrimaryButton from "./PrimaryButton";

const MemberShip = () => {
  return (
    <div className="  border-2 border-[#EEE] rounded-xl mt-5 py-5 mr-8 px-10">
      <h1 className="text-center font-bold text-3xl">Membership</h1>
      <h2 className=" text-xl mb-2">Current Plan</h2>

      <table className="min-w-full">
        <thead className="bg-gradient-to-r from-[#FC495F] to-[#FFC371] bg-size-200 text-white ">
          <tr className="">
            <th className="p-3 rounded-l-2xl">Member Ship</th>
            <th className="p-3">Payment Mood</th>
            <th className="p-3">Start Date</th>
            <th className="p-3">End Date</th>
            <th className="p-3 rounded-r-2xl">Status</th>
          </tr>
        </thead>
        <div className="my-4"></div>
        <tbody className="bg-gray-100">
          <tr className=" text-center m-10">
            <td className=" rounded-l-2xl">
              <p>Trail</p>
            </td>
            <td className="">
              <p>One Time</p>
            </td>
            <td className="">
              <p>20/12/1996</p>
            </td>
            <td className="">
              <p>31/12/1996</p>
            </td>
            <td className=" rounded-r-2xl">
              <PrimaryButton>Change Plan</PrimaryButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MemberShip;
