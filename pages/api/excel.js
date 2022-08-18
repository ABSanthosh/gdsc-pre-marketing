const SPREADSHEET_ID = "1c2BJa2Lg0NnQmgAGzHNhP79R0UOMcZ_iHFvTJA-caNQ";

export default function handler(req, res) {
  //   res.status(200).json({ name: "John Doe" });
  console.log(JSON.stringify(req.body));
  fetch("https://api.sheetson.com/v2/sheets/Sheet1", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer Alt4tSY17pw3WgRTP1icJIIo0Msz1hLN4ZyCAW3exlLdi7A-0BXJ0yerdXA",
      "X-Spreadsheet-Id": SPREADSHEET_ID,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: req.body.name,
      netid: req.body.email,
      year: req.body.majorAndYear,
      place: req.body.location,
      answer: req.body.answer,
    }),
  })
    .then((r) => r.json())
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json(error));
}
