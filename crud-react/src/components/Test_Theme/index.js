import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';

// import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { useTheme,ThemeContext } from "../../ThemeContext";

export default function Test_Theme(props) {

    const themeState = useTheme();

    const dispatch = useDispatch();

    function achangeTheme() {
        themeState.toggle()
        console.log('themeState',this.props )
    }

    
 
    // useEffect(() => {
        
    //     console.log('state',props.theme)
    // }, [props.theme]);

    // 
//     return (
//         <>
//             <h1>Dark Mode example</h1>
//             <div>
//                 <button onClick={() => achangeTheme()
//                 }>
//                     {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//                 </button>
//             </div>
            
//         </>
//     );

// }

return (
    <ThemeContext.Consumer>
      {({dark, toggle}) => (
        <button
          onClick={toggle}
        //   style={{backgroundColor: dark.body}}
        >
          Toggle Theme
        </button>
      )}
      

    </ThemeContext.Consumer>
  );
}