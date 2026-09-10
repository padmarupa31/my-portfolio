import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const outDir = path.join(process.cwd(), 'public', 'certificates');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Generate SVG for Alfrin Technologies (Certificate 3)
const generateAlfrinSvg = () => {
  return `
  <svg width="1600" height="1131" viewBox="0 0 1600 1131" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4a1506" />
        <stop offset="25%" stop-color="#9a3412" />
        <stop offset="50%" stop-color="#b45309" />
        <stop offset="75%" stop-color="#1e3a8a" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
    </defs>

    <!-- White background -->
    <rect width="1600" height="1131" fill="#ffffff" />

    <!-- Outer thick ornate gradient border -->
    <rect x="36" y="36" width="1528" height="1059" fill="none" stroke="url(#borderGrad)" stroke-width="20" rx="4" />
    <!-- Inner thin border line -->
    <rect x="56" y="56" width="1488" height="1019" fill="none" stroke="#b45309" stroke-width="2" />

    <!-- Watermark Logo in center background -->
    <g opacity="0.06" transform="translate(800, 565) scale(2.8)">
      <circle cx="0" cy="0" r="100" fill="#000000" />
      <circle cx="0" cy="0" r="40" fill="#ffffff" />
    </g>

    <!-- Alfrin Header Logo & Brand -->
    <g transform="translate(800, 160)" text-anchor="middle">
      <!-- Pinwheel Icon -->
      <g transform="translate(-170, -35) scale(0.65)">
        <circle cx="0" cy="0" r="50" fill="none" />
        <path d="M 0 0 C 25 -40, 50 -10, 35 25 Z" fill="#b91c1c" />
        <path d="M 0 0 C 40 25, 10 50, -25 35 Z" fill="#0284c7" />
        <path d="M 0 0 C -25 40, -50 10, -35 -25 Z" fill="#1e293b" />
        <path d="M 0 0 C -40 -25, -10 -50, 25 -35 Z" fill="#334155" />
        <circle cx="0" cy="0" r="10" fill="#ffffff" />
      </g>
      <text x="30" y="-10" font-family="'Arial Black', 'Helvetica Neue', Arial, sans-serif" font-size="54" font-weight="900" letter-spacing="4" fill="#0f172a">ALFRIN</text>
      <text x="30" y="24" font-family="'Arial Black', 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="900" letter-spacing="8" fill="#1e293b">TECHNOLOGIES</text>
      <text x="30" y="52" font-family="'Georgia', 'Times New Roman', serif" font-style="italic" font-size="20" fill="#b45309" font-weight="bold">(Driving Innovation. Powering Success)</text>
    </g>

    <!-- Certificate Title -->
    <text x="800" y="320" font-family="'Georgia', 'Times New Roman', serif" font-size="64" font-weight="bold" fill="#0f172a" text-anchor="middle" letter-spacing="1">Certificate of Completion</text>

    <text x="800" y="390" font-family="'Georgia', 'Times New Roman', serif" font-style="italic" font-size="24" fill="#334155" text-anchor="middle">This is to certify that</text>

    <!-- Recipient Name -->
    <text x="800" y="475" font-family="'Times New Roman', Georgia, serif" font-size="34" font-weight="bold" letter-spacing="4" fill="#0f172a" text-anchor="middle">D. PADMAROOPA</text>
    <line x1="480" y1="490" x2="1120" y2="490" stroke="#334155" stroke-width="1.5" stroke-dasharray="2,2" />

    <!-- Certification Body -->
    <g font-family="'Georgia', 'Times New Roman', serif" font-size="23" fill="#1e293b" text-anchor="middle">
      <text x="800" y="545">has successfully completed the <tspan font-family="'Courier New', monospace" font-weight="bold" letter-spacing="2">.....INTERNSHIP.....</tspan> conducted by</text>
      <text x="800" y="595" font-style="italic">Alfrin Technologies<tspan font-style="normal">, held from </tspan><tspan font-family="'Courier New', monospace" font-weight="bold">..15.06.2026.. </tspan><tspan font-style="normal">to </tspan><tspan font-family="'Courier New', monospace" font-weight="bold">..01.07.2026..</tspan></text>
      <text x="800" y="650">This program included practical sessions, live projects, and assessments covering the core concepts of</text>
      <text x="800" y="705" font-family="'Courier New', monospace" font-size="25" font-weight="bold" letter-spacing="3">.....FULL STACK.....</text>
    </g>

    <!-- Metadata Details -->
    <g font-family="'Georgia', 'Times New Roman', serif" font-size="20" fill="#1e293b">
      <text x="140" y="785"><tspan font-style="italic">Duration: </tspan><tspan font-weight="bold" font-family="'Courier New', monospace">15-DAYS</tspan></text>
      <text x="560" y="785"><tspan font-style="italic">Certificate ID: </tspan><tspan font-weight="bold" font-family="'Courier New', monospace">IN-18-2026</tspan></text>
      <text x="1160" y="785"><tspan font-style="italic">Mode: </tspan><tspan font-family="'Courier New', monospace" text-decoration="line-through">Online</tspan> / <tspan font-weight="bold">Offline ✓</tspan></text>
      <text x="640" y="835"><tspan font-style="italic">Date of Issue: </tspan><tspan font-weight="bold" font-family="'Courier New', monospace">..01.07.2026..</tspan></text>
    </g>

    <!-- Rubber Stamp and Signature Section -->
    <g transform="translate(1000, 890)">
      <!-- Circular Stamp -->
      <g transform="translate(0, 30)">
        <circle cx="0" cy="0" r="65" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="8,4" />
        <circle cx="0" cy="0" r="58" fill="none" stroke="#334155" stroke-width="1.5" />
        <circle cx="0" cy="0" r="42" fill="none" stroke="#334155" stroke-width="1" />
        <text x="0" y="-44" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="#334155" text-anchor="middle" letter-spacing="1">★ ALFRIN TECHNOLOGIES ★</text>
        <text x="0" y="50" font-family="'Arial Black', sans-serif" font-size="9" font-weight="900" fill="#334155" text-anchor="middle" letter-spacing="2">PONDICHERRY</text>
        <text x="0" y="6" font-family="'Arial Black', sans-serif" font-size="14" font-weight="900" fill="#334155" text-anchor="middle">SEAL</text>
      </g>
    </g>

    <!-- Signatory -->
    <g transform="translate(1250, 930)" text-anchor="center">
      <!-- Calligraphic Signature Stroke -->
      <path d="M 0 -35 Q 25 -65, 45 -25 T 90 -45 T 130 -15 T 180 -30" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round" />
      <path d="M 20 -20 Q 80 10, 160 -10" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" />
      <line x1="-20" y1="0" x2="200" y2="0" stroke="#334155" stroke-width="1.5" />
      <text x="90" y="28" font-family="'Georgia', serif" font-size="19" font-weight="bold" fill="#0f172a" text-anchor="middle">Authorized Signatory</text>
    </g>

    <!-- Left Footer Address & Contacts -->
    <g transform="translate(100, 970)" font-family="'Arial', sans-serif" font-size="14" fill="#475569">
      <text x="0" y="0" font-weight="bold" fill="#1e293b" font-size="16">Alfrin Technologies</text>
      <text x="0" y="24">11-B, St. Therese Street, Mission Street, Pondicherry - 605 001</text>
      <text x="0" y="46">Contact: +91 8778922558  |  alfrin.in@gmail.com  |  https://alfrin.in</text>
    </g>
  </svg>
  `;
};

