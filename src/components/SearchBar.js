import React from 'react';

class SearchBar extends React.Component{

    state = {term:'Hi There!'};

    OnFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    
    

    render(){
        return(
            <div className="ui segment">
                {/* passing arrow function to avoid undefined 'this' */}
                <form  onSubmit={(event) =>this.OnFormSubmit(event)} className="ui form">
                    <div className="ui field">
                        <label>Search Image</label>
                        <input type="text" value={this.state.term} onChange={(e)=> this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;