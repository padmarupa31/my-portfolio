import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outDir = path.join(process.cwd(), 'public', 'certificates');

const generateAquilaSvg = () => {
  return `
  <svg width="1240" height="1754" viewBox="0 0 1240 1754" xmlns="http://www.w3.org/2000/svg">
    <rect width="1240" height="1754" fill="#ffffff" />
    <!-- Left Chevron Pattern -->
    <g fill="#f97316">
      ${Array.from({ length: 42 }).map((_, i) => `
        <text x="36" y="${120 + i * 38}" font-family="'Arial Black', sans-serif" font-size="28" font-weight="900" opacity="0.9">&gt;&gt;&gt;</text>
      `).join('')}
    </g>

    <!-- Header Aquila Innovations -->
    <g transform="translate(240, 160)">
      <circle cx="-50" cy="-20" r="32" fill="#0369a1" opacity="0.15" />
      <polygon points="-50,-40 -25,-10 -50,5 -75,-10" fill="#0284c7" />
      <text x="0" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="52" font-weight="900" fill="#0f2b48" letter-spacing="1">Aquila Innovations</text>
    </g>

    <!-- Subtitle -->
    <text x="620" y="270" font-family="'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="bold" fill="#1e293b" text-anchor="middle" letter-spacing="1">Internship Completion Certificate</text>
    <line x1="320" y1="290" x2="920" y2="290" stroke="#f97316" stroke-width="3" />

    <!-- Main Content -->
    <g font-family="'Times New Roman', Georgia, serif" font-size="22" fill="#334155" text-anchor="start">
      <text x="140" y="380">This is to certify that <tspan font-weight="bold" fill="#0f172a" font-size="24">Ms. D. Padmaroopa</tspan> has successfully completed</text>
      <text x="140" y="420">a 30-Day Intensive Internship Program at <tspan font-weight="bold" fill="#0f2b48">Aquila Innovations</tspan></text>
      <text x="140" y="460">from <tspan font-weight="bold">14 June 2025</tspan> to <tspan font-weight="bold">15 July 2025</tspan>.</text>

      <text x="140" y="530">During the internship, she gained practical exposure to <tspan font-weight="bold" fill="#0284c7">Python Programming</tspan></text>
      <text x="140" y="570">and actively participated in learning and applying the following:</text>

      <!-- Bullets -->
      <g transform="translate(140, 630)">
        <text x="0" y="0" font-weight="bold" fill="#0f172a">1. Python Programming:</text>
        <text x="30" y="36">Learned Python basics, functions, OOP, file handling, and basic</text>
        <text x="30" y="70">programming concepts.</text>

        <text x="0" y="130" font-weight="bold" fill="#0f172a">2. Practical Python:</text>
        <text x="30" y="166">Applied Python knowledge through programming exercises,</text>
        <text x="30" y="200">problem-solving activities, and practical assignments.</text>

        <text x="0" y="260" font-weight="bold" fill="#0f172a">3. Problem Solving:</text>
        <text x="30" y="296">Developed logical thinking and problem-solving skills by creating</text>
        <text x="30" y="330">and practicing Python programs.</text>
      </g>

      <text x="140" y="1060">Throughout the internship, <tspan font-weight="bold">Ms. D. Padmaroopa</tspan> demonstrated enthusiasm</text>
      <text x="140" y="1100">for learning, dedication, discipline, and a positive attitude toward developing</text>
      <text x="140" y="1140">her programming skills. She showed good problem-solving ability and sincere</text>
      <text x="140" y="1180">interest in applying her knowledge through practical exercises.</text>

      <text x="140" y="1250">We appreciate her sincere efforts and participation during the internship and</text>
      <text x="140" y="1290">wish her continued success in her academic pursuits and future professional</text>
      <text x="140" y="1330">endeavors.</text>

      <!-- Signature Block -->
      <text x="140" y="1410">Best Regards,</text>
      <text x="140" y="1445" font-weight="bold" fill="#0f172a">For Aquila Innovations,</text>

      <text x="140" y="1515" font-family="'Brush Script MT', 'Segoe Script', cursive" font-size="34" fill="#0369a1">Aswin Sadhasivam</text>
      <line x1="140" y1="1525" x2="420" y2="1525" stroke="#94a3b8" stroke-width="1.5" />
      <text x="140" y="1555" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">Aswin Sadhasivam <tspan font-size="15" font-weight="normal" fill="#475569">(MCP, SOTY - Canada, CPPG - CANADA, Honors - U.K)</tspan></text>
      <text x="140" y="1585" font-family="'Helvetica Neue', Arial, sans-serif" font-size="17" fill="#64748b">CTO - Aquila Innovations</text>
    </g>

    <!-- Footer -->
    <line x1="140" y1="1640" x2="1140" y2="1640" stroke="#cbd5e1" stroke-width="1" />
    <g font-family="'Helvetica Neue', Arial, sans-serif" font-size="15" fill="#64748b">
      <text x="140" y="1670">Phone: 860 838 6852 | 860 822 6852</text>
      <text x="560" y="1670">Email: mail@aquilainnovations.in</text>
      <text x="140" y="1705"><tspan font-weight="bold" fill="#f97316">Registered Address: </tspan>#6A, Market Street, Nellithope, Pondicherry - 605005</text>
      <text x="140" y="1730"><tspan font-weight="bold" fill="#f97316">Operational Address: </tspan>ATAL, PTU - Campus, Pondicherry - 605014</text>
    </g>
  </svg>
  `;
};

