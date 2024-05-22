import React from 'react'

function Landing() {
    return (
        <section
            className="w-[1405.6px] flex flex-row items-start justify-start py-0 pr-20 pl-[79.6px] box-border max-w-full text-left text-base text-white font-poppins mq1350:pl-10 mq1350:pr-10 mq1350:box-border"
        >
            <div
                className="flex-1 flex flex-col items-end justify-start gap-[45.9px] max-w-full mq800:gap-[23px]"
            >
                <div
                    className="self-stretch flex flex-col items-start justify-start gap-[48.9px] mq800:gap-[24px]"
                >
                    <div
                        className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[55px] mq450:pl-5 mq450:box-border"
                    >
                        <div className="relative font-semibold z-[6]">
                            Trusted by 1k+ businesses
                        </div>
                    </div>
                    <div
                        className="self-stretch flex flex-row flex-wrap items-end justify-between gap-[20px] mq1150:justify-center"
                    >
                        <div
                            className="flex flex-col items-start justify-end pt-0 px-0 pb-[8.3px]"
                        >
                            <img
                                className="w-[47.4px] h-[47.4px] relative object-cover z-[6]"
                                loading="lazy"
                                alt=""
                                src="/public/mask-group@2x.png"
                            />
                        </div>
                        <div
                            className="w-[149.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[15.8px] box-border"
                        >
                            <img
                                className="self-stretch h-[32.6px] relative max-w-full overflow-hidden shrink-0 object-cover z-[6]"
                                alt=""
                                src="/public/mask-group-1@2x.png"
                            />
                        </div>
                        <div
                            className="w-[155px] flex flex-col items-start justify-end pt-0 px-0 pb-[25.2px] box-border"
                        >
                            <img
                                className="self-stretch h-[13.7px] relative max-w-full overflow-hidden shrink-0 object-cover z-[6]"
                                alt=""
                                src="/public/mask-group-2@2x.png"
                            />
                        </div>
                        <div
                            className="w-[86px] flex flex-col items-start justify-end pt-0 px-0 pb-[11.9px] box-border"
                        >
                            <img
                                className="self-stretch h-[40.3px] relative max-w-full overflow-hidden shrink-0 object-cover z-[6]"
                                alt=""
                                src="/public/mask-group-3@2x.png"
                            />
                        </div>
                        <div
                            className="w-[135.4px] flex flex-col items-start justify-end pt-0 px-0 pb-[16.9px] box-border"
                        >
                            <img
                                className="self-stretch h-[30.3px] relative max-w-full overflow-hidden shrink-0 object-cover z-[6]"
                                alt=""
                                src="/public/mask-group-4@2x.png"
                            />
                        </div>
                        <div
                            className="w-[83.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border"
                        >
                            <img
                                className="self-stretch h-[46.2px] relative max-w-full overflow-hidden shrink-0 object-cover z-[6]"
                                alt=""
                                src="/public/mask-group-5@2x.png"
                            />
                        </div>
                        <img
                            className="h-[64.2px] w-[114.3px] relative object-cover z-[6]"
                            alt=""
                            src="/public/mask-group-6@2x.png"
                        />

                        <div
                            className="flex flex-col items-start justify-end pt-0 px-0 pb-[6.6px]"
                        >
                            <img
                                className="w-[51px] h-[51px] relative object-cover z-[6]"
                                alt=""
                                src="/public/mask-group-7@2x.png"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="w-[1212.1px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
                >
                    <button
                        className="cursor-pointer py-2.5 pr-[18.1px] pl-[18.2px] bg-gray-300 w-[242.9px] box-border flex flex-row items-start justify-start whitespace-nowrap z-[6] border-[1px] border-solid border-silver-100 hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray-500"
                    >
                        <div
                            className="h-[45px] w-[242.9px] relative bg-gray-300 box-border hidden border-[1px] border-solid border-silver-100"
                        ></div>
                        <div
                            className="flex-1 relative text-sm font-semibold font-poppins text-white text-center z-[1]"
                        >
                            See our all clients
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Landing
