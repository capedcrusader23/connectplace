import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getcomp} from '../../actions/authActions'
import Loader from 'react-loader-spinner'

class TrendingCompanies extends Component {
    constructor() {
        super()
        
    }
    componentWillMount()
    {
        this.props.getcomp();
    }
    render() {
        let trendingCompanies 

        if(this.props.post.company.length==0)
        {
            trendingCompanies=<Loader></Loader>
        }
        else
        {
            trendingCompanies=this.props.post.company.map((x)=>{
                return <span class="badge badge-pill badge-primary">{x.cat}</span>
            })
        }


        let style = {
            cardWrapper :{
                position:'absolute',
                right:20,
                minWidth:20,
                top:150,
                backgroundColor:'white',
                padding:30,
                paddingTop:20
            },
            TrendingHeading :{
                fontSize:22
            },
            Grid : {
                display:'grid',
                gridTemplateColumns:'50% 50% ',
                gridGap:10
            }
            
        }
        return (
            <div style={style.cardWrapper}>
                <h3 style={style.TrendingHeading}>Trending Companies</h3>
                <hr/>
                <div style={style.Grid}>
                    {trendingCompanies}
                </div>
            </div>
        )
    }
}

const mapStatetoProps=(state)=>({
    post:state.post
})
export default connect(mapStatetoProps,{getcomp})(TrendingCompanies)