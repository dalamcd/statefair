const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("buttonClicked", e => {
        if(e.detail.button === "game")
            contentTarget.innerHTML += `<div class="person player"></div>`
    })
}

