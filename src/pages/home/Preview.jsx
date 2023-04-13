import{useState} from 'react';
import './preview.scss'
import Form from './Form'



const Preview = () => {
  const [showForm, setShowForm] = useState(true);
  const handleOnclose =() => {
    setShowForm(false);
    window.location.reload(true);
    alert("hello");
  }
  
   
  return (
    <>
      <div className='preview'> 
       <Form className='Form' onclose={handleOnclose} visible={showForm}/>
      </div>
    </>
  );
};

export default Preview;