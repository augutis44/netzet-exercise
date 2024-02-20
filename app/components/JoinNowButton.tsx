'use client'

const JoinNowButton = () => {
  return (
    <div className="w-full">
      <button
        onClick={() => console.log('Joined')}
        className="bg-[#0EA8B3] hover:bg-[#009999] transition-all duration-300 px-[22px] py-[8px] rounded-[5px] text-white font-[800] uppercase w-full">
        Join now
      </button>
    </div>
  )
}

export default JoinNowButton
