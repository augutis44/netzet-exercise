import Image from "next/image";
import Link from "next/link";
import AcceptChallangeButton from "./AcceptChallangeButton";
import TimerHeader from "./TimerHeader";

const Header = () => {
    return (
        <div className="bg-[#3C3C3B] px-[15px]">
            <header className="p-[10px] h-[75px] flex items-center justify-center gap-[38px]">
                <div className="w-full max-w-[1120.59px] flex items-center justify-between">
                    <div className="hidden lg:block">
                        <Link href='/'>
                            <Image src="ParentingLeaderLogo.svg" alt="Parenting Leader Logo" width={158.59} height={42.83} />
                        </Link>
                    </div>

                    <div className="flex items-center justify-between lg:justify-center w-full gap-[10px] lg:gap-[28px] lg:mx-0">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-[7px]">
                            <p className="text-white font-semibold text-[12px] lg:text-[17px]">This offer expires in:</p>
                            <TimerHeader />
                        </div>
                        <AcceptChallangeButton />
                    </div>

                    <div className="hidden lg:flex text-white font-bold text-[18px] items-center gap-[11px] ">
                        <Image src="/phoneIcon.svg" alt="phone Icon" width={16} height={16} />
                        <p>1 (302) 316-5995</p>
                    </div>
                </div>
            </header >
        </div>


    )
}

export default Header
