import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstApp from './FirstApp'
// import App from './App'
import './index.css'

ReactDOM
.createRoot(document.getElementById('root'))
.render(
    <React.StrictMode>
        <FirstApp title="My First App" />
    </React.StrictMode>
)

const title 'First App';

const FirstApp =  ( props ) => {
    return (
        <div>
            <h1> { props.title } </h1>
            <span> 10 </span>
        </div>
    )
}

export default FirstApp
