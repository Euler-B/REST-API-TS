import "dotenv/config";
import { connect } from moongose;

async funtion dbconnect() = Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
} 

export default dbconnect;