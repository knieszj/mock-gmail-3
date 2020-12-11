import React from 'react'

const SendEmail = ({subject,sender,recipient,message, sendEmailToAPI}) => {

    return (
        <div>
            <h5>
                Subject:
                <input type={'text'} onChange={event => subject(event)} placeholder={'Subject'} />
            </h5>
            <h5>
                Sender:
                <input type={'text'} onChange={event => sender(event)} placeholder={'Who are you'}/>
            </h5>
            <h5>
                Recipient:
                <input type={'text'} onChange={event => recipient(event)} placeholder={'To Whom It May Concerns'}/>
            </h5>
            <h5>
                Message:
                <input type={'textarea'} onChange={event => message(event)} placeholder={'Whatcha Talkin\' \'Bout?'}/>
            </h5>
            <button onClick={sendEmailToAPI}>SEND EMAIL</button>
        </div>
    )
}

export default SendEmail