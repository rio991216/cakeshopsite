// About Gallery Accsessのリンクとそれ以外の場所を押したときにスライドメニューが消えるようにする
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navBtn = document.querySelector('.l-header__nav-btn');

    document.addEventListener('click', (event) => {
        // メニューが開いている（チェックが入っている）ときだけ処理
        if (menuToggle && menuToggle.checked) {

            // クリックされたのが「リンク（aタグ）」そのものであるか判定
            const isClickLink = event.target.tagName === 'A' && event.target.closest('.l-header__nav-item');

            // クリックされたのが「ハンバーガーボタン（三本線/×ボタン）」の領域であるか判定
            const isInsideBtn = navBtn && navBtn.contains(event.target) || event.target === menuToggle;

            // 1. リンク（Aboutなど）をクリックした場合は閉じる
            // 2. ボタン以外の場所（背景、文字の隙間、画面の外側すべて）をクリックした場合は閉じる
            if (isClickLink || !isInsideBtn) {
                menuToggle.checked = false; // メニューを閉じる
            }
        }
    });
});


// ーーーーーーーーーーーーーー
// Galleryカルーセル
// ーーーーーーーーーーーーーーーー
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".js-carousel");

    if (carousel) {
        const images = carousel.querySelectorAll(".js-carousel__img");
        images.forEach(img => {
            const clone = img.cloneNode(true);
            carousel.appendChild(clone);
        });
    }
});



// --------------------------------
// スクロールで要素フェードイン表示
// --------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const animateFade = (entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.animate(
                    {
                        opacity: [0, 1],
                        filter: ['blur(0.4rem)', 'blur(0)'],
                        transform: ['translateY(4rem)', 'translateY(0)']
                    },
                    {
                        duration: 2000,
                        easing: 'ease',
                        fill: 'forwards'
                    }
                );

                obs.unobserve(entry.target);
            }
        });
    };

    const fadeObserver = new IntersectionObserver(animateFade);
    const fadeElements = document.querySelectorAll('.js-fadein');

    fadeElements.forEach((fadeElement) => {
        fadeObserver.observe(fadeElement);
    });
});