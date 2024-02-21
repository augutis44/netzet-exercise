import { inter } from '@/page';

interface TimerHeaderBackgroundProps {
    time: number,
    timeType: string
}

const TimerHeaderBackground = ({ time, timeType }: TimerHeaderBackgroundProps) => {
    return (
        <div className="bg-[#FBBA00] h-[31px] lg:h-[36px] w-[38px] lg:w-[45px] rounded-[5px] text-[#2F2F2F] flex flex-col justify-center items-center lg:gap-[2px]">
            <div className="font-extrabold text-[16px] lg:text-[20px] leading-[20px]">{time}</div>
            <div className={inter.className}>
                <div className='text-[6px] lg:text-[7px] uppercase font-normal'>{timeType}</div>
            </div>
        </div>
    )
}

export default TimerHeaderBackground;
