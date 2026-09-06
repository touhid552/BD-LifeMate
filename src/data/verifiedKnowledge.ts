import { VerifiedKnowledgeDocument } from '../types';

export const VERIFIED_KNOWLEDGE_DOCS: VerifiedKnowledgeDocument[] = [
  {
    id: 'nid-lost-reissue',
    titleEn: 'Lost NID (National Identity Card) Reissue Guide',
    titleBn: 'হারিয়ে যাওয়া জাতীয় পরিচয়পত্র (NID) পুনরায় তোলার নিয়ম',
    category: 'government_documents',
    descriptionEn: 'Official step-by-step procedure to reissue a lost or damaged NID card from Bangladesh Election Commission without visiting unauthorized middlemen.',
    descriptionBn: 'বাংলাদেশ নির্বাচন কমিশনের অফিসিয়াল প্রক্রিয়া অনুযায়ী দালালের সাহায্য ছাড়াই হারানো বা নষ্ট হওয়া স্মার্ট/এনআইডি কার্ড পুনরায় তোলার নির্দেশিকা।',
    stepsEn: [
      'File an immediate General Diary (Online GD via gd.police.gov.bd or visit your local Thana). You will receive a GD reference number.',
      'Register or log in at the official NID Services portal: services.nidw.gov.bd using your NID number or Form number, date of birth, and mobile face verification.',
      'Click on "Reissue Application" (রি-ইস্যু আবেদন) from your dashboard and select reason as "Lost".',
      'Enter the Police GD number, Thana name, and GD filing date.',
      'Pay the government fee via bKash, Rocket, Nagad, or Sonali Bank (Regular: ৳230, Urgent: ৳460 with 15% VAT included).',
      'Download and print the Reissue Application Summary slip.',
      'Wait for the SMS notification. Once printed, collect the card from your designated Upazila/Thana Election Office or download the digital NID copy immediately.'
    ],
    stepsBn: [
      'প্রথমেই নিকটস্থ থানায় অথবা gd.police.gov.bd ওয়েবসাইটে অনলাইন জিডি (GD) করুন এবং জিডি নম্বর সংগ্রহ করুন।',
      'নির্বাচন কমিশনের অফিসিয়াল পোর্টাল services.nidw.gov.bd-এ প্রবেশ করে NID নম্বর ও জন্ম তারিখ দিয়ে লগইন করুন (NID Wallet অ্যাপ দিয়ে ফেস ভেরিফিকেশন করতে হবে)।',
      'ড্যাশবোর্ড থেকে "রি-ইস্যু" অপশনে ক্লিক করুন এবং কারণ হিসেবে "হারিয়ে গেছে" সিলেক্ট করুন।',
      'জিডি নম্বর, থানার নাম এবং জিডির তারিখ সঠিক তথ্যে ইনপুট দিন।',
      'বিকাশ, রকেট, নগদ বা সোনালী ব্যাংকের মাধ্যমে সরকারি ফি প্রদান করুন (সাধারণ ফি: ২৩০ টাকা, জরুরি ফি: ৪৬০ টাকা ভ্যাটসহ)।',
      'আবেদনের কপিটি ডাউনলোড ও প্রিন্ট করে রাখুন।',
      'এসএমএস পেলে নির্ধারিত উপজেলা/থানা নির্বাচন অফিস থেকে নতুন কার্ড সংগ্রহ করুন অথবা পোর্টাল থেকে তাৎক্ষণিক ডিজিটাল কপি ডাউনলোড করুন।'
    ],
    requiredDocumentsEn: [
      'Police GD Slip copy / Reference number',
      'Previous NID number or Voter Slip / Form number',
      'Registered mobile number for OTP and NID Wallet biometric face scan',
      'Original educational certificate or birth certificate (only if biometric update is needed)'
    ],
    requiredDocumentsBn: [
      'থানার জিডির মূল কপি বা অনলাইন জিডি স্লিপ',
      'পূর্বের এনআইডি নম্বর অথবা ভোটার স্লিপ/ফর্ম নম্বর',
      'এনআইডি ওয়ালেট ফেস ভেরিফিকেশনের জন্য স্মার্টফোন ও সিম কার্ড',
      'বায়োমেট্রিক সংশোধনের প্রয়োজন হলে জন্ম সনদ/এসএসসি সনদের কপি'
    ],
    estimatedCostBdt: '৳230 (Regular) / ৳460 (Urgent)',
    estimatedProcessingTime: 'Instant for Digital PDF; 7–15 working days for physical Smart Card',
    organization: 'Bangladesh Election Commission (NID Wing)',
    organizationBn: 'বাংলাদেশ নির্বাচন কমিশন (এনআইডি উইং)',
    location: 'Islamic Foundation Bhaban, Agargaon, Dhaka & Upazila Election Offices',
    officialSourceUrl: 'https://services.nidw.gov.bd',
    officialPortalName: 'NID Wing Official Portal',
    lastVerifiedDate: '2026-02-15',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['nid', 'lost nid', 'smart card', 'election commission', 'police gd', 'হারানো এনআইডি'],
    keywords: ['lost nid', 'nid harie geche', 'nid reissue', 'nid fee', 'voter id', 'online gd', 'হারানো আইডি', 'এনআইডি উত্তোলন'],
    helpline: '105 (Toll-Free within Bangladesh)',
    importantWarnings: [
      'Do not pay any agent or dalal outside election offices. All fees are payable strictly through official mobile banking bill-pay menus.',
      'A digital copy downloaded from services.nidw.gov.bd is legally valid for all official banking and telecom verification in Bangladesh.'
    ]
  },
  {
    id: 'epassport-application-renewal',
    titleEn: 'e-Passport New Application and Renewal Guide',
    titleBn: 'ই-পাসপোর্ট নতুন আবেদন ও নবায়ন নির্দেশিকা',
    category: 'government_documents',
    descriptionEn: 'Verified protocol for new e-Passport application or renewal via the official Department of Immigration & Passports portal.',
    descriptionBn: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তরের অফিসিয়াল পোর্টালের মাধ্যমে নতুন ই-পাসপোর্ট বা নবায়নের শতভাগ সত্য ও যাচাইকৃত প্রক্রিয়া।',
    stepsEn: [
      'Visit the official portal: epassport.gov.bd and check your current living district/thana to find the designated Regional Passport Office (RPO).',
      'Create an account using an active email and verify the link.',
      'Fill in the online application matching your National ID (NID) or Digital Birth Certificate (BRIS) letter-for-letter.',
      'Select passport validity (5 years or 10 years) and page count (48 pages or 64 pages).',
      'Pay government fee online via A-Challan / mobile banking or at designated banks (Sonali, Premier, One, Dhaka, Bank Asia, Trust Bank).',
      'Book an appointment date for biometric data capture (photograph, 10-fingerprints, and iris scan).',
      'Visit the passport office with printed application summary, payment receipt, and original NID/birth certificate.',
      'Track status online using your Application ID and collect passport after receiving SMS.'
    ],
    stepsBn: [
      'অফিসিয়াল পোর্টাল epassport.gov.bd-এ প্রবেশ করে আপনার স্থায়ী ও বর্তমান ঠিকানা অনুযায়ী সংশ্লিষ্ট আঞ্চলিক পাসপোর্ট অফিস নির্ধারণ করুন।',
      'সচল ইমেইল ঠিকানা দিয়ে অ্যাকাউন্ট তৈরি ও ভেরিফাই করুন।',
      'এনআইডি বা ডিজিটাল অনলাইন জন্ম সনদের নামের বানান ও তথ্যের সাথে হুবহু মিল রেখে ফরম পূরণ করুন।',
      'পাসপোর্টের মেয়াদ (৫ বা ১০ বছর) এবং পৃষ্ঠা সংখ্যা (৪৮ বা ৬৪ পৃষ্ঠা) নির্বাচন করুন।',
      'এ-চালান বা অনুমোদিত ব্যাংক/মোবাইল ব্যাংকিংয়ের মাধ্যমে নির্ধারিত সরকারি ফি পরিশোধ করুন।',
      'বায়োমেট্রিক ও ছবি তোলার জন্য অনলাইনে সুবিধাজনক তারিখ বুক করুন।',
      'আবেদনের সামারি কপি, পেমেন্ট স্লিপ এবং মূল এনআইডি/জন্ম সনদ নিয়ে পাসপোর্ট অফিসে উপস্থিত হন।',
      'আবেদন আইডি দিয়ে অনলাইনে স্ট্যাটাস ট্র্যাক করুন এবং এসএমএস পাওয়ার পর পাসপোর্ট গ্রহণ করুন।'
    ],
    requiredDocumentsEn: [
      'Original NID card (for age 18+) or 17-digit online verified Birth Certificate (for under 18)',
      'Previous passport copy (mandatory for renewals)',
      'Printed Application Summary with Barcode',
      'Challan Payment Receipt',
      'GO / NOC (Government employees only)',
      'Marriage Certificate / Nikahnama (if changing spouse name)'
    ],
    requiredDocumentsBn: [
      'মূল এনআইডি কার্ড (১৮ বছরের ঊর্ধ্বে) অথবা ১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ (১৮ বছরের নিচে)',
      'পূর্বের মূল পাসপোর্ট ও ফটোকপি (নবায়নের ক্ষেত্রে)',
      'বারকোডসহ প্রিন্ট করা অ্যাপ্লিকেশন সামারি স্লিপ',
      'ফি প্রদানের মূল ব্যাংক বা এ-চালান রসিদ',
      'সরকারি চাকরিজীবীদের ক্ষেত্রে জিও (GO) বা এনওসি (NOC)',
      'বৈবাহিক অবস্থা বা স্বামীর নাম পরিবর্তনের ক্ষেত্রে কাবিননামা'
    ],
    estimatedCostBdt: '48 Pages (5 yrs): ৳4,025 (Reg) / ৳6,325 (Express); 48 Pages (10 yrs): ৳5,750 (Reg) / ৳8,050 (Express)',
    estimatedProcessingTime: 'Regular: 15–21 working days; Express: 7–10 working days; Super Express: 2 working days',
    organization: 'Department of Immigration and Passports (DIP)',
    organizationBn: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর',
    location: 'Regional Passport Offices (Agargaon, Uttara, Jatrabari, Divisional HQs)',
    officialSourceUrl: 'https://epassport.gov.bd',
    officialPortalName: 'Bangladesh e-Passport Online Portal',
    lastVerifiedDate: '2026-02-20',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['passport', 'epassport', 'passport renewal', 'dip', 'foreign travel', 'পাসপোর্ট নবায়ন'],
    keywords: ['passport koto taka', 'epassport application', 'renew passport', 'passport office agargaon', 'passport fees bangladesh', 'পাসপোর্ট আবেদন', 'পাসপোর্ট ফি'],
    helpline: '02-8159525 / 16445',
    importantWarnings: [
      'No police verification is required for passport renewal if applicant details (name, parents, address) remain identical to previous passport.',
      'Ensure your NID and birth registration details match 100% to avoid biometric rejection at the counter.'
    ]
  },
  {
    id: 'driving-license-smart-card',
    titleEn: 'BRTA Smart Card Driving License Application Guide',
    titleBn: 'বিআরটিএ স্মার্ট কার্ড ড্রাইভিং লাইসেন্স পাওয়ার সহজ ধাপ',
    category: 'government_documents',
    descriptionEn: 'Step-by-step guide for obtaining a professional or non-professional motor vehicle driving license through BRTA Service Portal (BSP).',
    descriptionBn: 'বিআরটিএ সার্ভিস পোর্টাল (BSP) এর মাধ্যমে অপেশাদার ও পেশাদার মোটরযান ড্রাইভিং লাইসেন্স গ্রহণের সম্পূর্ণ নিয়ম।',
    stepsEn: [
      'Create an account on the official BRTA Service Portal: bsp.brta.gov.bd.',
      'Obtain a Medical Fitness Certificate signed by a registered MBBS doctor (BRTA prescribed medical form).',
      'Apply online for Learner Driving License (শিক্ষানবিস লাইসেন্স) and pay the fee (৳518 for one class, ৳748 for motorcycle + car).',
      'Download the instant electronic Learner License with QR code.',
      'Appear for the Written, Oral, and Practical driving test at your designated BRTA circle test ground on the scheduled date.',
      'Upon passing the test, submit the Smart Card application online with biometrics schedule.',
      'Pay smart card fee: Non-professional ৳4,557 (10 yrs validity) or Professional ৳2,832 (5 yrs validity).',
      'Provide biometrics (photo, fingerprint, signature) at BRTA circle office. Your Smart Card will be delivered to your address via courier.'
    ],
    stepsBn: [
      'বিআরটিএ সার্ভিস পোর্টাল bsp.brta.gov.bd-এ নিজের মোবাইল নম্বর দিয়ে অ্যাকাউন্ট খুলুন।',
      'রেজিস্টার্ড এমবিবিএস ডাক্তারের কাছ থেকে বিআরটিএ নির্ধারিত ফরমে মেডিকেল সার্টিফিকেট সংগ্রহ করুন।',
      'অনলাইনে লার্নার বা শিক্ষানবিস ড্রাইভিং লাইসেন্সের জন্য আবেদন করুন এবং ফি পরিশোধ করুন (১ ক্যাটাগরি ৫১৮ টাকা, ২ ক্যাটাগরি ৭৪৮ টাকা)।',
      'অনলাইন থেকে তাৎক্ষণিক কিউআর কোডযুক্ত লার্নার লাইসেন্স ডাউনলোড ও প্রিন্ট করুন।',
      'লার্নারে উল্লেখিত তারিখে নির্ধারিত বিআরটিএ টেস্ট ফিল্ডে লিখিত, মৌখিক এবং প্র্যাকটিক্যাল ড্রাইভিং পরীক্ষায় অংশ নিন।',
      'পরীক্ষায় উত্তীর্ণ হওয়ার পর বিএসপি পোর্টালে স্মার্ট কার্ড লাইসেন্সের চূড়ান্ত আবেদন করুন।',
      'স্মার্ট কার্ড ফি পরিশোধ করুন: অপেশাদার ৪,৫৫৭ টাকা (১০ বছর মেয়াদ) / পেশাদার ২,৮৩২ টাকা (৫ বছর মেয়াদ)।',
      'বিআরটিএ অফিসে গিয়ে বায়োমেট্রিক প্রদান করুন। প্রস্তুত হলে ডাকযোগে আপনার ঠিকানায় স্মার্ট কার্ড পৌঁছে যাবে।'
    ],
    requiredDocumentsEn: [
      'National ID Card (NID) copy',
      'Registered MBBS Doctor Medical Certificate',
      'Educational Certificate (minimum Class 8 pass certificate)',
      'Utility bill copy (electricity/gas) if residing at temporary address'
    ],
    requiredDocumentsBn: [
      'জাতীয় পরিচয়পত্র (NID) এর স্পষ্ট কপি',
      'এমবিবিএস ডাক্তারের সিল ও স্বাক্ষরযুক্ত মেডিকেল সনদ',
      'শিক্ষাগত যোগ্যতার সনদ (নূন্যতম অষ্টম শ্রেণি পাস)',
      'বর্তমান ঠিকানার প্রমাণ হিসেবে ইউটিলিটি বিলের কপি'
    ],
    estimatedCostBdt: 'Non-Professional: ৳4,557 + Learner ৳748; Professional: ৳2,832 + Learner ৳518',
    estimatedProcessingTime: 'Test within 1–2 months of learner; Smart card delivery 3–6 weeks after biometrics',
    organization: 'Bangladesh Road Transport Authority (BRTA)',
    organizationBn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ)',
    location: 'Mirpur BRTA, Ekuria, Diabari, and District Circles',
    officialSourceUrl: 'https://bsp.brta.gov.bd',
    officialPortalName: 'BRTA Service Portal (BSP)',
    lastVerifiedDate: '2026-02-18',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['driving license', 'brta', 'bsp', 'learner license', 'smart card', 'ড্রাইভিং লাইসেন্স'],
    keywords: ['driving license koto taka', 'brta learner online', 'smart card driving license', 'bike license', 'ড্রাইভিং লাইসেন্স বিআরটিএ', 'লার্নার লাইসেন্স'],
    helpline: '16107 / 02-55040738',
    importantWarnings: [
      'Do not hire test-proxy or pay bribes at test grounds. Biometric verification is conducted at the test venue.',
      'Driving with an expired learner or expired license carries up to ৳25,000 fine under Road Transport Act 2018.'
    ]
  },
  {
    id: 'birth-registration-online-bris',
    titleEn: 'Digital Birth Registration Certificate (17-digit BRIS) Guide',
    titleBn: '১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ সংশোধন ও উত্তোলন',
    category: 'government_documents',
    descriptionEn: 'Guide to register a new birth or convert an analog birth certificate to a verified 17-digit bilingual online certificate in BDRIS.',
    descriptionBn: 'বিডিআরআইএস (BDRIS) পোর্টাল থেকে নতুন জন্ম নিবন্ধন অথবা ১৭ ডিজিটের ডিজিটাল বাংলা-ইংরেজি সনদ যাচাই ও সংশোধনের নিয়মাবলী।',
    stepsEn: [
      'Open the official Birth & Death Registration portal: bdris.gov.bd.',
      'Select your local Ward Councilor Office / City Corporation Zonal Office or Union Parishad.',
      'Fill in applicant details in both Bengali and English (must match educational certificates if applicable).',
      'Upload required proofs (hospital discharge paper / EPI vaccination card for newborns; SSC certificate for adults).',
      'Submit application and note the 15-digit Application Tracking Number.',
      'Pay the statutory fee (Within 45 days of birth: FREE; 46 days to 5 years: ৳25; Above 5 years: ৳50; Correction: ৳100).',
      'Visit the local Ward / Union Parishad office with original documents for registrar approval and collection.'
    ],
    stepsBn: [
      'অফিসিয়াল পোর্টাল bdris.gov.bd-এ প্রবেশ করুন এবং "জন্ম নিবন্ধন আবেদন" অপশন নির্বাচন করুন।',
      'সংশ্লিষ্ট ইউনিয়ন পরিষদ বা সিটি কর্পোরেশনের আঞ্চলিক/ওয়ার্ড কার্যালয় নির্বাচন করুন।',
      'বাংলা এবং ইংরেজি উভয় ভাষায় আবেদনকারীর নাম ও পিতামাতার তথ্য নির্ভুলভাবে পূরণ করুন।',
      'প্রয়োজনীয় প্রমাণাদি আপলোড করুন (নবজাতকের ক্ষেত্রে ইপিআই টিকা কার্ড বা হাসপাতালের ছাড়পত্র; প্রাপ্তবয়স্কদের ক্ষেত্রে শিক্ষাগত সনদ)।',
      'আবেদন সাবমিট করে ১৫ ডিজিটের অ্যাপ্লিকেশন ট্র্যাকিং নম্বরটি সংরক্ষণ ও প্রিন্ট করুন।',
      'নির্ধারিত ফি জমা দিন (জন্মের ৪৫ দিনের মধ্যে বিনামূল্যে; ৪৬ দিন থেকে ৫ বছর পর্যন্ত ২৫ টাকা; ৫ বছরের বেশি হলে ৫০ টাকা; তথ্য সংশোধন ১০০ টাকা)।',
      'কাগজপত্রের মূল কপিসহ সংশ্লিষ্ট কার্যালয়ে গিয়ে নিবন্ধকের স্বাক্ষরযুক্ত ডিজিটাল জন্ম সনদ সংগ্রহ করুন।'
    ],
    requiredDocumentsEn: [
      'EPI Immunization Card / Hospital Birth Slip (for children)',
      'Parents\' 17-digit online Birth Certificate and NID copies',
      'Educational certificate (PSC/JSC/SSC) or Medical Board certificate (for adults without birth proof)',
      'Holding Tax / Land Revenue receipt as address proof'
    ],
    requiredDocumentsBn: [
      'ইপিআই টিকাদান কার্ড বা হাসপাতালের জন্ম প্রত্যয়নপত্র (শিশুদের ক্ষেত্রে)',
      'পিতামাতার ১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন ও এনআইডি কপি',
      'প্রাপ্তবয়স্কদের ক্ষেত্রে পিএসসি/জেএসসি/এসএসসি সনদ বা মেডিকেল বোর্ড প্রত্যয়ন',
      'বাসার হোল্ডিং ট্যাক্স বা খাজনা রসিদের কপি'
    ],
    estimatedCostBdt: '৳0 to ৳50 (Official government fee)',
    estimatedProcessingTime: '3–7 working days after physical document verification',
    organization: 'Office of the Registrar General, Birth and Death Registration (BDRIS)',
    organizationBn: 'রেজিস্ট্রার জেনারেলের কার্যালয়, জন্ম ও মৃত্যু নিবন্ধন',
    location: 'Respective City Corporation Ward / Union Parishad Office',
    officialSourceUrl: 'https://bdris.gov.bd',
    officialPortalName: 'Birth and Death Registration Information System',
    lastVerifiedDate: '2026-02-10',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['birth certificate', 'bdris', 'jonmo nibondhon', 'digital birth cert', 'জন্ম নিবন্ধন'],
    keywords: ['jonmo nibondhon online', '17 digit birth certificate', 'birth certificate correction', 'bdris gov bd', 'জন্ম নিবন্ধন সংশোধন', 'অনলাইন জন্ম সনদ'],
    helpline: '02-55006870',
    importantWarnings: [
      'Never accept handwritten or non-digitized birth certificates; they are no longer accepted by passport or school authorities.',
      'Verify that the QR code on the certificate resolves directly to bdris.gov.bd.'
    ]
  },
  {
    id: 'tin-certificate-tax-return',
    titleEn: 'e-TIN Registration & Zero Tax Return (e-Return) Guide',
    titleBn: 'ই-টিআইএন খোলা ও ঘরে বসে শূন্য রিটার্ন (e-Return) দাখিল',
    category: 'government_documents',
    descriptionEn: 'How to register a 12-digit Taxpayer Identification Number (e-TIN) and submit individual income tax return online via NBR e-Return portal.',
    descriptionBn: 'জাতীয় রাজস্ব বোর্ডের (NBR) অফিসিয়াল ওয়েবসাইটে মাত্র ৫ মিনিটে ই-টিআইএন তৈরি এবং ঘরে বসেই অনলাইন ট্যাক্স রিটার্ন দাখিলের নির্দেশিকা।',
    stepsEn: [
      'For e-TIN: Visit secure.incometax.gov.bd and register with your mobile phone.',
      'Fill in your NID details; the system verifies with the Election Commission database and generates a 12-digit e-TIN instantly (100% Free).',
      'For Tax Return: Go to etaxnbr.gov.bd and register using your biometric SIM and e-TIN.',
      'Select assessment year and fill in income heads (Salary, House property, Business, or Nil income).',
      'Check asset/liability declaration (mandatory if total wealth exceeds threshold or owns motor vehicle/property).',
      'Review computed tax. If taxable income is below ৳3,50,000 (general limit) or ৳4,00,000 (female/senior), tax payable is Zero.',
      'Submit electronically and immediately download the system-generated Proof of Submission of Return (PSR) with QR code.'
    ],
    stepsBn: [
      'ই-টিআইএন তৈরি: secure.incometax.gov.bd-এ গিয়ে সচল মোবাইল নম্বর দিয়ে রেজিস্ট্রেশন করুন।',
      'জাতীয় পরিচয়পত্রের তথ্য দিলে স্বয়ংক্রিয়ভাবে নির্বাচন কমিশনের ডাটাবেস যাচাই করে তাৎক্ষণিক ১২ ডিজিটের সার্টিফিকেট পাবেন (সম্পূর্ণ বিনামূল্যে)।',
      'অনলাইন রিটার্ন দাখিল: etaxnbr.gov.bd-এ গিয়ে নিজের নামে নিবন্ধিত বায়োমেট্রিক সিম ও টিআইএন দিয়ে সাইন আপ করুন।',
      'করবর্ষ নির্বাচন করে আপনার আয়ের উৎস (বেতন, বাড়িভাড়া, ব্যবসা বা শূন্য আয়) পূরণ করুন।',
      'সম্পদ ও দায়ের বিবরণ দিন (গাড়ি, ফ্ল্যাট বা নির্ধারিত সীমার বেশি সম্পদ থাকলে প্রযোজ্য)।',
      'কর হিসাব যাচাই করুন। সাধারণ করমুক্ত সীমা ৩,৫০,০০০ টাকা (নারী ও সিনিয়র সিটিজেনদের জন্য ৪,০০,০০০ টাকা) এর নিচে হলে কর হবে শূন্য টাকা।',
      'অনলাইনে সাবমিট করে তাৎক্ষণিক কিউআর কোডযুক্ত রিটার্ন দাখিলের প্রমাণপত্র (PSR) ডাউনলোড করুন।'
    ],
    requiredDocumentsEn: [
      '12-digit e-TIN Certificate',
      'National ID Card (NID)',
      'Mobile SIM registered with your own NID for OTP verification',
      'Salary certificate / Bank statement of previous financial year (July 1 to June 30)',
      'Asset details (bank balances, DPS, savings certificates / Sanchayapatra)'
    ],
    requiredDocumentsBn: [
      '১২ ডিজিটের ই-টিআইএন সনদ',
      'জাতীয় পরিচয়পত্র (NID)',
      'আবেদনকারীর নিজের এনআইডিতে বায়োমেট্রিক করা সিম কার্ড',
      'ব্যাংক স্টেটমেন্ট ও বেতন সনদ (পূর্ববর্তী অর্থবছর: ১ জুলাই থেকে ৩০ জুন)',
      'সঞ্চয়পত্র, ডিপিএস বা অন্যান্য বিনিয়োগের রসিদ (কর রেয়াত পাওয়ার জন্য)'
    ],
    estimatedCostBdt: 'FREE (No government fees for registration or submission)',
    estimatedProcessingTime: 'Instant generation of PSR acknowledgement certificate',
    organization: 'National Board of Revenue (NBR)',
    organizationBn: 'জাতীয় রাজস্ব বোর্ড (এনবিআর)',
    location: 'Taxes Zones across Bangladesh & Online',
    officialSourceUrl: 'https://etaxnbr.gov.bd',
    officialPortalName: 'NBR e-Return Portal',
    lastVerifiedDate: '2026-02-12',
    expiryOrReviewDate: '2026-11-30',
    isVerified: true,
    status: 'active',
    tags: ['tin', 'tax return', 'nbr', 'zero return', 'psr', 'income tax', 'ট্যাক্স রিটার্ন', 'ই-টিআইএন'],
    keywords: ['etaxnbr', 'tin certificate online', 'zero tax return', 'psr bangladesh', 'shunno return', 'ট্যাক্স সার্টিফিকেট', 'আয়কর রিটার্ন'],
    helpline: '09612-717171 (NBR Tax Helpdesk)',
    importantWarnings: [
      'Holding a TIN makes annual tax return submission mandatory by law for most categories, even if your tax is zero.',
      'Proof of Submission of Return (PSR) is mandatory for bank loans, credit cards, municipal trade licenses, and car registration.'
    ]
  },
  {
    id: 'police-clearance-certificate',
    titleEn: 'Online Police Clearance Certificate (PCC) for Abroad',
    titleBn: 'অনলাইনে পুলিশ ক্লিয়ারেন্স সার্টিফিকেট (PCC) পাওয়ার নিয়ম',
    category: 'government_documents',
    descriptionEn: 'Step-by-step verified guide to apply for an official Bangladesh Police Clearance Certificate for visa, immigration, or foreign job purposes.',
    descriptionBn: 'বিদেশে উচ্চশিক্ষা, ভিসা বা চাকরির জন্য বাংলাদেশ পুলিশের অফিসিয়াল পোর্টাল থেকে পুলিশ ক্লিয়ারেন্স সার্টিফিকেট পাওয়ার নিয়ম।',
    stepsEn: [
      'Visit the official Bangladesh Police Clearance portal: pcc.police.gov.bd.',
      'Deposit the government fee of ৳500 via Automated Challan (A-Challan) or Sonali Bank treasury code 1-2211-0000-2031.',
      'Register with your mobile phone and scan/photocopy your valid Passport attested by a First Class Gazetted Officer or Notary.',
      'Enter permanent address matching your passport and temporary address where police verification will occur.',
      'Upload Challan slip and Passport image (pages with applicant photo and data).',
      'A local Special Branch (SB) or Thana officer will contact you for physical or telephonic address verification.',
      'Once verified and approved by the Superintendent of Police (SP) or Deputy Commissioner (DC), collect the certificate or receive it by post.'
    ],
    stepsBn: [
      'বাংলাদেশ পুলিশের অফিসিয়াল পোর্টাল pcc.police.gov.bd-এ প্রবেশ করুন।',
      'সরকারি ফি ৫০০ টাকা এ-চালানের মাধ্যমে বা সোনালী ব্যাংকের ১-২২১১-০০০০-২০৩১ কোডে ট্রেজারি চালান জমা দিন।',
      'পাসপোর্টের তথ্য ও পাতার সত্যায়িত কপি স্ক্যান করে প্রস্তুত রাখুন।',
      'আবেদনে পাসপোর্টের সাথে মিল রেখে স্থায়ী ঠিকানা ও বর্তমান ঠিকানার তথ্য দিন (যেখানে পুলিশ তদন্ত হবে)।',
      'চালান রসিদ ও পাসপোর্টের কপি আপলোড করে আবেদন সাবমিট করুন।',
      'সংশ্লিষ্ট থানা বা স্পেশাল ব্রাঞ্চের (SB) অফিসার ঠিকানায় গিয়ে তথ্য ও রেকর্ড যাচাই করবেন।',
      'এসপি বা উপ-কমিশনারের কার্যালয় কর্তৃক অনুমোদনের পর সার্টিফিকেট সংগ্রহ করুন বা ডাকযোগে গ্রহণ করুন।'
    ],
    requiredDocumentsEn: [
      'Valid Bangladesh Passport (minimum 3 months validity remaining)',
      'Government fee ৳500 Treasury Challan / A-Challan voucher',
      'National ID Card copy',
      'Ward Councilor / Union Parishad Chairman Citizenship Certificate (some police stations)'
    ],
    requiredDocumentsBn: [
      'বৈধ মূল পাসপোর্টের সত্যায়িত ফটোকপি (নূন্যতম ৩ মাস মেয়াদ থাকতে হবে)',
      '৫০০ টাকার সরকারি ট্রেজারি চালান বা এ-চালান কপি',
      'জাতীয় পরিচয়পত্রের ফটোকপি',
      'স্থানীয় কাউন্সিলর বা চেয়ারম্যানের নাগরিকত্ব সনদপত্র'
    ],
    estimatedCostBdt: '৳500 (Government fee strictly)',
    estimatedProcessingTime: '7 to 10 working days',
    organization: 'Bangladesh Police Headquarters',
    organizationBn: 'বাংলাদেশ পুলিশ',
    location: 'District Police Headquarters / DMP Special Branch',
    officialSourceUrl: 'https://pcc.police.gov.bd',
    officialPortalName: 'Bangladesh Police Clearance System',
    lastVerifiedDate: '2026-02-16',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['police clearance', 'pcc', 'visa requirements', 'bangladesh police', 'পুলিশ ক্লিয়ারেন্স'],
    keywords: ['police clearance fee', 'pcc online apply', 'police verification for visa', 'police clearance sonali bank', 'পুলিশ ভেরিফিকেশন'],
    helpline: '01713-373375 / 999',
    importantWarnings: [
      'Official fee is strictly ৳500. Do not pay unofficial "speed money" to field officers.',
      'Check online status frequently using the tracking token provided upon submission.'
    ]
  },
  {
    id: 'trade-license-city-corporation',
    titleEn: 'City Corporation & Union Parishad Trade License Guide',
    titleBn: 'ট্রেড লাইসেন্স আবেদন ও নবায়ন নির্দেশিকা',
    category: 'government_documents',
    descriptionEn: 'Official procedure to obtain an e-Trade license for physical shops, IT companies, and startups in Bangladesh without middleman extortion.',
    descriptionBn: 'দালালের সাহায্য ছাড়াই ঢাকা সিটি কর্পোরেশন বা ইউনিয়ন পরিষদ থেকে বৈধ ই-ট্রেড লাইসেন্স সংগ্রহ ও নবায়নের শতভাগ যাচাইকৃত ধাপ।',
    stepsEn: [
      'Visit the official e-Trade License portal: etradelicense.gov.bd (or respective City Corporation portal dncc.gov.bd / dscc.gov.bd).',
      'Create an account with your active mobile number and NID details.',
      'Select your business category (General Retail, IT/Software, Export/Import, Manufacturing, Contractor).',
      'Upload commercial tenancy contract on ৳300 stamp or ownership holding tax receipt of business premises.',
      'Upload proprietor passport photos and TIN certificate (12-digit e-TIN).',
      'Pay the statutory municipal fee plus 15% VAT online via bKash, card, or Sonali Bank challan.',
      'Download your verifiable QR-coded digital e-Trade License instantly or within 3 working days.'
    ],
    stepsBn: [
      'অফিসিয়াল ই-ট্রেড লাইসেন্স পোর্টাল etradelicense.gov.bd অথবা সংশ্লিষ্ট সিটি কর্পোরেশনের পোর্টালে প্রবেশ করুন।',
      'সচল মোবাইল নম্বর ও এনআইডি তথ্য দিয়ে নিবন্ধন সম্পন্ন করুন।',
      'ব্যবসার ধরন ও প্রকৃতি নির্বাচন করুন (আইটি/সফটওয়্যার, সাধারণ ব্যবসা, রপ্তানি/আমদানি, দোকান ইত্যাদি)।',
      '৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে দোকানের ভাড়া চুক্তিপত্র বা নিজস্ব জায়গার হোল্ডিং ট্যাক্স রসিদ আপলোড করুন।',
      'মালিকের পাসপোর্ট সাইজ ছবি ও ১২ ডিজিটের ই-টিআইএন (e-TIN) আপলোড করুন।',
      'বিকাশ, কার্ড বা ব্যাংকের মাধ্যমে নির্ধারিত সরকারি ফি ও ১৫% ভ্যাট পরিশোধ করুন।',
      'অনলাইন থেকে তাৎক্ষণিক কিউআর কোডযুক্ত ডিজিটাল ই-ট্রেড লাইসেন্স ডাউনলোড ও প্রিন্ট করুন।'
    ],
    requiredDocumentsEn: [
      'National ID Card (NID) of owner/proprietor',
      'Recent passport-size color photographs (3 copies)',
      'Rental deed on ৳300 non-judicial stamp or premises ownership holding tax receipt',
      '12-digit e-TIN Certificate',
      'Memorandum & Articles of Association + Form XII (for Limited Companies only)'
    ],
    requiredDocumentsBn: [
      'মালিকের মূল এনআইডি কার্ডের কপি',
      '৩ কপি পাসপোর্ট সাইজ রঙিন ছবি',
      '৩০০ টাকার স্ট্যাম্পে অফিস/দোকানের ভাড়ার চুক্তিপত্র বা নিজস্ব জায়গার হোল্ডিং ট্যাক্স রসিদ',
      '১২ ডিজিটের ই-টিআইএন (e-TIN) সার্টিফিকেট',
      'লিমিটেড কোম্পানির ক্ষেত্রে মেমোরেন্ডাম ও ফর্ম ১২ (Form XII)'
    ],
    estimatedCostBdt: '৳2,000–৳5,000 (Based on business category & capital)',
    estimatedProcessingTime: '3–5 working days (Instant for basic categories)',
    organization: 'Local Government Division / City Corporation',
    organizationBn: 'স্থানীয় সরকার বিভাগ / সিটি কর্পোরেশন ও পৌরসভা',
    location: 'DNCC / DSCC Zonal Offices, Municipalities & Union Parishads',
    officialSourceUrl: 'https://etradelicense.gov.bd',
    officialPortalName: 'Bangladesh e-Trade License System',
    lastVerifiedDate: '2026-02-18',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['trade license', 'business permit', 'dncc', 'dscc', 'etradelicense', 'ট্রেড লাইসেন্স'],
    keywords: ['trade license kivabe pabo', 'trade license fee bangladesh', 'etrade apply', 'shop license', 'ট্রেড লাইসেন্স ফি', 'নতুন ট্রেড লাইসেন্স'],
    helpline: '16106 / 333',
    importantWarnings: [
      'Do not hire touts or brokers outside zonal offices; all applications and fee calculations are transparently handled online.',
      'Trade licenses must be renewed annually before September 30 to avoid a 10% late surcharge.'
    ]
  },
  {
    id: 'land-mutation-namzari',
    titleEn: 'e-Namzari Land Mutation & Digital Khatian Verification',
    titleBn: 'ই-নামজারি ও ডিজিটাল খতিয়ান প্রাপ্তির সঠিক নিয়ম',
    category: 'government_documents',
    descriptionEn: 'Official government workflow for electronic land mutation (e-Namzari) through the Ministry of Land without paying unauthorized speed money.',
    descriptionBn: 'ভূমি মন্ত্রণালয়ের অফিসিয়াল ই-নামজারি পোর্টালের মাধ্যমে অতিরিক্ত অর্থ বা দালালের ঝামেলা ছাড়াই জমির নামজারি ও জমাখারিজের সঠিক নিয়ম।',
    stepsEn: [
      'Visit the national land portal: mutation.land.gov.bd.',
      'Log in with your National ID (NID) and verified mobile number.',
      'Select Upazila/Circle and Mouza corresponding to your deed (দলিল).',
      'Upload registered deed (সাব-কবলা দলিল), previous Khatian (RS/CS/BS/City Khatian), and land development tax (Khajna) receipt.',
      'Pay the mandatory ৳70 court and notice fee via bKash, Nagad, or debit card.',
      'Attend the hearing at the Assistant Commissioner (Land) AC Land office on the SMS-assigned date with original deeds.',
      'Pay remaining statutory mutation fees (৳1,000 record correction + ৳100 DCR fee) online upon hearing approval.',
      'Download the official e-Namzari Khatian and DCR slip directly from the portal.'
    ],
    stepsBn: [
      'জাতীয় ভূমি সেবা পোর্টাল mutation.land.gov.bd-এ প্রবেশ করুন।',
      'এনআইডি ও সচল মোবাইল নম্বর দিয়ে সিটিজেন অ্যাকাউন্টে লগইন করুন।',
      'দলিল অনুযায়ী বিভাগ, জেলা, উপজেলা এবং সংশ্লিষ্ট মৌজা নির্বাচন করুন।',
      'সাব-কবলা মূল দলিলের স্ক্যান কপি, পূর্বের খতিয়ান (আরএস/বিএস) এবং দাখিলা (খাজনা) রসিদ আপলোড করুন।',
      'কোর্ট ফি ও নোটিশ ফি বাবদ মোট ৭০ টাকা অনলাইন বা মোবাইল ব্যাংকিংয়ে পরিশোধ করুন।',
      'এসএমএসে প্রাপ্ত শুনানির তারিখে মূল কাগজপত্র নিয়ে সংশ্লিষ্ট সহকারী কমিশনার (ভূমি) এসিল্যান্ড অফিসে হাজির হন।',
      'শুনানিতে অনুমোদন পেলে রেকর্ড সংশোধন ফি ১,০০০ টাকা ও ডিসিআর ফি ১০০ টাকা (মোট ১,১০০ টাকা) অনলাইনে পরিশোধ করুন।',
      'অনলাইন থেকে তাৎক্ষণিক কিউআর কোডযুক্ত ই-নামজারি খতিয়ান ও ডিসিআর রসিদ ডাউনলোড করুন।'
    ],
    requiredDocumentsEn: [
      'Original registered Land Purchase Deed (দলিল)',
      'Previous CS / SA / RS / BS / City Jarip Khatian copy',
      'Up-to-date Land Development Tax (Khajna) payment Dakhila',
      'NID copy of the applicant and heirs (ওয়ারিশান সনদ if inherited)',
      'Land sketch map showing boundary (নকশা / ট্রেস ম্যাপ)'
    ],
    requiredDocumentsBn: [
      'মূল নিবন্ধিত দলিলের কপি বা সার্টিফাইড কপি',
      'পূর্ববর্তী মালিকের নামে থাকা আরএস/বিএস/সিটি জরিপ খতিয়ানের কপি',
      'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
      'আবেদনকারীর মূল জাতীয় পরিচয়পত্র ও ওয়ারিশ সনদের কপি (উত্তরাধিকার সূত্রে হলে)',
      'জমির সীমানা চিহ্নিত হাত নকশা'
    ],
    estimatedCostBdt: '৳1,170 (Court fee ৳20 + Notice ৳50 + Record ৳1000 + DCR ৳100 strictly)',
    estimatedProcessingTime: '28 working days (Metropolitan: 7–12 days)',
    organization: 'Ministry of Land (ভূমি মন্ত্রণালয়)',
    organizationBn: 'ভূমি মন্ত্রণালয় / সহকারী কমিশনার (ভূমি) কার্যালয়',
    location: 'Upazila Land Offices (AC Land) across 64 Districts',
    officialSourceUrl: 'https://mutation.land.gov.bd',
    officialPortalName: 'Ministry of Land Citizen Portal',
    lastVerifiedDate: '2026-02-15',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['namzari', 'land mutation', 'khatian', 'ac land', 'jomi', 'ই-নামজারি'],
    keywords: ['namzari koto taka', 'jomi namzari rules', 'khatian check online', 'ac land hearing', 'জমির নামজারি', 'খারিজ ফি'],
    helpline: '16122 (Land Hotline)',
    importantWarnings: [
      'The government statutory fee is strictly ৳1,170. Demand a digital DCR receipt for any fee paid.',
      'Never hand original deeds to unofficial "Muhuri" or brokers outside the AC Land office.'
    ]
  },
  {
    id: 'metro-rail-mrt-pass',
    titleEn: 'Dhaka Metro Rail (MRT Line 6) MRT Pass & Rapid Pass Guide',
    titleBn: 'ঢাকা মেট্রোরেল এমআরটি পাস ও র‍্যাপিড পাস সংগ্রহ নির্দেশিকা',
    category: 'general',
    descriptionEn: 'Complete commuter guide to buying, registering, and recharging MRT Pass and Rapid Pass for Dhaka Metro Rail Line 6 with a 10% fare discount.',
    descriptionBn: 'ঢাকা মেট্রোরেল লাইন ৬-এ ১০% ভাড়ার ছাড়সহ এমআরটি পাস ও র‍্যাপিড পাস সংগ্রহ, কার্ড নিবন্ধন ও রিচার্জের সহজ নিয়ম।',
    stepsEn: [
      'Download and print the MRT Pass Registration Form from dmtcl.gov.bd or collect it from the station customer service counter.',
      'Fill in your Name, NID / Birth Certificate number, and active mobile number.',
      'Visit any Metro station (e.g. Uttara North, Mirpur 10, Farmgate, Secretariat, Motijheel) during counter hours (07:15 AM to 07:45 PM).',
      'Submit the form with ৳500 (৳200 refundable card security deposit + ৳300 initial travel balance).',
      'Collect your personalized contactless smart card within 2 minutes at the counter.',
      'Tap in and tap out at station gates to automatically enjoy a 10% rebate on regular single-journey fares.',
      'Recharge at automatic Ticket Vending Machines (TVM) inside stations using cash or debit card.'
    ],
    stepsBn: [
      'dmtcl.gov.bd ওয়েবসাইট থেকে এমআরটি পাস ফরম ডাউনলোড করে প্রিন্ট করুন অথবা যেকোনো স্টেশনের কাস্টমার সার্ভিস থেকে সংগ্রহ করুন।',
      'ফরমে নিজের নাম, এনআইডি বা জন্ম নিবন্ধন নম্বর এবং সচল মোবাইল নম্বর লিখুন।',
      'সকাল ৭:১৫ থেকে সন্ধ্যা ৭:৪৫ এর মধ্যে যেকোনো মেট্রো স্টেশনের কাস্টমার সার্ভিস কাউন্টারে উপস্থিত হন।',
      'ফরমসহ ৫০০ টাকা জমা দিন (২০০ টাকা ফেরতযোগ্য জামানত + ৩০০ টাকা প্রাথমিক ভ্রমণ ব্যালেন্স)।',
      'কাউন্টার থেকে ২ মিনিটের মধ্যে সক্রিয় এমআরটি পাস সংগ্রহ করুন।',
      'মেট্রোর গেটে ট্যাপ করে প্রবেশ ও প্রস্থান করুন এবং প্রতিটি ভ্রমণে স্বয়ংক্রিয় ১০% ভাড়ার ছাড় উপভোগ করুন।',
      'স্টেশনের টিকিট ভেন্ডিং মেশিনে (TVM) নগদ টাকা দিয়ে ১০০ টাকা থেকে যেকোনো অঙ্কে রিচার্জ করুন।'
    ],
    requiredDocumentsEn: [
      'DMTCL MRT Pass Registration Form (filled)',
      'National ID (NID) Card or 17-digit Birth Certificate number',
      'Active mobile number for card recovery in case of loss'
    ],
    requiredDocumentsBn: [
      'পূরণকৃত এমআরটি পাস নিবন্ধন ফরম',
      'জাতীয় পরিচয়পত্র (NID) বা ১৭ ডিজিটের জন্ম নিবন্ধন নম্বর',
      'কার্ড হারিয়ে গেলে ব্যালেন্স পুনরুদ্ধারের জন্য সচল মোবাইল নম্বর'
    ],
    estimatedCostBdt: '৳500 (৳200 refundable deposit + ৳300 initial balance; 10% fare discount)',
    estimatedProcessingTime: 'Instant (2–5 minutes over-the-counter)',
    organization: 'Dhaka Mass Transit Company Limited (DMTCL)',
    organizationBn: 'ঢাকা ম্যাস ট্রানজিট কোম্পানি লিমিটেড (ডিএমটিসিএল)',
    location: 'All MRT Line 6 Stations (Uttara North to Motijheel / Kamalapur)',
    officialSourceUrl: 'https://dmtcl.gov.bd',
    officialPortalName: 'DMTCL Official Portal',
    lastVerifiedDate: '2026-02-20',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['metro rail', 'mrt pass', 'rapid pass', 'dmtcl', 'dhaka metro', 'মেট্রোরেল'],
    keywords: ['mrt pass kothay pabo', 'metro rail card price', 'rapid pass registration', 'mrt pass recharge', 'মেট্রোরেল কার্ড', 'এমআরটি পাস'],
    helpline: '16107 / 02-55138671',
    importantWarnings: [
      'Register your MRT Pass with your genuine NID so that any lost card balance can be reissued onto a new card.',
      'Maximum card recharge balance limit is ৳10,000 at any one time.'
    ]
  },
  {
    id: 'utility-electricity-water-gas',
    titleEn: 'Electricity, WASA Water & Titas Gas Services Guide',
    titleBn: 'বিদ্যুৎ, ওয়াসা পানির বিল ও তিতাস গ্যাস সেবা নির্দেশিকা',
    category: 'general',
    descriptionEn: 'Civic navigator for prepaid smart meter recharge, bill dispute resolution, and new domestic connections across DESCO, DPDC, WASA, and Titas.',
    descriptionBn: 'ডেসকো, ডিপিডিসি বিদ্যুৎ, ঢাকা ওয়াসা পানির বিল ও তিতাস গ্যাস সংক্রান্ত সমস্যা সমাধান ও নিরাপদ বিল পেমেন্ট নির্দেশিকা।',
    stepsEn: [
      'Identify your utility bill provider by your consumer number (DESCO for North Dhaka, DPDC for South/Central Dhaka, REB for peri-urban areas, Dhaka WASA for water).',
      'Pay monthly bills securely through official MFS apps (bKash/Nagad/Rocket) under "Bill Pay" without convenience charges.',
      'For Smart Pre-Paid electricity meters, recharge your 11/12-digit Customer Number online via desco.org.bd or dpdc.org.bd.',
      'If the meter displays error codes (e.g. Tamper, Low Battery, Overload), contact your area substation emergency breakdown van immediately.',
      'For WASA water quality issues or pipeline leakage, file a ticket via WASA hotline 16162.',
      'For gas leak emergency, call Titas Gas control room 16496 directly.'
    ],
    stepsBn: [
      'বিলের কাগজ দেখে আপনার সরবরাহকারী সংস্থা চিহ্নিত করুন (উত্তর ঢাকায় ডেসকো, দক্ষিণ ও মধ্য ঢাকায় ডিপিডিসি, ঢাকা ওয়াসা পানির জন্য)।',
      'বিকাশ, নগদ বা রকেটের "বিল পে" অপশন থেকে সরাসরি কনজিউমার নম্বর দিয়ে সরকারি বিদ্যুৎ ও পানির বিল পরিশোধ করুন।',
      'স্মার্ট প্রিপেইড মিটারে টাকা শেষ হলে desco.org.bd বা dpdc.org.bd থেকে তাৎক্ষণিক ২০ ডিজিটের রিচার্জ টোকেন সংগ্রহ করুন।',
      'মিটারে কোনো ত্রুটি বা ট্যাম্পার দেখা দিলে সরাসরি সাবস্টেশন কমপ্লেইন সেন্টারে যোগাযোগ করুন।',
      'ওয়াসার পানির লাইনে সমস্যা বা পাইপ ফেটে গেলে ওয়াসা হেল্পলাইন ১৬১৬২-তে সরাসরি টিকিট খুলুন।',
      'গ্যাস লাইনে লিক বা গন্ধ পেলে তিতাস গ্যাস জরুরি কন্ট্রোল রুম ১৬৪৯৬ নম্বরে অবিলম্বে কল দিন।'
    ],
    requiredDocumentsEn: [
      'Customer / Consumer Number (from previous utility bill)',
      'Smart Pre-Paid Meter Card / Account Number',
      'Active mobile phone number for recharge token SMS'
    ],
    requiredDocumentsBn: [
      'পূর্ববর্তী বিদ্যুৎ বা পানির বিলের গ্রাহক বা কনজিউমার নম্বর',
      'প্রিপেইড মিটারের স্মার্ট কার্ড নম্বর',
      'টোকেন এসএমএস পাওয়ার জন্য সচল মোবাইল নম্বর'
    ],
    estimatedCostBdt: 'Official statutory consumption tariff (No surcharge via official portals)',
    estimatedProcessingTime: 'Instant online bill payment; 2–4 hours for emergency repairs',
    organization: 'DESCO / DPDC / Dhaka WASA / Titas Gas',
    organizationBn: 'ডেসকো / ডিপিডিসি / ঢাকা ওয়াসা / তিতাস গ্যাস ট্রান্সমিশন',
    location: 'Zonal & Substation Offices across Dhaka City',
    officialSourceUrl: 'https://desco.org.bd',
    officialPortalName: 'Dhaka Electric Supply Company Portal',
    lastVerifiedDate: '2026-02-17',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['utility bills', 'desco', 'dpdc', 'wasa', 'titas gas', 'বিদ্যুৎ বিল'],
    keywords: ['desco prepaid recharge', 'dpdc bill pay', 'wasa bill check', 'titas gas complaint', 'বিদ্যুৎ বিল বিকাশ', 'ওয়াসা পানির বিল'],
    helpline: '16120 (DESCO) / 16116 (DPDC) / 16162 (WASA) / 16496 (Titas)',
    importantWarnings: [
      'Never pay unmetered line fees or illegal meter tampering charges to third-party electricians.',
      'Always keep the SMS transaction ID of your prepaid electricity recharge until tokens are entered on the keypad.'
    ]
  },
  {
    id: 'bkash-nagad-pin-recovery',
    titleEn: 'bKash / Nagad MFS PIN Self-Reset & Account Recovery',
    titleBn: 'বিকাশ ও নগদ পিন রিসেট এবং একাউন্ট আনলক নির্দেশিকা',
    category: 'general',
    descriptionEn: 'Step-by-step verified self-service steps to reset a forgotten PIN or unlock a temporarily blocked bKash or Nagad mobile banking account.',
    descriptionBn: 'নিজের মোবাইল থেকেই দালাল ছাড়া বিকাশ বা নগদের ভুলে যাওয়া গোপন পিন (PIN) রিসেট ও একাউন্ট আনলক করার অফিসিয়াল নিয়ম।',
    stepsEn: [
      'Dial *247# from your registered SIM card (or open the official bKash App and tap "Reset PIN").',
      'Select Option "Reset PIN" from the USSD dialer menu.',
      'Enter your National ID (NID) or Passport number that was used during account registration.',
      'Enter the 4-digit Birth Year (e.g. 1995) as recorded on your NID.',
      'Select any of your last 10 transactions within the past 30 days (e.g., Send Money, Mobile Recharge, Payment, or select "No Transaction").',
      'Enter the exact transaction amount if a transaction occurred.',
      'Receive a temporary 5-digit security code via SMS from bKash.',
      'Dial *247# again within 72 hours, enter the temporary code, and set a new 5-digit PIN (ensure it is not consecutive like 12345 or repeating like 11111).'
    ],
    stepsBn: [
      'রেজিস্টার্ড সিম থেকে *২৪৭# ডায়াল করুন (অথবা বিকাশ অ্যাপে গিয়ে "পিন ভুলে গেছেন?" অপশনে ট্যাপ করুন)।',
      'মেনু থেকে "Reset PIN" অপশনটি সিলেক্ট করুন।',
      'একাউন্ট খোলার সময় যে জাতীয় পরিচয়পত্র (NID) নম্বর দেওয়া হয়েছিল তা সঠিকভাবে লিখুন।',
      'আপনার এনআইডিতে উল্লেখিত ৪ ডিজিটের জন্ম সাল (যেমন: ১৯৯৫) ইনপুট দিন।',
      'গত ৩০ দিনের সর্বশেষ ১০টি লেনদেনের মধ্য থেকে যেকোনো একটি লেনদেনের ধরন নির্বাচন করুন (অথবা "No Transaction")।',
      'লেনদেনের সঠিক টাকার অঙ্ক প্রদান করুন।',
      'বিকাশ থেকে এসএমএসে একটি ৫ ডিজিটের অস্থায়ী টেম্পোরারি কোড পাঠানো হবে।',
      '*২৪৭# ডায়াল করে অস্থায়ী কোডটি দিন এবং নিজের পছন্দের নতুন ৫ ডিজিটের গোপন পিন সেট করুন।'
    ],
    requiredDocumentsEn: [
      'Registered SIM card inserted in mobile phone',
      'National ID (NID) number used for account registration',
      'Accurate birth year matching NID',
      'Record of recent transactions (last 30 days)'
    ],
    requiredDocumentsBn: [
      'রেজিস্টার্ড সিম কার্ডটি মোবাইলে সচল থাকতে হবে',
      'একাউন্টে ব্যবহৃত জাতীয় পরিচয়পত্র নম্বর',
      'এনআইডির সাথে মিল থাকা সঠিক জন্ম সাল',
      'বিগত ৩০ দিনের লেনদেনের তথ্য বা হিসাব'
    ],
    estimatedCostBdt: '100% Free (No service charge)',
    estimatedProcessingTime: 'Instant (Under 5 minutes)',
    organization: 'bKash Limited & Bangladesh Post Office (Nagad)',
    organizationBn: 'বিকাশ লিমিটেড ও ডাক বিভাগ (নগদ)',
    location: 'Customer Service Points & 24/7 Digital Self-Service',
    officialSourceUrl: 'https://bkash.com',
    officialPortalName: 'bKash Official Customer Desk',
    lastVerifiedDate: '2026-02-19',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['bkash', 'nagad', 'pin reset', 'mfs', 'account blocked', 'বিকাশ পিন রিসেট'],
    keywords: ['bkash pin vule gesi', 'nagad pin reset', 'bkash account lock', 'mfs helpline', 'বিকাশ পিন ভুলে গেছি', 'নগদ পিন উদ্ধার'],
    helpline: '16247 (bKash) / 16167 (Nagad) / 16216 (Rocket)',
    importantWarnings: [
      'NEVER share your PIN, OTP, or temporary SMS code with ANYONE, even if someone claims to call from bKash head office or Bangladesh Police.',
      'bKash or Nagad customer support representatives will NEVER ask for your secret PIN or OTP.'
    ]
  },
  {
    id: 'consumer-rights-dncrp',
    titleEn: 'National Consumer Rights Protection (DNCRP) Complaint Guide',
    titleBn: 'জাতীয় ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ দায়েরের নিয়ম',
    category: 'general',
    descriptionEn: 'How to file an official consumer rights grievance against overcharging, expired goods, fake products, or deceptive marketing and claim a 25% reward.',
    descriptionBn: 'অতিরিক্ত দাম, মেয়াদোত্তীর্ণ ওষুধ, ভেজাল পণ্য বা প্রতারণামূলক সেবার বিরুদ্ধে ভোক্তা অধিকারে অভিযোগ করে আদায়কৃত জরিমানার ২৫% পুরস্কার পাওয়ার নিয়ম।',
    stepsEn: [
      'Retain your purchase proof: Keep the cash memo, printed receipt, digital invoice, or delivery voucher.',
      'Take clear photographs of the product package, manufacturing/expiry date, batch number, and visible defect/overcharging.',
      'Draft a written complaint (or download the official DNCRP complaint form from dncrp.portal.gov.bd).',
      'Send the complaint within 30 days of purchase via email to ncrp@dncrp.gov.bd or via the official mobile app "Bhokta Odhikar".',
      'You can also lodge an immediate complaint by calling the 24/7 National Consumer Helpline: 16121.',
      'Attend the formal hearing when summoned by the Deputy Director / Assistant Director of DNCRP with original cash memos.',
      'Upon hearing confirmation and penalty imposition on the dishonest merchant, the complainant legally receives 25% of the total fine collected in cash!'
    ],
    stepsBn: [
      'প্রমাণ সংরক্ষণ করুন: ক্রয়ের ক্যাশ মেমো, ইনভয়েস বা ডেলিভারি রসিদ কোনোভাবেই ফেলে দেবেন না।',
      'পণ্য, প্যাকেটের গায়ে মুদ্রিত সর্বোচ্চ খুচরা মূল্য (MRP), মেয়াদোত্তীর্ণ তারিখ ও অতিরিক্ত মূল্যের স্পষ্ট ছবি তুলুন।',
      'dncrp.portal.gov.bd থেকে অভিযোগের নির্ধারিত ফরম পূরণ করুন অথবা সাদা কাগজে সুস্পষ্ট বিবরণ লিখুন।',
      'ঘটনার ৩০ দিনের মধ্যে ncrp@dncrp.gov.bd ইমেইলে অথবা "ভোক্তা অধিকার" অ্যাপের মাধ্যমে দাখিল করুন।',
      'তাৎক্ষণিক সহায়তার জন্য জাতীয় ভোক্তা অধিকার হটলাইন ১৬১২১ নম্বরে কল করে ঘটনা রেকর্ড করুন।',
      'শুনানির তারিখে মূল ক্যাশ মেমোসহ জাতীয় ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরের কার্যালয়ে উপস্থিত হন।',
      'অভিযোগ প্রমাণিত হয়ে ব্যবসায়ীকে জরিমানা করা হলে আইন অনুযায়ী আদায়কৃত জরিমানার ২৫% অর্থ তাৎক্ষণিক অভিযোগকারীকে নগদ পুরস্কার দেওয়া হবে!'
    ],
    requiredDocumentsEn: [
      'Cash memo / Tax invoice / Electronic receipt of transaction',
      'Photographs of the product, price tag, expiry date, or false advertisement',
      'National ID Card (NID) copy of the complainant',
      'Contact address and phone number of the errant shop/merchant'
    ],
    requiredDocumentsBn: [
      'দোকানের মূল ক্যাশ মেমো বা অনলাইন অর্ডারের ইনভয়েস রসিদ',
      'পণ্যের স্পষ্ট ছবি, মোড়কের গায়ের মূল্য ও মেয়াদোত্তীর্ণ তারিখের প্রমাণ',
      'অভিযোগকারীর জাতীয় পরিচয়পত্রের ফটোকপি',
      'অভিযুক্ত প্রতিষ্ঠান বা দোকানের সঠিক ঠিকানা ও যোগাযোগ নম্বর'
    ],
    estimatedCostBdt: 'Free of Cost (Complainant receives 25% of recovered fine as government reward)',
    estimatedProcessingTime: '7 to 15 working days for hearing & settlement',
    organization: 'Directorate of National Consumer Rights Protection (DNCRP)',
    organizationBn: 'জাতীয় ভোক্তা অধিকার সংরক্ষণ অধিদপ্তর',
    location: 'Head Office: 1 Karwan Bazar, Dhaka & District Offices across 64 districts',
    officialSourceUrl: 'https://dncrp.portal.gov.bd',
    officialPortalName: 'National Consumer Rights Citizen Portal',
    lastVerifiedDate: '2026-02-14',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['consumer rights', 'dncrp', 'fake product', 'overpricing', 'ভোক্তা অধিকার'],
    keywords: ['bhokta odhikar helpline', 'dncrp complaint email', 'fake medicine report', 'overcharging grocery complaint', 'ভোক্তা অধিকার অভিযোগ', '১৬১২১ হটলাইন'],
    helpline: '16121 (Consumer Helpdesk)',
    importantWarnings: [
      'The complaint must be lodged within 30 days of purchase to remain legally valid under Consumer Rights Protection Act 2009.',
      'Always demand and preserve a valid printed cash memo when buying medicines, groceries, or electronics.'
    ]
  },
  {
    id: 'dhaka-housing-rent-guide',
    titleEn: 'Dhaka Residential Flat Rental & Area Selection Navigator',
    titleBn: 'ঢাকায় এলাকাভিত্তিক বাসা ও ফ্ল্যাট ভাড়া নির্দেশিকা',
    category: 'housing_rent',
    descriptionEn: 'Actionable guide for finding verified flats in Mirpur, Uttara, Dhanmondi, Bashundhara, verifying tenancy terms, and DMP police registration.',
    descriptionBn: 'মিরপুর, উত্তরা, ধানমন্ডি ও বসুন্ধরায় বাজেট অনুযায়ী নিরাপদ বাসা খোঁজা, গ্যাস-পানি যাচাই ও ডিএমপি ভাড়াটিয়া ফরম পূরণের সঠিক নির্দেশিকা।',
    stepsEn: [
      'Determine your commuting corridor: Opt for Mirpur, Pallabi, or Uttara for direct Metro Rail Line 6 access; Dhanmondi or Mohammadpur for central access; Bashundhara or Badda for corporate hubs.',
      'Budget realistic monthly expenses: Allocate rent at no more than 35% of household income (account for service charge ৳2,500–৳5,000 extra for lift/generator/guard).',
      'Inspect physically in the afternoon: Test domestic tap water pressure, check cylinder vs prepaid gas pipeline, and verify mobile network reception inside rooms.',
      'Inspect electricity meters: Check whether it has an independent smart digital sub-meter or separate DESCO/DPDC prepaid card.',
      'Execute Tenancy Agreement on ৳300 non-judicial stamp with exact advance security deposit terms (standard is 1 to 2 months rent max).',
      'Complete mandatory DMP Citizen Information Management System (CIMS) Tenant Verification Form and submit to your local police outpost.'
    ],
    stepsBn: [
      'যাতায়াত সুবিধা নির্ধারণ করুন: মেট্রোরেল লাইন ৬ সুবিধার জন্য মিরপুর, পল্লবী বা উত্তরা; সেন্ট্রাল ঢাকার জন্য ধানমন্ডি বা মোহাম্মদপুর; গুলশান-বনানীর জন্য বসুন্ধরা বা বাড্ডা বেছে নিন।',
      'বাজেট পরিকল্পনা: মোট মাসিক আয়ের ৩৫% এর বেশি বাসা ভাড়ায় ব্যয় করবেন না (লিফট, সিকিউরিটি ও সার্ভিস চার্জ বাবদ ২৫০০–৫০০০ টাকা অতিরিক্ত হিসাব রাখুন)।',
      'সরাসরি দুপুর বা বিকেলে ফ্ল্যাট পরিদর্শন করুন: লাইনের পানির প্রেশার ও গন্ধ, সিলিন্ডার নাকি প্রিপেইড তিতাস গ্যাস, এবং রুমের ভেতর মোবাইল নেটওয়ার্ক চেক করুন।',
      'বিদ্যুৎ মিটার যাচাই করুন: ফ্ল্যাটের জন্য নিজস্ব একক মিটার রয়েছে কিনা নাকি সাব-মিটার দিয়ে ইউনিট ভাগ করা হয় তা নিশ্চিত হন।',
      '৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে বাড়ি ভাড়ার চুক্তিপত্র সম্পাদন করুন (অগ্রিম জামানত হিসেবে ১ থেকে সর্বোচ্চ ২ মাসের ভাড়া দেওয়া আদর্শ)।',
      'ঢাকা মেট্রোপলিটন পুলিশের (DMP) নির্ধারিত ভাড়াটিয়া তথ্য ফরম (CIMS) পূরণ করে স্থানীয় থানায় বা বিট পুলিশিং অফিসে জমা দিন।'
    ],
    requiredDocumentsEn: [
      'National ID Card (NID) copies of tenant and all adult family members',
      'Passport size photos of tenant and family members (2 copies each)',
      'Tenancy agreement signed on ৳300 non-judicial stamp',
      'DMP Tenant Information Management (CIMS) Form'
    ],
    requiredDocumentsBn: [
      'ভাড়াটিয়া এবং প্রাপ্তবয়স্ক পরিবারের সদস্যদের মূল এনআইডি কার্ডের কপি',
      'পরিবারের সদস্যদের ২ কপি করে পাসপোর্ট সাইজ ছবি',
      '৩০০ টাকার স্ট্যাম্পে বাড়ি ভাড়ার স্বাক্ষরিত চুক্তিপত্র',
      'ডিএমপি নির্ধারিত সিআইএমএস (CIMS) ভাড়াটিয়া তথ্য ফরম'
    ],
    estimatedCostBdt: '৳15,000–৳35,000 avg. (No police fee; 1–2 months rent advance deposit)',
    estimatedProcessingTime: '1 to 2 weeks for neighborhood search & lease execution',
    organization: 'Dhaka Metropolitan Police (CIMS Tenant Registry)',
    organizationBn: 'ঢাকা মেট্রোপলিটন পুলিশ (সিআইএমএস ভাড়াটিয়া তথ্যভাণ্ডার)',
    location: 'Respective Thanas & Police Outposts across DMP Areas',
    officialSourceUrl: 'https://dmp.gov.bd',
    officialPortalName: 'DMP Citizen Information Management System',
    lastVerifiedDate: '2026-02-18',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['housing', 'basa vara', 'mirpur flat', 'cims dmp', 'to-let', 'বাসা ভাড়া'],
    keywords: ['mirpur flat rent 20k', 'uttara bachelor flat', 'basa vara agreement', 'dmp tenant form', 'মিরপুরে বাসা ভাড়া', 'ভাড়াটিয়া ফরম'],
    helpline: '999 (National Emergency) / Local DMP Thana',
    importantWarnings: [
      'Never transfer booking money through bKash to unverified Facebook to-let posts before physically viewing the flat and meeting the real landlord.',
      'Ensure the tenancy contract explicitly specifies the advance refund conditions upon vacating.'
    ]
  },
  {
    id: 'career-it-bcs-job-roadmap',
    titleEn: 'Bangladesh Career Roadmap, Resume Optimization & BCS Guidance',
    titleBn: 'চাকরি প্রস্তুতি, সিভি তৈরি ও ক্যারিয়ার রোডম্যাপ',
    category: 'jobs_career',
    descriptionEn: 'Structured roadmaps for entry-level Software Engineers, Data Analysts, Bank Officers, and BCS Cadre aspirants in Bangladesh.',
    descriptionBn: 'সফটওয়্যার ডেভেলপমেন্ট, ডেটা সায়েন্স, ব্যাংক জব এবং বিসিএস পরীক্ষার কার্যকর প্রস্তুতি ও আন্তর্জাতিক মানের সিভি তৈরির সম্পূর্ণ রূপরেখা।',
    stepsEn: [
      'Define your primary target career track: Private Tech / Software Industry, Commercial Banking & Corporate, or BPSC Cadre Services.',
      'Format your Resume into a single-page ATS-friendly layout: Quantify outcomes (e.g., "Reduced latency by 35%"), eliminate photos/marital status for multinational roles.',
      'For Tech/Software roles: Build 2 production-grade deployed projects on GitHub, master Core Data Structures/Algorithms, and practice live mock interviews.',
      'For BCS Cadre: Systematically cover BPSC Preliminary syllabus (Bangla Literature, English Grammar, Math & Mental Ability, General Knowledge, ICT) and practice past 10 years papers.',
      'For Bank Jobs: Focus intensively on speed Math, English comprehension, and current financial affairs.',
      'Create and optimize an active LinkedIn profile connecting with engineering managers and HR directors across Bangladesh.'
    ],
    stepsBn: [
      'নির্দিষ্ট ক্যারিয়ার ট্র্যাক বেছে নিন: আইটি/সফটওয়্যার কোম্পানি, বাণিজ্যিক ব্যাংক ও করপোরেট প্রতিষ্ঠান, অথবা বিসিএস ও সরকারি ক্যাডার।',
      'সিভি আধুনিক ও এটিএস-ফ্রেন্ডলি (ATS-friendly) করুন: অপ্রয়োজনীয় ছবি বা ব্যক্তিগত তথ্য বাদ দিয়ে কাজের অর্জনকে সংখ্যার মাধ্যমে তুলে ধরুন।',
      'সফটওয়্যার ডেভেলপারদের জন্য: গিটহাবে লাইভ ডিপ্লয় করা কমপক্ষে ২টি প্রজেক্ট রাখুন, ডেটা স্ট্রাকচার ও প্রবলেম সলভিং অনুশীলন করুন।',
      'বিসিএস প্রস্তুতির জন্য: বিগত ১০ বছরের প্রশ্ন সমাধান করুন, বাংলা সাহিত্য, ইংরেজি গ্রামার, সাধারণ জ্ঞান ও আইসিটি সিলেবাস ধরে রুটিন তৈরি করুন।',
      'ব্যাংক জবের জন্য: দ্রুত সমাধানযোগ্য গণিত, ইংরেজি কম্প্রিহেনশন এবং সাম্প্রতিক ব্যাংকিং টার্মিনোলজি নিয়মিত চর্চা করুন।',
      'লিঙ্কডইন প্রোফাইল প্রফেশনালভাবে সাজান এবং সংশ্লিষ্ট ইন্ডাস্ট্রির সিনিয়র ও এইচআরদের সাথে কানেক্ট করুন।'
    ],
    requiredDocumentsEn: [
      'One-page modern single-column Resume (PDF format)',
      'Certified Academic Transcripts and Graduation Certificates',
      'GitHub repository portfolio and live project URLs (for tech roles)',
      'NID and digital passport photos for BPSC / Bank recruitment portals'
    ],
    requiredDocumentsBn: [
      'এক পাতার আধুনিক পিডিএফ সিভি (Resume)',
      'স্নাতক ও শিক্ষাগত যোগ্যতার মার্কশিট ও মূল সনদপত্রের কপি',
      'প্রযুক্তি পেশার জন্য গিটহাব প্রোফাইল ও লাইভ প্রজেক্ট লিংক',
      'সরকারি বা ব্যাংক আবেদনের জন্য এনআইডি ও ডিজিটাল ছবি'
    ],
    estimatedCostBdt: 'Free guidance (Statutory exam fee ৳700 for BCS / ৳200 for Govt Banks)',
    estimatedProcessingTime: '3 to 6 months dedicated preparation milestone',
    organization: 'BDJobs & Bangladesh Public Service Commission (BPSC)',
    organizationBn: 'বিডিজবস ও বাংলাদেশ সরকারি কর্ম কমিশন (বিপিএসসি)',
    location: 'Agargaon, Dhaka (BPSC) & Online Platforms',
    officialSourceUrl: 'https://bdjobs.com',
    officialPortalName: 'BDJobs Career Hub & BPSC Portal',
    lastVerifiedDate: '2026-02-18',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['career', 'jobs', 'bcs preparation', 'resume', 'software engineer', 'চাকরি'],
    keywords: ['fresher job roadmap', 'software developer salary dhaka', 'bcs preliminary tips', 'cv format bangladesh', 'চাকরি প্রস্তুতি', 'বিসিএস সিলেবাস'],
    helpline: '16107 (National Skills Helpdesk)',
    importantWarnings: [
      'Beware of fake job recruiters demanding upfront "training fees", "medical checkup fees", or bKash security deposits.',
      'Legitimate corporate employers and BPSC never demand informal mobile banking payments from candidates.'
    ]
  },
  {
    id: 'cyber-scam-fraud-defense',
    titleEn: 'Cyber Fraud, Fake Job & bKash Advance-Fee Scam Defense',
    titleBn: 'অনলাইন প্রতারণা, ভুয়া চাকরির অফার ও বিকাশ ফাঁদ প্রতিরোধ',
    category: 'safety_scam',
    descriptionEn: 'Immediate counter-measures when encountering online financial extortion, fake Telegram task scams, lottery bait, or unauthorized bKash transfers.',
    descriptionBn: 'টেলিগ্রাম টাস্ক প্রতারণা, বিকাশ অগ্রিম ফি চাওয়া ভুয়া চাকরির অফার এবং অনলাইন ব্ল্যাকমেইল থেকে আইনি সুরক্ষার সম্পূর্ণ ধাপ।',
    stepsEn: [
      'Cease all communication immediately: Do not send additional money under any threats or promises of refund.',
      'Preserve digital forensic evidence: Take full-screen screenshots of chats, WhatsApp/Telegram phone numbers, bKash transaction IDs, and URL links.',
      'Call bKash helpline 16247 or Nagad 16167 immediately to report the recipient fraud wallet number for temporary freeze.',
      'Contact CID Cyber Police Center Hotline immediately at 01320000888 (24/7 WhatsApp & Hotline).',
      'Visit your local Police Station (Thana) and file an immediate General Diary (GD) or Cyber Crime Case with printed chat logs and transaction statements.',
      'Email digital copies to the Police Cyber Crime Investigation Division at cidsm@police.gov.bd.'
    ],
    stepsBn: [
      'তাৎক্ষণিক সব ধরণের যোগাযোগ বন্ধ করুন: অতিরিক্ত টাকা ফেরত পাওয়ার আশায় বা হুমকির মুখে আর কোনো টাকা পাঠাবেন না।',
      'প্রমাণ সংরক্ষণ করুন: চ্যাটের সম্পূর্ণ স্ক্রিনশট, প্রতারকের মোবাইল নম্বর, বিকাশ/নগদ ট্রানজেকশন আইডি (TrxID) এবং ফেসবুক পেজের লিংক সেভ রাখুন।',
      'অবিলম্বে বিকাশ হেল্পলাইন ১৬২৪৭ বা নগদ ১৬১৬৭ নম্বরে কল করে প্রতারক একাউন্টটির বিরুদ্ধে অভিযোগ দিয়ে সাময়িক ফ্রিজ করার আবেদন করুন।',
      'সিআইডি সাইবার পুলিশ সেন্টারের হটলাইন ০১৩২-০০০০৮৮৮ নম্বরে কল করে দ্রুত সহায়তা চান।',
      'নিকটস্থ থানায় গিয়ে সংরক্ষিত স্ক্রিনশট ও ব্যাংক/বিকাশ স্টেটমেন্টসহ সাধারণ ডায়েরি (GD) বা সাইবার মামলা দায়ের করুন।',
      'প্রমাণাদি ইমেইল করুন সিআইডির সাইবার সেলে: cidsm@police.gov.bd।'
    ],
    requiredDocumentsEn: [
      'Printed full-page screenshots of conversations and fraudulent offer posts',
      'MFS (bKash/Nagad/Bank) Statement with TrxID, sender & recipient numbers',
      'National ID Card (NID) copy of complainant',
      'Police GD slip from local Thana'
    ],
    requiredDocumentsBn: [
      'মেসেঞ্জার, হোয়াটসঅ্যাপ বা টেলিগ্রাম চ্যাটের প্রিন্ট করা স্ক্রিনশট',
      'বিকাশ বা ব্যাংকের ট্রানজেকশন স্টেটমেন্ট (যাতে ট্রানজেকশন আইডি স্পষ্টভাবে দৃশ্যমান)',
      'অভিযোগকারীর জাতীয় পরিচয়পত্রের ফটোকপি',
      'থানার সাধারণ ডায়েরি (GD) স্লিপ'
    ],
    estimatedCostBdt: 'Free of Cost (Police Cyber Assistance & GD filing are free)',
    estimatedProcessingTime: 'Immediate emergency alert; 3–7 days for forensic tracking',
    organization: 'CID Cyber Police Center & DMP Cyber Crime Division',
    organizationBn: 'সিআইডি সাইবার পুলিশ সেন্টার / ডিএমপি সাইবার ক্রাইম ইনভেস্টিগেশন',
    location: 'CID Headquarters, Malibagh, Dhaka & All Thanas',
    officialSourceUrl: 'https://cid.police.gov.bd',
    officialPortalName: 'CID Cyber Police Official Desk',
    lastVerifiedDate: '2026-02-19',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['scam', 'fraud', 'cid cyber police', 'bkash fraud', 'telegram scam', 'প্রতারণা প্রতিরোধ'],
    keywords: ['bkash taka firot pawar upay', 'cyber crime complaint hotline', 'fake job offer scam', 'online fraud gd', 'সাইবার ক্রাইম হেল্পলাইন', 'প্রতারণা মামলা'],
    helpline: '01320000888 (CID Cyber) / 999 (National Emergency)',
    importantWarnings: [
      'Police officers never demand money or processing fees to investigate a cybercrime complaint.',
      'No genuine company asks for a "training fee" or "uniform cost" via bKash before hiring.'
    ]
  },
  {
    id: 'emergency-medical-999',
    titleEn: 'National Emergency 999, Hospitals & Blood Bank Network',
    titleBn: 'জাতীয় জরুরি সেবা ৯৯৯, হাসপাতাল ও ব্লাড ব্যাংক নেটওয়ার্ক',
    category: 'emergency_health',
    descriptionEn: 'Rapid guidance for immediate medical emergencies, government specialized hospitals in Dhaka, burn institute, and blood donor coordination.',
    descriptionBn: 'ঢাকা মেডিকেল, পিজি হাসপাতাল, বার্ন ইনস্টিটিউট ও জরুরি অ্যাম্বুলেন্স এবং রক্তের প্রয়োজনে দ্রুততম যোগাযোগ নির্দেশিকা।',
    stepsEn: [
      'Call 999 immediately from ANY mobile phone or landline (100% Toll-Free, even with zero balance) for Police, Ambulance, or Fire Service.',
      'State clearly to the 999 operator: (1) Your exact location and landmark, (2) Nature of emergency (accident, cardiac, burn, pregnancy, fire), (3) Number of victims.',
      'For severe Burn & Plastic surgery emergencies: Head directly to Sheikh Hasina National Institute of Burn and Plastic Surgery (SHNIBPS), Chankharpul, Dhaka (Emergency: 02-223381666).',
      'For Trauma & Road Accidents: Head to National Institute of Traumatology and Orthopaedic Rehabilitation (NITOR/Pangu Hospital), Shyamoli, Dhaka.',
      'For Heart Attack: Go directly to National Institute of Cardiovascular Diseases (NICVD), Sher-e-Bangla Nagar.',
      'For emergency blood donors: Contact voluntary networks (Sandhani, Quantum Foundation 01714010869, Badhan).'
    ],
    stepsBn: [
      'যেকোনো মোবাইল থেকে ব্যালেন্স ছাড়াই অবিলম্বে ৯৯৯ (999) নম্বরে কল দিন (পুলিশ, অ্যাম্বুলেন্স বা ফায়ার সার্ভিসের জন্য সম্পূর্ণ ফ্রি)।',
      'অপারেটরকে স্পষ্টভাবে জানান: (১) আপনার সুনির্দিষ্ট অবস্থান ও ল্যান্ডমার্ক, (২) দুর্ঘটনার ধরন (হার্ট অ্যাটাক, সড়ক দুর্ঘটনা, আগুন, বার্ন), (৩) কতজন মানুষ আহত।',
      'অগ্নিদগ্ধ বা বার্ন রোগীদের ক্ষেত্রে: সরাসরি শেখ হাসিনা জাতীয় বার্ন ও প্লাস্টিক সার্জারি ইনস্টিটিউট, চাঁনখারপুল, ঢাকায় নিয়ে যান (জরুরি: ০২-২২৩৩৮১৬৬৬)।',
      'হাড় ভাঙা বা সড়ক দুর্ঘটনার ক্ষেত্রে: সরাসরি পঙ্গু হাসপাতাল (নিটোর), শ্যামলী, ঢাকায় নিয়ে যান।',
      'হার্ট অ্যাটাকের ক্ষেত্রে: জাতীয় হৃদরোগ ইনস্টিটিউট (এনআইসিভিডি), শেরেবাংলা নগর, ঢাকায় নিয়ে যান।',
      'জরুরি রক্তের জন্য: কোয়ান্টাম ফাউন্ডেশন (০১৭১৪০১০৮৬৯), সন্ধানী অথবা বাঁধন ব্লাড ডোনার ক্লাবে যোগাযোগ করুন।'
    ],
    requiredDocumentsEn: [
      'Patient NID or Birth Certificate (can be submitted after emergency admission)',
      'Previous medical prescriptions, ECG, or ongoing medications list if available'
    ],
    requiredDocumentsBn: [
      'রোগীর এনআইডি বা জন্ম সনদ (ভর্তির জরুরি মুহূর্তে না থাকলেও চিকিৎসা শুরু করা বাধ্যতামূলক)',
      'রোগীর পূর্বের প্রেসক্রিপশন ও ওষুধের তালিকা (যদি থাকে)'
    ],
    estimatedCostBdt: '999 is 100% Free; Govt emergency ticket strictly ৳10–৳20',
    estimatedProcessingTime: 'Immediate 24/7 triage at Emergency Casualty Department',
    organization: 'National Emergency Service 999 & Directorate General of Health Services (DGHS)',
    organizationBn: 'জাতীয় জরুরি সেবা ৯৯৯ ও স্বাস্থ্য অধিদপ্তর (ডিজিএইচএস)',
    location: 'Government Specialized Hospitals across Dhaka & Divisional HQs',
    officialSourceUrl: 'https://dghs.gov.bd',
    officialPortalName: 'Directorate General of Health Services (DGHS)',
    lastVerifiedDate: '2026-02-20',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['emergency', '999', 'hospital', 'ambulance', 'blood donor', 'জরুরি সেবা'],
    keywords: ['emergency ambulance number dhaka', 'burn institute address', 'blood donor hotline', 'dghs helpline', 'জরুরি অ্যাম্বুলেন্স', 'রক্তের সন্ধান'],
    helpline: '999 (National Emergency) / 16263 (DGHS Health Helpdesk)',
    importantWarnings: [
      'Under Supreme Court directives, no hospital (public or private) can refuse emergency first aid to road accident victims.',
      'Emergency admission tickets at government medical college hospitals are strictly ৳10.'
    ]
  },
  {
    id: 'personal-finance-sanchayapatra',
    titleEn: 'Household Budget, 50/30/20 Rule & Sanchayapatra Savings Guide',
    titleBn: 'পারিবারিক মাসিক বাজেট ও জাতীয় সঞ্চয়পত্র ক্রয় নির্দেশিকা',
    category: 'personal_finance',
    descriptionEn: 'Complete financial blueprint for managing inflation in Bangladesh, setting up emergency funds, and investing in government National Savings Certificates.',
    descriptionBn: 'দ্রব্যমূল্যের ঊর্ধ্বগতির মধ্যে সংসার খরচ নিয়ন্ত্রণ, ৩ মাসের জরুরি তহবিল গঠন ও বাংলাদেশ ব্যাংকের সঞ্চয়পত্র কেনার সম্পূর্ণ নিয়ম।',
    stepsEn: [
      'Apply the 50/30/20 budget framework: 50% for Essentials (Rent, Groceries, Utilities), 30% for Lifestyle & Discretionary, and 20% for Strict Savings & Investments.',
      'Build a 3-Month Emergency Fund in a high-yield liquid savings account before making long-term investments.',
      'Review Government National Savings Certificates (সঞ্চয়পত্র): Options include Family Savings Certificate (পরিবার সঞ্চয়পত্র for women), Pensioner, and 5-Year Bangladesh Sanchayapatra.',
      'Obtain an active 12-digit e-TIN Certificate (mandatory for purchasing savings certificates exceeding ৳2,00,000).',
      'Open a Bank Account matching your NID name at Bangladesh Bank, Sonali Bank, or National Savings Bureau offices.',
      'Submit the application form with NID, e-TIN, and Nominee documents. Monthly profit will be auto-disbursed into your bank account via BEFTN/NPSB.'
    ],
    stepsBn: [
      '৫০/৩০/২০ নিয়ম প্রয়োগ করুন: মোট আয়ের ৫০% অপরিহার্য খরচ (বাসা ভাড়া, বাজার, বিল), ৩০% জীবনযাত্রার অন্যান্য খরচ, এবং কমপক্ষে ২০% ভবিষ্যৎ সঞ্চয়ে বরাদ্দ রাখুন।',
      'যেকোনো বিনিয়োগের আগে কমপক্ষে ৩ মাসের সংসার খরচের সমান অর্থ একটি জরুরি তহবিল (Emergency Fund) হিসেবে আলাদা সঞ্চয়ী হিসাবে জমা রাখুন।',
      'সরকারি জাতীয় সঞ্চয়পত্র যাচাই করুন: নারীদের জন্য পরিবার সঞ্চয়পত্র, অবসরপ্রাপ্তদের জন্য পেনশনার সঞ্চয়পত্র এবং সাধারণের জন্য ৫ বছর মেয়াদি বাংলাদেশ সঞ্চয়পত্র।',
      '১২ ডিজিটের ই-টিআইএন (e-TIN) সনদ প্রস্তুত রাখুন (২ লক্ষ টাকার বেশি সঞ্চয়পত্র কিনতে ই-টিআইএন ও রিটার্ন দাখিলের প্রমাণপত্র বাধ্যতামূলক)।',
      'বাংলাদেশ ব্যাংক, সোনালী ব্যাংক বা জাতীয় সঞ্চয় ব্যুরোর কাউন্টারে নিজের এনআইডি, ছবি ও নমিনির তথ্যসহ ফরম জমা দিন।',
      'মাসিক মুনাফা সরাসরি বিইএফটিএন (BEFTN) এর মাধ্যমে আপনার নিজস্ব ব্যাংক হিসাবে স্বয়ংক্রিয়ভাবে জমা হবে।'
    ],
    requiredDocumentsEn: [
      'National ID Card (NID) copy of buyer and nominee',
      '2 passport-size color photographs of buyer, 1 photo of nominee',
      '12-digit e-TIN Certificate and Income Tax Return submission receipt (PSR)',
      'MICR Cheque leaf or Bank Statement showing active Account and Routing Number'
    ],
    requiredDocumentsBn: [
      'ক্রেতা ও নমিনির জাতীয় পরিচয়পত্রের (NID) স্পষ্ট ফটোকপি',
      'ক্রেতার ২ কপি এবং নমিনির ১ কপি পাসপোর্ট সাইজ সত্যায়িত রঙিন ছবি',
      '১২ ডিজিটের ই-টিআইএন ও আয়কর রিটার্ন দাখিলের প্রমাণপত্র (PSR)',
      'সংশ্লিষ্ট ব্যাংকের চেকের পাতা বা ব্যাংক হিসাবের বিবরণী (রাউটিং নম্বরসহ)'
    ],
    estimatedCostBdt: 'Zero application fee (Profit subject to 5%–10% statutory tax at source)',
    estimatedProcessingTime: 'Same day over-the-counter application processing',
    organization: 'Department of National Savings & Bangladesh Bank',
    organizationBn: 'জাতীয় সঞ্চয় অধিদপ্তর ও বাংলাদেশ ব্যাংক',
    location: 'National Savings Bureaus, Bangladesh Bank Offices, and Commercial Banks',
    officialSourceUrl: 'https://sanchayapatra.gov.bd',
    officialPortalName: 'National Savings Online Management System',
    lastVerifiedDate: '2026-02-19',
    expiryOrReviewDate: '2026-12-31',
    isVerified: true,
    status: 'active',
    tags: ['sanchayapatra', 'savings', 'budget', 'personal finance', 'bangladesh bank', 'সঞ্চয়পত্র'],
    keywords: ['poribar sanchayapatra profit rate', 'sanchayapatra rules 2026', 'monthly budget calculator dhaka', 'tin certificate for sanchayapatra', 'সঞ্চয়পত্র মুনাফার হার', 'পারিবারিক বাজেট'],
    helpline: '16236 (Bangladesh Bank Helpline)',
    importantWarnings: [
      'Savings certificates have an individual investment ceiling (e.g. ৳45 Lakh for Family Savings Certificate).',
      'All profits are electronically transferred to bank accounts — never pay cash to agents or third parties.'
    ]
  }
];
