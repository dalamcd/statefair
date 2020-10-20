const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

eventHub.addEventListener("click", e => {
    if(e.target.id === "rideTicket") {
        const customEvent = new CustomEvent( "ridePicked", { 
            detail: { 
                ridePicked: "ticket"
            }
        });

        eventHub.dispatchEvent(customEvent);
    }
})