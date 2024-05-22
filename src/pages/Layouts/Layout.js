/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../../assets/Styles/style.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";

const Layout = () => {
  const navigate = useNavigate();
  const Logout = () => {
    let path = `/login`;
    localStorage.clear();
    navigate(path);
  };
  return (
    <>
      <nav>
        <header>
          <div
            id="top-bar"
            class="top-bar-section bg-primary-300 flex flex-wrap justify-between items-center mx-auto py-1 mb-1"
          >
            <div class="container">
              <span class="ml-4">
                <AccessTimeIcon /> Opening Hours: Mon - Tues : 6.00 am - 10.00
                pm, Sunday Closed
              </span>
            </div>
          </div>
          <nav class="bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto ">
              <div class="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="mr-3 h-6 sm:h-9"
                  alt="Flowbite Logo"
                />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  <Link to="/">Hoa Cuc</Link>
                </span>
              </div>
              <div class="flex items-center lg:order-2">
                {localStorage.getItem("Token") != null ? (
                  <button
                    onClick={Logout}
                    class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Logout
                  </button>
                ) : (
                  <button class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                    <Link to="/login">Login</Link>
                  </button>
                )}

                <button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                  <Link to="/bookappointment">Make an Appointment</Link>
                </button>
              </div>
              <div
                class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-12 lg:mt-0">
                  <li
                    class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <Link to="/">Giới thiệu</Link>
                  </li>
                  <li class=" dropdown inline-block block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <Link className="pb-12" to="/Service">
                      Dịch vụ
                    </Link>
                    <ul class="z-10 dropdown-menu fixed hidden text-gray-700 mb-2 mt-8 opacity-75">
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-no-wrap px-2 py-2 uppercase"
                          href="#"
                        >
                          Neurology
                        </a>
                      </li>
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-no-wrap px-2 py-2 uppercase"
                          href="#"
                        >
                          Gastroenterolory
                        </a>
                      </li>
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-no-wrap px-2 py-2 uppercase"
                          href="#"
                        >
                          Orthopaedics
                        </a>
                      </li>
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-no-wrap px-2 py-2 uppercase"
                          href="#"
                        >
                          Kidney transplant
                        </a>
                      </li>
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-no-wrap px-2 py-2 uppercase"
                          href="#"
                        >
                          Cardiac sciences
                        </a>
                      </li>
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-no-wrap px-2 py-2 uppercase"
                          href="#"
                        >
                          Dental care
                        </a>
                      </li>
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-no-wrap px-2 py-2 uppercase"
                          href="#"
                        >
                          Ear nose Throat
                        </a>
                      </li>
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-no-wrap px-2 py-2 uppercase"
                          href="#"
                        >
                          Audiolory
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class=" dropdown inline-block relative block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <Link className="pb-12" to="/Ho_tro">
                      Hướng dẫn
                    </Link>
                    <ul class="z-10 dropdown-menu fixed hidden text-gray-700 mb-2 mt-8 opacity-75">
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500  block whitespace-no-wrap px-2 py-2"
                          href="#"
                        >
                          <Link to="/sreach_booking">Tra cứu kết quả online</Link>
                        </a>
                      </li>
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-nowrap px-2 py-2"
                          href="#"
                        >
                          <Link to="/bookappointment">Đặt lịch khám tại nhà</Link>
                        </a>
                      </li>
                      <li class="lg:hover:text-white">
                        <a
                          class="bg-white hover:bg-primary-500 block whitespace-nowrap px-2 py-2"
                          href="#"
                        >
                          Từ điển bệnh lý chung
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <Link to="/About">About </Link>
                  </li>
                  <li class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    <Link to="/Blogs">Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </nav>

      <Outlet />

      <footer class="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com" class="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="mr-3 h-8"
                  alt="FlowBite Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Bệnh viện đa khoa Hoa Cúc
                </span>
              </a>
              <span class="self-center text-m whitespace-nowrap dark:text-white">
                Trực thuộc Công ty TNHH Công nghệ và Xét nghiệm Y học
              </span>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 ml-8">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Dịch vụ
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li>
                    <a class="hover:underline uppercase" href="#">
                      Neurology
                    </a>
                  </li>
                  <li>
                    <a class="hover:underline uppercase" href="#">
                      Gastroenterolory
                    </a>
                  </li>
                  <li>
                    <a class="hover:underline uppercase" href="#">
                      Orthopaedics
                    </a>
                  </li>
                  <li>
                    <a class="hover:underline uppercase" href="#">
                      Kidney transplant
                    </a>
                  </li>
                  <li>
                    <a class="hover:underline uppercase" href="#">
                      Cardiac sciences
                    </a>
                  </li>
                  <li>
                    <a class="hover:underline uppercase" href="#">
                      Dental care
                    </a>
                  </li>
                  <li>
                    <a class="hover:underline uppercase" href="#">
                      Ear nose Throat
                    </a>
                  </li>
                  <li>
                    <a class="hover:underline uppercase" href="#">
                      Audiolory
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Liên hệ
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4 flex items-center point">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-telephone-outbound mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    19001004
                  </li>
                  <li class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope-at mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                    </svg>
                    medical.sercice@hospital.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com" class="hover:underline">
                HoaCuc™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
