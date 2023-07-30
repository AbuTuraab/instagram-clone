import React, {useEffect} from 'react';
import AppBuilder from '@appbuilder/react';
import { Chat } from "@appbuilder/react"
import { MaxVideoView } from '@appbuilder/react';


const TopBar = () => {
  return (
   
  <p className='card'>
    We are working
  </p>
  )
}


const chatCustomizer = () => {
 useEffect(()=>{
    AppBuilder.customize({
      components:{
        videoCall: {
            customContent: 
        } 
        
            
       
      
             
      }
    })
}, [])
}

export default chatCustomizer;