"use client";
import { useContext, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { AuthContext } from "@/context/AuthProvider";
import LoaderSpinner from "./Loader/LoaderSpinner";

const AccountSetting = () => {
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const updateProfile = () => {
    const { userInfo } = data;
    setLoading(true);
    updateUser(userInfo)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  };
  return (
    <div className="">
      <section class="max-w-4xl p-6 lg:px-32 lg:py-16 mx-auto bg-white rounded-md shadow-lg  mt-20 mb-20">
        <h2 class="text-3xl mb-5 font-semibold text-gray-700 capitalize  text-center">
          Account settings
        </h2>

        <form>
          <div class="grid grid-cols-1 gap-10 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 font-bold text-xl" for="username">
                Avatar
              </label>
              <div class="mb-3">
                <input
                  class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border 
                  border-solid border-neutral-200 bg-clip-padding px-4 py-1 mt-2 font-normal
                   leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 
                   file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0
                    file:border-solid file:border-inherit file:bg-gradient-to-r from-[#FC495F] to-[#FFC371] file:px-3 file:py-[0.12rem]
                     file:text-white file:transition file:duration-150
                      file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]
                       hover:file:bg-neutral-200 focus:border-[#FC495F] to-[#FFC371]
                  focus:ring-[#FC495F] focus:ring-opacity-40 
                  focus:outline-none focus:ring"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </div>

            <div>
              <label class="text-gray-700 " for="userName">
                Username
              </label>
              <input
                id="text"
                type="text"
                placeholder="#john123"
                class=" pl-4 placeholder:text-xs block w-full px-4 py-2 mt-3 text-gray-700
                 bg-white border border-gray-200 rounded-md  focus:border-[#FC495F] to-[#FFC371]
                  focus:ring-[#FC495F] focus:ring-opacity-40 
                  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 " for="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                class=" pl-4 placeholder:text-xs block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md  focus:border-[#FC495F] to-[#FFC371]
                  focus:ring-[#FC495F] focus:ring-opacity-40
                    focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-700 " for="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="min 8 characters"
                class=" pl-4 placeholder:text-xs block w-full px-4 py-2 mt-2
                 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#FC495F] to-[#FFC371]
                  focus:ring-[#FC495F]
                   focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          {/* {loading ? (
            <PrimaryButton loading={loading}>
              <LoaderSpinner /> Loading
            </PrimaryButton>
          ) : (
            <PrimaryButton funq={updateProfile}>Log In</PrimaryButton>
          )} */}

          <div class="flex justify-end mt-10">
            <button
              class="px-8 py-3 leading-5 w-full text-white transition-colors duration-300 transform
             bg-gradient-to-r from-[#FC495F] to-[#FFC371] rounded-md  focus:outline-none focus:bg-gray-600"
            >
              Update Profile
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AccountSetting;
