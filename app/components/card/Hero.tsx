import Image from 'next/image';

const CardTitle = () => {
    return (
        <div className='flex flex-col items-center gap-[28px] px-[18.5px] pt-[27px] pb-[28px] lg:p-0'>
            <p className='text-[#68C7CD] font-[800] text-[25px] lg:text-[30px] leading-[29.35px] lg:leading-[20px] uppercase text-center'>
                Only you, only now
            </p>
            <Image src="/Flower.svg" alt="Flower Icon" width={47} height={43} />
            <p className='text-[20px] lg:text-[27px] font-[600] leading-[24.58px] lg:leading-[33.18px] text-center'>
                Introducing an exclusive <span className='font-[800] text-[#0EA8B3] underline'>VIP parenting community</span> on Facebook with <span className='font-[800] underline'>additional parenting tools</span> and <span className='font-[800] underline'>tips</span> directly from the founder, Derek Mitchell, and other experts.
            </p>
        </div>
    )
}

export default CardTitle;
