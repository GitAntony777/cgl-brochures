/**
 * Κέντρο Ελληνικής Γλώσσας - Brochure & Booklet Builder Application Logic
 * Modern advertising brochure & booklet designer.
 */

// Brochure & Booklet Templates Content Store
const templatesContent = {
  general: {
    el: {
      cover: {
        title: "Κέντρο Ελληνικής Γλώσσας",
        subtitle: "Γλώσσα, Πολιτισμός & Εκπαίδευση",
        badge: "Επίσημος Ερευνητικός & Εκπαιδευτικός Φορέας",
        eventTitle: "Υπό την εποπτεία του Υπουργείου Παιδείας",
        eventDate: "Θεσσαλονίκη, Ελλάδα • Έτος Ίδρυσης 1994"
      },
      backCover: {
        title: "Επικοινωνία & Πληροφορίες",
        lead: "Βρείτε μας στη Θεσσαλονίκη και ψηφιακά σε όλο τον κόσμο.",
        address: "📍 Καραμαούνα 1, Πλατεία Σκρα, 55134 Καλαμαριά, Θεσσαλονίκη",
        phone: "📞 Τηλέφωνο: +30 2313 331 500",
        email: "✉️ Email: centre@komvos.edu.gr • info@greeklanguage.gr",
        website: "🌐 www.greeklanguage.gr",
        socialFb: "Facebook: @greeklanguage.gr",
        socialTw: "X (Twitter): @GreekLanguage"
      },
      intro: {
        category: "Η Ταυτότητά μας",
        title: "Το Κέντρο (ΚΕΓ)",
        lead: "Το Κέντρο Ελληνικής Γλώσσας (ΚΕΓ) ιδρύθηκε το 1994 στη Θεσσαλονίκη ως ερευνητικό και εκπαιδευτικό ίδρυμα με διεθνή εμβέλεια, εποπτευόμενο από το Υπουργείο Παιδείας.",
        paras: [
          "Λειτουργεί ως Νομικό Πρόσωπο Ιδιωτικού Δικαίου (Ν.Π.Ι.Δ.) μη κερδοσκοπικού χαρακτήρα και αποτελεί το επιτελικό, γνωμοδοτικό και συντονιστικό όργανο της ελληνικής πολιτείας για θέματα γλωσσικής εκπαίδευσης και γλωσσικής πολιτικής. Με έδρα τη Θεσσαλονίκη, το ΚΕΓ συντονίζει τις προσπάθειες για τη στήριξη, διάδοση και διδασκαλία της ελληνικής γλώσσας εντός και εκτός συνόρων.",
          "Η επιστημονική του δράση αναπτύσσεται μέσω τεσσάρων τμημάτων: Λεξικογραφίας, Γλωσσολογίας, Γλώσσας & Λογοτεχνίας, και Στήριξης & Προβολής της Ελληνικής Γλώσσας. Στόχος μας είναι η προώθηση της ελληνικής γλώσσας στη διαχρονία της (Αρχαία, Μεσαιωνική, Νεοελληνική) και η παροχή σύγχρονων ψηφιακών λύσεων για τη γλωσσική εκπαίδευση."
        ]
      },
      section1: {
        category: "Ψηφιακός Κόμβος",
        title: "Η Πύλη για την Ελληνική Γλώσσα",
        lead: "Ο κεντρικός διαδικτυακός κόμβος (www.greek-language.gr) για τη μελέτη, τη διδασκαλία και την έρευνα της γλώσσας.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "Σχεδιασμένη για εκπαιδευτικούς, ερευνητές, φοιτητές και μαθητές, η Πύλη παρέχει ελεύθερη πρόσβαση σε πληθώρα έγκριτων ηλεκτρονικών λεξικών για όλες τις περιόδους της ελληνικής γλώσσας. Φιλοξενεί το Λεξικό της Κοινής Νεοελληνικής (Τριανταφυλλίδη), το Λεξικό Κριαρά για τη μεσαιωνική ελληνική γραμματεία και την Επιτομή Λεξικού Liddell & Scott για την Αρχαία Ελληνική.",
          "Η Πύλη ενσωματώνει συστηματικά σώματα κειμένων για γλωσσολογική έρευνα, ψηφιακές βιβλιοθήκες (όπως η 'Μνημοσύνη' για την αρχαία γραμματεία), ανθολογίες νεοελληνικής λογοτεχνίας, οδηγούς μελέτης, καθώς και τη βάση 'Ψηφίδες' που συγκεντρώνει γλωσσικούς πόρους και διδακτικό υλικό."
        ]
      },
      section2: {
        category: "Εργαλεία & Πόροι",
        title: "Ψηφιακά Εργαλεία Διδασκαλίας",
        lead: "Σύγχρονες ψηφιακές υποδομές που μετασχηματίζουν τη γλωσσική εκπαίδευση στη σχολική τάξη.",
        image: "assets/modern_geometric.png",
        list: [
          "Πρωτέας (proteas.greek-language.gr): Ολοκληρωμένο περιβάλλον με εκπαιδευτικά σενάρια για τα γλωσσικά μαθήματα.",
          "Πολύτροπη Γλώσσα: Ψηφιακό υποστηρικτικό υλικό για τη διδασκαλία της νεοελληνικής γλώσσας και λογοτεχνίας στο Λύκειο.",
          "Ψηφίδες: Νέα ψηφιακά περιβάλλοντα που συγκεντρώνουν πόρους, λεξικά και σώματα κειμένων για τη γλώσσα και τη διδακτική της.",
          "Greek to Me: Πρόγραμμα εξ αποστάσεως εκμάθησης της ελληνικής για εφήβους και ενήλικες (επίπεδα Α1-Β1)."
        ]
      },
      section3: {
        category: "Διεθνές Έργο",
        title: "Δράσεις & Εκδοτικό Έργο",
        lead: "Δραστηριοποίηση σε παγκόσμια κλίμακα για τη διάδοση της ελληνικής γλώσσας και του πολιτισμού.",
        image: "assets/abstract_letters.png",
        paras: [
          "Το ΚΕΓ συμμετέχει ενεργά σε ευρωπαϊκά δίκτυα γλωσσικών φορέων (EFNIL), εκπροσωπώντας την Ελλάδα στη χάραξη γλωσσικών πολιτικών. Διοργανώνει επιστημονικά συνέδρια, webinars και ημερίδες λεξικογραφίας, ενώ παράλληλα στηρίζει τις έδρες ελληνικών σπουδών σε πανεπιστήμια του εξωτερικού.",
          "Παρουσιάζουμε διαρκώς το πλούσιο εκδοτικό και ερευνητικό μας έργο, συμπεριλαμβανομένου του πρόσφατου 23ου τόμου του Λεξικού Κριαρά (Μάρτιος 2025), καθώς και τις νέες ψηφιακές εφαρμογές για κινητά τηλέφωνα που διευκολύνουν την άμεση πρόσβαση στα λεξικά και το εκπαιδευτικό υλικό του Κέντρου."
        ]
      }
    },
    en: {
      cover: {
        title: "Center for the Greek Language",
        subtitle: "Language, Culture & Education",
        badge: "Official State Research & Educational Institution",
        eventTitle: "Under the Supervision of the Ministry of Education",
        eventDate: "Thessaloniki, Greece • Established 1994"
      },
      backCover: {
        title: "Contact & Info",
        lead: "Find us in Thessaloniki and digitally across the globe.",
        address: "📍 1 Karamaouna Str., Skra Square, 55134 Kalamaria, Thessaloniki",
        phone: "📞 Tel: +30 2313 331 500",
        email: "✉️ Email: centre@komvos.edu.gr • info@greeklanguage.gr",
        website: "🌐 www.greeklanguage.gr",
        socialFb: "Facebook: @greeklanguage.gr",
        socialTw: "X (Twitter): @GreekLanguage"
      },
      intro: {
        category: "Our Identity",
        title: "The Center (CGL)",
        lead: "The Center for the Greek Language (CGL) was established in 1994 in Thessaloniki as a research and educational institution.",
        paras: [
          "Supervised by the Greek Ministry of Education, it coordinates language policies and supports Greek studies worldwide. It serves as an advisory and executive body for language planning.",
          "CGL is structured into four main departments: Lexicography, Linguistics, Language & Literature, and Support and Promotion of the Greek Language. Through these, it creates pioneering research, publications, and digital tools."
        ]
      },
      section1: {
        category: "Digital Hub",
        title: "The Portal for the Greek Language",
        lead: "The flagship digital platform of CGL (www.greek-language.gr) for scholars, teachers, and learners.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "It offers free access to major lexicographical resources and linguistic tools covering all historical periods of the Greek language. It hosts the Dictionary of Standard Modern Greek (Triantafyllidis), the Kriaras Dictionary for medieval literature, and the Liddell-Scott Lexicon for Ancient Greek.",
          "The Portal integrates systematic text corpora for linguistic research, digital libraries (such as 'Mnemosyne' for ancient Greek literature), anthologies of modern Greek literature, and study guides."
        ]
      },
      section2: {
        category: "Tools & Resources",
        title: "Digital Pedagogical Tools",
        lead: "Modern digital infrastructures transforming language education in classrooms and online.",
        image: "assets/modern_geometric.png",
        list: [
          "Proteas (proteas.greek-language.gr): Complete environment with educational scenarios for language courses.",
          "Politropi Glossa: Digital supportive material for teaching modern Greek language in high schools.",
          "Psifides: New digital environments compiling resources, dictionaries, and text corpora.",
          "Greek to Me: Distance learning program of Greek for adolescents and adults (levels A1-B1)."
        ]
      },
      section3: {
        category: "Global Reach",
        title: "Actions & Publications",
        lead: "CGL operates worldwide to support and enhance Hellenic studies.",
        image: "assets/abstract_letters.png",
        paras: [
          "We participate in European language networks (EFNIL), organize international conferences, and publish research on the history and teaching of Greek. We also support Greek chairs in foreign universities.",
          "We constantly present our rich publishing and research work, including the latest 23rd volume of the Kriaras Dictionary (March 2025), and our mobile applications that bring dictionaries and learning tools directly to your screen."
        ]
      }
    }
  },
  certification: {
    el: {
      cover: {
        title: "Πιστοποίηση Ελληνομάθειας",
        subtitle: "Επίσημη Αξιολόγηση & Πιστοποίηση",
        badge: "Κρατικό Πιστοποιητικό Επάρκειας",
        eventTitle: "Επίσημος Κρατικός Φορέας Πιστοποίησης",
        eventDate: "Υπουργείο Παιδείας, Θρησκευμάτων & Αθλητισμού"
      },
      backCover: {
        title: "Τμήμα Πιστοποίησης",
        lead: "Πληροφορίες για εξεταστικά κέντρα, εγγραφές και ημερομηνίες εξετάσεων.",
        address: "📍 Καραμαούνα 1, Πλατεία Σκρα, 55134 Καλαμαριά, Θεσσαλονίκη",
        phone: "📞 Τηλέφωνο: +30 2313 331 540",
        email: "✉️ Email: ellinomatheia@komvos.edu.gr",
        website: "🌐 www.greek-language.gr/certification",
        socialFb: "Facebook: @greeklanguage.gr",
        socialTw: "X (Twitter): @GreekLanguage"
      },
      intro: {
        category: "Πιστοποίηση",
        title: "Επίσημη Ελληνομάθεια",
        lead: "Το Κέντρο Ελληνικής Γλώσσας είναι ο αποκλειστικός κρατικός φορέας του Υπουργείου Παιδείας για τη διενέργεια των εξετάσεων πιστοποίησης ελληνομάθειας.",
        paras: [
          "Οι εξετάσεις θεσπίστηκαν για να παρέχουν σε αλλοδαπούς, ομογενείς και κάθε ενδιαφερόμενο μια αντικειμενική και έγκυρη αξιολόγηση των γνώσεών τους στην ελληνική γλώσσα. Το Πιστοποιητικό Ελληνομάθειας είναι ο μοναδικός επίσημος τίτλος που αναγνωρίζεται από το ελληνικό κράτος και την Ευρωπαϊκή Ένωση.",
          "Οι εξετάσεις διενεργούνται μία φορά το χρόνο, κατά τον μήνα Μάιο, σε περισσότερα από 160 εξεταστικά κέντρα που λειτουργούν υπό την εποπτεία του ΚΕΓ σε όλο τον κόσμο, καλύπτοντας και τις πέντε ηπείρους (Ευρώπη, Ασία, Αμερική, Αφρική και Ωκεανία)."
        ]
      },
      section1: {
        category: "Τα Επίπεδα",
        title: "Εξάβαθμη Κλίμακα (Α1 - Γ2)",
        lead: "Η αξιολόγηση ακολουθεί πλήρως το Κοινό Ευρωπαϊκό Πλαίσιο Αναφοράς για τις Γλώσσες (CEFR).",
        list: [
          "Α1: Στοιχειώδης γνώση (διατίθεται σε δύο εκδόσεις: για παιδιά 8-12 ετών & εφήβους/ενήλικες).",
          "Α2: Βασική γνώση (και ειδικό Α2 για Επαγγελματικούς Σκοπούς για εργαζόμενους).",
          "Β1: Μέτρια γνώση / Β2: Καλή γνώση (το ελάχιστο επίπεδο για ακαδημαϊκές σπουδές).",
          "Γ1: Πάρα πολύ καλή γνώση (δημόσιο) / Γ2: Άριστη γνώση (πλήρης ευχέρεια)."
        ]
      },
      section2: {
        category: "Αναγνώριση",
        title: "Χρησιμότητα Πιστοποιητικού",
        lead: "Ένα ισχυρό εφόδιο για σπουδές, εργασία και θεσμικές διαδικασίες.",
        image: "assets/abstract_letters.png",
        paras: [
          "Σπουδές: Το επίπεδο Β2 είναι απαραίτητο για την εισαγωγή αλλοδαπών στα ελληνικά Ανώτατα Εκπαιδευτικά Ιδρύματα (ΑΕΙ). Δίνει επίσης τη δυνατότητα σε ομογενείς να εγγραφούν σε ελληνικά σχολεία ή να διεκδικήσουν υποτροφίες.",
          "Επαγγελματική Χρήση: Απαιτείται για διορισμό στο ελληνικό δημόσιο (επίπεδο Γ1/Γ2) και για την άσκηση συγκεκριμένων νομοθετικά κατοχυρωμένων επαγγελμάτων στην Ελλάδα (π.χ. δικηγόροι, γιατροί, φαρμακοποιοί).",
          "Διαμονή & Ιθαγένεια: Αποτελεί προϋπόθεση (επίπεδο Α2) για την απόκτηση της ελληνικής ιθαγένειας (πολιτογράφηση) ή για τη χορήγηση άδειας διαμονής επί μακρόν διαμένοντος."
        ]
      },
      section3: {
        category: "Υποστήριξη",
        title: "Προετοιμασία & Υλικό",
        lead: "Το ΚΕΓ παρέχει πλούσιο υλικό για την προετοιμασία των υποψηφίων και των εκπαιδευτικών.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "Στην ειδική πύλη (greek-language.gr/certification) προσφέρεται δωρεάν πρόσβαση σε παλαιότερα θέματα εξετάσεων (past papers), δείγματα ακουστικών θεμάτων, διαγνωστικά τεστ και αναλυτικούς οδηγούς για τις εξετάσεις.",
          "Επιπλέον, το ΚΕΓ εκδίδει τη σειρά βιβλίων 'ΚΛΙΚ στα Ελληνικά' (επίπεδα Α1-Γ1) με πλούσιο υποστηρικτικό υλικό, και αναπτύσσει ψηφιακές εφαρμογές (όπως η εφαρμογή KLIK in Greek για κινητά) για τη διδασκαλία της ελληνικής ως ξένης/δεύτερης γλώσσας."
        ]
      }
    },
    en: {
      cover: {
        title: "Greek Language Certification",
        subtitle: "Official Evaluation & Certification",
        badge: "State Certificate of Attainment",
        eventTitle: "Official State Certification Agency",
        eventDate: "Ministry of Education, Religious Affairs & Sports"
      },
      backCover: {
        title: "Certification Dept.",
        lead: "Information on examination centers, registration, and exam dates.",
        address: "📍 1 Karamaouna Str., Skra Square, 55134 Kalamaria, Thessaloniki",
        phone: "📞 Tel: +30 2313 331 540",
        email: "✉️ Email: ellinomatheia@komvos.edu.gr",
        website: "🌐 www.greek-language.gr/certification",
        socialFb: "Facebook: @greeklanguage.gr",
        socialTw: "X (Twitter): @GreekLanguage"
      },
      intro: {
        category: "Certification",
        title: "Official Proficiency in Greek",
        lead: "CGL is the exclusive state-appointed agency of the Ministry of Education for conducting Greek language proficiency examinations.",
        paras: [
          "It was established to provide foreign citizens, diaspora Greeks, and any interested learners with an objective and valid evaluation of their Greek language skills. The Certificate of Attainment in Greek is the only official document recognized by the Ministry of Education.",
          "Examinations are conducted annually in May at over 160 official exam centers worldwide, covering Europe, Asia, America, Africa, and Oceania under the supervision of CGL."
        ]
      },
      section1: {
        category: "The Levels",
        title: "6-Level Scale (A1 - C2)",
        lead: "Our assessment fully aligns with the Common European Framework of Reference for Languages (CEFR).",
        list: [
          "A1: Elementary (versions for children 8-12 & adolescents/adults).",
          "A2: Basic communication (including A2 for Specific Professional Purposes).",
          "B1: Threshold / B2: Vantage (minimum requirement for university enrollment).",
          "C1: Effective Operational Proficiency / C2: Mastery (full fluency)."
        ]
      },
      section2: {
        category: "Recognition",
        title: "Value of the Certificate",
        lead: "An essential qualification for academic studies, professional employment, and legal status.",
        image: "assets/abstract_letters.png",
        paras: [
          "Academic: Level B2 is required for foreign students to register at Greek Higher Education Institutions. It also allows diaspora Greeks to register in Greek schools or claim scholarships.",
          "Professional: Mandatory for hiring in the Greek public sector (Levels C1/C2) and for practicing regulated professions in Greece (e.g. lawyers, doctors, pharmacists).",
          "Legal Status: Level A2 is a prerequisite for acquiring Greek citizenship (naturalization) or the long-term residence permit in Greece."
        ]
      },
      section3: {
        category: "Preparation",
        title: "Resources & Study Material",
        lead: "CGL provides extensive online resources to support candidates and instructors.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "On the official portal (greek-language.gr/certification), candidates can access past examination papers, audio samples, online diagnostic tests, and detailed syllabus guides for free.",
          "We also publish the 'KLIK sta Ellinika' book series (levels A1-C1) and develop digital tools (such as the KLIK in Greek mobile application) for teaching Greek as a second/foreign language."
        ]
      }
    }
  },
  fryktories: {
    el: {
      cover: {
        title: "Φρυκτωρίες",
        subtitle: "Ψηφιακό Δίκτυο για την Ελληνική Γλώσσα",
        badge: "Ψηφιακή Ακαδημαϊκή Κοινότητα",
        eventTitle: "Διεθνές Ψηφιακό Ακαδημαϊκό Δίκτυο",
        eventDate: "Σύνδεση Εδρών Ελληνικών Σπουδών"
      },
      backCover: {
        title: "Δίκτυο Φρυκτωρίες",
        lead: "Επικοινωνήστε μαζί μας για ακαδημαϊκή δικτύωση και συνεργασίες.",
        address: "📍 Καραμαούνα 1, Πλατεία Σκρα, 55134 Καλαμαριά, Θεσσαλονίκη",
        phone: "📞 Τηλέφωνο: +30 2313 331 530",
        email: "✉️ Email: centre@komvos.edu.gr • info@greeklanguage.gr",
        website: "🌐 www.fryktories.gr",
        socialFb: "Facebook: @greeklanguage.gr",
        socialTw: "X (Twitter): @GreekLanguage"
      },
      intro: {
        category: "Ψηφιακό Δίκτυο",
        title: "Τι είναι οι «Φρυκτωρίες»",
        lead: "Οι «Φρυκτωρίες» (www.fryktories.gr) αποτελούν μια καινοτόμο ψηφιακή πλατφόρμα επικοινωνίας και υποστήριξης του ΚΕΓ.",
        paras: [
          "Η δράση αυτή λειτουργεί ως μια παγκόσμια διαδικτυακή κοινότητα μάθησης, επικοινωνίας και αλληλοϋποστήριξης. Απευθύνεται κυρίως σε Έλληνες και ξένους εκπαιδευτικούς που διδάσκουν την ελληνική γλώσσα, γραμματεία και πολιτισμό σε πανεπιστήμια (έδρες ελληνικών σπουδών) και σχολεία του εξωτερικού.",
          "Η πλατφόρμα δανείζεται το όνομά της από τις αρχαίες 'φρυκτωρίες' (το σύστημα μεταφοράς μηνυμάτων με πυρσούς), συμβολίζοντας τη μετάδοση του ελληνικού λόγου και του πολιτισμού από άκρη σε άκρη της γης μέσω της τεχνολογίας."
        ]
      },
      section1: {
        category: "Στόχοι Δράσης",
        title: "Σύνδεση & Ακαδημαϊκή Στήριξη",
        lead: "Ενδυνάμωση των εδρών ελληνικών σπουδών και των εκπαιδευτικών σε παγκόσμιο επίπεδο.",
        list: [
          "Διασύνδεση: Δημιουργία ενός παγκόσμιου χάρτη και καταλόγου εδρών ελληνικών σπουδών.",
          "Ανταλλαγή: Κοινή χρήση διδακτικών σεναρίων, μεθόδων και εκπαιδευτικού υλικού.",
          "Επικοινωνία: Θεματικά φόρουμ για την επίλυση διδακτικών και επιστημονικών αποριών.",
          "Συνεργασία: Διοργάνωση κοινών εκδηλεύσεων και προώθηση της επιστημονικής έρευνας."
        ]
      },
      section2: {
        category: "Ψηφιακοί Πόροι",
        title: "Εκπαιδευτικά Εργαλεία & Forum",
        lead: "Πρόσβαση σε εξειδικευμένες πηγές και υποστηρικτικό υλικό για τη διδασκαλία.",
        image: "assets/modern_geometric.png",
        paras: [
          "Οι Φρυκτωρίες παρέχουν στους εγγεγραμμένους εκπαιδευτικούς άμεση πρόσβαση σε ψηφιοποιημένες βιβλιοθήκες, εξειδικευμένα γλωσσάρια ορολογίας, βιβλιογραφικούς οδηγούς και διδακτικά σενάρια προσαρμοσμένα στις ανάγκες των σπουδαστών του εξωτερικού.",
          "Τα μέλη της κοινότητας μπορούν να συμμετέχουν σε φόρουμ συζητήσεων, να ενημερώνονται για επιστημονικά συνέδρια, σεμινάρια και εκδηλώσεις, και να δημοσιεύουν άρθρα ή διδακτικές προτάσεις σχετικά με τη διδακτική της ελληνικής ως ξένης γλώσσας."
        ]
      },
      section3: {
        category: "Επιμόρφωση",
        title: "Επιμόρφωση & Τηλεκπαίδευση",
        lead: "Υποστήριξη της μάθησης μέσω σύγχρονων ψηφιακών μεθόδων και προγραμμάτων.",
        image: "assets/abstract_letters.png",
        paras: [
          "Στο πλαίσιο των εκπαιδευτικών προγραμμάτων του ΚΕΓ, οι Φρυκτωρίες συνδέονται με το πρόγραμμα 'Διαδρομές στη διδασκαλία της ελληνικής ως δεύτερης/ξένης γλώσσας', το οποίο προσφέρει εξ αποστάσεως επιμόρφωση και πιστοποιημένη κατάρτιση σε εκπαιδευτικούς στην Ελλάδα και το εξωτερικό.",
          "Παράλληλα, υποστηρίζονται ψηφιακά εργαλεία τηλεκπαίδευσης (όπως το 'Greek to Me') που επιτρέπουν σε μαθητές και καθηγητές σε απομακρυσμένες περιοχές να έχουν πρόσβαση σε υψηλού επιπέδου εκπαιδευτικό περιεχόμενο."
        ]
      }
    },
    en: {
      cover: {
        title: "Fryktories",
        subtitle: "Digital Network for the Greek Language",
        badge: "Digital Academic Community",
        eventTitle: "Global Digital Academic Network",
        eventDate: "Connecting Departments of Greek Studies"
      },
      backCover: {
        title: "Fryktories Network",
        lead: "Contact us for academic networking and educational partnerships.",
        address: "📍 1 Karamaouna Str., Skra Square, 55134 Kalamaria, Thessaloniki",
        phone: "📞 Tel: +30 2313 331 530",
        email: "✉️ Email: centre@komvos.edu.gr • info@greeklanguage.gr",
        website: "🌐 www.fryktories.gr",
        socialFb: "Facebook: @greeklanguage.gr",
        socialTw: "X (Twitter): @GreekLanguage"
      },
      intro: {
        category: "Digital Network",
        title: "What is 'Fryktories'?",
        lead: "Fryktories (www.fryktories.gr) is an innovative digital communication and support platform created by CGL.",
        paras: [
          "This initiative functions as a global online community of learning, communication, and support. It is primarily aimed at Greek and foreign educators teaching Greek language, literature, and culture in universities (Greek chairs) and schools abroad.",
          "The platform takes its name from the ancient 'fryktories' (beacons system for sending messages using fire), symbolizing the transmission of Greek language and culture across the earth through modern technology."
        ]
      },
      section1: {
        category: "Objectives",
        title: "Networking & Academic Support",
        lead: "Empowering the teaching of the Greek language internationally.",
        list: [
          "Networking: Connecting departments of Greek studies worldwide.",
          "Exchange: Sharing lesson plans, strategies, and experiences.",
          "Support: Direct access to scientific and digital resources of CGL.",
          "Dialogue: Specialized discussion forums for pedagogical issues."
        ]
      },
      section2: {
        category: "Digital Resources",
        title: "Tools & Academic Material",
        lead: "Access to specialized resources for teaching Greek as a foreign language.",
        image: "assets/modern_geometric.png",
        paras: [
          "The platform compiles and categorizes digital material, bibliographies, educational scenarios, and links to libraries, facilitating class preparation.",
          "It also hosts academic articles, studies, and announcements about conferences related to Greek language teaching."
        ]
      },
      section3: {
        category: "E-Learning",
        title: "Distance Learning Support",
        lead: "Supporting learning through modern online methodologies.",
        image: "assets/abstract_letters.png",
        paras: [
          "Within the framework of Fryktories and CGL's wider educational initiatives (such as 'Greek to Me'), online distance learning tools are developed.",
          "These digital resources allow teachers and learners in remote regions to access high-quality educational content and support."
        ]
      }
    }
  },
  booklet: {
    el: {
      page1: {
        title: "Κέντρο Ελληνικής Γλώσσας",
        subtitle: "Γλώσσα, Πολιτισμός & Εκπαίδευση",
        badge: "Επίσημος Ερευνητικός & Εκπαιδευτικός Φορέας",
        eventTitle: "Υπό την εποπτεία του Υπουργείου Παιδείας",
        eventDate: "Θεσσαλονίκη, Ελλάδα • Έτος Ίδρυσης 1994"
      },
      page2: {
        category: "Ταυτότητα ΚΕΓ",
        title: "Ταυτότητα & Αποστολή",
        lead: "Το ΚΕΓ ιδρύθηκε το 1994 στη Θεσσαλονίκη ως Νομικό Πρόσωπο Ιδιωτικού Δικαίου (Ν.Π.Ι.Δ.) μη κερδοσκοπικού χαρακτήρα.",
        image: "assets/cgl_logo.png",
        paras: [
          "Εποπτεύεται από το Υπουργείο Παιδείας, Θρησκευμάτων και Αθλητισμού και λειτουργεί ως επιτελικό, γνωμοδοτικό και συντονιστικό όργανο της πολιτείας για τη χάραξη γλωσσικής πολιτικής και εκπαίδευσης.",
          "Η αποστολή του εστιάζει στην ενίσχυση και προώθηση της ελληνικής γλώσσας εντός και εκτός συνόρων, στην οργάνωση της διδασκαλίας της σε αλλοδαπούς και ομογενείς, καθώς και στη στήριξη των εκπαιδευτικών."
        ]
      },
      page3: {
        category: "Επιστημονικές Αρχές",
        title: "Αρχές & Φιλοσοφία",
        lead: "Το ΚΕΓ ακολουθεί αυστηρές επιστημονικές αρχές για τη μελέτη και καλλιέργεια της ελληνικής γλώσσας.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "Αποφεύγει δογματικές ή ιδεολογικές προκαταλήψεις σχετικά με την εξέλιξη της νεοελληνικής γλώσσας και δεν θεωρεί τη σύγχρονη γλώσσα «ημαρτημένη» ή διορθωτέα με βάση παρωχημένα πρότυπα.",
          "Υποστηρίζει ότι η γλωσσική καλλιέργεια επιτυγχάνεται μέσω της συστηματικής μελέτης της στο συγχρονικό της εύρος και στο ιστορικό της βάθος, κυρίως μέσω υποδειγματικών λογοτεχνικών και επιστημονικών κειμένων."
        ]
      },
      page4: {
        category: "Ερευνητικό Τμήμα",
        title: "Τμήμα Λεξικογραφίας",
        lead: "Σχεδιασμός, σύνταξη και έκδοση λεξικών για όλες τις περιόδους της ελληνικής γλώσσας.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "Το τμήμα συνεχίζει το μνημειώδες έργο του Εμμανουήλ Κριαρά για τη Μεσαιωνική Ελληνική Γραμματεία, ενώ παράλληλα συντάσσει λεξικογραφικά εργαλεία και λεξικά για την Αρχαία και Νέα Ελληνική γλώσσα.",
          "Δημιουργεί προηγμένες ψηφιακές βάσεις δεδομένων που τροφοδοτούν τα ηλεκτρονικά λεξικά της Πύλης, παρέχοντας ελεύθερη πρόσβαση σε χιλιάδες ερευνητές, εκπαιδευτικούς και μαθητές παγκοσμίως."
        ]
      },
      page5: {
        category: "Ερευνητικό Τμήμα",
        title: "Τμήμα Γλωσσολογίας",
        lead: "Επιστημονική έρευνα για την ιστορική εξέλιξη, τη δομή και τη χρήση της ελληνικής γλώσσας.",
        image: "assets/modern_geometric.png",
        paras: [
          "Εστιάζει στη μελέτη της δομής, των διαλέκτων και της κοινωνικής διάστασης της ελληνικής γλώσσας, σχεδιάζοντας προγράμματα γλωσσικής πολιτικής και γλωσσικής διδασκαλίας.",
          "Καταγράφει τη γλωσσική πραγματικότητα και διατυπώνει επιστημονικές προτάσεις προς την πολιτεία για τη βελτίωση και τον εκσυγχρονισμό της γλωσσικής εκπαίδευσης στα σχολεία."
        ]
      },
      page6: {
        category: "Ερευνητικό Τμήμα",
        title: "Τμήμα Στήριξης & Προβολής",
        lead: "Διαχείριση των κρατικών εξετάσεων ελληνομάθειας και ανάπτυξη μεθοδολογιών διδασκαλίας.",
        image: "assets/abstract_letters.png",
        paras: [
          "Είναι ο επίσημος φορέας του Υπουργείου Παιδείας για τη διεξαγωγή των εξετάσεων του Κρατικού Πιστοποιητικού Ελληνομάθειας παγκοσμίως, εξασφαλίζοντας την εγκυρότητα και το αδιάβλητο των εξετάσεων.",
          "Εκπονεί καινοτόμα προγράμματα εξ αποστάσεως εκπαίδευσης για διδάσκοντες (όπως οι «Διαδρομές») και παράγει πρότυπο διδακτικό υλικό, όπως η αναγνωρισμένη σειρά βιβλίων «ΚΛΙΚ στα Ελληνικά»."
        ]
      },
      page7: {
        category: "Ερευνητικό Τμήμα",
        title: "Τμήμα Γλώσσας & Λογοτεχνίας",
        lead: "Έρευνα της νεοελληνικής λογοτεχνίας και σύνδεση της λογοτεχνικής γλώσσας με την εκπαίδευση.",
        image: "assets/modern_geometric.png",
        paras: [
          "Μελετά τη λογοτεχνική παραγωγή στη διαχρονία της και αναπτύσσει ψηφιακές ανθολογίες, σώματα λογοτεχνικών κειμένων και πρότυπα ψηφιακά σενάρια διδασκαλίας για τη σχολική τάξη.",
          "Συντονίζει έργα όπως η «Πολύτροπη Γλώσσα» που προσφέρουν στους φιλολόγους και στους μαθητές του Λυκείου πλούσιο υποστηρικτικό υλικό για τη διδασκαλία της γλώσσας και της λογοτεχνίας."
        ]
      },
      page8: {
        category: "Ψηφιακός Κόμβος",
        title: "Η Πύλη για την Ελληνική Γλώσσα",
        lead: "Ο κεντρικός διαδικτυακός κόμβος (www.greek-language.gr) για τη μελέτη και τη διδασκαλία της γλώσσας.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "Η Πύλη αποτελεί ένα πρωτοποριακό ψηφιακό περιβάλλον που παρέχει ελεύθερη πρόσβαση σε έγκριτα ηλεκτρονικά λεξικά για όλες τις ιστορικές περιόδους της ελληνικής (Αρχαία, Μεσαιωνική, Νέα).",
          "Φιλοξενεί το Λεξικό Τριανταφυλλίδη για τη Νεοελληνική, το Λεξικό Κριαρά για τη Μεσαιωνική, καθώς και την Επιτομή Liddell & Scott για την Αρχαία Ελληνική, εξυπηρετώντας καθημερινά χιλιάδες χρήστες."
        ]
      },
      page9: {
        category: "Ψηφιακή Έρευνα",
        title: "Λεξικά & Σώματα Κειμένων",
        lead: "Προηγμένα ψηφιακά εργαλεία και βιβλιοθήκες για τη γλωσσολογική έρευνα.",
        image: "assets/modern_geometric.png",
        paras: [
          "Ενσωματώνει συστηματικά σώματα κειμένων (corpora) για την ανάλυση της νεοελληνικής, καθώς και ψηφιακές βιβλιοθήκες, όπως η «Μνημοσύνη» για την αρχαία ελληνική γραμματεία και ανθολογίες νεοελληνικής λογοτεχνίας.",
          "Παρέχει επίσης εξειδικευμένους οδηγούς μελέτης, ιστορικές ανασκοπήσεις για την εξέλιξη της ελληνικής γλώσσας και υποστηρικτικό υλικό για την εισαγωγή της γλωσσικής εκπαιδευτικής θεωρίας."
        ]
      },
      page10: {
        category: "Ψηφιακή Τάξη",
        title: "Πρωτέας & Πολύτροπη",
        lead: "Ψηφιακά εκπαιδευτικά περιβάλλοντα που υποστηρίζουν τη διδασκαλία στη σχολική τάξη.",
        image: "assets/abstract_letters.png",
        list: [
          "Πρωτέας (proteas.greek-language.gr): Ολοκληρωμένο περιβάλλον με εγκεκριμένα εκπαιδευτικά σενάρια για το μάθημα της γλώσσας.",
          "Πολύτροπη Γλώσσα: Ψηφιακό υποστηρικτικό υλικό για τη διδασκαλία της νεοελληνικής γλώσσας και της λογοτεχνίας στο Λύκειο.",
          "Ψηφιακός Σχολικός Σύμβουλος: Οδηγίες και σενάρια για την αξιοποίηση των ΤΠΕ στη γλωσσική εκπαίδευση."
        ]
      },
      page11: {
        category: "E-Learning",
        title: "Ψηφίδες & Greek to Me",
        lead: "Σύγχρονες πλατφόρμες τηλεκπαίδευσης για την εκμάθηση της ελληνικής από απόσταση.",
        image: "assets/modern_geometric.png",
        list: [
          "Ψηφίδες: Νέο ψηφιακό περιβάλλον που συγκεντρώνει γλωσσικούς πόρους, λεξικά, σώματα κειμένων και διδακτικό υλικό.",
          "Greek to Me: Διαδικτυακό πρόγραμμα εκμάθησης της ελληνικής για εφήβους και ενήλικες (επίπεδα Α1-Β1) με σύγχρονες μεθόδους.",
          "Επιμόρφωση Εκπαιδευτικών: Σεμινάρια για τη διδακτική της ελληνικής ως δεύτερης/ξένης γλώσσας."
        ]
      },
      page12: {
        category: "Πιστοποίηση",
        title: "Επίσημες Εξετάσεις",
        lead: "Το ΚΕΓ είναι ο αποκλειστικός κρατικός φορέας του Υπουργείου Παιδείας για τη διενέργεια των εξετάσεων πιστοποίησης ελληνομάθειας παγκοσμίως.",
        image: "assets/abstract_letters.png",
        paras: [
          "Το Κρατικό Πιστοποιητικό Ελληνομάθειας θεσπίστηκε με σκοπό την αντικειμενική και έγκυρη αξιολόγηση των γνώσεων της ελληνικής γλώσσας για αλλοδαπούς και ομογενείς. Είναι ο μόνος επίσημος τίτλος επάρκειας που αναγνωρίζεται διεθνώς.",
          "Οι εξετάσεις διενεργούνται μία φορά το χρόνο, κατά τον μήνα Μάιο. Το ΚΕΓ εποπτεί τη λειτουργία περισσότερων από 160 εξεταστικών κέντρων που καλύπτουν και τις 5 ηπείρους (Ευρώπη, Ασία, Αμερική, Αφρική, Ωκεανία), εξασφαλίζοντας το αδιάβλητο της διαδικασίας."
        ]
      },
      page13: {
        category: "Τα Επίπεδα",
        title: "Κλίμακα Α1 έως Γ2",
        lead: "Η αξιολόγηση ακολουθεί πλήρως το Κοινό Ευρωπαϊκό Πλαίσιο Αναφοράς για τις Γλώσσες (CEFR).",
        image: "assets/ancient_manuscript.png",
        list: [
          "Α1 (για παιδιά 8-12 ετών & εφήβους/ενήλικες): Στοιχειώδης εισαγωγή στη γλώσσα.",
          "Α2 (και ειδικό Α2 για Επαγγελματικούς Σκοπούς): Βασική επικοινωνία και απλός διάλογος.",
          "Β1 (Μέτρια) & Β2 (Καλή): Απαραίτητο επίπεδο για σπουδές και εργασία στην Ελλάδα.",
          "Γ1 (Πολύ Καλή) & Γ2 (Άριστη): Πλήρης ευχέρεια, απαραίτητο για συγκεκριμένες επαγγελματικές άδειες."
        ]
      },
      page14: {
        category: "Αναγνώριση",
        title: "Αξία του Πιστοποιητικού",
        lead: "Ένα απαραίτητο θεσμικό και επαγγελματικό εφόδιο με ισχυρή νομική κατοχύρωση.",
        image: "assets/abstract_letters.png",
        paras: [
          "Ακαδημαϊκή Χρήση: Το επίπεδο Β2 είναι υποχρεωτικό για την εγγραφή αλλοδαπών φοιτητών σε ελληνικά Ανώτατα Εκπαιδευτικά Ιδρύματα (ΑΕΙ). Παράλληλα, μοριοδοτείται ή απαιτείται για υποτροφίες και προγράμματα ανταλλαγής.",
          "Επαγγελματική & Νομική Χρήση: Είναι απαραίτητο για διορισμό στο ελληνικό δημόσιο (επίπεδο Γ1/Γ2), την άσκηση νομικά κατοχυρωμένων επαγγελμάτων (γιατροί, δικηγόροι κλπ.), καθώς και για την απόκτηση της ελληνικής ιθαγένειας (επίπεδο Α2) ή της άδειας διαμονής επί μακρόν διαμένοντος."
        ]
      },
      page15: {
        category: "Παγκόσμια Κοινότητα",
        title: "Φρυκτωρίες & Διαδρομές",
        lead: "Διασύνδεση των εδρών ελληνικών σπουδών και επιμόρφωση των εκπαιδευτικών παγκοσμίως.",
        image: "assets/modern_geometric.png",
        paras: [
          "Το ψηφιακό δίκτυο «Φρυκτωρίες» (www.fryktories.gr) συνδέει έδρες ελληνικών σπουδών, σχολεία και εκπαιδευτικούς στο εξωτερικό, παρέχοντας μια πλατφόρμα επικοινωνίας και ανταλλαγής διδακτικών σεναρίων και ψηφιοποιημένου υλικού.",
          "Σε άμεση σύνδεση με τις Φρυκτωρίες, το πρόγραμμα «Διαδρομές» του ΚΕΓ προσφέρει πιστοποιημένη, εξ αποστάσεως επιμόρφωση σε εκπαιδευτικούς στην Ελλάδα και το εξωτερικό, εξασφαλίζοντας τη συνεχή επαγγελματική τους κατάρτιση."
        ]
      },
      page16: {
        title: "Επικοινωνία & Πληροφορίες",
        lead: "Κέντρο Ελληνικής Γλώσσας — Δίπλα σας σε κάθε γλωσσικό βήμα.",
        address: "📍 Καραμαούνα 1, Πλατεία Σκρα, 55134 Καλαμαριά, Θεσσαλονίκη",
        phone: "📞 Τηλέφωνο: +30 2313 331 500 / 540",
        email: "✉️ Email: centre@komvos.edu.gr • info@greeklanguage.gr",
        website: "🌐 www.greeklanguage.gr",
        socialFb: "Facebook: @greeklanguage.gr",
        socialTw: "X (Twitter): @GreekLanguage"
      }
    },
    en: {
      page1: {
        title: "Center for the Greek Language",
        subtitle: "Language, Culture & Education",
        badge: "Official State Research & Educational Institution",
        eventTitle: "Under the Supervision of the Ministry of Education",
        eventDate: "Thessaloniki, Greece • Established 1994"
      },
      page2: {
        category: "CGL Identity",
        title: "Identity & Mission",
        lead: "CGL was established in 1994 in Thessaloniki as a non-profit State Research Institution.",
        image: "assets/cgl_logo.png",
        paras: [
          "Supervised by the Greek Ministry of Education, it coordinates and executes national language policies, supporting the teaching of the Greek language both inside Greece and abroad.",
          "Its mission focuses on the scientific description and promotion of Greek language, organizing Greek courses for foreigners and diaspora Greeks, and supporting educators worldwide."
        ]
      },
      page3: {
        category: "Scientific Principles",
        title: "Principles & Philosophy",
        lead: "CGL operations are governed by strict scientific methodology and language planning principles.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "It avoids normative dogmas and ideological biases concerning the evolution of Modern Greek, viewing it not as 'corrupted' but as a living, developing linguistic system.",
          "It maintains that linguistic cultivation is achieved through synchronic and diachronic study of the language in its full depth, primarily through exemplary literary and scientific texts."
        ]
      },
      page4: {
        category: "Research Division",
        title: "Lexicography Dept.",
        lead: "Planning, compiling, and publishing authoritative dictionaries for all historical periods of Greek.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "The department continues the monumental work of Emmanuel Kriaras for Medieval Greek literature, while compiling lexicographical tools for Ancient and Modern Greek.",
          "It constructs advanced digital lexical databases that power the online dictionaries of the Portal, providing free access to thousands of researchers and learners globally."
        ]
      },
      page5: {
        category: "Research Division",
        title: "Linguistics Dept.",
        lead: "Scientific research on the historical evolution, structure, and usage of the Greek language.",
        image: "assets/modern_geometric.png",
        paras: [
          "It focuses on the structure, dialects, sociolinguistics, and usage of Greek, designing language policy frameworks and modern school curricula.",
          "By analyzing linguistic reality, it formulates recommendations to the government to update and modernize Greek language teaching methodologies in schools."
        ]
      },
      page6: {
        category: "Research Division",
        title: "Support & Promotion Dept.",
        lead: "Managing the official state certifications and developing teaching methodologies.",
        image: "assets/abstract_letters.png",
        paras: [
          "It holds exclusive state authority under the Ministry of Education for conducting the Certificate of Attainment in Greek examinations worldwide, ensuring absolute security and validity.",
          "It designs innovative remote e-learning programs for teachers (such as 'Routes') and produces high-quality books like the 'KLIK sta Ellinika' textbook series."
        ]
      },
      page7: {
        category: "Research Division",
        title: "Language & Literature Dept.",
        lead: "Researching Modern Greek literature and integrating literary language in education.",
        image: "assets/modern_geometric.png",
        paras: [
          "It studies literary production across eras, developing digital anthologies, literary text corpora, and model digital scenarios for school classrooms.",
          "It coordinates digital resource projects like 'Politropi Glossa' that provide high school educators and students with rich tools to cultivate linguistic and literary competence."
        ]
      },
      page8: {
        category: "Digital Hub",
        title: "The Portal for the Greek Language",
        lead: "The central digital gateway (www.greek-language.gr) for the study and teaching of Greek.",
        image: "assets/ancient_manuscript.png",
        paras: [
          "The Portal represents a pioneering digital platform offering free access to major electronic dictionaries covering all historical periods of the Greek language.",
          "It hosts the Triantafyllidis Lexicon for Modern Greek, the Kriaras Lexicon for Medieval Greek, and the Liddell-Scott Lexicon for Ancient Greek, serving thousands of users daily."
        ]
      },
      page9: {
        category: "Linguistic Research",
        title: "Corpora & Databases",
        lead: "Advanced digital resources and databases for linguistic and literary analysis.",
        image: "assets/modern_geometric.png",
        paras: [
          "It hosts systematic text corpora for linguistic analysis of Modern Greek, alongside digital archives such as the 'Mnemosyne' database for ancient literature.",
          "It also provides comprehensive study guides, historical overviews of the Greek language, and auxiliary materials for teaching linguistics in schools."
        ]
      },
      page10: {
        category: "Digital Classroom",
        title: "Proteas & Politropi",
        lead: "Digitally-driven educational environments designed to support classroom teaching.",
        image: "assets/abstract_letters.png",
        list: [
          "Proteas (proteas.greek-language.gr): Interactive platform featuring approved educational scenarios for language courses.",
          "Politropi Glossa: Supplementary digital materials for teaching Modern Greek language and literature in high schools.",
          "Linguistic Advisors: Pedagogical guides for integrating ICT in language curriculum."
        ]
      },
      page11: {
        category: "E-Learning",
        title: "Psifides & Greek to Me",
        lead: "State-of-the-art online training programs supporting distant learning.",
        image: "assets/modern_geometric.png",
        list: [
          "Psifides: A new portal compiling linguistic resources, dictionaries, text corpora, and lesson plans.",
          "Greek to Me: An online Greek language course for adolescents and adults (levels A1-B1) utilizing modern learning methods.",
          "Teacher Seminars: Specialized professional training modules for teaching Greek as a second language."
        ]
      },
      page12: {
        category: "Certification",
        title: "Official Examinations",
        lead: "CGL is the exclusive state-appointed agency of the Ministry of Education for conducting the Certificate of Attainment in Greek.",
        image: "assets/abstract_letters.png",
        paras: [
          "The Certificate of Attainment in Greek provides a reliable and objective evaluation of Greek language skills for foreign citizens and diaspora Greeks. It is the only proficiency credential recognized by the state.",
          "Examinations are conducted annually in May. CGL oversees over 160 official exam centers across Europe, Asia, America, Africa, and Oceania, ensuring standardized and secure testing procedures."
        ]
      },
      page13: {
        category: "The Levels",
        title: "Levels A1 to C2",
        lead: "Our proficiency assessment fully aligns with the Common European Framework of Reference for Languages (CEFR).",
        image: "assets/ancient_manuscript.png",
        list: [
          "A1 (for kids 8-12 & adolescents/adults): Elementary introduction to basic vocabulary.",
          "A2 (including A2 for Professional Purposes): Basic communication for everyday situations.",
          "B1 (Intermediate) & B2 (Vantage): The standard requirement for academic studies in Greece.",
          "C1 (Effective Proficiency) & C2 (Mastery): Full native-like fluency, required for licensed professions."
        ]
      },
      page14: {
        category: "Recognition",
        title: "Value of the Certificate",
        lead: "An essential legal, academic, and professional asset with wide state recognition.",
        image: "assets/abstract_letters.png",
        paras: [
          "Academic Value: Level B2 is required for foreign students enrolling in Greek universities. It also aids diaspora students claiming school placements and scholarships.",
          "Professional & Legal Value: Mandatory for civil service jobs, practicing regulated professions (medicine, law, etc.), and is a key prerequisite for Greek citizenship (Level A2)."
        ]
      },
      page15: {
        category: "Global Network",
        title: "Fryktories & Routes",
        lead: "Connecting departments of Greek studies and supporting educators on a global level.",
        image: "assets/modern_geometric.png",
        paras: [
          "The 'Fryktories' digital network (www.fryktories.gr) links Hellenic studies departments, schools, and teachers worldwide, offering forums, lesson plans, and terminology directories.",
          "In alignment with Fryktories, CGL's 'Routes' program offers certified, distance-learning training for educators teaching Greek as a foreign language."
        ]
      },
      page16: {
        title: "Contact & Info",
        lead: "Center for the Greek Language — Beside you at every linguistic step.",
        address: "📍 1 Karamaouna Str., Skra Square, 55134 Kalamaria, Thessaloniki",
        phone: "📞 Tel: +30 2313 331 500 / 540",
        email: "✉️ Email: centre@komvos.edu.gr • info@greeklanguage.gr",
        website: "🌐 www.greeklanguage.gr",
        socialFb: "Facebook: @greeklanguage.gr",
        socialTw: "X (Twitter): @GreekLanguage"
      }
    }
  },
  bookmark: {
    lexicography: {
      el: {
        front: {
          category: "ΤΜΗΜΑ ΛΕΞΙΚΟΓΡΑΦΙΑΣ",
          title: "Λεξικό Κριαρά",
          lead: "Η λεξικογραφική παράδοση του Κέντρου Ελληνικής Γλώσσας συνεχίζει να αποτυπώνει με επιστημονική εγκυρότητα τον πλούτο της ελληνικής γραμματείας, από την αρχαιότητα έως τη σύγχρονη εποχή, με έμφαση στη μεσαιωνική και νεοελληνική περίοδο.",
          mainText: "«Η γλώσσα δεν είναι απλό εργαλείο συνεννόησης· είναι ο καθρέφτης του πνεύματος, της εσωτερικής ζωής, των κοινωνικών αγώνων και της ιστορικής διαδρομής ενός λαού. Στο λεξικό αποτυπώνεται η ψυχή του έθνους.»\n— Εμμανουήλ Κριαράς",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΨΗΦΙΑΚΗ ΛΕΞΙΚΟΓΡΑΦΙΑ",
          title: "Ηλεκτρονικά Λεξικά",
          lead: "Η Πύλη για την Ελληνική Γλώσσα παρέχει ελεύθερη και καθολική πρόσβαση σε ψηφιοποιημένα επιστημονικά λεξικά, διευκολύνοντας τη μελέτη, τη διδασκαλία και την έρευνα της γλώσσας μας παγκοσμίως.",
          mainText: "• Λεξικό της Κοινής Νεοελληνικής (Ίδρυμα Μανόλη Τριανταφυλλίδη)\n• Λεξικό Μεσαιωνικής Ελληνικής Δημώδους Γραμματείας (Εμμανουήλ Κριαρά)\n• Επιτομή του Μεγάλου Λεξικού της Αρχαίας Ελληνικής Γλώσσας Liddell & Scott\n• Λεξικό της Αρχαίας Ελληνικής Γλώσσας των H. G. Liddell & R. Scott (εικονογραφημένο)\n• Γλωσσάρι Μεσαιωνικής και Νεοελληνικής Ορολογίας και Εξειδικευμένα Βοηθήματα",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "LEXICOGRAPHY DEPT.",
          title: "Kriaras Dictionary",
          lead: "The lexicographical tradition of the Center for the Greek Language documents the richness of Greek literature from antiquity to modern times, focusing on medieval and modern periods.",
          mainText: "'Language is not merely a tool for communication; it is the mirror of the spirit, the inner life, the social struggles, and the historical journey of a nation. The dictionary reflects the very soul of the people.'\n— Emmanuel Kriaras",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "DIGITAL LEXICOGRAPHY",
          title: "E-Dictionaries",
          lead: "The Portal for the Greek Language offers free, worldwide access to digitized standard scientific dictionaries, facilitating research, study, and teaching.",
          mainText: "• Dictionary of Standard Modern Greek (Triantafyllidis Foundation)\n• Lexicon of Medieval Greek Vernacular Literature (Emmanuel Kriaras)\n• Epitome of Liddell & Scott Greek-English Lexicon for Ancient Greek\n• Complete Illustrated Liddell & Scott Greek-English Lexicon\n• Specialized glossaries and digital linguistic resources for scholars",
          footnote: "www.greek-language.gr"
        }
      }
    },
    linguistics: {
      el: {
        front: {
          category: "ΤΜΗΜΑ ΓΛΩΣΣΟΛΟΓΙΑΣ",
          title: "Γλωσσική Έρευνα",
          lead: "Το Τμήμα Γλωσσολογίας εστιάζει στην επιστημονική μελέτη της δομής, της ιστορικής εξέλιξης και της κοινωνικής διάστασης της ελληνικής γλώσσας, σχεδιάζοντας προτάσεις γλωσσικής πολιτικής.",
          mainText: "Η γλωσσολογική έρευνα στοχεύει στη βαθύτερη κατανόηση της γλωσσικής ποικιλίας, στην καταγραφή της ζωντανής γλωσσικής πραγματικότητας και στην ανάπτυξη επιστημονικών μεθοδολογιών για τη βελτίωση της διδασκαλίας της ελληνικής ως μητρικής και ως δεύτερης/ξένης γλώσσας.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΓΛΩΣΣΙΚΟΙ ΠΟΡΟΙ",
          title: "Σώματα Κειμένων",
          lead: "Σύγχρονες ψηφιακές υποδομές και γλωσσικοί πόροι που προσφέρονται ελεύθερα στην επιστημονική και εκπαιδευτική κοινότητα για γλωσσολογική ανάλυση και έρευνα.",
          mainText: "• Συστηματικά σώματα κειμένων (corpora) νεοελληνικών και αρχαίων πηγών\n• Ηλεκτρονικά εργαλεία ανάλυσης κειμένων και συμφραστικοί πίνακες\n• Εξειδικευμένες μελέτες για τις νεοελληνικές διαλέκτους και ιδιώματα\n• Βάσεις δεδομένων για τη δομή και τη σύνταξη της ελληνικής γλώσσας\n• Ψηφιακά περιβάλλοντα υποστήριξης γλωσσολογικών ερευνών",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "LINGUISTICS DEPT.",
          title: "Linguistic Research",
          lead: "The Department of Linguistics focuses on the scientific study of the structure, historical evolution, and social aspects of the Greek language, advising on educational language policy.",
          mainText: "Linguistic research aims at a deeper understanding of language variation, documenting the living language reality, and developing robust scientific methodologies to enhance the teaching of Greek as a native and second/foreign language.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "LINGUISTIC RESOURCES",
          title: "Text Corpora",
          lead: "Modern digital infrastructures and linguistic resources are provided freely to the scientific and educational community for advanced linguistic analysis and research.",
          mainText: "• Systematic text corpora of modern and ancient Greek sources\n• Electronic text analysis tools and concordances for researchers\n• Specialized research on Modern Greek dialects and idioms\n• Databases tracking the syntactic and grammatical structure of Greek\n• Digital environments supporting collaborative linguistic studies",
          footnote: "www.greek-language.gr"
        }
      }
    },
    literature: {
      el: {
        front: {
          category: "ΓΛΩΣΣΑ & ΛΟΓΟΤΕΧΝΙΑ",
          title: "Λόγος & Τέχνη",
          lead: "Το Τμήμα Γλώσσας και Λογοτεχνίας αναδεικνύει τη λογοτεχνική παραγωγή ως θεμελιώδη πυλώνα της ελληνικής παιδείας, της πολιτισμικής ταυτότητας και της διαχρονικής γλωσσικής καλλιέργειας.",
          mainText: "«Η λογοτεχνία είναι η πατρίδα των λέξεων που διασώζουν την ιστορική μνήμη και την αισθητική συνείδηση ενός λαού.»\nΗ έρευνα εστιάζει στη νεοελληνική λογοτεχνία και στη σύνδεσή της με τη σχολική τάξη.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΨΗΦΙΑΚΗ ΑΝΘΟΛΟΓΗΣΗ",
          title: "Πόροι Λογοτεχνίας",
          lead: "Πρωτοποριακά ψηφιακά περιβάλλοντα και ανθολογίες που διευκολύνουν τη γνωριμία των μαθητών και του ευρύτερου κοινού με τον πλούτο της ελληνικής λογοτεχνικής δημιουργίας.",
          mainText: "• Ψηφιακές ανθολογίες νεοελληνικής ποίησης και πεζογραφίας\n• Η ψηφιακή βιβλιοθήκη «Μνημοσύνη» για την αρχαία ελληνική γραμματεία\n• Διδακτικά σενάρια και οδηγοί μελέτης λογοτεχνικών έργων\n• Ψηφιακό αρχείο μελέτης για την ιστορία της νεοελληνικής κριτικής\n• Υποστηρικτικό υλικό για τη διδασκαλία της λογοτεχνίας στη δευτεροβάθμια εκπαίδευση",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "LANGUAGE & LITERATURE",
          title: "Word & Art",
          lead: "The Department of Language and Literature promotes literary creation as a cornerstone of Greek education, cultural identity, and long-term linguistic cultivation.",
          mainText: "'Literature is the homeland of words that preserve the historical memory and aesthetic consciousness of a nation.'\nResearch focuses on Modern Greek literature and its connection with the classroom.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "DIGITAL ANTHOLOGIES",
          title: "Literature Resources",
          lead: "Pioneering digital environments and anthologies that facilitate access for students and the general public to the richness of Greek literary output.",
          mainText: "• Digital anthologies of Modern Greek poetry and prose writing\n• The 'Mnemosyne' digital library for classical Greek literature\n• Educational scenarios and study guides for literary masterpieces\n• Digital research archives on the history of modern Greek criticism\n• Supportive resources for teaching literature in secondary education",
          footnote: "www.greek-language.gr"
        }
      }
    },
    certification: {
      el: {
        front: {
          category: "ΠΙΣΤΟΠΟΙΗΣΗ",
          title: "Ελληνομάθεια",
          lead: "Το Κέντρο Ελληνικής Γλώσσας είναι ο αποκλειστικός κρατικός φορέας του Υπουργείου Παιδείας για την επιστημονική οργάνωση και διενέργεια των εξετάσεων πιστοποίησης ελληνομάθειας.",
          mainText: "«Το Πιστοποιητικό Επαρκούς Γνώσης της Ελληνικής Γλώσσας αποτελεί ένα επίσημο, διεθνώς αναγνωρισμένο εφόδιο για σπουδές, εργασία και θεσμική αναγνώριση στην Ελλάδα και την Ευρωπαϊκή Ένωση.»",
          footnote: "ellinomatheia@komvos.edu.gr"
        },
        back: {
          category: "ΟΙ ΕΞΕΤΑΣΕΙΣ",
          title: "Δομή & Επίπεδα",
          lead: "Οι εξετάσεις πιστοποίησης διενεργούνται κάθε Μάιο σε παγκόσμια κλίμακα, ακολουθώντας αυστηρά επιστημονικά πρότυπα αξιολόγησης και εγκυρότητας.",
          mainText: "• Εξάβαθμη κλίμακα αξιολόγησης (επίπεδα Α1 έως Γ2) συμβατή με το CEFR\n• Πάνω από 160 επίσημα εξεταστικά κέντρα και στις πέντε ηπείρους\n• Ειδικές εξετάσεις για επαγγελματικούς σκοπούς και άδειες εργασίας\n• Σειρά βιβλίων και εκπαιδευτικού υλικού «ΚΛΙΚ στα Ελληνικά»\n• Ψηφιακές εφαρμογές και online διαγνωστικά τεστ προετοιμασίας",
          footnote: "www.greek-language.gr/certification"
        }
      },
      en: {
        front: {
          category: "CERTIFICATION",
          title: "Greek Proficiency",
          lead: "The Center for the Greek Language is the exclusive state-appointed institution of the Ministry of Education for conducting examinations for the Certificate of Attainment in Greek.",
          mainText: "'The Certificate of Attainment in Greek is an official, globally recognized credential that opens doors to academic studies, professional careers, and legal recognition in Greece and the EU.'",
          footnote: "ellinomatheia@komvos.edu.gr"
        },
        back: {
          category: "EXAMINATIONS",
          title: "Structure & Levels",
          lead: "Proficiency examinations are held every May worldwide, adhering to rigorous scientific standards of language assessment and administrative integrity.",
          mainText: "• Six-level evaluation scale (A1 to C2) fully aligned with the CEFR\n• Over 160 official test centers operating across five continents\n• Specialized exams tailored for professional purposes and work permits\n• The acclaimed 'KLIK sta Ellinika' textbook and prep series\n• Mobile applications and online mock exams for self-preparation",
          footnote: "www.greek-language.gr/certification"
        }
      }
    },
    portal: {
      el: {
        front: {
          category: "ΨΗΦΙΑΚΟΣ ΚΟΜΒΟΣ",
          title: "Η Πύλη",
          lead: "Η Πύλη για την Ελληνική Γλώσσα (www.greek-language.gr) αποτελεί τον κεντρικό ψηφιακό κόμβο του ΚΕΓ για τη μελέτη, τη διδασκαλία και την έρευνα της γλώσσας μας.",
          mainText: "Ένας ανεκτίμητος ψηφιακός θησαυρός που συγκεντρώνει ηλεκτρονικά λεξικά, σώματα κειμένων, εκπαιδευτικό υλικό και επιστημονικά βοηθήματα, προσφέροντας ελεύθερη πρόσβαση σε χρήστες από όλο τον κόσμο.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΨΗΦΙΑΚΟΙ ΠΟΡΟΙ",
          title: "Ελεύθερη Πρόσβαση",
          lead: "Μέσω της Πύλης, εκπαιδευτικοί, μαθητές, φοιτητές και ερευνητές έχουν άμεση πρόσβαση σε σύγχρονα εργαλεία γλωσσικής υποστήριξης και διδακτικού σχεδιασμού.",
          mainText: "• Ολοκληρωμένα ηλεκτρονικά λεξικά για όλες τις ιστορικές περιόδους\n• Ψηφιοποιημένα σώματα κειμένων για γλωσσολογική έρευνα\n• Η ψηφιακή βάση «Ψηφίδες» με εκπαιδευτικούς πόρους και σενάρια\n• Ανθολογίες νεοελληνικής λογοτεχνίας και οδηγοί μελέτης\n• Διασύνδεση με διεθνή ακαδημαϊκά δίκτυα ελληνικών σπουδών",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "DIGITAL PORTAL",
          title: "The Portal",
          lead: "The Portal for the Greek Language (www.greek-language.gr) is the primary digital hub of CGL for the study, teaching, and research of the Greek language.",
          mainText: "An invaluable digital treasure house that aggregates electronic dictionaries, text corpora, educational resources, and scientific tools, providing free access to users worldwide.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "DIGITAL RESOURCES",
          title: "Free Access",
          lead: "Through the Portal, teachers, students, and academic researchers gain direct access to state-of-the-art tools for linguistic support and lesson planning.",
          mainText: "• Comprehensive e-dictionaries spanning all historical periods of Greek\n• Digitized text corpora tailored for advanced linguistic analysis\n• The 'Psifides' digital database compiling teaching resources and plans\n• Modern Greek literature anthologies and detailed study guides\n• Seamless connectivity with international networks of Hellenic studies",
          footnote: "www.greek-language.gr"
        }
      }
    },
    fryktories: {
      el: {
        front: {
          category: "ΨΗΦΙΑΚΟ ΔΙΚΤΥΟ",
          title: "Φρυκτωρίες",
          lead: "Οι «Φρυκτωρίες» (www.fryktories.gr) αποτελούν μια καινοτόμο ψηφιακή πλατφόρμα του ΚΕΓ για τη διασύνδεση και υποστήριξη των εδρών ελληνικών σπουδών παγκοσμίως.",
          mainText: "Εμπνευσμένο από το αρχαίο σύστημα μεταφοράς μηνυμάτων με πυρσούς, το δίκτυο μεταφέρει τον ελληνικό λόγο και πολιτισμό από άκρη σε άκρη της γης μέσω της σύγχρονης ψηφιακής τεχνολογίας.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΚΟΙΝΟΤΗΤΑ ΜΑΘΗΣΗΣ",
          title: "Δίκτυο & Συνεργασία",
          lead: "Μια δυναμική παγκόσμια κοινότητα μάθησης, επικοινωνίας και αλληλοϋποστήριξης για εκπαιδευτικούς και ακαδημαϊκούς που διδάσκουν την ελληνική γλώσσα.",
          mainText: "• Διαδραστικός παγκόσμιος χάρτης εδρών ελληνικών σπουδών\n• Ψηφιακό αποθετήριο για την ανταλλαγή εκπαιδευτικών σεναρίων\n• Θεματικά φόρουμ επιστημονικού διαλόγου και επίλυσης αποριών\n• Διοργάνωση webinars και σεμιναρίων για διδάσκοντες στο εξωτερικό\n• Ψηφιακή υποστήριξη προγραμμάτων τηλεκπαίδευσης",
          footnote: "www.fryktories.gr"
        }
      },
      en: {
        front: {
          category: "DIGITAL NETWORK",
          title: "Fryktories",
          lead: "The 'Fryktories' network (www.fryktories.gr) is an innovative digital platform by CGL that connects and supports departments of Greek studies worldwide.",
          mainText: "Inspired by the ancient system of signal beacons using torches, this digital network transmits Greek language and culture across the globe through modern online technology.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "LEARNING NETWORK",
          title: "Connect & Collaborate",
          lead: "A global community for communication and mutual support for educators and academics teaching the Greek language, literature, and culture abroad.",
          mainText: "• Interactive global directory and map of Greek studies chairs\n• Digital repository for sharing lesson plans and teaching methods\n• Specialized discussion forums for academic and pedagogical topics\n• Online training seminars and webinars for instructors overseas\n• Supporting remote learning projects and distance education tools",
          footnote: "www.fryktories.gr"
        }
      }
    },
    cavafy: {
      el: {
        front: {
          category: "ΒΙΟΓΡΑΦΙΚΟΣ ΣΕΛΙΔΟΔΕΙΚΤΗΣ",
          title: "Κ. Π. Καβάφης",
          subtitle: "Ο Αλεξανδρινός Ποιητής",
          image: "assets/cavafy_portrait.png",
          lead: "Ο Κωνσταντίνος Π. Καβάφης, ο κορυφαίος Αλεξανδρινός ποιητής, σφράγισε την παγκόσμια λογοτεχνία με τη μοναδική ιστορική, φιλοσοφική και αισθητική του ματιά.",
          mainText: "«Σαν έτοιμος από καιρό, σα θαρραλέος, αποχαιρέτα την, την Αλεξάνδρεια που φεύγει. Προ πάντων να μη γελασθείς, μην πεις πως ήταν ένα όνειρο, πως απατήθηκεν η ακοή σου· μάταιες ελπίδες τέτοιες μην καταδεχθείς.»\n— Αποχαιρετισμός (1911)",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΙΘΑΚΗ",
          title: "Το Ταξίδι της Ζωής",
          subtitle: "Φιλοσοφική Ποίηση",
          lead: "Η ποίηση του Καβάφη αποτελεί ένα παγκόσμιο μάθημα υπαρξιακής σοφίας, ιστορικής συνείδησης και απαράμιλλης γλωσσικής ακρίβειας και λιτότητας.",
          mainText: "«Σα βγεις στον πηγαιμό για την Ιθάκη, να εύχεσαι να 'ναι μακρύς ο δρόμος, γεμάτος περιπέτειες, γεμάτος γνώσεις. Τους Λαιστρυγόνας και τους Κύκλωπας, τον θυμωμένο Ποσειδώνα μη φοβάσαι, τέτοια στον δρόμο σου ποτέ σου δεν θα βρεις, αν μέν' η σκέψις σου υψηλή, αν εκλεκτό συναίσθημα το πνεύμα και το σώμα σου αγγίζει.»\n— Ιθάκη (1911)",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "BIOGRAPHICAL BOOKMARK",
          title: "C. P. Cavafy",
          subtitle: "The Alexandrian Poet",
          image: "assets/cavafy_portrait.png",
          lead: "Constantine P. Cavafy, the preeminent Alexandrian poet, left an indelible mark on world literature through his unique historical, philosophical, and aesthetic perspective.",
          mainText: "'As one long prepared, as one courageous, bid her farewell, the Alexandria that is leaving. Above all, do not deceive yourself, do not say that it was a dream, that your hearing was mistaken; do not demean yourself with empty hopes like these.'\n— The God Abandons Antony",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "ITHACA",
          title: "The Journey of Life",
          subtitle: "Philosophical Poetry",
          lead: "Cavafy's poetry offers a universal lesson in existential wisdom, historical consciousness, and unparalleled linguistic precision and artistic economy.",
          mainText: "'Keep Ithaca always in your mind. Arriving there is what you're destined for. But don't hurry the journey at all. Better if it lasts for many years, so you're old by the time you reach the island, wealthy with all you've gained on the way, not expecting Ithaca to make you rich.'\n— Ithaca",
          footnote: "www.greek-language.gr"
        }
      }
    },
    elytis: {
      el: {
        front: {
          category: "ΒΙΟΓΡΑΦΙΚΟΣ ΣΕΛΙΔΟΔΕΙΚΤΗΣ",
          title: "Οδ. Ελύτης",
          subtitle: "Ποιητής του Αιγαίου",
          image: "assets/elytis_portrait.png",
          lead: "Ο Οδυσσέας Ελύτης τιμήθηκε με το Βραβείο Νόμπελ Λογοτεχνίας το 1979 για την ποίησή του, που με φόντο την ελληνική παράδοση υμνεί την ελευθερία και το φως.",
          mainText: "«Εάν αποσυνδέσεις την Ελλάδα, στο τέλος θα δεις να σου απομένουν μια ελιά, ένα αμπέλι κι ένα καράβι. Που σημαίνει: με άλλα τόσα την ξαναφτιάχνεις.»\nΗ λυρική του γραφή αναδεικνύει την αισθητική αρμονία του Αιγαίου και τη δύναμη του ελληνικού λόγου.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΤΟ ΑΞΙΟΝ ΕΣΤΙ",
          title: "Μνημειώδες Έργο",
          subtitle: "Νόμπελ Λογοτεχνίας",
          lead: "Το μνημειώδες ποιητικό έργο «Το Άξιον Εστί» αποτελεί έναν ύμνο στη διαχρονική συνέχεια της ελληνικής γλώσσας και στους αγώνες του λαού της.",
          mainText: "«Τη γλώσσα μου έδωσαν ελληνική· το σπίτι φτωχικό στις αμμουδιές του Ομήρου. Μοναχή έγνοια η γλώσσα μου στις αμμουδιές του Ομήρου... Εκεί σπάροι και πέρκες, ανεμόδαρτα ρήματα, ρεύματα πράσινα μες στα γαλάζια, όσα είδα στα σπλάχνα μου ν' ανάβουν, σφουγγάρια, μέδουσες με τα πρώτα λόγια των Σειρήνων, κοχύλια ροδινά με τα πρώτα μαύρα ρίγη.»\n— Το Άξιον Εστί",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "BIOGRAPHICAL BOOKMARK",
          title: "O. Elytis",
          subtitle: "Poet of the Aegean",
          image: "assets/elytis_portrait.png",
          lead: "Odysseus Elytis was awarded the Nobel Prize in Literature in 1979 for his poetry, which celebrates human freedom and the luminous clarity of the Greek soul.",
          mainText: "'If you deconstruct Greece, in the end you will see that what is left is an olive tree, a vineyard and a boat. Meaning: with these same components you can rebuild it.'\nHis lyrical voice highlights the aesthetic harmony of the Aegean landscape.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "THE AXION ESTI",
          title: "The Lyrical Anthem",
          subtitle: "Nobel Prize 1979",
          lead: "His monumental poetic masterpiece 'The Axion Esti' stands as a modern epic, praising the continuity of the Greek language and the resilience of its people.",
          mainText: "'Greek was the language they gave me; humble my house on the sandy shores of Homer. My only care my language on the sandy shores of Homer... There sea-bream and perch, wind-beaten verbs, green currents among the blue, all I saw light up in my entrails, sponges, jellyfish with the Sirens' first words, rosy shells with their first black shudders.'\n— The Axion Esti",
          footnote: "www.greek-language.gr"
        }
      }
    },
    seferis: {
      el: {
        front: {
          category: "ΒΙΟΓΡΑΦΙΚΟΣ ΣΕΛΙΔΟΔΕΙΚΤΗΣ",
          title: "Γ. Σεφέρης",
          subtitle: "Ποίηση & Ιστορία",
          image: "assets/seferis_portrait.png",
          lead: "Ο Γιώργος Σεφέρης, ο πρώτος Έλληνας νομπελίστας ποιητής (1963), συνδύασε με μοναδικό τρόπο τον αρχαίο μύθο με τη δραματική μοίρα του σύγχρονου ελληνισμού.",
          mainText: "«Σ' αυτόν τον κόσμο, που ολοένα στενεύει, ο καθένας μας χρειάζεται τον άλλο. Πρέπει να αναζητήσουμε τον άνθρωπο, όπου κι αν βρίσκεται. Όταν ο δρόμος μας είναι ο άνθρωπος, η ζωή αποκτά νόημα και φως.»\n— Λόγος της Αποδοχής του Βραβείου Νόμπελ",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "Η ΕΛΛΗΝΙΚΗ ΓΛΩΣΣΑ",
          title: "Λόγος της Αποδοχής",
          subtitle: "Νόμπελ Λογοτεχνίας",
          lead: "Στον λόγο του στην Ακαδημία της Στοκχόλμης, ο Σεφέρης τόνισε τη σημασία της ελληνικής γλώσσας ως μιας αδιάσπαστης και ζωντανής πολιτιστικής παράδοσης.",
          mainText: "«Ανήκω σε μια χώρα μικρή. Είναι ένα πέτρινο ακρωτήρι στη Μεσόγειο, που δεν έχει άλλο αγαθό παρά τον αγώνα του λαού του, τη θάλασσα, και το φως του ήλιου. Είναι μικρός ο τόπος μας, αλλά η παράδοσή του είναι τεράστια και το κοινό χαρακτηριστικό της είναι ότι μας παραδόθηκε χωρίς διακοπή επί αιώνες.»\n— Γιώργος Σεφέρης, 1963",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "BIOGRAPHICAL BOOKMARK",
          title: "G. Seferis",
          subtitle: "Poetry & History",
          image: "assets/seferis_portrait.png",
          lead: "George Seferis, the first Greek Nobel laureate in Literature (1963), masterfully integrated ancient myth with the tragic fate of modern Hellenism.",
          mainText: "'In this world, which is constantly shrinking, each of us needs the other. We must seek out man, wherever he may be. When man is our path, life acquires meaning, purpose, and light.'\n— Nobel Prize Acceptance Speech",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "THE GREEK LANGUAGE",
          title: "Nobel Speech",
          subtitle: "Nobel Prize 1963",
          lead: "In his speech to the Stockholm Academy, Seferis emphasized the significance of the Greek language as an unbroken and living cultural tradition.",
          mainText: "'I belong to a small country. A stone cape in the Mediterranean, with no other resource than the struggle of its people, the sea, and the light of the sun. Our land is small, but its tradition is vast, and its main characteristic is that it has been handed down to us without interruption.'\n— George Seferis, 1963",
          footnote: "www.greek-language.gr"
        }
      }
    },
    kriaras: {
      el: {
        front: {
          category: "ΒΙΟΓΡΑΦΙΚΟΣ ΣΕΛΙΔΟΔΕΙΚΤΗΣ",
          title: "Εμ. Κριαράς",
          subtitle: "Ο Δάσκαλος της Γλώσσας",
          image: "assets/kriaras_portrait.png",
          lead: "Ο Εμμανουήλ Κριαράς υπήρξε κορυφαίος φιλόλογος, λεξικογράφος και αφοσιωμένος δάσκαλος της γλώσσας, πρωτεργάτης στον αγώνα για την καθιέρωση της δημοτικής.",
          mainText: "«Η δημοτική γλώσσα είναι η ζωντανή φωνή του ελληνικού λαού, το όργανο με το οποίο εκφράστηκε η ψυχή του έθνους μας. Η υπεράσπισή της είναι χρέος προς την ελευθερία του πνεύματος και την παιδεία του τόπου.»\n— Εμμανουήλ Κριαράς",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΤΟ ΛΕΞΙΚΟ ΚΡΙΑΡΑ",
          title: "Μεσαιωνική Γραμματεία",
          subtitle: "Λεξικογραφικό Έργο",
          lead: "Το μνημειώδες «Λεξικό της Μεσαιωνικής Ελληνικής Δημώδους Γραμματείας (1100-1669)» του Κριαρά αποτελεί το επιστημονικό θεμέλιο της μεσαιωνικής μας γλώσσας.",
          mainText: "• 23 τόμοι λεξικογραφικού έργου που καλύπτουν τη μεταβατική φάση της γλώσσας\n• Η έκδοση και ο εμπλουτισμός του λεξικού συνεχίζονται συστηματικά από το ΚΕΓ\n• Συνδετικός κρίκος ανάμεσα στην Αρχαία και τη Νέα Ελληνική γλώσσα\n• Πρωταρχική πηγή για τη μελέτη της κοινωνικής και γλωσσικής εξέλιξης\n• Ελεύθερα προσβάσιμο σε ψηφιακή μορφή μέσω της Πύλης για την Ελληνική Γλώσσα",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "BIOGRAPHICAL BOOKMARK",
          title: "Em. Kriaras",
          subtitle: "The Scholar of Greek",
          image: "assets/kriaras_portrait.png",
          lead: "Emmanuel Kriaras was a preeminent philologist, lexicographer, and dedicated educator, playing a leading role in the recognition of Demotic Greek.",
          mainText: "'The demotic language is the living voice of the Greek people, the instrument through which the soul of our nation was expressed. Defending it is a duty to intellectual freedom and national education.'\n— Emmanuel Kriaras",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "KRIARAS DICTIONARY",
          title: "Medieval Greek Lexicon",
          subtitle: "Lexicographical Work",
          lead: "His monumental 'Lexicon of Medieval Greek Vernacular Literature (1100-1669)' serves as the scientific foundation of the medieval Greek language.",
          mainText: "• 23 volumes of lexicographical work covering the transitional phase of Greek\n• The publication and enrichment of the Lexicon is continued by CGL\n• Serves as the essential bridge between Ancient and Modern Greek\n• An invaluable source for researching medieval history and linguistics\n• Digitally accessible for free through the Portal for the Greek Language",
          footnote: "www.greek-language.gr"
        }
      }
    },
    history: {
      el: {
        front: {
          category: "ΘΕΜΑΤΙΚΗ ΕΛΛΗΝΙΚΗΣ ΓΛΩΣΣΑΣ",
          title: "Ιστορία",
          subtitle: "Της Ελληνικής Γλώσσας",
          lead: "Η ελληνική γλώσσα διακρίνεται για την αδιάλειπτη ιστορική της πορεία και την αδιάσπαστη συνέχεια της γραπτής της παράδοσης εδώ και 3.500 χρόνια.",
          mainText: "Από τις μυκηναϊκές πινακίδες της Γραμμικής Β, στα έπη του Ομήρου, την κλασική περίοδο της φιλοσοφίας, την ελληνιστική κοινή, τη μεσαιωνική δημώδη και τη νεοελληνική κοινή γλώσσα, η ελληνική παραμένει ζωντανή και εξελισσόμενη.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΔΙΑΧΡΟΝΙΑ",
          title: "Διαχρονία",
          subtitle: "3.500 Έτη Παράδοσης",
          lead: "Η διαχρονική εξέλιξη της ελληνικής γλώσσας αποτελεί ένα μοναδικό φαινόμενο στην παγκόσμια ιστορία του πολιτισμού και της γλωσσολογίας.",
          mainText: "• Μυκηναϊκή περίοδος με τις πρώτες καταγραφές σε Γραμμική Β (15ος αι. π.Χ.)\n• Κλασική περίοδος με τη διαμόρφωση της αττικής διαλέκτου και της φιλοσοφίας\n• Ελληνιστική Κοινή (Κοινή) που έγινε η διεθνής γλώσσα της Μεσογείου\n• Μεσαιωνική/Βυζαντινή περίοδος με τη γέννηση της δημώδους γραμματείας\n• Νεοελληνική περίοδος με τη διαμόρφωση της Κοινής Νεοελληνικής γλώσσας",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "THEMATIC FIELDS",
          title: "History",
          subtitle: "Of the Greek Language",
          lead: "The Greek language is distinguished by its continuous historical path and an unbroken written tradition spanning over 3,500 years.",
          mainText: "From the Mycenaean tablets of Linear B to the epic poems of Homer, the classical era of philosophy, the Hellenistic Koine, the medieval vernacular, and Modern Greek, it remains a living, evolving tongue.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "DIACHRONY",
          title: "A Living Language",
          subtitle: "3,500 Years of Tradition",
          lead: "The diachronic evolution of the Greek language stands as a unique phenomenon in the history of world civilization and linguistics.",
          mainText: "• Mycenaean period with the earliest records written in Linear B (15th c. BC)\n• Classical period shaping the Attic dialect, democratic discourse and philosophy\n• Hellenistic Koine which served as the lingua franca of the Mediterranean\n• Medieval and Byzantine period with the emergence of vernacular literature\n• Modern Greek period leading to the standard Modern Greek of today",
          footnote: "www.greek-language.gr"
        }
      }
    },
    etymology: {
      el: {
        front: {
          category: "ΘΕΜΑΤΙΚΗ ΕΛΛΗΝΙΚΗΣ ΓΛΩΣΣΑΣ",
          title: "Ετυμολογία",
          subtitle: "Η Ιστορία των Λέξεων",
          lead: "Η ετυμολογία της ελληνικής γλώσσας είναι μια συναρπαστική αναζήτηση στις ρίζες, την προέλευση και την ιστορική εξέλιξη των λέξεων που χρησιμοποιούμε καθημερινά.",
          mainText: "Κάθε λέξη κρύβει μέσα της έναν μύθο, μια ιστορική διαδρομή, κοινωνικές αλλαγές και μια ιδιαίτερη φιλοσοφική προσέγγιση για την κατανόηση του κόσμου. Η ετυμολογική μελέτη φωτίζει τη σκέψη μας.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΟΙΚΟΥΜΕΝΙΚΟΤΗΤΑ",
          title: "Ρίζες & Δάνεια",
          subtitle: "Διεθνείς Όροι",
          lead: "Η ελληνική γλώσσα έχει επηρεάσει βαθύτατα το παγκόσμιο λεξιλόγιο της επιστήμης, της φιλοσοφίας, της ιατρικής και των τεχνών σε όλο τον κόσμο.",
          mainText: "• Ανάλυση των ριζών, των προθεμάτων και των καταλήξεων των λέξεων\n• Διεθνείς επιστημονικοί όροι που παράγονται από ελληνικά συνθετικά\n• Μελέτη των δανείων και αντιδανείων ανάμεσα στις ευρωπαϊκές γλώσσες\n• Ελεύθερη πρόσβαση σε ετυμολογικά λεξικά μέσω της Πύλης του ΚΕΓ\n• Εκπαιδευτικά προγράμματα για την ετυμολογία στη σχολική τάξη",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "THEMATIC FIELDS",
          title: "Etymology",
          subtitle: "History of Words",
          lead: "The etymology of the Greek language is a fascinating journey into the roots, origins, and historical transformations of the words we use daily.",
          mainText: "Every single word carries a myth, a historical journey, social adaptations, and a unique philosophical approach to understanding the universe. Etymological study illuminates modern thought.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "UNIVERSALITY",
          title: "Roots & Loanwords",
          subtitle: "International Terms",
          lead: "The Greek language has profoundly shaped the global vocabulary of science, philosophy, medicine, and the arts across civilizations.",
          mainText: "• Detailed analysis of word roots, prefixes, suffixes, and derivatives\n• International scientific terminology derived from Greek roots\n• Investigation of loanwords and reciprocal borrowing between languages\n• Free access to CGL Portal for etymological resources\n• Specialized educational tools teaching etymology in high schools",
          footnote: "www.greek-language.gr"
        }
      }
    }
  }
};

