const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index", {title: "home"})
});

router.get("/login", (req, res) => {
	res.render("login", {title: "login"} )
});

router.get("/teacher", (req,res) => {
    res.render("teacher", {title: "teacher"})
})

router.get("/admin", (req,res) => {
    res.render("admin", {title: "admin"})
})

router.get("/student", (req,res) => {
    res.render("student", {title: "student"})
})



module.exports = router;
