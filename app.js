/**
 * Κέντρο Ελληνικής Γλώσσας - Brochure Builder Application Logic
 * Modern advertising brochure designer for TIF 2026.
 */

const templatesContent = {
  general: {
    el: {
      cover: {
        title: "Κέντρο Ελληνικής Γλώσσας",
        subtitle: "Γλώσσα, Πολιτισμός & Εκπαίδευση",
        badge: "Επίσημος Ερευνητικός & Εκπαιδευτικός Φορέας",
        eventTitle: "91η Διεθνής Έκθεση Θεσσαλονίκης",
        eventDate: "Σεπτέμβριος 2026 • Θεσσαλονίκη"
      },
      backCover: {
        title: "Επικοινωνία & Πληροφορίες",
        lead: "Βρείτε μας στη Θεσσαλονίκη και ψηφιακά σε όλο τον κόσμο.",
        address: "📍 Καραμαούνα 1, Πλατεία Σκρα, 55134 Καλαμαριά, Θεσσαλονίκη",
        phone: "📞 Τηλέφωνο: +30 2313 331 500",
        fax: "📠 Fax: +30 2313 331 502",
        email: "✉️ Email: greeklanguage@ypepth.gr",
        website: "🌐 www.greeklanguage.gr",
        socialFb: "Facebook: @greeklanguage.gr",
        socialTw: "X (Twitter): @GreekLanguage"
      },
      intro: {
        category: "Η Ταυτότητά μας",
        title: "Το Κέντρο (ΚΕΓ)",
        lead: "Το Κέντρο Ελληνικής Γλώσσας (ΚΕΓ) ιδρύθηκε το 1994 στη Θεσσαλονίκη ως ερευνητικό και εκπαιδευτικό ίδρυμα με διεθνή εμβέλεια, εποπτευόμενο από το Υπουργείο Παιδείας.",
        paras: [
          "Λειτουργεί ως Νομικό Πρόσωπο Ιδιωτικού Δικαίου (Ν.Π.Ι.Δ.) και αποτελεί το επιτελικό, γνωμοδοτικό και συντονιστικό όργανο της ελληνικής πολιτείας για θέματα γλωσσικής εκπαίδευσης και γλωσσικής πολιτικής. Με έδρα τη Θεσσαλονίκη, το ΚΕΓ συντονίζει τις προσπάθειες για τη στήριξη, διάδοση και διδασκαλία της ελληνικής γλώσσας εντός και εκτός συνόρων.",
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
          "Στη ΔΕΘ 2026, παρουσιάζουμε το πλούσιο εκδοτικό μας έργο, συμπεριλαμβανομένου του πρόσφατου 23ου τόμου του Λεξικού Κριαρά (Μάρτιος 2025), καθώς και τις νέες εφαρμογές μας για κινητά τηλέφωνα που διευκολύνουν την πρόσβαση στα λεξικά και το εκπαιδευτικό υλικό."
        ]
      }
    },
    en: {
      cover: {
        title: "Center for the Greek Language",
        subtitle: "Language, Culture & Education",
        badge: "Official State Research & Educational Institution",
        eventTitle: "91st Thessaloniki International Fair",
        eventDate: "September 2026 • Thessaloniki, Greece"
      },
      backCover: {
        title: "Contact & Info",
        lead: "Find us in Thessaloniki and digitally across the globe.",
        address: "📍 1 Karamaouna Str., Skra Square, 55134 Kalamaria, Thessaloniki",
        phone: "📞 Tel: +30 2313 331 500",
        fax: "📠 Fax: +30 2313 331 502",
        email: "✉️ Email: greeklanguage@ypepth.gr",
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
          "At the TIF 2026, we present our new publications, including the latest 23rd volume of the Kriaras Dictionary (March 2025), and our mobile apps that bring dictionaries and learning tools directly to your screen."
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
        eventTitle: "91η Διεθνής Έκθεση Θεσσαλονίκης",
        eventDate: "Σεπτέμβριος 2026 • Θεσσαλονίκη"
      },
      backCover: {
        title: "Τμήμα Πιστοποίησης",
        lead: "Πληροφορίες για εξεταστικά κέντρα, εγγραφές και ημερομηνίες εξετάσεων.",
        address: "📍 Καραμαούνα 1, Πλατεία Σκρα, 55134 Καλαμαριά, Θεσσαλονίκη",
        phone: "📞 Τηλέφωνο: +30 2313 331 540",
        fax: "📠 Fax: +30 2313 331 502",
        email: "✉️ Email: ellinomatheia@greeklanguage.gr",
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
        lead: "Το ΚΕΓ παρέσει πλούσιο υλικό για την προετοιμασία των υποψηφίων και των εκπαιδευτικών.",
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
        eventTitle: "91st Thessaloniki International Fair",
        eventDate: "September 2026 • Thessaloniki, Greece"
      },
      backCover: {
        title: "Certification Dept.",
        lead: "Information on examination centers, registration, and exam dates.",
        address: "📍 1 Karamaouna Str., Skra Square, 55134 Kalamaria, Thessaloniki",
        phone: "📞 Tel: +30 2313 331 540",
        fax: "📠 Fax: +30 2313 331 502",
        email: "✉️ Email: ellinomatheia@greeklanguage.gr",
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
        eventTitle: "91η Διεθνής Έκθεση Θεσσαλονίκης",
        eventDate: "Σεπτέμβριος 2026 • Θεσσαλονίκη"
      },
      backCover: {
        title: "Δίκτυο Φρυκτωρίες",
        lead: "Επικοινωνήστε μαζί μας για ακαδημαϊκή δικτύωση και συνεργασίες.",
        address: "📍 Καραμαούνα 1, Πλατεία Σκρα, 55134 Καλαμαριά, Θεσσαλονίκη",
        phone: "📞 Τηλέφωνο: +30 2313 331 530",
        fax: "📠 Fax: +30 2313 331 502",
        email: "✉️ Email: fryktories@greeklanguage.gr",
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
        eventTitle: "91st Thessaloniki International Fair",
        eventDate: "September 2026 • Thessaloniki, Greece"
      },
      backCover: {
        title: "Fryktories Network",
        lead: "Contact us for academic networking and educational partnerships.",
        address: "📍 1 Karamaouna Str., Skra Square, 55134 Kalamaria, Thessaloniki",
        phone: "📞 Tel: +30 2313 331 530",
        fax: "📠 Fax: +30 2313 331 502",
        email: "✉️ Email: fryktories@greeklanguage.gr",
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
  // Deep copy of content to allow real-time custom edits
  contentData: JSON.parse(JSON.stringify(templatesContent))
};

// DOM Element Selectors
const brochureTemplateSelect = document.getElementById('brochureTemplateSelect');
const btnLayoutSingle = document.getElementById('btnLayoutSingle');
const btnLayoutBifold = document.getElementById('btnLayoutBifold');
const btnLayoutTrifold = document.getElementById('btnLayoutTrifold');
const motifSelect = document.getElementById('motifSelect');
const toggleEditMode = document.getElementById('toggleEditMode');
const toggleFoldGuides = document.getElementById('toggleFoldGuides');
const togglePrintGuides = document.getElementById('togglePrintGuides');
const toggleLanguage = document.getElementById('toggleLanguage');
const btnPrint = document.getElementById('btnPrint');
const btnReset = document.getElementById('btnReset');
const outsideCanvas = document.getElementById('outsideCanvas');
const insideCanvas = document.getElementById('insideCanvas');
const colorDots = document.querySelectorAll('.color-dot');
const layoutButtons = document.querySelectorAll('.layout-btn');

// Initialize Application
function init() {
  // Add Theme & Guide Event Listeners
  setupThemeListeners();
  setupLayoutListeners();
  setupOptionListeners();
  setupButtonListeners();
  
  // Render Initial View
  render();
}

// Setup Event Listeners for Themes
function setupThemeListeners() {
  colorDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      // Remove active from all dots
      colorDots.forEach(d => d.classList.remove('active'));
      
      const selectedTheme = e.target.getAttribute('data-theme');
      state.theme = selectedTheme;
      e.target.classList.add('active');
      
      // Update body classes
      document.body.className = '';
      document.body.classList.add(`theme-${state.theme}`);
      
      // Apply UI states again
      applyUIClassesToBody();
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
  brochureTemplateSelect.addEventListener('change', (e) => {
    state.template = e.target.value;
    
    // Suggest optimal layout based on CGL recommendation, but let user override
    if (state.template === 'general') {
      state.layout = 'trifold';
      setActiveLayoutButton('btnLayoutTrifold');
    } else if (state.template === 'certification') {
      state.layout = 'bifold';
      setActiveLayoutButton('btnLayoutBifold');
    } else if (state.template === 'fryktories') {
      state.layout = 'single';
      setActiveLayoutButton('btnLayoutSingle');
    }
    
    render();
  });

  motifSelect.addEventListener('change', (e) => {
    state.motif = e.target.value;
    updateMotifClasses();
  });

  toggleEditMode.addEventListener('change', (e) => {
    state.editMode = e.target.checked;
    applyUIClassesToBody();
    toggleContentEditable();
  });

  toggleFoldGuides.addEventListener('change', (e) => {
    state.foldGuides = e.target.checked;
    applyUIClassesToBody();
  });

  togglePrintGuides.addEventListener('change', (e) => {
    state.printGuides = e.target.checked;
    applyUIClassesToBody();
  });

  toggleLanguage.addEventListener('change', (e) => {
    state.language = e.target.checked ? 'en' : 'el';
    render();
  });
}

function setActiveLayoutButton(buttonId) {
  layoutButtons.forEach(b => b.classList.remove('active'));
  document.getElementById(buttonId).classList.add('active');
}

// Apply visual toggle classes to document body
function applyUIClassesToBody() {
  const body = document.body;
  
  if (state.editMode) body.classList.add('edit-mode-active');
  else body.classList.remove('edit-mode-active');
  
  if (state.foldGuides) body.classList.add('show-fold-guides');
  else body.classList.remove('show-fold-guides');
  
  if (state.printGuides) body.classList.add('show-print-guides');
  else body.classList.remove('show-print-guides');
}

// Update motif classes on spread canvas containers
function updateMotifClasses() {
  const canvasses = [outsideCanvas, insideCanvas];
  canvasses.forEach(canvas => {
    canvas.className = 'spread-canvas'; // Reset classes
    canvas.classList.add(`layout-${state.layout}`);
    canvas.classList.add(`motif-${state.motif}`);
  });
}

// Setup Action Button Event Listeners
function setupButtonListeners() {
  btnPrint.addEventListener('click', () => {
    // Before printing, set print-appropriate classes temporarily or rely on print CSS
    window.print();
  });

  btnReset.addEventListener('click', () => {
    if (confirm(state.language === 'el' ? 
      'Είστε σίγουροι ότι θέλετε να επαναφέρετε τα κείμενα του επιλεγμένου φυλλαδίου στις αρχικές τους τιμές;' : 
      'Are you sure you want to reset the selected brochure texts to their default values?')) {
      // Re-initialize default data for the selected template & language
      state.contentData[state.template] = JSON.parse(JSON.stringify(templatesContent[state.template]));
      render();
    }
  });
}

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
    // Listen for blur event to save text changes
    el.addEventListener('blur', (e) => {
      const section = e.target.getAttribute('data-sec');
      const field = e.target.getAttribute('data-field');
      const index = e.target.getAttribute('data-idx');
      
      const newText = e.target.innerText.trim();
      
      const activeData = state.contentData[state.template][state.language];
      
      if (index !== null) {
        // It's a list item or array of paragraphs
        activeData[section][field][parseInt(index)] = newText;
      } else {
        // It's a single text field
        activeData[section][field] = newText;
      }
    });
  });
}

