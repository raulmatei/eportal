window.ENV.development = true;

window.ENV.FIXTURES = {
  user: [
    {
      id: 1,
      screenName: 'tom-dale',
      firstName: 'Tom',
      lastName: 'Dale',
      emailAddress: 'tomdale@yahoo.com'
    }, {
      id: 2,
      screenName: 'andrei-dale',
      firstName: 'Andrei',
      lastName: 'Dale',
      emailAddress: 'andreidale@yahoo.com'
    }, {
      id: 3,
      screenName: 'ion-dale',
      firstName: 'Ion',
      lastName: 'Dale',
      emailAddress: 'ion@yahoo.com'
    }
  ],
  book: [
    {
      id: 1,
      title: 'Bible',
      author: 'Various Artists',
      book_type: 'spirituality',
      year: '1785',
      user_id: undefined,
      booked_at: '20.01.2014',
      return_at: '25.12.2014',
      description: 'first description'
    }, {
      id: 2,
      title: 'Lorem',
      author: 'Sit Dolor',
      book_type: 'randomness',
      year: '1990',
      user_id: undefined,
      booked_at: '23.04.2014',
      return_at: '25.10.2014',
      description: '2nd description'
    }, {
      id: 3,
      title: 'The Trial',
      author: 'Franz Kafka',
      book_type: 'existentialism',
      year: '1914',
      user_id: undefined,
      booked_at: '22.04.2014',
      return_at: '19.09.2014',
      description: '3rd description'
    }
  ],
  building: [
    {
      id: 1,
      name: 'Alpha',
      address: 'Calea Turzii 110'
    }, {
      id: 2,
      name: 'Sigma',
      address: 'Calea Turzii 64'
    }, {
      id: 3,
      name: 'Delta',
      address: 'Calea Turzii 43'
    }, {
      id: 4,
      name: 'Omega',
      address: 'Devei 92'
    }, {
      id: 5,
      name: 'Beta',
      address: 'Whatever'
    }
  ],
  inventory: [
    {
      id: 1,
      deviceType: 'laptop',
      vendor: 'Apple',
      bookedAt: '2014/05/15',
      returnAt: '2014/05/15',
      user: '1'
    }
  ],
  message: [
    {
      id: 1,
      user: 1,
      content: 'Hello there',
      createdAt: '2014-01-02 23:59'
    }, {
      id: 2,
      user: 2,
      content: 'Hello there',
      createdAt: '2014-01-02 00:00'
    }
  ]
};
