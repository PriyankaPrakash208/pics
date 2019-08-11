import React from 'react';

class SearchBar extends React.Component{

    state = {term:'Hi There!'};

    OnFormSubmit(event){
        event.preventDefault();
        console.log(this.state.term);
    }
    

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.OnFormSubmit}>
                    <div className="ui field">
                        <label>Search Image</label>
                        <input type="text" value={this.state.term} onChange={(e)=> this.setState({term: e.target.value.toUpperCase() })} />
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SearchBar;