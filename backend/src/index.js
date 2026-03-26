import app from "./app";
import dotenv from "dotenv";
import connectDB from "./db/index";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 8000;

connectDB()
  .then(()=>{
    app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
