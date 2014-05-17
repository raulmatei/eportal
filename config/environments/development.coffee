window.ENV.development = true

window.ENV.FIXTURES = {
  user: [
    { id: 1, fullName: 'Tom Dale' }
    { id: 2, fullName: 'Yehuda Katz' }
    { id: 3, fullName: 'Jo Liss' }
  ]
  book: [
    { id: 1, title: 'Bible', author: 'Various Artists', book_type: 'spirituality', year: '1785', user_id: '0', booked_at:'20.01.2014', return_at:'25.12.2014', bookDesc: 'first description'}
    { id: 2, title: 'Lorem', author: 'Sit Dolor', book_type: 'randomness', year: '1990', user_id: '1', booked_at:'23.04.2014', return_at:'25.10.2014', bookDesc: '2nd description' }
    { id: 3, title: 'The Trial', author: 'Franz Kafka', book_type: 'existentialism', year: '1914', user_id: '2', booked_at:'22.04.2014', return_at:'19.09.2014', bookDesc: '3rd description' }
  ]
  building: [
    { id: 1, name: 'Alpha', address: 'Calea Turzii 110' }
    { id: 2, name: 'Sigma', address: 'Calea Turzii 64' }
    { id: 3, name: 'Delta', address: 'Calea Turzii 43' }
    { id: 4, name: 'Omega', address: 'Devei 92' }
    { id: 5, name: 'Beta', address: 'Whatever' }
  ]
}
