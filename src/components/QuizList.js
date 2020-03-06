import React from 'react' 
import { Link } from 'react-router-dom'

const QuizList = props => {
    return(
        <div className="container">
        <div className="card">
                <div className="card-body">
                <Link to={'/quiz/' + props.info.id}><h5>{props.info.title}</h5></Link>
                    <p className="card-text">{props.info.description}</p>
                    
                </div>
                
            </div>
                <p>{props.info.question}</p>
            </div>
    )
}

export default QuizList