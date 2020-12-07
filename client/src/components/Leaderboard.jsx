/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {computeAverage} from './Profile'
import Spinner from './Spinner';


const fetch = require('node-fetch');

class Leaderboard extends React.Component {
    constructor ()
    {
        // useless constructor will add stuff later
        super();
        this.state = {res : [],loading: true}
    }
        

        

    // }
    componentDidMount()
    {

    //     axios.get(`http:localhost:5000/profile`)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })
        
        fetch('/profile').then(res => res.json())
        .then(json => {
            this.setState({
                res : json,
                loading:false

            })
        });

        console.log(this.state.res);
        
        
    }
    processData = () => (this.state.res.map((ele,index) => {
            return (
                <div style={{padding: '20px 10px', display: 'flex', justifyContent:'center', alignItems:'center', fontSize:24, lineHeight:'40px'}} key = {index} >
                    <img width ='120px' style={{borderRadius: '50%'}} src = {ele.user.avatar} alt = 'user-pic' />
                    <div>
                    <div style={{minWidth: 200, padding: 10,fontFamily: 'JetBrains Mono'}}>
                    <div >
                        {`# ${index+1} - ${ele.user.name}`}
                        </div>

                    <div >
                    {`Speed : ${ele.wpm} WPM`}
                        </div>
                        <div >
                    {`Accuracy : ${computeAverage(ele.accuracy)}`}
                        </div>
                    </div>
                    <hr />
                    </div>
                </div>
            );
        }))



    render()
    {   //this.state.loading? <Spinner/>:
        return (
           <div>{this.processData()}</div>
        )
    }
}

export default Leaderboard;