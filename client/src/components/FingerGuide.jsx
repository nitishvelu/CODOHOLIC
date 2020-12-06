import React from 'react';


const fingers = {
  lp : ['~','`','!','1','↹','q','a','z','^','&','*','(',")",'Q','A','Z',"_","+","{","}","|",":",`"`,'<',">","?",'Y','U','I','O','P','H','J','K','L','N','M'],
  lr : ['@','2','w','s','x','W','S','X'],
  lm : ['#','3','e','d','c','E','D','C'],
  li : ['$','4','%','5','r','t','f','g','v','b','R','T','F','G','V','B'],
  ri : ['^','6','&','7','y','u','h','j','n','m','Y','U','H','J','N','M'],
  rm : ['*','8','i','k','<',',','I','K'],
  rr : ["(" ,"9","o","l",">",".",'O','L'],
  rp : [")", "0","p",'P',";", ":","?" ,"/","-", "_","[", "{",`"` ,`'`,"+", "=","]", "}", '\\' , "|", "⏎",'~','!','@','#','$','%','Q','W','E','R','T','A','S','D','F','G','Z','X','C','V','B']
}


class FingerGuide extends React.Component {
  // constructor(props)
  // {
  //   //useless constructor will add stuff later
  //  super(props);
  // }

  render()
  {
    const mainHandColor= "#999696";
    let fac = Math.random() < 0.5;
    var highlight = '#36ff00';
    //fingers.lp.includes(this.props.letter)
    return (
      <div>
        {/* <span style = {{
          margin: "0 auto",
          width: 800,
          height: 500,
        }}> */}
    <span className = 'hands' style={{
      resize: 'horizontal',
      overflow: 'hidden',
      width: 'auto',
      height: 'auto',
    }} > 
    

<svg width="100%" viewBox="-900 -15 2500 500" xmlns="http://www.w3.org/2000/svg">
<g>
 <title>background</title>
 <rect fill="none" id="canvas_background" height="482" width="720" y="-1" x="-1"/>
</g>
<g>
 <title>Layer 1</title>
 <g id="svg_1" transform="matrix(-1,0,0,1,336,0) ">
  <path id="svg_2" fill={mainHandColor} d="m59.94531,288.25781l11.3125,-11.3125l58.88672,58.88672l-11.3125,11.3125l-58.88672,-58.88672zm0,0"/>
  <path id="svg_3" fill={mainHandColor} d="m295,400l0,80l-144,0l0,-80"/>
  <path id="left_han" fill="#346372" d="m303,400l-160,0c-17.67187,0 -32,-14.32812 -32,-32l0,-128l224,0l0,128c0,17.67188 -14.32812,32 -32,32zm0,0"/>
  <path id="lt" fill={this.props.letter === ' ' && fac ? highlight : "#346372"} d="m79,328l-75.03125,-75.03125c-3.18359,-3.18359 -4.96875,-7.49609 -4.96875,-12l0,-8c0,-9.36719 7.60156,-16.96875 16.96875,-16.96875c4.50391,0 8.81641,1.78516 12,4.96875l51.03125,51.03125l0,56zm0,0"/>
  <path id="li" fill={fingers.li.includes(this.props.letter) ? highlight : "#346372"} d="m127,32c-8.83984,0 -16,7.16016 -16,16l0,128l32,0l0,-128c0,-8.83984 -7.16016,-16 -16,-16zm0,0"/>
  <path id="lr" fill={fingers.lr.includes(this.props.letter) ? highlight : "#346372"} d="m255,32c-8.83984,0 -16,7.16016 -16,16l0,128l32,0l0,-128c0,-8.83984 -7.16016,-16 -16,-16zm0,0"/>
  <path id="lp" fill={fingers.lp.includes(this.props.letter) ? highlight : "#346372"} d="m319,80c-8.83984,0 -16,7.16016 -16,16l0,80l32,0l0,-80c0,-8.83984 -7.16016,-16 -16,-16zm0,0"/>
  <path id="lm" fill={fingers.lm.includes(this.props.letter) ? highlight : "#346372"} d="m191,0c-8.83984,0 -16,7.16016 -16,16l0,160l32,0l0,-160c0,-8.83984 -7.16016,-16 -16,-16zm0,0"/>
  <g id="svg_10" fill="#857970">
   <path id="svg_11" fill={mainHandColor} d="m175,144l32,0l0,32l-32,0l0,-32zm0,0"/>
   <path id="svg_12" fill={mainHandColor} d="m111,144l32,0l0,32l-32,0l0,-32zm0,0"/>
   <path id="svg_13" fill={mainHandColor} d="m239,144l32,0l0,32l-32,0l0,-32zm0,0"/>
   <path id="svg_14" fill={mainHandColor} d="m303,144l32,0l0,32l-32,0l0,-32zm0,0"/>
   <path id="svg_15" fill={mainHandColor} d="m119,176l16,0l0,64l-16,0l0,-64zm0,0"/>
   <path id="svg_16" fill={mainHandColor} d="m183,176l16,0l0,64l-16,0l0,-64zm0,0"/>
   <path id="svg_17" fill={mainHandColor} d="m247,176l16,0l0,64l-16,0l0,-64zm0,0"/>
   <path id="svg_18" fill={mainHandColor} d="m311,176l16,0l0,64l-16,0l0,-64zm0,0"/>
  </g>
  <path id="svg_19" fill="#45d3bf" d="m215,328l16,0l0,120l-16,0l0,-120zm0,0"/>
  <path id="svg_20" fill="#45d3bf" d="m199,448l-16,0l0,-68.6875l-29.65625,-29.65625c-1.50391,-1.49609 -2.34375,-3.52734 -2.34375,-5.65625l0,-48l16,0l0,44.6875l29.65625,29.65625c1.50391,1.49609 2.34375,3.52734 2.34375,5.65625l0,72zm0,0"/>
  <path id="svg_21" fill="#45d3bf" d="m263,448l-16,0l0,-72c0,-2.12891 0.83984,-4.16016 2.34375,-5.65625l29.65625,-29.65625l0,-44.6875l16,0l0,48c0,2.12891 -0.83984,4.16016 -2.34375,5.65625l-29.65625,29.65625l0,68.6875zm0,0"/>
  <path id="svg_22" fill={mainHandColor} d="m239,320c0,8.83594 -7.16406,16 -16,16s-16,-7.16406 -16,-16s7.16406,-16 16,-16s16,7.16406 16,16zm0,0"/>
  <path id="svg_23" fill={mainHandColor} d="m175,288c0,8.83594 -7.16406,16 -16,16s-16,-7.16406 -16,-16s7.16406,-16 16,-16s16,7.16406 16,16zm0,0"/>
  <path id="svg_24" fill={mainHandColor} d="m303,288c0,8.83594 -7.16406,16 -16,16s-16,-7.16406 -16,-16s7.16406,-16 16,-16s16,7.16406 16,16zm0,0"/>
 </g>
 <g stroke="null" id="svg_80">
  <g stroke="null" transform="matrix(0.9980162785568536,0,0,0.9980162785568536,-5849.977310762188,-349.7703019517503) " id="svg_56">
   <path stroke="null" id="svg_57" fill={mainHandColor} d="m6305.30975,640.05935l11.3125,-11.3125l58.88672,58.88672l-11.3125,11.3125l-58.88672,-58.88672zm0,0"/>
   <path stroke="null" id="svg_58" fill={mainHandColor} d="m6540.36444,751.80154l0,80l-144,0l0,-80"/>
   <path stroke="null" id="left_han" fill="#346372" d="m6548.36444,751.80154l-160,0c-17.67187,0 -32,-14.32812 -32,-32l0,-128l224,0l0,128c0,17.67188 -14.32812,32 -32,32zm0,0"/>
   <path stroke="null" id="rt" fill={this.props.letter === ' ' && !fac ? highlight : "#346372"} d="m6324.36444,679.80154l-75.03125,-75.03125c-3.18359,-3.18359 -4.96875,-7.49609 -4.96875,-12l0,-8c0,-9.36719 7.60156,-16.96875 16.96875,-16.96875c4.50391,0 8.81641,1.78516 12,4.96875l51.03125,51.03125l0,56zm0,0"/>
   <path stroke="null" id="ri" fill={fingers.ri.includes(this.props.letter) ? highlight : "#346372"} d="m6372.36444,383.80154c-8.83984,0 -16,7.16016 -16,16l0,128l32,0l0,-128c0,-8.83984 -7.16016,-16 -16,-16zm0,0"/>
   <path stroke="null" id="rr" fill={fingers.rr.includes(this.props.letter) ? highlight : "#346372"} d="m6500.36444,383.80154c-8.83984,0 -16,7.16016 -16,16l0,128l32,0l0,-128c0,-8.83984 -7.16016,-16 -16,-16zm0,0"/>
   <path stroke="null" id="rp" fill={fingers.rp.includes(this.props.letter) ? highlight : "#346372"} d="m6564.36444,431.80154c-8.83984,0 -16,7.16016 -16,16l0,80l32,0l0,-80c0,-8.83984 -7.16016,-16 -16,-16zm0,0"/>
   <path stroke="null" id="rm" fill={fingers.rm.includes(this.props.letter) ? highlight : "#346372"} d="m6436.36444,351.80154c-8.83984,0 -16,7.16016 -16,16l0,160l32,0l0,-160c0,-8.83984 -7.16016,-16 -16,-16zm0,0"/>
   <g stroke="null" id="svg_65" fill="#857970">
    <path stroke="null" id="svg_66" fill={mainHandColor} d="m6420.36444,495.80154l32,0l0,32l-32,0l0,-32zm0,0"/>
    <path stroke="null" id="svg_67" fill={mainHandColor} d="m6356.36444,495.80154l32,0l0,32l-32,0l0,-32zm0,0"/>
    <path stroke="null" id="svg_68" fill={mainHandColor} d="m6484.36444,495.80154l32,0l0,32l-32,0l0,-32zm0,0"/>
    <path stroke="null" id="svg_69" fill={mainHandColor} d="m6548.36444,495.80154l32,0l0,32l-32,0l0,-32zm0,0"/>
    <path stroke="null" id="svg_70" fill={mainHandColor} d="m6364.36444,527.80154l16,0l0,64l-16,0l0,-64zm0,0"/>
    <path stroke="null" id="svg_71" fill={mainHandColor} d="m6428.36444,527.80154l16,0l0,64l-16,0l0,-64zm0,0"/>
    <path stroke="null" id="svg_72" fill={mainHandColor} d="m6492.36444,527.80154l16,0l0,64l-16,0l0,-64zm0,0"/>
    <path stroke="null" id="svg_73" fill={mainHandColor} d="m6556.36444,527.80154l16,0l0,64l-16,0l0,-64zm0,0"/>
   </g>
   <path stroke="null" id="svg_74" fill="#45d3bf" d="m6460.36444,679.80154l16,0l0,120l-16,0l0,-120zm0,0"/>
   <path stroke="null" id="svg_75" fill="#45d3bf" d="m6444.36444,799.80154l-16,0l0,-68.6875l-29.65625,-29.65625c-1.50391,-1.49609 -2.34375,-3.52734 -2.34375,-5.65625l0,-48l16,0l0,44.6875l29.65625,29.65625c1.50391,1.49609 2.34375,3.52734 2.34375,5.65625l0,72zm0,0"/>
   <path stroke="null" id="svg_76" fill="#45d3bf" d="m6508.36444,799.80154l-16,0l0,-72c0,-2.12891 0.83984,-4.16016 2.34375,-5.65625l29.65625,-29.65625l0,-44.6875l16,0l0,48c0,2.12891 -0.83984,4.16016 -2.34375,5.65625l-29.65625,29.65625l0,68.6875zm0,0"/>
   <path stroke="null" id="svg_77" fill={mainHandColor} d="m6484.36444,671.80154c0,8.83594 -7.16406,16 -16,16s-16,-7.16406 -16,-16s7.16406,-16 16,-16s16,7.16406 16,16zm0,0"/>
   <path stroke="null" id="svg_78" fill={mainHandColor} d="m6420.36444,639.80154c0,8.83594 -7.16406,16 -16,16s-16,-7.16406 -16,-16s7.16406,-16 16,-16s16,7.16406 16,16zm0,0"/>
   <path stroke="null" id="svg_79" fill={mainHandColor} d="m6548.36444,639.80154c0,8.83594 -7.16406,16 -16,16s-16,-7.16406 -16,-16s7.16406,-16 16,-16s16,7.16406 16,16zm0,0"/>
  </g>
 </g>
</g>
</svg>

    </span>
    </div>);

  }
  
  }



export default FingerGuide;