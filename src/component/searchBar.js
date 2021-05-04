import React, {useState} from "react";

const SearchBar = ({ getSearchText }) => {
    const [text, setText] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        getSearchText(text);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label htmlFor="search-box">Search Video</label>
                    <input id="search-box" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;