// Application State Management
let state = {
  template: 'general',    // 'general', 'certification', 'fryktories'
  layout: 'trifold',      // 'single', 'bifold', 'trifold'
  theme: 'aegean',        // 'aegean', 'terracotta', 'olive'
  motif: 'abstract',      // 'abstract', 'manuscript', 'geometric', 'none'
  editMode: true,
  foldGuides: true,
  printGuides: false,
  language: 'el',         // 'el', 'en'
  docType: 'brochure',    // 'brochure', 'booklet', 'bookmark'
  pageSize: 'b5',         // 'b5', 'a4', 'a5', 'dl'
  fontStyle: 'cinzel',    // 'cinzel', 'serif', 'sans'
  fontSize: 'medium',     // 'small', 'medium', 'large'
  bookmarkTheme: 'lexicography',
  zoom: 1.0,
  bilingualBookmark: false,
  geminiKey: '',
  videoScripts: {},       // Stores user-edited video script text
  authenticated: false,
  contentData: JSON.parse(JSON.stringify(templatesContent))
};

// DOM Element Selectors
const docTypeSelect = document.getElementById('docTypeSelect');
const themeSelect = document.getElementById('themeSelect');
const toggleBilingualBookmark = document.getElementById('toggleBilingualBookmark');
const bilingualBookmarkToggleGroup = document.getElementById('bilingualBookmarkToggleGroup');
const geminiApiKey = document.getElementById('geminiApiKey');
const btnToggleApiKeyVisibility = document.getElementById('btnToggleApiKeyVisibility');
const btnViewVideo = document.getElementById('btnViewVideo');

