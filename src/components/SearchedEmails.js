import React from 'react'

const SearchedEmails = ({searchFilterInput, allEmailsFromAPI, searchFunction}) => {

    const emails = searchFilterInput === '' ?
        <></>
        :
        <div>
            {allEmailsFromAPI.filter(email => (
                email.subject.toLowerCase().includes(searchFilterInput.toLowerCase())
            )).map( email => <div><div>Subject: {email.subject}</div><div>From: {email.sender}</div> </div>)}
        </div>

    return (
        <div>
            <h5>
                SEARCH
                <input type={'text'} placeholder={`Search Emails Here`} onChange={e => searchFunction(e)}/>
            </h5>
            <div>
                {emails}
            </div>
        </div>
    )
}

export default SearchedEmails