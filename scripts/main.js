// Import and invoke the ticket booth component function

import { TicketBooth } from "./TicketBooth.js";

const eventHub = document.querySelector("#state-fair")

TicketBooth();

eventHub.addEventListener("ridePicked", e => {
    console.log("w00t");
})