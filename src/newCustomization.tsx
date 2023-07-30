import React, {useEffect} from 'react';
import AppBuilder from '@appbuilder/react';
import Chat from 'src/components/Chat';
import { customize } from '@appbuilder/react';

import { ChatSendButton } from "@appbuilder/react"
import { VideoComponent } from 'customization-api/sub-components';

const TopBar = () =>{
  return (
    <button className='new'>
     sefgg
</button>
  )
}


const useCustomizer = () => {
 useEffect(()=>{
    AppBuilder.customize({
      components:{
        videoCall:{
          chat:{
            chatSendButton:TopBar
          }
        }       
      }
    })
}, [])
}

export default useCustomizer;