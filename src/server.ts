import { app } from "./app"

app.listen(3333, (): void =>
  console.log(`Server running on 3333 port http://localhost:3333`)
)
