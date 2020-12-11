import './App.css';
import {Component} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import BreakoutEmails from "./components/BreakoutEmails";
import SearchedEmails from "./components/SearchedEmails";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailApiResults: [],
            searchBarInput: '',

        }
        this.handleSearchBarChanges = this.handleSearchBarChanges.bind(this)

    }

    async componentDidMount() {
        let response = await fetch('http://localhost:3001/emails')
        let responseJSON = await response.json()
        this.setState({emailApiResults: responseJSON} )
    }


    handleSearchBarChanges = (event) =>{
        const value = event.target.value;
        this.setState({searchBarInput: value})
    }


    render() {
        const {emailApiResults} = this.state;
        const {searchBarInput} = this.state;
        const {handleSearchBarChanges} = this;

        const brokenOutEmails =  <BreakoutEmails allEmailsFromAPI={emailApiResults} typeOfDisplay={'bySubjectAndSender'} />
        const entireEmail =  <BreakoutEmails allEmailsFromAPI={emailApiResults} typeOfDisplay={'entireEmail'} />
        const searchedEmail = <SearchedEmails allEmailsFromAPI={emailApiResults} searchFilterInput={searchBarInput} searchFunction={handleSearchBarChanges}/>


        return (
            <BrowserRouter>
               <div>
                   <button>COMPOSE</button>
                   <button>INBOX</button>

                   {searchedEmail}
                   {brokenOutEmails}
                   {entireEmail}
               </div>
                <Switch>
                    <Route>

                    </Route>
                </Switch>
                <Switch>
                    <Route>

                    </Route>
                </Switch>

            </BrowserRouter>
        );

    }
}

export default App;
