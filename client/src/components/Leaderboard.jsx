/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';


const fetch = require('node-fetch');

class Leaderboard extends React.Component {
    constructor ()
    {
        // useless constructor will add stuff later
        super();
        this.state = {res : []}
    }
        

        

        
    // }
    componentDidMount()
    {

    //     axios.get(`http:localhost:5000/profile`)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })
        
        fetch('http://localhost:5000/profile').then(res => res.json())
        .then(json => {
            this.setState({
                res : json
            })
        });

        console.log(this.state.res);
        
        
    }
    processData = () => (this.state.res.map((ele,index) => {
            return (
                <div key = {index} >
                    #{index+1}{ele.user.name}
                    <img src = {ele.user.avatar} alt = 'user-pic' />
                    Speed : {ele.wpm}WPM
                </div>
            );
        }))



    render()
    {
        return (
           <div>{this.processData()}</div>
        )
    }
}

export default Leaderboard;