//checking if localStorgae is present or not
window.addEventListener('load', () => {
    if (!window.localStorage.getItem('profiles')) {
        window.location = 'form.html' 
    }
    else{
        const profiles = JSON.parse(window.localStorage.getItem('profiles'))
        setIconValues(profiles)
    }
})

//setting values
function setIconValues(profiles){
    var git = document.querySelector('#github')
    var web = document.querySelector('#web')
    var linkedin = document.querySelector('#linkedin')
    var mail = document.querySelector('#mail')
    var twitter = document.querySelector('#twitter')
    var insta = document.querySelector('#insta')
    var stacko = document.querySelector('#stacko')

    git.setAttribute('data-value', profiles.github)
    web.setAttribute('data-value', profiles.website)
    linkedin.setAttribute('data-value', profiles.linkedin)
    mail.setAttribute('data-value', profiles.email)
    twitter.setAttribute('data-value', profiles.twitter)
    insta.setAttribute('data-value', profiles.insta)
    stacko.setAttribute('data-value', profiles.stacko)
}

//function to copy values to the clipboard
function copyToClipboard(element) {
    const link = element.getAttribute('data-value')
    window.navigator.clipboard.writeText(link)
    alert('Copied')
}

//extracting target
var iconContainer = document.querySelector('.main-container')
iconContainer.addEventListener('click', (e) => {
    copyToClipboard(e.target)
})

//reset button
var reset = document.querySelector('#reset')
reset.addEventListener('click', () => {

    //clearing localStorage
    window.localStorage.clear()
    window.location = 'form.html'
})