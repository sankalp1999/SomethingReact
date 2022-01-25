import React, { useState } from 'react';
import { FormControlLabel, RadioGroup, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});

export default function Create() {
  const classes = useStyles();

  const history = useHistory();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    
    // Avoid refreshing the page
    e.preventDefault();
    
    setTitleError(false)
    setDetailsError(false)


    console.log(title);
    console.log(details);


    if (title === '') {
        setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }

    if (title && details) {
    
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/')); // Redirect to home page
    }
    
  };
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom>
        
        Create a new note

      </Typography>

{/* // No validate means I don't want to use buitin validate messages */}
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={ (e) => setTitle(e.target.value)}
          className = {classes.field }
          label="Title"
          InputProps={{ disableUnderline: true }}
          color="secondary"
          fullWidth
          required
          error = {titleError}
        />
        <TextField
          onChange={ (e) => setDetails(e.target.value)}
          className = {classes.field }
          label="Details"
          InputProps={{ disableUnderline: true }}
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormLabel>Note Category</FormLabel>
        <FormControl className={classes.field}>
        <RadioGroup value={category} onChange={ (e) => setCategory(e.target.value)}>
          <FormControlLabel value ="money"  control={<Radio />}  label="Money"  />
          <FormControlLabel value ="todos"  control={<Radio />}  label="Todos"  />
          <FormControlLabel value ="reminders"  control={<Radio />}  label="Reminders"  />
          <FormControlLabel value ="work"  control={<Radio />}  label="Work"/>
        </RadioGroup>
        </FormControl>

         <Button type="submit" color="secondary" variant="contained">
        Submit</Button>
    </form>
    </Container>

  )
}