// 2. Generate SVG for Udemy Certificates (Certificates 4, 5, 6, 7)
interface UdemyData {
  certNo: string;
  refNo: string;
  courseTitle: string;
  instructors: string;
  recipient: string;
  date: string;
  length: string;
}

const escapeXml = (str: string) =>
  str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const generateUdemySvg = (data: UdemyData) => {
  const safeTitle = escapeXml(data.courseTitle);
  const safeInstructors = escapeXml(data.instructors);
  const safeRecipient = escapeXml(data.recipient);
  const safeCertNo = escapeXml(data.certNo);
  const safeRefNo = escapeXml(data.refNo);
  const safeDate = escapeXml(data.date);
  const safeLength = escapeXml(data.length);

  return `
  <svg width="1600" height="1131" viewBox="0 0 1600 1131" xmlns="http://www.w3.org/2000/svg">
    <!-- Pure Clean White Backdrop -->
    <rect width="1600" height="1131" fill="#ffffff" />

    <!-- Top Left: Udemy Bold Signature Logo -->
    <g transform="translate(100, 120)">
      <path d="M 0 32 C 0 18, 12 6, 26 6 C 40 6, 52 18, 52 32 L 52 70 L 40 70 L 40 32 C 40 24, 34 18, 26 18 C 18 18, 12 24, 12 32 L 12 70 L 0 70 Z" fill="#a435f0" />
      <path d="M 26 0 L 16 16 L 36 16 Z" fill="#a435f0" />
      <text x="65" y="68" font-family="'Helvetica Neue', Arial, sans-serif" font-size="70" font-weight="900" letter-spacing="-2" fill="#1c1d1f">udemy</text>
    </g>

    <!-- Top Right: Reference & Verification Block -->
    <g transform="translate(1500, 95)" text-anchor="end" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#6a6f73">
      <text x="0" y="0">Certificate no: ${safeCertNo}</text>
      <text x="0" y="24">Certificate url: ude.my/${safeCertNo}</text>
      <text x="0" y="48">Reference Number: ${safeRefNo}</text>
    </g>

    <!-- Certificate of Completion Heading -->
    <text x="100" y="300" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="800" letter-spacing="3" fill="#6a6f73">CERTIFICATE OF COMPLETION</text>

    <!-- Course Title (Wrap support) -->
    <g transform="translate(100, 380)">
      <text x="0" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="64" font-weight="900" fill="#1c1d1f" letter-spacing="-1">
        ${safeTitle.length > 38 ? `<tspan x="0" dy="0">${safeTitle.slice(0, 35)}...</tspan><tspan x="0" dy="80">${safeTitle.slice(35)}</tspan>` : `<tspan x="0" dy="0">${safeTitle}</tspan>`}
      </text>
    </g>

    <!-- Instructor -->
    <g transform="translate(100, 580)">
      <text x="0" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" fill="#1c1d1f">
        <tspan fill="#6a6f73">Instructors </tspan><tspan font-weight="bold">${safeInstructors}</tspan>
      </text>
    </g>

    <!-- Recipient Name -->
    <g transform="translate(100, 840)">
      <text x="0" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="66" font-weight="900" fill="#1c1d1f" letter-spacing="-1">${safeRecipient}</text>
    </g>

    <!-- Date & Length Info -->
    <g transform="translate(100, 930)" font-family="'Helvetica Neue', Arial, sans-serif" font-size="20" fill="#1c1d1f">
      <text x="0" y="0"><tspan font-weight="bold">Date </tspan><tspan>${safeDate}</tspan></text>
      <text x="0" y="36"><tspan font-weight="bold">Length </tspan><tspan>${safeLength}</tspan></text>
    </g>
  </svg>
  `;
};

