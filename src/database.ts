import { connect } from "mongoose";

connect("mongodb://localhost/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Database is connected"))
    .catch(err => console.log(err));