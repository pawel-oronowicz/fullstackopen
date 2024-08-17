import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const GetRandomInt = (count) => {
  return Math.floor(Math.random() * count);
}

const ButtonNextAnecdote = ({ handleClick }) => (
  <button onClick={handleClick}>
    next anecdote
  </button>
)

const ButtonVote = ({ handleClick }) => (
  <button onClick={handleClick}>
    vote
  </button>
)

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <Header title={"Anecdote of the day"} />
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const MostVotedAnecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <Header title={"Anecdote with most votes"} />
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
   
  const [selected, setSelected] = useState(0)

  const selectAnecdote = () => {
    setSelected(GetRandomInt(anecdotes.length))
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotes = Math.max(...votes)
  const indexMostVotes = votes.indexOf(mostVotes)
  const mostVotedAnecdote = anecdotes[indexMostVotes]

  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <ButtonVote handleClick={voteAnecdote} />
      <ButtonNextAnecdote handleClick={selectAnecdote} />
      <MostVotedAnecdote anecdote={mostVotedAnecdote} votes={mostVotes} />
    </div>
  )
}

export default App