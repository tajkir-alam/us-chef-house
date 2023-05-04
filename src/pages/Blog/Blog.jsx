import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div className='bg-slate-700  text-white'>
            <header className='grid justify-center px-4'>
                <h1 className='font-extrabold text-4xl text-yellow-300 pt-8 md:pt-20 pb-6 bg-header-bg text-center'>
                    Welcome to Chef's Blogs
                </h1>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className="btn btn-warning text-center text-white font-bold tracking-widest" onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </header>

            <main ref={ref} className='bg-slate-700 md:w-4/5 mx-auto py-12 px-8 md:px-4'>
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