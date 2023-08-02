import { app } from './app'
import { env } from './config/env'

app.listen({
  host: '0.0.0.0',
  port: 3333,
}, () => {
  console.log(`Server running on http://localhost:3333`)
})
