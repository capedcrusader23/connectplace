import React, {Component} from 'react'

class TrendingCompanies extends Component {
    constructor() {
        super()
        this.state= {
            TrendingCompanies :[
                'Amazon','Groafers','Buy hatke','Infosys','Wipro'
            ]
            // Please fetch from backend
        }
    }
    // fetch trending companies from db
    render() {
        let trendingCompanies = this.state.TrendingCompanies.map(company => {
        return (<span class="badge badge-pill badge-primary">{company}</span>)
        })

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
export default TrendingCompanies