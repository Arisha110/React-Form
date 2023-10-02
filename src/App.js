import './App.css';
import { useState } from 'react';

function App() {

  // const[formData, setFormData]=useState({
  //   firstname:"",
  //   contactnumber:"",
  //   email:"",
  //   isVisible:true,
  //   mode:"",
  //   favCar:""
  // });
  // console.log(formData)
  // function changeHandler(event){
  //   const{name, value, type, checked}=event.target
  //   setFormData((prevFormData)=>{

  //     return{
  //       ...prevFormData,
  //       // [event.target.name]: event.target.value
  //       [name]: type==="checkbox"? checked: value
  //     }  

  //   })
  // }
  const[formData, setFormData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    country:"",
    city:"",
    zip:"",
    comments:false,
    candidates:false,
    offers:false,
    pushnotifications:""
  })

  function changeHandler(event){
    const{name, value, type, checked}=event.target

    
    setFormData(prevStateData=>{
      return{
        ...prevStateData,
        [name] : type==="checkbox"? checked: value
      }
    })
  }

function submitHandler(e){
 e.preventDefault();
 setFormData(formData);
}
  return (
    <div className="App">
      {/* <form>

        
        <input type='text'
        placeholder='First name' 
        onChange={changeHandler}
        name="firstname"/>

        <br></br>
        <input type="number"
        placeholder='Contact no.' 
        onChange={changeHandler}
        name="contactnumber"/>
        <br></br>

        <input type='email'
        placeholder='Enter your email' 
        onChange={changeHandler}
        name="email"/>
        <br></br>

        <input type="checkbox"
        onChange={changeHandler}
        name="isVisible"
        checked={formData.isVisible}
        id='check'
        />
        <label htmlFor='check'>Am I visible</label>
        <br></br>

        <input
        type='radio'
        onChange={changeHandler}
        name="mode"
        id='online-mode'
        value="Online-mode"
        checked={formData.mode=== "Online-mode"}
        />
        <label htmlFor='online-mode'>Online Mode</label>

        <input
        type='radio'
        onChange={changeHandler}
        name="mode"
        id='offline-mode'
        value="Offline-mode"
        checked={formData.mode=== "Offline-mode"}
        />
        <label htmlFor='offline-mode'>Offline Mode</label>
<br></br>

        <select
        name='favCar'
        onChange={changeHandler}
        value={formData.favCar}
        >
          <option value="fortuner">Fortuner</option>
          <option value="Creta">Creta</option>
          <option value="Nexon">Nexon</option>
          
        </select></form> */}

      <form className='form'>
        <label></label>

        <label htmlFor='first-name' className='labels'>First name</label>
        <input className='user-input' onChange={changeHandler}
        type='text'
        placeholder='Pranay'
        id='first-name'
        name='firstname'
        />

        <label htmlFor='last-name' className='labels'>Last name</label>
        <input className='user-input' onChange={changeHandler}
        type='text'
        placeholder='Gupta'
        id='last-name'
        name='lastname'
        />

        <label htmlFor='email' className='labels'>Email</label>
        <input className='user-input' onChange={changeHandler}
        type='email'
        placeholder='pgupta@gmail.com'
        id='email'
        name='email'
        />

         <label htmlFor='country' className='labels'>Country</label>
        <select 
        className='user-input' onChange={changeHandler}
        name='country'
        id='country'
        value={formData.country}>
          <option value="India">India</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Indonesia">Indonesia</option>
          <option value="UK">UK</option>
        </select>
        
        <label htmlFor='city' className='labels'>City</label>
        <input className='user-input' onChange={changeHandler}
        type='text'
        placeholder='Mumbai'
        id='city'
        name='city'
        />

<label htmlFor='zip' className='labels'>Zip/Postal code</label>
        <input className='user-input' onChange={changeHandler}
        type="number"
        placeholder='462010'
        id='zip'
        name='zip'
        />

        <fieldset className='checkers'>
          <legend className='labels'>By Email</legend>

        <div className='check-box'>
            <input
          type='checkbox'
          onChange={changeHandler}
          checked={formData.comments}
          id='comments'
          name='comments'
          />
          <div className='checky'>
            <label htmlFor='comments'>Comments</label>
            <p>Get notified when someone posts a comment.</p>
          </div>
        </div>
        

          <div className='check-box'>
          <input
          type='checkbox'
          onChange={changeHandler}
          checked={formData.candidates}
          id='candidates'
          name='candidates'
          />
          <div className='checky'>
            <label htmlFor='candidates'>Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
        </div>

        <div className='check-box'>
          <input
          type='checkbox'
          onChange={changeHandler}
          checked={formData.offers}
          id='offers'
          name='offers'
          />
          <div className='checky'>
            <label htmlFor='offers'>Offers</label>
            <p>Get notified for offers</p>
          </div>
        </div>
        
        </fieldset>
        

        <fieldset className='checkers'>
          <legend className='labels'>Push Notifications</legend>

          <div className='push-notif'>
            <div >These are delivered via SMS to your mobile phone.</div>

          <div className='radios'>
            <input 
          type='radio'
          onChange={changeHandler}
          name='pushnotifications'
          id='everything'
          value={formData.pushnotifications === "everything"}
          />
          <label htmlFor='everything'>Everything</label>
          </div>
          
          <div className='radios'>
             <input
          type='radio'
          onChange={changeHandler}
          name='pushnotifications'
          id='emails'
          value={formData.pushnotifications === "same as email"}
          />
          <label htmlFor='emails'>Same as email</label>
          </div>
         
<div className='radios'>
  <input
          type='radio'
          onChange={changeHandler}
          name='pushnotifications'
          id='no'
          value={formData.pushnotifications=== "no push notifications" }
          />
          <label htmlFor='no'>No push notifications</label>
</div>
          
          </div>
          
        </fieldset>
        
        <button onClick={submitHandler} className='save-btn'>Save</button>
      </form>
    </div>
  );
}

export default App;
