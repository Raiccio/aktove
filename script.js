document.getElementById("actForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const court = document.getElementById("court").value;
    const year = document.getElementById("year").value;
    const caseNum = document.getElementById("case").value;

    // Example pattern – adjust this to match the actual system logic
    const url = `https://examplecourt.bg/acts/view?court=${court}&year=${year}&case=${caseNum}`;

    // Display and/or redirect
    const result = document.getElementById("result");
    result.innerHTML = `<a href="${url}" target="_blank">Open Judicial Act</a>`;
});
