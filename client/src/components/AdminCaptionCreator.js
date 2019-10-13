import React, { Component } from "react";
import { Input } from "./Form";
import API from "../utils/API"


class AdminCaptionCreator extends Component {

    state = {
        caption: "",
        category: "",
        author: "",
        reference: "",
        lyric: "",
        quote: "",
        originalAuthor: "",
        tags: "",
        categories: []
    }

    componentDidMount() {
        // this.gatherCaptions();
        console.log(this.props.categories);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // gatherCaptions = () =>{
    //     API.getCaptions()
    //         .then(res =>
    //             console.log(res))
    //         .catch(err => console.log(err));
    // }

    // gatherCategories = () =>{
    //     API.getCategories()
    //         .then(res =>
    //             console.log(res))
    //         .catch(err => console.log(err));
    // }

    testState = () => {
        console.log(this.state.books)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // this.searchBooks(this.state.search)
    }

    render() {
        return (
            <div>
                <form>
                    <h5>Input your caption here</h5>
                    <Input value={this.state.caption} onChange={this.handleInputChange} name="caption" placeholder="Caption goes here" />
                    {/* <Input value={this.state.category} onChange={this.handleInputChange} name="category" placeholder="Category goes here" /> */}
                    <select value={this.state.category} onChange={this.handleInputChange} name="category">

                        {this.props.categories.map(listedcategory => (
                            <option key={listedcategory._id} value={ listedcategory.category }>{listedcategory.category}</option>
                        ))}

                    </select>
                    <Input value={this.state.author} onChange={this.handleInputChange} name="author" placeholder="Your name goes here" />
                    <Input value={this.state.reference} onChange={this.handleInputChange} name="reference" placeholder="Caption's reference goes here" />
                    {/* <Input value={this.state.lyric} onChange={this.handleInputchange} name="caption" placeholder="Is this a Lyric? (true or false)"/> */}
                    {/* <Input value={this.state.quote} onChange={this.handleInputchange} name="quote" placeholder="Is this a quote? (true or false)"/> */}
                    <Input value={this.state.tags} onChange={this.handleInputChange} name="tags" placeholder="Tags go here, separate with commas!" />
                    <button onClick={this.handleFormSubmit}>Submit your caption</button>
                </form>
            </div>
        )
    }
}

export default AdminCaptionCreator