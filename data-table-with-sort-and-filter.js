const data = [
  { id: 1, name: "Satyam Dua", contact: "7985334941" },
  { id: 2, name: "Aditya Dua", contact: "9454747401" },
  { id: 3, name: "Ishan Dua", contact: "7318107428" },
  { id: 4, name: "Ritu Dua", contact: "8009362167" },
  { id: 5, name: "Dev Raj Dua", contact: "9616626377" },
];

const tableBody = document.getElementById("table-body");
const input = document.getElementById("filter-input");
const headerRow = document.getElementById("header-row");

const idxs = {
  0: "id",
  1: "name",
  2: "contact",
};

function renderTable(tableData = data) {
  if (tableBody) {
    tableBody.innerHTML = "";
    tableData.forEach((rowData) => {
      tableBody.innerHTML += `<tr>
                                <td>${rowData.id}</td>
                                <td>${rowData.name}</td>
                                <td>${rowData.contact}</td>
                              </tr>`;
    });
  }
}

renderTable();

const filterTableData = debounce(function () {
  console.log("called");

  const inputVal = input.value.toLowerCase();
  const filteredData = data.filter((rowData) => {
    return (
      rowData.id.toString().includes(inputVal) ||
      rowData.name.toLowerCase().includes(inputVal) ||
      rowData.contact.includes(inputVal)
    );
  });

  renderTable(filteredData);
}, 200);

function sortTableData(e) {
  const columnIdx = e.target.id;

  const sortedData = data.sort((a, b) => {
    if (a[idxs[columnIdx]] < b[idxs[columnIdx]]) return -1;
    else if (a[idxs[columnIdx]] > b[idxs[columnIdx]]) return 1;
    else return 0;
  });

  renderTable(sortedData);
}

headerRow.addEventListener("click", sortTableData);
