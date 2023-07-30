import React, {useEffect} from 'react';
import AppBuilder from '@appbuilder/react';
import Chat from 'src/components/Chat';

import { ChatSendButton } from "@appbuilder/react"

const TopBar = () =>{
  return (
    <p className='new'>
 Here is your new bottom bar component. Use app-state and
          sub-components to customize your bottom bar
    </p>
  )
}


const useCustomize = () => {
 useEffect(()=>{
    AppBuilder.customize({
      components:{
        videoCall: TopBar
      }
    })
}, [])
}

export default useCustomize;