const connect = require('connect');
const url = require('url');

const app = connect();

app.use(connect.urlencoded({ extended: false }));

app.use((req, res) => {
  const query = url.parse(req.url, true).query;
  const method = query.method;
  const x = parseFloat(query.x);
  const y = parseFloat(query.y);

  if (!method || !x || !y) {
    res.end('Error: missing required parameters');
    return;
  }

  let result;
  switch (method) {
    case 'add':
      result = x + y;
      break;
    case 'subtract':
      result = x - y;
      break;
    case 'multiply':
      result = x * y;
      break;
    case 'divide':
      if (y === 0) {
        res.end('Error: cannot divide by zero');
        return;
      }
      result = x / y;
      break;
    default:
      res.end(`Error: invalid method "${method}"`);
      return;
  }

  res.end(`${x} ${method} ${y} = ${result}`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});