import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Service() {
  const scrollContainerRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        console.log(maxScrollLeft);
        if (event.deltaY > 0 && container.scrollLeft < maxScrollLeft) {
          container.scrollLeft += event.deltaY;
          console.log(event.deltaY);

          console.log(container.scrollLeft);
          event.preventDefault();
        } else if (event.deltaY < 0 && container.scrollLeft > 0) {
          console.log(event.deltaY);
          container.scrollLeft += event.deltaY;
          event.preventDefault();
        } else if (container.scrollLeft >= maxScrollLeft) {
          setIsSticky(false);
        }
      }

    };

    const container = scrollContainerRef.current;
    container.addEventListener("wheel", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);
  //--------------------------------------

  const stickyRef = useRef(null);

  const handleScroll = () => {
    if (stickyRef.current) {
      setIsSticky(window.scrollY >= stickyRef.current.offsetTop);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);
  //------------------------------------------

  // const handleHorizontalScroll = () => {
  //   if (scrollContainerRef.current) {
  //     const { scrollLeft, scrollWidth, clientWidth } =
  //       scrollContainerRef.current;
  //     if (scrollLeft + clientWidth >= scrollWidth) {
  //       setIsSticky(false);
  //     }
  //   }
  // };
  // useEffect(() => {
  //   const horizontalScrollContainer = scrollContainerRef.current;

  //   horizontalScrollContainer.addEventListener(
  //     "scroll",
  //     handleHorizontalScroll
  //   );

  //   return () => {
  //     horizontalScrollContainer.removeEventListener(
  //       "scroll",
  //       handleHorizontalScroll
  //     );
  //   };
  // }, []);

  //------------------------------------------------

  return (
    <>
      <section
        ref={stickyRef}
        className={`self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[33px] box-border max-w-full shrink-0 text-left text-lg text-gray-200 font-poppins mq800:pl-10 mq800:pr-10 mq800:box-border  ${isSticky ? "fixed top-0  z-50" : ""
          }`}
      >
        {/* try here */}
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[45px] max-w-full mq800:gap-[22px]">
          {/* services box */}
          <div
            className={
              " flex flex-row items-start justify-start pt-0 px-0 pb-[22px] box-border max-w-full text-base  "
            }
          >
            {/* services */}

            <div className="flex-1 bg-gray-100 flex flex-col items-start justify-start py-[43px] pr-[49px] pl-[63px] box-border gap-[58px] max-w-full z-[1] mq800:gap-[29px] mq800:pt-5 mq800:pb-5 mq800:box-border mq1150:pt-7 mq1150:pb-7 mq1150:box-border mq1350:pl-[31px] mq1350:pr-6 mq1350:box-border ">
              <div className="w-[1279px] h-[1127px] relative bg-gray-100 hidden max-w-full"></div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
                <div className="w-[103px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 border relative tracking-[0.03em] leading-[28px] uppercase font-semibold z-[1]">
                    Services
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full text-31xl">
                  <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit z-[1] mq450:text-11xl mq800:text-21xl">
                    Discover our advanced features for enhanced business
                    efficiency and success.
                  </h1>
                  <h3 className="m-0 w-[1131px] relative text-lg leading-[31px] font-normal font-inherit inline-block max-w-full z-[1]">
                    Unlock growth with our advanced features. Tailored solutions
                    empower success. Revolutionize operations and achieve
                    unparalleled results. Discover our power today.
                  </h3>
                </div>
              </div>
              <div className="self-stretch   flex flex-col items-start justify-start gap-[35px] max-w-full text-9xl text-white mq800:gap-[17px]">
                <div
                  className=" flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1350:flex-wrap cursor-pointer"
                  style={{
                    overflowX: "scroll",
                    overflowY: "hidden",
                    scrollbarWidth: "none",
                  }}
                  ref={scrollContainerRef}
                >
                  {/*--------------- card------------------- */}

                  <div className="h-[162px] w-[388px] bg-mediumslateblue-100 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border gap-[50px] min-w-[388px] max-w-full z-[1] mq450:gap-[25px] mq800:min-w-full mq1350:flex-1">
                    <div className="self-stretch h-[162px] relative bg-mediumslateblue-100 hidden"></div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[27px] box-border max-w-full shrink-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full mq1350:flex-1">
                        <div className="w-[191px] flex flex-row items-start justify-start gap-[15.7px]">
                          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/public/frame-12.svg"
                            />
                          </div>
                          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit z-[1] mq450:text-3xl">
                            Planning
                          </h1>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-sm text-plum">
                          <div className="flex-1 relative inline-block max-w-full z-[1]">
                            Demand & OTB Planning & Inventory planning
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1 h-[194px] relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] [transform:_rotate(90deg)] shrink-0 z-[1]"></div>
                  </div>

                  {/*--------------- card-2--------------------- */}

                  <div className="h-[162px] w-[388px] bg-mediumslateblue-100 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border gap-[50px] min-w-[388px] max-w-full z-[1] mq450:gap-[25px] mq800:min-w-full mq1350:flex-1">
                    <div className="self-stretch h-[162px] relative bg-mediumslateblue-100 hidden"></div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[27px] box-border max-w-full shrink-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full mq1350:flex-1">
                        <div className="w-[191px] flex flex-row items-start justify-start gap-[15.7px]">
                          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/public/frame-12.svg"
                            />
                          </div>
                          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit z-[1] mq450:text-3xl">
                            Planning
                          </h1>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-sm text-plum">
                          <div className="flex-1 relative inline-block max-w-full z-[1]">
                            Demand & OTB Planning & Inventory planning
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1 h-[194px] relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] [transform:_rotate(90deg)] shrink-0 z-[1]"></div>
                  </div>
                  <div className="h-[162px] w-[388px] bg-mediumslateblue-100 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border gap-[50px] min-w-[388px] max-w-full z-[1] mq450:gap-[25px] mq800:min-w-full mq1350:flex-1">
                    <div className="self-stretch h-[162px] relative bg-mediumslateblue-100 hidden"></div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[27px] box-border max-w-full shrink-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full mq1350:flex-1">
                        <div className="w-[191px] flex flex-row items-start justify-start gap-[15.7px]">
                          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/public/frame-12.svg"
                            />
                          </div>
                          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit z-[1] mq450:text-3xl">
                            Planning
                          </h1>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-sm text-plum">
                          <div className="flex-1 relative inline-block max-w-full z-[1]">
                            Demand & OTB Planning & Inventory planning
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1 h-[194px] relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] [transform:_rotate(90deg)] shrink-0 z-[1]"></div>
                  </div>
                  <div className="h-[162px] w-[388px] bg-mediumslateblue-100 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border gap-[50px] min-w-[388px] max-w-full z-[1] mq450:gap-[25px] mq800:min-w-full mq1350:flex-1">
                    <div className="self-stretch h-[162px] relative bg-mediumslateblue-100 hidden"></div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[27px] box-border max-w-full shrink-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full mq1350:flex-1">
                        <div className="w-[191px] flex flex-row items-start justify-start gap-[15.7px]">
                          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/public/frame-12.svg"
                            />
                          </div>
                          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit z-[1] mq450:text-3xl">
                            Planning
                          </h1>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-sm text-plum">
                          <div className="flex-1 relative inline-block max-w-full z-[1]">
                            Demand & OTB Planning & Inventory planning
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1 h-[194px] relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] [transform:_rotate(90deg)] shrink-0 z-[1]"></div>
                  </div>
                  <div className="h-[162px] w-[388px] bg-mediumslateblue-100 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border gap-[50px] min-w-[388px] max-w-full z-[1] mq450:gap-[25px] mq800:min-w-full mq1350:flex-1">
                    <div className="self-stretch h-[162px] relative bg-mediumslateblue-100 hidden"></div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[27px] box-border max-w-full shrink-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full mq1350:flex-1">
                        <div className="w-[191px] flex flex-row items-start justify-start gap-[15.7px]">
                          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/public/frame-12.svg"
                            />
                          </div>
                          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit z-[1] mq450:text-3xl">
                            Planning
                          </h1>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-sm text-plum">
                          <div className="flex-1 relative inline-block max-w-full z-[1]">
                            Demand & OTB Planning & Inventory planning
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1 h-[194px] relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] [transform:_rotate(90deg)] shrink-0 z-[1]"></div>
                  </div>
                  <div className="h-[162px] w-[388px] bg-mediumslateblue-100 flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border gap-[50px] min-w-[388px] max-w-full z-[1] mq450:gap-[25px] mq800:min-w-full mq1350:flex-1">
                    <div className="self-stretch h-[162px] relative bg-mediumslateblue-100 hidden"></div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[25px] pl-[27px] box-border max-w-full shrink-0">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full mq1350:flex-1">
                        <div className="w-[191px] flex flex-row items-start justify-start gap-[15.7px]">
                          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/public/frame-12.svg"
                            />
                          </div>
                          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit z-[1] mq450:text-3xl">
                            Planning
                          </h1>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-sm text-plum">
                          <div className="flex-1 relative inline-block max-w-full z-[1]">
                            Demand & OTB Planning & Inventory planning
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1 h-[194px] relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] [transform:_rotate(90deg)] shrink-0 z-[1]"></div>
                  </div>

                  {/* ------------------card-2-------------------- */}

                  <div className="flex-1 bg-lightsteelblue-200 flex flex-row items-start justify-start pt-9 px-[29px] pb-[35px] box-border gap-[89px] min-w-[504px] max-w-full z-[1] text-gray-200 mq450:gap-[22px] mq800:gap-[44px] mq1150:flex-wrap mq1150:min-w-full">
                    <div className="h-[162px] w-[775px] relative bg-lightsteelblue-200 hidden max-w-full"></div>
                    <div className="w-[291px] flex flex-col items-start justify-start gap-[7px]">
                      <div className="flex flex-row items-start justify-start gap-[21px]">
                        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                          <img
                            className="w-[26px] h-[26px] relative overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/public/frame-13.svg"
                          />
                        </div>
                        <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-3xl">
                          Purchase
                        </h1>
                      </div>
                      <div className="self-stretch relative text-sm text-darkgray z-[1]">
                        Procurement Management & Purchase order tracking
                      </div>
                    </div>
                    <div className="w-[291px] flex flex-col items-start justify-start gap-[7px]">
                      <div className="w-[189px] flex flex-row items-start justify-start py-0 px-px box-border">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/public/frame-14.svg"
                            />
                          </div>
                          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit inline-block min-w-[59px] z-[1] mq450:text-3xl">
                            Sales
                          </h1>
                        </div>
                      </div>
                      <div className="self-stretch relative text-sm text-darkgray z-[1]">
                        Catalogue Management & Sales Order Management
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[114.3px] max-w-full text-3xs-6 text-gray-200 mq800:gap-[29px] mq1350:flex-wrap mq1350:gap-[57px]">
                  <div className="w-[462.7px] flex flex-row items-start justify-start relative min-w-[462.7px] max-w-full mq800:min-w-full mq1350:flex-1">
                    <div className="h-[234.4px] w-[478.7px] absolute !m-[0] right-[-30.3px] bottom-[-28.5px]">
                      <div className="absolute top-[13.5px] left-[16px] rounded-[11.15px] bg-silver-200 w-[462.7px] h-[220.9px] z-[1]"></div>
                      <div className="absolute top-[0px] left-[0px] rounded-[11.15px] bg-lavender-100 w-[462.7px] h-[220.9px] z-[2]"></div>
                    </div>
                    <div className="flex-1 rounded-[11.15px] bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-2 relative gap-[7px] max-w-full z-[3] border-[1.2px] border-solid border-white">
                      <div className="self-stretch h-[222.1px] relative rounded-[11.15px] bg-white box-border hidden z-[0] border-[1.2px] border-solid border-white"></div>
                      <img
                        className="w-[9.7px] h-[7.7px] absolute !m-[0] bottom-[10.5px] left-[185.2px] z-[4]"
                        alt=""
                        src="/public/vector.svg"
                      />

                      <div className="self-stretch h-[192.9px] relative">
                        <div className="absolute top-[0.1px] left-[37.5px] bg-ghostwhite w-[41.9px] h-48 z-[4]"></div>
                        <div className="absolute top-[0px] left-[328.7px] bg-ghostwhite w-[41.9px] h-48 z-[4]"></div>
                        <div className="absolute top-[0px] left-[415.3px] bg-ghostwhite w-[41.9px] h-48 z-[4]"></div>
                        <div className="absolute top-[0.1px] left-[0px] w-full h-full">
                          <div className="absolute top-[0px] left-[106.8px] bg-ghostwhite w-[41.9px] h-48 z-[4]"></div>
                          <div className="absolute top-[0px] left-[176.1px] bg-ghostwhite w-[41.9px] h-48 z-[4]"></div>
                          <div className="absolute top-[0px] left-[242.6px] bg-ghostwhite w-[41.9px] h-48 z-[4]"></div>
                          <img
                            className="absolute top-[75.8px] left-[282.6px] w-[165.3px] h-[55.2px] z-[5]"
                            alt=""
                            src="/public/vector-6.svg"
                          />

                          <div className="absolute top-[54.1px] left-[284.8px] w-[171.5px] h-[101.4px]">
                            <img
                              className="absolute top-[0px] left-[0px] w-full h-full z-[6]"
                              alt=""
                              src="/public/vector-7.svg"
                            />

                            <img
                              className="absolute top-[47.3px] left-[18.1px] w-[20.8px] h-[20.8px] z-[8]"
                              alt=""
                              src="/public/box-1.svg"
                            />
                          </div>
                          <div className="absolute top-[109.7px] left-[283.7px] w-[172.9px] h-[73.3px]">
                            <img
                              className="absolute top-[0px] left-[0px] w-full h-full z-[7]"
                              alt=""
                              src="/public/vector-9.svg"
                            />

                            <img
                              className="absolute top-[20.9px] left-[19.2px] w-[20.8px] h-[20.8px] z-[8]"
                              alt=""
                              src="/public/box-2.svg"
                            />

                            <img
                              className="absolute top-[49.2px] left-[19.2px] w-[20.8px] h-[20.8px] z-[8]"
                              alt=""
                              src="/public/box-3.svg"
                            />
                          </div>
                          <img
                            className="absolute top-[90.2px] left-[1.1px] w-[280.5px] h-[98.9px] z-[5]"
                            alt=""
                            src="/public/vector-4.svg"
                          />

                          <img
                            className="absolute top-[90.2px] left-[1.1px] w-[283.7px] h-[64.6px] z-[8]"
                            alt=""
                            src="/public/vector-5.svg"
                          />

                          <img
                            className="absolute top-[146.5px] left-[0px] w-[283.7px] h-[35.7px] z-[9]"
                            alt=""
                            src="/public/vector-8.svg"
                          />
                        </div>
                        <div className="absolute top-[192.1px] left-[0px] box-border w-[463.5px] h-[0.8px] z-[5] border-t-[0.8px] border-solid border-lavender-200"></div>
                      </div>
                      <div className="w-[341.3px] flex flex-row items-start justify-start py-0 pr-[21px] pl-[20.9px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-end justify-start gap-[17.7px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[6.2px] min-w-[42px]">
                            <img
                              className="h-[10.8px] w-[9.5px] relative min-h-[11px] shrink-0 [debug_commit:1de1738] z-[4]"
                              alt=""
                              src="/public/winter.svg"
                            />

                            <div className="flex-1 relative leading-[10.8px] font-semibold shrink-0 [debug_commit:1de1738] z-[4]">
                              Winter
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[4px] min-w-[42px] min-h-[12px]">
                            <img
                              className="h-[10.8px] w-[10.8px] relative shrink-0 [debug_commit:1de1738] z-[4]"
                              alt=""
                              src="/public/group-4854.svg"
                            />

                            <div className="flex-1 relative leading-[10.4px] font-semibold shrink-0 [debug_commit:1de1738] z-[4]">
                              Summer
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-[4.3px] pl-0 gap-[11.1px]">
                            <div className="flex flex-col items-start justify-start pt-[4.9px] px-0 pb-0">
                              <div className="w-[6.9px] h-[5.4px] relative">
                                <img
                                  className="absolute top-[3.1px] left-[0px] w-[4.6px] h-[2.3px] z-[5]"
                                  alt=""
                                  src="/public/vector-1.svg"
                                />

                                <img
                                  className="absolute top-[0px] left-[0px] w-[6.9px] h-[2.3px] z-[5]"
                                  alt=""
                                  src="/public/vector-2.svg"
                                />
                              </div>
                            </div>
                            <div className="relative leading-[10px] font-semibold inline-block min-w-[40.8px] z-[4]">
                              Autumn
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[4.6px] min-w-[36px]">
                            <img
                              className="h-[10.8px] w-[12.5px] relative min-h-[11px] z-[4]"
                              alt=""
                              src="/public/group-5547.svg"
                            />

                            <div className="flex-1 relative leading-[10px] font-semibold z-[4]">
                              Spring
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[376px] max-w-full text-smi mq800:min-w-full">
                    <div className="flex flex-row items-start justify-start pt-0 px-[3px] pb-2 text-xl">
                      <div className="flex flex-col items-start justify-start gap-[1px]">
                        <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[28px] font-bold font-inherit z-[1] mq450:text-base mq450:leading-[22px]">
                          Demand & OTB Planning
                        </h3>
                        <div className="flex flex-row items-start justify-start py-0 px-px">
                          <div className="h-2 w-[26px] relative bg-mediumslateblue-100 z-[10]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full text-[37px]">
                      <h1 className="m-0 flex-1 relative text-inherit tracking-[0.03em] leading-[28px] font-light font-inherit inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[17px] mq800:text-11xl mq800:leading-[22px]">
                        <p className="[margin-block-start:0] [margin-block-end:20px]">
                          Accurate OTB Forecasting
                        </p>
                        <p className="[margin-block-start:0] [margin-block-end:20px]">
                          with Assistance from
                        </p>
                        <p className="m-0">Proprietary AI</p>
                      </h1>
                    </div>
                    <div className="self-stretch relative leading-[25px] font-medium text-slategray-400 z-[1]">
                      Accurately sense upcoming demand and improve forecasting
                      of Open To Buy Plans, considering: seasons, yearly
                      patterns, past sales patterns, planned markdown, closing
                      inventory, and other anticipated changes.
                    </div>
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[13.9px] max-w-full text-slategray-400">
                      <div className="h-[139.3px] flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0 box-border">
                        <img
                          className="w-[19.4px] flex-1 relative max-h-full z-[1]"
                          loading="lazy"
                          alt=""
                          src="/public/group-282.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[20px] max-w-[calc(100%_-_33px)]">
                        <div className="relative z-[1]">
                          Create independent OTB plans for various categories of
                          products.
                        </div>
                        <div className="relative inline-block max-w-full z-[1]">
                          Considers market variables to meet the demand
                          accurately
                        </div>
                        <div className="relative z-[1]">
                          Review Category-wise Sales forecast
                        </div>
                        <div className="relative leading-[13px] z-[1]">
                          <p className="[margin-block-start:0] [margin-block-end:10px]">
                            Compare if the Sales Trend meets with AI-Predicted
                            demand and
                          </p>
                          <p className="m-0">with manual budgeted plans.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-px text-sm">
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <div className="relative font-medium inline-block min-w-[78px] z-[1]">
                          Know More
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                          <img
                            className="w-[15px] h-[15px] relative overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/public/frame-15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[154.5px] h-[154.5px] relative hidden text-3xs-6 text-black font-open-sans">
                <div className="absolute top-[0px] left-[0px] rounded-[7.96px] bg-whitesmoke-100 w-full h-full"></div>
                <b className="absolute top-[10.4px] left-[11.9px] text-[14.7px]">
                  Forecasted OTB
                </b>
                <div className="absolute h-[17.22%] w-[59.48%] top-[26.41%] right-[32.94%] bottom-[56.38%] left-[7.57%]">
                  <img
                    className="absolute h-[89.47%] w-[21.44%] top-[1.5%] right-[78.56%] bottom-[9.02%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/public/group-4968.svg"
                  />

                  <img
                    className="absolute h-[25.19%] w-[6.09%] top-[59.4%] right-[20.24%] bottom-[15.41%] left-[73.67%] max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/public/arrow@2x.png"
                  />

                  <b className="absolute top-[0px] left-[29.4px] inline-block w-[62.4px] h-[13.3px]">
                    Polo Tshirt
                  </b>
                  <div className="absolute top-[13.3px] left-[29.4px] text-5xs font-semibold text-lightslategray-100 inline-block w-[38.3px] h-[13.3px]">
                    Demand
                  </div>
                </div>
                <div className="absolute h-[17.22%] w-[59.48%] top-[50.61%] right-[32.69%] bottom-[32.17%] left-[7.83%]">
                  <img
                    className="absolute h-[89.47%] w-[21.44%] top-[1.5%] right-[78.56%] bottom-[9.02%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/public/group-4968-1.svg"
                  />

                  <img
                    className="absolute h-[25.19%] w-[6.09%] top-[59.4%] right-[20.13%] bottom-[15.41%] left-[73.78%] max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/public/arrow-1@2x.png"
                  />

                  <b className="absolute top-[0px] left-[29.5px] inline-block w-[62.4px] h-[13.3px]">
                    Polo Tshirt
                  </b>
                  <div className="absolute top-[13.3px] left-[29.5px] text-5xs font-semibold text-lightslategray-100 inline-block w-[38.3px] h-[13.3px]">
                    Demand
                  </div>
                </div>
                <div className="absolute h-[17.22%] w-[64.08%] top-[75.4%] right-[28.09%] bottom-[7.38%] left-[7.83%]">
                  <img
                    className="absolute h-[89.47%] w-[19.9%] top-[1.88%] right-[80.1%] bottom-[8.65%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/public/group-4968-1.svg"
                  />

                  <img
                    className="absolute h-[25.19%] w-[5.66%] top-[59.77%] right-[25.86%] bottom-[15.04%] left-[68.48%] max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/public/arrow-2@2x.png"
                  />

                  <b className="absolute top-[0px] left-[29.1px] inline-block w-[69.9px] h-[13.3px]">
                    Wollen Jacket
                  </b>
                  <div className="absolute top-[13.4px] left-[29.5px] text-5xs font-semibold text-lightslategray-100 inline-block w-[38.3px] h-[13.3px]">
                    Demand
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[44.5px] max-w-full mq800:gap-[22px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full text-center text-base text-lightslategray-200">
              <div className="w-[752.2px] flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                  <div className="w-[114.8px] relative tracking-[0.05em] inline-block shrink-0 min-w-[114.8px] z-[1]">
                    Testimonials
                  </div>
                </div>
                <h1 className="m-0 self-stretch relative text-31xl font-semibold font-inherit text-gray-200 z-[1] mq450:text-11xl mq800:text-21xl">
                  What Our Clients Say...
                </h1>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_22px_74px_-25px_#ced5e1] rounded-smi-5 bg-white box-border flex flex-row flex-wrap items-start justify-center pt-[30px] pb-[38px] pr-11 pl-[78px] gap-[46.7px] max-w-full z-[1] border-[0.8px] border-solid border-white mq800:gap-[23px] mq1350:pl-[39px] mq1350:pr-[22px] mq1350:box-border">
              <div className="h-[234px] w-[1275.9px] relative shadow-[0px_22px_74px_-25px_#ced5e1] rounded-smi-5 bg-white box-border hidden max-w-full border-[0.8px] border-solid border-white"></div>
              <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pr-[26.2px] pl-0">
                <img
                  className="w-24 h-[92px] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/public/vmart-4@2x.png"
                />
              </div>
              <div className="h-[156.5px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
                <img
                  className="w-[13.9px] flex-1 relative max-h-full object-contain z-[2]"
                  alt=""
                  src="/public/line-67.svg"
                />
              </div>
              <div className="w-[923.3px] flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[0.03em] leading-[36px] font-medium font-inherit z-[1]">
                  Supplymint’s automated solution has increased our overall
                  productivity by 50% and reduced human errors to &lt;1.5%. We
                  also love their phenomenal support right where we need it.
                </h3>
                <div className="w-[419px] flex flex-row items-start justify-start gap-[19.5px] max-w-full text-base mq800:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-[53.2px] h-[51px] relative rounded-[50%] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/public/ellipse-539@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[225px] max-w-full">
                    <div className="self-stretch relative tracking-[0.03em] leading-[30px] font-medium z-[1]">
                      Chairman and Managing Director
                    </div>
                    <div className="w-[207.6px] relative tracking-[0.03em] leading-[30px] text-slategray-300 inline-block z-[1]">
                      Mr. Lalit Agarwal
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_22px_74px_-25px_#ced5e1] rounded-smi-5 bg-white box-border flex flex-row flex-wrap items-start justify-start py-[34px] px-[35.5px] gap-[34.3px] max-w-full z-[1] border-[0.8px] border-solid border-white mq800:gap-[17px] mq1350:justify-center">
              <div className="h-[232px] w-[1275.9px] relative shadow-[0px_22px_74px_-25px_#ced5e1] rounded-smi-5 bg-white box-border hidden max-w-full border-[0.8px] border-solid border-white"></div>
              <div className="w-[178.4px] flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border">
                <img
                  className="self-stretch h-[34px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/public/ethinicity-1@2x.png"
                />
              </div>
              <div className="h-[149.5px] flex flex-col items-start justify-start pt-3.5 pb-0 pr-[13px] pl-0 box-border">
                <img
                  className="w-[13.9px] flex-1 relative max-h-full object-contain z-[2]"
                  alt=""
                  src="/public/line-67-1.svg"
                />
              </div>
              <div className="w-[902.4px] flex flex-col items-start justify-start gap-[30px] max-w-full">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[0.03em] leading-[36px] font-medium font-inherit z-[1]">
                  I’m amazed to see Supplymint’s configuration capabilities and
                  quick integration of our third party solutions. Managing our
                  PAN India vendors has never been easier.
                </h3>
                <div className="w-[280.4px] flex flex-row items-end justify-start gap-[19.5px] text-base">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                    <img
                      className="w-[53.2px] h-[51px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/public/ellipse-539-1@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738]">
                    <div className="relative tracking-[0.03em] leading-[30px] font-medium z-[1]">
                      General Manager - IT
                    </div>
                    <div className="self-stretch relative tracking-[0.03em] leading-[30px] text-slategray-300 z-[1]">
                      Mr. Sankat Mochan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[49px] box-border gap-[45px] max-w-full mq800:gap-[22px] mq800:pb-8 mq800:box-border">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[2.1px] box-border max-w-full">
              <div className="flex-1 shadow-[0px_22px_74px_-25px_#ced5e1] rounded-smi-5 bg-white box-border flex flex-row flex-wrap items-start justify-start pt-[34px] pb-[37px] pr-16 pl-24 gap-[46.7px] max-w-full z-[1] border-[0.8px] border-solid border-white mq800:gap-[23px] mq800:pl-6 mq800:box-border mq1350:pl-12 mq1350:pr-8 mq1350:box-border">
                <div className="h-[236px] w-[1275.9px] relative shadow-[0px_22px_74px_-25px_#ced5e1] rounded-smi-5 bg-white box-border hidden max-w-full border-[0.8px] border-solid border-white"></div>
                <div className="w-[105px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
                  <img
                    className="w-[62.3px] h-[62px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/public/group-4531@2x.png"
                  />
                </div>
                <div className="h-[158px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                  <img
                    className="w-[13.9px] flex-1 relative max-h-full object-contain z-[2]"
                    alt=""
                    src="/public/line-67-2.svg"
                  />
                </div>
                <div className="w-[902.4px] flex flex-col items-start justify-start gap-[31px] max-w-full mq450:gap-[15px]">
                  <h3 className="m-0 self-stretch relative text-inherit tracking-[0.03em] leading-[36px] font-medium font-inherit z-[1]">
                    Our order tracking cost has reduced by 15% with Supplymint!
                    We no longer worry about transparency, efficiency, or
                    finding ways to maintain relationships with our vendors.
                  </h3>
                  <div className="w-[280.4px] flex flex-row items-start justify-start gap-[19.6px] text-base">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-[53.2px] h-[51px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/public/ellipse-539-2@2x.png"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738]">
                      <div className="w-[82.4px] relative tracking-[0.03em] leading-[30px] font-medium inline-block z-[1]">
                        Director
                      </div>
                      <div className="self-stretch relative tracking-[0.03em] leading-[30px] text-slategray-300 z-[1]">
                        Mr. Shreyans Surana
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_22px_74px_-25px_#ced5e1] rounded-smi-5 bg-white box-border flex flex-row flex-wrap items-start justify-start pt-8 pb-6 pr-[46px] pl-[56.8px] gap-[36px] max-w-full z-[1] border-[0.8px] border-solid border-white mq800:gap-[18px] mq1350:pl-7 mq1350:pr-[23px] mq1350:box-border">
              <div className="h-[255px] w-[1275.9px] relative shadow-[0px_22px_74px_-25px_#ced5e1] rounded-smi-5 bg-white box-border hidden max-w-full border-[0.8px] border-solid border-white"></div>
              <div className="h-[73px] w-[155.4px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/public/skechers-1.svg"
                />
              </div>
              <div className="h-[183.5px] flex flex-col items-start justify-start pt-3 pb-0 pr-[11px] pl-0 box-border">
                <img
                  className="w-[13.9px] flex-1 relative max-h-full object-contain z-[2]"
                  alt=""
                  src="/public/line-67-3.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[64px] min-w-[598px] max-w-full mq450:gap-[16px] mq1150:gap-[32px] mq1150:min-w-full">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[0.03em] leading-[36px] font-medium font-inherit z-[1]">
                  Supplymint has been the perfect time saving machine that we
                  could have asked for. It really got us to plan our inventory
                  from 2-3 days down to 20-25 mins! Their accuracy is
                  exceptional!
                </h3>
                <div className="w-[280.4px] flex flex-row items-start justify-start gap-[19.6px] text-base">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-[53.2px] h-[51px] relative rounded-[50%] object-cover shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/public/ellipse-539-3@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start shrink-0 [debug_commit:1de1738]">
                    <div className="w-[82.4px] relative tracking-[0.03em] leading-[30px] font-medium inline-block z-[1]">
                      Head IT
                    </div>
                    <div className="self-stretch relative tracking-[0.03em] leading-[30px] text-slategray-300 z-[1]">
                      Mr. Sachin Borakhade
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[41.6px] box-border gap-[55px] max-w-full text-center text-31xl mq800:gap-[27px] mq800:pb-[27px] mq800:box-border">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
              <h1 className="m-0 w-[754.5px] relative text-inherit font-semibold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-11xl mq800:text-21xl">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[27px] max-w-full text-left text-mini mq1350:flex-wrap">
              <div className="w-[460px] bg-whitesmoke-200 box-border overflow-x-auto shrink-0 flex flex-col items-start justify-start pt-[15px] px-[22px] pb-[97px] gap-[11.7px] min-w-[460px] max-w-full z-[1] border-[0.8px] border-solid border-white mq800:pt-5 mq800:pb-[63px] mq800:box-border mq800:min-w-full mq1350:flex-1">
                <div className="w-[460px] h-[580px] relative bg-whitesmoke-200 box-border hidden border-[0.8px] border-solid border-white"></div>
                <h3 className="m-0 w-[101px] relative text-lg tracking-[0.03em] leading-[36px] font-bold font-inherit inline-block z-[1]">
                  Services
                </h3>
                <div className="w-[414px] flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border text-white">
                  <div className="flex-1 bg-mediumslateblue-100 flex flex-row items-start justify-between py-3 pr-3.5 pl-[25px] box-border max-w-full gap-[20px] z-[2]">
                    <div className="h-[60px] w-[411px] relative bg-mediumslateblue-100 hidden max-w-full"></div>
                    <div className="w-[277px] flex flex-row items-start justify-start gap-[14px]">
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/public/frame-16.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[0.03em] leading-[36px] font-semibold z-[1]">
                        Demand & OTB Planning
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/public/frame-17.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[414px] flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border">
                  <div className="flex-1 bg-whitesmoke-300 flex flex-row items-start justify-between py-3 pr-3.5 pl-[25px] box-border max-w-full gap-[20px] z-[2]">
                    <div className="h-[60px] w-[411px] relative bg-whitesmoke-300 hidden max-w-full"></div>
                    <div className="w-[277px] flex flex-row items-start justify-start gap-[14px]">
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/public/frame-18.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[0.03em] leading-[36px] font-semibold z-[1]">
                        Inventory Management
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/public/frame-19.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[414px] flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border">
                  <button className="cursor-pointer [border:none] py-3 pr-3.5 pl-[25px] bg-whitesmoke-300 flex-1 flex flex-row items-start justify-between box-border max-w-full gap-[20px] z-[2]">
                    <div className="h-[60px] w-[411px] relative bg-whitesmoke-300 hidden max-w-full"></div>
                    <div className="w-[277px] flex flex-row items-start justify-start gap-[14px]">
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/public/frame-20.svg"
                        />
                      </div>
                      <div className="flex-1 relative text-mini tracking-[0.03em] leading-[36px] font-semibold font-poppins text-gray-200 text-left z-[1]">
                        Procurement Management
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/public/frame-19.svg"
                      />
                    </div>
                  </button>
                </div>
                <div className="w-[414px] flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border">
                  <div className="flex-1 bg-whitesmoke-300 flex flex-row items-start justify-between py-3 pr-3.5 pl-[25px] box-border max-w-full gap-[20px] z-[2]">
                    <div className="h-[60px] w-[411px] relative bg-whitesmoke-300 hidden max-w-full"></div>
                    <div className="w-[277px] flex flex-row items-start justify-start gap-[14px]">
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/public/frame-22.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[0.03em] leading-[36px] font-semibold z-[1]">
                        Purchase Order Tracking
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/public/frame-19.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[414px] flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border">
                  <div className="flex-1 bg-whitesmoke-300 flex flex-row items-start justify-between py-3 pr-3.5 pl-[25px] box-border max-w-full gap-[20px] z-[2]">
                    <div className="h-[60px] w-[411px] relative bg-whitesmoke-300 hidden max-w-full"></div>
                    <div className="w-[277px] flex flex-row items-start justify-start gap-[14px]">
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/public/frame-24.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[0.03em] leading-[36px] font-semibold z-[1]">
                        Catalogue Management
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/public/frame-19.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[414px] flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border">
                  <div className="flex-1 bg-whitesmoke-300 flex flex-row items-start justify-between py-3 pr-3.5 pl-[25px] box-border max-w-full gap-[20px] z-[2]">
                    <div className="h-[60px] w-[411px] relative bg-whitesmoke-300 hidden max-w-full"></div>
                    <div className="w-[277px] flex flex-row items-start justify-start gap-[14px]">
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/public/frame-26.svg"
                        />
                      </div>
                      <div className="flex-1 relative tracking-[0.03em] leading-[36px] font-semibold z-[1]">
                        Sales Order Management
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/public/frame-19.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-whitesmoke-200 box-border flex flex-col items-end justify-start pt-[25px] pb-[29px] pr-[47px] pl-12 gap-[29px] min-w-[514px] max-w-full z-[1] text-[25px] border-[0.8px] border-solid border-white mq800:py-5 mq800:pr-[23px] mq800:pl-6 mq800:box-border mq800:min-w-full">
                <div className="w-[791px] h-[580px] relative bg-whitesmoke-200 box-border hidden max-w-full border-[0.8px] border-solid border-white"></div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
                  <h2 className="m-0 w-[639px] relative text-inherit tracking-[0.03em] leading-[36px] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-xl mq450:leading-[29px]">
                    Most Asked FAQs
                  </h2>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full text-base">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative tracking-[0.03em] leading-[36px] font-semibold z-[1]">
                        How can companies improve accuracy in demand planning?
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/public/frame-28.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[614px] relative text-sm tracking-[0.03em] leading-[30px] inline-block max-w-full z-[1]">
                      Companies can improve accuracy in demand planning by
                      leveraging advanced forecasting techniques, incorporating
                      real-time data, collaborating closely with sales and
                      marketing teams, integrating customer feedback, and
                      continuously refining models based on performance
                      feedback.
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full text-base">
                  <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-whitesmoke-300"></div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pr-0 pl-0.5 box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                      <div className="w-[531px] relative tracking-[0.03em] leading-[36px] font-semibold inline-block shrink-0 max-w-[calc(100%_-_44px)] z-[1]">
                        What challenges do businesses face in demand planning?
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/public/frame-29.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[20px] max-w-full">
                    <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-whitesmoke-300"></div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                          <div className="w-[531px] relative tracking-[0.03em] leading-[36px] font-semibold inline-block shrink-0 max-w-[calc(100%_-_44px)] z-[1]">
                            What are the benefits of effective demand planning?
                          </div>
                          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/public/frame-29.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                        <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-whitesmoke-300"></div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                            <div className="w-[531px] relative tracking-[0.03em] leading-[36px] font-semibold inline-block shrink-0 max-w-[calc(100%_-_44px)] z-[1]">
                              What factors are considered in demand planning?
                            </div>
                            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                              <img
                                className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                                alt=""
                                src="/public/frame-29.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-whitesmoke-300"></div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-0.5 text-sm">
                    <div className="flex flex-row items-start justify-start gap-[16px]">
                      <div className="relative font-medium inline-block min-w-[86px] z-[1]">
                        See All FAQs
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                        <img
                          className="w-[15px] h-[15px] relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/public/frame-15.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[35.2px] box-border max-w-full text-center text-21xl text-white">
            <div className="flex-1 flex flex-col items-center justify-start pt-[78px] pb-[98px] pr-5 pl-[23px] box-border relative gap-[72.2px] max-w-full z-[1] mq800:gap-[18px] mq800:pt-[51px] mq800:pb-16 mq800:box-border mq1150:gap-[36px]">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/public/mask-group-8.svg"
              />

              <div className="w-[1036px] flex flex-col items-start justify-start gap-[18px] max-w-full">
                <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit z-[1] mq450:text-5xl mq800:text-13xl">
                  Uncover the Possibilities, and Elevate Your Business to New
                  Heights.
                </h1>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl">
                  <h3 className="m-0 w-[723.8px] relative text-inherit leading-[38px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[30px]">
                    See for yourself how our software can revolutionize your
                    business. Click the link below to get started.
                  </h3>
                </div>
              </div>
              <div className="w-[1036px] h-[58px] flex flex-row items-start justify-center py-0 pr-0.5 pl-0 box-border max-w-full">
                <button className="cursor-pointer pt-4 px-[43.7px] pb-[15.9px] bg-white h-16 w-[246.5px] box-border flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[3px] border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[3px] hover:border-solid hover:border-gainsboro-100">
                  <div className="h-16 w-[246.5px] relative bg-white box-border hidden border-[3px] border-solid border-white"></div>
                  <b className="w-[153.1px] relative text-base uppercase inline-block font-poppins text-black text-center shrink-0 z-[1]">
                    Get Demo Now
                  </b>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch [background:linear-gradient(180deg,_#fafbfd,_rgba(255,_255,_255,_0))] flex flex-col items-start justify-end pt-[90px] pb-[90.2px] pr-[322px] pl-[344px] box-border gap-[39.3px] min-h-[1191px] max-w-full z-[1] text-center text-black mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[20px] mq800:pl-[86px] mq800:pr-20 mq800:box-border mq1350:pl-[172px] mq1350:pr-[161px] mq1350:box-border">
            <div className="w-[1279px] h-[1191px] relative [background:linear-gradient(180deg,_#fafbfd,_rgba(255,_255,_255,_0))] hidden max-w-full"></div>
            <h3 className="m-0 self-stretch relative text-inherit tracking-[0.03em] font-normal font-inherit z-[3]">
              Get the app and effortlessly oversee your business at your
              fingertips.
            </h3>
            <div className="w-[600px] flex flex-row items-start justify-center max-w-full text-left text-sm-1 text-white">
              <div className="w-[422px] flex flex-row items-start justify-center gap-[15.6px] max-w-full mq800:flex-wrap">
                <div className="flex-1 rounded-[6.89px] bg-black box-border flex flex-row items-end justify-start pt-[5px] pb-[9px] pr-3 pl-[18px] gap-[8.5px] min-w-[132px] z-[2] border-[1.5px] border-solid border-black mq800:flex-1">
                  <div className="h-[57.5px] w-[203.2px] relative rounded-[6.89px] bg-black box-border hidden border-[1.5px] border-solid border-black"></div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.3px]">
                    <img
                      className="w-[25.5px] h-[28.4px] relative z-[1]"
                      alt=""
                      src="/public/google-play.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="w-[111.6px] h-[17.6px] flex flex-row items-start justify-start py-0 pr-px pl-[1.3px] box-border">
                      <div className="flex-1 relative tracking-[0.03em] shrink-0 [debug_commit:1de1738] z-[1]">
                        Get it on
                      </div>
                    </div>
                    <div className="self-stretch relative text-base-7 tracking-[0.03em] font-semibold shrink-0 [debug_commit:1de1738] z-[1]">
                      Google Play
                    </div>
                  </div>
                </div>
                <div className="flex-[0.9636] rounded-[6.89px] bg-black box-border flex flex-row items-end justify-start pt-[5px] px-[18.1px] pb-[7px] gap-[11.1px] min-w-[132px] z-[2] border-[1.5px] border-solid border-black mq800:flex-1">
                  <div className="h-[57.5px] w-[203.2px] relative rounded-[6.89px] bg-black box-border hidden border-[1.5px] border-solid border-black"></div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.9px]">
                    <img
                      className="w-[29.6px] h-[33.2px] relative z-[1]"
                      alt=""
                      src="/public/apple-icon.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.03em] inline-block min-w-[120.1px] shrink-0 [debug_commit:1de1738] z-[1]">
                      Download on the
                    </div>
                    <div className="w-[112.2px] h-[18.6px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-base-7">
                      <div className="mt-[-4.299999999999727px] flex-1 relative tracking-[0.03em] font-semibold shrink-0 [debug_commit:1de1738] z-[1]">
                        App Store
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        className="w-[2684px] h-[961.9px] absolute !m-[0] bottom-[975.1px] left-[-727px] object-cover z-[2]"
        alt=""
        src="/public/background@2x.png"
      />
    </>
  );
}

export default Service;
