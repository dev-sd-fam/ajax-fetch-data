var pageCounter = 0;
var loader = document.getElementById('loader') 
let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click', popHandler)

function popHandler() {
    pageCounter += 10;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/`, true);
    xhr.onloadstart = function () {
        loader.style.display = 'block';
    }
    xhr.onloadend = function () {
        loader.style.display = 'none';
    }
    xhr.onload = function () {
        let obj = JSON.parse(this.responseText) 

        if (pageCounter >= obj.length) {
            popBtn.style.display = "none";
        }
        let str = ""
        for (let i = 0; i < obj.length; i++) {
            
            let list = document.getElementById('list')
            if (i < pageCounter) {
                str += `
                <li>
                <p><span>Title:</span>${obj[i].title}<p>
                <p><span>Description:</span>${obj[i].body}</p>
                </li>
                `
            } 
            list.innerHTML = str;
        }
    }
    xhr.send();
}