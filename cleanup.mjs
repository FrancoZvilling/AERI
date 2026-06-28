import fs from 'fs';

let content = fs.readFileSync('src/pages/ConveniosPage.jsx', 'utf8');

// Remove import lines
content = content.replace(/import img[A-Za-z0-9_]+ from '\.\.\/assets\/convenios\/[^']+\.webp';\r?\n/g, '');

// Remove CONVENIOS_DATA array block
content = content.replace(/\/\/ -------------------------------------------------------------\r?\n\/\/ 2\. DATA COMPLETA \(31 Convenios\)\r?\n\/\/ -------------------------------------------------------------\r?\nconst CONVENIOS_DATA = \[\s*\{[\s\S]*?\}\s*\];\r?\n/, '');

fs.writeFileSync('src/pages/ConveniosPage.jsx', content);
