import a from './App.module.scss';
import Files from './components/files/Files';
import Stats from './components/stats/Stats';

function App() {
  return (
    <section className={a.section}>
      <Files />
      <Stats
        minLength="0 GB"
        maxLength="1000 GB"
      />
    </section>
  );
}

export default App;
