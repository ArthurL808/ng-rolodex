
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([{
        "id": 1,
        "name": "Jennette",
        "address": "21 Mandrake Way",
        "mobile": "739-106-9843",
        "work": "Assistant Manager",
        "home": "545-139-4094",
        "email": "jwashington0@blogs.com",
        "github": "jburgne0"
      }, {
        "id": 2,
        "name": "Marcelia",
        "address": "84 Nova Center",
        "mobile": "116-394-1898",
        "work": "Engineer II",
        "home": "271-568-2530",
        "email": "mcordeau1@ucsd.edu",
        "github": "memnoney1"
      }, {
        "id": 3,
        "name": "Flss",
        "address": "670 Bay Court",
        "mobile": "190-587-2724",
        "work": "Programmer Analyst I",
        "home": "991-151-8670",
        "email": "fbrands2@example.com",
        "github": "fbolzmann2"
      }, {
        "id": 4,
        "name": "Georgia",
        "address": "4358 Atwood Alley",
        "mobile": "521-266-9270",
        "work": "Professor",
        "home": "739-634-4413",
        "email": "gmapstone3@canalblog.com",
        "github": "gfronks3"
      }, {
        "id": 5,
        "name": "Candie",
        "address": "62059 Roxbury Center",
        "mobile": "693-374-2237",
        "work": "Help Desk Technician",
        "home": "834-208-4056",
        "email": "ctyhurst4@xing.com",
        "github": "croberds4"
      }, {
        "id": 6,
        "name": "Marleen",
        "address": "98624 Gulseth Park",
        "mobile": "459-986-1706",
        "work": "Legal Assistant",
        "home": "539-762-9032",
        "email": "mmcalarney5@slate.com",
        "github": "mconeybeare5"
      }, {
        "id": 7,
        "name": "Mavis",
        "address": "27 Mesta Court",
        "mobile": "329-286-1357",
        "work": "Quality Engineer",
        "home": "107-898-6862",
        "email": "mbrunsden6@nytimes.com",
        "github": "mtretwell6"
      }, {
        "id": 8,
        "name": "Alysa",
        "address": "437 Stephen Way",
        "mobile": "682-173-0466",
        "work": "Geological Engineer",
        "home": "779-505-8825",
        "email": "awolvey7@ted.com",
        "github": "anisius7"
      }, {
        "id": 9,
        "name": "Archaimbaud",
        "address": "2081 Rowland Way",
        "mobile": "887-328-8291",
        "work": "Design Engineer",
        "home": "478-767-1816",
        "email": "afawcitt8@loc.gov",
        "github": "abretton8"
      }, {
        "id": 10,
        "name": "Athene",
        "address": "271 Ridgeview Way",
        "mobile": "358-349-4454",
        "work": "Human Resources Assistant III",
        "home": "968-667-7063",
        "email": "amacphaden9@mapy.cz",
        "github": "aberggren9"
      }, {
        "id": 11,
        "name": "Monica",
        "address": "294 Harper Point",
        "mobile": "426-540-3980",
        "work": "Administrative Assistant III",
        "home": "185-803-4594",
        "email": "mbartheleta@independent.co.uk",
        "github": "mpurveya"
      }, {
        "id": 12,
        "name": "Tricia",
        "address": "674 Heffernan Pass",
        "mobile": "771-937-4287",
        "work": "Assistant Professor",
        "home": "386-344-6310",
        "email": "tmichaelb@skype.com",
        "github": "tstelfaxb"
      }, {
        "id": 13,
        "name": "Roberto",
        "address": "346 Duke Avenue",
        "mobile": "834-558-9966",
        "work": "Biostatistician IV",
        "home": "252-336-1240",
        "email": "rirvingc@omniture.com",
        "github": "rmorillasc"
      }, {
        "id": 14,
        "name": "Carolin",
        "address": "62 Warbler Park",
        "mobile": "289-232-7141",
        "work": "Design Engineer",
        "home": "492-622-3448",
        "email": "clogued@toplist.cz",
        "github": "csootd"
      }, {
        "id": 15,
        "name": "Roanne",
        "address": "063 Delaware Avenue",
        "mobile": "205-336-0390",
        "work": "Health Coach II",
        "home": "719-653-0716",
        "email": "rkiernane@yandex.ru",
        "github": "rbeanye"
      }, {
        "id": 16,
        "name": "Goldia",
        "address": "42467 Waubesa Point",
        "mobile": "609-487-7028",
        "work": "Product Engineer",
        "home": "910-700-3934",
        "email": "gathelstanf@globo.com",
        "github": "gsabenf"
      }, {
        "id": 17,
        "name": "Enrichetta",
        "address": "75374 Huxley Place",
        "mobile": "710-196-0409",
        "work": "VP Product Management",
        "home": "975-675-8254",
        "email": "etrounsong@canalblog.com",
        "github": "ebartelotg"
      }, {
        "id": 18,
        "name": "Myrlene",
        "address": "583 Charing Cross Road",
        "mobile": "153-468-6996",
        "work": "Sales Associate",
        "home": "628-731-2940",
        "email": "mstrephanh@networkadvertising.org",
        "github": "mbunningh"
      }, {
        "id": 19,
        "name": "Saw",
        "address": "422 Fuller Park",
        "mobile": "313-546-7729",
        "work": "Desktop Support Technician",
        "home": "466-337-0545",
        "email": "siannuzzii@businessinsider.com",
        "github": "salvaradoi"
      }, {
        "id": 20,
        "name": "Julius",
        "address": "74204 Lerdahl Crossing",
        "mobile": "192-328-8570",
        "work": "Cost Accountant",
        "home": "715-232-0735",
        "email": "jboardsj@timesonline.co.uk",
        "github": "jmoughtonj"
      }, {
        "id": 21,
        "name": "Kimberley",
        "address": "5376 Fremont Trail",
        "mobile": "451-756-8285",
        "work": "Editor",
        "home": "418-109-3464",
        "email": "kwilkissonk@dedecms.com",
        "github": "kvasyunink"
      }, {
        "id": 22,
        "name": "Meara",
        "address": "05727 Eggendart Lane",
        "mobile": "782-296-5683",
        "work": "Health Coach I",
        "home": "914-533-9920",
        "email": "msoutenl@mozilla.com",
        "github": "mhackletonl"
      }, {
        "id": 23,
        "name": "Petronia",
        "address": "1 Annamark Road",
        "mobile": "754-910-0384",
        "work": "Human Resources Assistant III",
        "home": "861-912-6291",
        "email": "pwilcem@list-manage.com",
        "github": "pmcmychemm"
      }, {
        "id": 24,
        "name": "Cosette",
        "address": "5 Crowley Hill",
        "mobile": "593-730-6636",
        "work": "Marketing Assistant",
        "home": "421-236-9200",
        "email": "creadmiren@skype.com",
        "github": "csplainn"
      }, {
        "id": 25,
        "name": "Stillman",
        "address": "3 Warbler Lane",
        "mobile": "920-890-4462",
        "work": "Design Engineer",
        "home": "776-333-0162",
        "email": "swilshino@facebook.com",
        "github": "sbaseko"
      }, {
        "id": 26,
        "name": "Bab",
        "address": "47531 Meadow Valley Parkway",
        "mobile": "310-674-7425",
        "work": "Human Resources Assistant III",
        "home": "907-612-3351",
        "email": "bgierkep@slideshare.net",
        "github": "bkeningleyp"
      }, {
        "id": 27,
        "name": "Consalve",
        "address": "9850 Londonderry Court",
        "mobile": "947-937-9192",
        "work": "Associate Professor",
        "home": "137-817-0386",
        "email": "cheinerq@simplemachines.org",
        "github": "cnorsisterq"
      }, {
        "id": 28,
        "name": "Ivonne",
        "address": "30979 Jenna Trail",
        "mobile": "925-992-1386",
        "work": "Product Engineer",
        "home": "272-473-1088",
        "email": "igonzalvor@list-manage.com",
        "github": "iwillr"
      }, {
        "id": 29,
        "name": "Kristina",
        "address": "44961 Center Road",
        "mobile": "357-648-3490",
        "work": "Programmer III",
        "home": "873-853-9652",
        "email": "kavess@psu.edu",
        "github": "ktinmouths"
      }, {
        "id": 30,
        "name": "Marya",
        "address": "1 4th Alley",
        "mobile": "319-505-4421",
        "work": "Account Representative II",
        "home": "739-425-7866",
        "email": "mroddat@istockphoto.com",
        "github": "mtantt"
      }, {
        "id": 31,
        "name": "Lina",
        "address": "4910 Comanche Parkway",
        "mobile": "271-263-7271",
        "work": "Librarian",
        "home": "137-555-2524",
        "email": "lcohaneu@homestead.com",
        "github": "lcureeu"
      }, {
        "id": 32,
        "name": "Jodi",
        "address": "80 Hanover Way",
        "mobile": "688-400-5121",
        "work": "VP Sales",
        "home": "740-278-1823",
        "email": "jcluettv@engadget.com",
        "github": "jgregsonv"
      }, {
        "id": 33,
        "name": "Zebadiah",
        "address": "2 Johnson Terrace",
        "mobile": "759-162-5820",
        "work": "Community Outreach Specialist",
        "home": "860-841-7082",
        "email": "zwedmorew@multiply.com",
        "github": "zhaughinw"
      }, {
        "id": 34,
        "name": "Townie",
        "address": "2355 Basil Alley",
        "mobile": "554-701-0442",
        "work": "Operator",
        "home": "769-259-1954",
        "email": "tcronkshawx@weebly.com",
        "github": "tmcaviyx"
      }, {
        "id": 35,
        "name": "Charla",
        "address": "01 Morrow Street",
        "mobile": "952-578-1114",
        "work": "Administrative Assistant IV",
        "home": "783-666-2165",
        "email": "csportony@networkadvertising.org",
        "github": "ctimmisy"
      }, {
        "id": 36,
        "name": "Ali",
        "address": "2027 Forest Plaza",
        "mobile": "628-699-7864",
        "work": "Director of Sales",
        "home": "827-614-6327",
        "email": "apinksz@etsy.com",
        "github": "ablaguez"
      }, {
        "id": 37,
        "name": "Donna",
        "address": "61 Morningstar Junction",
        "mobile": "997-802-7537",
        "work": "Legal Assistant",
        "home": "627-148-2936",
        "email": "dcovil10@desdev.cn",
        "github": "dhans10"
      }, {
        "id": 38,
        "name": "Lucine",
        "address": "25720 8th Road",
        "mobile": "762-312-7207",
        "work": "Project Manager",
        "home": "612-264-8673",
        "email": "ledgson11@newsvine.com",
        "github": "lfosserd11"
      }, {
        "id": 39,
        "name": "Vidovic",
        "address": "37 Aberg Crossing",
        "mobile": "783-258-5819",
        "work": "Assistant Professor",
        "home": "527-528-6063",
        "email": "vstanmore12@hostgator.com",
        "github": "vpimlott12"
      }, {
        "id": 40,
        "name": "Alistair",
        "address": "433 Carpenter Junction",
        "mobile": "613-557-4282",
        "work": "Recruiting Manager",
        "home": "622-980-3202",
        "email": "afarries13@google.it",
        "github": "aryder13"
      }, {
        "id": 41,
        "name": "Fair",
        "address": "324 Norway Maple Junction",
        "mobile": "612-438-7117",
        "work": "Research Associate",
        "home": "888-432-6162",
        "email": "fjimenez14@dell.com",
        "github": "fpidon14"
      }, {
        "id": 42,
        "name": "Alwin",
        "address": "700 Sherman Street",
        "mobile": "620-446-6889",
        "work": "Operator",
        "home": "111-181-2388",
        "email": "adenisco15@census.gov",
        "github": "agregoli15"
      }, {
        "id": 43,
        "name": "Forrester",
        "address": "3808 Merry Street",
        "mobile": "331-770-1616",
        "work": "Assistant Professor",
        "home": "647-586-2364",
        "email": "febbetts16@123-reg.co.uk",
        "github": "fduigenan16"
      }, {
        "id": 44,
        "name": "Reidar",
        "address": "569 Scofield Crossing",
        "mobile": "589-580-6427",
        "work": "Community Outreach Specialist",
        "home": "456-551-7408",
        "email": "rwallege17@creativecommons.org",
        "github": "rshearer17"
      }, {
        "id": 45,
        "name": "Kenna",
        "address": "00 Kedzie Avenue",
        "mobile": "937-928-9370",
        "work": "Developer IV",
        "home": "592-165-8071",
        "email": "khitchens18@surveymonkey.com",
        "github": "kbowcock18"
      }, {
        "id": 46,
        "name": "Violante",
        "address": "76165 East Road",
        "mobile": "662-542-0833",
        "work": "Financial Analyst",
        "home": "310-351-2057",
        "email": "vgippes19@tinyurl.com",
        "github": "vhubback19"
      }, {
        "id": 47,
        "name": "Joleen",
        "address": "6420 Coolidge Plaza",
        "mobile": "336-257-4101",
        "work": "Technical Writer",
        "home": "311-634-3849",
        "email": "jbignell1a@twitpic.com",
        "github": "jchark1a"
      }, {
        "id": 48,
        "name": "Brenna",
        "address": "4 Sachtjen Park",
        "mobile": "866-319-8551",
        "work": "Marketing Assistant",
        "home": "883-509-5001",
        "email": "bwhaley1b@moonfruit.com",
        "github": "bbuckle1b"
      }, {
        "id": 49,
        "name": "Jerrilyn",
        "address": "8 Donald Circle",
        "mobile": "423-784-2673",
        "work": "Junior Executive",
        "home": "338-914-3200",
        "email": "jlakin1c@phpbb.com",
        "github": "japted1c"
      }, {
        "id": 50,
        "name": "Chantalle",
        "address": "4863 Magdeline Lane",
        "mobile": "382-316-6159",
        "work": "Accountant IV",
        "home": "857-826-9938",
        "email": "ctrowill1d@washingtonpost.com",
        "github": "cpogosian1d"
      }]);
    });
};
