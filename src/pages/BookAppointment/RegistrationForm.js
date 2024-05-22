import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const gender = ["Nam", "Nữ", "Khác"];
  const onDoctorChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const handleOnChangeFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleOnChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleOnChangeDate = (event) => {
    setDate(event.target.value);
  };
  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChangeContent = (event) => {
    setContent(event.target.value);
  };
  const handleOnChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  let navigate = useNavigate();
  const routeChange = async () => {
    let path = `/thankyou`;
    navigate(path);
  };

  return (
    <>
      <div className="form-booking my-20 flex justify-center  ">
        <div className="shadow bg-white-200 w-5/6  shadow shadow-2xl ">
          <div>
            <div>
              <b className="title text-2xl flex justify-center uppercase">
                đặt lịch khám tại đây
              </b>
              <div>
                <p className="text-gray-500 mt-0 text-center">
                  Quý khách vui lòng điền đầy đủ thông tin. Chúng tôi sẽ liên hệ
                  lại sớm nhất
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <form
                action=""
                className="flex justify-center bg-white-300 my-10  w-5/6   mt-10 flex   "
              >
                <div>
                  <div className=" w-full grid gap-4 grid-cols-2  ">
                    <label for="name" className="block">
                      <span class=" text-sm font-medium text-slate-700">
                        Họ và Tên <i style={{ color: "red" }}>(*)</i>
                      </span>
                      <br />
                      <input
                        id="name"
                        type="text"
                        value={fullName}
                        onChange={(event) => handleOnChangeFullName(event)}
                        required
                        class="border-2 w-full  border-gray-400 pl-3 py-3 rounded-md"
                      />
                    </label>

                    <label for="phone" className="block">
                      <span class="block text-sm font-medium text-slate-700 mb-1">
                        Số điện thoại <i style={{ color: "red" }}>(*)</i>
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(event) => handleOnChangePhone(event)}
                        required
                        class="border-2 w-full  border-gray-400 pl-3 py-3 rounded-md"
                      />
                    </label>
                    <label for="email" className="inline">
                      <span class="block text-sm font-medium text-slate-700">
                        Email <i style={{ color: "red" }}>(*)</i>
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => handleOnChangeEmail(event)}
                        required
                        class="border-2 w-full  border-gray-400 pl-3 py-3 rounded-md"
                      />
                    </label>

                    <label for="address" className=" inline">
                      <span class="block text-sm font-medium text-slate-700">
                        Địa chỉ <i style={{ color: "red" }}>(*)</i>
                      </span>
                      <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(event) => handleOnChangeAddress(event)}
                        required
                        class="border-2 w-full  border-gray-400 pl-3 py-3 rounded-md"
                      />
                    </label>
                    <label for="date" className=" inline">
                      <span class="block text-sm font-medium text-slate-700">
                        Ngày sinh <i style={{ color: "red" }}>(*)</i>
                      </span>
                      <input
                        type="date"
                        value={date}
                        onChange={(event) => handleOnChangeDate(event)}
                        required
                        class="border-2 w-full  border-gray-400 pl-3 py-3 rounded-md"
                      />
                    </label>
                    <label htmlFor="gender">
                      <span class="block text-sm font-medium text-slate-700 ">
                        Giới tính
                      </span>
                      <select
                        onChange={onDoctorChangeHandler}
                        className="border-2 w-full  textarea1 pl-3 py-4 rounded-md"
                      >
                        {gender.map((gender, index) => {
                          return <option key={index}>{gender}</option>;
                        })}
                      </select>
                    </label>
                  </div>
                  <label htmlFor="content">
                    <span class="block text-sm font-medium text-slate-700 flex justify-center my-4">
                      Triệu chứng bệnh
                    </span>
                    <textarea
                      value={content}
                      onChange={(event) => handleOnChangeContent(event)}
                      className=" w-full h-40 pl-3 pt-3  textarea1 rounded-md"
                    ></textarea>
                  </label>
                  <div className="flex justify-center ">
                    <button
                      type="submit"
                      value={(e) => onSubmit(e)}
                      onClick={routeChange}
                      class=" rounded-md border-solid border-2 border-blue-500 text-blue-500 bg-white-600 hover:bg-blue-500 hover:text-white text-sm   px-4 py-2.5 text-center uppercase "
                    >
                      Đặt lịch khám
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegistrationForm;
