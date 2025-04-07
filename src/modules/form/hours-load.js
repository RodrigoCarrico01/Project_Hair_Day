import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"

export function hoursLoad({date}) {
  const opening = openingHours.map((hour)=>{
    //Recupera somente a hora.
    const [scheduleHour, __] = hour.split(":")
    //adiciona a hora na date e verifica se está no passado.
    const isAvailable = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    return {
      hour,
      available: isAvailable,
    }
  })
  console.log(opening)
}