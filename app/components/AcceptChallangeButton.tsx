'use client'

const AcceptChallangeButton = () => {
    return (
        <div>
            <button 
            onClick={() => console.log('Challange Accepted')}
            className="bg-[#03C100] hover:bg-[#0EA60C] transition-all duration-300 px-[22px] py-[8px] rounded-[5px] text-white font-extrabold uppercase">
                Accept the Challange
            </button>
        </div>
    )
}

export default AcceptChallangeButton