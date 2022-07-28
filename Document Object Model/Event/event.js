function welcome() {
    alert('Sim salabim muncullah elemen-elemen HTML!');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
}

document.body.onload = welcome;

function increment() {
    document.getElementById('count').innerText++

        if (document.getElementById('count').innerText == 7) {
            const hidden = document.createElement('h2');
            hidden.innerText = 'Selamat anda menemukan hadiah tersembunyi...';
            const img = document.createElement('img');
            img.setAttribute('src', 'imgnya.jpg');
            const contents = document.querySelector('.contents');
            contents.appendChild(hidden).appendChild(img)
        }
}
document.getElementById('incrementButton').onclick = increment;