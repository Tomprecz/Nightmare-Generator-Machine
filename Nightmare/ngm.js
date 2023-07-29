console.log("Nightmare Test")

// Selecting the required elements from the DOM 
// Dropdown
let dropdown = document.getElementById("dropdown")
let Putin = document.getElementById("Putin")
let Lukashenko = document.getElementById("Lukashenko")
let Jinping = document.getElementById("Jinping")
let Un = document.getElementById("Un")

// Selecting names from the dropdown list.
Putin.addEventListener("click", function run(){
    dropdown.value = Putin.innerText
    // console.log("Vladimir Putin")
})
Lukashenko.addEventListener("click", function run(){
    dropdown.value = Lukashenko.innerText
    // console.log("Alexander Lukashenko")
})
Jinping.addEventListener("click", function run (){
    dropdown.value = Jinping.innerText
    // console.log("Xi Jinping")
})
Un.addEventListener("click", function run(){
    dropdown.value = Un.innerText
    // console.log("Kim Jong Un")
})

// Click Event
// // Another, Input + Recipient Button
let addRecipient = document.getElementById("addRecipient")
addRecipient.addEventListener("click",function run(){
    let anotherPerson = document.getElementById("anotherPerson").value
    confirm("Your recipient has been added!")
    console.log("Unique recipient:", anotherPerson)
})

// Selecting random words/sentences from JSON Array
let JSONArray = ["Crying children.", "The stench of rot.", "Spooky nuns.", "Spooky clergy.", "Persecution.",
    "Bloodthirsty pigs.", "Vampire bunnies.", "Spooky screaming.", "Cannibalism.", "Whispering.",
    "Ripping out the guts.", "Devouring alive.", "Zombies.", "Demons.", "Ghosts.", "Crushing.", 
    "Rotting fingernails.", "Teeth falling out.", "Drowning in excrement.", "Sound of the breaking bones.", 
    "Headache.", "Devouring one's own tongue.", "The stench of burning flesh.", "Hell.", 
    "Suffocation.", "Burning at the stake.", "Witches.", "Worms.", "Plague of rats.", "Impalement.",
    "Widow's lament.", "A widower's lament.", "Spooky granny.", "Spooky grandpa.", 
    "Tons of mud.", "The stench of rotting eggs.", "Slicing bodies.", "Fetal pathologies.",
    "The stench of the hospital.", "The dissecting room.", "Hair.", "Dirt.", "Scars.", "Bleeding."]
    // console.log(JSONArray)
    // Generate a random index within the array length
    let randomIndex = Math.floor(Math.random() * JSONArray.length)
    // Retrieve the random words from the array
    let randomWord = JSONArray[randomIndex]
    console.log("Nightmare applied:", randomWord)

// Textarea & Radio send to Generate Button.
function getData(){
    // Text Area
    let message = document.getElementById("message")
    let text = message.value
    // console.log("Your emotional intention and message:'", text,"', has been analysed and transformed by my tele-quantum processor.")
    let messageContent = document.getElementById("messageContent")
    messageContent.innerText = "Your emotional intention and message:'"+ text +"', has been analysed and transformed by my tele-quantum processor."

    // JSON random Nightmare
    message.value = randomWord
    let nightmareApplied = document.getElementById("nightmareApplied")
    nightmareApplied.innerText = "Nightmare applied: " + randomWord

    // Dropdown
    let dropName = document.getElementById("dropName")
    dropName.innerText = "Recipient: " + dropdown.value
    // Recipient
    let anotherPerson = document.getElementById("anotherPerson").value
    let recipientName = document.getElementById("recipientName")
    recipientName.innerText = "Unique recipient: " + anotherPerson

    // Mood
    let LightMood = document.getElementById("LightMood")
    let ModerateMood = document.getElementById("ModerateMood")
    let SevereMood = document.getElementById("SevereMood")
    let CatatonicMood = document.getElementById("CatatonicMood")
    let userMood = document.getElementById("userMood")
    // console.log(userMood)

    if (LightMood.checked) {
        // console.log("Nightmare mood applied: Light.")
        userMood.innerText = "Nightmare mood applied: Light."
    } 
    else if (ModerateMood.checked) {
        // console.log("Nightmare mood applied: Moderate.")
        userMood.innerText = "Nightmare mood applied: Moderate."
    } 
    else if (SevereMood.checked){
        // console.log("Nightmare mood applied: Severe.")
        userMood.innerText = "Nightmare mood applied: Severe."
    }
    else if (CatatonicMood.checked){
        // console.log("Nightmare mood applied: Catatonic.")
        userMood.innerText = "Nightmare mood applied: Catatonic."
    }

    // Duration
    let OneNight = document.getElementById("OneNight")
    let OneWeek = document.getElementById("OneWeek")
    let OneMonth = document.getElementById("OneMonth")
    let OneYear = document.getElementById("OneYear")
    let Infinity = document.getElementById("Infinity")
    let userDuration = document.getElementById("userDuration")

    if (OneNight.checked){
        // console.log("Nightmare duration applied: One Night.")
        userDuration.innerText = "Nightmare duration applied: One Night."
    }
    else if (OneWeek.checked){
        // console.log("Nightmare duration applied: One Week.")
        userDuration.innerText = "Nightmare duration applied: One Week."
    }
    else if (OneMonth.checked){
        // console.log("Nightmare duration applied: One Month.")
        userDuration.innerText = "Nightmare duration applied: One Month."
    }
    else if (OneYear.checked){
        // console.log("Nightmare duration applied: One Year.")
        userDuration.innerText = "Nightmare duration applied: One Year."
    }
    else if (Infinity.checked){
        // console.log("Nightmare duration applied: Infinity")
        userDuration.innerText = "Nightmare duration applied: Infinity"
    }
    

/* Apply code to get data function that changes display 
for a data div from NONE to BLOCK. Create the new function for the data div confirm button 
that resets the homepage (change display style).
*/
    // Reset & go back to homepage.
    let dataDiv = document.getElementById("dataDiv")
        dataDiv.style.display = "block"
        dataDiv.style.backgroundColor = "#36322df9"
    
    // Blur the backgrounds.
        // let divcontainerFluid = document.getElementsByClassName("container-fluid")[0]
        // let overlay0 = document.getElementsByClassName("blurBG")[0];
        // // divcontainerFluid.addEventListener("click", (e) => {divcontainerFluid})
        // let bgPicture = document.getElementsByClassName("bgPicture")[1]
        // let overlay1 = document.getElementsByClassName("blurBG")[1];
        // // bgPicture.addEventListener("click", (e) => {bgPicture})
        // let divcontainerFluidTextCenter = document.getElementsByClassName("container-fluid")[2]
        // let overlay2 = document.getElementsByClassName("blurBG")[2];
        // // divcontainerFluidTextCenter.addEventListener("click", (e) => {divcontainerFluidTextCenter})
        // let siteFooter = document.getElementsByClassName("site-footer")[3]
        // let overlay3 = document.getElementsByClassName("blurBG")[3];
        // // siteFooter.addEventListener("class", (e) => {siteFooter})

        // console.log(overlay0)
        // overlay0.setAttribute("class", "overlay")
        // divcontainerFluid.setAttribute("class", "blur")
        // console.log(overlay0)
}

// Generate Button
generateBtn.addEventListener("click", (e) => {
    generateBtn.innerText = "Regardless of the message content you added, unique nightmares ware generated and applied!"
})

// Text area displays random words.  
let message = document.getElementById("message")
message.innerText = ""



