const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("buttonClicked", e => {
        if(e.detail.button === "food")
            contentTarget.innerHTML += `<div class="person eater"></div>`
    })
}

