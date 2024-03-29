import React from 'react'
import Avatar from '../Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Status = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

  return (
    <div>
        <div className='status my-3 d-flex'>
            <Avatar src={auth.user.avatar} size="big-avatar" />
            <button className='statusBtn' 
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true})} >
                {auth.user.username}, what are you thinking?
            </button>
        </div>
    </div>
  )
}

export default Status