import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/users", (req, res) => {
  console.log(req.body);

  res.json({
    message: "user created",
    user: req.body,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