const btnLayoutSingle = document.getElementById('btnLayoutSingle');
const btnLayoutBifold = document.getElementById('btnLayoutBifold');
const btnLayoutTrifold = document.getElementById('btnLayoutTrifold');
const motifSelect = document.getElementById('motifSelect');
const pageSizeSelect = document.getElementById('pageSizeSelect');
const fontStyleSelect = document.getElementById('fontStyleSelect');
const fontSizeSelect = document.getElementById('fontSizeSelect');

const toggleEditMode = document.getElementById('toggleEditMode');
const toggleFoldGuides = document.getElementById('toggleFoldGuides');
const togglePrintGuides = document.getElementById('togglePrintGuides');
const toggleLanguage = document.getElementById('toggleLanguage');
const btnPrint = document.getElementById('btnPrint');
const btnReset = document.getElementById('btnReset');
const brochureCanvas = document.getElementById('brochureCanvas');
const colorDots = document.querySelectorAll('.color-dot');
const layoutButtons = document.querySelectorAll('.layout-btn');

// Video Presenter YouTube and Script Map
const themeVideos = {
  general: {
    youtubeId: "g2qJ3r_6y08",
    script: "Καλώς ορίσατε στο Κέντρο Ελληνικής Γλώσσας. Στο βίντεο αυτό παρουσιάζουμε τις γενικές δράσεις του Κέντρου και τον ψηφιακό μας κόμβο για την υποστήριξη της ελληνικής γλώσσας."
  },
  certification: {
    youtubeId: "fA4uUj96l3Q",
    script: "Η Πιστοποίηση Ελληνομάθειας αποτελεί το επίσημο κρατικό πιστοποιητικό για τη γνώση της ελληνικής ως ξένης ή δεύτερης γλώσσας. Δείτε πώς διενεργούνται οι εξετάσεις παγκοσμίως."
  },
  fryktories: {
    youtubeId: "g2qJ3r_6y08",
    script: "Οι Φρυκτωρίες συνδέουν τις έδρες ελληνικών σπουδών σε όλο τον κόσμο, δημιουργώντας μια παγκόσμια ψηφιακή κοινότητα για τους διδάσκοντες την ελληνική γλώσσα."
  },
  lexicography: {
    youtubeId: "g2qJ3r_6y08",
    script: "Το Τμήμα Λεξικογραφίας συνεχίζει το έργο του Εμμανουήλ Κριαρά. Δείτε την ιστορία και τη μεθοδολογία σύνταξης των λεξικών μας."
  },
  linguistics: {
    youtubeId: "g2qJ3r_6y08",
    script: "Η Γλωσσολογική έρευνα στο ΚΕΓ εστιάζει στη μελέτη της δομής, των διαλέκτων και της κοινωνικής διάστασης της ελληνικής γλώσσας."
  },
  literature: {
    youtubeId: "g2qJ3r_6y08",
    script: "Η ελληνική λογοτεχνία αποτελεί βασικό πυλώνας της γλωσσικής μας καλλιέργειας. Παρουσιάζουμε τις ψηφιακές ανθολογίες και τους λογοτεχνικούς πόρους του ΚΕΓ."
  },
  portal: {
    youtubeId: "g2qJ3r_6y08",
    script: "Η Πύλη για την Ελληνική Γλώσσα είναι ο κεντρικός διαδικτυακός κόμβος για τη μελέτη, τη διδασκαλία και την έρευνα της ελληνικής γλώσσας."
  },
  cavafy: {
    youtubeId: "6q2nK1i8aZk",
    script: "Η ποίηση του Κ. Π. Καβάφη είναι οικουμενική. Αναλύουμε τα ποιήματα «Ιθάκη» και «Όσο μπορείς» ως μαθήματα ζωής και γλωσσικής ακρίβειας."
  },
  elytis: {
    youtubeId: "41Xl-eM0k5w",
    script: "Οδυσσέας Ελύτης: Ο ποιητής του φωτός και του Αιγαίου. Παρουσιάζουμε το «Άξιον Εστί» και τη λυρική του κοσμοθεωρία."
  },
  seferis: {
    youtubeId: "6q2nK1i8aZk",
    script: "Γιώργος Σεφέρης: Ο πρώτος Έλληνας νομπελίστας ποιητής. Αναλύουμε τη σύνδεση του έργου του με την ιστορία και την ελληνική παράδοση."
  },
  kriaras: {
    youtubeId: "g2qJ3r_6y08",
    script: "Εμμανουήλ Κριαράς: Ο μεγάλος δάσκαλος της γλώσσας μας. Παρουσιάζουμε τη ζωή, το έργο του και τη συμβολή του στη δημοτική γλώσσα."
  },
  history: {
    youtubeId: "g2qJ3r_6y08",
    script: "Η ιστορία της ελληνικής γλώσσας αριθμεί 3.500 χρόνια γραπτής παράδοσης. Δείτε την εξέλιξή της από τη Γραμμική Β στη σημερινή κοινή νεοελληνική."
  },
  etymology: {
    youtubeId: "g2qJ3r_6y08",
    script: "Η ετυμολογία αναζητά τις ρίζες και την εξέλιξη των λέξεων. Δείτε την τεράστια επίδραση της ελληνικής στο παγκόσμιο λεξιλόγιο της επιστήμης."
  },
  books: {
    youtubeId: "g2qJ3r_6y08",
    script: "Η σειρά εκπαιδευτικών βιβλίων ΚΛΙΚ στα Ελληνικά αποτελεί το πλέον σύγχρονο εργαλείο για την εκμάθηση της ελληνικής ως δεύτερης ή ξένης γλώσσας, καλύπτοντας όλα τα επίπεδα από το Α1 έως το Γ1."
  },
  interactive: {
    youtubeId: "g2qJ3r_6y08",
    script: "Τα διαδραστικά βιβλία του ΚΕΓ εισάγουν νέες καινοτομίες στη διδασκαλία της ελληνικής γλώσσας, συνδυάζοντας το multimedia περιεχόμενο με διαδραστικές ασκήσεις στην οθόνη του υπολογιστή σας."
  }
};

