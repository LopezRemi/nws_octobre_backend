import express from "express";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.status(200).send("Coucou Ca fonctionne magueule");
});

export default router;

