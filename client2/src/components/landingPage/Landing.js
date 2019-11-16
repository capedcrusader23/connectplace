import React from 'react';
import FooImage from '../ReusableComponents/FooterImages'
const style = {
    LandingPageWrapper:{
        minHeight:'100vh',
    },
    wrapper : {
        paddingTop:'10vh',
        display:"flex",
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'200px'
    },
    sideHeading: {
        fontFamily: 'Montserrat',
        fontWeight:100,
        fontSize:16,
        opacity:0.6,
        float:'right',
        marginTop:-10        
    },
    button: {
        border:0,
        padding:55,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#494CA2',
        color:'white',
        borderRadius:5,
        fontFamily: 'Montserrat',
        fontWeight:100,
    }
}

const LandingPage = () => {
    return (
        <div style={style.LandingPageWrapper}>
            <div style={style.wrapper}>
                <div>
                    <h1 style={{fontFamily: 'Montserrat',fontWeight:350,fontSize:60,marginBottom:0}}>Connect Place</h1>
                    <p style={style.sideHeading}>JIIT Alumni Platform</p>
                    <div style={{marginTop:40,textAlign:'center'}}>
                        <a href="/login"><button style={style.button}>Get Started</button></a>
                    </div>
                    
                </div>
            </div>
            <FooImage/>        
        </div>
    )
}
export default LandingPage