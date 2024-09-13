import React from 'react';
import Button from './Button';



function About() {
  return (
    <div className=' flex-col items-center  md:flex-row flex md:justify-around py-7'>
        <div className='grid-flow-row px-5  '>
            <img src="/about.png"  alt='About me'/>
        </div>
        <div>
            <div>
                <h3 className='text-4xl py-3'>About Me</h3>
                <p className='text-start'>You’ll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer. .</p>
                <p className='text-start'>Task One, how to approach the task and the language needed for a successful answer. You’ll examine Task Two questions and learn how to plan, write and check academic essays.</p>
                <p>About Me</p>
            </div>

            <div><Button button="Click to now more" /></div>
        </div>
    </div>
  )
}

export default About