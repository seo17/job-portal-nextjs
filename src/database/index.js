import mongoose from "mongoose";

async function connectToDB() {
  const connectionUrl = process.env.CONNECTION_URL;
  await mongoose
    .connect(connectionUrl)
    .then(() => console.log("Success"))
    .catch((error) => console.log(error));
}

export default connectToDB;
