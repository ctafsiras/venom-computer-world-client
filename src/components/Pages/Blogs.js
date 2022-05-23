import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:px-12'>
            <h2 className='text-primary text-3xl font-bold'>Blogs</h2>
            <div className="divider"></div>
            <h2 className='text-secondary text-2xl'>1. How will you improve the performance of a React Application?</h2>
            <p> <span className='text-primary font-bold'>Ans:</span> There are lots of suggestion on the internet to make react site faster than previews, some them are Using Immutable Data Structures, Using Production Mode Flag in Webpack, Understanding how React updates its UI, Memoizing React components to prevent unnecessary re-renders, Dependency optimization, Avoid Inline Function Definition in the Render Function, Avoid using Index as Key for map and many more.</p>
            <div className="divider"></div>
            <h2 className='text-secondary text-2xl'>2. What are the different ways to manage a state in a React application?</h2>
            <p> <span className='text-primary font-bold'>Ans:</span> When the question is to manage react states, then I have to say firstly there are four kind of state in react. Local state, Global state, Server state and URL state. to manage local state we can easily manage it through useSatate or useReducer. to manage global state we can use same useReducer and useContext. for server state we use useEffect and lastly for URL state we can use useLocation or useHistory.</p>
            <div className="divider"></div>
            <h2 className='text-secondary text-2xl'>3. How does prototypical inheritance work?</h2>
            <p> <span className='text-primary font-bold'>Ans:</span> When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object is called prototype. That prototype object has its own prototype, and so on until an object is reached with null as its prototype. prototypes should never be extended unless it is for the sake of compatibility with newer JavaScript features.</p>

            <div className="divider"></div>
            <h2 className='text-secondary text-2xl'>4. Why you do not set the state directly in React.</h2>
            <p> <span className='text-primary font-bold'>Ans:</span> As per given example, if I have const [products, setProducts] = useState([]). Why you do I can not set products = [...] instead, I use the setProducts, because React work on based on react dom. If we set the value directly i will not update our data to UI automatically. but when we use state instead of direct using, it update the data in UI automatically.</p>
            <div className="divider"></div>
            <h2 className='text-secondary text-2xl'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <p> <span className='text-primary font-bold'>Ans:</span> For this kind of operation javascript specially es6 has many useful beautiful methods such as filter array. if we need to find any data from an array of object we can simply use the filter method where we will filter data with array name and inside the filer after object name we give the variable name and then run the includes method to find some specific text.</p>
            <div className="divider"></div>
            <h2 className='text-secondary text-2xl'>6. What is a unit test? Why should write unit tests?</h2>
            <p> <span className='text-primary font-bold'>Ans:</span> For this kind of operation javascript specially es6 has many useful beautiful methods such as filter array. if we need to find any data from an array of object we can simply use the filter method where we will filter data with array name and inside the filer after object name we give the variable name and then run the includes method to find some specific text.</p>



        </div>
    );
};

export default Blogs;