const drop_btn = document.querySelector(".drop-btn span");
const tooltip = document.querySelector(".tooltip");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
const setting_drop = document.querySelector(".setting-drop");
const setting_item = document.querySelector(".setting-item");
const setting_btn = document.querySelector(".back-setting-btn");
drop_btn.onclick = () => {
    menu_wrapper.classList.toggle("show");
    tooltip.classList.toggle("show");
};
setting_item.onclick = () => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
        setting_drop.style.display = "block";
    }, 100);
};
setting_btn.onclick = () => {
    menu_bar.style.marginLeft = "0px";
    setting_drop.style.display = "none";
};