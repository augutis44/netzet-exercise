import Image from 'next/image'
import React from 'react'
import TimerCard from './TimerCard'
import { montserrat } from '../page'
import { inter } from '../page'
import JoinNowButton from './JoinNowButton'
import NoThankYouButton from './NoThankYouButton'
import PayMethods from './PayMethods'

const cardList = [
    'Exclusive parenting resources',
    'Supportive community',
    'Personalized guides',
    'Private discussions',
    'Expert advice'
]


const Card = () => {
    return (
        <div className='px-[15px]'>
            <div className='bg-[#FFF8EA] px-[37px] py-[27px] w-full max-w-[867px] m-auto mt-[51px] mb-[106px] shadow-custom rounded-[10px] flex flex-col items-center gap-[28px]'>
                <p className='text-[#68C7CD] font-[800] text-[30px] leading-[29.35px] lg:leading-[20px] uppercase text-center'>
                    Only you, only now
                </p>
                <Image src="/Flower.svg" alt="Flower Icon" width={47} height={43} />
                <p className='text-[20px] lg:text-[27px] font-[600] leading-[33.18px] text-center'>
                    Introducing an exclusive <span className='font-[800] text-[#0EA8B3] underline'>VIP parenting community</span> on Facebook with <span className='font-[800] underline'>additional parenting tools</span> and <span className='font-[800] underline'>tips</span> directly from the founder, Derek Mitchell, and other experts.
                </p>
                <TimerCard />

                <div className='bg-[#FFFCF5] rounded-[10px] flex flex-col-reverse lg:flex-row gap-[17px] items-center justify-center p-[16px]'>
                    <div className='py-[10px] pr-[21px] pl-[29px] w-full max-w-[364px] h-[435px] flex flex-col items-center justify-between'>
                        <div className='w-full max-w-[314px] flex flex-col gap-[15px] pb-[38px]'>
                            {cardList.map((item, i) =>
                                <div key={i} className='flex items-center gap-[15px]'>
                                    <Image src="/checkMark.svg" alt="Check Mark" width={25} height={25} />
                                    <p className='font-[600] text-[23px] leading-[28.27px]'>{item}</p>
                                </div>
                            )}
                        </div>

                        <div className={montserrat.className}>
                            <div className='flex flex-col items-center'>
                                <p className='text-[#0EA8B3] text-[20px] leading-[34px] font-[700] uppercase'>Only now</p>
                                <p className='text-[#EA4335] text-[40px] leading-[34px] font-[700]'>$9.95</p>

                                <p className='text-[#8D8D8D] text-[12px] font-[500] pt-[17px]'>You will be charged for $9.95 every month. You can cancel anytime and this will not affect the challenges you purchased.</p>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:block'>
                        <Image src="/cardPhoto.png" alt="Flower Icon" width={380} height={469} />
                    </div>

                    <div className='lg:hidden'>
                        <Image src="/cardPhoto.png" alt="Flower Icon" width={380} height={237} />
                    </div>
                </div>

                <div className='w-full max-w-[522px]'>
                    <div className='flex flex-col items-center gap-[17px] mb-[25px]'>
                        <JoinNowButton />
                        <NoThankYouButton />
                        <p className='text-[#2F2F2F] text-[12px] leading-[16px] font-[500]'>By clicking on Join Now button, you actively agree to the T&Cs and Privacy Policy.</p>
                    </div>

                    <div className={inter.className}>
                        <div className='flex flex-col items-center gap-[12px]'>

                            <div className='flex gap-[13px] items-center'>
                                <Image src="/PaySafe.svg" alt="Pay Safe Logo" width={20} height={16} />
                                <p className='text-[#05B133] text-[14px] leading-[18.5px] font-[700]'>Pay safe & secure</p>
                            </div>

                            <PayMethods />

                            <div className='flex gap-[8.38px] items-center'>
                                <Image src="/Lock.svg" alt="Lock" width={14.25} height={15.83} />

                                <p className='text-[#A6A6A6] text-[12px] leading-[18.5px]'>All transactions are secure and encrypted</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Card