import React from 'react';
import Button from './Button';



function About() {
  return (
    <div className=' flex-col   flex md:justify-around px-7'>
       
        <h3 className='text-5xl py-3 font-bold'>About Me</h3>
       
       <div className='flex-row py-8'>
       
        <div className='grid-flow-row px-5  '>
            <img src="/about.png"  alt='About me'/>
        </div>
        <div>
            <div>
                <p className='text-start'>You’ll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer. .</p>
                <p className='text-start'>Task One, how to approach the task and the language needed for a successful answer. You’ll examine Task Two questions and learn how to plan, write and check academic essays.</p>
                <p>About Me</p>
            </div>

            <div><Button button="Click to now more" /></div>
        </div>

        </div>

    </div>
  )
}

export default About