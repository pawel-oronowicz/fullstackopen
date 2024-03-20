const Header = (data) => {
  return (
    <h1>{data.title}</h1>
  )
}

const Part = (data) => {
  return (
    <p>{data.title} {data.count}</p>
  )
}

const Content = (data) => {
  const content = data.content;
  return (
    <div>
      <Part title={content[0].part} count={content[0].count} />
      <Part title={content[1].part} count={content[1].count} />
      <Part title={content[2].part} count={content[2].count} />
    </div>
  )
}

const Total = (data) => {
  return (
    <p>Number of exercises {data.count}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const count1 = 10
  const part2 = 'Using props to pass data'
  const count2 = 7
  const part3 = 'State of a component'
  const count3 = 14
  const content = [
    {
      part: part1,
      count: count1
    },
    {
      part: part2,
      count: count2
    },
    {
      part: part3,
      count: count3
    }
  ]


  return (
    <div>
      <Header title={course} />
      <Content content={content} />
      <Total count={count1 + count2 + count3} />
    </div>
  )
}

export default App