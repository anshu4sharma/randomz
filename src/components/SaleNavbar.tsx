import { Disclosure } from "@headlessui/react";
import WalletConnect from "./WalletConnect";
import { useState } from "react";
export default function SaleNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <nav className="md:p-6 w-full">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex justify-between z-10">
                <img
                  src="/assets/randomz.png"
                  width={120}
                  height={80}
                  alt={"notfound"}
                  className="md:flex hidden"
                />
                <div className="flex gap-4 z-10">
                  {false ? (
                    <button className="leading-3 hidden md:flex items-center mt-4 py-3 px-4 text-center rounded-md border-[#14E8B6] bg-[#C0317C] border text-white font-bold ">
                      {/* {changeAddress?.slice(0, 6)}...{changeAddress?.slice(-4)} */}
                      asdas das dasdasdasdasd
                    </button>
                  ) : (
                    <button onClick={openModal} className=" w-48 h-12 hidden md:flex items-center px-4 text-center rounded-md  bg-[#C0317C] text-white ">
                      <span>Connect wallet</span>
                      <span className="ml-2">
                        <img
                          src="/assets/connectedwallet.svg"
                          width={14}
                          height={14}
                        />
                      </span>
                    </button>
                  )}
                  {false ? (
                    <button className="leading-3 hidden md:flex items-center mt-4 py-3 px-4 text-center rounded-md border-[#14E8B6] bg-[#C0317C] border text-white font-bold ">
                      {/* {changeAddress?.slice(0, 6)}...{changeAddress?.slice(-4)} */}
                      asdas das dasdasdasdasd
                    </button>
                  ) : (
                    <button className=" w-42 h-12 justify-center  hidden md:flex items-center px-4 text-center rounded-md  bg-[#1C2129] text-white ">
                      Logout{" "}
                      <svg
                        className="ml-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 19 20"
                        fill="none"
                      >
                        <path
                          d="M10.5571 0H8.44643V10.5536H10.5571V0ZM15.6545 2.29012L14.1559 3.78873C15.8867 5.1818 16.8893 7.28196 16.8893 9.49821C16.8893 11.4575 16.111 13.3365 14.7255 14.722C13.3401 16.1074 11.4611 16.8857 9.50179 16.8857C5.42811 16.8857 2.11429 13.593 2.11429 9.49821C2.11429 7.29252 3.11688 5.1818 4.83711 3.77818L3.34906 2.29012C-0.650745 5.68837 -1.13621 11.6828 2.26204 15.6826C5.66029 19.6719 11.6547 20.1573 15.6545 16.7591C17.7863 14.9544 19 12.2949 19 9.49821C19 6.72262 17.7758 4.08423 15.6545 2.29012Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                <div
                  className={`flex md:hidden p-4 h-full items-center justify-between w-full md:w-auto  ${
                    open ? " bg-black " : " bg-transparent "
                  } `}
                >
                  <img
                    src="/assets/randomz.png"
                    width={120}
                    height={80}
                    alt={"notfound"}
                    className="md:hidden"
                  />
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto bg-transparent rounded-md md:hidden text-white focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#EE3C99"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
              </div>
              <Disclosure.Panel
                style={{
                  zIndex: 9999,
                }}
              >
                <div className="flex z-10 flex-col bg-black items-center p-4 justify-start order-2 w-full md:hidden">
                  <div className="flex flex-col gap-4 z-10">
                    {false ? (
                      <button onClick={openModal} className="leading-3 flex items-center mt-4 py-3 px-4 text-center rounded-md  bg-[#C0317C]  text-white font-bold ">
                        {/* {changeAddress?.slice(0, 6)}...{changeAddress?.slice(-4)} */}
                      </button>
                    ) : (
                      <button onClick={openModal} className="leading-3 flex items-center mt-4 py-3 px-4 text-center rounded-md  bg-[#C0317C]  text-white font-bold ">
                        Connect wallet{" "}
                        <span className="ml-2">
                          <img src="/assets/walletconnect.svg" />
                        </span>
                      </button>
                    )}
                    {false ? (
                      <button className="leading-3 flex items-center mt-4 py-3 px-4 text-center rounded-md border-[#14E8B6] bg-[#C0317C] border text-white font-bold ">
                        {/* {changeAddress?.slice(0, 6)}...{changeAddress?.slice(-4)} */}
                        asdas das dasdasdasdasd
                      </button>
                    ) : (
                      <button className="flex w-42 h-12 justify-center  items-center px-4 text-center rounded-md  bg-[#1C2129] text-white ">
                        Logout{" "}
                        <svg
                          className="ml-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 19 20"
                          fill="none"
                        >
                          <path
                            d="M10.5571 0H8.44643V10.5536H10.5571V0ZM15.6545 2.29012L14.1559 3.78873C15.8867 5.1818 16.8893 7.28196 16.8893 9.49821C16.8893 11.4575 16.111 13.3365 14.7255 14.722C13.3401 16.1074 11.4611 16.8857 9.50179 16.8857C5.42811 16.8857 2.11429 13.593 2.11429 9.49821C2.11429 7.29252 3.11688 5.1818 4.83711 3.77818L3.34906 2.29012C-0.650745 5.68837 -1.13621 11.6828 2.26204 15.6826C5.66029 19.6719 11.6547 20.1573 15.6545 16.7591C17.7863 14.9544 19 12.2949 19 9.49821C19 6.72262 17.7758 4.08423 15.6545 2.29012Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
      <WalletConnect closeModal={closeModal} isOpen={isOpen} />
    </>
  );
}
