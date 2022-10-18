function welcome() {
    alert('Sim salabim muncullah elemen-elemen HTML!');
    // const contents = document.querySelector('.contents');
    // contents.removeAttribute('hidden'); idk why i use attr hidden in div.contents not work? So i use attr hidden and remove in body:)
    document.body.removeAttribute('hidden');
}
// handler onload
// document.body.onload = welcome;

function increment() {
    document.getElementById('count').innerText++;

    if (document.getElementById('count').innerText == 7) {
        const hidden = document.createElement('h2');
        hidden.innerText = 'Selamat anda menemukan hadiah tersembunyi...';
        const img = document.createElement('img');
        img.setAttribute('src', 'Source/imgnya.jpg');
        const contents = document.querySelector('.contents');
        contents.appendChild(hidden).appendChild(img);
    };
};
// handler onclick
// document.getElementById('incrementButton').onclick = increment;


// kita akan membuat handler sama seperti onload dan on click namun dengan versi handler addEventListener()
window.addEventListener('load', welcome);
document.getElementById('incrementButton').addEventListener('click', increment);