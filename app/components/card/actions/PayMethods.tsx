import Image from "next/image";

interface PayMethodsProps {
    imageUrl: string;
    alt: string;
    width: number;
    height: number;
}

const payMethods: PayMethodsProps[] = [
    {
        imageUrl: '/PayPal.svg',
        alt: 'PayPal',
        width: 65,
        height: 16
    },
    {
        imageUrl: '/Visa.svg',
        alt: 'Visa',
        width: 34,
        height: 11
    },
    {
        imageUrl: '/AmericanExpress.svg',
        alt: 'AmericanExpress',
        width: 23,
        height: 18
    },
    {
        imageUrl: '/Mastercard.svg',
        alt: 'Mastercard',
        width: 28,
        height: 21
    },
    {
        imageUrl: '/Discover.svg',
        alt: 'Discover',
        width: 42,
        height: 22
    },
    {
        imageUrl: '/Maestro.svg',
        alt: 'Maestro',
        width: 28,
        height: 20
    }
]

const PayMethods = () => {
    return (
        <div className='flex justify-around md:justify-center flex-wrap gap-[6px] md:gap-[31px] w-full'>
            {payMethods.map((payMethod, i) =>
                <Image src={payMethod.imageUrl} alt={payMethod.alt} key={i} width={payMethod.width} height={payMethod.height} />
            )}
        </div>
    )
}

export default PayMethods;
