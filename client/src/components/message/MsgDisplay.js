import React from 'react'
import Avatar from '../Avatar'

const MsgDisplay = ({user}) => {
    
  return (
    <>
        <div className='chat title'>
            <Avatar src={user.avatar} size="small-avatar" />
            <span>{user.username}</span>
        </div>

        <div className='chat_text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard
        </div>

        <div className='chat_time'>
            June 2023
        </div>
    </>
  )
}

export default MsgDisplay