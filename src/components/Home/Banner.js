import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ "background-image": "url(https://i.ibb.co/XLmdHt9/cover-photo.jpg);" }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Welcome</h1>
                        <h1 class="mb-5 text-2xl font-bold">Warehouse Management system</h1>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;