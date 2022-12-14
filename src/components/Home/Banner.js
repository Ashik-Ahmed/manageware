import React from 'react';
import cover from '../../images/cover-photo.jpg'

const Banner = () => {
    return (
        <div>
            {/* <div class="hero min-h-screen" style={{ "background-image": `url(${cover})` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Welcome</h1>
                        <p class="mb-5">Number 1 tools wholeseller in the country</p>
                        <button class="btn btn-primary">Start Buying</button>
                    </div>
                </div>
            </div > */}
            <div class="hero min-h-screen" style={{ "background-image": `url(${cover})` }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Welcome</h1>
                        <h1 class="mb-5 text-2xl font-bold">Warehouse Management system</h1>
                        <button class="btn bg-indigo-500 hover:bg-indigo-600 border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;