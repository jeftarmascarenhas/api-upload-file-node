import { Router } from "express"

const router = Router()

router.get("/", (_, response) => {
  response.json([])
})

router.post("/upload", (_, response) => {
  response.json({ data: "sucesso" })
})

export { router }
