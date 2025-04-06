(function() {
    const track = document.getElementById('speakers-track');  // Получаем сам контейнер
    const speakers = document.querySelectorAll('.speakers1');  // Получаем все элементы спикеров
    const speakerWidth = speakers[0].offsetWidth + parseInt(getComputedStyle(speakers[0]).marginRight); // Ширина одного спикера (с margin)

    let position = 0;

    // Клонируем элементы, чтобы прокрутка шла без скачков
    const trackClone = track.cloneNode(true);  // Дублируем весь контейнер с элементами
    track.appendChild(trackClone);  // Добавляем клонированный контейнер в конец

    // Функция для прокрутки
    function moveCarousel() {
        position += speakerWidth;  // Сдвигаем на ширину одного элемента

        // Если достигли конца, сбрасываем на начало
        if (position >= track.scrollWidth / 2) {
            position = 0;
        }

        // Применяем сдвиг
        track.style.transform = `translateX(-${position}px)`;
    }

    // Включаем движение карусели
    setInterval(moveCarousel, 4000);  // Каждые 3 секунды обновляем позицию
})();