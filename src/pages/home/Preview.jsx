import{useState} from 'react';
import './Popup.scss'
import Form from './Form'
import Logo  from './Logo.jpeg';



const Preview = () => {
  const [showForm, setShowForm] = useState(true);
  const handleOnclose =() => {
    setShowForm(false);
    window.location.reload(true);
    alert("hello");
  }
  
   
  return (
    <>
      <div className='Preview'> 
       <Form className='Form' onclose={handleOnclose} visible={showForm}/>
      </div>
    </>
  );
};


  

export default Preview;