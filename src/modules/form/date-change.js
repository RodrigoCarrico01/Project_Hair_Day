import {schedulesDay} from "../schedules/load.js"

//Seleciona o input de data
const selectedDate = document.getElementById("date")

//Recarrega a lista de horários quando input de data mudar
selectedDate.onchange = () => {
  schedulesDay()
}