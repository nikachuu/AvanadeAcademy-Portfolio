const sectionMenus = document.querySelectorAll("h3");
console.log(sectionMenus)

sectionMenus.forEach(sectionMenu => {
    sectionMenu.addEventListener("click", function(e){
        e.preventDefault();
        const clickedSection = event.target.closest("section");
        const accordionDiv = clickedSection.childNodes[3];
        accordionDiv.classList.toggle("sections__accordion--clicked");
    });
});