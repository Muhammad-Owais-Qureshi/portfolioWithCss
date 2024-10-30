import React from 'react'

const Emailbox = () => {
  return (
    <div className='mailbox'>
        <input className='text' type="text" placeholder='Your Name' />
        <input className='text' type="number" placeholder='Phone' />
        <br />
        
        <input className='text' type="email"  placeholder='Email'/>
        
        <input className='text' type="text"  placeholder='Subject'/>
        <br />
        <textarea className='text' name="text" cols={20} rows={5} placeholder='Your massage' id="">
            
        </textarea>
        <button className="submit">Submit</button>
    </div>
  )
}

export default Emailbox