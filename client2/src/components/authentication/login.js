import React,{Component} from 'react'
import FooImage from '../ReusableComponents/FooterImages'
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {loginuser} from '../../actions/authActions'
class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            errors:{}
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
      this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
      e.preventDefault();
      this.props.loginuser(this.state)
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.auth.isAuthenticated){
        console.log(nextProps.auth)
        this.props.history.push('/dashboard')
      }
      if(nextProps.error){
        this.setState({errors:nextProps.error})
      }
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
            float:'right',
            marginTop:5
        },
          }
      
      return(
          <div>
            <div style={style.wrapper}>
              <h1 style={{fontFamily: 'Montserrat',fontWeight:350,fontSize:50}}>Login</h1>
              <form>
                <div>
                <TextField
                  id="standard-basic"
                  label="Email"
                  type="email"
                  fullWidth
                />
                </div>
                <div>
                <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  margin="normal"
                  fullWidth
                  />
                </div>
                <div style={{marginTop:10}}>
                        <input 
                        type="submit"
                        style={style.button}
                        value="Login"
                        />
                </div>
                <div>
                  <p style={style.sideHeading}>Not a member? <a href="/register">Register here</a></p>
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
export default connect(mapStatetoProps,{loginuser})(Login)