const generateNptelSvg = () => {
  return `
  <svg width="1684" height="1191" viewBox="0 0 1684 1191" xmlns="http://www.w3.org/2000/svg">
    <rect width="1684" height="1191" fill="#ffffff" />
    <!-- Golden Border -->
    <rect x="40" y="40" width="1604" height="1111" fill="none" stroke="#d97706" stroke-width="6" rx="4" />
    <rect x="52" y="52" width="1580" height="1087" fill="none" stroke="#b45309" stroke-width="2" />

    <!-- Elite Badge -->
    <rect x="752" y="55" width="180" height="50" rx="4" fill="#b91c1c" />
    <text x="842" y="90" font-family="'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">Elite</text>

    <!-- Top Branding -->
    <text x="110" y="120" font-family="'Helvetica Neue', Arial, sans-serif" font-size="44" font-weight="900" fill="#ea580c">NPTEL</text>
    <text x="1574" y="110" font-family="'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="bold" fill="#1d4ed8" text-anchor="end">Skill India</text>
    <text x="1574" y="136" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" fill="#64748b" text-anchor="end">कौशल भारत - कुशल भारत</text>

    <!-- Title -->
    <text x="842" y="185" font-family="'Times New Roman', Georgia, serif" font-size="46" font-weight="bold" fill="#b91c1c" text-anchor="middle" letter-spacing="1">NPTEL ONLINE CERTIFICATION</text>
    <text x="842" y="225" font-family="'Times New Roman', Georgia, serif" font-size="24" fill="#334155" text-anchor="middle">(Funded by the MoE, Govt. of India)</text>

    <!-- Body -->
    <text x="842" y="310" font-family="'Times New Roman', Georgia, serif" font-size="28" fill="#334155" text-anchor="middle">This certificate is awarded to</text>
    <text x="842" y="390" font-family="'Times New Roman', Georgia, serif" font-size="48" font-weight="bold" fill="#0f172a" text-anchor="middle" letter-spacing="3">PADMAROOPA D</text>
    <line x1="520" y1="410" x2="1164" y2="410" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />

    <text x="842" y="470" font-family="'Times New Roman', Georgia, serif" font-size="26" fill="#334155" text-anchor="middle">for successfully completing the course</text>
    <text x="842" y="540" font-family="'Times New Roman', Georgia, serif" font-size="42" font-weight="bold" fill="#0f172a" text-anchor="middle">Developing Soft Skills and Personality</text>

    <!-- Score Box -->
    <g transform="translate(842, 630)" text-anchor="middle">
      <text x="-90" y="0" font-family="'Times New Roman', Georgia, serif" font-size="28" fill="#334155">with a consolidated score of</text>
      <text x="130" y="0" font-family="'Helvetica Neue', Arial, sans-serif" font-size="38" font-weight="900" fill="#0f172a">86 %</text>
    </g>

    <!-- Table of Marks -->
    <g transform="translate(442, 690)">
      <rect x="0" y="0" width="380" height="60" fill="#f8fafc" stroke="#334155" stroke-width="1.5" />
      <text x="190" y="38" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Online Assignments: 24.54 / 25</text>

      <rect x="420" y="0" width="380" height="60" fill="#f8fafc" stroke="#334155" stroke-width="1.5" />
      <text x="610" y="38" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="bold" fill="#0f172a" text-anchor="middle">Proctored Exam: 61.46 / 75</text>
    </g>

    <text x="842" y="810" font-family="'Helvetica Neue', Arial, sans-serif" font-size="22" fill="#475569" text-anchor="middle">Total number of candidates certified in this course: <tspan font-weight="bold" fill="#0f172a">12,536</tspan></text>

    <!-- Course duration & date -->
    <text x="842" y="875" font-family="'Times New Roman', Georgia, serif" font-size="26" font-weight="bold" fill="#0f172a" text-anchor="middle">Aug-Oct 2025</text>
    <text x="842" y="910" font-family="'Times New Roman', Georgia, serif" font-size="20" fill="#64748b" text-anchor="middle">(8 week course)</text>

    <!-- Signatures -->
    <g transform="translate(180, 930)">
      <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="24" font-weight="bold" fill="#0f172a">Prof. B. V. Ratish Kumar</text>
      <text x="0" y="30" font-family="'Times New Roman', Georgia, serif" font-size="18" fill="#475569">Chairman, Centre for Continuing Education</text>
      <text x="0" y="55" font-family="'Times New Roman', Georgia, serif" font-size="18" font-weight="bold" fill="#0f172a">IIT Kanpur</text>
    </g>

    <g transform="translate(1504, 930)" text-anchor="end">
      <text x="0" y="0" font-family="'Times New Roman', Georgia, serif" font-size="24" font-weight="bold" fill="#0f172a">Prof. Satyaki Roy</text>
      <text x="0" y="30" font-family="'Times New Roman', Georgia, serif" font-size="18" fill="#475569">NPTEL Coordinator</text>
      <text x="0" y="55" font-family="'Times New Roman', Georgia, serif" font-size="18" font-weight="bold" fill="#0f172a">IIT Kanpur</text>
    </g>

    <!-- Bottom footer -->
    <line x1="80" y1="1050" x2="1604" y2="1050" stroke="#cbd5e1" stroke-width="1" />
    <text x="110" y="1090" font-family="'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="bold" fill="#334155">Indian Institute of Technology Kanpur</text>
    <text x="110" y="1125" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" fill="#64748b">Roll No: NPTEL25HS174S566700497</text>

    <text x="842" y="1120" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" fill="#64748b" text-anchor="middle">To validate and check scores: https://nptel.ac.in/noc [Verified]</text>

    <text x="1574" y="1090" font-family="'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="bold" fill="#ea580c" text-anchor="end">swayam - Free Online Education</text>
    <text x="1574" y="1125" font-family="'Helvetica Neue', Arial, sans-serif" font-size="16" fill="#64748b" text-anchor="end">No. of credits recommended: 2 or 3</text>
  </svg>
  `;
};

async function run() {
  const aquilaSvg = Buffer.from(generateAquilaSvg());
  await sharp(aquilaSvg)
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'aquila_innovations_python_internship_certificate.jpg'));

  const nptelSvg = Buffer.from(generateNptelSvg());
  await sharp(nptelSvg)
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'nptel_developing_soft_skills_and_personality_elite_certificate.jpg'));

  console.log('Successfully generated preview JPGs for Aquila and NPTEL!');
}

run().catch(console.error);
