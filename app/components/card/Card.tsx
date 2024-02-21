import Timer from '@/components/card/Timer';
import Actions from '@/components/card/Actions';
import Services from '@/components/card/Services';
import Hero from '@/components/card/Hero';

const Card = () => {
    return (
        <div className='flex flex-col md:gap-[28px] bg-[#FFF8EA] md:px-[37px] md:py-[27px] w-full max-w-[867px] m-auto shadow-custom rounded-[10px]'>
            <Hero />
            <Timer />
            <Services />
            <Actions />
        </div>
    )
}

export default Card;
