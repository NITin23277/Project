// import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
// import Fruits from './components/Fruits';
// import Notes from './components/Notes';
// import Child1 from './components/Child1';
// import Child2 from './components/Child2';
// import { useState } from 'react';
// import UserForm from './19.forms and hooks/UserForm';
// import UseEffectHook from './19.forms and hooks/UseEffectHook';
// import Hooks from './19.forms and hooks/Hooks';
import NewsApp from './NewsApp';


function App() {

//   const [countInParent, setCountInParent] = useState(0);

// function updateCountInParent(count){
//   setCountInParent(count)
// }
// function uploadData() {
//   console.log('I WILL START UPLOADING THE DATA NOW')
// }


  return (
    <div>
      {/* <Counter /> */}
      {/* <Fruits /> */}
      {/* <Notes /> */}
      {/* <p>Inside the Parent : {countInParent}</p>
      <Child1 onCountUpdate={updateCountInParent} />
      <Child2 countFromParent={countInParent }  uploadData={uploadData}/>  */}
    
      {/* lecturre 19 forms and hook */}

      {/* <UserForm/> */}
      {/* <UseEffectHook/> */}
      {/* <Hooks /> */}
      <NewsApp />


    </div>
  );
}

export default App;
