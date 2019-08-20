import React from 'react';

class SearchBar extends React.Component{

    state = {term:'Hi There!'};

    OnFormSubmit(event){
        event.preventDefault();
        //Accessing property onsubmit from app.js .In a functional component, props can be
        // accessed by paramater and simply get the prop by props.something
        //But here we should use this.props.property from another class based component
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