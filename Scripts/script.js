function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile")

    if(html.classList.contains('light')){
        img.setAttribute('src', 'assets/vicente-dia.jpg')
    }
    else{
        img.setAttribute('src', 'assets/vicente.jpg')
    }
}