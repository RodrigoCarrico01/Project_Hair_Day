import {scheduleCancel} from "../../services/schedule-cancel.js"
import {schedulesDay} from "./load.js"
const periods = document.querySelectorAll('.period')


//Gerar evento click para cada lista (manhã, tarde e noite)
periods.forEach((period)=>{
  //Capturar o evento de clique na lista
  period.addEventListener("click", async (event)=>{
    if(event.target.classList.contains("cancel-icon")){
      //obtem a li pai do elemento clicado
      const item = event.target.closest("li")

      //Apanhar o id
      const { id } = item.dataset
      
      //confirma se ha id
      if(id){
        //confirma se o user quer remover
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
      
        if (isConfirm){
          //requisição de deletar pela api utilizando o id que apanhamos
          await scheduleCancel({id})

          //Recarregar os agendamentos
          schedulesDay()
        }
      }
    }
  })
})