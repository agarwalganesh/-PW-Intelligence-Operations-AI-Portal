const VERTICALS_DATA = {
  "jee-neet": {
    name: "JEE/NEET/Foundation (Online Flagship)",
    overview: {
      text: "The flagship digital-first academic prep engine of Physics Wallah, delivering high-volume, low-cost online coaching for JEE and NEET. In FY26, the online segment generated ₹1,954 crore (39% YoY growth) with over 4.87 million transacting users, acting as the primary gateway into the PW brand.",
      createdWhy: "To shatter the geographic and economic monopolies of legacy coaching hubs (like Kota) that charged exorbitant fees, locking out brilliant students from middle- and lower-income classes.",
      launched: "Officially structured as a tech platform in 2020 (expanding Alakh Pandey's original 2016 YouTube channel).",
      problemSolved: "Accessibility of high-quality JEE/NEET prep in Tier-3/4 cities and rural India at 90% lower costs than offline competitors."
    },
    leadership: {
      leadName: "Alakh Pandey (CEO) & Prateek Maheshwari (Co-Founder)",
      roles: "Executive management directing content delivery, product engineering, and business growth strategy.",
      stakeholders: "Abhishek Mishra (Chief Academic Officer), Content Managers, and Academic Heads of Department (HODs)."
    },
    targetAudience: {
      customers: "Class 11, Class 12, and dropper/repeater students aiming for engineering (IITs, NITs) or medical (AIIMS, govt medical colleges) admissions.",
      segments: "Tier-2/3/4 town residents, Hindi & regional-language medium learners, budget-conscious households.",
      persona: {
        name: "Ritesh Kumar",
        age: "17 (Class 12 - Engineering Aspirant)",
        profile: "Lives in Chapra, Bihar. Father is a local merchant earning INR 25,000/month. Hindi-medium background.",
        story: "Cannot afford the INR 1.5 Lakh annual fees of physical coaching or hostels. Studies from a mobile phone using PW online live classes at night, relying on digital DPPs for practice."
      }
    },
    productsServices: {
      onlineOfferings: [
        "Lakshya Batches (Class 12 board + JEE/NEET preparation)",
        "Arjuna Batches (Class 11 JEE/NEET foundation prep)",
        "Yakeen Batches (Dedicated droppers/repeaters batch)",
        "Fastrack Crash Courses (Revision courses launching 3 months before exams)"
      ],
      offlineOfferings: [
        "PW Study Material kits (printed books, worksheets delivered home)",
        "PW Test Series physical booklet distributions"
      ],
      premiumServices: [
        "PW Saarthi (1-on-1 personal mentorship, daily doubt resolutions, and customized study planner)",
        "Premium Alakh AI subscription (interactive AI Guru voice solver and backlog manager)"
      ]
    },
    customerAcquisition: {
      organic: [
        "Massive network of Physics Wallah YouTube Channels (over 50M combined subscribers) offering free high-quality lessons",
        "Viral educational content and motivational shorts by Alakh Pandey",
        "Peer-to-peer student recommendations"
      ],
      paid: [
        "Targeted Meta and Google campaigns targeting board results periods",
        "YouTube In-Feed ads for crash courses"
      ],
      referral: [
        "In-app 'Refer a Friend' programs offering discount coins for PW books store"
      ],
      offline: [
        "School counseling seminars in regional schools",
        "Banner listings near regional school zones"
      ]
    },
    leadGenProcess: {
      text: "PW utilizes a massive organic inbound engine that funnels users from free YouTube videos directly into the PW App, supplemented by national level talent tests.",
      forms: ["PW Scholarship cum Admission Test (PWSAT) registration pages", "In-app banner forms for free batch access"],
      campaigns: ["'Board Exam Booster' free lecture series", "YouTube live launch events for new batch seasons"],
      webEvents: ["Pre-exam mock paper solving live streams", "Strategy webinars hosted by top HODs on YouTube"]
    },
    salesCounselling: {
      questions: [
        "What is your target exam year and current preparation status?",
        "Are you preparing for board exams alongside competitive tests?",
        "What is your language preference (English, Hindi, or Hinglish)?",
        "What is your daily study allowance (hours and devices)?"
      ],
      recommendations: "If the student has strong fundamentals but needs revision, recommend the 'Yakeen' dropper batch. If they need personal attention, suggest bundling 'PW Saarthi'.",
      objections: [
        { obj: "Can online preparation match offline coaching intensity?", ans: "Address by showing the PW rank holders list, live doubt engine logs, and daily planner discipline features." },
        { obj: "Internet connection is unstable in our town.", ans: "Highlight the PW app offline download mode that lets students pre-save lectures at low bandwidth." }
      ]
    },
    conversionFunnel: {
      stages: [
        { name: "YouTube Viewer / App Installer", value: 10000, conversion: "100%" },
        { name: "Registered App User (Lead)", value: 4500, conversion: "45%" },
        { name: "Active Batch Trial User (Qualified Lead)", value: 2000, conversion: "44.4%" },
        { name: "Interested Checkout User (Interested Lead)", value: 800, conversion: "40%" },
        { name: "Paid Batch Subscriber (Customer)", value: 400, conversion: "50%" }
      ],
      challenges: [
        "High initial bounce rates in the PW App due to low-end Android device lag.",
        "Drop-off between trial batch lectures and checkout page due to online payment failures in rural areas."
      ]
    },
    revenueModel: {
      streams: [
        "Online course subscription fees (single batch pricing model)",
        "PW Books and printed study materials sales",
        "PW Saarthi premium mentor add-ons"
      ],
      pricingModel: "Affordable flat-rate batch pricing (INR 2,500 - INR 4,500 per year) rather than subscription models. High-volume monetization.",
      upsell: [
        "Promoting PW Saarthi mentoring during checkout (add-on of INR 5,000/year)",
        "Cross-promoting PW Vidyapeeth (offline) to high-performing online test takers"
      ]
    },
    operations: {
      teams: [
        "Academic Delivery: Faculty, HODs, Content Writers, and Video Quality Control.",
        "Technology Team: Video streaming architects, app developers, and Alakh AI engineers.",
        "Customer Support: Query resolution, chat, and call center teams."
      ],
      workflows: [
        "Daily schedule: Faculty delivers live lecture -> Homework uploaded -> DPP solutions generated -> AI Doubt engine populates.",
        "Weekly testing loop: Sunday mocks -> Auto checking -> Error analysis dashboard published on app."
      ],
      processes: [
        "New teacher onboarding and lecture trial validation.",
        "DPP error checking and curriculum alignment controls."
      ]
    },
    studentSuccess: {
      postPurchase: "Immediate onboarding wizard in-app, setting up study timetables, profiling academic baselines, and assigning default doubt batches.",
      retention: [
        "Push notification reminders on missing live classes",
        "Gamified progress streaks and reward coins inside the PW App"
      ],
      engagement: [
        "Live interactive quizzes within video streams",
        "Interactive doubt forums (Alakh AI Smart Doubt Engine)"
      ],
      escalations: [
        "Technical streaming errors routed to instant live support chat",
        "Teacher speed feedback flags: automatically alerts HODs if ratings drop below 4.2 stars"
      ]
    },
    dataGenerated: {
      lead: ["Source (YouTube channel ID, referral)", "Target Exam (JEE or NEET)", "Language preference", "Location (Tier-2/3/4 city classification)"],
      sales: ["Batch purchase ID", "Promo codes used", "Payment gateway log", "Up-sell add-on attachment flags"],
      customer: ["Mobile number", "Parent contact number", "Academic board (CBSE, state boards)"],
      learning: ["Average video watch duration", "Quiz accuracy scores", "Number of doubts posted to Alakh AI", "DPP completion status"],
      financial: ["Daily Gross Merchandise Value (GMV)", "Refund requests log", "Instalment clearance history"],
      operational: ["Live stream concurrency counts", "Video packet drop rates", "Teacher rating trends"]
    },
    kpisMetrics: {
      marketing: [
        "YouTube to App Install Conversion Rate (Target: >8%)",
        "App Store Search Ranking position (Target: #1 in education)",
        "Organic Customer Acquisition Cost (CAC) (Target: < INR 150)"
      ],
      sales: [
        "Batch conversion rate (Target: >10% of active app users)",
        "Average Order Value (AOV) (Target: INR 3,800)",
        "PW Saarthi cross-sell attachment rate (Target: 8%)"
      ],
      operations: [
        "Live stream uptime latency (Target: 99.9%)",
        "DPP publishing timeline adherence (Target: 100%)",
        "Average doubt response time (Target: < 30 seconds)"
      ],
      success: [
        "Monthly Active Users (MAU) retention rate (Target: >75%)",
        "Batch completion rate (Target: >60% of lectures watched)",
        "Student Net Promoter Score (NPS) (Target: >78)"
      ],
      business: [
        "Total Annual Recurring-like Revenue (ARR)",
        "EBITDA margins for online vertical (Target: >35%)",
        "Customer Lifetime Value (LTV) (Target: INR 8,000)"
      ]
    },
    challenges: {
      marketing: "Rising acquisition cost on digital platforms during peak seasons and heavy competition from legacy online portals.",
      sales: "Low ticket size requires high conversion volumes to sustain corporate operations.",
      operations: "Managing streaming infrastructure at peak scale (100k+ concurrent students) during major exam revisions.",
      retention: "Student distraction and drop-off in online study setups, lacking physical supervision.",
      scalability: "Ensuring uniform teaching quality as the pool of HODs and teachers scales to meet language diversity."
    },
    aiOpportunities: [
      {
        dept: "Marketing",
        current: "Manual video editing of YouTube lectures to generate daily highlights, short forms, and promo summaries.",
        opportunity: "Deploy AI Video Highlight Extractor to auto-detect viral hooks, key concepts, and motivational clips from lecture archives.",
        timeSavings: "90% reduction in editor processing time.",
        costSavings: "Saves INR 3 Lakhs/month in studio editor overhead.",
        impact: "Increases daily short-form publishing cadence by 5x, expanding organic inbound channels."
      },
      {
        dept: "Sales & Counselling",
        current: "Counsellors call all leads sequentially, wasting time on dead numbers and uninterested students.",
        opportunity: "Implement Predictive Lead Scoring Engine using in-app telemetry (free content consumed, test attempts) to rank warm leads.",
        timeSavings: "Reduces manual outbound call volume by 45%.",
        costSavings: "Optimizes call-center operations, saving INR 8 Lakhs/month.",
        impact: "Increases conversions by 25% by focusing on high-intent candidates."
      },
      {
        dept: "Counselling",
        current: "WhatsApp support relies on manual agent replies, leading to 2-hour wait times for simple course queries.",
        opportunity: "Launch a Conversational AI WhatsApp Counselor that assesses student profiles and recommends ideal batches.",
        timeSavings: "Resolves 80% of routine inquiries instantly.",
        costSavings: "Reduces agent staffing requirements by 50%.",
        impact: "Secures 24/7 coverage, eliminating lead leakage during late-night hours."
      },
      {
        dept: "Operations",
        current: "Manual review of lecture streaming logs to detect lag, buffering patterns, and dropouts.",
        opportunity: "Use Real-time Streaming Quality AI to monitor data drops and automatically route delivery paths via dynamic CDNs.",
        timeSavings: "Instant detection (from 15 mins down to milliseconds).",
        costSavings: "Saves cloud bandwidth costs by 15%.",
        impact: "Ensures buffering-free live lectures for students in low-bandwidth regions."
      },
      {
        dept: "Student Success",
        current: "Mentors manually message students who fall behind on their lectures to help them draft backlogs schedules.",
        opportunity: "Integrate 'Sahayak AI Planner' which tracks missed classes and auto-creates customized backlog recovery schedules.",
        timeSavings: "Reduces mentor follow-up burden by 70%.",
        costSavings: "Cuts down operational mentor headcount costs.",
        impact: "Boosts overall batch completion rates by 18%."
      },
      {
        dept: "Academics",
        current: "Teachers spend days writing mock test questions and checking curriculum compliance manually.",
        opportunity: "Utilize AI Question Generator to draft balanced, multi-tier mock tests aligned with historical NTA exam structures.",
        timeSavings: "Saves 4 hours per test layout.",
        costSavings: "Reduces subject-matter expert contract costs by 30%.",
        impact: "Allows scaling weekly mock test offerings across infinite language variations."
      },
      {
        dept: "Technology",
        current: "Server allocation is manually scaled based on historical class schedules, causing occasional capacity crashes.",
        opportunity: "Deploy Predictive Streaming Resource Allocator to scale server containers automatically based on real-time activity trends.",
        timeSavings: "Fully automated, 0 human intervention.",
        costSavings: "Reduces server idle-run costs by 22%.",
        impact: "Prevents app crashes during high-volume sessions (e.g., JEE results days)."
      }
    ],
    aiProjects: [
      { num: "01", title: "Alakh AI WhatsApp Counsellor", desc: "A multilingual WhatsApp assistant that automates student profile assessments, suggests target batches, and provides direct payment checkout links.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "02", title: "Smart Lead Prioritization Engine", desc: "Machine learning classifier analyzing in-app student telemetry (free class viewing duration, mock test completions) to rank high-conversion leads for sales teams.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "03", title: "Alakh AI Guru (24/7 Academic Tutor)", desc: "Conversational doubt solver integrated into the PW App that explains math/physics concepts using simple analogies and voice notes.", impactBadge: "High Impact", effortBadge: "High Effort" },
      { num: "04", title: "Sahayak Backlog Recovery Planner", desc: "Algorithmic planner that monitors student absences and designs dynamic catch-up programs, scheduling micro-sessions to fit student schedules.", impactBadge: "Medium Impact", effortBadge: "Low Effort" },
      { num: "05", title: "AI Video Highlights & Chaptering", desc: "Auto-segments lectures into searchable chapters and extracts high-energy concepts to publish as organic YouTube videos.", impactBadge: "Medium Impact", effortBadge: "Low Effort" },
      { num: "06", title: "Dynamic Bandwidth Optimization Engine", desc: "Compression AI that downscales streaming bitrates dynamically based on local student network drops without degrading text legibility on blackboards.", impactBadge: "High Impact", effortBadge: "High Effort" },
      { num: "07", title: "Automated Multilingual Dubbing", desc: "AI voice translation tool that converts Hindi lectures into regional languages (Telugu, Tamil, Bengali) while matching teacher vocal profiles.", impactBadge: "High Impact", effortBadge: "High Effort" },
      { num: "08", title: "AI Mock Test Architect", desc: "Generates custom test papers based on a student's personal weak chapters, tracking historical performance to maximize improvement.", impactBadge: "Medium Impact", effortBadge: "Medium Effort" },
      { num: "09", title: "Teacher Performance Quality Audit AI", desc: "Speech-to-text and sentiment analysis model auditing lecture recordings for compliance, pacing, tone, and student chat engagement.", impactBadge: "Medium Impact", effortBadge: "Medium Effort" },
      { num: "10", title: "Predictive Drop-Out Early Warning System", desc: "Calculates student drop-out risks based on continuous app absences and poor quiz scores, triggering automatic notifications to parents.", impactBadge: "High Impact", effortBadge: "Medium Effort" }
    ],
    interactions: {
      marketing: "Feeds organic app installs into the pipeline. Marketing uses student success stories from JEE/NEET results to drive organic brand visibility.",
      sales: "Receives qualified warm leads from app signups. Sales feeds batch feedback back to marketing.",
      counselling: "Works directly with sales to address course mismatch queries. Counsellors guide students who need customized batch pathways.",
      ops: "Interfaces with academic delivery teams to coordinate batch start times and schedule printed material shipping.",
      tech: "Powers the entire online delivery system, ensuring zero-lag streaming, Alakh AI accessibility, and payments stability.",
      success: "Addresses student complaints after purchase, maintaining engagement to limit refund requests.",
      finance: "Tracks batch collection efficiency and monitors payment gateway failures."
    },
    businessFlow: [
      { num: 1, label: "Acquisition", title: "Student Acquisition", detail: "Students find PW organically via free lectures on YouTube channels." },
      { num: 2, label: "Lead Gen", title: "Lead Generation", detail: "Students download the PW App to access free notes, daily quizzes, or register for PWSAT." },
      { num: 3, label: "Counselling", title: "Interactive Counselling", detail: "PW's automated bots and tele-counseling teams match students with the ideal online batch (e.g. Lakshya)." },
      { num: 4, label: "Conversion", title: "Batch Enrollment", detail: "Student completes purchase via low-cost digital payment options." },
      { num: 5, label: "Enrollment", title: "Student Onboarding", detail: "Profile creation, batch assignment, and study schedule setup inside the PW app." },
      { num: 6, label: "Delivery", title: "Service Delivery", detail: "Daily live streams, interactive doubt solving, and homework distribution." },
      { num: 7, label: "Success", title: "Student Success", detail: "Personal mentors track progress, while Alakh AI guides students through their study backlogs." },
      { num: 8, label: "Retention", title: "Yearly Retention", detail: "Students transition from Class 11 (Arjuna) to Class 12 (Lakshya) or Dropper (Yakeen) batches." },
      { num: 9, label: "Revenue", title: "Revenue Cycle", detail: "Course fees, book purchases, and up-sell of premium mentorship programs create steady cash flows." }
    ],
    swot: {
      s: [
        "Unrivaled organic brand trust with millions of YouTube followers.",
        "Industry-best cost-leadership structure allowing low pricing models.",
        "Advanced tech stack (Alakh AI, custom streams) tailored for low-tier devices."
      ],
      w: [
        "Lower course completion rates typical of pure online education.",
        "Heavy reliance on a few star celebrity faculty profiles.",
        "Low average order value (AOV) compared to traditional competitors."
      ],
      o: [
        "Rapidly growing demand for regional language competitive exam preparations.",
        "Up-selling high-performing online students to physical Vidyapeeth centers.",
        "Developing specialized testing centers in rural zones."
      ],
      t: [
        "Intense pricing pressures from capitalized EdTech platforms.",
        "Local offline institutes slashing prices to retain regional market shares.",
        "Regulatory crackdowns on coaching advertisements and age limits."
      ]
    },
    executiveSummary: {
      summaryText: "The JEE/NEET/Foundation online vertical is Physics Wallah's crown jewel, dominating low-cost competitive test prep across India. By offering premium classes at unmatched prices, it commands immense market share. The core strategic challenge is moving from transaction-based course sales to high-value personalized digital ecosystems. Implementing AI prioritization in lead generation, WhatsApp-driven counseling, and automated student backlog management will lower acquisition costs further while driving batch retention. This transition positions the online vertical as a highly profitable, self-sustaining acquisition funnel feeding other premium offline PW initiatives.",
      strategicPriorities: [
        "Deploy Alakh AI Guru across all major batches to automate doubt support and reduce operational overhead.",
        "Integrate predictive lead scoring to target high-intent candidates and raise sales team conversion rates.",
        "Expand regional language batches to tap into underpenetrated state board markets."
      ],
      metricsForecast: [
        "CAC reduction: 25% drop over 12 months using AI lead prioritization.",
        "LTV expansion: 35% increase by upselling premium mentorship programs.",
        "Retention bump: 15% improvement in yearly renewal through Sahayak backlog tracking."
      ]
    }
  },
  "vidyapeeth": {
    name: "PW Vidyapeeth (Offline/Hybrid Centers)",
    overview: {
      text: "The brick-and-mortar face of Physics Wallah, presenting smart, tech-enabled offline coaching classrooms. In FY26, the offline segment generated ₹1,774 crore (31% YoY growth), representing ~46% of PW's total revenue, driven by the expansion of Vidyapeeth and Pathshala centers to 353 centres across India.",
      createdWhy: "To bridge the digital divide for students who require physical environment discipline, peer-to-peer competition, and hands-on guidance that pure online classrooms cannot provide.",
      launched: "Launched in mid-2022, marking PW's aggressive pivot to hybrid/physical business models.",
      problemSolved: "Lack of physical structure, study space, and individual supervision in pure digital programs, while keeping fees 50-60% lower than legacy offline institutes."
    },
    leadership: {
      leadName: "Offline Operations Directors & Center Heads",
      roles: "Overseeing center-wise administration, local marketing campaigns, regional infrastructure, and local faculty management.",
      stakeholders: "Zonal Operations Heads, Local Center Managers, Parent Relations Officers."
    },
    targetAudience: {
      customers: "Class 11, 12, and dropper students seeking high-touch offline academic environments.",
      segments: "Middle-income families willing to invest in physical centers; parents demanding active physical oversight.",
      persona: {
        name: "Priya Ranjan",
        age: "18 (NEET Dropper)",
        profile: "Moved from rural Jharkhand to a hostel in Patna. Father is a government schoolteacher.",
        story: "Struggled with isolation during online study at home. Joined Patna Vidyapeeth for daily classroom peer competition, physical doubt booths, and structured testing schedules."
      }
    },
    productsServices: {
      onlineOfferings: [
        "Vidyapeeth Hybrid App access (pre-recorded makeup classes, online tests, parent reports dashboard)"
      ],
      offlineOfferings: [
        "Interactive Physical Smart-Classroom batches",
        "Vidyapeeth Printed Study Materials and workbooks",
        "Dedicated physical doubt-solving cubicles"
      ],
      premiumServices: [
        "Specialized counselor-parent consultation packages",
        "Vidyapeeth Pathfinder (study room memberships with individual study desks and offline resources)"
      ]
    },
    customerAcquisition: {
      organic: [
        "Walk-in inquiries driven by PW's massive online brand visibility",
        "Direct conversion campaigns targeted at current online app subscribers"
      ],
      paid: [
        "Localized print ads (newspapers, pamphlets) and local radio spots",
        "Outdoor banners, bill-boards, and bus shelter branding in educational hubs"
      ],
      referral: [
        "Sibling admission discounts and student referral fee waivers"
      ],
      offline: [
        "PWSAT (National Scholarship Exam) conducted across physical schools and venues",
        "Local educational seminars hosted by senior faculty members"
      ]
    },
    leadGenProcess: {
      text: "Vidyapeeth utilizes PWSAT as its primary offline lead funnel, drawing thousands of students to take tests for scholarship allocations.",
      forms: ["Vidyapeeth physical walk-in inquiry sheets", "Online PWSAT registration forms"],
      campaigns: ["Hyper-local school seminar outreach", "Regional scholarship topper recognition events"],
      webEvents: ["Center virtual tour videos and interactive counseling sessions"]
    },
    salesCounselling: {
      questions: [
        "What was your score in the previous school board exam or PWSAT?",
        "Have you previously studied in an offline coaching institute?",
        "Will you require hostel accommodations near the center?",
        "What are the major learning hurdles you faced in online classes?"
      ],
      recommendations: "Guide the student through a physical tour of the center, show the technology-enabled smart classrooms, and recommend a customized center batch matching their local boarding location.",
      objections: [
        { obj: "Are your teachers as experienced as Allen/Resonance?", ans: "Present the faculty roster showing credentials, national ranks of former students, and our standard teacher-training certification." },
        { obj: "The fees, though low, still require a lump sum payment.", ans: "Offer zero-cost EMI financing tie-ups with leading financial partners to make payments monthly." }
      ]
    },
    conversionFunnel: {
      stages: [
        { name: "PWSAT Registrant / Center Walk-in", value: 10000, conversion: "100%" },
        { name: "Center Visit & Counseled Lead", value: 6000, conversion: "60%" },
        { name: "Scholarship Awarded Lead", value: 3500, conversion: "58.3%" },
        { name: "Admission Fee Paid Lead", value: 1500, conversion: "42.8%" },
        { name: "Fully Enrolled Vidyapeeth Student", value: 1200, conversion: "80%" }
      ],
      challenges: [
        "Converting walk-in inquiries who compare prices with small local tuitions.",
        "Managing student drop-outs who decide to return home due to hostel homesickness."
      ]
    },
    revenueModel: {
      streams: [
        "Offline program tuition fees (Vidyapeeth registration and tuition package)",
        "Pathfinder study center access subscriptions",
        "Physical study material and apparel kit sales"
      ],
      pricingModel: "Installment-based or annual coaching fees (INR 45,000 - INR 75,000/year). Highly competitive pricing compared to industry averages.",
      upsell: [
        "Hostel recommendation partner fees",
        "Premium doubt support card add-ons for personal home tutors"
      ]
    },
    operations: {
      teams: [
        "Center Admin: Front desk staff, facility maintenance, security, and hostel coordinators.",
        "Academic Staff: Local subject teachers, doubt desk coaches, and academic mentors.",
        "Zonal Marketing: Offline flyer campaigners, seminar organizers, and regional sales executives."
      ],
      workflows: [
        "Daily center routine: RFID biometric attendance check -> Classroom sessions -> Scheduled doubt room timings -> Homework log check.",
        "Test loop: OMR sheets scanned at center -> Instant results uploaded to Parent App within 24 hours."
      ],
      processes: [
        "Daily infrastructure audits (smart board functionality, clean desk reviews).",
        "Local vendor coordinate programs (material shipping and uniform delivery)."
      ]
    },
    studentSuccess: {
      postPurchase: "Interactive parent-student orientation day at the physical center, distribution of identity cards, and setting up the Parent Tracking App.",
      retention: [
        "Regular offline Parent Teacher Meetings (PTMs)",
        "Performance recovery counseling sessions for students scoring below benchmark"
      ],
      engagement: [
        "Physical doubt counters staffed with instant-solve teachers",
        "Inter-batch performance awards and motivational gatherings"
      ],
      escalations: [
        "Severe absences trigger automated SMS calls to parents within 1 hour of class start",
        "Grievances about local facilities (e.g. AC cooling, seating) resolved by Center Managers within 48 hours"
      ]
    },
    dataGenerated: {
      lead: ["Walk-in form entries", "PWSAT registration location", "Parent mobile details", "School affiliation record"],
      sales: ["Instalment payment timeline logs", "EMI approval statuses", "Scholarship discount percentages"],
      customer: ["Biometric profiles", "Emergency contact numbers", "Medical history records"],
      learning: ["OMR test result matrices", "Classroom physical attendance record", "Doubt desk query frequency logs"],
      financial: ["Center EBITDA tracking sheets", "Refund disbursement histories", "Local vendor invoices"],
      operational: ["Classroom seat utilization ratios", "Teacher daily clock-in details", "Facility maintenance checklists"]
    },
    kpisMetrics: {
      marketing: [
        "Cost per walk-in inquiry (Target: < INR 600)",
        "PWSAT center test conversion rate (Target: >35% take exam)",
        "Local campaign ROI (Target: >3x relative to local spend)"
      ],
      sales: [
        "Walk-in to Enrollment conversion rate (Target: >20%)",
        "EMI conversion penetration (Target: >40% of sales)",
        "Batch capacity utilization rate (Target: >90% seats filled)"
      ],
      operations: [
        "Student attendance compliance (Target: >85% daily average)",
        "OMR test checking turnaround time (Target: < 24 hours)",
        "Teacher-to-student ratio maintenance (Target: 1:60)"
      ],
      success: [
        "Parent Net Promoter Score (NPS) (Target: >70)",
        "Batch retention/continuation rate (Target: >85%)",
        "Refund request rate (Target: < 5%)"
      ],
      business: [
        "Center gross margin (Target: >28%)",
        "Payback period on new center setups (Target: < 18 months)",
        "Total regional revenue contributions"
      ]
    },
    challenges: {
      marketing: "Managing hyper-local competitors who launch aggressive copycat discount campaigns right before admissions close.",
      sales: "Handling parents who insist on custom discounts outside standard PWSAT scholarship parameters.",
      operations: "Ensuring uniform academic delivery across centers far from headquarters (e.g., maintaining quality in Tier-3 towns).",
      retention: "Managing student burnout and anxiety under the pressure of intense offline competition.",
      scalability: "High capital expenditures (CapEx) required for physical real estate leases, furniture, and local teacher bidding wars."
    },
    aiOpportunities: [
      {
        dept: "Marketing",
        current: "Local managers manually distribute pamphlets in residential zones based on guess-work.",
        opportunity: "Use Geographic Demographic Mapping AI to analyze regional census/school data and identify optimal flyer drops.",
        timeSavings: "Eliminates weeks of trial-and-error marketing.",
        costSavings: "Reduces print waste, saving INR 1.5 Lakhs per center campaign.",
        impact: "Improves offline lead generation efficiency by 30%."
      },
      {
        dept: "Sales & Counselling",
        current: "Walk-in counselors present standard static slideshows to parents, regardless of background.",
        opportunity: "Integrate a 'Smart Walk-in Counsellor Copilot' that prompts custom scripts based on student's PWSAT performance and parent profiles.",
        timeSavings: "Cuts down counseling duration by 20 mins per family.",
        costSavings: "Improves counselor productivity, reducing staff scaling needs.",
        impact: "Boosts walk-in conversion rate by 18%."
      },
      {
        dept: "Counselling",
        current: "Outbound sales agents call parents manually to prompt physical center visits.",
        opportunity: "Deploy AI Outbound Voicebots to handle high-volume follow-up calls and automatically book center tours.",
        timeSavings: "Replaces manual dialer operations.",
        costSavings: "Saves INR 4 Lakhs/month in call-center outsourcing.",
        impact: "Doubles the rate of physical center tours scheduled."
      },
      {
        dept: "Operations",
        current: "Staff manually check attendance logs at the end of the day to detect absent students.",
        opportunity: "Use RFID-driven Biometric AI Attendance Predictor to identify persistent absence patterns and forecast drop-out risks.",
        timeSavings: "Saves 2 hours of daily administrative tracking per center.",
        costSavings: "Reduces administrative headcount requirements.",
        impact: "Permits proactive parent interventions, saving critical enrollments."
      },
      {
        dept: "Student Success",
        current: "OMR answer sheets are scanned and results cards drafted manually by center operators.",
        opportunity: "Deploy AI OMR Evaluator and Auto-feedback engine to analyze student error categories and recommend specific revision lectures.",
        timeSavings: "OMR results published within 1 hour instead of 24 hours.",
        costSavings: "Reduces back-office scanning staff costs.",
        impact: "Improves student review loops and builds strong parent trust."
      },
      {
        dept: "Academics",
        current: "Center directors manually schedule classes and resolve classroom teacher conflicts.",
        opportunity: "Deploy Teacher-Room Optimization Engine to schedule batches, balance teacher hours, and coordinate smart boards.",
        timeSavings: "Reduces scheduling process time from 3 days to 5 minutes.",
        costSavings: "Eliminates room/teacher idle hours, maximizing facility capacity.",
        impact: "Increases center utilization efficiency by 15%."
      },
      {
        dept: "Technology",
        current: "Center cameras are only used for basic security monitoring.",
        opportunity: "Implement Classroom Engagement Analytics using computer vision to track overall student focus, yawn frequency, and teacher pacing.",
        timeSavings: "Automated, non-intrusive evaluation of academic quality.",
        costSavings: "Reduces manual academic audits.",
        impact: "Ensures early feedback to HODs on teacher quality."
      }
    ],
    aiProjects: [
      { num: "01", title: "Smart Biometric Absentee Predictor", desc: "AI module tracking RFID entries, mapping them against historical dropout rates, and alerting parent relations teams to contact students showing early isolation patterns.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "02", title: "Counsellor Copilot Profile Engine", desc: "Interactive dashboard for counselors that digests PWSAT metrics and drafts custom pitch structures based on parental budgets and students' past grades.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "03", title: "OMR Error Diagnostics Engine", desc: "Analyzes scanned exam sheets to generate personalized diagnostic reports detailing weak areas and linking them directly to app-based lectures.", impactBadge: "Medium Impact", effortBadge: "Low Effort" },
      { num: "04", title: "Classroom Engagement CV Analytics", desc: "Privacy-compliant computer vision model running on classroom feeds to map student attention spans, giving HODs feedback on lecture quality.", impactBadge: "Medium Impact", effortBadge: "High Effort" },
      { num: "05", title: "Teacher-Center Optimization Scheduler", desc: "Algorithms coordinating class timetables, classrooms, and teacher rosters to ensure zero conflicts and maximize center capacity.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "06", title: "Hyper-local Ad Placement Targeter", desc: "Analyzes regional academic enrollment densities and school locations to suggest optimal local billboard and poster placements.", impactBadge: "Medium Impact", effortBadge: "Low Effort" },
      { num: "07", title: "Hostel & Logistics Matchmaker AI", desc: "Recommends verified local hostels to out-of-town students based on budget, walking distance, safety metrics, and dietary preferences.", impactBadge: "Medium Impact", effortBadge: "Low Effort" },
      { num: "08", title: "Smart Doubt Desk Queue Optimizer", desc: "Tracks student logins at physical doubt desks, predicting peak traffic times and scheduling assistant teachers accordingly.", impactBadge: "Medium Impact", effortBadge: "Medium Effort" },
      { num: "09", title: "PWSAT Scholarship Allocation AI", desc: "Balances scholarship distribution limits across centers, ensuring target revenue yields are met while recruiting high-potential students.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "10", title: "Parent Comm-Engine (WhatsApp Reports)", desc: "Generates automated weekly WhatsApp cards to parents, detailing attendance, test marks, and recommended revision steps.", impactBadge: "High Impact", effortBadge: "Low Effort" }
    ],
    interactions: {
      marketing: "Launches hyper-local offline events and PWSAT exams to bring leads to centers.",
      sales: "Manages the center walk-ins and converts leads into paid physical admissions.",
      counselling: "Provides customized personal counseling for parents during center walkthroughs.",
      ops: "Handles day-to-day center environment, classroom maintenance, security, and smart boards.",
      tech: "Coordinates parent-facing mobile portals, RFID networks, and local classroom camera feeds.",
      success: "Manages parent teacher meetings and handles local student issues to avoid center drop-outs.",
      finance: "Tracks physical payments receipts, manages local bank partnerships, and issues refunds."
    },
    businessFlow: [
      { num: 1, label: "Acquisition", title: "Offline Brand Awareness", detail: "Parents see local billboards and newspaper ads for Vidyapeeth." },
      { num: 2, label: "Lead Gen", title: "PWSAT Registrations", detail: "Students sit for national level PWSAT tests to secure fee discounts." },
      { num: 3, label: "Counselling", title: "Physical Center Tours", detail: "Families visit regional Vidyapeeth centers, tour classrooms, and consult counsellors." },
      { num: 4, label: "Conversion", title: "Admission & Financing", detail: "Parents complete enrollment, utilizing zero-interest EMI options if needed." },
      { num: 5, label: "Enrollment", title: "Smart Identity Issuance", detail: "Students receive RFID identity cards, uniform kits, and offline study modules." },
      { num: 6, label: "Delivery", title: "Interactive Classrooms", detail: "Daily physical lessons supported by digital smart boards and offline doubt cubicles." },
      { num: 7, label: "Success", title: "Academic Mentorship", detail: "Weekly OMR assessments followed by parent-teacher progress reviews." },
      { num: 8, label: "Retention", title: "Next Session Transition", detail: "Students renew enrollment for class 12 or dropper series at the same center." },
      { num: 9, label: "Revenue", title: "Tuition Inflow Cycle", detail: "Term installments, Pathfinder renewals, and book accessories feed regional EBITDA goals." }
    ],
    swot: {
      s: [
        "Highly respected brand identity providing high-tier classes at low cost.",
        "Integrated hybrid support (Vidyapeeth App) backing physical classes.",
        "Vast geographical reach in Tier-2/3 student clusters."
      ],
      w: [
        "High capital requirements (CapEx) for leasing physical facilities.",
        "Locating and retaining high-quality teachers in smaller regional cities.",
        "Vulnerability to local administrative changes and schedule delays."
      ],
      o: [
        "Leveraging online student database to fill offline center seats.",
        "Launching specialized residential academies (schooling + coaching + hostel).",
        "Expanding franchise center models to target remote regional zones."
      ],
      t: [
        "Aggressive pricing actions by legacy offline giants.",
        "Local teacher poaching campaigns by well-funded platforms.",
        "Stricter local government zoning rules on offline academic facilities."
      ]
    },
    executiveSummary: {
      summaryText: "PW Vidyapeeth represents a strategic evolution, converting online brand value into a physical presence. By offering tech-enabled offline coaching at 50% of the cost of traditional players, it captures massive demand in Tier-2 and Tier-3 cities. The primary challenges are infrastructure setup costs and regional teacher availability. Injecting AI into scheduling, using OMR error mapping to customize learning pathways, and running predictive attendance triggers will control overhead, maximize student outcomes, and retain market leadership in the hybrid space.",
      strategicPriorities: [
        "Implement AI classroom scheduling to maximize seat utilization across centers.",
        "Adopt OMR diagnostics to provide students with clear learning adjustments.",
        "Scale the PWSAT scholarship pipeline using hyper-local target tools."
      ],
      metricsForecast: [
        "Facility utilization efficiency: 15% improvement via AI scheduling.",
        "Drop-out rate reduction: 20% drop using biometric absence alerts.",
        "Conversion growth: 18% increase in walk-in enrollments using counsellor copilot scripts."
      ]
    }
  },
  "pw-skills": {
    name: "PW Skills (Professional Upskilling)",
    overview: {
      text: "A professional upskilling and career development vertical, delivering tech-oriented courses (Data Science, Web Development, DSA, and Java/C++) to college students and early-career job seekers.",
      createdWhy: "To address the severe employment gap in India's engineering colleges, where outdated curricula leave graduates lacking practical skills needed for modern tech industries.",
      launched: "Launched in late 2022, expanding PW's footprint beyond test-prep into professional careers.",
      problemSolved: "Lack of affordable, hands-on, industry-aligned coding programs, while providing accessible virtual coding environments (PW Skills Lab) directly in-browser."
    },
    leadership: {
      leadName: "Sudhanshu Kumar & Krish Naik (Upskilling Leads)",
      roles: "Directing tech curricula, industrial partnerships, virtual lab engineering, and career placement services.",
      stakeholders: "Hiring Partner Managers, Placement Coordinators, Discord Community Managers."
    },
    targetAudience: {
      customers: "Tier-3 engineering college students, BCA/MCA graduates, and non-tech professionals trying to switch to software careers.",
      segments: "Aspiring software developers, database administrators, and data analysts lacking institutional campus placement options.",
      persona: {
        name: "Vikas Deshmukh",
        age: "21 (B.Tech Final Year Student)",
        profile: "Attends a Tier-3 private college in Nagpur. Minimal coding exposure in his college curriculum.",
        story: "His college attracts no major IT companies for placements. Enrolled in PW Skills Data Science course to build a portfolio, hoping to compete for off-campus tech roles."
      }
    },
    productsServices: {
      onlineOfferings: [
        "Full-Stack Web Development certification programs (MERN stack)",
        "Data Science & Machine Learning Masterclasses",
        "Data Structure and Algorithm (DSA) coding series",
        "Foundational Programming courses (Java, C++, Python)"
      ],
      offlineOfferings: [
        "Hybrid physical bootcamps (intensive weekend coding labs in selected cities)",
        "PW Skills printed coding sheets and placement guides"
      ],
      premiumServices: [
        "PW Skills Job Portal access (direct applications to hiring partners)",
        "1-on-1 industry mock interviews and resume review services",
        "PW Skills Lab (browser-based cloud IDE with pre-configured developer setups)"
      ]
    },
    customerAcquisition: {
      organic: [
        "YouTube tech channels (Krish Naik, PW Skills) offering high-quality free tutorials",
        "LinkedIn student community posts showcasing personal developer projects",
        "GitHub repositories sharing open-source homework projects"
      ],
      paid: [
        "LinkedIn targeted campaigns focusing on final-year college students",
        "Google Ads matching high-intent searches (e.g. 'best data science course online')"
      ],
      referral: [
        "Student affiliate marketing programs sharing commission coins"
      ],
      offline: [
        "Hackathons and coding challenges organized in regional colleges",
        "College campus ambassador networks"
      ]
    },
    leadGenProcess: {
      text: "PW Skills generates high-quality leads by offering free high-impact bootcamps on YouTube and organizing national hackathons.",
      forms: ["Free bootcamp registration popups", "Hackathon team sign-up portals"],
      campaigns: ["'100 Days of Code' public challenges", "LinkedIn resume review webinars"],
      webEvents: ["Live coding marathons and career counseling sessions"]
    },
    salesCounselling: {
      questions: [
        "What programming languages have you studied in college?",
        "Are you targeting software development or data roles?",
        "How many hours a week can you commit to hands-on coding?",
        "What is your target graduation year and internship status?"
      ],
      recommendations: "Assess their current programming familiarity. If they are beginners, suggest Java + DSA first. If they have a basic foundation, guide them to Full-Stack Web Development or Data Science.",
      objections: [
        { obj: "Does this course guarantee placement?", ans: "Clarify that while we don't sell placement guarantees, we provide placement support, hiring partner referrals, resume building, and mock interviews." },
        { obj: "Can I learn coding online without a CS degree?", ans: "Highlight our project-based curriculum starting from scratch, supported by browser-based PW Skills Labs, removing setup friction." }
      ]
    },
    conversionFunnel: {
      stages: [
        { name: "Webinar Attendee / YouTube Tech Viewer", value: 10000, conversion: "100%" },
        { name: "Free App Account Sign-up", value: 5000, conversion: "50%" },
        { name: "Free Coding Track / Lab Enrollee", value: 2500, conversion: "50%" },
        { name: "Premium Course Checkout Visited", value: 750, conversion: "30%" },
        { name: "Premium Upskilling Course Customer", value: 300, conversion: "40%" }
      ],
      challenges: [
        "High churn rates in free tracks due to students losing coding focus.",
        "Drop-off between course checkout page and payment completion due to limited credit options."
      ]
    },
    revenueModel: {
      streams: [
        "Premium course sales (structured certification program fees)",
        "Virtual PW Skills Lab resource extensions (cloud compute hours)",
        "Premium placement preparation bundles (resume evaluation + mock interviews)"
      ],
      pricingModel: "Extremely affordable structured courses (INR 3,000 - INR 15,000). Considerably lower than competitive bootcamp fees (often exceeding INR 50,000).",
      upsell: [
        "1-on-1 industry mentorship calls",
        "Access to advanced cloud sandbox setups for machine learning models"
      ]
    },
    operations: {
      teams: [
        "Curriculum Delivery: Technical Instructors, Teaching Assistants (TAs), and Lab Developers.",
        "Placement Cell: Corporate relations manager, job portal operators, and resume review staff.",
        "Community Team: Discord managers and coding challenge coordinators."
      ],
      workflows: [
        "Daily cycle: Pre-recorded/Live lesson upload -> Sandbox coding challenges updated in Skills Lab -> TA doubt resolution via Discord.",
        "Project cycle: Student submits GitHub link -> AI/TA code review -> Feedback score dashboard published."
      ],
      processes: [
        "Hiring partner outreach and job description sourcing.",
        "Online sandbox maintenance and resource scaling."
      ]
    },
    studentSuccess: {
      postPurchase: "Immediate access to PW Skills Lab, automated invitation to the batch Discord server, and coding baseline test to recommend initial tracks.",
      retention: [
        "Gamified coding badges, leaderboards, and streak achievements",
        "Weekly virtual hackathons with cash prizes and project showcases"
      ],
      engagement: [
        "Discord coding support groups run by experienced student mentors",
        "Hands-on portfolio building workshops (GitHub page setup)"
      ],
      escalations: [
        "Code sandbox errors resolved by infrastructure engineers within 24 hours",
        "TA doubt resolution delay flags: escalated if questions remain open for over 4 hours"
      ]
    },
    dataGenerated: {
      lead: ["Source (YouTube tech video, search term)", "Coding background flag", "Current university/degree details"],
      sales: ["Course purchase logs", "Referral code payouts", "Corporate sponsorship logs"],
      customer: ["GitHub username", "LinkedIn profile URL", "Resume content file"],
      learning: ["Git commit rates", "Cloud IDE session minutes", "Discord engagement logs", "Assignment completion scores"],
      financial: ["Monthly course billing", "Payment processor margins", "Instalment default rates"],
      operational: ["Sandbox container uptime", "TA answer response times", "Job portal application rates"]
    },
    kpisMetrics: {
      marketing: [
        "Tech YouTube channel viewer click-through rate (CTR) (Target: >5%)",
        "Free lab registration conversion (Target: >30%)",
        "Organic Lead Generation Cost (Target: < INR 100)"
      ],
      sales: [
        "Lead to paid enrollment rate (Target: >6%)",
        "Corporate package conversions",
        "Refund request rates (Target: < 2%)"
      ],
      operations: [
        "Doubt resolution time on Discord (Target: < 2 hours)",
        "Lab container spin-up speed (Target: < 5 seconds)",
        "Assignment review turnaround time (Target: < 48 hours)"
      ],
      success: [
        "Course completion rate (Target: >50%)",
        "Hiring partner satisfaction rate (Target: >85%)",
        "Active placement rate within 6 months (Target: >70%)"
      ],
      business: [
        "Average user transaction size (Target: INR 6,500)",
        "Total hiring partner network count (Target: >500 companies)",
        "Quarterly EBITDA margin"
      ]
    },
    challenges: {
      marketing: "Overcoming student doubts regarding off-campus placement success rates without traditional campus support.",
      sales: "Competing with free upskilling content online (YouTube, open courses).",
      operations: "Managing TA quality and response times as the student Discord community grows into thousands.",
      retention: "High student dropout rates typical of self-paced online courses once the curriculum shifts to complex topics (e.g. data structures).",
      scalability: "Cost-efficient scaling of cloud resources (browser IDE runtimes) for thousands of concurrent coders."
    },
    aiOpportunities: [
      {
        dept: "Marketing",
        current: "Manual compilation of student portfolio items and GitHub achievements to share on LinkedIn.",
        opportunity: "Use AI Success Story Generator to analyze student profiles, extract metrics (e.g. 150+ LeetCode problems solved), and draft customized LinkedIn success stories.",
        timeSavings: "Cuts copywriting time by 85%.",
        costSavings: "Reduces marketing content production costs.",
        impact: "Expands organic viral traffic on professional social channels."
      },
      {
        dept: "Sales & Counselling",
        current: "Sales teams manually review customer profiles to recommend courses, without knowing their actual coding proficiency.",
        opportunity: "Deploy an AI coding diagnostic assessment that tests user skill levels and recommends personalized learning tracks.",
        timeSavings: "Removes guessing from the recommendation process.",
        costSavings: "Lowers sales support overhead by 20%.",
        impact: "Increases batch purchase conversion rate by 15%."
      },
      {
        dept: "Counselling",
        current: "Placement teams manually review resumes, taking 15 minutes per resume to suggest improvements.",
        opportunity: "Deploy an AI Resume Builder and Feedback tool that instantly scores resumes against target jobs.",
        timeSavings: "Reduces manual review time by 95%.",
        costSavings: "Saves INR 3 Lakhs/month in student placement counseling resources.",
        impact: "Enables instant resume enhancement feedback for students."
      },
      {
        dept: "Operations",
        current: "Teaching assistants spend hours answering basic syntax questions (like missing semicolons) on Discord.",
        opportunity: "Integrate a Discord Auto-Doubt Solver bot that reads code screenshots and suggests fixes for basic errors.",
        timeSavings: "Resolves 60% of basic syntax queries instantly.",
        costSavings: "Reduces paid TA hours, saving INR 5 Lakhs/month.",
        impact: "Lowers student waiting times on forums."
      },
      {
        dept: "Student Success",
        current: "Students prepare for interviews using generic PDF questionnaires, without receiving personalized feedback.",
        opportunity: "Deploy an AI Mock Interview Coach that conducts voice and coding challenges, scoring responses based on industry requirements.",
        timeSavings: "Saves hours of coordinator setup time.",
        costSavings: "Cuts external interviewer contract costs by 40%.",
        impact: "Builds job readiness, improving off-campus placement statistics."
      },
      {
        dept: "Academics",
        current: "TAs manually check coding assignments, review git repos, and write code feedback.",
        opportunity: "Implement an AI Code Quality Checker to evaluate student code formatting, efficiency, and logic correctness.",
        timeSavings: "Saves days of grading work.",
        costSavings: "Lowers reviewer headcount needs.",
        impact: "Ensures immediate code reviews, reinforcing student learning."
      },
      {
        dept: "Technology",
        current: "Cloud sandbox containers remain open when students walk away, creating server idle costs.",
        opportunity: "Deploy an AI Cloud-IDE Auto-Shutdown tool that monitors IDE telemetry to pause idle sessions.",
        timeSavings: "Fully automated resource management.",
        costSavings: "Cuts cloud server hosting costs by 28%.",
        impact: "Reduces server overhead, supporting affordable course pricing."
      }
    ],
    aiProjects: [
      { num: "01", title: "AI Resume Builder & Critiquer", desc: "Instantly reviews student resumes against job descriptions, grading format, and highlighting skills gaps.", impactBadge: "High Impact", effortBadge: "Low Effort" },
      { num: "02", title: "AI Coding & Voice Interviewer", desc: "Interactive mock interviewer conducting role-based mock sessions and providing grading reports on communication and coding efficiency.", impactBadge: "High Impact", effortBadge: "High Effort" },
      { num: "03", title: "Cloud Sandbox Coding Copilot", desc: "Integrates a safe AI copilot into PW Skills Lab to help students fix bugs and explain complex terminal commands.", impactBadge: "Medium Impact", effortBadge: "Medium Effort" },
      { num: "04", title: "Discord Auto-Doubt Solver Bot", desc: "Monitors Discord channel query tickets, parses screenshots of error logs, and responds with debugging advice.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "05", title: "Job Description Matcher AI", desc: "Matches student profiles with hiring partner jobs, recommending matching candidates directly to recruiters.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "06", title: "AI-Powered Project Reviewer", desc: "Evaluates student project submissions, analyzes clean-code quality, and verifies functionality using unit tests.", impactBadge: "Medium Impact", effortBadge: "Medium Effort" },
      { num: "07", title: "Cloud IDE Resource Optimizer", desc: "Auto-detects active student development schedules, scaling down container pools during low-use hours to control cloud costs.", impactBadge: "Medium Impact", effortBadge: "High Effort" },
      { num: "08", title: "Dynamic Skill-Gap Roadmap Generator", desc: "Designs personalized learning paths to target jobs based on students' coding metrics.", impactBadge: "Medium Impact", effortBadge: "Low Effort" },
      { num: "09", title: "Placement Test Creator AI", desc: "Generates unique coding assessment tests for hiring partners, using diverse questions to prevent copying.", impactBadge: "Medium Impact", effortBadge: "Medium Effort" },
      { num: "10", title: "LinkedIn Achievement Auto-Scheduler", desc: "Generates shareable graphics and text posts for LinkedIn, celebrating student coding achievements to build organic brand reach.", impactBadge: "Medium Impact", effortBadge: "Low Effort" }
    ],
    interactions: {
      marketing: "Uses student career placements to drive organic traffic on professional networks.",
      sales: "Assists lead conversions by pointing to hiring partner relationships.",
      counselling: "Helps students choose courses matching their career goals.",
      ops: "Coordinates coding curriculum updates, schedules webinars, and monitors TAs.",
      tech: "Supports the browser-based PW Skills Lab, job portal, and API integrations.",
      success: "Manages Discord help channels and mock interviews to prepare students for tech interviews.",
      finance: "Tracks placement partner commissions and handles student refunds."
    },
    businessFlow: [
      { num: 1, label: "Acquisition", title: "Career Brand Awareness", detail: "Students find PW Skills via tech tutorials on YouTube channels." },
      { num: 2, label: "Lead Gen", title: "Bootcamp Registrations", detail: "Users sign up for free coding bootcamps or register on the job portal." },
      { num: 3, label: "Counselling", title: "Skill-Gap Assessments", detail: "Online tools and counseling teams guide candidates to the right tech track." },
      { num: 4, label: "Conversion", title: "Premium Enrollment", detail: "Student enrolls in a premium certification course, using installment plans." },
      { num: 5, label: "Enrollment", title: "Sandbox Activation", detail: "Student accesses the learning system and launches their PW Skills Lab IDE container." },
      { num: 6, label: "Delivery", title: "Project-Based Learning", detail: "Lectures, hands-on coding sandbox tasks, and doubt resolutions via Discord." },
      { num: 7, label: "Success", title: "Career Preparation", detail: "Students construct projects, build portfolios, and complete mock interviews." },
      { num: 8, label: "Retention", title: "Advanced Course Upgrade", detail: "Graduates return for specialized advanced tracks (e.g. system design or cloud computing)." },
      { num: 9, label: "Revenue", title: "Upskilling Returns", detail: "Tuition receipts, lab resource upsells, and company recruitment programs generate revenue." }
    ],
    swot: {
      s: [
        "Cost-effective pricing compared to standard coding bootcamps.",
        "Integrated browser-based coding sandbox environment (PW Skills Lab).",
        "Large student developer audience via YouTube channels."
      ],
      w: [
        "Low completion rates typical of self-paced courses.",
        "Lacking the campus branding of traditional engineering universities.",
        "Dependent on entry-level tech hiring cycles."
      ],
      o: [
        "Creating custom corporate training programs (B2B upskilling).",
        "Providing regional languages coding tracks for non-English speakers.",
        "Partnering with state universities to offer practical coding credits."
      ],
      t: [
        "Rapid curriculum obsolescence due to quick AI-driven tech changes.",
        "Intense competition from online learning platforms.",
        "Industry hiring slow-downs affecting student placement rates."
      ]
    },
    executiveSummary: {
      summaryText: "PW Skills addresses the gap between college education and industry demands. By offering project-based coding programs, it helps students secure entry-level software roles. The primary challenge is maintaining student coding discipline. Introducing AI feedback tools, automated Discord help bots, and AI mock interview prep will improve completion rates, lower TA support costs, and help grads succeed in the job market.",
      strategicPriorities: [
        "Deploy the Discord Auto-Doubt solver to reduce TA support response times.",
        "Introduce the AI Mock Interview coach to build student interview confidence.",
        "Build a B2B corporate upskilling pipeline to diversify revenue streams."
      ],
      metricsForecast: [
        "Doubt resolution speed: 70% faster response times via Discord AI bots.",
        "Course completion: 20% increase through gamified AI streak recovery.",
        "Placement success: 25% higher placement rates with AI resume tailoring."
      ]
    }
  },
  "upsc": {
    name: "UPSC (PW OnlyIAS)",
    overview: {
      text: "The civil services preparation vertical of Physics Wallah, built in partnership with OnlyIAS. It delivers online and offline coaching for UPSC Civil Services Examination (CSE) aspirants.",
      createdWhy: "To provide affordable preparation for India's toughest government examination, where traditional offline fees (exceeding INR 1.5 Lakhs in Delhi) limited access to wealthy families.",
      launched: "Formed in late 2022 through a partnership with OnlyIAS, uniting PW's technology with OnlyIAS's curriculum.",
      problemSolved: "High cost of UPSC preparation, geographic barriers, and lack of structured guidance for rural and Tier-2 students."
    },
    leadership: {
      leadName: "Sumit Rewari (Founder of OnlyIAS) & UPSC Team",
      roles: "Directing UPSC curriculum strategy, study material design, and online/offline center administration.",
      stakeholders: "UPSC Subject Matter Experts, Mains Answer Evaluators, Student Success Mentors."
    },
    targetAudience: {
      customers: "College graduates and final-year students preparing for IAS, IPS, and state PCS exams.",
      segments: "Rural and semi-urban aspirants preparing from home, and offline candidates in Delhi hubs.",
      persona: {
        name: "Amit Patel",
        age: "23 (UPSC Aspirant)",
        profile: "Lives in Mirzapur, Uttar Pradesh. Graduated with a BA degree. Prepares from home.",
        story: "His family cannot afford Delhi coaching prices. Amit uses PW OnlyIAS online batches, relying on daily PDF summaries and recorded video content."
      }
    },
    productsServices: {
      onlineOfferings: [
        "Sankalp Batches (Complete GS Foundation online course)",
        "Prahaar Batches (Mains-focused intensive writing programs)",
        "UPSC Optional Subject specialized online batches",
        "Daily Current Affairs lecture series"
      ],
      offlineOfferings: [
        "OnlyIAS offline classroom centers in Rajinder Nagar and Mukherjee Nagar (Delhi)",
        "Printed UPSC study guides and monthly current affairs booklets"
      ],
      premiumServices: [
        "Personal UPSC mentor guidance program",
        "Mains Answer Evaluation package (detailed feedback by experts)",
        "UPSC Interview Guidance Program (mock panels with retired officers)"
      ]
    },
    customerAcquisition: {
      organic: [
        "OnlyIAS YouTube Channel, known for daily current affairs summaries",
        "Free study resources (daily newsletters, model answer sheets)",
        "Student recommendations and word of mouth"
      ],
      paid: [
        "Targeted digital campaigns launched around UPSC notifications",
        "Search ads for Optional courses and Mains Test Series"
      ],
      referral: [
        "Peer recommendation discounts for premium test series"
      ],
      offline: [
        "Current affairs booklets distributed near Delhi university areas",
        "Open seminars hosted in major state capital college zones"
      ]
    },
    leadGenProcess: {
      text: "PW OnlyIAS captures leads by sharing daily current affairs materials and prelims test series.",
      forms: ["Daily newsletter sign-up pages", "Free Prelims mock test registrations"],
      campaigns: ["Mains Answer Writing public challenges", "Current Affairs webinars"],
      webEvents: ["Prelims strategy analyses and optional selection webinars"]
    },
    salesCounselling: {
      questions: [
        "Is this your first UPSC attempt or have you previously sat the exam?",
        "Have you decided on an Optional Subject yet?",
        "How many hours can you commit to daily GS reading?",
        "Are you preparing from home or living in Delhi?"
      ],
      recommendations: "Guide them on choosing an Optional subject. Recommend the GS Foundation online batch if they are beginners, and suggest the Mains Answer Writing bundle if they have already cleared Prelims once.",
      objections: [
        { obj: "How will online classes help me with subjective Mains writing?", ans: "Present our student-evaluated answer sheets, the peer feedback forum, and our expert evaluator turnaround times." },
        { obj: "Can I manage UPSC prep alongside a full-time job?", ans: "Point to our evening batches, daily audio summaries, and personalized study planners." }
      ]
    },
    conversionFunnel: {
      stages: [
        { name: "YouTube Current Affairs Viewer", value: 10000, conversion: "100%" },
        { name: "Daily PDF / Quiz Registrant", value: 4000, conversion: "40%" },
        { name: "Free Mock Test Taker", value: 2000, conversion: "50%" },
        { name: "Premium Batch Checkout Visited", value: 600, conversion: "30%" },
        { name: "Premium UPSC Batch Customer", value: 240, conversion: "40%" }
      ],
      challenges: [
        "High churn rates from free current affairs readers to premium batch buyers.",
        "Drop-off due to students changing options after course purchases."
      ]
    },
    revenueModel: {
      streams: [
        "Online course subscription fees (GS foundation, Optional courses)",
        "Offline classroom packages in Delhi",
        "Mains Answer Evaluation test series sales"
      ],
      pricingModel: "Online batches priced affordably (INR 9,999 - INR 24,999) compared to traditional coaching. Offline packages priced at a competitive discount.",
      upsell: [
        "Mentorship bundle upgrades during Prelims clearing seasons",
        "One-on-one Mock Interview guidance packages"
      ]
    },
    operations: {
      teams: [
        "Academic Content: GS Faculty, Optional Experts, and Current Affairs Editors.",
        "Evaluation Cell: Mains answer sheet reviewers and student mentors.",
        "Content Editors: Daily newsletter writers and mock test creators."
      ],
      workflows: [
        "Daily routine: Daily Current Affairs video upload -> Mains writing question published -> Student uploads answer -> Evaluator submits feedback report.",
        "Weekly cycle: Current affairs booklet compilation -> Weekly mock exams published on Sunday."
      ],
      processes: [
        "UPSC syllabus compliance audits for all lectures.",
        "Mains evaluation speed and quality monitoring."
      ]
    },
    studentSuccess: {
      postPurchase: "Onboarding call with a study mentor, access to the online learning dashboard, and optional subject consultation.",
      retention: [
        "Performance review check-ins after key mock tests",
        "Motivational audio podcasts by past successful candidates"
      ],
      engagement: [
        "Peer-to-peer discussion boards for answer writing",
        "Monthly online AMA sessions with past toppers"
      ],
      escalations: [
        "Mains answer grading delays escalated to Senior Editors if unreviewed past 72 hours",
        "Technological access challenges resolved within 12 hours"
      ]
    },
    dataGenerated: {
      lead: ["Source (YouTube channel, newsletter)", "Optional subject preference", "Graduation major details"],
      sales: ["Batch enrollment records", "Installment payment histories", "Optional subject changes"],
      customer: ["UPSC roll numbers (for results tracking)", "Mailing address for books", "Academic background status"],
      learning: ["Mains answer uploads count", "Prelims test scores", "Recorded lecture watch minutes", "Mentorship call logs"],
      financial: ["Offline vs online sales splits", "Refund allocations", "EMI partner volumes"],
      operational: ["Answer sheet evaluation turnaround times", "Evaluator review quality grades", "Faculty feedback averages"]
    },
    kpisMetrics: {
      marketing: [
        "Newsletter click-through rate (CTR) (Target: >12%)",
        "Free mock test participation rate (Target: >40% of signups)",
        "Organic Customer Acquisition Cost (CAC) (Target: < INR 200)"
      ],
      sales: [
        "Lead to paid batch conversion rate (Target: >8%)",
        "Optional batch attachment rate (Target: >35% of GS sales)",
        "Refund request rates (Target: < 3%)"
      ],
      operations: [
        "Mains answer evaluation time (Target: < 48 hours)",
        "Evaluator quality audit score (Target: >95% compliance)",
        "Daily news summary publishing speed (Target: before 8 AM)"
      ],
      success: [
        "Prelims clearing percentage (Target: >10% of active test takers)",
        "NPS of offline UPSC centers (Target: >72)",
        "Mentorship call completion rate (Target: >80%)"
      ],
      business: [
        "Average user transaction size (Target: INR 12,000)",
        "Student numbers in offline vs online channels",
        "Quarterly EBITDA margin"
      ]
    },
    challenges: {
      marketing: "Managing brand consistency and content marketing quality across different platforms.",
      sales: "Advising candidates who purchase batches without knowing their optional choices.",
      operations: "Ensuring quick, high-quality reviews of subjective Mains essay sheets during busy exam seasons.",
      retention: "High student anxiety and burnout during long multi-year prep cycles.",
      scalability: "Sourcing experienced subject matter experts to evaluate subjective answers at high scale."
    },
    aiOpportunities: [
      {
        dept: "Marketing",
        current: "Editors manually summarize newspapers (The Hindu, Indian Express) to write daily current affairs articles.",
        opportunity: "Deploy an AI Current Affairs Summarizer to auto-generate daily summaries, vocabulary lists, and practice questions from trusted news sources.",
        timeSavings: "Saves 3 hours per day for editorial teams.",
        costSavings: "Reduces contract fees for daily news writers.",
        impact: "Guarantees daily study materials are published before 7 AM, driving organic traffic."
      },
      {
        dept: "Sales & Counselling",
        current: "Counsellors guide students manually through optional subject selections, taking 30 minutes per call.",
        opportunity: "Use an Optional Subject Selector AI to recommend matching optional courses based on academic background and scores.",
        timeSavings: "Cuts counseling call times by 25%.",
        costSavings: "Saves sales support resources.",
        impact: "Increases enrollments in Optional batches by 20%."
      },
      {
        dept: "Counselling",
        current: "Outbound teams manually check on students who stopped attending classes to prevent dropouts.",
        opportunity: "Deploy an AI Outbound Voicebot to call inactive students and help them schedule counseling check-ins.",
        timeSavings: "Replaces manual dialer follow-ups.",
        costSavings: "Saves call-center operations, saving INR 3 Lakhs/month.",
        impact: "Improves student retention rates."
      },
      {
        dept: "Operations/Academics",
        current: "Reviewers manually evaluate Mains essay answers, causing 5-day wait times for feedback.",
        opportunity: "Integrate an AI Mains Answer Evaluation assistant to pre-scan answers, spot missing keywords, evaluate essay structure, and recommend grades.",
        timeSavings: "Reduces human review times by 60%.",
        costSavings: "Lowers essay evaluation expenses by 45%.",
        impact: "Shortens student feedback loops to under 24 hours."
      },
      {
        dept: "Student Success",
        current: "Mentors manually track student calendars to build revision plans, with limited personal attention.",
        opportunity: "Launch a Syllabus Tracker & Backlog Assistant to automatically suggest custom reading plans based on exam dates.",
        timeSavings: "Reduces mentor follow-up work by 75%.",
        costSavings: "Lowers student support costs.",
        impact: "Helps students maintain study schedules."
      },
      {
        dept: "Academics",
        current: "Subject experts manually draft and edit mock Prelims multiple-choice questions.",
        opportunity: "Deploy an AI MCQ Generator to design unique Prelims-level questions based on monthly current affairs databases.",
        timeSavings: "Saves 6 hours of work per test set.",
        costSavings: "Reduces question-writer contract fees.",
        impact: "Expands the scale of daily practice tests."
      },
      {
        dept: "Technology",
        current: "Lectures are translated and subtitled manually by language teams.",
        opportunity: "Use AI Speech-to-Text and Translation engines to auto-generate bilingual study notes and video subtitles (English/Hindi).",
        timeSavings: "Saves days of translation work.",
        costSavings: "Reduces third-party translation expenses by 50%.",
        impact: "Improves accessibility for regional-language students."
      }
    ],
    aiProjects: [
      { num: "01", title: "AI Mains Answer Evaluator", desc: "AI assistant that analyzes handwritten answer uploads, matching key terms and structuring grading suggestions for human evaluators.", impactBadge: "High Impact", effortBadge: "High Effort" },
      { num: "02", title: "Daily Current Affairs Summarizer", desc: "Automated scraper and news processor that writes daily news notes and matches them with syllabus subjects.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "03", title: "Optional Course Recommender AI", desc: "Analyzes student grades, interests, and academic majors to recommend matching optional courses.", impactBadge: "Medium Impact", effortBadge: "Low Effort" },
      { num: "04", title: "Bilingual Study Note Translator", desc: "Translates lectures and news summaries into Hindi and regional languages while matching civil service vocabulary terms.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "05", title: "UPSC Mock Interview Coach AI", desc: "Simulates UPSC interview boards, conducting voice sessions and evaluating candidate posture and answer delivery.", impactBadge: "Medium Impact", effortBadge: "High Effort" },
      { num: "06", title: "Syllabus Backlog & Revision Planner", desc: "Designs personalized revision schedules based on students' performance in mock tests.", impactBadge: "Medium Impact", effortBadge: "Low Effort" },
      { num: "07", title: "Prelims MCQ Adaptive Generator", desc: "Generates custom MCQ mock tests focused on students' historical errors to help them master weak concepts.", impactBadge: "Medium Impact", effortBadge: "Medium Effort" },
      { num: "08", title: "Editor's Editorial Analyzer", desc: "Parses daily newspaper opinion pages, extracting arguments and structuring them into Mains-compatible notes.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "09", title: "Lecture Audio-to-Notes Summarizer", desc: "Transcribes live class audio and generates structured bullet-point study guides after class.", impactBadge: "Medium Impact", effortBadge: "Medium Effort" },
      { num: "10", title: "Student Stress & Drop-out Predictor", desc: "Tracks student logins and mock test scores to detect stress indicators, triggering counselor outreach.", impactBadge: "Medium Impact", effortBadge: "Low Effort" }
    ],
    interactions: {
      marketing: "Uses topper success stories and daily current affairs guides to generate organic leads.",
      sales: "Converts qualified leads by matching them with foundation courses.",
      counselling: "Provides advice on choosing optional courses and managing study routines.",
      ops: "Manages class schedules, printed materials delivery, and evaluations.",
      tech: "Supports the online learning portal, answer upload systems, and payment portals.",
      success: "Manages student mentorship calls and mock interviews to support candidates.",
      finance: "Tracks course revenue and handles fees payment schedules."
    },
    businessFlow: [
      { num: 1, label: "Acquisition", title: "Current Affairs Inbound", detail: "Students find OnlyIAS through daily newspaper analysis videos on YouTube." },
      { num: 2, label: "Lead Gen", title: "Study Guide Downloads", detail: "Users sign up for free study materials and current affairs newsletters." },
      { num: 3, label: "Counselling", title: "Optional Consulting", detail: "Counsellors guide students on choosing optional subjects." },
      { num: 4, label: "Conversion", title: "Batch Selection", detail: "Student purchases a GS Foundation course and optional packages." },
      { num: 5, label: "Enrollment", title: "Study Portal Setup", detail: "Student sets up their learning profile and schedules classes." },
      { num: 6, label: "Delivery", title: "Syllabus Coverage", detail: "Daily live lectures, printed books delivery, and daily mains writing tasks." },
      { num: 7, label: "Success", title: "Writing Feedback", detail: "Mentors grade answer sheets, while AMAs with toppers provide motivation." },
      { num: 8, label: "Retention", title: "Mains Prep Expansion", detail: "Prelims clears enroll in advanced Mains revision courses and mock interviews." },
      { num: 9, label: "Revenue", title: "Upskilling Returns", detail: "Online courses, offline center fees, and mock interview modules drive revenues." }
    ],
    swot: {
      s: [
        "Respected brand in OnlyIAS, known for high-quality civil services content.",
        "Affordable pricing model compared to traditional offline institutes.",
        "Comprehensive mains answer feedback features."
      ],
      w: [
        "Highly subjective grading processes, difficult to scale with human-only reviewers.",
        "High learner stress and fatigue rates across multi-year preparation cycles.",
        "Low margins for low-cost online courses."
      ],
      o: [
        "Expanding offline civil service study hubs in state capitals.",
        "Offering specialized optional subjects courses in regional languages.",
        "Creating corporate partnerships for state-level administrative training."
      ],
      t: [
        "Intense pricing actions by competitor online portals.",
        "Poaching of celebrity GS teachers by competitive platforms.",
        "Changes in exam structures by UPSC affecting existing study content."
      ]
    },
    executiveSummary: {
      summaryText: "PW OnlyIAS brings affordable test preparation to civil services candidates across India. By offering foundation courses at competitive prices, it reaches candidates who cannot afford traditional offline academies. The core operational challenge is scaling subjective mains evaluations. Integrating AI-assisted grading systems, using automated current affairs summarizers, and running optional subject recommenders will speed up feedback, lower costs, and support students through the exam process.",
      strategicPriorities: [
        "Deploy the AI Mains Answer Evaluator to speed up feedback loops.",
        "Scale the daily current affairs automation to reduce editorial burdens.",
        "Expand regional center footprints to offer hybrid mock interview options."
      ],
      metricsForecast: [
        "Mains feedback turnaround: 60% faster response times using AI review assists.",
        "Review expenses: 40% reduction in evaluation costs through automated screening.",
        "Optional cross-sells: 20% higher conversion rates via AI recommenders."
      ]
    }
  },
  "curiousjr": {
    name: "CuriousJr (K-10 & Kids Coding)",
    overview: {
      text: "CuriousJr is Physics Wallah's specialized online learning platform for students in Classes 1–10. Acquired by PW in early 2023, it delivers interactive live tuition in coding, mathematics, science, and English, using school board curriculums to build logical, technical, and academic foundations from an early age.",
      createdWhy: "To introduce coding and logical thinking to school-age children in regional languages at an affordable price point, preparing them for future technology careers.",
      launched: "Founded in 2020 and acquired by Physics Wallah in 2023.",
      problemSolved: "Lack of high-quality, structured, and affordable coding and interactive school tuition for primary and middle school students in Tier-2/3/4 towns."
    },
    leadership: {
      leadName: "Mridul Ranjan Sahu, Amit Sekhar & Amitoj Singh (Founders of CuriousJr)",
      roles: "Directing product design, mobile curriculum development, coding tools engineering, and teacher coordination.",
      stakeholders: "Mentors, Parent Relations Officers, Curriculum HODs."
    },
    targetAudience: {
      customers: "Primary and middle school students (Classes 1–10) and parents looking for school academic tutoring and coding foundation courses.",
      segments: "Aspirants of early coding, school curriculum excellence (CBSE, ICSE, State Boards), seeking personalized academic attention.",
      persona: {
        name: "Aarav Sharma",
        age: "10 (Class 5 - Coding & Math Student)",
        profile: "Resident of Jhansi, Uttar Pradesh. Attends a local English-medium school. Parents are schoolteachers.",
        story: "Shows an early interest in video games and mobile apps. Enrolled in CuriousJr's Power Batch to learn foundational Block Coding and Python, while getting daily homework mentorship for Math and Science."
      }
    },
    productsServices: {
      onlineOfferings: [
        "CuriousJr Power Batch (School tuition for Math, Science, English, Social Science, Hindi)",
        "Foundation Block-Coding Course (Visual coding for classes 1-4)",
        "Advanced Text-Coding Batches (Python, JavaScript, HTML/CSS for classes 5-10)",
        "Mobile app-building masterclasses"
      ],
      offlineOfferings: [
        "CuriousJr printed coding practice books & activity cards",
        "School level coding workshops and bootcamps"
      ],
      premiumServices: [
        "CuriousJr Two-Teacher Support (Main teacher + 1:1 mentor doubt-solver)",
        "1-on-1 personalized portfolio review (publishing apps to CuriousJr App Store)",
        "Monthly Parent-Teacher consultations"
      ]
    },
    customerAcquisition: {
      organic: [
        "CuriousJr mobile coding application (over 1M+ downloads with organic reviews)",
        "Physics Wallah main K-10 YouTube channels cross-promoting foundational courses",
        "Free visual coding contests for children"
      ],
      paid: [
        "Parent-targeted Facebook and Instagram campaigns highlighting screen-time utility",
        "Google Search Ads for 'best coding course for kids'"
      ],
      referral: [
        "Referral programs awarding learning coins for coding certifications shared on social media"
      ],
      offline: [
        "Partnerships with regional private schools to host logic tests and coding workshops"
      ]
    },
    leadGenProcess: {
      text: "CuriousJr captures warm leads by offering free, gamified mobile coding games on their app and running school-level logic challenges.",
      forms: ["Free trial batch registration pages on PW app", "CuriousJr coding olympiad registration forms"],
      campaigns: ["'Hour of Code' free national challenges", "Parent webinars on digital safety and child logical development"],
      webEvents: ["Coding project showcase live streams on YouTube"]
    },
    salesCounselling: {
      questions: [
        "What is your child's current grade and coding familiarity?",
        "Which school board does your child's school follow?",
        "Does your child have access to a laptop or will they learn via mobile phone?",
        "What is the primary goal: academic improvement or coding skills?"
      ],
      recommendations: "Recommend the CuriousJr 'Power Batch' for grades 1-10 school tuition. For tech-focused students, bundle visual code building with standard academic batches.",
      objections: [
        { obj: "Is my child too young to learn coding?", ans: "We use visual block-based drag-and-drop interfaces that build logical block logic without requiring complex text syntax, making it highly intuitive for ages 6+." },
        { obj: "I don't have a computer for my child.", ans: "CuriousJr's app is specifically engineered for full coding and compiling directly on mobile devices." }
      ]
    },
    conversionFunnel: {
      stages: [
        { name: "Free App Install / Viewer", value: 10000, conversion: "100%" },
        { name: "Free Trial Lesson Registered", value: 3500, conversion: "35%" },
        { name: "Parent Call & Counseled Lead", value: 1800, conversion: "51.4%" },
        { name: "Power Batch Checkout Visited", value: 720, conversion: "40%" },
        { name: "Power Batch Paid Enrollments", value: 216, conversion: "30%" }
      ],
      challenges: [
        "Parent drop-off due to preference for physical local coaching for younger kids.",
        "Ensuring continuous child interest after the free trial phase."
      ]
    },
    revenueModel: {
      streams: [
        "Power Batch course tuition fees (Math, Science, Coding packages)",
        "Specialized Coding micro-certifications",
        "Study material box delivery charges"
      ],
      pricingModel: "Affordable tuition plans (ranging from INR 1,500 to INR 3,500/month) with flexible monthly installment packages.",
      upsell: [
        "Upselling from visual block coding to text-based Python/Web Dev classes",
        "Personal 1:1 mentor assistance upgrades"
      ]
    },
    operations: {
      teams: [
        "Academic Delivery: Storytellers, visual coding developers, and school mentors.",
        "App Engineering: Mobile compiler developers and gamification UI designers.",
        "Parent Support: Student progress trackers and counsellor managers."
      ],
      workflows: [
        "Daily flow: Story-based lecture delivery -> In-app coding puzzle solving -> Student mentor doubt resolution -> Progress report generation.",
        "Weekly loop: Weekend coding project -> Code compilation check -> Automated notification to parents."
      ],
      processes: [
        "Child-friendly script vetting and lesson visual assets design.",
        "Mentor training for empathetic handling of younger students."
      ]
    },
    studentSuccess: {
      postPurchase: "Onboarding call with the assigned mentor to set up the student dashboard, profile baseline logic skills, and schedule parent communication timings.",
      retention: [
        "Weekly achievement badges and in-app avatar customization items",
        "Call triggers to parents if the child misses three consecutive live lessons"
      ],
      engagement: [
        "Gamified leaderboard challenges and peer coding showcases",
        "Custom app store where kids publish their apps and share links with family"
      ],
      escalations: [
        "Class rating drops trigger review by Zonal HODs",
        "In-app compile errors recurring flagged to the student's mentor for 1-on-1 assistance"
      ]
    },
    dataGenerated: {
      lead: ["Child age", "Parent occupation", "Mobile device capability", "Classroom board details"],
      sales: ["Batch ticket ID", "Installment payment clearances", "Sibling coupons applied"],
      customer: ["Parent WhatsApp details", "Preferred call timings", "Languages spoken at home"],
      learning: ["Block code drag count", "Time spent per coding puzzle", "Quiz answers accuracy log"],
      financial: ["Average monthly payment collection", "Refund rates log"],
      operational: ["App store submission counts", "Average lesson ratings by child"]
    },
    kpisMetrics: {
      marketing: [
        "Mobile app-store ranking position (Target: Top 10 in kid coding)",
        "Free to paid conversion rates (Target: >6%)",
        "Parent CAC (Target: < INR 400)"
      ],
      sales: [
        "Lead to Power Batch purchase (Target: >12% of counseled)",
        "Up-sell conversion rates (Target: >15%)",
        "Average monthly subscription duration"
      ],
      operations: [
        "Mobile compile latency (Target: < 2 seconds)",
        "Mentor check-in compliance (Target: 100%)",
        "Doubt resolution rate within class (Target: >95%)"
      ],
      success: [
        "Lesson attendance compliance (Target: >80%)",
        "App store projects published per student (Target: >2 per season)",
        "Parent NPS score (Target: >75)"
      ],
      business: [
        "Monthly Recurring Revenue contribution (MRR)",
        "Customer Acquisition Cost payback period (Target: < 3 months)",
        "Gross margins (Target: >40%)"
      ]
    },
    challenges: {
      marketing: "Convincing parents of primary school children to prioritize coding/online tuition over traditional outdoor play or local face-to-face coaching.",
      sales: "Handling price sensitivity of parents from lower-tier towns who are used to cheap local offline tuition fees.",
      operations: "Managing real-time coding compile servers during concurrent student labs without server delay.",
      retention: "Maintaining child focus and interest in a remote online environment after the initial gamified novelty wears off.",
      scalability: "Hiring and training bilingual coding teachers who can teach logic concepts clearly using storytelling methodologies for children."
    },
    aiOpportunities: [
      {
        dept: "Marketing",
        current: "Graphic designers manually design banners and certificates for children who complete levels.",
        opportunity: "Implement AI Avatar & Certificate Generator to dynamically design customized avatars and graduation cards celebrating child projects.",
        timeSavings: "Saves 5 hours of design work per week.",
        costSavings: "Reduces design overhead.",
        impact: "Boosts organic social sharing by parents on WhatsApp/Facebook, driving organic referral downloads."
      },
      {
        dept: "Academics",
        current: "Mentor teachers manually check kids' drag-and-drop block code logic step by step to identify bugs.",
        opportunity: "Deploy in-app AI Block Code Debugger to automatically highlight logic errors (like loose blocks or loops without exit conditions).",
        timeSavings: "Instantly identifies bugs, saving 15 mins per assignment.",
        costSavings: "Optimizes mentor workload, permitting wider class sizes.",
        impact: "Prevents child frustration during coding homework, keeping engagement high."
      },
      {
        dept: "Sales & Counselling",
        current: "Counsellors call all app installers manually, despite many being young children playing visual puzzles.",
        opportunity: "Deploy Lead Telemetry Scorer to segment parent leads based on in-app quiz scores and project submission metrics.",
        timeSavings: "Reduces call volumes by 50% by screening non-parent users.",
        costSavings: "Saves tele-counselling agent staffing costs.",
        impact: "Increases sales efficiency by targeting parents of high-potential students."
      }
    ],
    aiProjects: [
      { num: "01", title: "AI Block Code Debugger", desc: "In-app code analyzer verifying visual coding blocks logic, suggesting placement fixes in real time for children.", impactBadge: "High Impact", effortBadge: "Medium Effort" },
      { num: "02", title: "Smart Lead Telemetry Filter", desc: "Filters user telemetry to separate children playing free logic levels from parents showing purchase intent.", impactBadge: "High Impact", effortBadge: "Low Effort" },
      { num: "03", title: "Gamified AI Storyteller Coach", desc: "Conversational tutor explaining coding logic principles (loops, variables) using personalized children stories.", impactBadge: "Medium Impact", effortBadge: "High Effort" },
      { num: "04", title: "AI Project Showcase Reviewer", desc: "Analyzes student app submissions, testing buttons/responsiveness before approving publishing on the CuriousJr store.", impactBadge: "Medium Impact", effortBadge: "Medium Effort" },
      { num: "05", title: "Weekly Automated Progress Report AI", desc: "Compiles kids' performance metrics and drafts detailed, visual, parent-friendly updates sent via WhatsApp.", impactBadge: "High Impact", effortBadge: "Low Effort" }
    ],
    interactions: {
      marketing: "Generates user signups by hosting free app building visual contests. Promotes student portfolio achievements to parents on social platforms.",
      sales: "Reaches out to parents of children who demonstrate strong interest and logic inside the free app.",
      counselling: "Advises parents on how logic-based coding boosts general cognitive development and math scores.",
      ops: "Arranges tutor class rosters, tracks visual assets publishing, and regulates progress reports distribution.",
      tech: "Ensures zero-lag mobile compilers, gamified puzzle logic execution, and parent tracking apps stability.",
      success: "Keeps children motivated through gamified levels, avatars, and ensures parent meetings are conducted.",
      finance: "Tracks subscription installments, payment collections, and discount coupons."
    },
    businessFlow: [
      { num: 1, label: "Acquisition", title: "Gamified App Installs", detail: "Children download CuriousJr app from Google Play Store to play logic puzzles." },
      { num: 2, label: "Lead Gen", title: "Trial Lessons Signup", detail: "Parents sign up their child for a free live coding trial batch." },
      { num: 3, label: "Counselling", title: "Logic & Board Consulting", detail: "Counsellors guide parents on coding paths and core academic packages." },
      { num: 4, label: "Conversion", title: "Power Batch Enrollment", detail: "Parents complete subscription, opting for monthly installment plans." },
      { num: 5, label: "Enrollment", title: "Mentor Allocation", detail: "Child is assigned a personal study mentor and schedules live classes." },
      { num: 6, label: "Delivery", title: "Interactive Tuition", detail: "Live interactive classes featuring block-based coding, math puzzles, and science stories." },
      { num: 7, label: "Success", title: "App Store Publishing", detail: "Students build their first functional mobile apps and publish them on the CuriousJr App Store." },
      { num: 8, label: "Retention", title: "Advance Track Upgrade", detail: "Children graduate from block coding to text-based Python/Web Dev tracks." },
      { num: 9, label: "Revenue", title: "Subscription Cycle", detail: "Steady monthly tuition collections, micro-credentials sales, and premium mentor fees." }
    ],
    swot: {
      s: [
        "Gamified coding mobile compiler optimized to run smoothly on low-end devices.",
        "Integrated Two-Teacher support framework ensuring high individual attention.",
        "Access to Physics Wallah's parent trust and nationwide student base."
      ],
      w: [
        "High churn rate typical of youth/after-school programs.",
        "Dependent on parental understanding of the value of early-stage coding.",
        "Higher operational mentor staffing cost per class."
      ],
      o: [
        "Expanding regional language coaching to tap state board markets.",
        "White-labeling visual coding platform tools for traditional school curriculums.",
        "Selling specialized 1:1 project creation classes."
      ],
      t: [
        "Heavy competition from capitalized kids coding edtech giants.",
        "Stricter government guidelines limiting screen time allowances for primary students.",
        "Parents canceling coding classes during heavy school board exam months."
      ]
    },
    executiveSummary: {
      summaryText: "CuriousJr represents Physics Wallah's entry into the K-10 and early coding sectors. By offering gamified mobile compilers and high-touch Power Batches, it bridges the gap in early child logical development at a fraction of competitors' costs. The main operational challenge is controlling mentor headcount costs and boosting program retention. Deploying in-app AI coding debuggers, automated parent reporting systems, and target user filters will reduce staff requirements, elevate parent trust, and establish the vertical as a key feeder into secondary K-12 school divisions.",
      strategicPriorities: [
        "Integrate the AI Block Code Debugger to automate coding assignments checks.",
        "Scale parent communication loops using weekly automated WhatsApp progress cards.",
        "Expand state board regional languages visual tuition programs."
      ],
      metricsForecast: [
        "TA checking speed: 75% faster review times using in-app AI debugger reviews.",
        "Parent engagement: 30% higher NPS scores through immediate progress cards.",
        "Lead efficiency: 40% reduction in counseling waste via telemetry score targeting."
      ]
    }
  }
};

let currentVerticalKey = "jee-neet";
let currentActiveSection = "consolidation";

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  setupVerticalSelector();
  setupSidebarNavigation();
  setupSearch();
  setupCompleteBusinessFlow();
  setupInteractions();
  initConsolidatedCharts();
  
  // Render initial vertical
  loadVertical(currentVerticalKey);
});

// Dropdown handler
function setupVerticalSelector() {
  const container = document.querySelector(".vertical-selector-container");
  const btn = document.getElementById("verticalSelectBtn");
  const menu = document.getElementById("verticalDropdownMenu");
  
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    container.classList.toggle("open");
  });
  
  document.addEventListener("click", () => {
    container.classList.remove("open");
  });
  
  // Options click
  const options = document.querySelectorAll(".vertical-dropdown-option");
  options.forEach(opt => {
    opt.addEventListener("click", (e) => {
      e.stopPropagation();
      const key = opt.getAttribute("data-value");
      options.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      
      const labelName = VERTICALS_DATA[key] ? VERTICALS_DATA[key].name : opt.textContent;
      document.getElementById("selectedVerticalLabel").textContent = labelName;
      
      container.classList.remove("open");
      currentVerticalKey = key;
      loadVertical(key);
      
      // If currently on consolidated tab, redirect to overview of selected vertical
      if (currentActiveSection === "consolidation") {
        const overviewTab = document.querySelector('.nav-item[data-section="overview"]');
        if (overviewTab) {
          overviewTab.click();
        }
      }
    });
  });
}

// Navigation Tab switcher
function setupSidebarNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = item.getAttribute("data-section");
      
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      
      currentActiveSection = targetSection;
      
      // Update visibility
      const panes = document.querySelectorAll(".section-pane");
      panes.forEach(pane => {
        pane.classList.remove("active");
        if (pane.id === targetSection) {
          pane.classList.add("active");
        }
      });
      
      // Adjust view
      document.querySelector(".viewport-panel").scrollTop = 0;
    });
  });
}

