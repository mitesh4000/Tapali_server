import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://rango:wUDPbtLUp7ZDQZQr@cluster0.2bxued0.mongodb.net/Tapali?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(connectionString, { autoIndex: true })
  .then(() => console.log("Connected to database."))
  .catch((err) => console.error("Error connecting to database:", err));
