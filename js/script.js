document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニューボタンの要素を取得
  const hamburgerButton = document.querySelector("header button");
  // ヘッダー要素を取得
  const header = document.querySelector("header");
  // ナビゲーションメニューを取得
  const nav = document.querySelector("header nav");

  // ボタンがクリックされたときのイベントリスナー
  hamburgerButton.addEventListener("click", function () {
    // ヘッダーのopenクラスを切り替え
    header.classList.toggle("open");

    // ナビゲーションメニューの表示/非表示を切り替え
    if (header.classList.contains("open")) {
      // メニューを表示
      nav.style.display = "block";
      // スクロール禁止
      document.body.style.overflow = "hidden";
    } else {
      // メニューを非表示（モバイル時のみ）
      if (window.innerWidth < 768) {
        nav.style.display = "none";
      }
      // スクロール許可
      document.body.style.overflow = "";
    }
  });
  // ハンバーガーメニュー終わり

  // 画面サイズが変わったときのイベントリスナー
  window.addEventListener("resize", function () {
    // PCサイズになったらナビゲーションを表示
    if (window.innerWidth >= 768) {
      nav.style.display = "block";
      // PCサイズではopenクラスを削除
      header.classList.remove("open");
      // スクロール許可
      document.body.style.overflow = "";
    } else {
      // モバイルサイズでopenクラスがなければナビゲーションを非表示
      if (!header.classList.contains("open")) {
        nav.style.display = "none";
      }
    }
  });

  // 初期状態の設定（ページ読み込み時）
  if (window.innerWidth < 768) {
    nav.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // PC用とスマホ用の両方に適用
  fadeZoomSlider(".pc-images img");
  fadeZoomSlider(".sp-images img");

  function fadeZoomSlider(selector) {
    const images = document.querySelectorAll(selector);
    let currentIndex = 0;

    // 初期状態ではすべての画像を非表示にし、最初の画像だけ表示して即座にズーム効果を適用
    images.forEach((img, index) => {
      img.classList.remove("active");
      img.classList.remove("zoom");

      if (index === 0) {
        img.classList.add("active");
        // アクティブな最初の画像にズーム効果を適用
        setTimeout(() => {
          img.classList.add("zoom");
        }, 100);
      }
    });

    // 定期的に画像を切り替える
    setInterval(() => {
      // 現在の画像を非表示
      images[currentIndex].classList.remove("active");
      // ズームクラスもリセット
      images[currentIndex].classList.remove("zoom");

      // 次の画像のインデックスを計算
      currentIndex = (currentIndex + 1) % images.length;

      // 次の画像を表示
      images[currentIndex].classList.add("active");

      // 画像が表示された直後にズーム効果を適用
      setTimeout(() => {
        images[currentIndex].classList.add("zoom");
      }, 100);
    }, 4000); // 4秒ごとに切り替え
  }
});

// 文章をスクロールさせたら表示
document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeIns.forEach((el) => observer.observe(el));
});

// タブの表示切替
$(document).ready(function () {
  // タブクリック時の処理
  $(".tab-list li a").on("click", function () {
    console.log("タブクリックされました");
    // タブの青色をすべて消す
    $(".tab-list li").removeClass("selected");
    // クリックしたタブリストを青色にする
    $(this).parent().addClass("selected");
    // コンテンツをすべて消す
    $(".panel-content").hide();
    // クリックしたタブのコンテンツを表示する
    let target = $(this).attr("href");
    console.log("表示対象:", target);
    $(target).fadeIn();
    // クリック時の機能を無効化
    return false;
  });

  // 初期表示設定
  // 最初のパネル以外は非表示に（HTML側でも非表示設定済み）
  $(".panel-content:not(:first)").hide();
  // 最初のタブに選択クラスを追加（HTML側でも追加済み）
  $(".tab-list li:first-child").addClass("selected");
  $("#tab1").show();

  console.log("タブ初期化完了");
});
// タブの表示切り替え終了

// コースメニューフェイドイン
const $serviceList = $(".service-list");
$(window).on("scroll", () => {
  const isInView = $serviceList.inView("topOnly", 150);

  if (isInView && !$serviceList.hasClass("in-view")) {
    $serviceList.addClass("in-view");
  }
});

// ギャラリー写真表示切り替え
document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".gallery-nav button");
  const images = document.querySelectorAll(".gallery-image img");
  const textContents = document.querySelectorAll(".gallery-text-content");
  let currentIndex = 0;
  let interval;

  // 画像とテキストを切り替える関数
  function switchContent(index) {
    // 前の画像をフェードアウト
    const currentImage = images[currentIndex];
    const nextImage = images[index];

    // フェードイン/アウトを同時に起こす
    currentImage.classList.remove("active");
    nextImage.classList.add("active");

    // テキストとボタンの切り替え
    textContents[currentIndex].classList.remove("active");
    textContents[index].classList.add("active");
    navButtons[currentIndex].classList.remove("active");
    navButtons[index].classList.add("active");

    currentIndex = index;
  }

  // 自動スライド切り替えの設定
  function startAutoSlide() {
    interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % images.length;
      switchContent(nextIndex);
    }, 4000); // 4秒ごとに切り替え
  }

  // ナビゲーションボタンのクリックイベント
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      switchContent(index);

      // 自動切り替えをリセット
      clearInterval(interval);
      startAutoSlide();
    });
  });

  // 初期化時に自動スライドを開始
  startAutoSlide();
});
// ギャラリー写真表示終わり
