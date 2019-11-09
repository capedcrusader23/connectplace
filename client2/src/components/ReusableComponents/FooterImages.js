import React from 'react'
import Bottom1 from '../../img/Wave_back.png'
import Bottom2 from '../../img/Wave_front.png'
const FooImage = () => {
    return (
            <div >
            <img style={{position:'absolute',bottom:100,width:'100%',maxHeight:'40vh'}} src={Bottom1}/>
            <img style={{position:'absolute',bottom:0,width:'100%',maxHeight:'40vh' }} src={Bottom2} />
            </div>
    )
}
export default FooImage