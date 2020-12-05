import React from 'react';

const style = {
    backgroundColor: '#28abb9',
    color: 'white',
    border: '6px solid white',
    fontFamily: 'monospace',
    padding : 30,
    fontSize: 22,
}


class Results extends React.Component {
    // constructor (props)
    // {
    //     // useless constructor will add stuff later
    //     super(props);
    //     }
        



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
                Speed: {this.props.userResults.wpm}WPM<br/>
                Errors: {this.props.userResults.errors}<br/>
                Accuracy: {this.props.userResults.accuracy}%<br/>
                Time: {Math.round(this.props.userResults.elapsedTime)} seconds<br/>
                <button onClick = {this.clickHandle}>Go again</button>
            </div>
            );
        }
        return null;
    }

}


export default Results;