"use client";
import { IoDocumentsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SavedQuestionTable = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };
  const handleDelete = () => {
    window.alert("This row data has been deleted!");
  };
  return (
    <div>
      <section class="container px-6 mx-auto mt-16">
        <div class="flex items-center gap-x-3 mx-8">
          <h2 class="text-xl font-medium text-gray-800 ">All Documents</h2>

          <IoDocumentsOutline className="text-[#FC495F]" />
        </div>

        <div class="flex flex-col mt-6 mx-4">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border-2 border-[#eee]  md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 ">
                  <thead class="bg-gradient-to-r from-[#FC495F] to-[#FFC371] bg-size-200  ">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-white
                         "
                      >
                        <div class="flex items-center gap-x-3">
                          <span>Document</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-white "
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Content</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-white "
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Date</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-white "
                      >
                        Action
                      </th>

                      <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200  ">
                    <tr>
                      <td class="px-4 py-4 text-sm text-gray-900  whitespace-nowrap">
                        c++
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-900  whitespace-nowrap">
                        <p className="ml-8">
                          Each kilogram of pulp can produce 1000/100 = 10 no...
                        </p>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          31 December 2022
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-6">
                          <Link href="/saved-questions/1">
                            <button
                              //   onClick={handleClick}
                              class="text-[#f9a544] transition-colors 
                          duration-200  focus:outline-none mt-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </button>
                          </Link>
                          <button
                            onClick={handleDelete}
                            class="text-[#FC495F] transition-colors  duration-200
                            focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavedQuestionTable;
