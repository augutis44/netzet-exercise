'use client'

const AcceptChallengeButton = () => {
    return (
        <button
            onClick={() => console.log('Challenge Accepted')}
            className="bg-[#03C100] hover:bg-[#0EA60C] transition-all duration-300 h-[44px] px-[9px] lg:px-[22px] rounded-[5px] text-white leading-[13px] lg:leading-[20px] text-[13px] lg:text-[16px] font-extrabold uppercase">
            Accept the Challenge
        </button>
    )
}

export default AcceptChallengeButton