// Render dynamic content according to current layout, template and language
function render() {
  // 1. Update Motif and Layout Classes
  updateMotifClasses();
  applyUIClassesToBody();

  // 2. Clear canvases
  outsideCanvas.innerHTML = '';
  insideCanvas.innerHTML = '';

  const activeContent = state.contentData[state.template][state.language];

  // 3. Render Spreads based on layout
  if (state.layout === 'trifold') {
    // TRI-FOLD: 3 Panels Outer, 3 Panels Inner
    // Outside Spread: Page 4 (Flap), Page 5 (Back Cover), Page 6 (Front Cover)
    outsideCanvas.innerHTML = `
      ${createFoldGuide(1)}
      ${createFoldGuide(2)}
      ${createPrintGuides()}
      ${renderSectionPanel('section3', activeContent.section3, '4')}
      ${renderBackCoverPanel(activeContent.backCover, '5')}
      ${renderCoverPanel(activeContent.cover, '6')}
    `;
    
    // Inside Spread: Page 1 (Intro), Page 2 (Section 1), Page 3 (Section 2)
    insideCanvas.innerHTML = `
      ${createFoldGuide(1)}
      ${createFoldGuide(2)}
      ${createPrintGuides()}
      ${renderSectionPanel('intro', activeContent.intro, '1')}
      ${renderSectionPanel('section1', activeContent.section1, '2')}
      ${renderSectionPanel('section2', activeContent.section2, '3')}
    `;
    
  } else if (state.layout === 'bifold') {
    // BI-FOLD: 2 Panels Outer, 2 Panels Inner
    // Outside Spread: Page 4 (Back Cover), Page 1 (Front Cover)
    outsideCanvas.innerHTML = `
      ${createFoldGuide(1)}
      ${createPrintGuides()}
      ${renderBackCoverPanel(activeContent.backCover, '4')}
      ${renderCoverPanel(activeContent.cover, '1')}
    `;
    
    // Inside Spread: Page 2 (Intro), Page 3 (Section 1 / Section 2 combined or single)
    // We combine Intro content and section 1 content
    insideCanvas.innerHTML = `
      ${createFoldGuide(1)}
      ${createPrintGuides()}
      ${renderSectionPanel('intro', activeContent.intro, '2')}
      ${renderSectionPanel('section1', activeContent.section1, '3')}
    `;
    
  } else {
    // SINGLE SHEET: 1 Panel Front, 1 Panel Back
    // Outside Spread: Front Cover
    outsideCanvas.innerHTML = `
      ${createPrintGuides()}
      ${renderCoverPanel(activeContent.cover, '1')}
    `;
    
    // Inside Spread: Back Details (Intro / Contact Info)
    // We render the intro as back page of single sheet
    insideCanvas.innerHTML = `
      ${createPrintGuides()}
      ${renderSectionPanel('intro', activeContent.intro, '2')}
    `;
  }

  // 4. Set correct print stylesheet rules for page size dynamically
  updatePrintPageSize();

  // 5. Connect inline text editor triggers
  toggleContentEditable();
  bindTextEdits();
}

