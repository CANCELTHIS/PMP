# Node.js & Express.js Development Notes

## Environment Variables

- Store sensitive information (API keys, passwords, etc.) in `.env` files.
- Install dotenv:
  ```bash
  npm install dotenv
  ```
- Example usage:
  ```javascript
  import dotenv from "dotenv";
  dotenv.config({
    path: "./.env", // default is project root
  });
  let myusername = process.env.myusername;
  console.log(myusername);
  console.log("PMP/index.js loaded");
  ```

## Professional Project Structure

```
public/               # Static files (images, CSS, JS)
src/
  controllers/        # Business logic for handling requests
  db/                 # Database connection and queries
  models/             # Data schema/structure for the database
  routes/             # API route definitions
  middlewares/        # Code executed between request and response
  utils/              # Reusable helpers/scripts
  validators/         # Input validation logic
```

- Git does not push empty folders — add a `.gitkeep` file to keep them.

## Other Key Concepts

- **Unopinionated:** No strict rules enforced for implementation (e.g., Express.js).
- **Install Specific Package Versions:**
  ```bash
  npm install express@4.4.3    # Specific version
  npm install express@latest   # Latest version
  ```
- **File Organization:**
  - `index.js` → Create server port & start listening.
  - `app.js` → Keep Express app setup, routes, and middleware.

## CORS (Cross-Origin Resource Sharing)

- Browsers block requests from different origins by default.
- CORS must be enabled to allow communication between different domains on the backend.
  **app.use(express.json());//backend can accept and parse json data.
  **app.use(express.urlencoded({ limit: "16kb" })); Parses json(raw text string) to js object incoming requests with URL-encoded data (like HTML form submissions).

**app.use(express.static("public"));
Purpose: Serves static files (HTML, CSS, JS, images, etc.) from the "public" folder without creating routes for them.(example if you have public/logo.png it can be accessed via http://localhost:8000/logo.png)
**extended: false → Uses Node’s built-in querystring module to parse URL-encoded form data.

Limitation: Can only parse simple key=value pairs.

Nested objects or arrays won’t work well.

extended: true → Uses the qs library.

## Advantage: Can parse nested objects and arrays from form data.

app.use(
cors({
origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
//["http://localhost:5173", "https://myapp.com"]
credentials: true,//allows cookies authorization headers(session cookies or tokens) and TLS clientcertificates to besent alsong with requests.via fetch api or any other method.

    methods: ["GET", "PUT", "PATCH", "OPTIONS"],//which http methods are allowd from the frontend
    allowedHeaders: ["Authorization", "Content-Type"],
    //Content-Type allows you to send json,form data...
    //Authorization allows you to send tokens(ex JWT)

}),
);

standardize the response and api errors
client ->
server->send response or error(node have error class by default).they both have

status code
data
message
