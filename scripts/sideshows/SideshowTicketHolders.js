const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("buttonClicked", e => {
        if(e.detail.button === "sideshow")
            contentTarget.innerHTML += `<div class="person gawker"></div>`
    })
}

