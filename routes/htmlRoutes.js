var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Route to the tickets page
    app.get("/tickets", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/tickets.html"));
    });


};