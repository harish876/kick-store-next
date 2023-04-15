import connectDB from "@/database/connect";
import ShoeCollection from "@/database/model/shoeSchema";
import { isEmpty, max, min } from "lodash";

export default async function handler(req, res) {
  connectDB().catch((error) =>
    res.json({ error: `Connection Failed: ${error}` })
  );

  if (req.method === "POST") {
    try {
      let { searchFilter: filter = {}, page = 1, limit = 100 } = req.body;
      filter = formatQuery(filter);
      const total = await ShoeCollection.count(filter);
      const data = await ShoeCollection.find(filter)
        .skip((page - 1) * limit)
        .limit(limit);
      return res.status(200).json({
        status: true,
        docs: data,
        total,
        error: null,
      });
    } catch (error) {
      console.log(error);
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

const formatQuery = (filter) => {
  let updatedFilter = {};
  if (isEmpty(filter)) return filter;

  for (const [key, value] of Object.entries(filter)) {
    if (key === "price") {
      let initialPrice = min(value.map(({ initialPrice }) => initialPrice));
      let finalPrice = max(value.map(({ finalPrice }) => finalPrice));
      updatedFilter[key] = {
        $gte: initialPrice,
        $lte: finalPrice,
      };
    } else {
      updatedFilter[key] = { $in: value };
    }
  }
  return updatedFilter;
};
