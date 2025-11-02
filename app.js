const APP = (() => {
  const RATING_VALUES = {
    "Excellent": 10,
    "Good": 8,
    "Satisfactory": 6,
    "Needs Improvement": 2
  };

  const DEFAULT_CRITERIA = [
    { key: 'title', label: 'Title & Abstract', weight: 0.10 },
    { key: 'intro', label: 'Introduction (Objective & Research Problem)', weight: 0.15 },
    { key: 'lit', label: 'Literature Review', weight: 0.15 },
    { key: 'framework', label: 'Research Framework (Results & Analysis)', weight: 0.20 },
    { key: 'poster', label: 'Poster & Representation (Q&A)', weight: 0.15 },
    { key: 'teamwork', label: 'Teamwork & Collaboration', weight: 0.15 }
  ];

  const ABDULLAH_CRITERIA = [
    { key: 'valueProposition', label: 'Value Proposition', weight: 0.11 },
    { key: 'customerSegment', label: 'Customer Segment', weight: 0.11 },
    { key: 'channels', label: 'Channels', weight: 0.11 },
    { key: 'customerRelationship', label: 'Customer Relationship', weight: 0.11 },
    { key: 'keyResources', label: 'Key Resources', weight: 0.11 },
    { key: 'keyActivities', label: 'Key Activities', weight: 0.11 },
    { key: 'keyPartners', label: 'Key Partners', weight: 0.11 },
    { key: 'revenueStreams', label: 'Revenue Streams', weight: 0.11 },
    { key: 'costStructure', label: 'Cost Structure', weight: 0.12 }
  ];

  const INITIAL_PROJECTS = [
  // Agent Projects
  { name: 'Agent Project 1', description: 'Harir Alnamasi, Noura Almazid, Yara Almaheza, Adeem Alharqous', type:'Agent Project' },
  { name: 'Agent Project 2', description: 'Lin Almasri, Lin Khashoggi, Tarf Alsakhbara, Reema Alshahri', type:'Agent Project' },
  { name: 'Agent Project 3', description: 'Ghaida Alsubti, Shatha Alsaif, Shaden Alsaif, Munira Alanizan', type:'Agent Project' },
  { name: 'Agent Project 4', description: 'Riyof Almuteeri, Haya Alotaibi, Nouf Alquwaifli, Fatima Alkhariji', type:'Agent Project' },
  { name: 'Agent Project 5', description: 'Rahaf Albalali, Noura Alrashood, Taif Alarfan, Lama Alfaki', type:'Agent Project' },
  { name: 'Agent Project 6', description: 'Farah Thuwaini, Miad Alsheibani, Dalia Aldawas, Ruba Alqahtani', type:'Agent Project' },
  { name: 'Agent Project 7', description: 'Dania Altwaijri, Athir Alshahri, Lana AlMosa, Ghaida Alrahili, Noura Alalyan', type:'Agent Project' },
  { name: 'Agent Project 8', description: 'Shawq Khaled Aldosari, Layan Hisham Alshaheen, Wajd Bin Hazaa, Reema Saad Alkathiri', type:'Agent Project' },
  { name: 'Agent Project 9', description: 'Farah Alyami, Dana Mohammed Albadrani, Najd Alwarthan, Fatima Alyousef, Layan Alanzi', type:'Agent Project' },
  { name: 'Agent Project 10', description: 'Ghaida Ayesh Alalyani, Wesal Abdulrahman Alotaibi, Haya Mohammed Aldosari, Yara Alshadoukhi, Dina Alharbi', type:'Agent Project' },
  { name: 'Agent Project 11', description: 'Hadeel Alsheibani, Rawan Altawil, Haya Aldosari, Rawan Alotaibi, Sarah Alfarawi', type:'Agent Project' },
  { name: 'Agent Project 12', description: 'Ghaida Alanzi, Shahd Alobaid, Wsen Alomar, Rama Alotaibi, Shahd Altamimi', type:'Agent Project' },
  { name: 'Agent Project 13', description: 'Manar Alahmari, Sarah Alharbi, Ruba Alshalash, Taif Alharbi, Haya Alhadeeb', type:'Agent Project' },
  { name: 'Agent Project 14', description: 'Mazen Aseeri, Lina Alotaibi, Jana Alkhalifi, Farah Aldabbasi, Raghad Alfarshouti', type:'Agent Project' },
  { name: 'Agent Project 15', description: 'Anfal Alkuraidis, Jana Alamer, Farah Alhowaidi, Hala Althadheeth, Layan Alfifi', type:'Agent Project' },
  { name: 'Agent Project 16', description: 'Hessa Almajli, Fai Alomari, Janan Alnawfal, Noura Alotaibi, Alhanouf Alsharafi', type:'Agent Project' },
  { name: 'Agent Project 17', description: 'Raya Aldosari, Modhi Alhamdan, Lamia Alsaalem, Riyof Aldukkan', type:'Agent Project' },
  { name: 'Agent Project 18', description: 'Sarah Albaz, Basma Alqahtani, Layan Alkhnizan, Nada Almuteeri, Dana Aldrihem', type:'Agent Project' },

  // Research Projects
  { name: 'Predicting Customer Churn Using Machine Learning Models', description: 'Section O51 - Group 1: Somaya Altif, Rowa Alhamidi, Jood Alqazlan, Bushra Almuqayrah', type:'Research Project' },
  { name: 'Automatic Phishing Email Classification', description: 'Section O51 - Group 2: Rana Alaskar, Lujain Alruwaili, Munira Almosaa, Rand Alzouman, Jumana Aljahni', type:'Research Project' },
  { name: 'Cybersecurity Threat Detection through Data Analysis', description: 'Section O51 - Group 3: Arej Thalab Albogami, Wafaa Sultan Alotaibi, Haneen Abdulrahman Alshwaiqi, Lujain Saad Alnatefi', type:'Research Project' },
  { name: 'Proactive Intrusion Detection for Smart Home IoT Devices', description: 'Section O51 - Group 4: Ajwan Alomar, Riyof Alghunaimi, Latifa Almuni, Jood Almuni, Amjad Alosaimi', type:'Research Project' },
  { name: 'Detection of Arabic Distress Sounds for a Voice-Activated Emergency Alarm System', description: 'Section O51 - Group 5: Shawq Alhosaini, Dana Alkhuraib, Rima Alarjani, Raghad Alqahtani', type:'Research Project' },
  { name: 'Artificial Intelligence in Education', description: 'Section O52 - Group 1: Khalood Alshmrani, Shahd Alyasin, Maya Alshahri, Dalia Almutairi, Fawz Almudr', type:'Research Project' },
  { name: 'UML vs MDE: Enhancing Agile Software Development', description: 'Section O52 - Group 2: Jood Alshahrani, Jadel Alsaeeri, Albandri Alsaedon, Ghada Altamyat', type:'Research Project' },
  { name: 'Hybrid and Adaptive Software Development Methodologies', description: 'Section O52 - Group 3: Shahd Alotaibi, Layan Faiz Ahmed, Layan Ababtain', type:'Research Project' },
  { name: 'AI in Healthcare', description: 'Section O52 - Group 4: Nouf Khaled Bin Hasan, Asil Alrasn, Ghaida Almghamis, Roda Alothman, Ghalia Albukheet', type:'Research Project' },
  { name: 'Enhancing IoT Security Using Honeypot Systems: Threat Detection and Analysis', description: 'Section O52 - Group 5: Rania Abdullah Farhan, Raghad Alsamih, Dana Alshahri, Shatha Alghamdi, Lamia Alotaibi', type:'Research Project' },
  { name: 'Hybrid Test Automation Framework for Agile Web Applications', description: 'Section O52 - Group 6: Amal Almutairi, Taif Alshahri, Shahd Almutairi', type:'Research Project' }
];

  const ratingsKey = (id) => `ratings_project${id}`;

  function loadRatings(id) {
    return JSON.parse(localStorage.getItem(ratingsKey(id)) || '[]');
  }

  function saveRatings(id, arr) {
    localStorage.setItem(ratingsKey(id), JSON.stringify(arr));
  }

  function addRating(projectId, evaluatorName, scores) {
    const criteria = evaluatorName === "Dr. Abdullah Aljahni" ? ABDULLAH_CRITERIA : DEFAULT_CRITERIA;
    
    let total = 0;
    criteria.forEach(c => {
      const val = scores[c.key];
      const num = RATING_VALUES[val] || 0;
      total += num * c.weight;
    });
    total = Math.round(total * 100) / 100;

    const record = { evaluatorName, scores, total, createdAt: Date.now() };
    const arr = loadRatings(projectId);
    arr.unshift(record);
    saveRatings(projectId, arr);
    return record;
  }

  function aggregate(id) {
    const arr = loadRatings(id);
    const n = arr.length;

    let criteriaKeys = {};
    [...DEFAULT_CRITERIA, ...ABDULLAH_CRITERIA].forEach(c => criteriaKeys[c.key] = 0);

    let totalSum = 0;
    arr.forEach(r => {
      for (let key in r.scores) {
        criteriaKeys[key] += RATING_VALUES[r.scores[key]] || 0;
      }
      totalSum += r.total;
    });

    const averages = {};
    for (let key in criteriaKeys) {
      averages[key] = n ? Math.round((criteriaKeys[key]/n)*100)/100 : 0;
    }
    const averageTotal = n ? Math.round((totalSum/n)*100)/100 : 0;

    return { count: n, averages, averageTotal, entries: arr };
  }

  return {
    DEFAULT_CRITERIA,
    ABDULLAH_CRITERIA,
    INITIAL_PROJECTS,
    RATING_VALUES,
    addRating,
    aggregate,
    loadRatings
  };
})();
