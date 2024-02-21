'use client'

const NoThankYouButton = () => {
    return (
        <button
            onClick={() => console.log('No, thank you')}
            className="text-[#8D8D8D] font-[600] underline"
        >
            No, thank you
        </button>
    )
}

export default NoThankYouButton;
