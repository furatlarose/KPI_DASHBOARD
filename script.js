fetch("KPIs Alignment.xlsx")
  .then(response => response.arrayBuffer())
  .then(data => {
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const excelData = XLSX.utils.sheet_to_json(sheet);
    console.log(excelData);
  });