// Initialize Application
function init() {
  // Check Authentication Status
  const savedAuth = sessionStorage.getItem('cglAuth');
  if (savedAuth === 'true') {
    state.authenticated = true;
    document.body.classList.remove('not-logged-in');
  } else {
    state.authenticated = false;
    document.body.classList.add('not-logged-in');
  }

  // Load Saved Gemini API Key
  const savedKey = localStorage.getItem('geminiApiKey');
  if (savedKey) {
    geminiApiKey.value = savedKey;
    state.geminiKey = savedKey;
  }
  
  state.contentData = JSON.parse(JSON.stringify(templatesContent));
  populateAllThemes(state.contentData);

  setupAuthListeners();
  setupThemeListeners();
  setupLayoutListeners();
  setupOptionListeners();
  setupButtonListeners();
  setupVideoPresenterListeners();
  
  // Render Initial View
  render();
}

// Setup Event Listener for Authentication
function setupAuthListeners() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const errorMsg = document.getElementById('loginError');
      
      if ((email === 'admin@komvos.edu.gr' || email === 'admin@cgl.gr') && password === 'cglpassword123') {
        state.authenticated = true;
        sessionStorage.setItem('cglAuth', 'true');
        document.body.classList.remove('not-logged-in');
        errorMsg.innerText = '';
        render();
      } else {
        errorMsg.innerText = '⚠️ Λανθασμένο email ή κωδικός πρόσβασης!';
      }
    });
  }
}

