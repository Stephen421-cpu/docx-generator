const express = require("express");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/generate", async (req, res) => {
    const { title, name, content } = req.body;

    if (!title || !name || !content) {
        return res.status(400).json({ error: "Missing required fields." });
    }

    // Create document content
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                new Paragraph({
                    children: [new TextRun({ text: title, bold: true, size: 32 })],
                }),
                new Paragraph({
                    children: [new TextRun(`Name: ${name}`)],
                }),
                new Paragraph({
                    children: [new TextRun(content)],
                }),
            ],
        }],
    });

    const buffer = await Packer.toBuffer(doc);

    // Set headers for download
    res.setHeader("Content-Disposition", "attachment; filename=generated.docx");
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

    res.send(buffer);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
