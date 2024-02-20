'use client'

import { useEffect, useState } from "react";
import TimerHeaderBackground from "./TimerHeaderBackground";

const TimerHeader = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("02/24/2024 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="flex gap-[5px] lg:gap-[7px]">
            <TimerHeaderBackground time={days} timeType="Days" />
            <TimerHeaderBackground time={hours} timeType="Hours" />
            <TimerHeaderBackground time={minutes} timeType="Minutes" />
            <TimerHeaderBackground time={seconds} timeType="Seconds" />
        </div>
    )
}

export default TimerHeader