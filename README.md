```
# 🖥️ System Info API

A lightweight ⚡ Node.js HTTP server that provides real-time system information — CPU details, memory usage, user info, process stats, and network interfaces — all in clean JSON format.

## ✨ Features

- 🧠 Displays CPU and architecture details  
- 💾 Tracks memory usage in real-time  
- 👤 Provides current user information  
- ⚙️ Exposes process details like PID, uptime, and Node version  
- 🌐 Shows network interfaces and IP details  
- 🧱 Built entirely on core Node.js modules — no dependencies!

## 📁 Project Structure

```
.
├── server.js
└── README.md
```

## ⚙️ Installation & Setup

1. **Clone this repository**
   ```
   git clone https://github.com/your-username/system-info-api.git
   cd system-info-api
   ```

2. **Install dependencies**
   No external dependencies needed! 🎉  
   Just make sure Node.js is installed on your system.

3. **Start the server**
   ```
   node server.js
   ```

4. **Test in browser or terminal**
   ```
   http://localhost:5000
   ```

## 🚀 API Endpoints

| Endpoint | Description |
|-----------|--------------|
| `/` | 📚 API overview and available routes |
| `/cpu` | 🧠 Shows CPU model, cores, and system load average |
| `/memory` | 💾 Displays total, free, and used memory |
| `/user` | 👤 Fetches OS user information |
| `/process` | ⚙️ Provides process-related data |
| `/network` | 🌐 Lists network interfaces and IP addresses |

## 🧩 Example Response

**GET** `/memory`
```
{
  "total": "15.92 GB",
  "free": "6.34 GB",
  "usage": "60.17%"
}
```

## 🔧 Configuration

The server runs on port **5000** by default.  
To change it, modify the line in your code:

```
const PORT = 5000;
```

You can also make it dynamic:
```
const PORT = process.env.PORT || 8000;
```

## 👨‍💻 Author

Developed by [Abisornam.M] 🧑‍💻  
A handy tool to get live system stats via simple web APIs.

## 📜 License

Released under the **MIT License**.  
Feel free to use, modify, and share. 🤝
```
