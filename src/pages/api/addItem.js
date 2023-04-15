import connectDB from "@/database/connect";
import ShoeCollection from "@/database/model/shoeSchema";
import { isEmpty, get } from "lodash";

export default async function handler(req, res) {
  connectDB().catch((error) =>
    res.json({ error: `Connection Failed: ${error}` })
  );

  if (req.method === "POST") {
    if (isEmpty(req.body)) {
      return res.status(404).json({ error: "No request data" });
    }
    const data = req.body;
    ShoeCollection.create(data, function (err, data) {
      if (err) {
        return res.status(404).json({ err });
      }
      return res.status(201).json({ status: true, data });
    });
  } else {
    return res.status(500).json({ message: "Not valid request" });
  }
}
