import connectDB from "@/database/connect";
import ShoeCollection from "@/database/model/shoeSchema";

export default async function handler(req, res) {
  connectDB().catch((error) =>
    res.json({ error: `Connection Failed: ${error}` })
  );

  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const data = await ShoeCollection.findOne({ _id: id });
      return res.status(200).json({
        status: true,
        docs: [data],
        total: 1,
        error: null,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        docs: [],
        total: 0,
        error,
      });
    }
  } else {
    return res
      .status(500)
      .json({ status: false, data: null, error: "Not valid request" });
  }
}
