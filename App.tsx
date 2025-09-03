import React from 'react';
import './App.css';
//import DisplayPrice from './components/DisplayPrice';
//import StatusBadge from './components/StatusBagde';
//import InputField from './components/InputField';
//import FruitList  from './components/FruitList';
//import PeopleList  from './components/PeopleList';
//import ScoreList from './components/ScoreList';
//import ForEachList from './components/ForEachList';
//import ForLoopList from './components/ForLoopList';
//import UncontrolledForm from './components/UncontrolledForm';
//import ModalBubbling from './components/ModalBubbling';
//import Counter from './components/Counter';
//import Timer from './components/Timer';
//import UserList from './components/UserList';
//import Welcome from './components/Welcome';
//import ModalComponent from './components/ModalComponent';
//import AutoFocusInput from './components/AutoFocusInput';
//import Increment from './components/Increment';
//import valueTracker from './components/valueTracker';
//import { ThemeProvider } from './components/ThemeContext';
//import ThemeSwitcher from './components/ThemeSwitcher';
//import Counters from './components/Counters';
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';

const App: React.FC = () =>  {

  /*const [showModal, setShowModal] = useState(false)
  const handleAppClicked= () => {
    console.log('App Clicked');
  }*/
  return (


     <ThemeProvider>
      <div style={{ padding: '2rem' }}>
        <h1>React + TypeScript: useContext + useReducer</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
   //<Counters />
   /*<ThemeProvider>
      <h1>Welcome to the Theme App</h1>
      <ThemeSwitcher />
    </ThemeProvider>*/

    //<Increment/>
  
 // <  AutoFocusInput />
   // <ModalComponent />
    //<Welcome  username="Anjel Chaudhary"/>
    // <UserList />
    //<Timer />
    //<Counter />
   /* <div onClick={handleAppClicked}>
      <h1>React Portal Bubbling Example</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <ModalBubbling onClose={() => setShowModal(false)}></ModalBubbling>}

    </div>*/
    /* <div style={{ padding: '20px' }}>
      <h1>React Portal Modal</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Hello from the Portal!</h2>
          <p>This modal is rendered outside the root DOM node.</p>
        </Modal>
      )}
    </div>*/
   /* <div>
      <h1>hello Anjel</h1>
      <button onClick={() => setShowModel(true)}>Show Model</button>
      {showModel && (
        
          <div style={{
            position: "fixed", 
            top: "30%", 
            left: "30%", 
            background: "white",
            padding: "20px", 
            border: "1px solid black", 
            zIndex: 1000 
          }}>
            <h2>This is a portal model</h2>
            <button onClick={() => setShowModel(false)}>Close</button>
          </div>
        
      )}*/
    
  
    

/*  <DisplayPrice  price={99.99} isDiscounted={true}/>
  <DisplayPrice  price={1000} isDiscounted={false}/>
  <StatusBadge status= 'inactive' />
    <StatusBadge status= 'active' />
    <InputField  error/>
    <FruitList />
    <PeopleList />
    <ScoreList />
    <ForEachList />
    <ForLoopList/>
    <UncontrolledForm />
      </div>*/
  )
}

export default App;
