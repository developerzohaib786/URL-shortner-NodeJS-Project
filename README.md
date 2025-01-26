# URL shortner in NodeJS

A simple URL shortener service built using **Node.js** and **Express.js**. This project allows users to generate short URLs for long links and track the number of clicks on each shortened URL.

---

## Features

- Generate short URLs for any given long URL.
- Track the number of clicks for each shortened URL.
- Simple and clean user interface for URL generation.
- Persistent storage for URLs using JSON files.
- Redirection to original URLs when short links are accessed.

---

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/developerzohaib786/URL-shortner-NodeJS-Project.git
   cd URL-shortner-NodeJS-Project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:8001
   ```

---

## Usage

1. Enter a valid URL in the input field.
2. Click the "Generate" button to create a shortened URL.
3. The shortened URL will appear in the table below, along with the original URL and the click count.
4. Access the shortened URL to be redirected to the original link.

---

## Project Structure

```plaintext
URL-shortner-NodeJS-Project/
├── public/          # Static assets (HTML, CSS, JS)
├── routes/          # Route definitions for URL handling
├── data/            # Persistent storage (JSON files)
├── app.js           # Main application file
├── package.json     # Project configuration and dependencies
└── README.md        # Project documentation
```

---

## Future Enhancements

- Add MongoDB support for URL storage and scalability.
- Enable custom short URL generation.
- Implement user authentication for personal URL tracking.
- Provide analytics dashboard for detailed click tracking.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

---

## Author

[Zohaib](https://github.com/developerzohaib786)

---

## Acknowledgments

Special thanks to the Node.js and Express.js communities for their excellent documentation and support.


