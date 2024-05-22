import { Card, Space } from "antd";

import { Outlet, Link, useNavigate } from "react-router-dom";
import React from "react";
const BKHopital = () => {
  return (
    <>
      <img
        src="https://booking.medon.vn/images/banner/banner_hospital.svg"
        alt=""
      />
      <div className="w-[65%] m-auto">
        <Space direction="vertical" size={16}>
          <Card
            title="Thông tin chung"
            style={{
              width: 1000,
            }}
            className="border-2 border-black border-solid"
          >
            <div class="flex items-center justify-center p-12">
              <div class="mx-auto w-full max-w-[550px]">
                <form>
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label
                          for="fName"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Họ và Tên
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="Nhập họ tên của bạn"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-4">
                        <label
                          for="Phone"
                          class="mb-1 block text-base font-medium text-[#07074D]"
                        >
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          name="Phone"
                          id="Phone"
                          placeholder="Nhập vào Số điện thoại"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label
                          for="birthday"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Ngày Sinh
                        </label>
                        <input
                          type="date"
                          name="birthday"
                          id="birthday"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label
                          for="time"
                          class="mb-3 mt-2 block text-base font-medium text-[#07074D]"
                        >
                          Ngày hẹn dến khám
                        </label>
                        <input
                          type="time"
                          name="time"
                          id="time"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-5">
                    <label
                      for="guest"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Triệu chúng bạn đang gặp phải ?
                    </label>
                    <textarea
                      type="text"
                      name="guest"
                      id="guest"
                      placeholder="5"
                      min="0"
                      class="w-full h-auto appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div>
                    <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </Space>
      </div>

      <div className="w-[65%] m-auto"></div>
    </>
  );
};
export default BKHopital;
