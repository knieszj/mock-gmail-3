import React from "react";
import {useRouteMatch, Route, Link} from "react-router-dom";
import IndividualEmail from "./IndividualEmail";

const BreakoutEmails = ({allEmailsFromAPI, typeOfDisplay}) => {
    const match = useRouteMatch();


    const emails = allEmailsFromAPI === null ?
        (
            <div>No Emails</div>
        )
        :
        typeOfDisplay === 'bySubjectAndSender' ? (
            <>
                {allEmailsFromAPI.map(email => {
                    return (
                        <Link to={`${match.url}/${email.id}`}>
                            <div>
                                <h5>{email.subject}</h5>
                                <h5>{email.sender}</h5>
                            </div>
                        </Link>
                    )
                })}
            </>
        )  : (<div>Reached End Of Multi Ternary Statements</div>)


    return (
        <div>
            <div>{emails}</div>
            <div>
                <Route path={`${match.url}/:emailId`}>
                    {console.log("allEmailsFromAPI: ", allEmailsFromAPI)}
                    <IndividualEmail allEmailsFromAPI={allEmailsFromAPI}/>
                </Route>
            </div>

        </div>
    )
}

export default BreakoutEmails