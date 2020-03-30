function generateBoxes() {
    clear();
    let count = parseInt(document.querySelector('#jokeCount').value);
    for (let index = 0; index < count; index++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'jokeCard');
        newDiv.innerHTML =
            `<div id='content${index}'></div>
                    <button type="button" id="showButton${index}">Show me!</button>`;
        newDiv.addEventListener('click', function () {
            generateJoke(index);
        })
        document.querySelector('#output').appendChild(newDiv);
    }
}

async function generateJoke(num) {
    fetch(`https://icanhazdadjoke.com/`, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector(`#content${num}`).innerText = data.joke;

        })
        .catch((err) => {
            console.log('Something went wrong!', err);
            alert('Something went wrong, please reload the page and try again!');
        });
}

function clear() {
    let elements = document.querySelector('#output');
    elements.innerHTML = '';
}

document.querySelector(`#jokeCount`).addEventListener('change', generateBoxes);
document.querySelector(`#clearButton`).addEventListener('click', clear);