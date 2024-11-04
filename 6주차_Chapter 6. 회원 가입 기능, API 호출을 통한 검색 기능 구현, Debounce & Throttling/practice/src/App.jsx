
function App() {
  window.addEventListener("storage", (event) => {
    console.log(event.key)
    console.log(event.newValue)
    console.log(event.oldValue)
    console.log(event.storageArea)
    console.log(event.url)
  })

  const localSave = () => {
    const $input = document.getElementById('text')
    const value = $input.value

    localStorage.setItem('myData', value);
  }

  return(
    <>
      <input id='text'/>
      <button onClick={localSave}/>
    </>
  )
}

export default App
