import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-700  text-white'>
            <header className='grid justify-center px-4'>
                <h1 className='font-extrabold text-4xl text-yellow-300 pt-8 md:pt-20 pb-6 bg-header-bg text-center'>
                    Welcome to Chef's Blogs
                </h1>
                <button className='btn btn-warning text-center text-white font-bold tracking-widest'>Download PDF</button>
            </header>

            <main className='md:w-4/5 mx-auto py-4 px-2 md:px-0'>
                <h1 className='text-xl font-semibold'>1. Tell us the differences between uncontrolled and controlled components.</h1>
                <h4 className='font-medium pt-2'>Ans: Controlled components state and behavior are controlled by their parent component .</h4>

                <h1 className='text-xl font-semibold mt-8'>2. How to validate React props using PropTypes</h1>
                <h4 className='font-medium pt-2'>Ans: There are many options to validate React props using PropTypes. eg. <br />
                    <div className="pl-2">
                        <li>The prop can be of any data type</li>
                        <li>The prop should be a boolean or a number</li>
                        <li>The prop should be a function</li>
                    </div>
                </h4>

                <h1 className='text-xl font-semibold mt-8'>3. Tell us the difference between nodejs and express js.</h1>
                <h4 className='font-medium pt-2'>Ans: nodejs is a package and on the other hand expressJs is a frameWork.</h4>

                <h1 className='text-xl font-semibold mt-8'>4. What is a custom hook, and why will you create a custom hook?</h1>
                <h4 className='font-medium pt-2 mb-20'>Ans: It make the code look cleaner, and easy to use.</h4>
            </main>
        </div>
    );
};

export default Blog;