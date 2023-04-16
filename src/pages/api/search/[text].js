import connectDB from "@/database/connect";
import ShoeCollection from "@/database/model/shoeSchema";

export default async function handler(req, res) {
  connectDB().catch((error) =>
    res.json({ error: `Connection Failed: ${error}` })
  );

  if (req.method === "GET") {
    try {
      const { text } = req.query;
      const data = await ShoeCollection.aggregate([
        {
          $search: {
            index: "searchName",
            autocomplete: {
              query: `${text}`,
              path: "name",
            },
          },
        },
        {
          $limit: 5,
        },
        {
          $project: {
            _id: 1,
            name: 2,
            price: 3,
          },
        },
      ]);
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } else {
    return res
      .status(500)
      .json({ status: false, data: null, error: "Not valid request" });
  }
}
