document.addEventListener('DOMContentLoaded', function() {
    const targetElement = document.getElementById('typing-title');
    const textToType = targetElement.innerText;
    targetElement.innerText = '';
    targetElement.style.visibility = 'visible';

    let i = 0;
    function typeWriter() {
        if (i < textToType.length) {
            targetElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // 150ミリ秒ごとに1文字（少しゆっくりめ）
        } else {
            // アニメーション終了後にカーソルを非表示にする
            targetElement.classList.remove('typing-cursor');
        }
    }

    typeWriter();
});