// Setup Event Listeners for Themes
function setupThemeListeners() {
  colorDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      colorDots.forEach(d => d.classList.remove('active'));
      
      const selectedTheme = e.target.getAttribute('data-theme');
      state.theme = selectedTheme;
      e.target.classList.add('active');
      
      render();
    });
  });
}

// Setup Event Listeners for Layouts
function setupLayoutListeners() {
  layoutButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      layoutButtons.forEach(b => b.classList.remove('active'));
      
      const targetBtn = e.currentTarget;
      const selectedLayout = targetBtn.getAttribute('data-layout');
      state.layout = selectedLayout;
      targetBtn.classList.add('active');
      
      render();
    });
  });
}

// Setup Select & Checkbox Option Listeners
function setupOptionListeners() {
  docTypeSelect.addEventListener('change', (e) => {
    state.docType = e.target.value;
    render();
  });

  themeSelect.addEventListener('change', (e) => {
    state.template = e.target.value;
    state.bookmarkTheme = e.target.value;
    render();
  });

  // Logout listener
  const btnLogout = document.getElementById('btnLogout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      sessionStorage.removeItem('cglAuth');
      state.authenticated = false;
      document.body.classList.add('not-logged-in');
      alert("🔒 Αποσυνδεθήκατε επιτυχώς!");
    });
  }

  // Zoom listeners
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnZoomReset = document.getElementById('btnZoomReset');

  if (btnZoomIn && btnZoomOut && btnZoomReset) {
    btnZoomIn.addEventListener('click', () => {
      state.zoom = Math.min(state.zoom + 0.1, 2.0);
      applyZoom();
    });

    btnZoomOut.addEventListener('click', () => {
      state.zoom = Math.max(state.zoom - 0.1, 0.5);
      applyZoom();
    });

    btnZoomReset.addEventListener('click', () => {
      state.zoom = 1.0;
      applyZoom();
    });
  }

  toggleBilingualBookmark.addEventListener('change', (e) => {
    state.bilingualBookmark = e.target.checked;
    render();
  });

  geminiApiKey.addEventListener('input', (e) => {
    state.geminiKey = e.target.value.trim();
    localStorage.setItem('geminiApiKey', state.geminiKey);
  });

  btnToggleApiKeyVisibility.addEventListener('click', () => {
    if (geminiApiKey.type === 'password') {
      geminiApiKey.type = 'text';
      btnToggleApiKeyVisibility.innerText = '🔒';
    } else {
      geminiApiKey.type = 'password';
      btnToggleApiKeyVisibility.innerText = '👁️';
    }
  });

  motifSelect.addEventListener('change', (e) => {
    state.motif = e.target.value;
    render();
  });

  pageSizeSelect.addEventListener('change', (e) => {
    state.pageSize = e.target.value;
    render();
  });

  fontStyleSelect.addEventListener('change', (e) => {
    state.fontStyle = e.target.value;
    render();
  });

  fontSizeSelect.addEventListener('change', (e) => {
    state.fontSize = e.target.value;
    render();
  });

  toggleEditMode.addEventListener('change', (e) => {
    state.editMode = e.target.checked;
    render();
  });

  toggleFoldGuides.addEventListener('change', (e) => {
    state.foldGuides = e.target.checked;
    render();
  });

  togglePrintGuides.addEventListener('change', (e) => {
    state.printGuides = e.target.checked;
    render();
  });

  toggleLanguage.addEventListener('change', (e) => {
    state.language = e.target.checked ? 'en' : 'el';
    render();
  });
}

