import './App.css';
import { Header } from './components/Header/Header';
// import { Diary } from './components/Diary/Diary';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      {/* <Diary /> */}
    </div>
  );
}

export default App;
