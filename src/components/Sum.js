import React from "react"

const Sum = ({course}) => {
    const arr = []
    // accumulator accumulates the callback functions return values
    return(
        <ul>
            <li key={course.id}>total sum of courses: {course.parts.forEach((part) => {arr.push(part.exercises)})}{arr.reduce((acc, num) => acc + num)}</li>
        </ul>  
    )
}

export default Sum
