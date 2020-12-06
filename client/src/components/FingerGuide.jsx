import React from 'react';
import svgimg from '../images/backup/alpha_hands.svg';

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
    let fac = Math.random() < 0.5;

    return (
      <div>
    <span className = 'leftHand' style={{
      resize: 'horizontal',
      overflow: 'hidden',
      width: '50%',
      height: 'auto',
    }} > 
    <img src = {svgimg} />

                  {/* <svg width= "50%" viewBox="-1400 -6 2000 2000"  xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>background</title>
              <rect fill="none" id="canvas_background" height="748.279" width="748.279" y="-1" x="-1"/>
            </g>

            <g>
              <title>Left hand guide</title>
              <g stroke="null" strokeWidth="0" fill="#d3c26b" id="svg_1">
              <path stroke="null" fill="#d3c26b" id="svg_2" d="m186.757,140.89888c18.099,-2.46 27.659,12.74 28.846,29.688l13.495,134.416c0.252,6.244 5.518,11.114 11.769,10.862c6.244,-0.245 11.106,-5.51 10.862,-11.768l-8.186,-240.043c-0.597,-16.984 12.675,-31.234 29.658,-31.838c16.984,-0.604 31.234,12.675 31.846,29.651l8,238.13c0,5.036 4.085,9.114 9.113,9.114c5.036,0 9.114,-4.079 9.114,-9.114l0.007,-271.147c0,-16.983 13.775,-30.759 30.766,-30.759c16.99,0 30.766,13.775 30.766,30.759l0.223,266.091c0,5.719 4.634,10.322 10.358,10.351c8.366,0.043 10.014,-7.826 10.014,-7.826c0.201,-0.813 10.258,-236.439 10.258,-236.439c0.886,-16.969 15.364,-30.004 32.326,-29.112c16.971,0.877 30.013,15.365 29.119,32.327l-15.919,336.896c-1.611,10.121 5.294,19.623 15.415,21.234c10.129,1.611 19.631,-5.279 21.242,-15.408l29.355,-119.525c4.036,-16.516 20.688,-26.615 37.19,-22.587c16.509,4.042 26.615,20.695 22.58,37.197l-48.714,199.185c-0.899,3.654 -70.445,127.941 -95.803,133.904l0,69.172c0,22.127 -17.934,40.061 -40.053,40.061l-136.233,0c-22.126,0 -40.061,-17.934 -40.061,-40.061l0,-75.789c-35.88,-45.922 -49.541,-132.113 -50.116,-206.328l-17.408,-248.523c-1.179,-16.967 3.569,-30.513 20.171,-32.771z"/>
              </g>
              <g id="svg_3"/>
            <g id="svg_4"/>
            <g id="svg_5"/>
            <g id="svg_6"/>
            <g id="svg_7"/>
            <g id="svg_8"/>
            <g id="svg_9"/>
            <g id="svg_10"/>
            <g id="svg_11"/>
            <g id="svg_12"/>
            <g id="svg_13"/>
            <g id="svg_14"/>
            <g id="svg_15"/>
            <g id="svg_16"/>
            <g id="svg_17"/>

            
            {fingers.lp.includes(this.props.letter) ? <g id="lp">
            <path id="svg_43" d="m167.61904,168.09523l47.14286,-4.7619l14.7619,146.66667c0.47619,0.47619 -16.66667,54.7619 -51.42857,8.09523" strokeOpacity="null" strokeWidth="0" stroke="#000" fill="#cea4f9"/>
            <ellipse stroke="#000" ry="22.61905" rx="23.57143" id="svg_41" cy="164.52381" cx="189.71428" strokeWidth="0" fill="#cea4f9"/>
            </g> : null }

            {fingers.lr.includes(this.props.letter) ? <g id="lr">
            <ellipse stroke="#000" ry="34.7619" rx="30.47619" id="svg_45" cy="65.66667" cx="275.23809" strokeOpacity="null" strokeWidth="0" fill="#cea4f9"/>
            <path id="svg_49" d="m254.33336,305.19047l-7.14285,-181.90476c0.47618,0.47619 -0.95239,-53.33333 -0.95239,-53.33333c0,0 60.47619,-9.52381 60,-10c0.47619,0.47619 8.57143,240 8.09524,239.52381c0.47619,0.47619 -19.52381,54.7619 -60,5.71428z" strokeOpacity="null" strokeWidth="0" stroke="#000" fill="#cea4f9"/>
            </g> : null }

            {fingers.lm.includes(this.props.letter) ?  <g id="lm">
            <ellipse ry="32.00088" rx="30.00085" id="svg_50" cy="29.58328" cx="363.63921" strokeOpacity="null" strokeWidth="0" fill="#cea4f9" stroke="#000"/>
            <path id="svg_56" d="m333.63841,300.59065c25.00069,33.0009 62.00171,-1.00003 61.37243,-1.58242c0.62928,0.58239 -1.37078,-263.42484 -2.00005,-264.00724c0.62927,0.5824 -60.3724,-4.41774 -61.00168,-5.00014" strokeOpacity="null" strokeWidth="0" fill="#cea4f9" stroke="#000"/>
            </g> : null}
            
            {fingers.li.includes(this.props.letter) ? <g id="li">
            <ellipse stroke="#000" ry="33.50092" rx="31.50086" id="svg_57" cy="64.08423" cx="455.14174" strokeOpacity="null" strokeWidth="0" fill="#cea4f9"/>
            <path stroke="#000" id="svg_60" d="m415.64066,300.59062c21.29891,41.00113 58.82556,8.00022 58.18735,7.41783c0.63821,0.58239 13.82325,-239.42418 13.18504,-240.00658c0.63821,0.5824 -62.24428,-3.41771 -62.88249,-4.00011" strokeOpacity="null" strokeWidth="0" fill="#cea4f9"/>
            </g> : null}

            {((this.props.letter === ' ' ) && (fac) )? <g id="lt">
            <ellipse stroke="#000" ry="32.00088" rx="31.00085" id="svg_62" cy="295.59054" cx="565.6448" strokeOpacity="null" strokeWidth="0" fill="#cea4f9"/>
            <path id="svg_65" d="m503.64307,418.59385c-7.00019,64.00176 57.00156,30.00083 56.3723,29.41844c0.62926,0.58239 35.63022,-144.42159 35.00096,-145.00398c0.62926,0.58239 -56.3723,-20.41818 -56.3723,-20.41818" strokeOpacity="null" strokeWidth="0" stroke="#000" fill="#cea4f9"/>
            </g> : null }
              
              </g>
  
            </svg>
    </span>

    <span className = 'leftHand' style={{
      resize: 'horizontal',
      overflow: 'hidden',
      width: '50%',
      height: 'auto',
    }} >
            <svg width= "50%" viewBox="150 -6 2000 2000"  xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>background</title>
        <rect x="-1" y="-1" width="748.278" height="748.277" id="canvas_background" fill="none"/>
      </g>

      <g>
        <title>Right hand guide</title>
        <g id="svg_1" fill="white">
        <path d="m565.52,140.808c-18.1,-2.46 -27.659,12.74 -28.846,29.688l-13.495,134.416c-0.252,6.244 -5.518,11.114 -11.769,10.862c-6.244,-0.245 -11.106,-5.51 -10.861,-11.768l8.186,-240.043c0.598,-16.984 -12.675,-31.234 -29.657,-31.838c-16.984,-0.604 -31.234,12.675 -31.847,29.651l-7.999,238.13c0,5.036 -4.085,9.114 -9.114,9.114c-5.034,0 -9.112,-4.079 -9.112,-9.114l-0.008,-271.147c0,-16.983 -13.776,-30.759 -30.767,-30.759s-30.767,13.775 -30.767,30.759l-0.224,266.091c0,5.719 -4.633,10.322 -10.357,10.351c-8.366,0.043 -10.014,-7.826 -10.014,-7.826c-0.201,-0.816 -10.258,-236.442 -10.258,-236.442c-0.885,-16.969 -15.363,-30.004 -32.325,-29.112c-16.971,0.877 -30.012,15.365 -29.119,32.327l15.919,336.895c1.61,10.121 -5.294,19.623 -15.415,21.234c-10.129,1.611 -19.631,-5.279 -21.242,-15.408l-29.356,-119.524c-4.036,-16.516 -20.688,-26.615 -37.19,-22.587c-16.509,4.042 -26.615,20.695 -22.58,37.197l48.714,199.186c0.899,3.652 70.445,127.939 95.802,133.902l0,69.174c0,22.127 17.935,40.061 40.054,40.061l136.235,0c22.126,0 40.061,-17.934 40.061,-40.061l0,-75.789c35.88,-45.924 49.54,-132.113 50.116,-206.328l17.407,-248.525c1.178,-16.963 -3.57,-30.509 -20.172,-32.767z" id="svg_2" fill="#d3c26b"/>
        </g>
        <g id="svg_3"/>
        <g id="svg_4"/>
        <g id="svg_5"/>
        <g id="svg_6"/>
        <g id="svg_7"/>
        <g id="svg_8"/>
        <g id="svg_9"/>
        <g id="svg_10"/>
        <g id="svg_11"/>
        <g id="svg_12"/>
        <g id="svg_13"/>
        <g id="svg_14"/>
        <g id="svg_15"/>
        <g id="svg_16"/>
        <g id="svg_17"/>
        
        
        {fingers.rp.includes(this.props.letter) ? <g id="rp">
        <ellipse fill="#cea4f9" strokeWidth="0" strokeOpacity="null" fillOpacity="null" cx="563.13901" cy="165.59163" id="svg_28" rx="24.5" ry="26" stroke="#000"/>
        <path fill="#cea4f9" strokeWidth="0" strokeOpacity="null" fillOpacity="null" d="m523.63901,310.59163c15.24434,53 52.84704,13 52.19762,12.40837c0.64942,0.59163 10.81231,-159.40837 10.16289,-160c0.64942,0.59163 -46.09989,-5.40837 -46.74931,-6" id="svg_31" stroke="#000"/>
        </g> : null}
        
        {fingers.rr.includes(this.props.letter) ? <g id="rr">
        <ellipse fill="#cea4f9" strokeWidth="0" strokeOpacity="null" fillOpacity="null" cx="478.13901" cy="66.59163" id="svg_24" rx="30.5" ry="36" stroke="#000"/>
        <path fill="#cea4f9" strokeWidth="0" strokeOpacity="null" fillOpacity="null" d="m441.63901,301.59163c24,48 59,5 58.36099,4.40837c0.63901,0.59163 8.63901,-232.40837 8,-233c0.63901,0.59163 -58.36099,-6.40837 -59,-7" id="svg_26" stroke="#000"/>
        </g>: null}

        {fingers.rm.includes(this.props.letter) ? <g id="rm">
        <ellipse stroke="#000" fill="#cea4f9" strokeWidth="0" strokeOpacity="null" fillOpacity="null" cx="391.13901" cy="34.59163" id="svg_22" rx="31.5" ry="39"/>
        <path stroke="#000" fill="#cea4f9" strokeWidth="0" strokeOpacity="null" fillOpacity="null" d="m361.63901,298.59163c25,50 60,2 59.36099,1.40837c0.63901,0.59163 0.63901,-259.40837 0,-260c0.63901,0.59163 -60.36099,-1.40837 -61,-2" id="svg_23"/>
        </g>:null}

        {fingers.ri.includes(this.props.letter) ? <g id="ri">
        <ellipse stroke="#000" fill="#cea4f9" strokeWidth="0" strokeOpacity="null" cx="299.13901" cy="64.59163" id="svg_20" rx="30.5" ry="34"/>
        <path fill="#cea4f9" stroke="#000" strokeWidth="0" strokeOpacity="null" fillOpacity="null" d="m280.63901,306.59163l-13.63901,-240.59163l62,5l10,228c0.63901,0.59163 -17.36099,38.59163 -36.36099,28.59163c-19,-10 -17,-10 -22,-21z" id="svg_21"/>
        </g> : null}

        {((this.props.letter === ' ' ) && (!fac))? <g id="rt">
        <ellipse fill="#cea4f9" strokeWidth="0" cx="188.13901" cy="296.09163" id="svg_18" rx="30.5" ry="30.5" stroke="#000"/>
        <path fill="#cea4f9" strokeWidth="0" strokeOpacity="null" d="m195.63901,457.40948c65,30.73143 54,-40.97524 53.36099,-41.58129c0.63901,0.60605 -28.36099,-118.22213 -29,-118.82819c0.63901,0.60605 -61.36099,3.6792 -62,3.07314" id="svg_19" stroke="#000"/>
        </g> : null}


      </g>
      </svg> */}

    </span>
    </div>);

  }
  
  }



export default FingerGuide;