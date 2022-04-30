import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
function App() {
  const [load,setLoad]=useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3,setLoading3]=useState(false);
  const [loading4,setLoading4]=useState(false);
 
  useEffect(() => {
    const time = setTimeout(() => {
      setLoad(true);
      
    },1000);
    const timer = setTimeout(() => {
      setLoading(true);
      
    },2000);
    setLoading(false);
    const timer2 = setTimeout(() => {
      setLoading2(true);

      
    }, 3000);
    const timer3 = setTimeout(() => {
      setLoading3(true);

      
    }, 4000);
    const timer4 = setTimeout(() => {
      setLoading4(true);

      
    },5000);
   
    return () => clearTimeout(time,timer,timer2,timer3,timer4);
  }, []);
  return (
    <div className='container'>
    <div className="parent">
  {load ? <div className="child1"></div>:null}
{loading ?   <div className="child2"></div> :null}
{loading2?<div className='child3'></div>:null}
{loading3?<div className='child4'></div>:null}
{loading4?<div className='child5'></div>:null}

</div>
    </div>
  );
}

export default App;
