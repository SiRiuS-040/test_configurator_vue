const appStorage = {
    formTypes: [
        1, 2, 3, 4
    ],
    coffePrograms: [
        0, 6, 8, 12
    ],
    sameMakingSpots: [
        1, 2, 4, 100
    ],
    typeNames: {
        1: 'Мини',
        2: 'Компакт',
        3: 'Большая',
        4: 'Фабрика',
    }
}

module.exports = function(app, db) {
    app.get('/data-config', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(appStorage)
      });
  };