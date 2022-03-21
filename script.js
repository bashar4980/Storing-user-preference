//target the element
const SelectFont = document.querySelector('#fontSize');
const SelectBackground = document.querySelector('#bgcolor');
const ResetButton = document.querySelector('#reset');
const MainContent = document.querySelector("#mainContent");

//Set initial Value 
const SetValues = (background, font) => {
    MainContent.style.background = background;
    MainContent.style.fontSize = font;
}

const setInitialvalue = () => {

    const backgroundColor = localStorage.getItem("Background");
    const fontSize = localStorage.getItem("FontSize");
    if (backgroundColor && fontSize) {
        SetValues(backgroundColor, fontSize)
    }
    else if (!backgroundColor && !fontSize) {
        SetValues("orange", "25px");
    }
    else if (backgroundColor && !fontSize) {
        SetValues(backgroundColor, "25px")
    }
    else if (!backgroundColor && fontSize) {
        SetValues("orange", fontSize)
    }


}

//select Font 
SelectFont.addEventListener('change', (event) => {
    const fontSize = event.target.value;
    MainContent.style.fontSize = fontSize;
    localStorage.setItem('FontSize', fontSize) // store the font into local storage
});
//select background  
SelectBackground.addEventListener('change', (event) => {
    const bgcolor = event.target.value;
    MainContent.style.background = bgcolor;
    localStorage.setItem('Background', bgcolor) // store the bg into local storage
});
//reset Button 
ResetButton.addEventListener('click', () => {

    localStorage.removeItem("Background");
    localStorage.removeItem("FontSize");
})
setInitialvalue();