// Generate the Fold line element
function createFoldGuide(number) {
  return `<div class="fold-guide fold-guide-${number}"></div>`;
}

// Generate the red Bleed and safety margin guides
function createPrintGuides() {
  return `<div class="print-guides"></div>`;
}

// Render dynamic print page sizes dynamically via inline style tag for printing
function updatePrintPageSize() {
  let styleTag = document.getElementById('print-page-style');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'print-page-style';
    document.head.appendChild(styleTag);
  }

  // Set correct B5 landscape spreads in media query
  if (state.layout === 'trifold') {
    styleTag.innerHTML = `
      @media print {
        @page {
          size: 528mm 250mm;
          margin: 0;
        }
      }
    `;
  } else if (state.layout === 'bifold') {
    styleTag.innerHTML = `
      @media print {
        @page {
          size: 352mm 250mm;
          margin: 0;
        }
      }
    `;
  } else {
    styleTag.innerHTML = `
      @media print {
        @page {
          size: 176mm 250mm;
          margin: 0;
        }
      }
    `;
  }
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
      
      <div class="cover-badge editable-field" data-sec="cover" data-field="badge">${coverData.badge}</div>
      
      <div class="cover-main">
        <div class="cover-emblem"></div>
        <h1 class="cover-title serif-title editable-field" data-sec="cover" data-field="title">${coverData.title}</h1>
        <p class="cover-subtitle greek-style-heading editable-field" data-sec="cover" data-field="subtitle">${coverData.subtitle}</p>
      </div>
      
      <div class="cover-event">
        <div class="cover-event-title editable-field" data-sec="cover" data-field="eventTitle">${coverData.eventTitle}</div>
        <div class="cover-event-date editable-field" data-sec="cover" data-field="eventDate">${coverData.eventDate}</div>
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
        <span class="panel-category editable-field" data-sec="backCover" data-field="title">${backData.title}</span>
        <p class="panel-lead editable-field" data-sec="backCover" data-field="lead">${backData.lead}</p>
      </div>
      
      <div class="contact-info">
        <p class="contact-item editable-field" data-sec="backCover" data-field="address">${backData.address}</p>
        <p class="contact-item editable-field" data-sec="backCover" data-field="phone">${backData.phone}</p>
        <p class="contact-item editable-field" data-sec="backCover" data-field="fax">${backData.fax}</p>
        <p class="contact-item editable-field" data-sec="backCover" data-field="email">${backData.email}</p>
        <p class="contact-item editable-field" data-sec="backCover" data-field="website">${backData.website}</p>
      </div>
      
      <div class="back-footer">
        <div class="social-links">
          <span class="editable-field" data-sec="backCover" data-field="socialFb">${backData.socialFb}</span>
          <span>•</span>
          <span class="editable-field" data-sec="backCover" data-field="socialTw">${backData.socialTw}</span>
        </div>
      </div>
    </div>
  `;
}

function renderSectionPanel(sectionKey, sectionData, pageNum) {
  let bodyContent = '';
  
  if (sectionData.paras) {
    bodyContent = sectionData.paras.map((p, idx) => `
      <p class="panel-para editable-field" data-sec="${sectionKey}" data-field="paras" data-idx="${idx}">${p}</p>
    `).join('');
  } else if (sectionData.list) {
    bodyContent = `
      <ul class="panel-list">
        ${sectionData.list.map((item, idx) => `
          <li class="editable-field" data-sec="${sectionKey}" data-field="list" data-idx="${idx}">${item}</li>
        `).join('')}
      </ul>
    `;
  }

  let imageContent = '';
  if (sectionData.image) {
    imageContent = `<img src="${sectionData.image}" alt="${sectionData.title}" class="panel-image">`;
  }

  return `
    <div class="brochure-panel" data-page="${pageNum}">
      <div class="panel-border-box"></div>
      <div class="ornament-corner ornament-tl"></div>
      <div class="ornament-corner ornament-tr"></div>
      <div class="ornament-corner ornament-bl"></div>
      <div class="ornament-corner ornament-br"></div>
      
      <div class="panel-header">
        <span class="panel-category editable-field" data-sec="${sectionKey}" data-field="category">${sectionData.category}</span>
        <h2 class="panel-title serif-title editable-field" data-sec="${sectionKey}" data-field="title">${sectionData.title}</h2>
      </div>
      
      <div class="panel-body">
        <div class="panel-lead editable-field" data-sec="${sectionKey}" data-field="lead">${sectionData.lead}</div>
        ${bodyContent}
        ${imageContent}
      </div>
    </div>
  `;
}

// Start app on load
window.addEventListener('DOMContentLoaded', init);
