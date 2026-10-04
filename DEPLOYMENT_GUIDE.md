# ការណែនាំអំពីការ Deploy Website Angkor BIM ដោយពុំត្រូវការ VPS (100% ឥតគិតថ្លៃ)

Website នេះត្រូវបានរៀបចំឡើងជាទម្រង់ **Modern Static Web Application (HTML5, CSS3, Pure JavaScript)** ដែលបង្ហាញតែ៖
1. **ព័ត៌មានទូទៅ (General Information)**៖ ទំព័រដើម (Home), អំពីយើង (About), សេវាកម្ម (Services), ទំនាក់ទំនង (Contact)
2. **ផលិតផល Angkor BIM (Products)**៖ Angkor BIM QS, Angkor BIM Model, Angkor BIM Rebar, និង Bundle Pack

ដោយសារ Website នេះពុំមានតម្រូវការ Database ឬ Python Backend ទៀតទេ លោកអ្នកអាចធ្វើការ **Deploy ដោយឥតគិតថ្លៃ 100% និងពុំចាំបាច់ជួល VPS** (មិនបាច់ចំណាយ $5-$20/ខែ, មិនបាច់ Config Nginx, Gunicorn ឬ Linux Server ស្មុគស្មាញ)។

---

## ជម្រើសទី 1: Cloudflare Pages (ណែនាំខ្លាំងបំផុត - លឿនបំផុតនៅកម្ពុជា & Free SSL)

Cloudflare មាន Server CDN នៅជិតប្រទេសកម្ពុជាបំផុត ធ្វើឱ្យ Website បើកបានលឿនក្នុងរយៈពេលតែ **0.5 វិនាទី** និងមានប្រព័ន្ធការពារ DDoS ឥតគិតថ្លៃ។

