import './App.css';
import {Component} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import BreakoutEmails from "./components/BreakoutEmails";
import SearchedEmails from "./components/SearchedEmails";
import SendEmail from "./components/SendEmail";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailApiResults: [],
            searchBarInput: '',
            createEmailSubject: null,
            createEmailSender: null,
            createEmailRecipient: null,
            createEmailMessage: null,

        }
        this.handleSearchBarChanges = this.handleSearchBarChanges.bind(this)
        this.sendEmailSubject = this.sendEmailSubject.bind(this)
        this.sendEmailSender = this.sendEmailSender.bind(this)
        this.sendEmailRecipient = this.sendEmailRecipient.bind(this)
        this.sendEmailMessage = this.sendEmailMessage.bind(this)
        this.buildEmailMessageToSend = this.buildEmailMessageToSend.bind(this)
        this.sendEmailToAPI = this.sendEmailToAPI.bind(this)
    }

    async componentDidMount() {
        let response = await fetch('http://localhost:3001/emails')
        let responseJSON = await response.json()
        this.setState({emailApiResults: responseJSON})
    }

    async sendEmailToAPI(){
        await fetch('http://localhost:3001/send',{
            method: 'POST',
            body: JSON.stringify(this.buildEmailMessageToSend()),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => this.componentDidMount())
    }

    handleSearchBarChanges = (event) => {
        const value = event.target.value;
        this.setState({searchBarInput: value})
    }

    sendEmailSubject(event){
        const value = event.target.value;
        this.setState({createEmailSubject : value})
    }

    sendEmailSender(event){
        const value = event.target.value;
        this.setState({createEmailSender : value})
    }
    sendEmailRecipient(event){
        const value = event.target.value;
        this.setState({createEmailRecipient : value})
    }
    sendEmailMessage(event){
        const value = event.target.value;
        this.setState({createEmailMessage : value})
    }

    buildEmailMessageToSend(){
        const obj = {
            subject: this.state.createEmailSubject,
            sender: this.state.createEmailSender,
            recipient: this.state.createEmailRecipient,
            message: this.state.createEmailMessage,
        }
        return obj
    }

    render() {
        const {emailApiResults} = this.state;
        const {searchBarInput} = this.state;
        const {handleSearchBarChanges} = this;
        const {sendEmailSubject} = this;
        const {sendEmailSender} = this;
        const {sendEmailRecipient} = this;
        const {sendEmailMessage} = this;
        const {sendEmailToAPI} = this;

        const brokenOutEmails = <BreakoutEmails allEmailsFromAPI={emailApiResults}
                                                typeOfDisplay={'bySubjectAndSender'}/>
        const entireEmail = <BreakoutEmails allEmailsFromAPI={emailApiResults} typeOfDisplay={'entireEmail'}/>
        const searchedEmail = <SearchedEmails allEmailsFromAPI={emailApiResults} searchFilterInput={searchBarInput}
                                              searchFunction={handleSearchBarChanges}/>
        const sendEmail = <SendEmail subject={sendEmailSubject} sender={sendEmailSender} recipient={sendEmailRecipient} message={sendEmailMessage} sendEmailToAPI={sendEmailToAPI}/>


        return (
            <BrowserRouter>
                <div>
                    <Link to={'/SendEmail'}>
                        <button>COMPOSE</button>
                    </Link>
                    <Link to={'/Inbox'}>
                        <button>INBOX</button>
                    </Link>

                </div>
                <Switch>
                    <Route path={'/Inbox'}>
                        {searchedEmail}
                        {brokenOutEmails}
                        {entireEmail}
                    </Route>
                </Switch>
                <Switch>
                    <Route path={'/SendEmail'}>
                        {sendEmail}
                    </Route>
                </Switch>

            </BrowserRouter>
        );

    }
}

export default App;
