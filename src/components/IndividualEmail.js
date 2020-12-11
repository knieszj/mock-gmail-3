import React from 'react'
import {useParams} from "react-router-dom";

const IndividualEmail = ({allEmailsFromAPI}) => {
    const {emailId} = useParams();
    const email = allEmailsFromAPI.find(email => email.id === Number(emailId))
    console.log("email test::::: ", email)
    return (
        <div>
            <h4>{email.sender}</h4>
            <h4>{email.recipient}</h4>
            <h4>{email.subject}</h4>
            <h4>{email.message}</h4>
        </div>
    )
}

export default IndividualEmail