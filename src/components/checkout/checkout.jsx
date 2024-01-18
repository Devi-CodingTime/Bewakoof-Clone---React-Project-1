import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import './checkout.css';
import { Link, useNavigate } from 'react-router-dom';
import { categoryContext } from '../Context/provider';

const Checkout =({closeModal})=> {
  const navigate = useNavigate();
  const {userName} = useContext(categoryContext);
  console.log("userName : ",userName);
 
  const [selectedradio,setSelectedRadio] = useState("");

    const [address, setAddress] = useState({
      street: '',
      city: '',
      state: '',
      country: '',
      zipCode: ''
  });
  const [landmark, setLandmark] = useState("");
  const [radio,setRadio] = useState("");
 
  const handleChange = (e) => {
    const updatedAdd = {...address};
    updatedAdd[e.target.name] = e.target.value;
    setAddress(updatedAdd);
    
  };
  
  const selectedRadio =(e)=>{
    setRadio(e.target.value);
    console.log(e.target.value);
  }
  const handleSelect = (id)=>{
    setSelectedRadio(id);
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log("submit one");
    navigate(`/payment?address=${JSON.stringify(address)}&addressType=${radio}&landmark=${landmark}`);
  }
  return (
    <form className='flex flex-col gap-4 items-center justify-center' onSubmit={handleSubmit}>
        
        <h5 className='w-[600px]' style={{textAlign:"left"}}>
        <i className="fa-solid fa-chevron-left prevIcon"></i>
            Add New Address
        </h5>
        <TextField className='w-[500px]'
          label="Full Name"
          id="outlined-size-small"
          defaultValue={userName}
          size="small" value={userName} aria-readonly 
        />
        
        <div className="divider"></div>
        <TextField className='w-[500px]'
          label="Pincode/Postal Code/Zipcode"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          name='zipCode'
          onChange={handleChange} required
        />
        <div className='flex gap-2'>
            <TextField className='w-[246px]' 
            label="City" style={{color:"rgba(0,0,0,.4)"}}
            id="outlined-size-small"
            defaultValue=""
            size="small"
            name='city'
            onChange={handleChange} required
            />
            <TextField className='w-[246px]'
            label="State"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            name='state'
            onChange={handleChange} required
            />
        </div>
        <TextField className='w-[500px]'
          label="Flat no/Building, Street name"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          name='street'
          onChange={handleChange} required
        />
         
         <TextField className='w-[500px]'
          label="Area/Locality"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          name='country'
          onChange={handleChange} required
        />
        
        <TextField className='w-[500px]'
          label="Landmark (Optional)"
          id="outlined-size-small"
          defaultValue=""
          size="small"
          onChange={(e)=>{setLandmark(e.target.value)}}
        />
        
        
      <div className="radio-group" style={{
      textAlign: "left",
      width: "84%"}}>
        <h1 style={{color:"rgba(0,0,0,.4)"}}>Save address as</h1>
        <input type="radio" id="home" name="address" style={{display:"none"}} 
        onChange={selectedRadio} value="HOME" required/>
        <label htmlFor="home" onClick={()=>{handleSelect(1)}}
        className={1==selectedradio?"changeClass":"prevClass"}
        >HOME</label>

        <input type="radio" id="office" name="address" style={{display:"none"}} 
        onChange={selectedRadio} value="OFFICE" required/>
        <label htmlFor="office" onClick={()=>{handleSelect(2)}}
        className={2==selectedradio?"changeClass":"prevClass"}
        >OFFICE</label>

        <input type="radio" id="other" name="address" style={{display:"none"}}
         onChange={selectedRadio} value="OTHER" required/>
        <label htmlFor="other" onClick={()=>{handleSelect(3)}}
        className={3==selectedradio?"changeClass":"prevClass"}>OTHER</label>

      </div>
      <div className="addEditSubmit clearfix flex items-center justify-center">
            <button
            id="addr_save_button"
            type="submit"
            className="saveAdd" >
            {/* <Link to={`/payment?address=${JSON.stringify(address)}&addressType=${radio}&landmark=${landmark}`} style={{color:"white"}}> */}
              GO To PAYMENT
              {/* </Link> */}
            </button>
            <button 
            id="addr_cancel_button"
            className="cancelAdd" onClick={closeModal}>
            CANCEL
            </button>
      </div>
      
    </form>
  )
}
export default Checkout;