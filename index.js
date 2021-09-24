import express from "express";

const app = express();

app.use(express.static("./client/build"));

app.get("/data", (req, res) => {
    res.send({
        firstName: "Bill",
        lastName: "Mills"
    });
});

app.listen(process.env.PORT || 3003);