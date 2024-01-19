import postgres from "pg";

const connection = new postgres.Pool({
  user: "qnkpdaxc",
  host: "babar.db.elephantsql.com",
  database: "qnkpdaxc",
  password: "0HaYmhrUKJAgckzluBX-DVlCoKIUr93V",
  port: "5432",
});

try {
  connection.connect();
  console.log("connection - database on");
} catch (error) {
  console.log(error.message);
}

export default connection;
