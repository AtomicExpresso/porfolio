import NameIcon from '../../assets/images/icons/decor/signature-solid.svg';
import EmailIcon from '../../assets/images/icons/decor/envelope-regular.svg';
import MessageIcon from '../../assets/images/icons/decor/message-regular.svg';

function ContactBox(){
  const FieldConstructor = ({Img, Name, PlaceHolder, LabelTxt, MinLen, MaxLen, Type}) => {
    return (
      <div>
        <div className='row-one'>
          <img src={Img}></img>
          <label for={Name}>{LabelTxt}</label>
        </div>
        <input type={Type} placeholder={PlaceHolder} name={Name} className="form-control" maxLength={MinLen} minLength={MaxLen} required></input>
      </div>
    )
  }


  return (
    <div className="contact-me-container">
      <h1>Contact me</h1>
      <form>
        <FieldConstructor
          Img={NameIcon}
          Name='name-field'
          LabelTxt='Your Name'
          PlaceHolder='Your name'
          MinLen={3}
          MaxLen={12}
          type='name'
        />
        <FieldConstructor
          Img={EmailIcon}
          Name='email-field'
          LabelTxt='Email Address'
          PlaceHolder='Ex. Example@gmail.com'
          MinLen={25}
          MaxLen={10}
          type='email'
        />
        <div className='row-one'>
          <img src={MessageIcon}></img>
          <label for="email-field">Message</label>
        </div>
        <textarea placeholder="Please enter your message..." className="form-control" maxLength={200} minLength={50} required></textarea>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
};

export default ContactBox;