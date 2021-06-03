import { useState, useEffect } from 'react'

const ExampleUseEffect = () => {
  // State
  const [fullName, setFullName] = useState({
    name: 'name',
    familyName: 'family'
  })
  const [title, setTitle] = useState('useEffect() in hooks')

  // useEffect
  useEffect(() => {
    console.log('useEffect has been called')
    setFullName({
      name: 'Suk-Be',
      familyName: 'Jang'
    })
  }, [])
  // A second argument in form of an array is passed to useEffect()
  // without the array to control the life-cycle elements the component gets affected
  // on every state change (setFullName)
  // -> didMount: name
  // -> didMount: familyName
  // -> didUpdate: name
  // -> didUpdate: familyName
  // ... it will be more than 4 times!

  // the array as second argument tells react what state obj to update specifically
  // [name] only updates name
  // [] no object state to watch over

  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  )
}

export default ExampleUseEffect