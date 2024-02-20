'use client'

const AcceptChallangeButton = () => {
    return (
        <div>
            <button 
            onClick={() => console.log('Challange Accepted')}
            className="bg-[#03C100] hover:bg-[#0EA60C] transition-all duration-300 px-[22px] py-[8px] rounded-[5px] text-white leading-[13px] lg:leading-[20px] text-[13px] lg:text-[16px] font-extrabold uppercase">
                Accept the Challange
            </button>
        </div>
    )
}

export default AcceptChallangeButton
