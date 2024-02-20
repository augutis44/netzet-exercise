'use client'

const NoThankYouButton = () => {
    return (
        <div>
            <button
                onClick={() => console.log('No, thank you')}
                className="text-[#8D8D8D] font-[600] underline">
                No, thank you
            </button>
        </div>
    )
}

export default NoThankYouButton