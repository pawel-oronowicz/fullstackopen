const Header = ({ title }) => {
    return (
      <h1>{title}</h1>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part, i) => 
          <Part key={i} part={part} />
        )}
      </div>
    )  
  }
  
  const Course = ({course, parts}) => {
    return (
      <div>
        <Header title={course.name} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    )
  }
  
  const Curriculum = ({courses}) => {
    return (
      <div>
        {courses.map((course, i) =>
          <Course key={i} course={course} parts={course.parts} />
        )}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce(
      (s, p) => 
        s + p.exercises,
        0
    )
  
    return (
      <div>
        <strong>total of {total} exercises</strong>
      </div>
    )
  }

  export default Curriculum