// Search utility
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) return;
    
    // Search headers and content in the current active panel or global sections
    const navItems = document.querySelectorAll(".nav-item");
    let matchFound = false;
    
    for (let item of navItems) {
      const text = item.textContent.toLowerCase();
      const targetSection = item.getAttribute("data-section");
      
      if (text.includes(query)) {
        item.click();
        matchFound = true;
        break;
      }
    }
  });
}

// Load data into DOM templates
function loadVertical(key) {
  const data = VERTICALS_DATA[key];
  if (!data) return;
  
  // 1. Render Overview
  document.getElementById("v-overview-text").textContent = data.overview.text;
  document.getElementById("v-overview-why").textContent = data.overview.createdWhy;
  document.getElementById("v-overview-launched").textContent = data.overview.launched;
  document.getElementById("v-overview-solves").textContent = data.overview.problemSolved;
  
  // 2. Render Leadership
  document.getElementById("v-lead-name").textContent = data.leadership.leadName;
  document.getElementById("v-lead-role").textContent = data.leadership.roles;
  document.getElementById("v-lead-stakeholders").textContent = data.leadership.stakeholders;
  
  // 3. Render Target Audience
  document.getElementById("v-audience-customers").textContent = data.targetAudience.customers;
  document.getElementById("v-audience-segments").textContent = data.targetAudience.segments;
  document.getElementById("v-persona-name").textContent = data.targetAudience.persona.name;
  document.getElementById("v-persona-age").textContent = data.targetAudience.persona.age;
  document.getElementById("v-persona-profile").textContent = data.targetAudience.persona.profile;
  document.getElementById("v-persona-story").textContent = data.targetAudience.persona.story;
  
  // 4. Render Products & Services
  renderListHelper("v-products-online", data.productsServices.onlineOfferings);
  renderListHelper("v-products-offline", data.productsServices.offlineOfferings);
  renderListHelper("v-products-premium", data.productsServices.premiumServices);
  
  // 5. Customer Acquisition
  renderListHelper("v-acq-organic", data.customerAcquisition.organic);
  renderListHelper("v-acq-paid", data.customerAcquisition.paid);
  renderListHelper("v-acq-referral", data.customerAcquisition.referral);
  renderListHelper("v-acq-offline", data.customerAcquisition.offline);
  
  // 6. Lead Generation
  document.getElementById("v-leadgen-text").textContent = data.leadGenProcess.text;
  renderListHelper("v-leadgen-forms", data.leadGenProcess.forms);
  renderListHelper("v-leadgen-campaigns", data.leadGenProcess.campaigns);
  renderListHelper("v-leadgen-webevents", data.leadGenProcess.webEvents);
  
  // 7. Sales & Counselling
  renderListHelper("v-sales-questions", data.salesCounselling.questions);
  document.getElementById("v-sales-rec").textContent = data.salesCounselling.recommendations;
  
  // Objection list handler
  const objContainer = document.getElementById("v-sales-objections");
  objContainer.innerHTML = '';
  data.salesCounselling.objections.forEach(item => {
    const li = document.createElement("li");
    li.className = "card-bullet-item rose";
    li.innerHTML = `<span class="bullet-dot"></span><div><strong>Objection:</strong> "${item.obj}"<br><strong>Handling:</strong> ${item.ans}</div>`;
    objContainer.appendChild(li);
  });
  
  // 8. Conversion Funnel
  renderFunnel(data.conversionFunnel);
  
  // 9. Revenue Model
  renderListHelper("v-rev-streams", data.revenueModel.streams);
  document.getElementById("v-rev-pricing").textContent = data.revenueModel.pricingModel;
  renderListHelper("v-rev-upsell", data.revenueModel.upsell);
  
  // 10. Operations
  renderListHelper("v-ops-teams", data.operations.teams);
  renderListHelper("v-ops-workflows", data.operations.workflows);
  renderListHelper("v-ops-processes", data.operations.processes);
  
  // 11. Student Success
  document.getElementById("v-success-onboard").textContent = data.studentSuccess.postPurchase;
  renderListHelper("v-success-retention", data.studentSuccess.retention);
  renderListHelper("v-success-engagement", data.studentSuccess.engagement);
  renderListHelper("v-success-escalations", data.studentSuccess.escalations);
  
  // 12. Data Generated
  renderListHelper("v-data-lead", data.dataGenerated.lead);
  renderListHelper("v-data-sales", data.dataGenerated.sales);
  renderListHelper("v-data-customer", data.dataGenerated.customer);
  renderListHelper("v-data-learning", data.dataGenerated.learning);
  renderListHelper("v-data-financial", data.dataGenerated.financial);
  renderListHelper("v-data-operational", data.dataGenerated.operational);
  
  // 13. KPIs & Metrics
  renderKPIHelper("v-kpi-mktg", data.kpisMetrics.marketing);
  renderKPIHelper("v-kpi-sales", data.kpisMetrics.sales);
  renderKPIHelper("v-kpi-ops", data.kpisMetrics.operations);
  renderKPIHelper("v-kpi-success", data.kpisMetrics.success);
  renderKPIHelper("v-kpi-biz", data.kpisMetrics.business);
  
  // 14. Challenges
  renderListHelper("v-challenge-mktg", data.challenges.marketing);
  renderListHelper("v-challenge-sales", data.challenges.sales);
  renderListHelper("v-challenge-ops", data.challenges.operations);
  renderListHelper("v-challenge-retention", data.challenges.retention);
  renderListHelper("v-challenge-scale", data.challenges.scalability);
  
  // 15. AI Automation Opportunities
  renderAIOpportunitiesTable(data.aiOpportunities);
  
  // 16. Recommended AI Projects
  renderAIProjects(data.aiProjects);
  
  // 17. Department Interactions
  loadInteractions(data.interactions);
  
  // 18. Complete Business Flow
  loadCompleteBusinessFlow(data.businessFlow);
  
  // 19. SWOT Analysis
  renderSWOT(data.swot);
  
  // 20. Executive Summary
  renderExecutiveSummary(data.name, data.executiveSummary);
}

