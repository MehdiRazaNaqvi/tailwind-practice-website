import React from 'react'

function CustomButton() {
    return (
        <button
            disabled={false}
            type={"button"}
            className='custom-btn bg-primary-blue text-white rounded-full mt-10'
        >


            <span className='flex-1'>
                Explore Cars

            </span>
        </button>
    )
}

export default CustomButton