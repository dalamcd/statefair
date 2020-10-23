const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
let tickets = 0;

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gameTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="bigSpenderTicket">Big Spender Ticket</button>
        </div>
    `
}

const TicketBoothVisitors = () => {
    const visitorTarget = document.querySelector(".customers")
    visitorTarget.innerHTML = `Number of visitors: ${tickets}`;
}

eventHub.addEventListener("click", e => {    
    const customEvent = new CustomEvent("buttonClicked", { detail: {} });

    if (e.target.id === "rideTicket")
        customEvent.detail.button = "ride"
    if (e.target.id === "foodTicket")
        customEvent.detail.button = "food"
    if (e.target.id === "gameTicket")
        customEvent.detail.button = "game"
    if (e.target.id === "sideshowTicket")
        customEvent.detail.button = "sideshow"
    if (e.target.id === "bigSpenderTicket")
        customEvent.detail.button = "bigSpender"

    eventHub.dispatchEvent(customEvent);
})

eventHub.addEventListener("buttonClicked", e => {

    if (e.detail.button) {
        tickets++;
        TicketBoothVisitors();
    }
});