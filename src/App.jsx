import Home from './AI_Self/Home'

(() => {
  const link = 'https://sarvum.onrender.com/api/codegears/todos';
  const getstat = setInterval(
    async () => {
      let a = await fetch(link, { method: 'GET' })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text(); // or response.json() if you're expecting JSON
        })
        .then(data => {
          console.log(data); // 'a' was undefined, so we use 'data' here
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    }
    , 5 * 60 * 1000);

})();

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900">
      <Home />
    </div>
  )
}

export default App
