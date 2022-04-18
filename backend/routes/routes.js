const memoRoutes = require("./memo");

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    memoRoutes(app, fs);
};

module.exports = appRouter;