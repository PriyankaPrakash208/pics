import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    OnSearchSubmit(term){
        console.log(term);
        axios.get('https://api.unsplash.com/search/photos',{
            params:{query:term},
            headers:{
                Authorization: 
                'Client-ID 239f3cbc71e6e1e0d0a57f6f2f155867d3967e07ff09d91596be09a3c14b8659'
            }

        });
    }
    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}> 
                {/* Here onSubmit shown below is a property */}
                <SearchBar onSubmit={this.OnSearchSubmit} />
            </div>
        );
    }
   
}

export default App;