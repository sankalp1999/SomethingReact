import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/Layout';
import { colors, createTheme, ThemeProvider } from '@material-ui/core'
import { blueGrey, yellow } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main:'#fefefe'
    },
    secondary: {
      main  : 'rgb(255,215,0)'
    }
  }
})
function App() {
  return (
    <ThemeProvider theme = {theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
      </Router>
      </ThemeProvider>
  );
}

export default App;
