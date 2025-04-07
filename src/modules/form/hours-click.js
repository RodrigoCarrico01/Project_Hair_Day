export function hoursClick(){
  const hours = document.querySelectorAll('.hour-available')

  hours.forEach((available)=>{
    available.addEventListener('click', (selected)=>{
      //Remove a class hour-selected de todas as lis não selecionadas
      hours.forEach((hour)=>{
        hour.classList.remove('hour-selected')
      })

      //Adiciona a class na li clicada.
      selected.target.classList.add('hour-selected')
    })
  })

}