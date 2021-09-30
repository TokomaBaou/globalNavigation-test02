import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>グローバルナビゲーション</h1>

<div class="openbtn"><span></span><span></span><span></span></div>
<nav id="g-nav">
  <div id="g-nav-list">
    <!--縦スクロール用のdiv-->
    <ul>
      <li><a href="#">Top</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>

`;
