import dayjs from 'dayjs'

const form = document.querySelector('form');
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

//Data atual para o formatar o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//carrega a data atual
selectedDate.value = inputToday
//Define a data minima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
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

    console.log({
      id,
      name,
      when: when.format(),
      hour: when.format("HH:mm"),
    })
  }catch(error){
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
} 