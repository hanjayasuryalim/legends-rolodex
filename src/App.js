
import React,{ Component } from 'react';
import {CardList} from "./components/card-list/CardList.component";
import {SearchBox} from './components/search-box/SearchBox.component';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
           legends:[],
            searchLegend:'',
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                this.setState({legends:users});
            })
    }

    handleChange = (e) => {
        this.setState({searchLegend:e.target.value});
    }

    render(){

        const {legends, searchLegend} = this.state;
        const filteredLegends = legends.filter(legend =>
           legend.name.toLowerCase().includes(searchLegend.toLowerCase())
        )

        return(
            <div className="App">
                <h1>Legends Rolodex</h1>
                <SearchBox placeholder="search legend"
                           handleChange={this.handleChange}/>
                <CardList legends={filteredLegends}/>
            </div>
        );
    }
}

export default App;
