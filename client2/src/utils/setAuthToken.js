//THIS file take care of adding token in header of every request.
import axios from 'axios'

const setAuthToken=token=>{
    if(token)
    {
        axios.defaults.headers.common['Authorization']=token;
    }
    else
    {
        delete axios.defaults.headers.common['Authorization']
    }
}
export default setAuthToken;