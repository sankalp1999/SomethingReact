import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import {  DeleteOutlined, PaletteOutlined, PaletteRounded } from '@material-ui/icons'
import { IconButton  } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent, Typography } from '@material-ui/core'
import {blue, green, pink, yellow} from '@material-ui/core/colors' 
import { Avatar } from '@material-ui/core'
import ColorPop from './ColorPop'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { TextField } from '@material-ui/core'
// For highlighting the border of the notecard
const useStyles = makeStyles({
    avatar:
    {
        backgroundColor: (note) => {
            if (note.category === 'work') {
                return yellow[700]
            }
            if (note.category === 'money') {
                return green[500]
            }
            if (note.category === 'todos') {
                return pink[500]
            }
            return blue[500]
        }
    },
    noteinput: {
        '&:hover': {
           
            boxShadow: '0 3px 5px 2px rgba(255, 215, 0, .3)'      
            }
    },
    palette: {
        padding: '4px', 
        '&:hover':
        {
        cursor: 'pointer',
           
        }
    },
    
})


export default function NoteCard({ note,handleDelete })
{
    
    const classes = useStyles(note)
    const [isShown, setIsShown] = useState(false);
    const [color, setColor] = useState('white');

    const [isEditable, setIsEditable] = useState(false);

    const handleClick = (event) => {
        console.log("somebody clicked")

    }

    const handleColor = (color) => {
        setColor(color)
    }



    return (
        < div >
            {/* <Card elevation={2} className={classes.test}> */}
           

            <Card elevation={2} onClick={handleClick} className={classes.noteinput} style={{maxHeight: '100%',background:color, overflow: 'auto'}}>
                <CardHeader
                    avatar={<Avatar className={classes.avatar}> { note.category[0].toUpperCase() } (</Avatar> }
                    action={
                    <IconButton onClick={ () => handleDelete(note.id) }>
                    <DeleteOutlined />
                    </IconButton>
                }
                
                    title={note.title}
                    subheader={note.category}
                />
        
            <CardContent>
  
                    <Typography>
                    {note.details}
                    </Typography>
            
        
        </CardContent>

            
                <IconButton aria-label="Change color" 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                
                >
        
                    <PaletteOutlined className={classes.palette} />
                    {isShown && (
                        <ColorPop handleColor={handleColor} />
                      )}
                 </IconButton>
                

            </Card>
           
        
        </div>
    )
}