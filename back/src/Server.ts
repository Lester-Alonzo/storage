import {app} from './app'

const port = process.env.PORT || 3001

app.listen(port, () => console.log('http://localhost:3001/v1/'))