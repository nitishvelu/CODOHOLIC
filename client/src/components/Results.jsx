import React from 'react';

const style = {
    backgroundColor:  '#1a062b',
    color: 'white',
    fontFamily: 'JetBrains mono',
    padding : 30,
    fontSize: 22,
    lineHeight: '50px',
}

// const buttonStyle = {
//     fontFamily: 'JetBrains mono',
//     backgroundColor:  '#0E2773',
// }


class Results extends React.Component {
    constructor (props)
    {
        super(props);
        // useless constructor will add stuff later
        this.state = {
            data: null
        };
        
    }
    
    componentDidMount() {

        fetch('http://quotes.stormconsultancy.co.uk/random.json').then(res => res.json())
        .then(json => {
            let qobj = json;
            this.setState ({
                data: qobj
            });
        });
        
    }

        



    clickHandle = () => {

        //temp fix just reloading page
        window.location.reload(false);
        document.getElementById('sampBox').style.display = 'block';
        document.getElementById('controller').style.display = 'block';
        document.getElementById('controller').innerHTML = 'Click to start';
        console.log(document.getElementById('controller').innerHTML);
        document.getElementById('result').style.display = 'none';
    }

    render()
    {

        if(this.props.data)
        {
            return (
            <div style={style}>
                {this.state.data ? <span style={{ fontStyle : "oblique" }}>"{this.state.data.quote}" ~{this.state.data.author} <br / > <br /> </span> : <br / >}
                Speed: {this.props.userResults.wpm}WPM<br/> 
                Errors: {this.props.userResults.errors}<br/>
                Accuracy: {this.props.userResults.accuracy}%<br/>
                Time: {Math.round(this.props.userResults.elapsedTime)} seconds<br/>
                <button  onClick = {this.clickHandle}>Go again</button>
            </div>
            );
        }
        return null;
    }

}


export default Results;