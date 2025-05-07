import type { NextApiRequest, NextApiResponse } from "next";

const TELEGRAM_BOT_TOKEN = "5791335531:AAHjLacA9XBMcpzamPJiA_RzYQXvf0Liq5A";
const CHAT_ID = "312216358";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const { name, phone, carName, carModel, year, engine, vin, carParts, description, privacy } =
			req.body;

		const text = `Нове Замовлення:\nІм'я: ${name}\nТелефон: ${phone}\nМарка авто: ${carName}\nМодель авто: ${carModel}\nРік випуску авто: ${year}\nОб'єм двигуна: ${engine}\nVIN-код авто: ${vin}\nЗапчастина: ${carParts}\nКоментар: ${description}\nПрочитані правила сайту: ${
			privacy ? "Так" : "Ні"
		}`;

		const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

		const telegramRes = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text,
			}),
		});

		if (telegramRes.ok) {
			res.status(200).json({ success: true });
		} else {
			res.status(500).json({ success: false });
		}
	} else {
		res.status(405).end();
	}
}
