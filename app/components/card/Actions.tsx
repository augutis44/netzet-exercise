import Image from 'next/image';
import { inter } from '@/page';
import JoinNowButton from '@/components/card/actions/JoinNowButton';
import NoThankYouButton from '@/components/card/actions/NoThankYouButton';
import PayMethods from '@/components/card/actions/PayMethods';

const CardActions = () => {
    return (
        <div className='max-w-[522px] m-auto px-[18.5px] pb-[27px] md:p-0'>
            <div className='flex flex-col items-center gap-[17px] mb-[25px]'>
                <JoinNowButton />
                <NoThankYouButton />
                <p className='text-[#2F2F2F] text-[12px] leading-[16px] font-[500] text-center md:text-left'>
                    By clicking on Join Now button, you actively agree to the T&Cs and Privacy Policy.
                </p>
            </div>

            <div className={inter.className}>
                <div className='flex flex-col items-center gap-[12px]'>

                    <div className='flex gap-[13px] items-center'>
                        <Image src="/PaySafe.svg" alt="Pay Safe Logo" width={20} height={16} />
                        <p className='text-[#05B133] text-[14px] leading-[18.5px] font-[700]'>
                            Pay safe & secure
                        </p>
                    </div>

                    <PayMethods />

                    <div className='flex gap-[8.38px] items-center'>
                        <Image src="/Lock.svg" alt="Lock" width={14.25} height={15.83} />

                        <p className='text-[#A6A6A6] text-[12px] leading-[18.5px]'>
                            All transactions are secure and encrypted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardActions