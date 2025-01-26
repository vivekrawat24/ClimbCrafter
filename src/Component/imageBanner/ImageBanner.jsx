import React from 'react'
import bg from '/images/imageBanner1.jpg'

function ImageBanner() {



    return (
        <div>
            <div className={`max-w-[1720px] mx-auto  h-[490px] flex flex-col justify-between`} style={{ backgroundImage: `url(${bg})` }}>
                <div>
                    <h4 className='capitalize ff-bn leading-none text-3xl text-white'>gear up</h4>
                    <h2 className='capitalize ff-bn leading-none text-[113px]  text-white'>rifle season</h2>
                    <h3 className='capitalize ff-bn leading-none text-3xl tracking-[18px] text-[#f6ec47]'>solid collection</h3>
                    <button className='capitalize text-xl rounded-md ff-pp bg-org px-6 text-white font-medium  py-4'> shop now</button>
                </div>

                <ul className='flex justify-center bg-[#00000070] py-3'>
                    <li className='text-white text-lg px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-lg px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-lg px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-lg px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-lg px-5 border-r-2'>Lorem, ipsum dolor.</li>
                    <li className='text-white text-lg px-5 border-r-2'>Lorem, ipsum dolor.</li>
                </ul>

            </div>
        </div>
    )
}

export default ImageBanner
