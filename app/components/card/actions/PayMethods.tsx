import AmericanExpress from "@/components/icons/AmericanExpress";
import Discover from "@/components/icons/Discover";
import Maestro from "@/components/icons/Maestro";
import Mastercard from "@/components/icons/Mastercard";
import PayPal from "@/components/icons/PayPal";
import Visa from "@/components/icons/Visa";
import Image from "next/image";

const PayMethods = () => {
    return (
        <div className='flex items-center justify-around md:justify-center flex-wrap gap-[6px] md:gap-[31px] w-full'>
            <PayPal />
            <Visa />
            <AmericanExpress />
            <Mastercard />
            <Discover />
            <Maestro />
        </div>
    )
}

export default PayMethods;
