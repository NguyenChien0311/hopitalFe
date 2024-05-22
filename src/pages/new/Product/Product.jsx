import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import TransgenderIcon from "@mui/icons-material/Transgender";
import packageServiceData from "./Data";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <>
      <div className="w-[92%] h-full m-auto">
        <div className="leading-10 text-4xl py-8">Dịch vụ nổi bật</div>

        <div className="flex justify-center">
          {packageServiceData.map((product) => {
            return (
              <div
                className="grid gap-4 grid-cols-4 grid-rows-1"
                key={product.id}
              >
                <div className="border-gray w-[300.69px] h-full rounded-xl border border-gray-200 hover:shadow-xl hover:shadow-blue-300">
                  <div className="p-4">
                    <img
                      src={product.img}
                      alt="ss"
                      className="w-[316px] h-[238px]"
                    />
                    <br />
                    <p className="mt-0 mb-4">{product.title}</p>
                    <p>
                      <span className="text-red-500 mr-5">{product.price}</span>
                      <span>
                        <del>519.000đ</del>
                      </span>
                    </p>
                    <div className="text-xs">
                      <span>
                        <RoomIcon />{" "}
                        <span className="text-red-500 mr-2">
                          {product.address}
                        </span>
                      </span>
                      <span>
                        <TransgenderIcon />
                        <span className="text-red-500 ">Tat ca</span>
                      </span>
                    </div>
                    <div className="grid gap-2 grid-cols-2 grid-rows-1 mt-7 w-[90%] m-auto">
                      <button className="rounded-3xl bg-blue-500 cursor-pointer py-1 px-2 w-[100%] h-auto ">
                        <b className="leading-10 text-white"> Đặt lịch </b>
                      </button>
                      <button className="rounded-3xl bg-red-500 cursor-pointer py-1 px-2 w-[100%] h-auto ">
                        <b className="leading-10 text-white">
                          <a href={product.href}>Xem thêm</a>
                        </b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Product;
