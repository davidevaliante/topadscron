import express from 'express'

const app = express()

const port = '5000'


app.get('/greetings', (_, res) => {
    res.send({
        response: 'Hello Second Apperino Paperino'
    })
})

app.listen(port, () => {
    console.log(`> app ready on port ${port}`)
})
