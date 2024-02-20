import Image from "next/image";
import Link from "next/link";
import AcceptChallangeButton from "./AcceptChallangeButton";
import TimerHeader from "./TimerHeader";

const Header = () => {
    return (
        <header className="bg-[#3C3C3B] p-[20px] h-[75px] flex items-center justify-center">
            <div className="w-full max-w-[1120.59px] flex items-center justify-between gap-[78px]">
                <div>
                    <Link href='/'>
                        <Image src="ParentingLeaderLogo.svg" alt="Parenting Leader Logo" width={158.59} height={42.83} />
                    </Link>
                </div>

                <div className="flex items-center gap-[28px]">
                    <div className="flex items-center gap-[7px]">
                        <p className="text-white font-semibold text-[17px]">This offer expires in:</p>
                        <TimerHeader />
                    </div>
                    <AcceptChallangeButton />
                </div>

                <div className="text-white font-bold text-[18px] flex items-center gap-[11px] ">
                    <Image src="/phoneIcon.svg" alt="phone Icon" width={16} height={16} />
                    <p>1 (302) 316-5995</p>
                </div>
            </div>

        </header>
    )
}

export default Header
