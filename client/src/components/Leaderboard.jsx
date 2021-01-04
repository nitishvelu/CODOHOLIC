/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {computeAverage} from './Profile'
import Spinner from './Spinner';
import './Leaderboard.css';
import java from '../images/java.svg';
import python from '../images/python.svg';
import cpp from '../images/cpp.svg';
import c from '../images/c.svg';
import eng from '../images/eng.svg';
import noob from '../images/noob.svg';


const fetch = require('node-fetch');





class Leaderboard extends React.Component {
    constructor ()
    {
        // useless constructor will add stuff later
        super();
        this.state = {res : [],loading: true}
    }
        

        

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
        
        
    }

    toNum =  (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    printLang = (ele) => {
        let arr = [],arr1 = [];
        let i;
        if(ele.java.length > 4)
           arr.push(java);
        if(ele.CPP.length > 4)
            arr.push(cpp);
        if(ele.python.length > 4)
            arr.push(python);
        if(ele.C.length > 4)
            arr.push(c);
        if(ele.english.length > 4)
            arr.push(eng);
        // return (
        //     <span>{JSON.stringify(arr)}</span>
        // )
        for(i = 0;i<arr.length;i++)
        arr1[i] = (<img src = {arr[i]} key={i} width={30} style={{padding: '1px', margin: '0'}} alt="lang"/>)
        if(arr1.length === 0)
        return (<a href="#leader-sheet" data-toggle="tooltip" title="NewBie!"><img src = {noob} width={30} style={{padding: '1px', margin: '0'}} alt="lang"/></a>)
        return arr1;
            
    }


    processData = () => (this.state.res.map((ele,index) => {
            return (
                <div  className="leader-box"  key = {index} >
                    <img className = "profile-pics" width ='120px' src = {ele.user.avatar} alt = 'user-pic' />
                    <div style={{width: '30%'}}>
                    <div style={{minWidth: 200, padding: 10,fontFamily: 'JetBrains Mono'}}>
                    <div >
                        {`#${index+1} - ${ele.user.name}`}
                        </div>

                    <div >
                    {`Speed : ${ele.wpm}WPM`}
                        </div>
                        <div >
                    {`Accuracy : ${computeAverage(ele.accuracy)}`}
                        </div>
                    <div>{`Characters : ${this.toNum(ele.noOfCharacters)}`}</div>
                    <div>{`Languages : `}{this.printLang(ele)}</div>
                    </div>
                    <hr />
                    </div>
            
                </div>
            );
        }));

    render()
    {
        return (this.state.loading? <Spinner/>:
           <div id="leader-sheet" style={{marginBottom: 35}}>{this.processData()}</div>
        )
    }
}

export default Leaderboard;