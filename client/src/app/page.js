import Divider from "@/components/Divider";
import LoginForm from "@/components/LoginForm";
import SocialMediaLogin from "@/components/SocialMediaLogin";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-col justify-center items-center p-8 bg-white w-1/2 lg:px-40">
        <div className="flex justify-start w-full mb-10">
          <img src="./assets/logo.png" alt="" className="w-48" />
        </div>
        <LoginForm />
      </div>
      <div className="bg-gradient-to-tr from-[#FC495F] from-62%  to-[#FFC371] to-38% w-1/2"></div>
    </main>
  );
}
