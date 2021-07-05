import React from 'react'
import Part from './Part'
import Sum from './Sum'
const Course = ({courses}) => {
    return(
        
        <div>
            {courses.map(course => 
                <div>{console.log(course)}
                    <h1>{course.name}</h1>
                    <Part course={course} id={course.id}/>
                    <Sum course={course} id={course.id} />
                </div>
            )}
            
        </div>

    )
}
export default Course