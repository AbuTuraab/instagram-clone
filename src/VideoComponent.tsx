import React, {useEffect} from 'react';
import AppBuilder from '@appbuilder/react';



const TopBar = () =>{
  return (
    <>
    
    </>
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