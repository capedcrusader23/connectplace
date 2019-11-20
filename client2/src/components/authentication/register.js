import React,{Component} from 'react'
import {connect} from 'react-redux';
import {registeruser} from '../../actions/authActions'
import {withRouter} from 'react-router-dom'
import FooImage from '../ReusableComponents/FooterImages'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
class Register extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            errors:{}
        }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    } 
    componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        console.log(nextProps.errors)
        this.setState({errors:nextProps.errors})
      }
    }
    onSubmit(e){
      e.preventDefault();
      this.props.registeruser(this.state,this.props.history)  
      }
    onChange(e){
      this.setState({
        [e.target.name]:e.target.value
      })
    }   
render(){

    const style = {
      wrapper : {
        paddingTop:'8vh',
        display:"flex",
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        minHeight:'200px'
          },
      button: {
            border:0,
            padding:25,
            paddingTop:5,
            paddingBottom:5,
            backgroundColor:'#494CA2',
            color:'white',
            borderRadius:5,
            fontFamily: 'Montserrat',
            fontWeight:100,
        },
        sideHeading: {
          fontFamily: 'Montserrat',
          fontWeight:100,
          fontSize:16,
          opacity:0.6,
          float:'left',
          marginTop:5
      },
      grid:{
        display:'grid',
        gridTemplateColumns:'50% 50%',
        gridGap:'2vw'
      }
    }


    return(
      <div>
        <div style={style.wrapper}>
          <h1 style={{fontFamily: 'Montserrat',fontWeight:350,fontSize:50}}>Register</h1>
          <form style={{zIndex:2}} onSubmit={this.onSubmit}>
              <div style={style.grid}>
                <TextField
                    id="standard-basic"
                    label="Email"
                    type="email"
                    name="email"
                  />
                  <TextField

                    id="standard-basic"
                    label="Name"
                    type="text"
                  />
                <TextField
                    id="standard-basic"
                    label="Password"
                    type="password"
                  />
                  <TextField
                    id="standard-basic"
                    label="Retype Password"
                    type="password"
                  />
                <div style={{gridColumn:'1/3'}}>
                        <FormControl
                        fullWidth
                        >
                          <InputLabel id="demo-simple-select-label">Select Campus</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"                            
                            >
                            <MenuItem value={62}>Sector 62</MenuItem>
                            <MenuItem value={128}>Sector 128</MenuItem>
                          </Select>
                        </FormControl>
                </div>
                <TextField
                    id="standard-basic"
                    label="Job Designation"
                    type="text"
                  />
                  <TextField
                    id="standard-basic"
                    label="Company name"
                    type="text"
                  />
                  <div style={{marginTop:10}}>
                        <input 
                        type="submit"
                        style={style.button}
                        value="Sign Up"
                        />
                  </div>
              </div>
              <div>
                  <p style={style.sideHeading}>Already a member? <a href="/login">Login</a></p>
              </div>
          </form>
        </div>
        <FooImage/>
      </div>
    )
    }

} 
const mapStatetoProps=(state)=>({
auth:state.auth,
errors:state.error
})
export default connect(mapStatetoProps,{registeruser})(withRouter(Register));