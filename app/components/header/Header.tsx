import Image from "next/image";
import Link from "next/link";
import AcceptChallengeButton from "@/components/header/AcceptChallengeButton";
import Timer from "@/components/header/timer/Timer";
import PhoneIcon from "@/components/icons/PhoneIcon";

const Header = () => {
    return (
        <div className="bg-[#3C3C3B] px-[20px]">
            <header className="h-[70px] md:h-[75px] flex items-center justify-between gap-[38px] md:gap-[10px] w-full max-w-[1120.59px] m-auto">
                <div className="hidden md:block">
                    <Link href='/'>
                        <Image src="ParentingLeaderLogo.svg" alt="Parenting Leader Logo" width={158.59} height={42.83} />
                    </Link>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto md:justify-center gap-[20px] md:gap-[28px] md:mx-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[7px]">
                        <p className="text-white font-semibold text-[12px] lg:text-[17px]">This offer expires in:</p>
                        <Timer />
                    </div>
                    <AcceptChallengeButton />
                </div>

                <div className="hidden md:flex text-white font-bold text-[18px] items-center gap-[11px] ">
                    <PhoneIcon />
                    <p>1 (302) 316-5995</p>
                </div>
            </header>
        </div>
    )
}

export default Header;
