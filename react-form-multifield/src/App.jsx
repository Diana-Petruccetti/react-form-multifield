import { useState } from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState('Title')
  const [article, setArticle] = useState('lorem ipsum asfda dagsg eagadzgaz.')


  function handleTitleChange(e) {
    console.log(e);
    setTitle(e.target.value)
  }

  function handleArticleChange(e) {
    console.log(e);
    setArticle(e.target.value)
  }

  return (
    <>

      <h1>Inserisci il titolo</h1>
      <input type="text" name='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />

      <h1>Inserisci l'articolo</h1>
      <input type='text' name='article' id='article' value={article} onChange={e => setArticle(e.target.value)} />
      <div>
        <input type="submit" />
      </div>

      <card>
        <h2>{title}</h2>
        <div>{article}</div>
      </card>

    </>
  )
}

export default App