// 3. Generate PDF 1: Aquila Innovations (Internship Certificate)
async function generateAquilaPdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 portrait in points (210 x 297 mm)
  const { width, height } = page.getSize();

  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontHelveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontTimes = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontTimesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontTimesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  // Left ornamental chevron column
  const orange = rgb(0.95, 0.55, 0.1);
  const darkSlate = rgb(0.12, 0.16, 0.22);
  const textGray = rgb(0.2, 0.25, 0.3);

  for (let y = 60; y < height - 60; y += 38) {
    page.drawText('>>>', { x: 22, y, size: 20, font: fontHelveticaBold, color: orange });
  }

  // Header Logo & Company
  page.drawText('Aquila Innovations', {
    x: 170,
    y: height - 85,
    size: 32,
    font: fontHelveticaBold,
    color: rgb(0.08, 0.25, 0.45),
  });

  // Certificate Sub-title
  page.drawText('Internship Completion Certificate', {
    x: width / 2 - 120,
    y: height - 130,
    size: 15,
    font: fontHelveticaBold,
    color: darkSlate,
  });

  // Paragraph 1
  const p1 = 'This is to certify that Ms. D. Padmaroopa has successfully completed a 30-Day Intensive Internship Program at Aquila Innovations from 14 June 2025 to 15 July 2025.';
  page.drawText(p1.slice(0, 68), { x: 75, y: height - 180, size: 11, font: fontTimes, color: textGray });
  page.drawText(p1.slice(68), { x: 75, y: height - 198, size: 11, font: fontTimes, color: textGray });

  // Paragraph 2
  const p2 = 'During the internship, she gained practical exposure to Python Programming and actively participated in learning and applying the following:';
  page.drawText(p2.slice(0, 72), { x: 75, y: height - 232, size: 11, font: fontTimes, color: textGray });
  page.drawText(p2.slice(72), { x: 75, y: height - 250, size: 11, font: fontTimes, color: textGray });

  // Bullets
  page.drawText('1. Python Programming:', { x: 90, y: height - 280, size: 11, font: fontTimesBold, color: darkSlate });
  page.drawText('Learned Python basics, functions, OOP, file handling, and basic', { x: 230, y: height - 280, size: 11, font: fontTimes, color: textGray });
  page.drawText('programming concepts.', { x: 105, y: height - 296, size: 11, font: fontTimes, color: textGray });

  page.drawText('2. Practical Python:', { x: 90, y: height - 325, size: 11, font: fontTimesBold, color: darkSlate });
  page.drawText('Applied Python knowledge through programming exercises,', { x: 205, y: height - 325, size: 11, font: fontTimes, color: textGray });
  page.drawText('problem-solving activities, and practical assignments.', { x: 105, y: height - 341, size: 11, font: fontTimes, color: textGray });

  page.drawText('3. Problem Solving:', { x: 90, y: height - 370, size: 11, font: fontTimesBold, color: darkSlate });
  page.drawText('Developed logical thinking and problem-solving skills by creating and', { x: 205, y: height - 370, size: 11, font: fontTimes, color: textGray });
  page.drawText('practicing Python programs.', { x: 105, y: height - 386, size: 11, font: fontTimes, color: textGray });

  // Paragraph 3
  const p3 = 'Throughout the internship, Ms. D. Padmaroopa demonstrated enthusiasm for learning, dedication, discipline, and a positive attitude toward developing her programming skills. She showed good problem-solving ability and sincere interest in applying her knowledge through practical exercises.';
  page.drawText(p3.slice(0, 78), { x: 75, y: height - 425, size: 10.5, font: fontTimes, color: textGray });
  page.drawText(p3.slice(78, 156), { x: 75, y: height - 442, size: 10.5, font: fontTimes, color: textGray });
  page.drawText(p3.slice(156), { x: 75, y: height - 459, size: 10.5, font: fontTimes, color: textGray });

  // Paragraph 4
  const p4 = 'We appreciate her sincere efforts and participation during the internship and wish her continued success in her academic pursuits and future professional endeavors.';
  page.drawText(p4.slice(0, 76), { x: 75, y: height - 495, size: 10.5, font: fontTimes, color: textGray });
  page.drawText(p4.slice(76), { x: 75, y: height - 512, size: 10.5, font: fontTimes, color: textGray });

  // Signature Block
  page.drawText('Best Regards,', { x: 75, y: height - 560, size: 11, font: fontTimes, color: textGray });
  page.drawText('For Aquila Innovations,', { x: 75, y: height - 576, size: 11, font: fontTimesBold, color: darkSlate });

  // Signature representation
  page.drawText('Aswin Sadhasivam', { x: 75, y: height - 620, size: 14, font: fontTimesItalic, color: rgb(0.1, 0.2, 0.4) });
  page.drawLine({
    start: { x: 75, y: height - 625 },
    end: { x: 240, y: height - 625 },
    thickness: 1,
    color: rgb(0.5, 0.5, 0.5),
  });

  page.drawText('Aswin Sadhasivam (MCP,SOTY - Canada,CPPG - CANADA,Honors - U.K)', {
    x: 75,
    y: height - 642,
    size: 10,
    font: fontHelveticaBold,
    color: darkSlate,
  });
  page.drawText('CTO - Aquila Innovations', {
    x: 75,
    y: height - 658,
    size: 10,
    font: fontHelvetica,
    color: textGray,
  });

  // Footer Contacts and Addresses
  page.drawLine({
    start: { x: 75, y: 110 },
    end: { x: width - 50, y: 110 },
    thickness: 0.5,
    color: rgb(0.8, 0.8, 0.8),
  });

  page.drawText('Phone: 860 838 6852 | 860 822 6852', { x: 75, y: 92, size: 9, font: fontHelvetica, color: textGray });
  page.drawText('Email: mail@aquilainnovations.in', { x: 300, y: 92, size: 9, font: fontHelvetica, color: textGray });

  page.drawText('Registered Address:', { x: 75, y: 72, size: 8.5, font: fontHelveticaBold, color: orange });
  page.drawText('#6A, Market Street, Nellithope, Pondicherry - 605005', { x: 75, y: 58, size: 8.5, font: fontHelvetica, color: textGray });

  page.drawText('Operational Address:', { x: 300, y: 72, size: 8.5, font: fontHelveticaBold, color: orange });
  page.drawText('ATAL, PTU - Campus, Pondicherry - 605014', { x: 300, y: 58, size: 8.5, font: fontHelvetica, color: textGray });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(outDir, 'aquila_innovations_python_internship_certificate.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('Saved Aquila PDF to', filePath);
}

