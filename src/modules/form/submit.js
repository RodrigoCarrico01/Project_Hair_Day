import dayjs from 'dayjs'

import {scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector('form');
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

//Data atual para o formatar o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//carrega a data atual
selectedDate.value = inputToday
//Define a data minima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  //Previne o comportamento padrão de recarregar a página
  event.preventDefault()

  try{
    //Recuperar o nome do cliente
    const name = clientName.value.trim()

    if(!name){
      return alert("Preencha o nome do cliente.")
    }

    //Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected){
      return alert("Selecione um horário.")
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    //Insere a hora na data.
    const when = dayjs(selectedDate.value).add(hour, "hour")

    //cria um id
    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when,
    })
  }catch(error){
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
} 