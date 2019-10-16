
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([{
        "name": "Joaquin",
        "address": "22 Westend Point",
        "mobile": "101-216-6856",
        "work": "Compensation Analyst",
        "home": "822-158-4074",
        "email": "jsnaith0@yolasite.com",
        "github": "jrodder0"
      }, {
        "name": "Farlay",
        "address": "4 Rusk Alley",
        "mobile": "466-881-5680",
        "work": "Developer IV",
        "home": "805-703-6788",
        "email": "ffiddian1@pbs.org",
        "github": "fcovington1"
      }, {
        "name": "Laural",
        "address": "29 Butterfield Park",
        "mobile": "927-556-7288",
        "work": "Civil Engineer",
        "home": "688-500-4420",
        "email": "ldorkins2@prnewswire.com",
        "github": "layerst2"
      }, {
        "name": "Coralyn",
        "address": "21 Starling Circle",
        "mobile": "130-951-6686",
        "work": "Administrative Assistant III",
        "home": "137-177-4363",
        "email": "cpinnere3@123-reg.co.uk",
        "github": "cabercromby3"
      }, {
        "name": "Hymie",
        "address": "0 Utah Drive",
        "mobile": "892-728-3341",
        "work": "Senior Cost Accountant",
        "home": "405-675-0169",
        "email": "hnussgen4@apache.org",
        "github": "hbasire4"
      }, {
        "name": "Jonathan",
        "address": "8 New Castle Trail",
        "mobile": "559-264-4061",
        "work": "Account Executive",
        "home": "538-933-4837",
        "email": "jedmeades5@springer.com",
        "github": "jcarlan5"
      }, {
        "name": "Rheba",
        "address": "76468 Brown Crossing",
        "mobile": "910-627-0183",
        "work": "Nurse Practicioner",
        "home": "509-868-2177",
        "email": "rstollen6@dell.com",
        "github": "rackrill6"
      }, {
        "name": "Cammie",
        "address": "17035 Lillian Terrace",
        "mobile": "156-883-7691",
        "work": "Software Test Engineer IV",
        "home": "569-864-4149",
        "email": "ctollet7@opera.com",
        "github": "cdavion7"
      }, {
        "name": "Katharine",
        "address": "4 Hazelcrest Court",
        "mobile": "427-912-9627",
        "work": "Occupational Therapist",
        "home": "678-255-3438",
        "email": "kollerhad8@naver.com",
        "github": "kdonaghy8"
      }, {
        "name": "Rycca",
        "address": "40 Gerald Terrace",
        "mobile": "133-350-6427",
        "work": "Structural Analysis Engineer",
        "home": "293-650-5706",
        "email": "rshaxby9@engadget.com",
        "github": "rkemmish9"
      }, {
        "name": "Bil",
        "address": "3957 Goodland Lane",
        "mobile": "233-473-4233",
        "work": "Geological Engineer",
        "home": "460-307-6213",
        "email": "bsimpkina@networksolutions.com",
        "github": "bhainea"
      }, {
        "name": "Sebastian",
        "address": "00029 Bunker Hill Point",
        "mobile": "208-692-9785",
        "work": "Account Representative I",
        "home": "801-490-5418",
        "email": "spoltoneb@aboutads.info",
        "github": "sgaleyb"
      }, {
        "name": "Anthiathia",
        "address": "6515 Main Parkway",
        "mobile": "634-353-4161",
        "work": "Legal Assistant",
        "home": "309-514-6984",
        "email": "aasifc@wunderground.com",
        "github": "abroschc"
      }, {
        "name": "Jolyn",
        "address": "2 5th Terrace",
        "mobile": "130-482-8545",
        "work": "Accounting Assistant II",
        "home": "634-872-1861",
        "email": "jhallagand@topsy.com",
        "github": "jcrichd"
      }, {
        "name": "Elsbeth",
        "address": "48643 Coleman Terrace",
        "mobile": "449-434-8791",
        "work": "Pharmacist",
        "home": "862-497-4648",
        "email": "egonine@dyndns.org",
        "github": "ekleinermane"
      }, {
        "name": "Buddy",
        "address": "4 Sauthoff Parkway",
        "mobile": "371-957-1634",
        "work": "VP Sales",
        "home": "412-902-0642",
        "email": "bgwiltf@photobucket.com",
        "github": "bbeastonf"
      }, {
        "name": "Ringo",
        "address": "43 Westridge Alley",
        "mobile": "925-992-2869",
        "work": "Software Consultant",
        "home": "625-315-2528",
        "email": "rohannayg@newyorker.com",
        "github": "rthornebarrowg"
      }, {
        "name": "Quinlan",
        "address": "0985 Oneill Drive",
        "mobile": "506-212-3714",
        "work": "Graphic Designer",
        "home": "280-418-1390",
        "email": "qchaplynh@last.fm",
        "github": "qgreetlandh"
      }, {
        "name": "Carce",
        "address": "8415 Hudson Alley",
        "mobile": "945-194-3376",
        "work": "Clinical Specialist",
        "home": "672-575-1760",
        "email": "cmackilpatricki@booking.com",
        "github": "cwalchi"
      }, {
        "name": "Maddy",
        "address": "98990 Jenifer Court",
        "mobile": "921-754-6430",
        "work": "Senior Cost Accountant",
        "home": "984-594-1512",
        "email": "mwoloschinj@nhs.uk",
        "github": "mmullyj"
      }, {
        "name": "Eugene",
        "address": "5 Clemons Trail",
        "mobile": "981-404-2280",
        "work": "Administrative Officer",
        "home": "917-438-0754",
        "email": "ecossonsk@ftc.gov",
        "github": "edenormanvillek"
      }, {
        "name": "Legra",
        "address": "70896 Center Lane",
        "mobile": "536-120-8845",
        "work": "Research Associate",
        "home": "336-217-7640",
        "email": "lhubbartl@slate.com",
        "github": "llaurencotl"
      }, {
        "name": "Gilbert",
        "address": "6107 Commercial Circle",
        "mobile": "640-239-7926",
        "work": "Accounting Assistant II",
        "home": "418-428-8437",
        "email": "gpicoppm@netscape.com",
        "github": "grobelinm"
      }, {
        "name": "Zorine",
        "address": "773 Dorton Hill",
        "mobile": "236-148-3501",
        "work": "Financial Advisor",
        "home": "717-731-5364",
        "email": "zsherringhamn@wikimedia.org",
        "github": "zheismann"
      }, {
        "name": "Charyl",
        "address": "50 Helena Center",
        "mobile": "495-369-3317",
        "work": "Help Desk Technician",
        "home": "339-785-8772",
        "email": "cvinkero@japanpost.jp",
        "github": "cshardo"
      }, {
        "name": "Ange",
        "address": "78 Fuller Pass",
        "mobile": "173-628-1927",
        "work": "Senior Cost Accountant",
        "home": "642-721-8240",
        "email": "ayakovp@jugem.jp",
        "github": "adecarolip"
      }, {
        "name": "Wallis",
        "address": "02 Bonner Junction",
        "mobile": "985-803-7371",
        "work": "Software Test Engineer IV",
        "home": "771-490-3154",
        "email": "wvaenq@boston.com",
        "github": "wgarrodq"
      }, {
        "name": "Reinaldos",
        "address": "420 Crownhardt Street",
        "mobile": "383-613-9634",
        "work": "Executive Secretary",
        "home": "846-724-5813",
        "email": "rwaleworker@histats.com",
        "github": "rleviner"
      }, {
        "name": "Nike",
        "address": "07 Carey Point",
        "mobile": "370-659-5086",
        "work": "Junior Executive",
        "home": "421-583-5519",
        "email": "nbells@engadget.com",
        "github": "nmacmichaels"
      }, {
        "name": "Mona",
        "address": "299 Londonderry Point",
        "mobile": "516-307-5726",
        "work": "Research Assistant I",
        "home": "392-651-0035",
        "email": "mchafft@hc360.com",
        "github": "mcopcotet"
      }, {
        "name": "Fannie",
        "address": "9 Longview Avenue",
        "mobile": "604-219-1228",
        "work": "Desktop Support Technician",
        "home": "936-826-6838",
        "email": "fmccruddenu@360.cn",
        "github": "fdigginsonu"
      }, {
        "name": "Roderick",
        "address": "3984 Fair Oaks Alley",
        "mobile": "105-458-0758",
        "work": "Software Test Engineer III",
        "home": "809-377-5338",
        "email": "rlavrinovv@edublogs.org",
        "github": "rbehnev"
      }, {
        "name": "Nola",
        "address": "30 Burrows Park",
        "mobile": "926-479-1097",
        "work": "Environmental Tech",
        "home": "678-220-4834",
        "email": "nsidnellw@apache.org",
        "github": "nstartinw"
      }, {
        "name": "Robinette",
        "address": "4822 South Parkway",
        "mobile": "304-106-2772",
        "work": "Sales Representative",
        "home": "462-510-0197",
        "email": "rhazeldeanx@geocities.jp",
        "github": "rlocketx"
      }, {
        "name": "Tallulah",
        "address": "72 Vernon Park",
        "mobile": "916-177-9308",
        "work": "Account Executive",
        "home": "550-614-2684",
        "email": "tchuey@technorati.com",
        "github": "tlindenblatty"
      }, {
        "name": "Maggi",
        "address": "78827 Shoshone Pass",
        "mobile": "172-886-1521",
        "work": "Senior Financial Analyst",
        "home": "399-647-4533",
        "email": "mkleszinskiz@ucoz.com",
        "github": "mjohnstonz"
      }, {
        "name": "Elmira",
        "address": "3 Bobwhite Place",
        "mobile": "149-584-8189",
        "work": "Automation Specialist I",
        "home": "501-830-2452",
        "email": "eslipper10@google.pl",
        "github": "esteggals10"
      }, {
        "name": "Lizzie",
        "address": "42282 Roxbury Crossing",
        "mobile": "686-147-7602",
        "work": "VP Quality Control",
        "home": "432-140-6473",
        "email": "lsawyer11@gravatar.com",
        "github": "lwilbraham11"
      }, {
        "name": "Casey",
        "address": "68 4th Alley",
        "mobile": "798-601-6443",
        "work": "Software Engineer I",
        "home": "705-998-2104",
        "email": "cmaccoughen12@cocolog-nifty.com",
        "github": "cgilliland12"
      }, {
        "name": "Kareem",
        "address": "4 Darwin Lane",
        "mobile": "324-802-0485",
        "work": "Programmer I",
        "home": "260-444-8222",
        "email": "kpim13@tiny.cc",
        "github": "ksowerbutts13"
      }, {
        "name": "Lanie",
        "address": "02 Gulseth Park",
        "mobile": "383-967-8587",
        "work": "Executive Secretary",
        "home": "231-191-6631",
        "email": "lsaltmarshe14@sogou.com",
        "github": "lchiese14"
      }, {
        "name": "Isidro",
        "address": "98027 Melody Hill",
        "mobile": "832-488-7123",
        "work": "Computer Systems Analyst I",
        "home": "805-448-5604",
        "email": "iarson15@icq.com",
        "github": "irudman15"
      }, {
        "name": "Jana",
        "address": "024 Glacier Hill Crossing",
        "mobile": "326-245-3836",
        "work": "Paralegal",
        "home": "244-365-4056",
        "email": "jlithcow16@dell.com",
        "github": "jdanielian16"
      }, {
        "name": "Korrie",
        "address": "8 Eggendart Point",
        "mobile": "385-572-7679",
        "work": "Financial Advisor",
        "home": "578-320-2455",
        "email": "kwardrop17@cargocollective.com",
        "github": "kjindra17"
      }, {
        "name": "Joyan",
        "address": "0 Thackeray Hill",
        "mobile": "944-413-6098",
        "work": "Information Systems Manager",
        "home": "488-218-5839",
        "email": "jdalgarnocht18@gov.uk",
        "github": "jstiegar18"
      }, {
        "name": "Elicia",
        "address": "2 Sugar Center",
        "mobile": "408-252-1503",
        "work": "VP Product Management",
        "home": "733-958-1535",
        "email": "escini19@sciencedaily.com",
        "github": "eadan19"
      }, {
        "name": "Kent",
        "address": "0049 Larry Lane",
        "mobile": "289-586-3739",
        "work": "Junior Executive",
        "home": "375-276-2705",
        "email": "ksimka1a@domainmarket.com",
        "github": "kmelby1a"
      }, {
        "name": "Val",
        "address": "6 Kingsford Drive",
        "mobile": "759-199-7331",
        "work": "Desktop Support Technician",
        "home": "491-194-3701",
        "email": "vpeakman1b@myspace.com",
        "github": "vmedhurst1b"
      }, {
        "name": "Millicent",
        "address": "2 Colorado Park",
        "mobile": "459-370-3930",
        "work": "Financial Analyst",
        "home": "225-216-7976",
        "email": "mvaudrey1c@imgur.com",
        "github": "mluckin1c"
      }, {
        "name": "Cary",
        "address": "9 Hollow Ridge Pass",
        "mobile": "590-189-4332",
        "work": "Staff Accountant I",
        "home": "535-778-0507",
        "email": "csargant1d@si.edu",
        "github": "cespino1d"
      }, {
        "name": "Broderic",
        "address": "0562 Morrow Point",
        "mobile": "868-849-9407",
        "work": "Nurse Practicioner",
        "home": "182-137-4606",
        "email": "bkarpushkin1e@artisteer.com",
        "github": "bhallowell1e"
      }, {
        "name": "Nicolea",
        "address": "9 Esker Terrace",
        "mobile": "162-600-5008",
        "work": "Automation Specialist IV",
        "home": "700-572-2639",
        "email": "nkibble1f@networkadvertising.org",
        "github": "norht1f"
      }, {
        "name": "Nancey",
        "address": "22752 Weeping Birch Road",
        "mobile": "602-112-6180",
        "work": "Budget/Accounting Analyst III",
        "home": "675-909-0663",
        "email": "nkeyden1g@wired.com",
        "github": "nbrydson1g"
      }, {
        "name": "Nessi",
        "address": "13 Talmadge Parkway",
        "mobile": "435-109-7510",
        "work": "Project Manager",
        "home": "586-156-1578",
        "email": "nkerbler1h@aol.com",
        "github": "nleather1h"
      }, {
        "name": "Ernesto",
        "address": "0248 Dorton Alley",
        "mobile": "287-309-7328",
        "work": "Senior Sales Associate",
        "home": "506-904-2297",
        "email": "esillitoe1i@ucla.edu",
        "github": "emaud1i"
      }, {
        "name": "Emiline",
        "address": "6358 Summit Terrace",
        "mobile": "120-190-4310",
        "work": "Quality Control Specialist",
        "home": "239-622-6607",
        "email": "eruggles1j@infoseek.co.jp",
        "github": "ebrane1j"
      }, {
        "name": "Blane",
        "address": "8457 Sheridan Center",
        "mobile": "522-475-9612",
        "work": "Recruiter",
        "home": "500-166-8368",
        "email": "bmeace1k@soup.io",
        "github": "bfletcher1k"
      }, {
        "name": "Ericka",
        "address": "9 Katie Park",
        "mobile": "592-710-9398",
        "work": "Legal Assistant",
        "home": "576-939-8370",
        "email": "eford1l@abc.net.au",
        "github": "edalton1l"
      }, {
        "name": "Catherina",
        "address": "8 Hollow Ridge Point",
        "mobile": "623-816-2071",
        "work": "Biostatistician III",
        "home": "886-102-7106",
        "email": "cwoolfoot1m@ifeng.com",
        "github": "cthreadgold1m"
      }, {
        "name": "Milissent",
        "address": "5079 Eliot Drive",
        "mobile": "919-707-1110",
        "work": "Environmental Tech",
        "home": "177-350-1897",
        "email": "mjayme1n@examiner.com",
        "github": "mgaynes1n"
      }, {
        "name": "Cully",
        "address": "5 Washington Alley",
        "mobile": "194-303-5143",
        "work": "Computer Systems Analyst IV",
        "home": "550-182-0523",
        "email": "cmcghie1o@naver.com",
        "github": "cjope1o"
      }, {
        "name": "Bradford",
        "address": "793 Prentice Court",
        "mobile": "907-311-0382",
        "work": "Administrative Assistant I",
        "home": "335-718-6829",
        "email": "bpidgen1p@squidoo.com",
        "github": "bshorland1p"
      }, {
        "name": "Zechariah",
        "address": "11723 Browning Lane",
        "mobile": "697-617-9284",
        "work": "Research Nurse",
        "home": "681-314-9693",
        "email": "zsanthouse1q@printfriendly.com",
        "github": "zbarnard1q"
      }, {
        "name": "Blondell",
        "address": "372 East Hill",
        "mobile": "381-110-4413",
        "work": "Sales Representative",
        "home": "131-515-0571",
        "email": "bowtram1r@ebay.com",
        "github": "bdover1r"
      }, {
        "name": "Francoise",
        "address": "9 Holmberg Plaza",
        "mobile": "378-522-6772",
        "work": "Nurse",
        "home": "514-906-2884",
        "email": "flindbergh1s@ft.com",
        "github": "fstonhouse1s"
      }, {
        "name": "Ortensia",
        "address": "50 International Circle",
        "mobile": "750-357-4416",
        "work": "Quality Control Specialist",
        "home": "239-330-6784",
        "email": "ojanauschek1t@elpais.com",
        "github": "opoyser1t"
      }, {
        "name": "Aggie",
        "address": "37576 Warrior Pass",
        "mobile": "771-384-7792",
        "work": "Human Resources Manager",
        "home": "275-999-4889",
        "email": "apohls1u@pagesperso-orange.fr",
        "github": "acumbes1u"
      }, {
        "name": "Roda",
        "address": "21938 Drewry Parkway",
        "mobile": "903-184-7819",
        "work": "Physical Therapy Assistant",
        "home": "966-581-0955",
        "email": "rlowthorpe1v@unc.edu",
        "github": "rraine1v"
      }, {
        "name": "Ermengarde",
        "address": "5 Sunbrook Drive",
        "mobile": "568-755-0578",
        "work": "Help Desk Technician",
        "home": "165-689-7865",
        "email": "ebearward1w@twitter.com",
        "github": "eclack1w"
      }, {
        "name": "Richardo",
        "address": "08698 Kingsford Hill",
        "mobile": "557-712-2132",
        "work": "Paralegal",
        "home": "165-325-1113",
        "email": "rokenny1x@storify.com",
        "github": "rgelly1x"
      }, {
        "name": "Pen",
        "address": "09 Corscot Crossing",
        "mobile": "501-552-8732",
        "work": "Assistant Professor",
        "home": "977-518-2853",
        "email": "pelden1y@is.gd",
        "github": "porwin1y"
      }, {
        "name": "Mahmoud",
        "address": "39 Barby Lane",
        "mobile": "194-379-7356",
        "work": "Web Designer I",
        "home": "423-720-3309",
        "email": "mdaud1z@youku.com",
        "github": "mrenackowna1z"
      }, {
        "name": "Carina",
        "address": "968 Sunbrook Terrace",
        "mobile": "398-241-6612",
        "work": "Electrical Engineer",
        "home": "899-880-4916",
        "email": "cskerratt20@google.com.hk",
        "github": "cjakubowicz20"
      }, {
        "name": "Charla",
        "address": "8172 Northview Street",
        "mobile": "143-632-7839",
        "work": "Paralegal",
        "home": "570-691-4682",
        "email": "cashment21@so-net.ne.jp",
        "github": "cdillet21"
      }, {
        "name": "Kiel",
        "address": "1577 Sutteridge Crossing",
        "mobile": "508-158-6904",
        "work": "Cost Accountant",
        "home": "872-144-4339",
        "email": "kbrashier22@behance.net",
        "github": "kalenov22"
      }, {
        "name": "Loni",
        "address": "55 Vera Court",
        "mobile": "214-529-2561",
        "work": "Actuary",
        "home": "754-618-3312",
        "email": "ltitt23@globo.com",
        "github": "lbentote23"
      }, {
        "name": "Bryanty",
        "address": "3672 Bobwhite Lane",
        "mobile": "881-506-2234",
        "work": "Staff Scientist",
        "home": "136-818-2380",
        "email": "bcavell24@acquirethisname.com",
        "github": "bfitchen24"
      }, {
        "name": "Hedda",
        "address": "81374 Judy Circle",
        "mobile": "624-311-8554",
        "work": "Nuclear Power Engineer",
        "home": "339-978-4737",
        "email": "hsussans25@mozilla.org",
        "github": "hsarchwell25"
      }, {
        "name": "Clevey",
        "address": "4 Jenna Drive",
        "mobile": "503-862-3132",
        "work": "Nuclear Power Engineer",
        "home": "215-673-7515",
        "email": "ccockshoot26@ebay.co.uk",
        "github": "cconklin26"
      }, {
        "name": "Laverne",
        "address": "80775 Bartillon Way",
        "mobile": "652-781-1786",
        "work": "Sales Representative",
        "home": "381-842-2907",
        "email": "lsclanders27@java.com",
        "github": "leustes27"
      }, {
        "name": "Sileas",
        "address": "66507 Nevada Crossing",
        "mobile": "685-759-3616",
        "work": "Software Consultant",
        "home": "272-534-7445",
        "email": "sdegiovanni28@wired.com",
        "github": "struran28"
      }, {
        "name": "Kalie",
        "address": "5 Mcbride Road",
        "mobile": "814-103-5825",
        "work": "Web Designer IV",
        "home": "121-773-9679",
        "email": "khooks29@wunderground.com",
        "github": "klathleiff29"
      }, {
        "name": "Ivy",
        "address": "730 Schmedeman Parkway",
        "mobile": "357-170-4862",
        "work": "Clinical Specialist",
        "home": "107-626-9237",
        "email": "iflavelle2a@admin.ch",
        "github": "ipavia2a"
      }, {
        "name": "Gloria",
        "address": "824 Summer Ridge Trail",
        "mobile": "527-998-8394",
        "work": "Safety Technician II",
        "home": "355-646-2850",
        "email": "gcormode2b@geocities.jp",
        "github": "gmerrington2b"
      }, {
        "name": "Maddy",
        "address": "700 Johnson Street",
        "mobile": "560-195-1658",
        "work": "Design Engineer",
        "home": "767-239-7373",
        "email": "mferreira2c@msn.com",
        "github": "mkolis2c"
      }, {
        "name": "Ashia",
        "address": "5384 Loomis Drive",
        "mobile": "782-525-4245",
        "work": "Chief Design Engineer",
        "home": "616-543-6111",
        "email": "awims2d@multiply.com",
        "github": "afruser2d"
      }, {
        "name": "Christy",
        "address": "3045 Monica Pass",
        "mobile": "309-774-3157",
        "work": "Associate Professor",
        "home": "492-137-7638",
        "email": "cobrian2e@archive.org",
        "github": "cmeekin2e"
      }, {
        "name": "Jocelyn",
        "address": "050 Rockefeller Alley",
        "mobile": "871-753-5543",
        "work": "Information Systems Manager",
        "home": "245-499-8244",
        "email": "jbellew2f@pen.io",
        "github": "jgermaine2f"
      }, {
        "name": "Merralee",
        "address": "2 Eggendart Court",
        "mobile": "368-170-7020",
        "work": "Mechanical Systems Engineer",
        "home": "455-443-3766",
        "email": "mclamo2g@who.int",
        "github": "mbinstead2g"
      }, {
        "name": "Sigismondo",
        "address": "50 Hollow Ridge Hill",
        "mobile": "650-696-6614",
        "work": "Senior Financial Analyst",
        "home": "815-130-1211",
        "email": "sglastonbury2h@toplist.cz",
        "github": "slangstone2h"
      }, {
        "name": "Karissa",
        "address": "86 Dahle Junction",
        "mobile": "518-270-7272",
        "work": "Librarian",
        "home": "293-535-7764",
        "email": "kcrosbie2i@themeforest.net",
        "github": "kfrentz2i"
      }, {
        "name": "Jed",
        "address": "5 Thierer Lane",
        "mobile": "726-262-7050",
        "work": "Recruiting Manager",
        "home": "209-317-9663",
        "email": "jpieracci2j@google.ru",
        "github": "jastle2j"
      }, {
        "name": "Kaile",
        "address": "8535 Oak Valley Pass",
        "mobile": "814-602-9097",
        "work": "Software Test Engineer IV",
        "home": "527-132-4899",
        "email": "kbyllam2k@i2i.jp",
        "github": "kmoffatt2k"
      }, {
        "name": "Winnifred",
        "address": "57 Golf Course Pass",
        "mobile": "320-497-3564",
        "work": "Research Nurse",
        "home": "248-316-9582",
        "email": "wstead2l@w3.org",
        "github": "wcraisford2l"
      }, {
        "name": "Jemima",
        "address": "81442 Glacier Hill Way",
        "mobile": "380-867-2322",
        "work": "Marketing Manager",
        "home": "875-811-5682",
        "email": "jbartholat2m@moonfruit.com",
        "github": "jpitcaithley2m"
      }, {
        "name": "Gordy",
        "address": "637 Lunder Junction",
        "mobile": "594-525-9087",
        "work": "Occupational Therapist",
        "home": "759-502-6182",
        "email": "glenox2n@nyu.edu",
        "github": "groomes2n"
      }, {
        "name": "Reilly",
        "address": "589 Melvin Crossing",
        "mobile": "105-631-3690",
        "work": "Internal Auditor",
        "home": "447-995-1707",
        "email": "rscurfield2o@psu.edu",
        "github": "rridgley2o"
      }, {
        "name": "Cheston",
        "address": "5 Eggendart Drive",
        "mobile": "830-151-0018",
        "work": "Automation Specialist IV",
        "home": "543-703-3212",
        "email": "cgaynsford2p@opensource.org",
        "github": "cbezzant2p"
      }, {
        "name": "Mitchell",
        "address": "4752 Cottonwood Junction",
        "mobile": "137-773-3528",
        "work": "Librarian",
        "home": "619-611-5405",
        "email": "mbarling2q@pcworld.com",
        "github": "mperassi2q"
      }, {
        "name": "Tedd",
        "address": "061 Old Gate Place",
        "mobile": "152-429-4496",
        "work": "Librarian",
        "home": "605-917-9308",
        "email": "tstreeting2r@photobucket.com",
        "github": "tfidelus2r"
      }]);
    });
};
