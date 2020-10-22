// Import and invoke the ticket booth component function
import { FoodTicketHolders } from "./food/FoodTicketHolders.js";
import { GameTicketHolders } from "./games/GameTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";
import { BigSpenderTicketHolders } from "./bigspenders/BigSpenderTicketHolders.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { TicketBooth } from "./TicketBooth.js";

const eventHub = document.querySelector("#state-fair")

TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();
BigSpenderTicketHolders();
// eventHub.addEventListener("ridePicked", e => {
//     console.log("w00t");
// })