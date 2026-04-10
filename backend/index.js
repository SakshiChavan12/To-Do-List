// import express from 'express';
// import todoRoutes from "./routes/todo.route.js"
// import { connectDB } from './config/db.js';
// import dotenv from "dotenv";
// import path from "path";
// const PORT =process.env.PORT || 5000;
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// dotenv.config();

// const app = express();

// app.use(express.json());
// //app.use(cors());

// app.use("/api/todos", todoRoutes);

// // if(process.env.NODE_ENV === "production"){
// //     app.use(express.static(path.join(__dirname,"../frontend/dist")));

// //     app.use((req, res) => {
// //         res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
// //     });
// // }

// app.listen(PORT, () => {
//     connectDB();
//    console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
// app.use(cors());

// Routes
app.use("/api/todos", todoRoutes);

// ✅ Serve frontend in production (IMPORTANT)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.use((req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../frontend", "dist", "index.html")
        );
    });
}

// Start server
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
});
