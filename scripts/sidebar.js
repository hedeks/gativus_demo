let sidebar = document.createElement('sidebar');
    sidebar.innerHTML = `<sidebar class="gativus-sidebar">
      <!-- 1) logo + title -->
      <img src='./img/close_icon.png' height='32' class='button close_icon'>
      <div class="header-logo-section header-link" data-link='what-is-the-gativus' id="WITG">
        <img src="./img/logo.jpg" class="logo-section-img" alt="" />
        <p class="logo-section-title">Gativus</p>
      </div>
      <!-- 2) link to wiki -->
      <div class="header-wiki-section">
        <a class="wiki-section-link" href="https://en.wiki.gativus.com"
          >to /wiki<img src="./img/wiki-to-icon.svg" alt=""
        /></a>
      </div>
      <!-- 3) links to landing sections -->
      <div class="sidebar-links" id="nav">
        <p class="link-gtom header-link" id="GTOM" data-link='gtom'>GTOM</p>
        <p class="link-gnet header-link" id="GNET" data-link='gnet'>GNET</p>
        <p class="link-gate header-link" id="GATE" data-link='gate'>GATE</p>
      </div>
      <!-- 4) language select -->
      <div class="header-language-section">
        <p class="language-section-title">Language</p>
        <img src="./img/arrow_down.svg" alt="" />
      </div>
      <!-- 5) contact us section -->
      <div class="header-contact-section header-link" data-link='contact_us' id="contact_us_link">
        <p class="contact-section-title">Contact Us</p>
        <img class="contact-section-icon" src="./img/arrow-right.svg" alt="" />
      </div>
    </sidebar>`