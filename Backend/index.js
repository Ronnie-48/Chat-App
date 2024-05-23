const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name:username,},
        { headers: {"Private-Key": "dc0b6d77-0503-488e-b0a0-a62129afe8bb"}},
        
    )

    return res.status(r.status).json(r.data);
  } catch (error) {
//     return res.status(e.response.status).json(e.response.data);
  }


});

app.listen(3001);