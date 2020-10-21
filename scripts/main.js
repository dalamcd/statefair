// Import and invoke the ticket booth component function

import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { TicketBooth } from "./TicketBooth.js";

const eventHub = document.querySelector("#state-fair")

TicketBooth();
RideTicketHolders();
// eventHub.addEventListener("ridePicked", e => {
//     console.log("w00t");
// })