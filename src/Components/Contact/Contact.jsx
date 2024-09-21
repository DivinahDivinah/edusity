import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msgicon.svg'
import mailicon from '../../assets/mailicon.svg'
import phoneicon from '../../assets/phoneicon.svg'
import locationIcon from '../../assets/locationIcon.svg'
import arrowright from '../../assets/arrowright.svg'
const Contact = () => {



    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f71df932-595f-4c2c-9e3c-558ff7720ca1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msgicon} /></h3>
            <p>Feel free to reach out through our contact form or find our contact
                information below. Your feedback, questions and suggestions are important
                to us as we strive to provide exceptional service to our university community
            </p>
            <ul>
                <li><img src={mailicon} />Contact@dcodes.dev</li>
                <li><img src={phoneicon} />+254-769-675-366</li>
                <li><img src={locationIcon} />GTC Chiromo Road beside Kempenski hotel</li>
            </ul>
        </div>
        <div className="contact-col">

            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your Messages here</label>
                <textarea name="message" id=""  rows="6" placeholder='Enter your message' required></textarea>
                <button  type='submit' className="btn dark-btn">Submit now <img src={arrowright} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact