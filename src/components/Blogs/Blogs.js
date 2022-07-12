import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (

        <>
        
        <div className='blogs-container '>
            <h3>Difference between javascript and nodejs ?</h3>
            <h5>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</h5>
            <h3>When should you use nodejs and when should you use mongodb ?</h3>
            <h5>MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.
</h5>
            <h3>Differences between sql and nosql databases ?</h3>
            <h5>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores..</h5>
        </div>
        </>
        
    );
};

export default Blogs;