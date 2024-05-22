import React from "react";
import { useNavigate } from "react-router-dom";
const ThankYou = () => {
  let navigate = useNavigate();
  const routeChange = async () => {
    let path = "/";
    navigate(path);
  };
  return (
    <>
      <div className=" flex justify-center  font-bold min-h-full relative my-32">
        <div>
          <div className="text-blue-500 text-8xl uppercase"> Thank you!</div>
          <div className="text-black -ml-7">
            Cảm ơn bạn đã tin dùng dịch vụ của chúng tôi, Chúng tôi sẽ liên hệ
            bạn lại sớm nhất !!
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={routeChange}
              className="bg-blue-500 text-white rounded-md py-4 px-3"
            >
              {"<"} Quay lại trang chủ{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThankYou;
