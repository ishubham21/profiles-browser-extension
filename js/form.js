var profiles = {}

function returnElems(identifier) {
    return document.querySelector(identifier)
}

//defining variables
var git = returnElems('#github')
var web = returnElems('#website')
var linkedin = returnElems('#linkedin')
var email = returnElems('#mail')
var twitter = returnElems('#twitter')
var insta = returnElems('#instagram')
var stacko = returnElems('#stackoverflow')

//setting localStorage for saving the details
function setLocalStorage(){
    window.localStorage.setItem('profiles', JSON.stringify(profiles))
}

//function to get and set values
function getValues(){
    profiles.github = git.value
    profiles.website = web.value
    profiles.linkedin = linkedin.value
    profiles.email = email.value
    profiles.twitter = twitter.value
    profiles.insta = insta.value
    profiles.stacko = stacko.value

    //calling this function to set localStorage
    setLocalStorage()

    window.location = 'index.html'
}

//submit button
var submit = returnElems('#send-button')
//click event listener
submit.addEventListener('click', getValues)