// Setup Action Buttons
function setupButtonListeners() {
  btnPrint.addEventListener('click', () => {
    window.print();
  });

  btnReset.addEventListener('click', () => {
    if (confirm("Είστε σίγουροι ότι θέλετε να επαναφέρετε τα κείμενα στις αρχικές τους τιμές; Όλες οι αλλαγές σας θα χαθούν.")) {
      state.contentData = JSON.parse(JSON.stringify(templatesContent));
      render();
    }
  });
}

// Helper function to apply active UI styling classes to document body
function applyUIClassesToBody() {
  if (state.editMode) {
    document.body.classList.add('edit-mode-active');
  } else {
    document.body.classList.remove('edit-mode-active');
  }

  if (state.foldGuides && state.docType !== 'bookmark') {
    document.body.classList.add('show-fold-guides');
  } else {
    document.body.classList.remove('show-fold-guides');
  }

  if (state.printGuides) {
    document.body.classList.add('show-print-guides');
  } else {
    document.body.classList.remove('show-print-guides');
  }
}

function generateBrochureData(theme, lang, bookmarkStore) {
  const bookmarkData = bookmarkStore[theme];
  if (!bookmarkData) return {};
  const activeBookmark = bookmarkData[lang];
  
  let image1 = 'assets/ancient_manuscript.png';
  let image2 = 'assets/modern_geometric.png';
  let image3 = 'assets/abstract_letters.png';
  
  if (theme === 'cavafy' || theme === 'elytis' || theme === 'seferis' || theme === 'kriaras') {
    image1 = `assets/${theme}_portrait.png`;
  } else if (theme === 'books') {
    image1 = 'assets/books_illustration.png';
  } else if (theme === 'interactive') {
    image1 = 'assets/interactive_illustration.png';
  }

  return {
    cover: {
      title: activeBookmark.front.title,
      subtitle: activeBookmark.front.subtitle || activeBookmark.front.category,
      badge: lang === 'el' ? "Εκπαιδευτικό & Ερευνητικό Υλικό" : "Educational & Research Material",
      eventTitle: lang === 'el' ? "Κέντρο Ελληνικής Γλώσσας" : "Center for the Greek Language",
      eventDate: lang === 'el' ? "Θεσσαλονίκη • Έτος Ίδρυσης 1994" : "Thessaloniki • Established 1994"
    },
    backCover: {
      title: lang === 'el' ? "Επικοινωνία & Πληροφορίες" : "Contact & Info",
      lead: lang === 'el' ? "Βρείτε μας στη Θεσσαλονίκη και ψηφιακά σε όλο τον κόσμο." : "Find us in Thessaloniki and digitally across the globe.",
      address: lang === 'el' ? "📍 Καραμαούνα 1, Πλατεία Σκρα, 55134 Καλαμαριά, Θεσσαλονίκη" : "📍 1 Karamaouna Str., Skra Square, 55134 Kalamaria, Thessaloniki",
      phone: lang === 'el' ? "📞 Τηλέφωνο: +30 2313 331 500" : "📞 Tel: +30 2313 331 500",
      email: lang === 'el' ? "✉️ Email: centre@komvos.edu.gr • info@greeklanguage.gr" : "✉️ Email: centre@komvos.edu.gr • info@greeklanguage.gr",
      website: "🌐 www.greeklanguage.gr",
      socialFb: "Facebook: @greeklanguage.gr",
      socialTw: "X: @GreekLanguage"
    },
    intro: {
      category: activeBookmark.front.category,
      title: lang === 'el' ? "Εισαγωγικό Σημείωμα" : "Introduction",
      lead: activeBookmark.front.lead,
      paras: [
        activeBookmark.front.mainText,
        lang === 'el'
          ? "Το Κέντρο Ελληνικής Γλώσσας αναπτύσσει συστηματικές εκπαιδευτικές και ερευνητικές δράσεις για την υποστήριξη και διάδοση της ελληνικής γλώσσας. Μέσα από σύγχρονες υποδομές και έντυπες ή ψηφιακές εκδόσεις, προσφέρει ολοκληρωμένες λύσεις σε μαθητές και εκπαιδευτικούς παγκοσμίως."
          : "The Center for the Greek Language develops systematic educational and research initiatives to support and disseminate the Greek language. Through modern infrastructures and print or digital publications, it offers comprehensive solutions for learners and teachers worldwide."
      ]
    },
    section1: {
      category: activeBookmark.back.category,
      title: activeBookmark.back.title,
      lead: activeBookmark.back.lead,
      image: image1,
      paras: [
        activeBookmark.back.mainText.replace(/•/g, '').replace(/\n/g, ' '),
        lang === 'el'
          ? "Οι προσπάθειές μας επικεντρώνονται στην παροχή έγκριτου υλικού και ψηφιακών εργαλείων που διευκολύνουν την καθημερινή εκπαιδευτική πράξη και την επιστημονική μελέτη της γλώσσας μας."
          : "Our efforts focus on providing authoritative materials and digital tools that facilitate daily educational practice and the scientific study of our language."
      ]
    },
    section2: {
      category: lang === 'el' ? "Άξονες Δράσης" : "Key Pillars",
      title: lang === 'el' ? "Τομείς Εφαρμογής" : "Areas of Application",
      lead: lang === 'el' ? "Κύριες κατευθύνσεις και εφαρμογές της θεματικής." : "Main directions and applications of the theme.",
      image: image2,
      list: activeBookmark.back.mainText.includes('•')
        ? activeBookmark.back.mainText.split('\n').map(l => l.replace(/^[•\-\*\s]+/, '').trim()).filter(l => l !== '')
        : (lang === 'el'
            ? [
                "Συστηματική μελέτη και επιστημονική ανάλυση της θεματικής",
                "Ανάπτυξη υποστηρικτικού εκπαιδευτικού υλικού για τη σχολική τάξη",
                "Διοργάνωση webinars και σεμιναρίων επιμόρφωσης εκπαιδευτικών",
                "Διασύνδεση με διεθνείς πανεπιστημιακές έδρες και σπουδές"
              ]
            : [
                "Systematic study and scientific analysis of the theme",
                "Development of supportive educational material for classrooms",
                "Organization of webinars and training seminars for educators",
                "Collaboration with international university chairs and departments"
              ])
    },
    section3: {
      category: lang === 'el' ? "Υποστήριξη & Πόροι" : "Support & Resources",
      title: lang === 'el' ? "Ψηφιακά Εργαλεία & Βοηθήματα" : "Digital Tools & Materials",
      lead: lang === 'el' ? "Ελεύθερη πρόσβαση στις υποδομές του ΚΕΓ." : "Free access to CGL's digital infrastructure.",
      image: image3,
      paras: [
        lang === 'el'
          ? "Μέσα από την Πύλη για την Ελληνική Γλώσσα (www.greek-language.gr) και το ψηφιακό δίκτυο «Φρυκτωρίες», το ΚΕΓ παρέχει άμεση πρόσβαση σε λεξικά, σώματα κειμένων, εκπαιδευτικά σενάρια και βιβλιογραφικούς οδηγούς."
          : "Through the Portal for the Greek Language (www.greek-language.gr) and the 'Fryktories' digital network, CGL provides direct access to dictionaries, text corpora, and lesson plans.",
        lang === 'el'
          ? "Κάθε ενδιαφερόμενος μπορεί να μελετήσει σε βάθος το θέμα αυτό, αξιοποιώντας τις σύγχρονες τεχνολογικές υποδομές και το έγκριτο υλικό που προσφέρεται παγκοσμίως."
          : "Anyone interested can study this topic in depth, taking advantage of modern technological infrastructures and authoritative resources offered globally."
      ]
    }
  };
}

function generateBookletData(theme, lang, contentData, originalBooklet) {
  if (theme === 'general') {
    return originalBooklet;
  }
  
  const customBooklet = JSON.parse(JSON.stringify(originalBooklet));
  const brochure = contentData[theme][lang];
  
  customBooklet.page1 = {
    title: brochure.cover.title,
    subtitle: brochure.cover.subtitle,
    badge: brochure.cover.badge,
    eventTitle: brochure.cover.eventTitle,
    eventDate: brochure.cover.eventDate
  };
  
  customBooklet.page2 = {
    category: brochure.intro.category,
    title: brochure.intro.title,
    lead: brochure.intro.lead,
    image: brochure.section1.image,
    paras: brochure.intro.paras
  };
  
  customBooklet.page4 = {
    category: brochure.section1.category,
    title: brochure.section1.title,
    lead: brochure.section1.lead,
    image: brochure.section1.image,
    paras: brochure.section1.paras
  };
  
  customBooklet.page5 = {
    category: brochure.section2.category,
    title: brochure.section2.title,
    lead: brochure.section2.lead,
    image: brochure.section2.image,
    list: brochure.section2.list
  };
  
  customBooklet.page6 = {
    category: brochure.section3.category,
    title: brochure.section3.title,
    lead: brochure.section3.lead,
    image: brochure.section3.image,
    paras: brochure.section3.paras
  };
  
  return customBooklet;
}

