import OtpInput from "react-otp-input";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import React from "react";
import Loader from "../components/Loader";
export const Signup = () => {
  const { values, handleChange, handleSubmit, handleBlur, setFieldValue } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        otp: "",
        referedBy: "",
      },
      onSubmit: (values) => {
        console.log(values);
        handleSignup();
      },
    });
    const sendEmail = async () => {
      try {
        setShowLoader(true)
        const { data, status } = await axios.post(
          `${process.env.VITE_SERVER_URL}/users/sendemail`,
          {
            email: values.email,
          }
        );
        console.log(data);
        if (status === 200) {
          return toast.success("Email sent successfully");
        }
      } catch (error) {
        console.log(error);
        
        toast.error(
          (error as any).response.data.message || (error as any).message
        );
      }
      finally {
        setShowLoader(false);
      }
    };
    const [showLoader, setShowLoader] = React.useState(false);
    const handleSignup = async () => {
      if (!values.email || !values.password || !values.otp){
        return toast.error("Please fill all the fields");
      }
      try {
        setShowLoader(true)
        const { data, status } = await axios.post(
          `${process.env.VITE_SERVER_URL}/users`,
          {
            email: values.email,
            password: values.password,
            otp: values.otp,
            referedBy: values.referedBy,
          }
        );
        console.log(data);
        if (status === 200) {
          window.location.href = "/login";
          return toast.success("Account created successfull");
        }
      } catch (error) {
        console.log(error);
        toast.error(
          (error as any).response.data.message || (error as any).message
        );
      } 
      finally {
        setShowLoader(false);
      }
      }
  return (
    <div className="bg-[#070709] relative rounded-none">
      {
        showLoader && <Loader />
      }
      <section className="z-10">
        <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            <img
              src="/assets/randomz.png"
              alt="logo"
              width={120}
              className="my-2"
            />
          </a>
          <div className="w-full md:bg-[#0A0D19] bg-[#111526]  z-10 my-4 rounded-lg  md:mt-0 sm:max-w-2xl lg:max-w-3xl xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-xl">
                Sign up to create your account{" "}
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="flex gap-4 w-full items-start justify-center flex-col">
                  <div className="flex flex-col w-full ">
                    <div className="flex justify-between w-full flex-col md:flex-row">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        E-Mail
                      </label>
                      <div className="text-white flex gap-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M11 7H9V5H11M11 15H9V9H11M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                            fill="#EE3C99"
                          />
                        </svg>{" "}
                        <p className="text-sm my-2">
                          OTP Will be sent to your email
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 flex-col md:flex-row">
                      <input
                        type="email"
                        name="email"
                        required
                        id="email"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="name@company.com"
                      />{" "}
                      <button
                        onClick={sendEmail}
                        disabled={!values.email}
                        type="button"
                        className="text-white disabled:cursor-not-allowed max-w-[160px] h-full  bg-[#C0317C] hover:bg-[#d35898] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 w-full"
                      >
                        Verify email
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    type="password"
                    name="password"
                    required
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Enter Otp
                  </label>
                  <OtpInput
                    value={values.otp}
                    onChange={(value) => {
                      setFieldValue("otp", value);
                    }}
                    // onChange={setOtp}
                    inputStyle={{
                      width: "2.5rem",
                      height: "2.5rem",
                      fontSize: "1.5rem",
                      color: "#000",
                      borderRadius: 4,
                      display: "grid",
                      gridTemplateColumns: "repeat(4,1fr)",
                    }}
                    placeholder="----"
                    numInputs={4}
                    renderSeparator={<span className="m-3">-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
                <div>
                  <label
                    htmlFor="referedBy"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Enter referral code here
                  </label>
                  <input
                    type="text"
                    name="referedBy"
                    onChange={handleChange}
                    value={values.referedBy}
                    onBlur={handleBlur}
                    id="referedBy"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />
                </div>
                <p className="text-sm font-light text-white text-left underline">
                  Already registered? {""}
                  <Link
                    to={"/login"}
                    className="font-medium text-[#C0317C] hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-[#C0317C]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div
        className="absolute inset-0 md:translate-x-full rotate-180"
        style={{
          content: "",
          position: "absolute",
          zIndex: "0",
          top: 0,
          right: 0,
          width: "50%",
          height: "80%",
          borderRadius: "900px",
          background:
            "linear-gradient(180deg, rgba(167, 36, 104, 0.80) 0%, rgba(14, 37, 157, 0.80) 100%)",
          filter: "blur(250px)",
        }}
      ></div>
    </div>
  );
};