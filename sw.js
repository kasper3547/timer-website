// sw.js
   self.addEventListener('push', event => {
       const options = {
           body: event.data.text(),
           icon: 'icon.png', // Иконка для уведомления
       };

       event.waitUntil(
           self.registration.showNotification('Время вышло!', options)
       );
   });
