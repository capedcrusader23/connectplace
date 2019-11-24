import React ,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import SideBar from '../sideBar/SideBar'
class Settings extends Component {
    constructor() {
        super()
        this.state= {
            old_password:'',
            new_password:'',
            retype_password:'',
            campus:'',
            company_name:'',
            job_description:''

        }
        this.onChange=this.onChange.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
      }

    render() {

        let style = {
            SettingsWrapper : {
                marginLeft:'20vw',
                backgroundColor:'#E3E7F1',
                minHeight:'100vh',
                paddingTop:150,
                paddingLeft:'2vw',
                paddingRight:'20vw',
                fontFamily:'Montserrat',
                fontSize:17

            },
            sideHead : {
                fontSize:24,
                marginBottom:20
            }
        }



        return (
            <div>
                <SideBar/>
                <div style={style.SettingsWrapper}>
                    <h1>Settings</h1>
                    <hr/>
                    <form>
                        <h3 style={style.sideHead}>Change Password:</h3>
                        <div>
                            <label>Old Password:</label>
                            <TextField
                            id="standard-basic"
                            className="mb-4"
                            name="old_password"
                            type="password"
                            onChange={this.onChange}
                            />  
                        </div>
                        <div>
                            <label>New Password:</label>
                            <TextField
                            id="standard-basic"
                            className="mb-4"
                            name="new_password"
                            type="password"
                            onChange={this.onChange}
                            />  
                        </div>
                        <div>
                            <label>New Password:</label>
                            <TextField
                            id="standard-basic"
                            className="mb-4"
                            name="retype_password"
                            type="password"
                            onChange={this.onChange}
                            />  
                        </div>
                        <h3 style={style.sideHead}>Change Campus:</h3>
                        <div>
                            <label>Select Campus:</label>
                            <select name="campus" className='ml-1'>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="62">62</option>
                            <option value="128">128</option>
                            </select>
                        </div>
                        <br/>
                        <h3 style={style.sideHead}>Job Details:</h3>
                        <div>
                            <label>Company's Name</label>
                            <TextField
                            id="standard-basic"
                            className="mb-4"
                            name="company_name"
                            type="text"
                            onChange={this.onChange}
                            />  
                        </div>
                        <div>
                        <label>Job's description</label>
                        <TextField
                            id="standard-basic"
                            className="mb-4"
                            name="job_description"
                            type="text"
                            onChange={this.onChange}
                            />  
                        </div>
                        <div style={{display:'flex',justifyContent:'flex-end',width:'50%'}}>
                            <input type="submit" name="submit" placeholder="Save settings" className="btn btn-primary btn-sm"></input>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}
export default Settings