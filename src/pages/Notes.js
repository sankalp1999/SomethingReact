import React, { useEffect , useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'



export default function Notes() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('https://my-fake-server.herokuapp.com/notes').then(res => res.json())
    .then(data => setNotes(data))
  }, []);

  const handleDelete = async (id) => {
    await fetch('https://my-fake-server.herokuapp.com/notes' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }


  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }


  return (
    <Container>
      {/* <Grid container>
       
        <Grid item xs = {12} sm ={6}  md={3}>
          <Paper>1</Paper>
        </Grid>
      
        <Grid item xs = {12} sm ={6}  md={3}>
          <Paper>2</Paper>
        </Grid>
      
        <Grid item xs = {12} sm ={6}  md={3}>
          <Paper>3</Paper>
        </Grid>

        <Grid item xs = {12} sm ={6}  md={3}>
          <Paper>4</Paper>
        </Grid>
  
        </Grid> */}
      
      {/* <Grid container>
        {notes.map(note => (

          <Grid item key = {note.id} xs = {12} md = {6} lg = {4}>
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
    
        ) ) }

        </Grid> */}

        <Masonry  breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {notes.map(note => (

          <div key = {note.id} xs = {12} md = {6} lg = {4}>
            <NoteCard note={note} setNotes={setNotes} handleDelete={handleDelete} />
          </div>
    
        ) ) }
        </Masonry>


        </Container>

  )
}


