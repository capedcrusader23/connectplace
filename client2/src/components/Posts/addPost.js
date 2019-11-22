import React , {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux'
import {addpost} from '../../actions/authActions'
class AddPost extends Component {
    constructor() {
        super()
        this.state= {
            content:'',
            category:'',
            companyName: '',
            ques:'',
            jobDescription:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    togglePostCategory (category) {
        this.setState({category:category})
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
      }
    onSubmit(e){
          console.log(this.props.auth)
        e.preventDefault();
        let user={
            ...this.state,
            ...this.props.auth.user.id
        }
        this.props.addpost(user);
    }

    render() {
        let style = {
            AddPost : {
                backgroundColor:'white',
                width:'100%',
                padding:20,
                borderRadius:10,
                fontFamily:'Montserrat',
                fontWeight:300,
                fontSize:14,
                marginBottom:5,
                cursor:'pointer',
                
            },
            content: {
                border:0,
                width:'100%',
                resize:'none',
                fontSize:17,
                height:200
            },
            SubmitDiv : {
                width:'100%',
                display:'flex',
                justifyContent:'flex-end'
            },
            Opt : {
                fontSize:16
            },

            
        }

        const IEform = (
            <form>
            <textarea style={style.content} placeholder='Tell about your interview experience' />
            <br/> 
            <div className='row p-3' style={{fontSize:11}}>
                <TextField
                className='col-6 pr-1'
                id="standard-basic"
                label="Company Name"
                type="email"
                fullWidth
                name='email'
                onChange={this.onChange}
                /> 
                <TextField
                className='col-6'
                id="standard-basic"
                label="Job Description"
                name="email"
                type="email"
                fullWidth
                onChange={this.onChange}
                />  
            </div> 
            <div style={style.SubmitDiv}>
                <input type='Submit' value='Add Post'  className='btn btn-primary'/>
            </div>  
            </form>
        )

        const GQForm = (
            <form>
            <TextField
                id="standard-basic"
                label="Title goes here"
                className="mb-4"
                name="title"
                type="text"
                fullWidth
                onChange={this.onChange}
                />  
            <textarea style={style.content} placeholder='Tell about your interview experience' />
            <br/> 
            <div style={style.SubmitDiv}>
                <input type='Submit' value='Add Post' className='btn btn-primary'/>
            </div> 
            </form>
        )


        return (
            // <div >
            //     <div style={style.Wrapper}>
            //         <h1>Add Post</h1>
            //         <hr/>
            //         <form
            //         onSubmit={this.onSubmit}
            //         >
            //             <label>Add Content</label>
            //             <br/>
            //             <textarea
            //             name='content'
            //             onChange={this.onChange}
            //             />
            //             <br/>
            //             <label>Select Post Type</label>
            //             <br/>
            //             <select name='category' onChange={this.onChange}>
            //                 <option value='Query'>General Query</option>
            //                 <option value='Interview Experience'>Interview Experience</option>
            //             </select>
            //             <br/>
            //             <label>Add Company Name</label>
            //             <br/>
            //             <input type='text' name='companyName' onChange = {this.onChange}/>
            //             <br/>
            //             <br/>
                       
            //             <input type='submit' value='Add Post'/>
            //         </form>
            //     </div>
            // </div>




            <div>
                <div style={style.AddPost} data-toggle="modal" data-target="#exampleModal">
                Write an Experience or Ask a Question.
                </div>
                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content p-1">
                        <div style={style.Opt}>
                            <a href="#" className='mr-3' style={{color: (this.state.category === 'IE')  ? 'red' : ''}} onClick={() =>  this.togglePostCategory('IE')}>Interview Experience</a>
                            <a href="#" onClick={() =>  this.togglePostCategory('GQ')} style={{color: (this.state.category === 'GQ')  ? 'red' : ''}}>Query</a>
                            <hr style={{marginTop:0}}/>
                        </div>
                        
                        {(this.state.category === 'IE') ? IEform : GQForm }    
                    </div>
                </div>
                </div>
            </div>
            
            
        )
    }
}

const mapStatetoProps=(state)=>({
    auth:state.auth,
    post:state.post
})
export default connect(mapStatetoProps,{addpost})(AddPost)