import React from "react";

const BreakoutEmails = ({allEmailsFromAPI, typeOfDisplay, searchFilterInput}) => {

    const emails = allEmailsFromAPI === null ?
        (
            <div>No Emails</div>
        )
        :
        typeOfDisplay === 'bySubjectAndSender' ? (
            <>
                {allEmailsFromAPI.map(email => {
                    return (
                        <div>
                            <h5>{email.subject}</h5>
                            <h5>{email.sender}</h5>
                        </div>
                    )
                })}
            </>
        ) : typeOfDisplay === 'entireEmail' ? (
            <>
                {allEmailsFromAPI.map(email => {
                    return (
                        <div>
                            <h4>{email.sender}</h4>
                            <h4>{email.recipient}</h4>
                            <h4>{email.subject}</h4>
                            <h4>{email.message}</h4>
                            <h4>{email.date}</h4>
                            <h4>{email.id}</h4>
                        </div>
                    )
                })}
            </>
        ) : (<div>Reached End Of Multi Ternary Statements</div>)


    return (
        <>
            {emails}
        </>
    )
}

export default BreakoutEmails