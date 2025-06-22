const express = require("express");
const cors = require("cors");
const { Document, Packer, Paragraph, TextRun } = require("docx");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-docx", async (req, res) => {
  const { title, content } = req.body;

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun({ text: title, bold: true, size: 28 })],
          }),
          new Paragraph({ text: content }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);

  res.setHeader("Content-Disposition", "attachment; filename=generated.docx");
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  res.send(buffer);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
