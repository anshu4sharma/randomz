import { useEffect, useState } from "react";
import Presale from "./Presale";
import axios from "axios";
import TransactionTable from "./TransactionTable";
import SaleNavbar from "./SaleNavbar";
import Purchase from "./Purchase";
import { useFormik } from "formik";
import toast from "react-hot-toast";
const Sale = () => {
  const [show, setShow] = useState(false);
  const [leftTokens, setLeftTokens] = useState(0);
  const [userAllocation, setUserAllocation] = useState(0);
  const [referalLink] = useState("https://randomz.com/E620001");
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const closeModal = () => {
    setShowTransactionModal(false);
  };
  const openWalletConnect = () => {
    setShowTransactionModal(true);
  };
  const { values, handleBlur, handleChange, handleSubmit, handleReset } =
    useFormik({
      initialValues: {
        BNB: "",
      },
      onSubmit: () => {
        handle_purchase();
      },
    });

  const fetchUserAllocation = async () => {
    try {
      const { data, status } = await axios.get(
        `${process.env.VITE_SERVER_URL}/users/gettotal`,
        {
          headers: {
            "auth-token": JSON.parse((localStorage as any).getItem("token")),
          },
        }
      );
      if (status === 200) {
        return setUserAllocation(data.total.toFixed());
      } else {
        setUserAllocation(0);
      }
    } catch (error) {
      if ((error as any).response.status == 404) {
        localStorage.removeItem("token");
        return (window.location.href = "/login");
      }
    }
  };

  const purchaseRequest = async () => {
    try {
      const { status } = await axios.post(
        `${process.env.VITE_SERVER_URL}/users/addTransaction`,
        {
          txid: "asdasd12312321s",
          account: "0asdsad213213",
          amount: (values as any)?.BNB * 216.65 * 100,
        },
        {
          headers: {
            "auth-token": JSON.parse((localStorage as any).getItem("token")),
          },
        }
      );
      if (status == 200) {
        handleReset(null);
        openWalletConnect();
        fetchUserAllocation();
        fetchLeftTokens();
        return toast.success("Transaction successful");
      }
    } catch (error) {
      toast.error("Transaction failed");
    }
  };
  const handle_purchase = async () => {
    // if ((values as any)?.BNB * 216.65 * 100 < 10000) {
    //   return toast.error("Minimum purchase amount is 10000 RDZ");
    // }
    // if ((values as any)?.BNB * 216.65 * 100 > 50000) {
    //   return toast.error("Maximum purchase amount is 50000 RDZ");
    // } else {
      // }
      purchaseRequest();
  };
  const fetchLeftTokens = async () => {
    const { data, status } = await axios.get(
      `${process.env.VITE_SERVER_URL}/users/getallamount`,
      {
        headers: {
          "auth-token": JSON.parse((localStorage as any).getItem("token")),
        },
      }
    );
    if (status === 200) {
      return setLeftTokens(data.total.toFixed());
    } else {
      setLeftTokens(0);
    }
  };
  useEffect(() => {
    Promise.allSettled([fetchUserAllocation(), fetchLeftTokens()]);
  }, []);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referalLink);
    toast.success("Copied to clipboard");
  };
  return (
    <div className="grid bg-[#070709] relative grid-cols-1 items-center md:flex md:flex-col justify-center p-4  gap-4">
      <SaleNavbar />
      <Presale />
      <div className="z-10 flex  items-end gap-4 flex-col md:flex-row w-full max-w-3xl justify-center md:justify-around">
        <div className=" flex flex-col gap-3 md:p-4 w-full">
          <div className="flex w-full justify-between text-sm items-center text-left rounded-lg shadow-orange-50 bg-opacity-20 backdrop-blur-sm  salecard p-4  gap-2">
            <p className="text-white  text-left  font-semibold break-all">
              Your allocation
            </p>
            <div className="flex gap-4 items-center text-white">
              {userAllocation}
              <img src="/assets/logo.svg" width={25} height={10} />
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-orange-50  bg-[#1C2129] bg-opacity-20 backdrop-blur-sm salecard  items-start justify-center text-center  p-6  md:p-8 gap-2">
            <div className="flex items-center gap-4 justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.2 8.4H10.8V6H13.2M13.2 18H10.8V10.8H13.2M12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0Z"
                  fill="#EE3C99"
                />
              </svg>
              <h1 className="text-xl font-medium tracking-wider text-[#EE3C99]">
                Sale information
              </h1>
            </div>
            <div className="flex flex-col text-left gap-4 my-4">
              <p className="text-white  font-medium text-sm">
                Token Total Supply: 100,000,000
              </p>
              <p className="text-white  font-medium text-sm">
                Presale Allocation: 10,000,000 (10%)
              </p>
              <p className="text-white  font-medium text-sm">
                Presale Hardcap: 30 BNB
              </p>
              <p className="text-white  font-medium text-sm">
                Token Price: 1 RDZ = 0.005 BNB
              </p>
              <p className="text-white  font-medium text-sm">
                Minumum Buy: 10000 RDZ
              </p>
              <p className="text-white  font-medium text-sm">
                Maximum Buy: 50000 RDZ
              </p>
              <p className="text-white  font-medium text-sm">
                Softcap: 50,000 BNB
              </p>
              <p className="text-white  font-medium text-sm">
                Total BNB Collected
              </p>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full">
                <p className="text-white text-sm font-medium">
                  {leftTokens ? leftTokens : 0} RDZ
                </p>
                <p className="text-white text-sm font-medium">2,00,000 RDZ</p>
              </div>
              <div className="w-full rounded-full h-2.5 bg-gray-700">
                <div
                  className="bg-[#14BE81] h-2.5 rounded-full"
                  style={{
                    width: `${(leftTokens / 2e5) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-4 justify-center">
          <div className="flex w-full flex-col md:flex-row justify-between  text-sm items-center text-left rounded-lg shadow-orange-50 bg-opacity-20 backdrop-blur-sm  salecard  gap-2 ">
            <p className="text-white text-sm text-left p-4   font-normal ">
              {referalLink}
            </p>
            <button
              onClick={copyToClipboard}
              className="flex text-center justify-center  bg-[#EE3C99] rounded h-full p-4 font-bold  w-full gap-4 items-center text-white"
            >
              Copy Link
            </button>
          </div>{" "}
          <form
            onSubmit={handleSubmit}
            className="flex w-full  flex-col rounded-lg shadow-orange-50  items-start text-center  bg-opacity-20 backdrop-blur-sm salecard p-6 m-5  md:p-8 gap-2"
          >
            <h1 className="text-xl font-black tracking-wider my-2 text-[#EE3C99]">
              Buy RDZ tokens
            </h1>
            <h1 className="text-white text-sm my-2">
              {/* Available BNB Balance : {!!balance ? balance : 0} BNB */}
              Available BNB Balance : 0 BNB
            </h1>
            {show ? (
              <div className="flex w-full  bg-[#172042] rounded-md salecard">
                <input
                  type="number"
                  name="RDZ"
                  autoComplete="off"
                  disabled
                  value={(values as any)?.BNB * 216.65 * 100}
                  placeholder="You will get"
                  className="bg-[#172042] outline-none placeholder:text-sm placeholder:text-white no-spinners placeholder-shown:text-white text-white p-3 md:p-4 w-full"
                />
                <div className="flex bg-[#172042] px-4">
                  <img
                    src={"/assets/logo.svg"}
                    width={30}
                    height={30}
                    alt="notfound"
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex px-2 bg-[#172042] items-center justify-center">
                  {" "}
                  <p className="text-white text-sm">RDZ</p>
                </div>
              </div>
            ) : (
              <div className="flex w-full bg-[#172042] rounded-md salecard">
                <input
                  type="number"
                  name="BNB"
                  value={values.BNB}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  placeholder="Enter amount in BNB here"
                  className={
                    "bg-[#172042] outline-none placeholder:text-sm no-spinners placeholder:text-white placeholder-shown:text-white text-white p-3 md:p-4 w-full "
                  }
                />

                <div className="flex bg-[#172042] px-4">
                  <img
                    src={"/assets/bnb.svg"}
                    width={30}
                    height={30}
                    alt="notfound"
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex px-2 bg-[#172042] items-center justify-center">
                  {" "}
                  <span className="text-white text-sm">BNB</span>
                </div>
              </div>
            )}
            <div
              className="w-full justify-center flex my-2 cursor-pointer"
              onClick={() => {
                setShow(!show);
              }}
            >
              <img
                src={"/assets/below.svg"}
                width={20}
                height={10}
                alt="below"
              />
            </div>
            {!show ? (
              <div className="flex w-full  bg-[#172042] rounded-md">
                <input
                  type="number"
                  disabled
                  name="RDZ"
                  autoComplete="off"
                  value={(values as any)?.BNB * 216.65 * 100}
                  placeholder="You will get"
                  className="bg-[#172042] outline-none placeholder:text-sm placeholder:text-white no-spinners placeholder-shown:text-white text-white p-3 md:p-4 w-full"
                />
                <div className="flex bg-[#172042] px-4">
                  <img
                    src={"/assets/logo.svg"}
                    width={30}
                    height={30}
                    alt="notfound"
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex px-2 bg-[#172042] items-center justify-center">
                  {" "}
                  <p className="text-white text-sm">RDZ</p>
                </div>
              </div>
            ) : (
              <div className="flex w-full bg-[#172042] rounded-md">
                <input
                  type="number"
                  name="BNB"
                  value={values.BNB}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  placeholder="Enter amount in BNB here"
                  className={
                    "bg-[#172042] outline-none  no-spinners placeholder:text-sm placeholder:text-white placeholder-shown:text-white text-white p-3 md:p-4 w-full "
                  }
                />
                <div className="flex bg-[#172042] px-4 items-center">
                  <img
                    src={"/assets/bnb.svg"}
                    width={30}
                    height={30}
                    alt="notfound"
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex px-2 bg-[#172042] items-center justify-center">
                  <span className="text-white text-sm">BNBA</span>
                </div>
              </div>
            )}
            {true ? (
              <button
                type="submit"
                placeholder="Timer"
                className="bg-[#EE3C99] disabled:cursor-not-allowed flex items-center gap-4 justify-center my-4 buy p-3 md:p-4 w-full text-white rounded-md text-sm "
              >
                Click to purchase
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M19.9926 18.7833L18.9933 8.75C18.9553 8.26013 18.7581 7.80586 18.4422 7.48042C18.1263 7.15499 17.7156 6.98308 17.2946 7H13.997V2.33333L11.9985 0H8.00148L6.00296 2.33333V7H2.7054C2.28435 6.98308 1.87373 7.15499 1.55783 7.48042C1.24192 7.80586 1.04471 8.26013 1.00666 8.75L0.00739484 18.7833C-0.0146326 19.0613 0.0126782 19.3416 0.0876208 19.6067C0.162563 19.8717 0.283527 20.1159 0.442952 20.3239C0.602378 20.532 0.796839 20.6994 1.01418 20.8157C1.23153 20.932 1.46709 20.9948 1.70614 21H18.2939C18.5329 20.9948 18.7685 20.932 18.9858 20.8157C19.2032 20.6994 19.3976 20.532 19.557 20.3239C19.7165 20.1159 19.8374 19.8717 19.9124 19.6067C19.9873 19.3416 20.0146 19.0613 19.9926 18.7833ZM8.00148 2.33333H11.9985V7H8.00148"
                    fill="#ffff"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  console.log("open wallet connect");
                  openWalletConnect();
                }}
                placeholder="Timer"
                className="bg-[#EE3C99] disabled:cursor-not-allowed flex items-center gap-4 justify-center my-4 buy p-3 md:p-4 w-full text-white rounded-md text-sm "
              >
                Connect Wallet
              </button>
            )}
          </form>
          {/*  */}
        </div>
      </div>{" "}
      <div
        className="absolute inset-0 md:translate-x-full"
        style={{
          content: "",
          position: "absolute",
          zIndex: "0",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          borderRadius: "900px",
          background:
            "linear-gradient(180deg, rgba(167, 36, 104, 0.80) 0%, rgba(14, 37, 157, 0.80) 100%)",
          filter: "blur(250px)",
        }}
      ></div>
      <TransactionTable />
      <Purchase isOpen={showTransactionModal} closeModal={closeModal} />
    </div>
  );
};

export default Sale;
