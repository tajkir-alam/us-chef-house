import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#1A1919] mt-5'>
            {/* <div className='my-[calc(100vh-300px)]'></div> */}
            <div className='md:w-4/5 mx-auto py-8 px-2 md:px-0'>
                <div className='text-white grid md:grid-cols-5 gap-4 px-2'>
                    <div>
                        <h2 className='font-extrabold text-2xl my-5'>Opportunity Hub</h2>
                        <p className='text-[#b3b2b2] mb-5'>There are many variations of passages of Lorem Ipsum.</p>
                        <img src="https://i.ibb.co/Fw6wcGN/social-icons.png" alt="" className='hidden md:block' />
                    </div>
                    <div className='md:ml-8'>
                        <h2 className='text-lg font-medium my-5'>Company</h2>
                        <p className='text-[#b3b2b2]'>About Us</p>
                        <p className='text-[#b3b2b2]'>Work</p>
                        <p className='text-[#b3b2b2]'>Latest News</p>
                        <p className='text-[#b3b2b2]'>Careers</p>
                    </div>
                    <div>
                        <h2 className='text-lg font-medium my-5'>Product</h2>
                        <p className='text-[#b3b2b2]'>Prototype</p>
                        <p className='text-[#b3b2b2]'>Plans & Pricing</p>
                        <p className='text-[#b3b2b2]'>Customers</p>
                        <p className='text-[#b3b2b2]'>Integrations</p>
                    </div>
                    <div>
                        <h2 className='text-lg font-medium my-5'>Support</h2>
                        <p className='text-[#b3b2b2]'>Help Desk</p>
                        <p className='text-[#b3b2b2]'>Sales</p>
                        <p className='text-[#b3b2b2]'>Become a Partner</p>
                        <p className='text-[#b3b2b2]'>Developers</p>
                    </div>
                    <div>
                        <h2 className='text-lg font-medium my-5'>Contact</h2>
                        <p className='text-[#b3b2b2]'>404, Hatirpool, Dhaka</p> 
                        <p className='text-[#b3b2b2]'>+88-012-4567-911</p>
                        <img src="https://i.ibb.co/Fw6wcGN/social-icons.png" alt="" className='block md:hidden mt-5' />
                    </div>
                </div>
                
                <hr className='border-1 border-slate-700 my-6' />

                <div className='flex flex-wrap-reverse gap-3 justify-between'>
                    <h1 className='text-[#b3b2b2]'>@2023 <span className='font-bold'>OpportunityHub</span>. All Rights Reserved</h1>
                    <h1 className='text-[#b3b2b2]'>Powered By <span className='font-bold'>Tajkir Alam Rion</span></h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;