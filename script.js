document.getElementById("actForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const court = document.getElementById("court").value;
    const year = document.getElementById("year").value;
    const caseNum = document.getElementById("case").value;

    switch (court) {
        case "ВКС":
            court = vks;
            break;
        default:
            break;
    }
    // Example pattern – adjust this to match the actual system logic
    //https://www.vks.bg/talkuvatelni-dela-ostk/vks-ostk-tdelo-2020-1-reshenie.pdf
    const url = `https://www.${court}.bg/talkuvatelni-dela-ostk/${court}-ostk-tdelo-${year}-${caseNum}-reshenie.pd`;

    // Display and/or redirect
    const result = document.getElementById("result");
    result.innerHTML = `<a href="${url}" target="_blank">Open Judicial Act</a>`;
});
