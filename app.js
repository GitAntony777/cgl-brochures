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
          lead: "Το μνημειώδες έργο για τη μεσαιωνική ελληνική γραμματεία.",
          mainText: "«Η γλώσσα είναι ο καθρέφτης του πνεύματος και της ιστορίας ενός λαού.»\n— Εμμανουήλ Κριαράς",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΨΗΦΙΑΚΗ ΛΕΞΙΚΟΓΡΑΦΙΑ",
          title: "Ηλεκτρονικά Λεξικά",
          lead: "Ελεύθερη online πρόσβαση στα κορυφαία λεξικά της ελληνικής γραμματείας.",
          mainText: "• Λεξικό Κοινής Νεοελληνικής (Τριανταφυλλίδη)\n• Λεξικό Μεσαιωνικής Δημώδους (Κριαρά)\n• Επιτομή Λεξικού Liddell & Scott",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "LEXICOGRAPHY DEPT.",
          title: "Kriaras Dictionary",
          lead: "The monumental work for medieval Greek literature.",
          mainText: "'Language is the mirror of a nation's spirit and history.'\n— Emmanuel Kriaras",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "DIGITAL LEXICOGRAPHY",
          title: "E-Dictionaries",
          lead: "Free online access to standard Greek dictionaries.",
          mainText: "• Dictionary of Standard Modern Greek\n• Medieval Greek Lexicon (Kriaras)\n• Liddell & Scott Greek-English Lexicon",
          footnote: "www.greek-language.gr"
        }
      }
    },
    linguistics: {
      el: {
        front: {
          category: "ΤΜΗΜΑ ΓΛΩΣΣΟΛΟΓΙΑΣ",
          title: "Γλωσσική Έρευνα",
          lead: "Μελέτη της δομής, της ιστορικής εξέλιξης και των διαλέκτων της ελληνικής.",
          mainText: "Έρευνα για τη γλωσσική ποικιλία, την κοινωνιογλωσσολογία και τη χάραξη εθνικής γλωσσικής πολιτικής.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΓΛΩΣΣΙΚΟΙ ΠΟΡΟΙ",
          title: "Σώματα Κειμένων",
          lead: "Σύγχρονα ψηφιακά εργαλεία για ερευνητές και γλωσσολόγους.",
          mainText: "• Εθνικά σώματα κειμένων (corpora)\n• Μελέτες για τις νεοελληνικές διαλέκτους\n• Ψηφιακές υποδομές γλωσσικής ανάλυσης",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "LINGUISTICS DEPT.",
          title: "Linguistic Research",
          lead: "Studying the structure, historical development, and dialects of Greek.",
          mainText: "Research in linguistic variation, sociolinguistics, and national language planning.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "LINGUISTIC RESOURCES",
          title: "Text Corpora",
          lead: "State-of-the-art digital tools for researchers and linguists.",
          mainText: "• Systematic text corpora\n• Studies on Modern Greek dialects\n• Infrastructure for linguistic analysis",
          footnote: "www.greek-language.gr"
        }
      }
    },
    literature: {
      el: {
        front: {
          category: "ΓΛΩΣΣΑ & ΛΟΓΟΤΕΧΝΙΑ",
          title: "Λόγος & Τέχνη",
          lead: "Η ελληνική λογοτεχνία ως βασικός πυλώνας γλωσσικής καλλιέργειας και παιδείας.",
          mainText: "«Η λογοτεχνία είναι η πατρίδα των λέξεων που σώζουν την ψυχή μας.»\nΈρευνα και ανάδειξη της νεοελληνικής γραμματείας.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΨΗΦΙΑΚΗ ΑΝΘΟΛΟΓΗΣΗ",
          title: "Πόροι Λογοτεχνίας",
          lead: "Ψηφιακά περιβάλλοντα για τη μελέτη της λογοτεχνικής μας κληρονομιάς.",
          mainText: "• Ανθολογίες νεοελληνικής λογοτεχνίας\n• Ψηφιακή βιβλιοθήκη «Μνημοσύνη»\n• Εκπαιδευτικό υλικό για τη σχολική τάξη",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "LANGUAGE & LITERATURE",
          title: "Word & Art",
          lead: "Greek literature as a fundamental pillar of linguistic cultivation and culture.",
          mainText: "Researching, preserving, and highlighting Modern Greek literary works across eras.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "DIGITAL ANTHOLOGIES",
          title: "Literature Resources",
          lead: "Digital environments for studying our rich literary heritage.",
          mainText: "• Modern Greek literature anthologies\n• 'Mnemosyne' digital library of ancient texts\n• Educational material for high schools",
          footnote: "www.greek-language.gr"
        }
      }
    },
    certification: {
      el: {
        front: {
          category: "ΠΙΣΤΟΠΟΙΗΣΗ",
          title: "Ελληνομάθεια",
          lead: "Ο επίσημος κρατικός τίτλος επάρκειας της ελληνικής γλώσσας παγκοσμίως.",
          mainText: "«Ένα επίσημο διαβατήριο για σπουδές, εργασία και θεσμική αναγνώριση στην Ελλάδα και την Ευρώπη.»",
          footnote: "ellinomatheia@komvos.edu.gr"
        },
        back: {
          category: "ΟΙ ΕΞΕΤΑΣΕΙΣ",
          title: "Δομή & Επίπεδα",
          lead: "Διεξαγωγή εξετάσεων κάθε Μάιο σε πάνω από 160 εξεταστικά κέντρα παγκοσμίως.",
          mainText: "• Επίπεδα Α1-Γ2 (σύμφωνα με το CEFR)\n• Αναγνωρισμένοι τίτλοι σπουδών\n• Σειρά βιβλίων «ΚΛΙΚ στα Ελληνικά»",
          footnote: "www.greek-language.gr/certification"
        }
      },
      en: {
        front: {
          category: "CERTIFICATION",
          title: "Greek Proficiency",
          lead: "The official state certificate of proficiency in the Greek language worldwide.",
          mainText: "'An official passport for studies, professional employment, and legal status in Greece & EU.'",
          footnote: "ellinomatheia@komvos.edu.gr"
        },
        back: {
          category: "EXAMINATIONS",
          title: "Structure & Levels",
          lead: "Held every May at over 160 official exam centers across the globe.",
          mainText: "• Levels A1-C2 (aligned with the CEFR)\n• Globally recognized credentials\n• 'KLIK sta Ellinika' textbook series",
          footnote: "www.greek-language.gr/certification"
        }
      }
    },
    portal: {
      el: {
        front: {
          category: "ΨΗΦΙΑΚΟΣ ΚΟΜΒΟΣ",
          title: "Η Πύλη",
          lead: "Ο κεντρικός ψηφιακός κόμβος της ελληνικής γλώσσας στο διαδίκτυο.",
          mainText: "Ψηφιακός θησαυρός για εκπαιδευτικούς, ερευνητές, φοιτητές και μαθητές σε όλο τον κόσμο.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΨΗΦΙΑΚΟΙ ΠΟΡΟΙ",
          title: "Ελεύθερη Πρόσβαση",
          lead: "Πληθώρα εργαλείων και επιστημονικών πόρων με ένα κλικ.",
          mainText: "• Ηλεκτρονικά λεξικά & σώματα κειμένων\n• Ψηφίδες γλωσσικής εκπαίδευσης\n• Βιβλιογραφικοί οδηγοί & μελέτες",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "DIGITAL PORTAL",
          title: "The Portal",
          lead: "The flagship digital hub for the Greek language on the web.",
          mainText: "A comprehensive digital treasure for educators, students, and scholars worldwide.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "DIGITAL RESOURCES",
          title: "Free Access",
          lead: "A wealth of linguistic tools and educational resources at your fingertips.",
          mainText: "• E-dictionaries & text corpora\n• Psifides pedagogical environment\n• Bibliographical guides & materials",
          footnote: "www.greek-language.gr"
        }
      }
    },
    fryktories: {
      el: {
        front: {
          category: "ΨΗΦΙΑΚΟ ΔΙΚΤΥΟ",
          title: "Φρυκτωρίες",
          lead: "Σύνδεση των εδρών ελληνικών σπουδών και των εκπαιδευτικών σε όλο τον κόσμο.",
          mainText: "Μετάδοση του ελληνικού λόγου και του πολιτισμού από άκρη σε άκρη της γης μέσω της τεχνολογίας.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΚΟΙΝΟΤΗΤΑ ΜΑΘΗΣΗΣ",
          title: "Δίκτυο & Συνεργασία",
          lead: "Μια παγκόσμια κοινότητα επικοινωνίας και υποστήριξης.",
          mainText: "• Χάρτης εδρών ελληνικών σπουδών\n• Ανταλλαγή εκπαιδευτικών σεναρίων\n• Φόρουμ επιστημονικού διαλόγου",
          footnote: "www.fryktories.gr"
        }
      },
      en: {
        front: {
          category: "DIGITAL NETWORK",
          title: "Fryktories",
          lead: "Connecting departments of Greek studies and educators across the globe.",
          mainText: "Transmitting Greek language and culture to the ends of the earth through modern technology.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "LEARNING NETWORK",
          title: "Connect & Collaborate",
          lead: "A global community for communication and mutual support.",
          mainText: "• Global directory of Greek chairs\n• Sharing lesson plans & resources\n• Scientific discussion forums",
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
          lead: "Αποσπάσματα από τα κορυφαία ποιήματα της παγκόσμιας λογοτεχνίας.",
          mainText: "«Σαν έτοιμος από καιρό, σα θαρραλέος, αποχαιρέτα την, την Αλεξάνδρεια που φεύγει.»\n— Αποχαιρετισμός",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΙΘΑΚΗ",
          title: "Το Ταξίδι της Ζωής",
          subtitle: "Φιλοσοφική Ποίηση",
          lead: "«Σα βγεις στον πηγαιμό για την Ιθάκη, να εύχεσαι να 'ναι μακρύς ο δρόμος, γεμάτος περιπέτειες, γεμάτος γνώσεις.»",
          mainText: "Η φιλοσοφική ποίηση του Κ. Π. Καβάφη ως οικουμενικό μάθημα ζωής και γλωσσικής ακρίβειας.",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "BIOGRAPHICAL BOOKMARK",
          title: "C. P. Cavafy",
          subtitle: "The Alexandrian Poet",
          lead: "Excerpts from some of the finest works in modern world poetry.",
          mainText: "'As one long prepared, as one courageous, bid her farewell, the Alexandria that is leaving.'\n— The God Abandons Antony",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "ITHACA",
          title: "The Journey of Life",
          subtitle: "Philosophical Poetry",
          lead: "'Keep Ithaca always in your mind. Arriving there is what you're destined for. But don't hurry the journey at all.'",
          mainText: "Cavafy's historical and philosophical poetry as a universal lesson of wisdom and artistic precision.",
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
          lead: "Βραβείο Νόμπελ Λογοτεχνίας 1979. Η ποίηση του φωτός, του Αιγαίου και του ελληνισμού.",
          mainText: "«Εάν αποσυνδέσεις την Ελλάδα, στο τέλος θα δεις να σου απομένουν μια ελιά, ένα αμπέλι κι ένα καράβι. Που σημαίνει: με άλλα τόσα την ξαναφτιάχνεις.»",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΤΟ ΑΞΙΟΝ ΕΣΤΙ",
          title: "Μνημειώδες Έργο",
          subtitle: "Νόμπελ Λογοτεχνίας",
          lead: "«Τη γλώσσα μου έδωσαν ελληνική· το σπίτι φτωχικό στις αμμουδιές του Ομήρου...»",
          mainText: "Η λυρική κοσμοθεωρία του Ελύτη ως ύμνος στη ζωή, την ελευθερία και τη διαχρονική δύναμη του ελληνικού λόγου.",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "BIOGRAPHICAL BOOKMARK",
          title: "O. Elytis",
          subtitle: "Poet of the Aegean",
          lead: "Nobel Prize in Literature 1979. The poetry of light, the Aegean Sea, and Hellenism.",
          mainText: "'If you deconstruct Greece, in the end you will see that what is left is an olive tree, a vineyard and a boat. Meaning: with these same components you can rebuild it.'",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "THE AXION ESTI",
          title: "The Lyrical Anthem",
          subtitle: "Nobel Prize 1979",
          lead: "'Greek was the language they gave me; humble my house on the sandy shores of Homer...'",
          mainText: "Elytis's lyrical philosophy as an anthem to life, liberty, and the enduring power of the Greek language.",
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
          lead: "Βραβείο Νόμπελ Λογοτεχνίας 1963. Ο ποιητής που συνδύασε τον κλασικό μύθο με τη σύγχρονη μοίρα.",
          mainText: "«Σ' αυτόν τον κόσμο, που ολοένα στενεύει, ο καθένας μας χρειάζεται τον άλλο. Πρέπει να αναζητήσουμε τον άνθρωπο, όπου κι αν βρίσκεται.»",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "Η ΕΛΛΗΝΙΚΗ ΓΛΩΣΣΑ",
          title: "Λόγος της Αποδοχής",
          subtitle: "Νόμπελ Λογοτεχνίας",
          lead: "«Ανήκω σε μια χώρα μικρή. Είναι ένα πέτρινο ακρωτήρι στη Μεσόγειο, που δεν έχει άλλο αγαθό παρά τον αγώνα του λαού του, τη θάλασσα, και το φως του ήλιου.»",
          mainText: "«Είναι μικρός ο τόπος μας, αλλά η παράδοσή του είναι τεράστια και το κοινό χαρακτηριστικό της είναι ότι μας παραδόθηκε χωρίς διακοπή.»",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "BIOGRAPHICAL BOOKMARK",
          title: "G. Seferis",
          subtitle: "Poetry & History",
          lead: "Nobel Prize in Literature 1963. Integrating classical myth with modern human destiny.",
          mainText: "'In this world, which is constantly shrinking, each of us needs the other. We must seek out man, wherever he may be.'",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "THE GREEK LANGUAGE",
          title: "Nobel Speech",
          subtitle: "Nobel Prize 1963",
          lead: "'I belong to a small country. A stone cape in the Mediterranean, with no other resource than the struggle of its people, the sea, and the light of the sun.'",
          mainText: "'Our land is small, but its tradition is vast, and its main characteristic is that it has been handed down to us without interruption.'",
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
          lead: "Ο κορυφαίος Έλληνας φιλόλογος, λεξικογράφος και υποστηρικτής της δημοτικής γλώσσας.",
          mainText: "«Η δημοτική γλώσσα είναι η ζωντανή φωνή του ελληνικού λαού, το όργανο με το οποίο εκφράστηκε η ψυχή του έθνους μας.»",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΤΟ ΛΕΞΙΚΟ ΚΡΙΑΡΑ",
          title: "Μεσαιωνική Γραμματεία",
          subtitle: "Λεξικογραφικό Έργο",
          lead: "Το Λεξικό της Μεσαιωνικής Ελληνικής Δημώδους Γραμματείας (1100-1669) αποτελεί τον συνδετικό κρίκο της γλώσσας μας.",
          mainText: "Η έκδοση του Λεξικού συνεχίζεται συστηματικά από το ΚΕΓ (23ος τόμος, 2025) αποτελώντας παγκόσμιο σημείο αναφοράς.",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "BIOGRAPHICAL BOOKMARK",
          title: "Em. Kriaras",
          subtitle: "The Scholar of Greek",
          lead: "The preeminent Greek philologist, lexicographer, and advocate of the Demotic language.",
          mainText: "'The demotic language is the living voice of the Greek people, the instrument through which the soul of our nation was expressed.'",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "KRIARAS DICTIONARY",
          title: "Medieval Greek Lexicon",
          subtitle: "Lexicographical Work",
          lead: "The Dictionary of Medieval Vulgar Greek Literature (1100-1669) is the essential link in the history of Greek.",
          mainText: "The publication of the Lexicon is systematically continued by CGL (Vol. 23, 2025), serving as a global scientific resource.",
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
          lead: "Μια αδιάσπαστη ιστορική διαδρομή 3.500 ετών γραπτής παράδοσης.",
          mainText: "Από τη Μυκηναϊκή Γραμμική Β, στην Κλασική Αρχαιότητα, την Ελληνιστική Κοινή, τη Μεσαιωνική και τη Νέα Ελληνική γλώσσα.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΔΙΑΧΡΟΝΙΑ",
          title: "Μια Ζωντανή Γλώσσα",
          subtitle: "3.500 Έτη Παράδοσης",
          lead: "Η ελληνική γλώσσα είναι μία από τις ελάχιστες ζωντανές γλώσσες με συνεχή γραπτή μαρτυρία αιώνων.",
          mainText: "• Γραμμική Β (15ος αι. π.Χ.)\n• Κλασική & Ελληνιστική περίοδος\n• Βυζαντινή & Μεσαιωνική δημώδης\n• Νεοελληνική κοινή γλώσσα",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "THEMATIC FIELDS",
          title: "History",
          subtitle: "Of the Greek Language",
          lead: "An uninterrupted historical path of 3,500 years of written tradition.",
          mainText: "From Mycenaean Linear B, to Classical Antiquity, Hellenistic Koine, Medieval Vulgar, and Modern Greek.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "DIACHRONY",
          title: "A Living Language",
          subtitle: "3,500 Years of Tradition",
          lead: "Greek is one of the few living languages with a continuous written record spanning millennia.",
          mainText: "• Linear B (15th century BC)\n• Classical & Hellenistic period\n• Byzantine & Medieval vernacular\n• Modern Greek standard language",
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
          lead: "Αναζητώντας τις ρίζες, την καταγωγή και την εξέλιξη των ελληνικών λέξεων.",
          mainText: "Κάθε λέξη κρύβει μέσα της έναν μύθο, μια ιστορική διαδρομή και μια φιλοσοφική προσέγγιση του κόσμου.",
          footnote: "Κέντρο Ελληνικής Γλώσσας"
        },
        back: {
          category: "ΟΙΚΟΥΜΕΝΙΚΟΤΗΤΑ",
          title: "Ρίζες & Δάνεια",
          subtitle: "Διεθνείς Όροι",
          lead: "Η τεράστια επίδραση της ελληνικής γλώσσας στο παγκόσμιο λεξιλόγιο της επιστήμης και του πολιτισμού.",
          mainText: "• Ανάλυση ριζών και παραγωγής\n• Διεθνείς επιστημονικοί όροι\n• Ετυμολογικά λεξικά στην Πύλη",
          footnote: "www.greek-language.gr"
        }
      },
      en: {
        front: {
          category: "THEMATIC FIELDS",
          title: "Etymology",
          subtitle: "History of Words",
          lead: "Exploring the roots, origin, and evolution of Greek words.",
          mainText: "Every single word hides a myth, a historical journey, and a philosophical approach to the universe.",
          footnote: "Center for the Greek Language"
        },
        back: {
          category: "UNIVERSALITY",
          title: "Roots & Loanwords",
          subtitle: "International Terms",
          lead: "The immense influence of the Greek language on the global vocabulary of science, medicine, and culture.",
          mainText: "• Root analysis and word formation\n• International scientific terminology\n• Etymological dictionaries on the Portal",
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
  bilingualBookmark: false,
  geminiKey: '',
  videoScripts: {},       // Stores user-edited video script text
  authenticated: false,
  contentData: JSON.parse(JSON.stringify(templatesContent))
};

// DOM Element Selectors
const docTypeSelect = document.getElementById('docTypeSelect');
const brochureTemplateSelect = document.getElementById('brochureTemplateSelect');
const bookmarkThemeSelect = document.getElementById('bookmarkThemeSelect');
const bookmarkThemeSelectGroup = document.getElementById('bookmarkThemeSelectGroup');
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

  brochureTemplateSelect.addEventListener('change', (e) => {
    state.template = e.target.value;
    render();
  });

  bookmarkThemeSelect.addEventListener('change', (e) => {
    state.bookmarkTheme = e.target.value;
    render();
  });

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

// Helper to retrieve currently active dataset
function getActiveData() {
  if (state.docType === 'bookmark') {
    return state.contentData.bookmark[state.bookmarkTheme][state.language];
  }
  return state.contentData[state.docType === 'booklet' ? 'booklet' : state.template][state.language];
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
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
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
  const templateSelectGroup = document.getElementById('templateSelectGroup');
  const layoutSection = document.getElementById('layoutSection');
  const bookmarkThemeSelectGroup = document.getElementById('bookmarkThemeSelectGroup');
  const bilingualBookmarkToggleGroup = document.getElementById('bilingualBookmarkToggleGroup');

  if (state.docType === 'bookmark') {
    templateSelectGroup.style.display = 'none';
    layoutSection.style.display = 'none';
    bookmarkThemeSelectGroup.style.display = 'block';
    bilingualBookmarkToggleGroup.style.display = 'block';
  } else if (state.docType === 'booklet') {
    templateSelectGroup.style.display = 'none';
    layoutSection.style.display = 'none';
    bookmarkThemeSelectGroup.style.display = 'none';
    bilingualBookmarkToggleGroup.style.display = 'none';
  } else {
    templateSelectGroup.style.display = 'block';
    layoutSection.style.display = 'block';
    bookmarkThemeSelectGroup.style.display = 'none';
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
    const activeContent = state.contentData.booklet[state.language];
    
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
    const activeContent = state.contentData[state.template][state.language];
    
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
  if (side === 'front') {
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
