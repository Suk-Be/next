---
title: 'API Routes: Creating API Routes'
date: '2020-01-12'
---

### Creating API Routes

API Routes let you create an API endpoint inside a Next.js app.

You can do so by creating a function inside the **pages/api** directory that has the following format:

```
// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  // ...
}
// Learn more about the request handler above in the API Routes documentation.
```

They can be deployed as Serverless Functions (also known as Lambdas).

### Creating a simple API endpoint

Let’s try it out. Create a file called **hello.js** in **pages/api** with the following code:

```
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}
```

Try accessing it at http://localhost:3000/api/hello. You should see **{"text":"Hello"}**. Note that:

- req is an instance of http.IncomingMessage, plus some pre-built middlewares you can see here.
- res is an instance of http.ServerResponse, plus some helper functions you can see here.

That’s it! Before we wrap up this lesson, let’s talk about some tips for using API Routes on the next page.