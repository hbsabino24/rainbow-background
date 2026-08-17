import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Hello from './components/Hello';
import WindowWidthAndHeight from './components/WindowWidthAndHeight';
import Counter from './components/Counter';
import DigitalClock from './components/DigitalClock';
import Form from './components/Forms/FormGroup';
import EmailForm from './components/Forms/EmailForm';
import RegistrationForm from './components/Forms/RegistrationForm';
import ExchancedForm from './components/Forms/EnhancedForm';
import Navbar from './components/Navbar';
import StudentProps from './components/StudentProps';
import ReusableStudent from './components/ReusableStudent';
import FormGroup from './components/Forms/FormGroup';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
import Button from './components/Button';
import ProfilePicture from './components/ProfilePicture';
import NameState from './components/NameState';
import ValueOnChange from './components/ValueOnChange';
import ColorPicker from './components/ColorPicker';
import StateUpdater from './components/StateUpdater';
import Car from './components/Car';
import ArrayState from './components/ArrayState';
import CarList from './components/CarList';
import ToDoList from './components/ToDoList';
import MultiComponents from './components/MultiComponents';

function App() {

    const fruitsList = [
        {id: 1, name: "apple", calories: 52},
        {id: 2, name: "banana", calories: 89},
        {id: 3, name: "cherry", calories: 100},
        {id: 4, name: "coconut", calories: 200},
        {id: 5, name: "orange", calories: 150},
        {id: 6, name: "pineapple", calories: 300},
    ]
    
    const veggiesList = [
        {id: 7, name: "potatoes", calories: 110},
        {id: 8, name: "celery", calories: 15},
        {id: 9, name: "carrots", calories: 25},
        {id: 10, name: "corn", calories: 67},
        {id: 11, name: "broccoli", calories: 63},
        {id: 12, name: "spinach", calories: 50},
    ]

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" replace />} />
        <Route path="/window" element={<WindowWidthAndHeight />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/useeffect/clock" element={<DigitalClock />} />
        <Route path="/forms" element={<FormGroup />} />
        <Route path="/usestate/counter" element={<Counter />} />
        <Route path="/form/email" element={<EmailForm /> } />
        <Route path="/form/registration" element={<RegistrationForm />} />
        <Route path="/form/enchanced" element={<ExchancedForm />} /> 
        <Route path="/props/student" element={<StudentProps name="John Doe" age={20} isStudent={true} />} />
        <Route path="/props/reusable" element={<ReusableStudent />} />
        <Route path="/usergreeting" element={<UserGreeting username="John Doe" isLoggedIn={false} />} />
        <Route path="/list/fruits" element={fruitsList.length > 0 && <List items={fruitsList} category="Fruits" />} />
        <Route path="/list/veggies" element={veggiesList.length > 0 && <List items={veggiesList} category="Veggies" /> } />
        <Route path="/button" element={<Button />} />
        <Route path="/button/profile" element={<ProfilePicture />} />
        <Route path="/usestate/name" element={<NameState />} />
        <Route path="/onchange/value" element={<ValueOnChange />} />
        <Route path="/onchange/color" element={<ColorPicker />} />
        <Route path="/usestate/updater" element={<StateUpdater />} />
        <Route path="/usestate/car" element={<Car />} />
        <Route path="/usestate/array" element={<ArrayState />} />
        <Route path="/usestate/cars" element={<CarList />} />
        <Route path="/onchange/todo" element={<ToDoList />} />
        <Route path="/oncontext/multicomp" element={<MultiComponents />} />
        <Route path="*" element={<Navigate to="/hello" replace />} />
      </Routes>    
    </>
  );
}

export default App