// 4. Generate PDF 2: NPTEL Elite Online Certification
async function generateNptelPdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([841.89, 595.28]); // A4 Landscape in points (297 x 210 mm)
  const { width, height } = page.getSize();

  const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontHelveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontTimes = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontTimesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  // Border
  page.drawRectangle({
    x: 20,
    y: 20,
    width: width - 40,
    height: height - 40,
    borderColor: rgb(0.85, 0.7, 0.3),
    borderWidth: 3,
  });

  // Top "Elite" badge
  page.drawRectangle({
    x: width / 2 - 45,
    y: height - 42,
    width: 90,
    height: 26,
    color: rgb(0.75, 0.1, 0.1),
  });
  page.drawText('Elite', {
    x: width / 2 - 20,
    y: height - 34,
    size: 16,
    font: fontHelveticaBold,
    color: rgb(1, 1, 1),
  });

  // Title: NPTEL ONLINE CERTIFICATION
  page.drawText('NPTEL ONLINE CERTIFICATION', {
    x: width / 2 - 195,
    y: height - 80,
    size: 26,
    font: fontTimesBold,
    color: rgb(0.75, 0.1, 0.1),
  });
  page.drawText('(Funded by the MoE, Govt. of India)', {
    x: width / 2 - 110,
    y: height - 100,
    size: 13,
    font: fontTimes,
    color: rgb(0.2, 0.2, 0.2),
  });

  // Skill India & NPTEL labels
  page.drawText('NPTEL', { x: 50, y: height - 70, size: 24, font: fontHelveticaBold, color: rgb(0.8, 0.4, 0.1) });
  page.drawText('Skill India', { x: width - 130, y: height - 70, size: 16, font: fontHelveticaBold, color: rgb(0.1, 0.3, 0.6) });
  page.drawText('kaushal bharat - kushal bharat', { x: width - 155, y: height - 86, size: 8, font: fontHelvetica, color: rgb(0.4, 0.4, 0.4) });

  // Awarded text
  page.drawText('This certificate is awarded to', {
    x: width / 2 - 95,
    y: height - 145,
    size: 14,
    font: fontTimes,
    color: rgb(0.2, 0.2, 0.2),
  });

  // Recipient Name
  page.drawText('PADMAROOPA D', {
    x: width / 2 - 95,
    y: height - 185,
    size: 20,
    font: fontTimesBold,
    color: rgb(0.1, 0.1, 0.1),
  });

  page.drawText('for successfully completing the course', {
    x: width / 2 - 115,
    y: height - 215,
    size: 13,
    font: fontTimes,
    color: rgb(0.2, 0.2, 0.2),
  });

  // Course Name
  page.drawText('Developing Soft Skills and Personality', {
    x: width / 2 - 165,
    y: height - 250,
    size: 20,
    font: fontTimesBold,
    color: rgb(0.1, 0.1, 0.1),
  });

  // Score
  page.drawText('with a consolidated score of', {
    x: width / 2 - 135,
    y: height - 290,
    size: 14,
    font: fontTimes,
    color: rgb(0.2, 0.2, 0.2),
  });
  page.drawText('86   %', {
    x: width / 2 + 55,
    y: height - 292,
    size: 18,
    font: fontHelveticaBold,
    color: rgb(0.1, 0.1, 0.1),
  });

  // Breakdown Table
  page.drawRectangle({
    x: width / 2 - 190,
    y: height - 335,
    width: 190,
    height: 30,
    borderColor: rgb(0.2, 0.2, 0.2),
    borderWidth: 1,
  });
  page.drawText('Online Assignments  24.54/25', {
    x: width / 2 - 180,
    y: height - 323,
    size: 11.5,
    font: fontHelveticaBold,
    color: rgb(0.1, 0.1, 0.1),
  });

  page.drawRectangle({
    x: width / 2 + 5,
    y: height - 335,
    width: 185,
    height: 30,
    borderColor: rgb(0.2, 0.2, 0.2),
    borderWidth: 1,
  });
  page.drawText('Proctored Exam  61.46/75', {
    x: width / 2 + 20,
    y: height - 323,
    size: 11.5,
    font: fontHelveticaBold,
    color: rgb(0.1, 0.1, 0.1),
  });

  // Candidates count
  page.drawText('Total number of candidates certified in this course: 12536', {
    x: width / 2 - 145,
    y: height - 370,
    size: 11,
    font: fontHelvetica,
    color: rgb(0.2, 0.2, 0.2),
  });

  // Date and duration
  page.drawText('Aug-Oct 2025', {
    x: width / 2 - 35,
    y: height - 425,
    size: 13,
    font: fontTimesBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('(8 week course)', {
    x: width / 2 - 38,
    y: height - 442,
    size: 11,
    font: fontTimes,
    color: rgb(0.3, 0.3, 0.3),
  });

  // Signatories
  page.drawText('Prof. B. V. Ratish Kumar', { x: 80, y: height - 440, size: 11, font: fontTimesBold, color: rgb(0.1, 0.1, 0.1) });
  page.drawText('Chairman, Centre for Continuing Education', { x: 80, y: height - 455, size: 9, font: fontTimes, color: rgb(0.3, 0.3, 0.3) });
  page.drawText('IIT Kanpur', { x: 80, y: height - 468, size: 9, font: fontTimes, color: rgb(0.3, 0.3, 0.3) });

  page.drawText('Prof. Satyaki Roy', { x: width - 180, y: height - 440, size: 11, font: fontTimesBold, color: rgb(0.1, 0.1, 0.1) });
  page.drawText('NPTEL Coordinator', { x: width - 180, y: height - 455, size: 9, font: fontTimes, color: rgb(0.3, 0.3, 0.3) });
  page.drawText('IIT Kanpur', { x: width - 180, y: height - 468, size: 9, font: fontTimes, color: rgb(0.3, 0.3, 0.3) });

  // Institute and SWAYAM
  page.drawText('Indian Institute of Technology Kanpur', { x: 100, y: 70, size: 12, font: fontHelveticaBold, color: rgb(0.2, 0.2, 0.2) });
  page.drawText('swayam - Free Online Education', { x: width - 220, y: 70, size: 11, font: fontHelveticaBold, color: rgb(0.8, 0.4, 0.1) });

  // Bottom verification line
  page.drawLine({ start: { x: 40, y: 48 }, end: { x: width - 40, y: 48 }, thickness: 0.5, color: rgb(0.7, 0.7, 0.7) });
  page.drawText('Roll No: NPTEL25HS174S566700497', { x: 50, y: 34, size: 10, font: fontHelveticaBold, color: rgb(0.2, 0.2, 0.2) });
  page.drawText('To verify the certificate [QR Verified]', { x: width / 2 - 60, y: 34, size: 10, font: fontHelvetica, color: rgb(0.4, 0.4, 0.4) });
  page.drawText('No. of credits recommended: 2 or 3', { x: width - 230, y: 34, size: 10, font: fontHelveticaBold, color: rgb(0.2, 0.2, 0.2) });

  const pdfBytes = await pdfDoc.save();
  const filePath = path.join(outDir, 'nptel_developing_soft_skills_and_personality_elite_certificate.pdf');
  fs.writeFileSync(filePath, pdfBytes);
  console.log('Saved NPTEL PDF to', filePath);
}

// 5. Convert SVGs to high-res JPEGs
async function buildImages() {
  // Alfrin
  const alfrinSvg = Buffer.from(generateAlfrinSvg());
  await sharp(alfrinSvg)
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'certificate3.jpg.jpeg'));
  // duplicate as certificate3.jpg and semantic name
  fs.copyFileSync(path.join(outDir, 'certificate3.jpg.jpeg'), path.join(outDir, 'certificate3.jpg'));
  fs.copyFileSync(path.join(outDir, 'certificate3.jpg.jpeg'), path.join(outDir, 'alfrin_technologies_full_stack_internship_certificate.jpg'));
  console.log('Generated Certificate 3 (Alfrin)');

  // Certificate 4 (Udemy Python ML)
  const cert4Data: UdemyData = {
    certNo: 'UC-66589a13-11e5-4b21-8a47-db9020d944e4',
    refNo: '0004',
    courseTitle: 'Hands-On Python Machine Learning with Real World Projects',
    instructors: 'Sayman Creative Institute',
    recipient: 'Padmaroopa',
    date: 'Sept. 8, 2026',
    length: '4.5 total hours',
  };
  const cert4Svg = Buffer.from(generateUdemySvg(cert4Data));
  await sharp(cert4Svg)
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'certificate4.jpg.jpeg'));
  fs.copyFileSync(path.join(outDir, 'certificate4.jpg.jpeg'), path.join(outDir, 'certificate4.jpg'));
  fs.copyFileSync(path.join(outDir, 'certificate4.jpg.jpeg'), path.join(outDir, 'udemy_hands_on_python_machine_learning.jpg'));
  console.log('Generated Certificate 4 (Udemy ML)');

  // Certificate 5 (Udemy CS MetaBootcamp)
  const cert5Data: UdemyData = {
    certNo: 'UC-21538b3e-167b-496a-be87-7cd09067b48a',
    refNo: '0004',
    courseTitle: 'Computer Science MetaBootcamp: Beginner to Intermediate 2026',
    instructors: 'Odysy Academy',
    recipient: 'Padmaroopa',
    date: 'Sept. 1, 2026',
    length: '7 total hours',
  };
  const cert5Svg = Buffer.from(generateUdemySvg(cert5Data));
  await sharp(cert5Svg)
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'certificate5.jpg.jpeg'));
  fs.copyFileSync(path.join(outDir, 'certificate5.jpg.jpeg'), path.join(outDir, 'certificate5.jpg'));
  fs.copyFileSync(path.join(outDir, 'certificate5.jpg.jpeg'), path.join(outDir, 'udemy_computer_science_metabootcamp.jpg'));
  console.log('Generated Certificate 5 (Udemy CS)');

  // Certificate 6 (Udemy Designing Logo AI)
  const cert6Data: UdemyData = {
    certNo: 'UC-18458e62-987a-491f-9a5f-1053e0962f12',
    refNo: '0004',
    courseTitle: 'Designing Logo, Vector Arts, Icons, Packaging & QR with AI',
    instructors: 'Christ Raharja',
    recipient: 'Padmaroopa',
    date: 'Sept. 1, 2026',
    length: '2.5 total hours',
  };
  const cert6Svg = Buffer.from(generateUdemySvg(cert6Data));
  await sharp(cert6Svg)
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'certificate6.jpg.jpeg'));
  fs.copyFileSync(path.join(outDir, 'certificate6.jpg.jpeg'), path.join(outDir, 'certificate6.jpg'));
  fs.copyFileSync(path.join(outDir, 'certificate6.jpg.jpeg'), path.join(outDir, 'udemy_designing_logo_vector_arts_ai.jpg'));
  console.log('Generated Certificate 6 (Udemy AI Design)');

  // Certificate 7 (Udemy Python PDF Tool)
  const cert7Data: UdemyData = {
    certNo: 'UC-f9713cff-e2b4-4fdb-8f89-e3395ac3c2de',
    refNo: '0004',
    courseTitle: 'Python Project: Build a PDF File Handling Tool from Scratch',
    instructors: 'Dr. Raj Gaurav Mishra',
    recipient: 'Padmaroopa',
    date: 'Feb. 21, 2025',
    length: '1 total hour',
  };
  const cert7Svg = Buffer.from(generateUdemySvg(cert7Data));
  await sharp(cert7Svg)
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'certificate7.jpg.jpeg'));
  fs.copyFileSync(path.join(outDir, 'certificate7.jpg.jpeg'), path.join(outDir, 'certificate7.jpg'));
  fs.copyFileSync(path.join(outDir, 'certificate7.jpg.jpeg'), path.join(outDir, 'udemy_python_pdf_file_handling_tool.jpg'));
  console.log('Generated Certificate 7 (Udemy Python PDF)');
}

async function main() {
  await generateAquilaPdf();
  await generateNptelPdf();
  await buildImages();
  console.log('All certificates successfully generated in public/certificates!');
}

main().catch(console.error);
