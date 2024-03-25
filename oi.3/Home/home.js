let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.onmousemove = function(e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const wordContainer = document.getElementById('wordContainer');
    const words = [
        "of Analytics for Informed Decision-Making.",
        "of Actions in your hands.",
        "to create your dreams."
    ];
    let currentIndex = 0;

    function updateWord() {
        wordContainer.innerHTML = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;
    }

    function startAnimation() {
        setInterval(updateWord, 3000); // Change word every 3 seconds
    }

    startAnimation();
});

   document.getElementById('loginButton').addEventListener('click', function() {
      // Redirecione para a página de login (substitua 'caminho_para_pagina_de_login.html' pelo seu caminho real)
      window.location.href = '../login/login.html';
   });