function populateAllThemes(contentData) {
  if (!contentData.bookmark.general) {
    contentData.bookmark.general = {
      el: {
        front: {
          category: "ΚΕΝΤΡΟ ΕΛΛΗΝΙΚΗΣ ΓΛΩΣΣΑΣ",
          title: "Γενική Παρουσίαση",
          lead: "Το ΚΕΓ προάγει και στηρίζει την ελληνική γλώσσα εντός και εκτός Ελλάδος, προσφέροντας ψηφιακούς πόρους και επιστημονικά βοηθήματα.",
          mainText: "«Η ελληνική γλώσσα είναι ο κοινός μας ορίζοντας. Η καλλιέργεια και η διάδοσή της αποτελούν το θεμέλιο της πνευματικής μας ταυτότητας.»",
          footnote: "centre@komvos.edu.gr"
        },
        back: {
          category: "ΔΡΑΣΕΙΣ & ΕΡΕΥΝΑ",
          title: "Οι Πυλώνες μας",
          lead: "Μέσα από τα τέσσερα επιστημονικά του τμήματα, το ΚΕΓ καλύπτει όλο το φάσμα της γλωσσικής έρευνας, λεξικογραφίας και εκπαίδευσης.",
          mainText: "• Στήριξη της ελληνικής γλώσσας παγκοσμίως\n• Πιστοποίηση επάρκειας ελληνομάθειας\n• Ψηφιακός εμπλουτισμός & Πύλη\n• Μεσαιωνική & Νεοελληνική λεξικογραφία\n• Υποστήριξη διδασκόντων (Φρυκτωρίες)",
          footnote: "www.greeklanguage.gr"
        }
      },
      en: {
        front: {
          category: "CENTER FOR THE GREEK LANGUAGE",
          title: "General Presentation",
          lead: "CGL promotes and supports the Greek language globally, offering digital resources, corpora, and scientific publications.",
          mainText: "'The Greek language is our common horizon. Its cultivation and dissemination constitute the foundation of our cultural identity.'",
          footnote: "centre@komvos.edu.gr"
        },
        back: {
          category: "RESEARCH & EDUCATION",
          title: "Our Key Pillars",
          lead: "Through its four departments, CGL covers language research, lexicography, pedagogy, and supporting Greek abroad.",
          mainText: "• Promoting Greek language education worldwide\n• Official Certification of Attainment in Greek\n• The Digital Portal for the Greek Language\n• Standard medieval & modern lexicography\n• Professional support for teachers (Fryktories)",
          footnote: "www.greeklanguage.gr"
        }
      }
    };
  }

  if (!contentData.bookmark.books) {
    contentData.bookmark.books = {
      el: {
        front: {
          category: "ΕΚΠΑΙΔΕΥΤΙΚΕΣ ΕΚΔΟΣΕΙΣ",
          title: "Σειρά «ΚΛΙΚ στα Ελληνικά»",
          image: "assets/books_illustration.png",
          lead: "Η κορυφαία σειρά βιβλίων για τη διδασκαλία της ελληνικής ως δεύτερης/ξένης γλώσσας.",
          mainText: "«Το βιβλίο είναι το παράθυρο στον κόσμο της γνώσης. Η σειρά ΚΛΙΚ αποτελεί το ιδανικό εργαλείο για την εκμάθηση της ελληνικής γλώσσας, συνδυάζοντας τη θεωρία με την επικοινωνιακή πράξη.»",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΕΚΔΟΣΕΙΣ & ΒΙΒΛΙΑ",
          title: "Εγχειρίδια Εξετάσεων",
          lead: "Επιστημονικά σχεδιασμένα βιβλία για την προετοιμασία των εξετάσεων Πιστοποίησης Ελληνομάθειας.",
          mainText: "• ΚΛΙΚ στα Ελληνικά (επίπεδα Α1-Γ1)\n• Εγχειρίδια προετοιμασίας εξετάσεων\n• Υλικό για διδασκαλία σε παιδιά & ενήλικες\n• Εξειδικευμένα λεξικογραφικά βοηθήματα\n• Διανομή βιβλίων σε όλο τον κόσμο",
          footnote: "www.greeklanguage.gr"
        }
      },
      en: {
        front: {
          category: "EDUCATIONAL BOOKS",
          title: "'KLIK sta Ellinika'",
          image: "assets/books_illustration.png",
          lead: "The premier textbook series for teaching Greek as a second or foreign language.",
          mainText: "'Books are windows to the world of knowledge. The KLIK series is the ultimate guide to mastering Greek, merging theory with practical communication.'",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "PUBLICATIONS",
          title: "Exam Handbooks",
          lead: "Scientifically structured books helping candidates prepare for the Certification in Greek.",
          mainText: "• 'KLIK sta Ellinika' series (Levels A1-C1)\n• Official exam preparation handbooks\n• Curriculum books for children and adults\n• Specialized philological dictionaries\n• Global distribution of CGL publications",
          footnote: "www.greeklanguage.gr"
        }
      }
    };
  }

  if (!contentData.bookmark.interactive) {
    contentData.bookmark.interactive = {
      el: {
        front: {
          category: "ΨΗΦΙΑΚΕΣ ΚΑΙΝΟΤΟΜΙΕΣ",
          title: "Διαδραστικά Βιβλία",
          image: "assets/interactive_illustration.png",
          lead: "Το νέο καινοτόμο ψηφιακό προϊόν του ΚΕΓ που φέρνει το βιβλίο στην οθόνη του υπολογιστή και του tablet.",
          mainText: "«Η μάθηση γίνεται παιχνίδι. Τα διαδραστικά μας βιβλία συνδυάζουν το έντυπο υλικό με ήχο, βίντεο, διαδραστικές ασκήσεις και αυτοαξιολόγηση για μια σύγχρονη εκπαιδευτική εμπειρία.»",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΝΕΕΣ ΤΕΧΝΟΛΟΓΙΕΣ",
          title: "Ψηφιακή Τάξη",
          lead: "Έξυπνα εκπαιδευτικά εργαλεία για μαθητές και εκπαιδευτικούς στην ψηφιακή εποχή.",
          mainText: "• Εμπλουτισμένα e-books με multimedia\n• Διαδραστικά κουίζ & ασκήσεις\n• Ήχος & ακουστική κατανόηση\n• Εξ αποστάσεως παρακολούθηση\n• Συμβατότητα με κινητά & tablet",
          footnote: "ebooks.greeklanguage.gr"
        }
      },
      en: {
        front: {
          category: "DIGITAL INNOVATION",
          title: "Interactive Books",
          image: "assets/interactive_illustration.png",
          lead: "The new innovative digital product by CGL that brings textbooks onto computer screens and tablets.",
          mainText: "'Learning becomes interactive. Our digital books combine print material with audio, video, interactive tasks, and self-assessment for a modern educational experience.'",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "NEW TECHNOLOGIES",
          title: "Digital Classroom",
          lead: "Smart educational tools empowering students and teachers in the digital age.",
          mainText: "• Multimedia-enriched e-books\n• Interactive quizzes & exercises\n• Native audio samples & comprehension\n• Remote learning & progress tracking\n• Full mobile and tablet support",
          footnote: "ebooks.greeklanguage.gr"
        }
      }
    };
  }

  const originalBookletEl = JSON.parse(JSON.stringify(contentData.booklet.el));
  const originalBookletEn = JSON.parse(JSON.stringify(contentData.booklet.en));

  contentData.booklet = {};
  const themes = Object.keys(contentData.bookmark);
  themes.forEach(theme => {
    if (theme !== 'general' && theme !== 'certification' && theme !== 'fryktories') {
      contentData[theme] = {
        el: generateBrochureData(theme, 'el', contentData.bookmark),
        en: generateBrochureData(theme, 'en', contentData.bookmark)
      };
    }
    contentData.booklet[theme] = {
      el: generateBookletData(theme, 'el', contentData, originalBookletEl),
      en: generateBookletData(theme, 'en', contentData, originalBookletEn)
    };
  });
}

function applyZoom() {
  const canvas = document.getElementById('brochureCanvas');
  if (canvas) {
    canvas.style.zoom = state.zoom;
    canvas.style.transform = '';
  }
  const zoomValue = document.getElementById('zoomValue');
  if (zoomValue) {
    zoomValue.innerText = `${Math.round(state.zoom * 100)}%`;
  }
}

// Helper to retrieve currently active dataset
function getActiveData() {
  if (state.docType === 'bookmark') {
    return state.contentData.bookmark[state.bookmarkTheme][state.language];
  }
  const themeKey = state.template;
  if (state.docType === 'booklet') {
    return state.contentData.booklet[themeKey][state.language];
  }
  return state.contentData[themeKey][state.language];
}

// Setup listeners for Video Presenter Modal
function setupVideoPresenterListeners() {
  const videoModal = document.getElementById('videoModal');
  const btnCloseVideoModal = document.getElementById('btnCloseVideoModal');
  const videoPlayerFrame = document.getElementById('videoPlayerFrame');
  const videoScriptText = document.getElementById('videoScriptText');
  const btnSaveScript = document.getElementById('btnSaveScript');
  const btnSynthesizeSpeech = document.getElementById('btnSynthesizeSpeech');
  const avatarSelect = document.getElementById('avatarSelect');

  btnViewVideo.addEventListener('click', () => {
    const activeTheme = state.docType === 'bookmark' ? state.bookmarkTheme : state.template;
    const videoInfo = themeVideos[activeTheme] || themeVideos.general;
    
    // Load YouTube video
    videoPlayerFrame.src = `https://www.youtube.com/embed/${videoInfo.youtubeId}?autoplay=1`;
    
    // Load script (either saved edit or template script)
    const savedScript = state.videoScripts[activeTheme];
    videoScriptText.value = savedScript !== undefined ? savedScript : videoInfo.script;
    
    // Show Modal
    videoModal.style.display = 'flex';
  });

  btnCloseVideoModal.addEventListener('click', () => {
    videoModal.style.display = 'none';
    videoPlayerFrame.src = ''; // stop playback
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel(); // stop TTS
    }
  });

  btnSaveScript.addEventListener('click', () => {
    const activeTheme = state.docType === 'bookmark' ? state.bookmarkTheme : state.template;
    state.videoScripts[activeTheme] = videoScriptText.value;
    alert("✅ Το σενάριο αποθηκεύτηκε επιτυχώς!");
  });

  btnSynthesizeSpeech.addEventListener('click', () => {
    if (!window.speechSynthesis) {
      alert("⚠️ Η σύνθεση ομιλίας δεν υποστηρίζεται από τον browser σας.");
      return;
    }

    // Toggle speech if already speaking
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      btnSynthesizeSpeech.innerText = "🔊 Εκφώνηση Σεναρίου";
      return;
    }

    const scriptText = videoScriptText.value.trim();
    if (!scriptText) return;

    btnSynthesizeSpeech.innerText = "🛑 Διακοπή Εκφώνησης";
    const utterance = new SpeechSynthesisUtterance(scriptText);
    
    // Set Greek voice
    utterance.lang = 'el-GR';
    
    // Choose rate & pitch depending on selected avatar
    if (avatarSelect.value === 'avatar2') {
      // Orpheus - deeper voice pitch
      utterance.pitch = 0.85;
      utterance.rate = 0.95;
    } else {
      // Nefeli - slightly faster pitch
      utterance.pitch = 1.05;
      utterance.rate = 1.0;
    }

    utterance.onend = () => {
      btnSynthesizeSpeech.innerText = "🔊 Εκφώνηση Σεναρίου";
    };

    utterance.onerror = () => {
      btnSynthesizeSpeech.innerText = "🔊 Εκφώνηση Σεναρίου";
    };

    window.speechSynthesis.speak(utterance);
  });
}

// Expose editor actions globally on window
window.deleteElement = function(sectionKey, field, index) {
  const activeData = getActiveData();
  if (activeData[sectionKey] && activeData[sectionKey][field]) {
    activeData[sectionKey][field].splice(index, 1);
    render();
  }
};

window.addParagraph = function(sectionKey) {
  const activeData = getActiveData();
  if (activeData[sectionKey]) {
    if (!activeData[sectionKey].paras) {
      activeData[sectionKey].paras = [];
    }
    // Remove lists to maintain a clean layout structure
    if (activeData[sectionKey].list) {
      delete activeData[sectionKey].list;
    }
    activeData[sectionKey].paras.push("Νέα παράγραφος. Κάντε κλικ εδώ για να την επεξεργαστείτε...");
    render();
  }
};

window.addListItem = function(sectionKey) {
  const activeData = getActiveData();
  if (activeData[sectionKey]) {
    if (!activeData[sectionKey].list) {
      activeData[sectionKey].list = [];
    }
    // Remove paragraphs to maintain a clean structure
    if (activeData[sectionKey].paras) {
      delete activeData[sectionKey].paras;
    }
    activeData[sectionKey].list.push("Νέο στοιχείο λίστας. Κάντε κλικ εδώ για επεξεργασία...");
    render();
  }
};

window.changeImage = function(sectionKey) {
  window.triggerImageUpload(sectionKey);
};

window.triggerImageUpload = function(sectionKey) {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        const base64Data = evt.target.result;
        const activeData = getActiveData();
        if (activeData[sectionKey]) {
          activeData[sectionKey].image = base64Data;
          render();
        }
      };
      reader.readAsDataURL(file);
    }
  });
  
  document.body.appendChild(fileInput);
  fileInput.click();
  document.body.removeChild(fileInput);
};

