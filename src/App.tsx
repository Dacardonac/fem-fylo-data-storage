
import './App.module.scss';
import Files from './components/files/Files';
import Stats from './components/stats/Stats';

function App() {


  return (
    <>
      <Files />
      <Stats minLength="0 GB" maxLength="1000 GB" />
    </>
  )
}

export default App
