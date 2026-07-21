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
