import React from 'react'

const Hero = () => {
    return (
        <div className="flex m-5 px-10 py-5">
            {/* Left side */}
            <div className='hero-left'>
                <div className='hero-title'>
                    <h1>Savor the flavor</h1>
                    <h1>Your Ultimate Food</h1>
                    <h1>Destination!</h1>
                </div>

                <div className='hero-description'>
                    <p>Great choice! The Feed conveys a sense of movement and change, which can be quite fitting for a food web. Would you like more suggestions or ideas related to it.</p>
                </div>

                <div className='hero-buttons'>
                    <button className='btn'>Order Now</button>
                    <button className='btn-secondary'>Book a Table</button>
                </div>

                <div className='mt-10 mx-auto flex gap-10 items-center w-[450px] justify-between'>
                    <div className='bg-white p-5 rounded-lg shadow-lg hover:border border-red-500 transition-all duration-300'>
                        <h2 className='text-semibold text-2xl'>40+ Breakfasts</h2>
                        <p className='text-gray-500'>most delicious</p>
                    </div>

                    <div className='bg-white p-5 rounded-lg shadow-lg border border-red-500 hover:border-none'>
                        <h2 className='text-semibold text-2xl'>Home Delivery</h2>
                        <p className='text-gray-500'>in town only</p>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className='hero-right'>
                <img src="https://res.cloudinary.com/dkks5xf5v/image/upload/v1747842301/pasta1_hdyzcw.jpg" alt="hero-image" className='hero-image' />
            </div>
        </div>
    )
}

export default Hero
