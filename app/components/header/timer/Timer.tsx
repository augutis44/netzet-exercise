'use client'

import { useTimer } from "@/hooks/useTimer";
import TimerHeaderBackground from "@/components/header/timer/TimerBlock";

const TimerHeader = () => {

    const { days, hours, minutes, seconds } = useTimer();

    return (
        <div className="flex gap-[5px] lg:gap-[7px]">
            <TimerHeaderBackground time={days} timeType="Days" />
            <TimerHeaderBackground time={hours} timeType="Hours" />
            <TimerHeaderBackground time={minutes} timeType="Minutes" />
            <TimerHeaderBackground time={seconds} timeType="Seconds" />
        </div>
    )
}

export default TimerHeader;
