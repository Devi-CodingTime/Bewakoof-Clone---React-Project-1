import React from 'react'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import ImgSpan from '../imgSpan';
const Checkout =()=> {
    const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
//     <div
//   className="popupBody"
//   style={{
//     width: 740,
//     maxHeight: "100%",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     margin: "0px auto",
//     overflow: "auto",
//     background: "rgb(255, 255, 255)"
//   }}
// >
//   <i id="AddressUpdate" className="close_popup_target icon_close" />
//   <div className="updateAddressHeading">
    // <h5>
    //   <i className="icon_previous" />
    //   Add New Address
    // </h5>
//   </div>
//   <div className="addressForms undefined">
//     <form className="fullWidthXs" noValidate="" autoComplete="off">
//       <div className="ec_form">
//         <div className="input-outline  false ">
//           <input
//             id="name_field"
//             name="name"
//             type="text"
            // maxLength={71}
            // defaultValue="purnima"
//           />
//           <label htmlFor="card_name" className=" ">
//             Full Name
//           </label>
//         </div>
//         <div className="input-outline  false ">
//           <div className="countryCode-wrap">
//             <div className="country-code-dropdown-icon d-flex justify-content-between align-items-center">
            //   <div className="cntry-mob-phone-code-item d-flex justify-content-start align-items-center">
            //     <img
            //       src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
            //       alt="country flag"
            //     />
            //     <span>+91</span>
            //   </div>
//             </div>
//           </div>
//           <input
//             id="mobile_field"
//             name="mobile"
//             type=""
            // maxLength={10}
            // defaultValue={6263483783}
//           />
//           <label htmlFor="card_name" className="mobileInput ">
//             Mobile Number
//           </label>
//         </div>
//         <div className="divider" />
//         <div className="input-outline  false ">
//           <input
//             id="pincode_field"
//             name="pincode"
//             type="text"
//             maxLength={6}
//             defaultValue=""
//           />
//           <label htmlFor="card_name" className=" ">
//             Pincode/Postal Code/Zipcode Flat no/Building, Street name Area/Locality
//           </label>
//         </div>
//         <div className="d-flex cityField">
//           <div className="input-outline  false ">
//             <input
//               id="city_field"
//               name="city"
//               type="text"
//               maxLength={60}
//               defaultValue=""
//             />
//             <label htmlFor="card_name" className=" ">
//               City
//             </label>
//           </div>
//           <div className="input-outline  false ">
//             <input
//               id="state_field"
//               name="state"
//               type="text"
//               maxLength={60}
//               defaultValue=""
//             />
//             <label htmlFor="card_name" className=" ">
//               State
//             </label>
//           </div>
//         </div>
//         <div className="input-outline  false ">
//           <input
//             id="addrLine1_field"
//             name="addrLine1"
//             type="text"
//             maxLength={60}
//             defaultValue=""
//           />
//           <label htmlFor="card_name" className=" ">
//             Flat no/Building, Street name Area/Locality
//           </label>
//         </div>
//         <div className="input-outline  false ">
//           <input
//             id="addrLine2_field"
//             name="addrLine2"
//             type="text"
//             maxLength={60}
//             defaultValue=""
//           />
//           <label htmlFor="card_name" className=" ">
//             Area/Locality
//           </label>
//         </div>
//         <div className="input-outline  false ">
//           <input
//             id="landmark_field"
//             name="landmark"
//             type="text"
//             maxLength={60}
//             defaultValue=""
//           />
//           <label htmlFor="card_name" className=" ">
//             Landmark (Optional)
//           </label>
//         </div>
//         <div className="formGroup false ">
//           <span className="addressTypeTitle">Save Address As</span>
//           <div>
//             <div className="addressSubType   d-inline-flex align-items-center">
//               <input
//                 type="radio"
//                 name="sub_type"
//                 id="radiotype0"
//                 defaultValue="home"
//               />
//               <label htmlFor="radiotype0" className="">
//                 home
//               </label>
//             </div>
//             <div className="addressSubType   d-inline-flex align-items-center">
//               <input
//                 type="radio"
//                 name="sub_type"
//                 id="radiotype1"
//                 defaultValue="office"
//               />
//               <label htmlFor="radiotype1" className="">
//                 office
//               </label>
//             </div>
//             <div className="addressSubType  active d-inline-flex align-items-center">
//               <input
//                 type="radio"
//                 name="sub_type"
//                 id="radiotype2"
//                 defaultValue="other"
//               />
//               <label htmlFor="radiotype2" className="active">
//                 other
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
    //   <div className="addEditSubmit clearfix">
    //     <button
    //       id="addr_save_button"
    //       type="submit"
    //       className="maddAddressButton maddAddressButtonDisable"
    //     >
    //       SAVE ADDRESS
    //     </button>
    //     <button
    //       id="addr_cancel_button"
    //       className="maddAddressButton cancelAddButton hidden-xs"
    //     >
    //       Cancel
    //     </button>
    //   </div>
//     </form>
//   </div>
// </div>
    <form className='flex flex-col gap-4 items-center justify-center'>
        
        <h5 className='w-[500px]'>
        <i className="fa-solid fa-chevron-left prevIcon"></i>
            Add New Address
        </h5>
        <TextField className='w-[500px]'
          label="Full Name"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        
        <div className="cntry-mob-phone-code-item flex gap-2">
           
        <TextField className='w-[500px]'
        label="Mobile Number"
        id="outlined-number"
        type="number"
        maxLength={10}
        defaultValue={<ImgSpan/>}
        size="small"
        />
        </div>
        

        <div className="divider"></div>
        <TextField className='w-[500px]'
          label="Pincode/Postal Code/Zipcode"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <div className='flex gap-2'>
            <TextField className='w-[245px]'
            label="City"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            />
            <TextField className='w-[245px]'
            label="State"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            />
        </div>
        <TextField className='w-[500px]'
          label="Flat no/Building, Street name"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
         
         <TextField className='w-[500px]'
          label="Area/Locality"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        
        <TextField className='w-[500px]'
          label="Landmark (Optional)"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        
        <div className="addEditSubmit clearfix">
            <button
            id="addr_save_button"
            type="submit"
            className="maddAddressButton maddAddressButtonDisable">
            SAVE ADDRESS
            </button>
            <button
            id="addr_cancel_button"
            className="maddAddressButton cancelAddButton hidden-xs">
            Cancel
            </button>
      </div>
      <div>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    </div>
    </form>
  )
}
export default Checkout;