import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();

const pages = [
  'index.html',
  'about.html',
  'academics-nursery.html',
  'academics-primary.html',
  'academics-secondary.html',
  'academics-extracurricular.html',
  'staff.html',
  'admissions.html',
  'gallery.html',
  'contact.html',
  '404.html',
];

const pageActiveKey = {
  'index.html': 'home',
  'about.html': 'about',
  'academics-nursery.html': 'academics',
  'academics-primary.html': 'academics',
  'academics-secondary.html': 'academics',
  'academics-extracurricular.html': 'academics',
  'staff.html': 'staff',
  'admissions.html': 'admissions',
  'gallery.html': 'gallery',
  'contact.html': 'contact',
  '404.html': '',
};

function navClass(activeKey, key) {
  return activeKey === key ? 'text-teal-700 font-medium' : 'hover:text-teal-700';
}

function headerHtml(activeKey) {
  return `    <header class="w-full border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-3">
                <img src="assets/icons/logo.jpg" alt="Integrity Academy" class="h-10 w-auto" />
                <span class="font-semibold text-lg">Integrity Academy</span>
            </a>
            <button id="mobileMenuBtn" class="md:hidden inline-flex items-center justify-center w-10 h-10 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle navigation menu">
                <span aria-hidden="true">☰</span>
            </button>
            <nav class="hidden md:flex items-center gap-6" aria-label="Primary">
                <a href="index.html" class="${navClass(activeKey, 'home')}">Home</a>
                <a href="about.html" class="${navClass(activeKey, 'about')}">About</a>
                <div class="academics-menu">
                    <a href="academics-nursery.html" class="${navClass(activeKey, 'academics')} flex items-center gap-1">
                        Academics
                        <span class="text-xs">▼</span>
                    </a>
                    <div class="academics-dropdown">
                        <a href="academics-nursery.html">Nursery</a>
                        <a href="academics-primary.html">Primary</a>
                        <a href="academics-secondary.html">Secondary</a>
                        <a href="academics-extracurricular.html">Extracurricular</a>
                    </div>
                </div>
                <a href="staff.html" class="${navClass(activeKey, 'staff')}">Staff</a>
                <a href="admissions.html" class="${navClass(activeKey, 'admissions')}">Admissions</a>
                <a href="gallery.html" class="${navClass(activeKey, 'gallery')}">Gallery</a>
                <a href="contact.html" class="${navClass(activeKey, 'contact')}">Contact</a>
            </nav>
        </div>
        <div id="mobileMenu" class="md:hidden hidden border-t border-slate-200">
            <div class="px-4 py-3 space-y-2">
                <a class="block py-2" href="index.html">Home</a>
                <a class="block py-2" href="about.html">About</a>
                <details>
                    <summary class="py-2 cursor-pointer">Academics</summary>
                    <div class="pl-4 space-y-2">
                        <a class="block py-1" href="academics-nursery.html">Nursery</a>
                        <a class="block py-1" href="academics-primary.html">Primary</a>
                        <a class="block py-1" href="academics-secondary.html">Secondary</a>
                        <a class="block py-1" href="academics-extracurricular.html">Extracurricular</a>
                    </div>
                </details>
                <a class="block py-2" href="staff.html">Staff</a>
                <a class="block py-2" href="admissions.html">Admissions</a>
                <a class="block py-2" href="gallery.html">Gallery</a>
                <a class="block py-2" href="contact.html">Contact</a>
            </div>
        </div>
    </header>`;
}

const footer = `    <footer class="border-t border-slate-200 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3 text-sm">
            <div>
                <a href="index.html" class="flex items-center gap-3 mb-4">
                    <img src="assets/icons/logo.jpg" alt="Integrity Academy" class="h-10 w-auto" />
                    <span class="font-semibold text-slate-800">Integrity Academy</span>
                </a>
                <p class="text-slate-600 mb-2">Gombe State, Nigeria</p>
                <p class="text-slate-600">Providing quality education from Nursery through Secondary levels.</p>
            </div>
            <div class="grid grid-cols-2 gap-6 md:contents">
            <div>
                <div class="font-semibold mb-4 text-slate-800">Quick Links</div>
                <ul class="space-y-2">
                    <li><a class="hover:text-teal-700 text-slate-600" href="index.html">Home</a></li>
                    <li><a class="hover:text-teal-700 text-slate-600" href="about.html">About</a></li>
                    <li><a class="hover:text-teal-700 text-slate-600" href="staff.html">Staff</a></li>
                    <li><a class="hover:text-teal-700 text-slate-600" href="admissions.html">Admissions</a></li>
                    <li><a class="hover:text-teal-700 text-slate-600" href="gallery.html">Gallery</a></li>
                    <li><a class="hover:text-teal-700 text-slate-600" href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div>
                <div class="font-semibold mb-4 text-slate-800">Academics</div>
                <ul class="space-y-2">
                    <li><a class="hover:text-teal-700 text-slate-600" href="academics-nursery.html">Nursery</a></li>
                    <li><a class="hover:text-teal-700 text-slate-600" href="academics-primary.html">Primary</a></li>
                    <li><a class="hover:text-teal-700 text-slate-600" href="academics-secondary.html">Secondary</a></li>
                    <li><a class="hover:text-teal-700 text-slate-600" href="academics-extracurricular.html">Extracurricular</a></li>
                </ul>
                </div>
            </div>
            <div>
                <div class="font-semibold mb-4 text-slate-800">Stay Connected</div>
                <p class="text-slate-600 mb-4 text-xs">Subscribe for latest updates and news.</p>
                <form id="newsletterForm" action="https://formsubmit.co/info@integrityintlacademygombe.ng" method="POST" class="flex flex-col gap-2">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_subject" value="Newsletter Subscription - Integrity Academy">
                    <input type="hidden" name="_template" value="basic">
                    <input type="email" name="email" placeholder="Enter your email" required class="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    <button type="submit" class="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Subscribe</button>
                </form>
            </div>
        </div>
        <div class="border-t border-slate-200 mt-8 pt-6">
            <div class="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
                <p>© <span id="year"></span> Integrity Academy. All rights reserved.</p>
                <p class="mt-2">Developed by <a href="https://omegacomputers.ng/" target="_blank" rel="noopener noreferrer" class="text-teal-700 hover:text-teal-600 underline">Omega Computers</a></p>
            </div>
        </div>
    </footer>`;

function syncFile(fileName) {
  const filePath = path.join(rootDir, fileName);
  const source = readFileSync(filePath, 'utf8');
  const activeKey = pageActiveKey[fileName] ?? '';

  const withHeader = source.replace(
    /<header[\s\S]*?<\/header>/,
    headerHtml(activeKey)
  );
  const withFooter = withHeader.replace(/<footer[\s\S]*?<\/footer>/, footer);

  if (withFooter === source) {
    return { fileName, changed: false };
  }

  writeFileSync(filePath, withFooter, 'utf8');
  return { fileName, changed: true };
}

let changedCount = 0;
for (const page of pages) {
  const result = syncFile(page);
  if (result.changed) changedCount += 1;
}

console.log(`Synchronized layout across ${pages.length} pages, updated ${changedCount}.`);
