import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { Route,Routes } from 'react-router';
import FlexDirection from './components/FlexDirection';
import LayoutDirection from './components/LayoutDirection';
import AlignContent from './components/AlignContent';
import AlignSelf from './components/AlignSelf';
import AlignItems from './components/AlignItems';
import FlexWrap from './components/FlexWrap';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="FlexDirection" element={<FlexDirection/>}/>
        <Route path="LayoutDirection" element={<LayoutDirection/>}/>
        <Route path="AlignContent" element={<AlignContent/>}/>
        <Route path="AlignItems" element={<AlignItems/>}/>
        <Route path="AlignSelf" element={<AlignSelf/>}/>
        <Route path="FlexWrap" element={<FlexWrap/>}/>
      </Routes>
    </div>
  );
}

export default App;
