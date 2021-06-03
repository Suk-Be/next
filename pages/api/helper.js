// req = HTTP incoming message, res = HTTP server response
export default function handler (req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    if (res.status(200)) {
      return res.status(200).json(
        {
          text: 'Hello, i am here'
        }
      )
    }
    if (res.status(401)) {
      return res.status(401).json(
        {
          text: 'Unauthorized (RFC 7235)'
        }
      )
    }
    if (res.status(402)) {
      return res.status(402).json(
        {
          text: 'Payment Required'
        }
      )
    }
    if (res.status(403)) {
      return res.status(403).json(
        {
          text: 'Forbidden'
        }
      )
    }
    if (res.status(404)) {
      return res.status(404).json(
        {
          text: 'Not found'
        }
      )
    }
  }
}