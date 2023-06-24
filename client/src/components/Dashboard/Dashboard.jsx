import BarChart from "./BarChart";
import RecentOrders from "./RecentOrders";
import TopCards from "./TopCards";

const Dashboard = () => {
  return (
    <div>
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4 mb-5">
        <BarChart />
        <RecentOrders />
      </div>
    </div>
  );
};

export default Dashboard;
