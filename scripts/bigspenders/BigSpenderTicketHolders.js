const contentTarget = document.querySelectorAll(".food, .games, .rides, .sideshow")
const eventHub = document.querySelector("#state-fair")
console.log(contentTarget)
export const BigSpenderTicketHolders = () => {
    eventHub.addEventListener("buttonClicked", e => {
        if(e.detail.button === "bigSpender") {
            contentTarget.forEach(target => {
                target.innerHTML += `<div class="person bigSpender"></div>`
            });
        }
    })
}

