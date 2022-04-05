import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div >
            <h1 className='QA'>Question Answer</h1>
            <div className='box-container'>
            <div className="box">
                <h3>What is context Api?</h3>
                <p>A React app can use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.
                Context API is a (sort of) new feature in React 16.3 that allows you to easily and lightly communicate state across the entire project (or part of it).</p>
            </div>
            <div className="box">
                <h3>What is Semantic Tag?</h3>
                <p>Semantic HTML elements are those that express their meaning in a way that is both human and machine readable. Header, footer, and article elements are all deemed semantic since they accurately explain the element's purpose and the sort of material it contains.
                HTML was established to describe documents on the early internet as a markup language. As the internet expanded in popularity and more people used it, its requirements evolved.
                People wanted to share other items on the internet, which was originally intended for sharing scientific documents. People began to desire to make the web appear nicer quite rapidly.</p>
            </div>
            <div className="box">
                <h3>What is the diffrence betweens inline blog and inline element?</h3>
                <p>
                Inline items only take up as much space as is required. Regardless of their sufficiency, Block Elements take up the entire width.
                The first line of an inline element does not begin on a new line.
                The first element in a block is always a line.
                Other inline elements can reside behind inline components.
                Other elements are unable to sit behind block elements.
                There are no top and bottom margins for inline items.
                The top and bottom margins are present in block elements.
                </p>
            </div>
            </div>
            
        </div>
    );
};

export default Blogs;