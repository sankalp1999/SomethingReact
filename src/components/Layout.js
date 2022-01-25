import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import { ListItem, ListItemIcon } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {format} from 'date-fns' 
import Avatar from '@material-ui/core/Avatar'

const drawerWidth = 240


const useStyles = makeStyles((theme) => {
    
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding : theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
   
        },
        drawerPaper: {
            width: drawerWidth
        },  
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding:theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`,
            display: 'flex',

        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow:1
        },
        avatar: {
            marginLeft:theme.spacing(2)
        }
            // mix in is a collection of styles used by material    
    }
}
)

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation() // built in react    
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create note',
            icon: <AddCircleOutlined color="secondary" />,
            path: '/create'
        }
       
    ]

    return (
        <div className={classes.root}>
            {/* app bar */}
            {/* Elevation = 0 to remove drop shadow */}
           
       
            <AppBar elevation={0}
                 className={classes.appbar}
            >
                <Toolbar>
                    <Typography className = {classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography> Sankalp </Typography>
                    <Avatar className={classes.avatar} src="/favicon.icon" />
                </Toolbar>
            </AppBar>

            {/* side drawer */}

            <Drawer className={classes.drawer}
                variant="permanent"
                anchor="left"
            classes={{paper: classes.drawerPaper}}>
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Ninja notes
                    </Typography>
                  
                </div>

            {/* list / links */}
            <List>
                    {menuItems.map(item => (
                        <ListItem
                        button
                        key={item.text}
                        onClick = {() => history.push(item.path)}
                        className={location.pathname===item.path ? classes.active : null}
                        >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text}/>
                        </ListItem>
                ))}    

            </List>
            </Drawer>

            <div className={classes.page}>
                {/* Just bring under the appbar */}
                <div className={classes.toolbar}></div>
                {children}
            </div>

        </div>
    )
}