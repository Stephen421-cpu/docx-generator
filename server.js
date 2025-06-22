const { title, content, MaterialMatters, CaseTitle, CaseNature, CaseStatus, FinancialImpact, LegalDevelopments, NewLicenses, RisksAndMitigations, ContractChanges, IPActivity, EthicsNotices } = req.body;

const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({ children: [new TextRun({ text: title, bold: true, size: 28 })] }),
        new Paragraph({ text: content }),
        new Paragraph({ text: "" }),  // blank line
        new Paragraph({ text: "Material Matters: " + MaterialMatters }),
        new Paragraph({ text: "Case Title: " + CaseTitle }),
        new Paragraph({ text: "Nature of Proceedings: " + CaseNature }),
        new Paragraph({ text: "Status: " + CaseStatus }),
        new Paragraph({ text: "Financial Impact: " + FinancialImpact }),
        new Paragraph({ text: "Legal Developments: " + LegalDevelopments }),
        new Paragraph({ text: "New Licenses: " + NewLicenses }),
        new Paragraph({ text: "Risks & Mitigations: " + RisksAndMitigations }),
        new Paragraph({ text: "Contract Changes: " + ContractChanges }),
        new Paragraph({ text: "IP Activity: " + IPActivity }),
        new Paragraph({ text: "Ethics Notices: " + EthicsNotices }),
      ],
    },
  ],
});
