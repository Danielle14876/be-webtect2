import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'   // ✅ import this
import studentsRoute from './students/students.route.js'

const app = new Hono()

// ✅ Enable CORS
app.use('*', cors({
  origin: 'http://localhost:4200', // allow Angular dev server
}))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/students', studentsRoute)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