// Google Gemini AI rewrite caller
window.triggerAiRewrite = async function(section, field, index, buttonEl) {
  const apiKey = localStorage.getItem('geminiApiKey') || state.geminiKey;
  if (!apiKey) {
    alert("⚠️ Παρακαλώ εισάγετε ένα έγκυρο Google Gemini API Key στο sidebar για να χρησιμοποιήσετε αυτή τη λειτουργία!");
    return;
  }

  let selector = `.editable-field[data-sec="${section}"][data-field="${field}"]`;
  if (index !== null && index !== undefined) {
    selector += `[data-idx="${index}"]`;
  }
  const el = document.querySelector(selector);
  if (!el) return;

  const originalText = el.innerText.trim();
  if (!originalText) return;

  buttonEl.classList.add('loading');
  buttonEl.disabled = true;
  el.classList.add('ai-loading-shimmer');

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a professional editor for the Center for the Greek Language.
Rewrite the following text to make it more elegant, rich, and polished, but keep it concise so it fits a printed brochure layout.
Maintain the exact same language (if input is Greek, rewrite in Greek; if English, rewrite in English).
Keep it under 300 characters. Do not include any quotes, introductions, or conversational text. Output ONLY the rewritten text.

Text to rewrite: "${originalText}"`
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Σφάλμα κατά την κλήση του Gemini API");
    }

    const data = await response.json();
    let rewrittenText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (rewrittenText) {
      rewrittenText = rewrittenText.trim().replace(/^["'«“]|["'»”]$/g, '').trim();
      el.innerText = rewrittenText;
      
      if (state.docType === 'bookmark') {
        let lang = state.language;
        if (state.bilingualBookmark) {
          lang = (section === 'front') ? 'el' : 'en';
        }
        const activeData = state.contentData.bookmark[state.bookmarkTheme][lang];
        if (activeData[section]) {
          if (field === 'bullets' && index !== null && index !== undefined) {
            let bulletsArray = activeData[section].mainText.split('\n').filter(line => line.trim() !== '');
            bulletsArray[parseInt(index)] = '• ' + rewrittenText;
            activeData[section].mainText = bulletsArray.join('\n');
          } else {
            activeData[section][field] = rewrittenText;
          }
        }
      } else {
        const activeData = getActiveData();
        if (activeData[section]) {
          if (index !== null && index !== undefined && Array.isArray(activeData[section][field])) {
            activeData[section][field][parseInt(index)] = rewrittenText;
          } else {
            activeData[section][field] = rewrittenText;
          }
        }
      }
    } else {
      alert("⚠️ Το Gemini API δεν επέστρεψε περιεχόμενο. Δοκιμάστε ξανά.");
    }
  } catch (err) {
    console.error(err);
    alert(`⚠️ Σφάλμα AI: ${err.message}`);
  } finally {
    buttonEl.classList.remove('loading');
    buttonEl.disabled = false;
    el.classList.remove('ai-loading-shimmer');
  }
};

// Dynamically toggles contenteditable attribute on elements
function toggleContentEditable() {
  const editableElements = document.querySelectorAll('.editable-field');
  editableElements.forEach(el => {
    el.setAttribute('contenteditable', state.editMode ? 'true' : 'false');
  });
}

// Capture text edits and store them in memory so they are preserved
function bindTextEdits() {
  const editableElements = document.querySelectorAll('.editable-field');
  
  editableElements.forEach(el => {
    el.addEventListener('blur', (e) => {
      const section = e.target.getAttribute('data-sec');
      const field = e.target.getAttribute('data-field');
      const index = e.target.getAttribute('data-idx');
      
      const newText = e.target.innerText.trim();
      
      if (state.docType === 'bookmark') {
        let lang = state.language;
        if (state.bilingualBookmark) {
          lang = (section === 'front') ? 'el' : 'en';
        }
        const activeData = state.contentData.bookmark[state.bookmarkTheme][lang];
        if (activeData[section]) {
          if (field === 'bullets' && index !== null && index !== undefined) {
            let bulletsArray = activeData[section].mainText.split('\n').filter(line => line.trim() !== '');
            bulletsArray[parseInt(index)] = '• ' + newText;
            activeData[section].mainText = bulletsArray.join('\n');
          } else {
            activeData[section][field] = newText;
          }
        }
        return;
      }
      
      const activeData = getActiveData();
      if (activeData[section]) {
        if (index !== null && index !== undefined && activeData[section][field] && Array.isArray(activeData[section][field])) {
          activeData[section][field][parseInt(index)] = newText;
        } else {
          activeData[section][field] = newText;
        }
      }
    });
  });
}

// Render the Fold line element
function createFoldGuide(number) {
  return `<div class="fold-guide fold-guide-${number}"></div>`;
}

// Generate print wrapper containing crop marks and targets
function renderPrintWrapper(panelHtml) {
  return `
    <div class="panel-print-wrapper">
      <!-- Crop Marks -->
      <div class="printer-mark crop-mark crop-tl-h"></div>
      <div class="printer-mark crop-mark crop-tl-v"></div>
      <div class="printer-mark crop-mark crop-tr-h"></div>
      <div class="printer-mark crop-mark crop-tr-v"></div>
      <div class="printer-mark crop-mark crop-bl-h"></div>
      <div class="printer-mark crop-mark crop-bl-v"></div>
      <div class="printer-mark crop-mark crop-br-h"></div>
      <div class="printer-mark crop-mark crop-br-v"></div>
      
      <!-- Registration Marks -->
      <div class="printer-mark registration-mark reg-top"></div>
      <div class="printer-mark registration-mark reg-bottom"></div>
      
      <!-- Color Calibration Bar -->
      <div class="printer-mark color-bar">
        <div class="color-patch patch-c" title="Cyan"></div>
        <div class="color-patch patch-m" title="Magenta"></div>
        <div class="color-patch patch-y" title="Yellow"></div>
        <div class="color-patch patch-k" title="Black"></div>
        <div class="color-patch patch-r" title="Red"></div>
        <div class="color-patch patch-g" title="Green"></div>
        <div class="color-patch patch-b" title="Blue"></div>
      </div>
      
      <!-- The Panel -->
      ${panelHtml}
    </div>
  `;
}

// Render dynamic print page sizes dynamically via style tag
function updatePrintPageSize() {
  let styleTag = document.getElementById('print-page-style');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'print-page-style';
    document.head.appendChild(styleTag);
  }

  let w = 176;
  let h = 250;
  
  if (state.docType === 'bookmark') {
    w = 55;
    h = 200;
  } else if (state.pageSize === 'a4') {
    w = 210; h = 297;
  } else if (state.pageSize === 'a5') {
    w = 148; h = 210;
  } else if (state.pageSize === 'dl') {
    w = 99; h = 210;
  }

  let panels = 2; // Default for bifold / booklet / bookmark
  if (state.docType === 'brochure') {
    if (state.layout === 'trifold') panels = 3;
    else if (state.layout === 'single') panels = 1;
  }

  let totalW = panels * w;
  let totalH = h;

  if (state.printGuides) {
    totalW += 24; // 12mm left, 12mm right margins
    totalH += 30; // 15mm top, 15mm bottom margins
  }

  styleTag.innerHTML = `
    @media print {
      @page {
        size: ${totalW}mm ${totalH}mm;
        margin: 0;
      }
    }
  `;
}

// Render dynamic content according to current layout, template and language
function render() {
  if (!state.authenticated) {
    return; // Don't render content if not logged in
  }

  // 1. Set Typography & Theme classes on document body
  document.body.className = '';
  document.body.classList.add(`theme-${state.theme}`);
  document.body.classList.add(`font-${state.fontStyle}`);
  document.body.classList.add(`size-${state.fontSize}`);
  applyUIClassesToBody();

  // 2. Set dynamic panel dimensions on root element
  const root = document.documentElement;
  if (state.docType === 'bookmark') {
    root.style.setProperty('--panel-width', '55mm');
    root.style.setProperty('--panel-height', '200mm');
  } else if (state.pageSize === 'a4') {
    root.style.setProperty('--panel-width', '210mm');
    root.style.setProperty('--panel-height', '297mm');
  } else if (state.pageSize === 'a5') {
    root.style.setProperty('--panel-width', '148mm');
    root.style.setProperty('--panel-height', '210mm');
  } else if (state.pageSize === 'dl') {
    root.style.setProperty('--panel-width', '99mm');
    root.style.setProperty('--panel-height', '210mm');
  } else {
    root.style.setProperty('--panel-width', '176mm');
    root.style.setProperty('--panel-height', '250mm');
  }

  // Show/Hide template and layout controls based on docType
  const layoutSection = document.getElementById('layoutSection');
  const bilingualBookmarkToggleGroup = document.getElementById('bilingualBookmarkToggleGroup');

  if (state.docType === 'bookmark') {
    layoutSection.style.display = 'none';
    bilingualBookmarkToggleGroup.style.display = 'block';
  } else if (state.docType === 'booklet') {
    layoutSection.style.display = 'none';
    bilingualBookmarkToggleGroup.style.display = 'none';
  } else {
    layoutSection.style.display = 'block';
    bilingualBookmarkToggleGroup.style.display = 'none';
  }

  brochureCanvas.innerHTML = ''; // Clear canvas

  // 3. Render content based on document type
  if (state.docType === 'bookmark') {
    let frontLang = state.language;
    let backLang = state.language;
    if (state.bilingualBookmark) {
      frontLang = 'el';
      backLang = 'en';
    }
    const themeData = state.contentData.bookmark[state.bookmarkTheme];
    const frontData = themeData[frontLang].front;
    const backData = themeData[backLang].back;

    brochureCanvas.innerHTML = `
      <div class="spread-container outside-spread">
        <div class="spread-title-indicator">Θεματικός Σελιδοδείκτης (Διαστάσεις: 55mm x 200mm, Διπλής Όψεως)</div>
        <div class="spread-canvas layout-bifold motif-${state.motif}">
          ${renderPrintWrapper(renderBookmarkPanel(frontData, 'front', '1'))}
          ${renderPrintWrapper(renderBookmarkPanel(backData, 'back', '2'))}
        </div>
      </div>
    `;
  } else if (state.docType === 'booklet') {
    const activeContent = getActiveData();
    
    // Render 8 Spreads (16 pages total, saddle stitched)
    brochureCanvas.innerHTML = `
      <!-- Spread 1: Covers -->
      <div class="spread-container outside-spread">
        <div class="spread-title-indicator">Φύλλο 1: Εξώφυλλο / Οπισθόφυλλο (Σελίδες 16 & 1) - Βιβλιοδεσία Καρφίτσα</div>
        <div class="spread-canvas layout-bifold motif-${state.motif}">
          ${renderPrintWrapper(renderBackCoverPanel(activeContent.page16, '16'))}
          ${renderPrintWrapper(renderCoverPanel(activeContent.page1, '1'))}
        </div>
      </div>
      
      <!-- Spread 2: Pages 2 & 3 -->
      <div class="spread-container inside-spread">
        <div class="spread-title-indicator">Φύλλο 2: Σελίδες 2 & 3 (Ταυτότητα & Αποστολή / Επιστημονικές Αρχές)</div>
        <div class="spread-canvas layout-bifold motif-${state.motif}">
          ${renderPrintWrapper(renderSectionPanel('page2', activeContent.page2, '2'))}
          ${renderPrintWrapper(renderSectionPanel('page3', activeContent.page3, '3'))}
        </div>
      </div>
      
      <!-- Spread 3: Pages 4 & 5 -->
      <div class="spread-container inside-spread">
        <div class="spread-title-indicator">Φύλλο 3: Σελίδες 4 & 5 (Ερευνητικά Τμήματα: Λεξικογραφία & Γλωσσολογία)</div>
        <div class="spread-canvas layout-bifold motif-${state.motif}">
          ${renderPrintWrapper(renderSectionPanel('page4', activeContent.page4, '4'))}
          ${renderPrintWrapper(renderSectionPanel('page5', activeContent.page5, '5'))}
        </div>
      </div>
      
      <!-- Spread 4: Pages 6 & 7 -->
      <div class="spread-container inside-spread">
        <div class="spread-title-indicator">Φύλλο 4: Σελίδες 6 & 7 (Ερευνητικά Τμήματα: Στήριξη/Προβολή & Γλώσσα/Λογοτεχνία)</div>
        <div class="spread-canvas layout-bifold motif-${state.motif}">
          ${renderPrintWrapper(renderSectionPanel('page6', activeContent.page6, '6'))}
          ${renderPrintWrapper(renderSectionPanel('page7', activeContent.page7, '7'))}
        </div>
      </div>
      
      <!-- Spread 5: Pages 8 & 9 -->
      <div class="spread-container inside-spread">
        <div class="spread-title-indicator">Φύλλο 5: Σελίδες 8 & 9 (Η Πύλη για την Ελληνική Γλώσσα)</div>
        <div class="spread-canvas layout-bifold motif-${state.motif}">
          ${renderPrintWrapper(renderSectionPanel('page8', activeContent.page8, '8'))}
          ${renderPrintWrapper(renderSectionPanel('page9', activeContent.page9, '9'))}
        </div>
      </div>
      
      <!-- Spread 6: Pages 10 & 11 -->
      <div class="spread-container inside-spread">
        <div class="spread-title-indicator">Φύλλο 6: Σελίδες 10 & 11 (Ψηφιακά Εργαλεία & Ψηφίδες/E-Learning)</div>
        <div class="spread-canvas layout-bifold motif-${state.motif}">
          ${renderPrintWrapper(renderSectionPanel('page10', activeContent.page10, '10'))}
          ${renderPrintWrapper(renderSectionPanel('page11', activeContent.page11, '11'))}
        </div>
      </div>
      
      <!-- Spread 7: Pages 12 & 13 -->
      <div class="spread-container inside-spread">
        <div class="spread-title-indicator">Φύλλο 7: Σελίδες 12 & 13 (Πιστοποίηση Ελληνομάθειας - Δράση & Επίπεδα)</div>
        <div class="spread-canvas layout-bifold motif-${state.motif}">
          ${renderPrintWrapper(renderSectionPanel('page12', activeContent.page12, '12'))}
          ${renderPrintWrapper(renderSectionPanel('page13', activeContent.page13, '13'))}
        </div>
      </div>
      
      <!-- Spread 8: Pages 14 & 15 -->
      <div class="spread-container inside-spread">
        <div class="spread-title-indicator">Φύλλο 8: Σελίδες 14 & 15 (Χρησιμότητα Πιστοποιητικού / Δίκτυο Φρυκτωρίες)</div>
        <div class="spread-canvas layout-bifold motif-${state.motif}">
          ${renderPrintWrapper(renderSectionPanel('page14', activeContent.page14, '14'))}
          ${renderPrintWrapper(renderSectionPanel('page15', activeContent.page15, '15'))}
        </div>
      </div>
    `;
  } else {
    const activeContent = getActiveData();
    
    if (state.layout === 'trifold') {
      brochureCanvas.innerHTML = `
        <div class="spread-container outside-spread">
          <div class="spread-title-indicator">Εξωτερική Όψη (Μπροστινό & Πίσω Μέρος)</div>
          <div class="spread-canvas layout-trifold motif-${state.motif}">
            ${renderPrintWrapper(renderSectionPanel('section3', activeContent.section3, '4'))}
            ${renderPrintWrapper(renderBackCoverPanel(activeContent.backCover, '5'))}
            ${renderPrintWrapper(renderCoverPanel(activeContent.cover, '6'))}
          </div>
        </div>
        <div class="spread-container inside-spread">
          <div class="spread-title-indicator">Εσωτερική Όψη (Εσωτερικές Σελίδες)</div>
          <div class="spread-canvas layout-trifold motif-${state.motif}">
            ${renderPrintWrapper(renderSectionPanel('intro', activeContent.intro, '1'))}
            ${renderPrintWrapper(renderSectionPanel('section1', activeContent.section1, '2'))}
            ${renderPrintWrapper(renderSectionPanel('section2', activeContent.section2, '3'))}
          </div>
        </div>
      `;
    } else if (state.layout === 'bifold') {
      brochureCanvas.innerHTML = `
        <div class="spread-container outside-spread">
          <div class="spread-title-indicator">Εξωτερική Όψη (Μπροστινό & Πίσω Μέρος)</div>
          <div class="spread-canvas layout-bifold motif-${state.motif}">
            ${renderPrintWrapper(renderBackCoverPanel(activeContent.backCover, '4'))}
            ${renderPrintWrapper(renderCoverPanel(activeContent.cover, '1'))}
          </div>
        </div>
        <div class="spread-container inside-spread">
          <div class="spread-title-indicator">Εσωτερική Όψη (Εσωτερικές Σελίδες)</div>
          <div class="spread-canvas layout-bifold motif-${state.motif}">
            ${renderPrintWrapper(renderSectionPanel('intro', activeContent.intro, '2'))}
            ${renderPrintWrapper(renderSectionPanel('section1', activeContent.section1, '3'))}
          </div>
        </div>
      `;
    } else { // single page
      brochureCanvas.innerHTML = `
        <div class="spread-container outside-spread">
          <div class="spread-title-indicator">Εξωτερική Όψη (Μπροστινό Μέρος)</div>
          <div class="spread-canvas layout-single motif-${state.motif}">
            ${renderPrintWrapper(renderCoverPanel(activeContent.cover, '1'))}
          </div>
        </div>
        <div class="spread-container inside-spread">
          <div class="spread-title-indicator">Εσωτερική Όψη (Πίσω Μέρος)</div>
          <div class="spread-canvas layout-single motif-${state.motif}">
            ${renderPrintWrapper(renderSectionPanel('intro', activeContent.intro, '2'))}
          </div>
        </div>
      `;
    }
  }

  // 4. Update Print styles
  updatePrintPageSize();

  // 5. Connect Text editing
  toggleContentEditable();
  bindTextEdits();
}

// Panel Render Functions
function renderCoverPanel(coverData, pageNum) {
  return `
    <div class="brochure-panel panel-cover" data-page="${pageNum}">
      <div class="panel-border-box"></div>
      <div class="ornament-corner ornament-tl"></div>
      <div class="ornament-corner ornament-tr"></div>
      <div class="ornament-corner ornament-bl"></div>
      <div class="ornament-corner ornament-br"></div>
      
      <div class="editable-container">
        <div class="cover-badge editable-field" data-sec="cover" data-field="badge">${coverData.badge}</div>
        <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('cover', 'badge', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
      </div>
      
      <div class="cover-main">
        <div class="cover-emblem"></div>
        <div class="editable-container">
          <h1 class="cover-title serif-title editable-field" data-sec="cover" data-field="title">${coverData.title}</h1>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('cover', 'title', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        <div class="editable-container">
          <p class="cover-subtitle greek-style-heading editable-field" data-sec="cover" data-field="subtitle">${coverData.subtitle}</p>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('cover', 'subtitle', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
      </div>
      
      <div class="cover-event">
        <div class="editable-container">
          <div class="cover-event-title editable-field" data-sec="cover" data-field="eventTitle">${coverData.eventTitle}</div>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('cover', 'eventTitle', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        <div class="editable-container">
          <div class="cover-event-date editable-field" data-sec="cover" data-field="eventDate">${coverData.eventDate}</div>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('cover', 'eventDate', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
      </div>
    </div>
  `;
}

function renderBackCoverPanel(backData, pageNum) {
  return `
    <div class="brochure-panel panel-back-cover" data-page="${pageNum}">
      <div class="panel-border-box"></div>
      <div class="ornament-corner ornament-tl"></div>
      <div class="ornament-corner ornament-tr"></div>
      <div class="ornament-corner ornament-bl"></div>
      <div class="ornament-corner ornament-br"></div>
      
      <div class="back-header">
        <div class="editable-container">
          <span class="panel-category editable-field" data-sec="backCover" data-field="title">${backData.title}</span>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('backCover', 'title', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        <div class="editable-container">
          <p class="panel-lead editable-field" data-sec="backCover" data-field="lead">${backData.lead}</p>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('backCover', 'lead', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
      </div>
      
      <div class="contact-info">
        <div class="editable-container">
          <p class="contact-item editable-field" data-sec="backCover" data-field="address">${backData.address}</p>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('backCover', 'address', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        <div class="editable-container">
          <p class="contact-item editable-field" data-sec="backCover" data-field="phone">${backData.phone}</p>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('backCover', 'phone', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        <div class="editable-container">
          <p class="contact-item editable-field" data-sec="backCover" data-field="email">${backData.email}</p>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('backCover', 'email', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        <div class="editable-container">
          <p class="contact-item editable-field" data-sec="backCover" data-field="website">${backData.website}</p>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('backCover', 'website', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
      </div>
      
      <div class="back-footer">
        <div class="social-links">
          <div class="editable-container" style="display: inline-block;">
            <span class="editable-field" data-sec="backCover" data-field="socialFb">${backData.socialFb}</span>
            <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('backCover', 'socialFb', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
          </div>
          <span>•</span>
          <div class="editable-container" style="display: inline-block;">
            <span class="editable-field" data-sec="backCover" data-field="socialTw">${backData.socialTw}</span>
            <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('backCover', 'socialTw', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSectionPanel(sectionKey, sectionData, pageNum) {
  let bodyContent = '';
  
  if (sectionData.paras) {
    bodyContent = sectionData.paras.map((p, idx) => `
      <div class="editable-container">
        <p class="panel-para editable-field" data-sec="${sectionKey}" data-field="paras" data-idx="${idx}">${p}</p>
        <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${sectionKey}', 'paras', ${idx}, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        <button class="delete-element-btn" onclick="window.deleteElement('${sectionKey}', 'paras', ${idx})">❌</button>
      </div>
    `).join('');
  } else if (sectionData.list) {
    bodyContent = `
      <ul class="panel-list">
        ${sectionData.list.map((item, idx) => `
          <div class="editable-container">
            <li class="editable-field" data-sec="${sectionKey}" data-field="list" data-idx="${idx}">${item}</li>
            <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${sectionKey}', 'list', ${idx}, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
            <button class="delete-element-btn" onclick="window.deleteElement('${sectionKey}', 'list', ${idx})">❌</button>
          </div>
        `).join('')}
      </ul>
    `;
  }

  let imageContent = '';
  if (sectionData.image) {
    imageContent = `
      <div class="image-edit-container">
        <img src="${sectionData.image}" alt="${sectionData.title}" class="panel-image">
        <button class="btn-image-change" onclick="window.changeImage('${sectionKey}')">📷 Αλλαγή Εικόνας</button>
      </div>
    `;
  }

  return `
    <div class="brochure-panel" data-page="${pageNum}">
      <div class="panel-border-box"></div>
      <div class="ornament-corner ornament-tl"></div>
      <div class="ornament-corner ornament-tr"></div>
      <div class="ornament-corner ornament-bl"></div>
      <div class="ornament-corner ornament-br"></div>
      
      <div class="panel-header">
        <div class="editable-container">
          <span class="panel-category editable-field" data-sec="${sectionKey}" data-field="category">${sectionData.category}</span>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${sectionKey}', 'category', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        <div class="editable-container">
          <h2 class="panel-title serif-title editable-field" data-sec="${sectionKey}" data-field="title">${sectionData.title}</h2>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${sectionKey}', 'title', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
      </div>
      
      <div class="panel-body">
        <div class="editable-container">
          <div class="panel-lead editable-field" data-sec="${sectionKey}" data-field="lead">${sectionData.lead}</div>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${sectionKey}', 'lead', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        ${bodyContent}
        ${imageContent}
      </div>

      <div class="panel-editor-controls">
        <button class="btn-panel-action" onclick="window.addParagraph('${sectionKey}')">➕ Παράγραφος</button>
        <button class="btn-panel-action" onclick="window.addListItem('${sectionKey}')">➕ Λίστα</button>
        <button class="btn-panel-action" onclick="window.triggerImageUpload('${sectionKey}')">📷 Εικόνα</button>
      </div>
    </div>
  `;
}

// Render function for Bookmark Panel
function renderBookmarkPanel(panelData, side, pageNum) {
  const category = panelData.category || "";
  const title = panelData.title || "";
  const subtitle = panelData.subtitle || "";
  const lead = panelData.lead || "";
  const mainText = panelData.mainText || "";
  const footnote = panelData.footnote || "";
  
  let mainBodyContent = '';
  if (mainText.includes('•') || mainText.includes('- ')) {
    const bullets = mainText.split('\n').filter(line => line.trim() !== '');
    mainBodyContent = `
      <ul class="bookmark-bullets">
        ${bullets.map((b, idx) => {
          const cleanB = b.replace(/^[•\-\*\s]+/, '').trim();
          return `
            <div class="editable-container">
              <li class="editable-field" data-sec="${side}" data-field="bullets" data-idx="${idx}">${cleanB}</li>
            </div>
          `;
        }).join('')}
      </ul>
    `;
  } else if (mainText.includes('«') || mainText.includes('"') || mainText.includes('\'')) {
    mainBodyContent = `
      <div class="editable-container">
        <p class="bookmark-quote editable-field" data-sec="${side}" data-field="mainText">${mainText}</p>
        <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${side}', 'mainText', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
      </div>
    `;
  } else {
    mainBodyContent = `
      <div class="editable-container">
        <p class="panel-para editable-field" data-sec="${side}" data-field="mainText">${mainText}</p>
        <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${side}', 'mainText', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
      </div>
    `;
  }

  let emblemHtml = '';
  if (panelData.image) {
    emblemHtml = `
      <div class="bookmark-image-container">
        <img src="${panelData.image}" class="bookmark-portrait-image" alt="${title}" />
      </div>
    `;
  } else if (side === 'front') {
    emblemHtml = `<div class="cover-emblem"></div>`;
  }

  return `
    <div class="brochure-panel panel-bookmark" data-page="${pageNum}">
      <div class="panel-border-box"></div>
      <div class="ornament-corner ornament-tl"></div>
      <div class="ornament-corner ornament-tr"></div>
      <div class="ornament-corner ornament-bl"></div>
      <div class="ornament-corner ornament-br"></div>
      
      <div class="panel-header">
        <div class="editable-container">
          <span class="panel-category editable-field" data-sec="${side}" data-field="category">${category}</span>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${side}', 'category', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        <div class="editable-container">
          <h2 class="panel-title serif-title editable-field" data-sec="${side}" data-field="title">${title}</h2>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${side}', 'title', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        ${subtitle ? `
          <div class="editable-container">
            <p class="cover-subtitle greek-style-heading editable-field" data-sec="${side}" data-field="subtitle">${subtitle}</p>
            <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${side}', 'subtitle', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
          </div>
        ` : ''}
      </div>
      
      <div class="panel-body">
        <div class="editable-container">
          <div class="panel-lead editable-field" data-sec="${side}" data-field="lead">${lead}</div>
          <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${side}', 'lead', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
        </div>
        ${mainBodyContent}
        ${emblemHtml}
      </div>
      
      <div class="editable-container">
        <div class="bookmark-footnote editable-field" data-sec="${side}" data-field="footnote">${footnote}</div>
        <button class="ai-rewrite-btn" onclick="window.triggerAiRewrite('${side}', 'footnote', null, this)" title="Ανασύνταξη με Gemini AI">✨ AI</button>
      </div>
    </div>
  `;
}

// Start app on load
window.addEventListener('DOMContentLoaded', init);
