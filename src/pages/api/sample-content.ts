// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  content: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    content:
      'Doanh nghiệp đứng đầu thị phần thép xây dựng ghi nhận lợi nhuận ròng quý II hơn 1.400 tỷ, giảm hơn 60% so cùng kỳ nhưng gấp gần 4 lần quý đầu năm nay. Tập đoàn Hòa Phát (HPG), doanh nghiệp đứng đầu thị phần thép xây dựng, vẫn ghi nhận kết quả kinh doanh giảm mạnh so với cùng kỳ, chủ yếu do khó khăn của thị trường bất động sản, tốc độ giải ngân vốn đầu tư công chậm khiến nhu cầu thu hẹp. Tuy nhiên, lợi nhuận "vua thép" đã bắt đầu tăng trở lại sau giai đoạn khó khăn nhất vào quý cuối năm trước. Theo báo cáo tài chính hợp nhất quý II, doanh thu Hòa Phát đạt gần 30.000 tỷ đồng, giảm hơn 20% so với cùng kỳ năm trước. Lợi nhuận sau thuế ba tháng gần nhất giảm 64%, chỉ đạt 1.448 tỷ đồng. Tuy nhiên, con số này đã gấp 3,8 lần so với quý I năm nay.'
  });
}
