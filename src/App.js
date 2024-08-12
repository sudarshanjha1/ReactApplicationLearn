
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';

function App() {
  return (
    <>
     
<Navbar title="TextUtils1" abouttile="About Us"/>

<div className="container" >
<TextForm   heading="Please Enter text box"/>
{/* <About/> */}

</div>

</>
    
  );
}

export default App;