### របៀបធ្វើតាមវិធី Drag & Drop (ចំណាយពេលត្រឹមតែ 1 នាទី):
1. ចូលទៅកាន់គេហទំព័រ [dash.cloudflare.com](https://dash.cloudflare.com/) ហើយបង្កើត Account ឬ Login។
2. នៅ Sidebar ខាងឆ្វេង ចុចលើ **Workers & Pages** -> ចុចប៊ូតុង **Create application** -> ជ្រើសរើស Tab **Pages**។
3. ចុចលើ **Upload assets**។
4. បញ្ចូលឈ្មោះគម្រោង (Project Name) ឧទាហរណ៍៖ `angkor-bim`។
5. ចុច Drag & Drop ទាញ **Folder ទាំងមូលនេះ** (`Angkor BIM Website (Only Information)`) ទម្លាក់ចូលទៅក្នុងប្រអប់ Upload។
6. ចុច **Deploy site** -> រួចរាល់!
7. លោកអ្នកនឹងទទួលបាន Link ប្រើប្រាស់ភ្លាមៗ ឧទាហរណ៍៖ `https://angkor-bim.pages.dev`។
8. បើមាន Custom Domain (ដូចជា `angkorbim.com`) អាចចូលទៅ **Custom domains** ក្នុង Cloudflare Pages ដើម្បីភ្ជាប់បានដោយឥតគិតថ្លៃ និងទទួលបាន SSL (HTTPS) ដោយស្វ័យប្រវត្តិ។

---

## ជម្រើសទី 2: GitHub Pages (ឥតគិតថ្លៃជារៀងរហូត & ងាយស្រួលគ្រប់គ្រង Code)

### របៀបធ្វើ៖
1. ចូលទៅកាន់ [github.com](https://github.com/) ហើយបង្កើត Repository ថ្មីមួយ (ឧទាហរណ៍ឈ្មោះ៖ `angkorbim-website`) កំណត់ជា **Public**។
2. Push កូដទាំងអស់នៅក្នុង Folder នេះទៅកាន់ GitHub៖
   ```bash
   git init
   git add .
   git commit -m "Initial commit for static Angkor BIM website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/angkorbim-website.git
   git push -u origin main
   ```
3. នៅលើទំព័រ GitHub Repository របស់អ្នក៖
   - ចុចលើ **Settings** (នៅ Menu ខាងលើ)
   - នៅ Sidebar ខាងឆ្វេង ចុចលើ **Pages**
   - នៅត្រង់ **Branch** ជ្រើសរើសយក `main` និង Folder `/ (root)`
   - ចុចប៊ូតុង **Save**
4. រង់ចាំប្រហែល 1 ទៅ 2 នាទី Website របស់អ្នកនឹងដំណើរការនៅអាសយដ្ឋាន៖
   `https://<YOUR_USERNAME>.github.io/angkorbim-website/`
5. លោកអ្នកក៏អាចកំណត់ Custom Domain នៅក្នុងទំព័រ Settings នោះបានយ៉ាងងាយស្រួល។

---

## ជម្រើសទី 3: Netlify (អូសទម្លាក់ផ្ទាល់ Live ភ្លាមក្នុង 10 វិនាទី)

1. ចូលទៅកាន់ [app.netlify.com/drop](https://app.netlify.com/drop)
2. អូស (Drag & Drop) Folder `Angkor BIM Website (Only Information)` ទម្លាក់ចូលទៅក្នុងផ្ទាំង Browser
3. Netlify នឹងធ្វើការ Deploy ភ្លាមៗ និងផ្តល់ Link ឱ្យលោកអ្នកប្រើប្រាស់បានភ្លាម។

---

## របៀបតេស្តមើលលើកុំព្យូទ័រផ្ទាល់ខ្លួន (Local Test)

លោកអ្នកអាចតេស្តមើល Website នេះនៅលើកុំព្យូទ័ររបស់អ្នកដោយវិធីងាយៗ៖
1. **វិធីងាយស្រួលបំផុត**: ចុច Double-Click លើ file `index.html` នោះវានឹងបើកក្នុង Google Chrome ឬ Edge ភ្លាមៗ។
2. **វិធីប្រើ Local Web Server (Python)**:
   - បើក Terminal ឬ PowerShell ក្នុង Folder នេះ
   - វាយពាក្យបញ្ជា៖
     ```bash
     python -m http.server 8080
     ```
   - បន្ទាប់មកបើក Browser ហើយចូលទៅ៖ `http://localhost:8080`

---

## រចនាសម្ព័ន្ធឯកសារក្នុងគម្រោង

- `index.html` : ទំព័រដើម (Hero, អំពី Angkor BIM, ផលិតផលចម្បង, សេវាកម្ម, ហេតុផលជ្រើសរើសយើង, QR ឧបត្ថម្ភ)
- `products.html` : ទំព័រផលិតផល (Angkor BIM QS, Model, Rebar, Bundle Pack, Demo GIFs, តារាងប្រៀបធៀប, FAQ)
- `services.html` : ទំព័រសេវាកម្ម (Plugin Development, Structural Design, Revit Modeling, Shop Drawing, Cost Estimation, Project Planning ជាមួយរូបភាពគម្រោង)
- `about.html` : ទំព័រអំពីយើង (ប្រវត្តិ, ចក្ខុវិស័យ, បេសកកម្ម, តម្លៃស្នូល)
- `contact.html` : ទំព័រទំនាក់ទំនង (លេខទូរស័ព្ទ, អ៊ីមែល, ទីតាំង, ផែនទី Google Maps, ទម្រង់ផ្ញើសារតាម Telegram)
- `assets/css/style.css` : ឯកសារ Stylesheet ទំនើប Responsive គ្រប់ទំហំអេក្រង់
- `assets/js/main.js` : កូដ JavaScript សម្រាប់ Tabs, GIFs, Menu, Form និង Modals
- `assets/images/` : រូបភាព Logo, Icons, រូបថតគម្រោង (បាន Compress ឱ្យស្រាល load លឿន) និង QR KHQR
- `assets/gif/` : វីដេអូ Demo GIF ជាក់ស្តែងសម្រាប់ផលិតផល QS, Model, Rebar
- `robots.txt` & `sitemap.xml` : ឯកសារសម្រាប់ Google SEO
- `.nojekyll` : ឯកសារជំនួយសម្រាប់ GitHub Pages
