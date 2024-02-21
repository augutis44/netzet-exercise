import Image from "next/image";
import { Montserrat } from 'next/font/google';
import CheckMark from "@/components/icons/CheckMark";

const montserrat = Montserrat({
    weight: ['700', '500'],
    subsets: ['latin'],
})

const cardList: string[] = [
    'Exclusive parenting resources',
    'Supportive community',
    'Personalized guides',
    'Private discussions',
    'Expert advice',
]

const CardServices = () => {
    return (
        <div className='bg-[#FFFCF5] rounded-[10px] flex flex-col-reverse md:flex-row gap-[17px] items-center px-[16px] py-[21px] md:p-[16px] mx-[18.5px] mt-[28px] mb-[27px] md:m-0'>
            <div className='flex items-center flex-col gap-[18px] md:gap-[38px] md:py-[10px] md:pr-[21px] md:pl-[29px] max-w-[364px]'>
                <div className='flex flex-col gap-[15px]'>
                    {cardList.map((item, i) =>
                        <div key={i} className='flex items-center gap-[12.5px] md:gap-[15px]'>
                            <CheckMark />
                            <p className='font-[600] text-[20px] md:text-[23px] leading-[24.58px] md:leading-[28.27px]'>{item}</p>
                        </div>
                    )}
                </div>

                <div className={`${montserrat.className} flex flex-col items-center`}>
                    <p className='text-[#0EA8B3] text-[20px] leading-[34px] font-[700] uppercase'>
                        Only now
                    </p>
                    <p className='text-[#EA4335] text-[40px] leading-[34px] font-[700]'>
                        $9.95
                    </p>

                    <p className='text-[#8D8D8D] text-[12px] leading-[14.63px] font-[500] pt-[17px] text-center md:text-left'>
                        You will be charged for $9.95 every month. You can cancel anytime and this will not affect the challenges you purchased.
                    </p>
                </div>
            </div>

            <div className='hidden md:block min-w-[260px]'>
                <Image src="/FamilyPhotoDesktop.png" alt="Family Photo" width={380} height={469} />
            </div>

            <div className='md:hidden'>
                <Image src="/FamilyPhotoMobile.png" alt="Family Photo" width={255} height={237} />
            </div>
        </div>
    )
}

export default CardServices;
