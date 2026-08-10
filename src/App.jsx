import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Hello from './components/Hello';
import WindowWidthAndHeight from './components/WindowWidthAndHeight';
import Counter from './components/Counter';
import DigitalClock from './components/DigitalClock';
import Navbar from './components/Navbar';
import StudentProps from './components/StudentProps';
import ReusableStudent from './components/ReusableStudent';
import FormGroup from './components/Forms/FormGroup';
import UserGreeting from './components/UserGreeting';
import List from './components/List';

function App() {

    const fruitsList = [
        {id: 1, name: "apple", calories: 52},
        {id: 2, name: "banana", calories: 89},
        {id: 3, name: "cherry", calories: 100},
        {id: 4, name: "coconut", calories: 200},
        {id: 5, name: "orange", calories: 150},
        {id: 6, name: "pineapple", calories: 300},
    ]

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" replace />} />
        <Route path="/window" element={<WindowWidthAndHeight />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/clock" element={<DigitalClock />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/forms" element={<FormGroup /> } /> 
        <Route path="/props" element={<StudentProps name="John Doe" age={20} isStudent={true} />} />
        <Route path="/reusable" element={<ReusableStudent />} />
        <Route path="/usergreeting" element={<UserGreeting username="John Doe" isLoggedIn={false} />} />
        <Route path="/list" element={<List items={fruitsList} category="Fruits" />} />
        <Route path="*" element={<Navigate to="/hello" replace />} />
      </Routes>    
    </>
  );
}

export default App
