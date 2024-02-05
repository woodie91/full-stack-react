const Header = ({ course }) => <h2>{course}</h2>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
  {
    parts.map(part => 
      <Part key = {part.id} part={part} />
      )
  }

  </>
const Total = ({ course }) =>
<>
<b>Total of </b>
<b>
{
  course.parts.reduce((s, p) => {
    console.log('what is happening', s, p)
    return s + p.exercises
  }, 0)


}
</b> <b> exercises </b>
</>

const Courses = ({courses}) => {
    
    return (
      <div>
      {
      courses.map (course => 
        <>
        
        <Header key ={course.id} course ={course.name}/> 
        <Content parts = {course.parts}/>
        <Total course = {course}/>
        </>
       
      )
      }

      </div>
      
    )
    return <Courses courses = {courses}/> 
  }

  

  export default Courses