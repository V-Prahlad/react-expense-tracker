import React from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__in'>
            <button> <span> <PlusOutlined /></span>  Cash In</button>
        </div>
        <div className='footer__out'>
            <button> <span><MinusOutlined /></span> Cash Out</button>
        </div>
    </div>
  )
}

export default Footer;