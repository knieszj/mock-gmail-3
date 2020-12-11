import React from 'react'

const SendEmail = ({subject,sender,recipient,message, sendEmailToAPI}) => {

    return (
        <div>
            <h5>
                Subject:
                <input type={'text'} onChange={event => subject(event) } />
            </h5>
            <h5>
                Sender:
                <input type={'text'} onChange={event => sender(event)}/>
            </h5>
            <h5>
                Recipient:
                <input type={'text'} onChange={event => recipient(event)}/>
            </h5>
            <h5>
                Message:
                <input type={'textarea'} onChange={event => message(event)}/>
            </h5>
            <button onClick={sendEmailToAPI}>SEND EMAIL</button>
        </div>
    )
}

export default SendEmail