// Helpers
function renderListHelper(id, items) {
  const container = document.getElementById(id);
  if (!container) return;
  container.innerHTML = '';
  
  const classColor = container.getAttribute("data-color") || "pw-blue";
  
  if (!items || items.length === 0) {
    container.innerHTML = `<li class="card-bullet-item ${classColor}"><span class="bullet-dot"></span><div>No offline/premium offerings reported.</div></li>`;
    return;
  }
  
  // Safe-guard against single string values
  const itemsArray = typeof items === 'string' ? [items] : items;
  
  itemsArray.forEach(item => {
    const li = document.createElement("li");
    li.className = `card-bullet-item ${classColor}`;
    li.innerHTML = `<span class="bullet-dot"></span><div>${item}</div>`;
    container.appendChild(li);
  });
}

function renderKPIHelper(id, kpis) {
  const container = document.getElementById(id);
  if (!container) return;
  container.innerHTML = '';
  kpis.forEach(kpi => {
    const div = document.createElement("div");
    div.style.padding = "0.5rem 0";
    div.style.borderBottom = "1px solid rgba(255,255,255,0.03)";
    div.style.fontSize = "0.85rem";
    div.style.color = "var(--text-secondary)";
    div.innerHTML = kpi;
    container.appendChild(div);
  });
}

