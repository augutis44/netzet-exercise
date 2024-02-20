import Image from "next/image";

const payMethods = [
    {
        imageUrl: '/PayPal.svg',
        alt: 'PayPal'
    },
    {
        imageUrl: '/Visa.svg',
        alt: 'Visa'
    },
    {
        imageUrl: '/AmericanExpress.svg',
        alt: 'AmericanExpress'
    },
    {
        imageUrl: '/Mastercard.svg',
        alt: 'Mastercard'
    },
    {
        imageUrl: '/Discover.svg',
        alt: 'Discover'
    },
    {
        imageUrl: '/Maestro.svg',
        alt: 'Maestro'
    }
]

const PayMethods = () => {
    return (

        <div className='flex gap-[31px]'>
            {payMethods.map((payMethod, i) =>
                <Image src={payMethod.imageUrl} alt={payMethod.alt} key={i} width={32} height={22} objectFit='contain' />
            )}
        </div>

    )
}

export default PayMethods
