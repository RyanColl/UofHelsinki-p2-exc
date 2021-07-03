

const Part = ({course}) => {
    return(
    <ul>
        {course.parts.map(part => 
            <li>{part.name}:{part.exercises}</li>
            )}
    </ul>
    )
}
export default Part