function renderFunnel(funnelData) {
  const chartContainer = document.getElementById("funnelChart");
  chartContainer.innerHTML = '';
  
  funnelData.stages.forEach(stage => {
    const row = document.createElement("div");
    row.className = "funnel-stage-row";
    
    // Width percentage based on value relative to top
    const percentWidth = (stage.value / funnelData.stages[0].value) * 100;
    
    row.innerHTML = `
      <div class="funnel-stage-label">${stage.name}</div>
      <div class="funnel-stage-bar-outer">
        <div class="funnel-stage-bar-inner" style="width: ${percentWidth}%">
          <span class="funnel-stage-value">${stage.value.toLocaleString()}</span>
        </div>
      </div>
      <div class="funnel-stage-conversion">${stage.conversion}</div>
    `;
    chartContainer.appendChild(row);
  });
  
  // Funnel Challenges
  renderListHelper("v-funnel-challenges", funnelData.challenges);
}

function renderSWOT(swotData) {
  const sList = document.getElementById("swot-s-list");
  const wList = document.getElementById("swot-w-list");
  const oList = document.getElementById("swot-o-list");
  const tList = document.getElementById("swot-t-list");
  
  renderListHelper("swot-s-list", swotData.s);
  renderListHelper("swot-w-list", swotData.w);
  renderListHelper("swot-o-list", swotData.o);
  renderListHelper("swot-t-list", swotData.t);
}

