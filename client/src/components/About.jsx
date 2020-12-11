
import React from 'react';
import gif from '../images/typing_lady.gif';
import image from '../images/typer.png'

var style = {
    padding: 29,
    fontFamily: 'JetBrains Mono',
    fontSize: "larger",
    
}

class About extends React.Component {
    // constructor ()
    // {
    //     // useless constructor will add stuff later
    //     super()
    // }



    render()
    {
        return (
            <div style={style}>
           <h2>Why should I learn to code faster?</h2>
           <p>A lot of users can type normal text pretty fast without needing to see the keyboard as there are various sources on the web to learn about touch typing, but when it comes to coding people tend to peek at the keyboard to find the certain keys that we don't normally use while typing english words.</p>
           <p>So we decided to make Codoholic to help coders learn to code faster. On practise this will help you use your muscle memory to find keys fast, without using the sense of sight, and with all the available fingers, just like piano players do. This is an essential skill as a coder as it will increase your overall efficiency and save some time.</p>
           <h2>How do i get started?</h2>
           <img src={image} alt='typing position for fingers' />
           <p>Your left-hand fingers should be placed over the A, S, D, and F keys and the right-hand fingers should be placed over the J, K, L, and ; keys. These keys are considered the home row keys. Your thumbs should either be in the air or very lightly touching the spacebar key.</p>
           <p>The appropriate finger to be used for each key will be highlighted as your typing. Once you get the hang of it you will not need to see the keyboard or the hand to code. If two fingers are highlighted at a time then that indicates that you should use one for the key and the other for the shift key, it is important to use the correct shift key so that things go smoothly.</p>
           <h2>Should my palms be resting or should they be raised?</h2>
            <p>When typing, your palms should be raised and not resting on any surface, including a wrist pad, and held at a 10 to 30-degree angle. Raising or lowering your wrists too much in either direction or resting them while typing can cause stress and may lead to carpal tunnel syndrome.</p>

            <h2>Other keyboard safety tips</h2>
        {/* change the below text to a ul (list) remove p tag and make it <li> */}
        <ul style={{listStyle: 'circle'}}>
		   <li>While keeping your palms raised while typing, there are also other tips you can follow to help prevent carpal tunnel and pain while you type. Keep the following suggestions in mind every time you type.</li>
            <li>Keep your keyboard home row height as close to elbow level as possible.</li>
            <li>Center the spacebar with your body.</li>
            <li>Do not angle or bend your wrists. While typing keep your wrists elevated and as straight as possible. </li>
            <li>Avoid hunt-and-peck typing as it causes strain on the neck from having to look down at the keyboard often.</li>
            <li>Don't use more force than needed to press the keys.</li>
           <li> When you are not typing make sure to rest your arms and hands. However, never rest your arms, hands or wrist on a sharp edge.</li>
		   </ul>
            <img src={gif} alt='fast typing' />
            <p>With good practise you will see your coding pace go up gradually and you will be able to code effortlessly without having to worry about looking at the keyboard to find the closing bracket. <br /></p>
           </div>
        )
    }
    
}

export default About;