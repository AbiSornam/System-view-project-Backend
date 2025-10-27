const http = require('http');
const os = require('os');
const process = require('process');
const url = require('url');

// Convert bytes to human readable
function formatBytes(bytes, decimal = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat(bytes / Math.pow(k, i)).toFixed(decimal) + ' ' + sizes[i];
}

// Convert seconds to human readable
function formatTime(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remSeconds = Math.floor(seconds % 60);
    return `${days}d ${hours}h ${minutes}m ${remSeconds}s`;
}

// CPU Info
const getCpuInfo = () => {
    const cpus = os.cpus();
    return {
        model: cpus[0].model,
        cores: cpus.length,
        architecture: os.arch(),
        loadavg: os.loadavg()
    };
};

// Memory Info
const getMemoryInfo = () => {
    return {
        total: formatBytes(os.totalmem()),
        free: formatBytes(os.freemem()),
        usage: ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2) + '%'
    };
};

// User Info
const getUserInfo = () => {
    return os.userInfo();
};

// Network Info
const getNetworkInfo = () => {
    return os.networkInterfaces();
};

// Process Info
const getProcessInfo = () => {
    return {
        pid: process.pid,
        title: process.title,
        nodeVersion: process.version,
        uptime: formatTime(process.uptime()),
        memoryUsage: {
            rss: formatBytes(process.memoryUsage().rss),
            heapTotal: formatBytes(process.memoryUsage().heapTotal),
            heapUsed: formatBytes(process.memoryUsage().heapUsed),
        },
        env: {
            NODE_ENV: process.env.NODE_ENV || "Not Set"
        }
    };
};

// Create server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    res.setHeader('Content-Type', 'application/json');

    if (parsedUrl.pathname === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({
            name: "System Info API",
            description: "Welcome to the system info API",
            routes: ["/cpu", "/memory", "/user", "/process", "/network"]
        }));
    } else if (parsedUrl.pathname === '/cpu') {
        res.end(JSON.stringify(getCpuInfo(), null, 2));
    } else if (parsedUrl.pathname === '/memory') {
        res.end(JSON.stringify(getMemoryInfo(), null, 2));
    } else if (parsedUrl.pathname === '/user') {
        res.end(JSON.stringify(getUserInfo(), null, 2));
    } else if (parsedUrl.pathname === '/process') {
        res.end(JSON.stringify(getProcessInfo(), null, 2));
    } else if (parsedUrl.pathname === '/network') {
        res.end(JSON.stringify(getNetworkInfo(), null, 2));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
