import React, {useState} from 'react';

const PopUppeople = (props) => {

    const [isvisible, setIsvisible]= useState(true);
    const [name, setName] = useState('');

    const clickHandler = ()=>{
        props.func(false); 
        const obj={name};
        const objprs=obj.name;
        props.check(objprs); 
    };
    
    const handleChange = (event) => {
        
        setName(event.target.value);
        console.log(name);        
    };

    

        return (
          <div
            className="bg-info position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center"
            style={{ width: "25%", height: "30%" }}
          >
                <h5 className='pt-2 ms-5 me-5'>¿Cuantas personas van a viajar?</h5>
                <input className='ms-5 me-5' id="iterate" type="number" onChange={handleChange} value={name}/>

                <button type="button" className="btn btn-primary position-sticky m-3" onClick={clickHandler}>Guardar</button>
                
              
          </div>
        );
      }
export default PopUppeople;
