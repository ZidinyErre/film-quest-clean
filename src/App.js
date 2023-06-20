


function App(){
// const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '25dc51e0f2msh939e4679c146cbep1cdcf0jsn40d1b2992e87',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

return(
    <h1> FilmQuest</h1>
)
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
}
export default App;