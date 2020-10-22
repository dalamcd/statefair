const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("buttonClicked", e => {
        if(e.detail.button === "ride")
            contentTarget.innerHTML += `<div class="person rider"></div>`
    })
}

