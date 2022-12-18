const makeHeader = () => {
  console.log(document.getElementsByTagName("header")[0]);
  document.getElementsByTagName("header")[0].innerHTML = /*HTML*/ `
  <div style="display: flex; justify-content: space-between">
        <h1 onclick="selectNavElement('index.html')">Johnny Bakaas</h1>
        <div class="burger" onclick="showNav()">☰</div>
      </div>
      <nav>
        <button onclick="selectNavElement('teknisk_tegning.html')">Teknisk tegning</button>
        <button onclick="selectNavElement('3d_Modellering.html')">3D modellering</button>
        <button onclick="selectNavElement('3d_Rendering.html')">3D rendering</button>
        <button onclick="selectNavElement('nettsider.html')">Nettsider</button>
        <button onclick="selectNavElement('programering.html')">Programmering</button>
        <button onclick="selectNavElement('mine_prosjekter.html')">Mine prosjekt</button>
      </nav>
      `;
};

const showNav = () => {
  console.log(document.getElementsByTagName("nav")[0].style.display);
  if (document.getElementsByTagName("nav")[0].style.display == "none") {
    document.getElementsByTagName("nav")[0].style.display = "flex";
  } else {
    document.getElementsByTagName("nav")[0].style.display = "none";
  }
};

const selectNavElement = (fileName) => {
  window.location.assign(fileName);
};

makeHeader();
