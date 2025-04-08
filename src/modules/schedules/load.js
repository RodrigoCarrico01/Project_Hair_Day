import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import {schedulesShow} from "../schedules/show.js"
import {hoursLoad} from "../form/hours-load.js"

//Seleciona o input de data.
const selectedDate = document.getElementById('date')
export async function schedulesDay(){
  //Obtem a data do input
  const date = selectedDate.value

  //Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  schedulesShow({dailySchedules})

  //Renderiza as horas disponíveis
  hoursLoad({date})
}

/*
Coisas que tenho que levar em consideração:
- Busca na API os agendamentos para carregar do lado direito da tela.
- Os horários disponíveis (horário futuro + horário não agendado) do lado esquerdo (form)
*/