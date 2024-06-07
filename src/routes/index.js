import { Router } from "express";

const router = Router();

router.get("/src/view/index.ejs", (req, res) => res.render("index"));

router.get("/src/view/Productos.ejs", (req, res) => res.render("Productos"));

router.get("/src/view/Categorias.ejs", (req, res) => res.render("Categorias"));

router.get("/src/view/Compras.ejs", (req, res) => res.render("Compras"));

router.get("/src/view/Favoritos.ejs", (req, res) => res.render("Favoritos"));

export default router;
