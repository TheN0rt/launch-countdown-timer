const countdown = () => {
   const month = {
      1: 31,
      2: 28,
      3: 31, 
      4: 30, 
      5: 31,
      6: 30, 
      7: 31, 
      8: 31,
      9: 30, 
      10: 31, 
      11: 30,
      12: 31
   }
   const now = new Date()
   const nowMonth = now.getMonth()+1
   const date = new Date(`${now.getMonth()+1} ${month[nowMonth]}, ${now.getFullYear()}, 00:00:00`).getTime()
   const diff = date - now.getTime()

   const seconds = 1000
   const minutes = seconds * 60
   const hours = minutes * 60
   const days = hours * 24

   let timeDays = Math.floor(diff / days)
   let timeHours = Math.floor((diff % days) / hours)
   let timeMinutes = Math.floor((diff % hours) / minutes)
   let timeSeconds = Math.floor((diff % minutes) / seconds)

   timeHours = timeHours < 10 ? "0" + timeHours : timeHours
   timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
   timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

   document.querySelector('#day').textContent = timeDays
   document.querySelector('#hour').textContent = timeHours
   document.querySelector('#minute').textContent = timeMinutes
   document.querySelector('#second').textContent = timeSeconds
}

setInterval(countdown, 1000)
