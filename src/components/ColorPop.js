import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import {makeStyles} from '@material-ui/core'
const COLORS = [
  "white",
  "orange",
  "yellow",
  "green",
  "turquoise",
  "blue",
  "purple",
  "pink",
];



const useStyles = makeStyles({
  
    Frame : {
    display: 'block',
    border: 'solid 1px rgb(211, 211, 211)',
    backgroundColor: 'white',
    boxShadow: '1px 2px 1px rgb(216, 216, 216)',

  },
  a_button : {
      height: '30px',
      width: '30px',
      margin: '2px',
      flex: '1',
      borderRadius: '100%',
      border: 'solid 1px rgb(187, 186, 186)'
    },

    white : {
      backgroundColor: '#ffffff'
    }
 
    ,
    orange: {
      backgroundColor: '#ffe3be'
    }
    ,
    yellow :{
      backgroundColor: '#fffccb'
    }
    ,
    green: {
      backgroundColor: '#edffcd'
    },
    turquoise :{
      backgroundColor: '#d3fff8'
    },

    blue :{
      backgroundColor: '#d5f2ff'
    },
    purple : {
      backgroundColor: '#CBC3E3'
    },

    pink : {
      backgroundColor: '#fdd8f4'
    }
})

const colors = [ '#ffffff'
,
'#ffe3be'
,
  '#fffccb',

'#edffcd',
 '#d3fff8',

'#d5f2ff',

'#CBC3E3'
,
 '#fdd8f4'

]


function ColorPop(props) {

  const classes = useStyles(props);


  const COLOR_CLASSES = [
    classes.white,
    classes.orange,
    classes.yellow,
    classes.green,
    classes.turquoise,
    classes.blue,
    classes.purple,
    classes.pink,
  ];
  // onClick={() => props.changeColorHandler(color)}

  return (
    <div className={classes.Frame}>
      <div style={{ display: "flex"}}>
        {COLORS.map((color, index) => {
          return (
            <Tooltip key={color} title={color} onClick={() => props.handleColor(colors[index])}>
              
              <div className={classes.a_button + " " + COLOR_CLASSES[index]} ></div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

export default ColorPop;