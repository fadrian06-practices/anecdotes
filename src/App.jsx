import { useState } from 'react'
import random from './utils/random'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([])

  const changeAnecdote = () => {
    let randomNumber = selected

    while (randomNumber === selected) {
      randomNumber = random(0, anecdotes.length - 1)
    }

    setSelected(randomNumber)
  }

  const vote = () => {
    const newVotes = [...votes]

    newVotes[selected] ??= 0
    newVotes[selected]++
    setVotes(newVotes)
  }

  const mostVoted = {
    index: 0,
    votes: votes[0]
  }

  votes.forEach((votes, index) => {
    if (votes > mostVoted.votes) {
      mostVoted.index = index
      mostVoted.votes = votes
    }
  })

  return (
    <div>
      <article>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes[selected] ?? 0} votes</p>
        <button onClick={vote}>Vote</button>
        <button onClick={changeAnecdote}>Next anecdote</button>
      </article>
      <article>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[mostVoted.index]}</p>
        <p>Has {votes[mostVoted.index]} votes</p>
      </article>
    </div>
  )
}

export default App
