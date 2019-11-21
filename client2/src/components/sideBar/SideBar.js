import React from 'react'
import Profile from '../../assets/profile1.png'
import {connect} from 'react-redux'
import {logout} from '../../actions/authActions'
const SideBar = (props) => {
    const style = {
        SideBarWrapper :{
            position:'fixed',
            top:70,
            minHeight:'100vh',
            padding:60,
            width:'20vw',
            background:'rgba(0,0,0,39%)',
            display:'flex',
            flexDirection:'column',
            color:'white',
            fontSize:20,
            fontFamily: 'Montserrat',
        },
        sideNav : {
            paddingTop:100,
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            minHeight:300
        }
    }

    
    
    //Will be expecting user id so we can navigate to dashboard, setting and logout :D
    return (
        <div style={style.SideBarWrapper}>
            <div>
                <img src={Profile} style={{height:80,width:80,marginRight:4}}/>
                Username
            </div>
            <div >
                <ul style={style.sideNav}>
                    {/* Add links yo respective pages */}
                    <li><a href='/dashboard'>Dashboard</a></li>
                    <li>Settings</li>
                    <li><a href="#" > Log Out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default connect(null,{logout})(SideBar)