function renderAIOpportunitiesTable(opps) {
  const tbody = document.getElementById("opportunitiesTableBody");
  tbody.innerHTML = '';
  
  opps.forEach(opp => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="opp-dept-badge">${opp.dept}</span></td>
      <td>${opp.current}</td>
      <td><strong>${opp.opportunity}</strong></td>
      <td style="color: var(--accent-emerald); font-weight: 600;">${opp.timeSavings}</td>
      <td style="color: var(--accent-emerald); font-weight: 600;">${opp.costSavings}</td>
      <td>${opp.impact}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderAIProjects(projects) {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = '';
  
  projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    
    const impactClass = proj.impactBadge.toLowerCase().includes("high") ? "impact-high" : "impact-medium";
    const effortClass = proj.effortBadge.toLowerCase().includes("low") ? "effort-low" : "effort-medium";
    
    card.innerHTML = `
      <div class="project-num">${proj.num}</div>
      <div class="project-title">${proj.title}</div>
      <div class="project-desc">${proj.desc}</div>
      <div class="project-badges">
        <span class="badge ${impactClass}">${proj.impactBadge}</span>
        <span class="badge ${effortClass}">${proj.effortBadge}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Department Interactions setup
let deptInteractionsData = {};
function setupInteractions() {
  const nodes = document.querySelectorAll(".dept-node-item");
  nodes.forEach(node => {
    node.addEventListener("click", () => {
      nodes.forEach(n => n.classList.remove("active"));
      node.classList.add("active");
      
      const deptKey = node.getAttribute("data-dept");
      document.getElementById("interactionDetailTitle").textContent = node.querySelector(".dept-node-label").textContent;
      document.getElementById("interactionDetailText").textContent = deptInteractionsData[deptKey] || "No data logged.";
    });
  });
}

function loadInteractions(interactions) {
  deptInteractionsData = interactions;
  // Trigger click on first active node
  const activeNode = document.querySelector(".dept-node-item.active");
  if (activeNode) {
    activeNode.click();
  }
}

// Complete Business Flow setup
let businessFlowData = [];
function setupCompleteBusinessFlow() {
  // Event delegation or direct binding inside dynamic updates
}

function loadCompleteBusinessFlow(flow) {
  businessFlowData = flow;
  const listContainer = document.getElementById("flowStageList");
  listContainer.innerHTML = '';
  
  flow.forEach((step, idx) => {
    const node = document.createElement("div");
    node.className = `flow-step-node ${idx === 0 ? 'active' : ''}`;
    node.setAttribute("data-index", idx);
    node.innerHTML = `
      <div class="flow-step-number">Step 0${step.num}</div>
      <div class="flow-step-label">${step.label}</div>
    `;
    
    node.addEventListener("click", () => {
      document.querySelectorAll(".flow-step-node").forEach(n => n.classList.remove("active"));
      node.classList.add("active");
      showFlowDetail(idx);
    });
    
    listContainer.appendChild(node);
    
    // Add arrow if not the last item
    if (idx < flow.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "flow-arrow";
      listContainer.appendChild(arrow);
    }
  });
  
  // Show first step detail by default
  showFlowDetail(0);
}

function showFlowDetail(index) {
  const step = businessFlowData[index];
  if (!step) return;
  
  document.getElementById("flowDetailTitle").innerHTML = `
    <svg style="width: 18px; height: 18px; stroke: currentColor; stroke-width: 2; fill: none;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    ${step.title}
  `;
  document.getElementById("flowDetailText").textContent = step.detail;
}

// Render Executive Summary
function renderExecutiveSummary(verticalName, summary) {
  document.getElementById("es-vertical-name").textContent = verticalName;
  document.getElementById("es-summary-text").textContent = summary.summaryText;
  
  // Render Strategic Priorities
  const prioritiesContainer = document.getElementById("es-priorities-list");
  prioritiesContainer.innerHTML = '';
  summary.strategicPriorities.forEach(item => {
    const li = document.createElement("li");
    li.className = "es-bullet-item";
    li.textContent = item;
    prioritiesContainer.appendChild(li);
  });
  
  // Render Metrics Forecasts
  const metricsContainer = document.getElementById("es-metrics-list");
  metricsContainer.innerHTML = '';
  summary.metricsForecast.forEach(item => {
    const li = document.createElement("li");
    li.className = "es-bullet-item";
    li.textContent = item;
    metricsContainer.appendChild(li);
  });
}

// Print Handler
function triggerPrint() {
  window.print();
}
window.triggerPrint = triggerPrint;

// Consolidated Interactive Tooltips Helper
function initConsolidatedCharts() {
  const points = document.querySelectorAll(".svg-point");
  if (points.length === 0) return;

  const tooltip = document.createElement("div");
  tooltip.style.position = "absolute";
  tooltip.style.background = "rgba(15, 23, 42, 0.95)";
  tooltip.style.border = "1px solid var(--accent-pw-blue)";
  tooltip.style.borderRadius = "6px";
  tooltip.style.padding = "0.4rem 0.6rem";
  tooltip.style.fontSize = "0.75rem";
  tooltip.style.fontWeight = "700";
  tooltip.style.color = "var(--text-light)";
  tooltip.style.pointerEvents = "none";
  tooltip.style.opacity = "0";
  tooltip.style.transition = "opacity 0.15s ease";
  tooltip.style.boxShadow = "var(--shadow-md)";
  tooltip.style.zIndex = "1000";
  tooltip.style.fontFamily = "var(--font-primary)";
  document.body.appendChild(tooltip);

  const dataValues = [
    { year: "FY23", rev: "₹772 Cr" },
    { year: "FY24", rev: "₹1,941 Cr" },
    { year: "FY25", rev: "₹2,887 Cr" },
    { year: "FY26", rev: "₹3,900 Cr" }
  ];

  points.forEach((point, index) => {
    point.addEventListener("mouseenter", (e) => {
      const val = dataValues[index];
      if (!val) return;
      tooltip.innerHTML = `<span style="color: var(--accent-pw-blue); font-weight:800;">${val.year}</span>: ${val.rev}`;
      tooltip.style.opacity = "1";
      point.setAttribute("r", "7.5");
      point.style.stroke = "var(--accent-purple)";
    });

    point.addEventListener("mousemove", (e) => {
      tooltip.style.left = (e.pageX + 12) + "px";
      tooltip.style.top = (e.pageY - 35) + "px";
    });

    point.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
      point.setAttribute("r", "4.5");
      point.style.stroke = "var(--accent-pw-blue)";
    });
  });
}

