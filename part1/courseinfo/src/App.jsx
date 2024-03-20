const Header = (data) => {
  return (
    <h1>{data.title}</h1>
  )
}

const Part = (data) => {
  return (
    <p>{data.name} {data.exercises}</p>
  )
}

const Content = (data) => {
  const parts = data.parts;
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = (data) => {
  const count = data.parts[0].exercises + data.parts[1].exercises + data.parts[2].exercises
  return (
    <p>Number of exercises {count}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App