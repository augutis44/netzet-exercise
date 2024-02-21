'use client'

import { useTimer } from "@/hooks/useTimer";

const TimerCard = () => {

    const { hours, minutes } = useTimer();

    return (
        <div className="bg-[#EA4335] text-white px-[16px] py-[10px] w-full">
            <p className="text-[20px] leading-[20px] font-[500] uppercase text-center">
                Offer expires in <span className="text-[25px] font-[800] uppercase">{hours}:{minutes}</span>
            </p>
        </div>
    )
}

export default TimerCard
