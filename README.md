# KoinX Frontend Assignment - Tax Loss Harvesting Tool

A pixel-perfect, highly responsive **Tax Loss Harvesting Interface** built as part of the KoinX Frontend Intern assessment. This dashboard allows cryptocurrency investors to track their pre-harvesting capital gains and simulate real-time tax optimization by selecting individual asset holdings to lock in or offset capital losses.

## 🚀 Live Demo & Repository
- **Live Deployed Link:** https://koinx-tax-harvesting-mu.vercel.app/
- **GitHub Repository:** https://github.com/prashant-art/koinx-tax-harvesting

---

## ✨ Features Built
- **Pre-Harvesting Status Card:** Fetches and displays initial Short-Term (STCG) and Long-Term (LTCG) profits/losses and total realised gains.
- **Dynamic After-Harvesting Card:** Simulates real-time mathematical changes when holdings are checked/unchecked. Positive gains add to profits; negative gains offset losses.
- **Dynamic Tax Savings Tracker:** Automatically calculates and displays a custom success alert showing exact monetary tax savings if the post-harvesting net drops below initial gains.
- **Interactive Holdings Table:** Custom UI mapping out asset lists with details, balance stats, and explicit breakdown flags. Includes a global Select All checkbox.
- **Pixel-Perfect Responsive Layout:** Mobile-friendly UI with smooth horizontal scroll layers for table structures on smaller screens.

---

## 🛠️ Tech Stack Used
- **Frontend Framework:** React 19 (TypeScript template via Vite)
- **Styling Engine:** Tailwind CSS v4 (Latest stable version to avoid config conflicts)
- **Icons Resource:** Lucide React

---

## ⚙️ Local Setup Instructions

Follow these quick steps to get the project running locally on your system:

### 1. Clone the repository
```bash
git clone https://github.com/prashant-art/koinx-tax-harvesting
cd koinx-tax-harvesting