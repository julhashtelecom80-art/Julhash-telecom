# JULHASH TELECOM — Online Server Starter

## কী আছে
- `public/index.html`: আপডেট করা অ্যাপ
- `server.js`: Node.js backend
- `/api/health`: সার্ভার সচল কি না পরীক্ষা
- `/api/bkash/create-payment`: bKash credentials না পাওয়া পর্যন্ত নিরাপদে 503 দেয়
- `render.yaml`: Render deploy config

## GitHub ও Render দিয়ে প্রকাশ
1. এই ZIP Extract করে সব ফাইল GitHub repository-তে upload করুন।
2. `public` নামে folder তৈরি করে `index.html` সেখানে রাখুন (ZIP-এ আগেই আছে)।
3. Render-এ New > Blueprint নির্বাচন করে GitHub repository connect করুন।
4. Render `render.yaml` পড়ে web service তৈরি করবে।
5. Deploy শেষে Render-এর HTTPS URL খুলে `/api/health` যোগ করে পরীক্ষা করুন।
6. `public/index.html` একই সার্ভার থেকে serve হবে; তাই API_BASE ফাঁকা রাখুন।

## bKash
এই starter এখনো টাকা নিতে বা বাস্তব পেমেন্ট সম্পন্ন করতে পারে না।
bKash-এর অনুমোদিত Checkout API credentials এবং merchant onboarding/configuration প্রয়োজন।
App Key, App Secret, Username, Password কখনো HTML/GitHub-এ দেবেন না; Render-এর Environment settings-এ server-side secret হিসেবে দিতে হবে।
Credentials ছাড়া payment route ইচ্ছাকৃতভাবে বন্ধ রাখা হয়েছে।
