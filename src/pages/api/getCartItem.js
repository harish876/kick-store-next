import connectDB from "@/database/connect";
import CartCollection from "@/database/model/cartSchema";
import { get } from "lodash";

export default async function handler(req, res) {
  connectDB().catch((error) =>
    res.json({ error: `Connection Failed: ${error}` })
  );

  if (req.method === "POST") {
    try {
      const { user } = req.body;
      const filter = {
        "user.email": get(user, "email", null),
        "user.name": get(user, "name", null),
      };
      const data = await CartCollection.find(filter);
      return res.status(200).json({ status: true, data, error: null });
    } catch (error) {
      return res.status(500).json({ status: false, data: null, error });
    }
  } else {
    return res
      .status(500)
      .json({ status: false, data: null, error: "Not valid request" });
  }
}
