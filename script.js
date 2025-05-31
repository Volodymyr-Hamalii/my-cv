(function () {
  console.log("Script is loaded.");

  // Ph
  var part1 = "+380";
  var part2 = "66";
  var part3 = "196";
  var part4 = 2510 + 1;
  var phoneDisplay = part1 + " " + part2 + " " + part3 + " " + part4;
  var telLink = "tel:" + (part1 + part2 + part3 + part4);
  var contactLink = document.getElementById("contact-phone");
  contactLink.href = telLink;
  contactLink.textContent = phoneDisplay;

  // Em
  var part5 = "hamalii.";
  var part6 = "volodymyr@gmail.com";
  var mailDisplay = part5 + part6;
  var mail = "mailto:" + mailDisplay;
  var mailLink = document.getElementById("contact-mail");
  mailLink.href = mail;
  mailLink.textContent = mailDisplay;
})();

// PDF Export functionality
function exportToPDF() {
  const element = document.querySelector("main");
  const btn = document.getElementById("introduction-export-pdf-btn");
  btn.style.display = "none"; // Hide the button

  const rect = element.getBoundingClientRect();
  // Convert px to inches (1in = 96px)
  const pxToIn = (px) => px / 96;
  const widthIn = pxToIn(rect.width);
  const heightIn = pxToIn(rect.height);

  const opt = {
    margin: 0,
    filename: "Volodymyr_Hamalii_CV.pdf",
    image: { type: "jpeg", quality: 0.5 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
    },
    jsPDF: {
      unit: "in",
      format: [widthIn, heightIn],
      orientation: "portrait",
    },
    pagebreak: { mode: ["avoid-all"] },
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      btn.style.display = ""; // Show the button again
    })
    .catch(() => {
      btn.style.display = ""; // Show the button again even if there's an error
    });
}
