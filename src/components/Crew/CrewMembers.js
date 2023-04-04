import douglasPNG from "../../assets/crew/image-douglas-hurley.png";
import douglasWEBP from "../../assets/crew/image-douglas-hurley.webp";
import markPNG from "../../assets/crew/image-mark-shuttleworth.png";
import markWEBP from "../../assets/crew/image-mark-shuttleworth.webp";
import victorPNG from "../../assets/crew/image-victor-glover.png";
import victorWEBP from "../../assets/crew/image-victor-glover.webp";
import ansariPNG from "../../assets/crew/image-anousheh-ansari.png";
import ansariWEBP from "../../assets/crew/image-anousheh-ansari.webp";

const crew =[{
        name:"Douglas Hurley",
        position:"Commander",
        description:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        pic:[douglasPNG,douglasWEBP],
    },{
        name:"Victor Glover",
        position:"PILOT",
        description:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        pic:[victorPNG,victorWEBP]
    },{
        name:"MARK SHUTTLEWORTH",
        position:"Mission Specialist ",
        description:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        pic:[markPNG,markWEBP]
    },{
        name:"Anousheh Ansari",
        position:"Flight Engineer",
        description:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        pic:[ansariPNG,ansariWEBP]
    }
]

export default crew;