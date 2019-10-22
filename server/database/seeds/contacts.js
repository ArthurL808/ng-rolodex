
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([{
        "name": "Chiarra",
        "address": "4 Porter Park",
        "mobile": "718-821-9498",
        "work": "Geological Engineer",
        "home": "438-512-4401",
        "email": "ctoffoletto0@uol.com.br",
        "github": "cpedwell0",
        "user_id": 3
      }, {
        "name": "Jeromy",
        "address": "919 Mallard Place",
        "mobile": "954-852-7176",
        "work": "VP Marketing",
        "home": "711-112-2366",
        "email": "jrabbitt1@theatlantic.com",
        "github": "jtod1",
        "user_id": 1
      }, {
        "name": "Jayme",
        "address": "4289 Crowley Park",
        "mobile": "471-378-4007",
        "work": "Nuclear Power Engineer",
        "home": "117-234-9764",
        "email": "jswoffer2@cpanel.net",
        "github": "jhalsted2",
        "user_id": 3
      }, {
        "name": "Zeke",
        "address": "21846 Corry Avenue",
        "mobile": "686-742-0497",
        "work": "Director of Sales",
        "home": "973-659-5281",
        "email": "zcackett3@cafepress.com",
        "github": "zgiorgi3",
        "user_id": 1
      }, {
        "name": "Nichol",
        "address": "7 Golf View Parkway",
        "mobile": "793-506-8384",
        "work": "Financial Advisor",
        "home": "877-625-0129",
        "email": "nrubrow4@gnu.org",
        "github": "nrothery4",
        "user_id": 2
      }, {
        "name": "Bernhard",
        "address": "2 Green Ridge Road",
        "mobile": "629-997-3916",
        "work": "Nurse Practicioner",
        "home": "824-435-5315",
        "email": "bdeplacido5@prnewswire.com",
        "github": "bbowry5",
        "user_id": 1
      }, {
        "name": "Rodrigo",
        "address": "799 Golf View Point",
        "mobile": "991-654-3191",
        "work": "Mechanical Systems Engineer",
        "home": "543-276-8010",
        "email": "rbrill6@tamu.edu",
        "github": "redgett6",
        "user_id": 3
      }, {
        "name": "Westley",
        "address": "08 Monterey Park",
        "mobile": "604-690-8409",
        "work": "Database Administrator I",
        "home": "541-398-3497",
        "email": "wwarne7@bbc.co.uk",
        "github": "wairds7",
        "user_id": 3
      }, {
        "name": "Gardie",
        "address": "3 Service Court",
        "mobile": "171-475-7249",
        "work": "Developer I",
        "home": "146-416-0640",
        "email": "gmccambridge8@msn.com",
        "github": "gslopier8",
        "user_id": 3
      }, {
        "name": "Johnath",
        "address": "7451 Union Avenue",
        "mobile": "980-460-9207",
        "work": "Director of Sales",
        "home": "897-914-7353",
        "email": "jhindge9@seattletimes.com",
        "github": "jkaubisch9",
        "user_id": 1
      }, {
        "name": "Daniele",
        "address": "92 Main Alley",
        "mobile": "788-547-3373",
        "work": "Paralegal",
        "home": "515-471-0523",
        "email": "dmechica@state.gov",
        "github": "ddublina",
        "user_id": 1
      }, {
        "name": "Patten",
        "address": "2 Dunning Road",
        "mobile": "625-352-3093",
        "work": "Assistant Media Planner",
        "home": "101-985-9689",
        "email": "phowlesb@godaddy.com",
        "github": "pmacneilageb",
        "user_id": 1
      }, {
        "name": "Tillie",
        "address": "8 Algoma Circle",
        "mobile": "620-686-9012",
        "work": "Assistant Media Planner",
        "home": "750-740-9299",
        "email": "tbickertonc@netlog.com",
        "github": "tlattosc",
        "user_id": 2
      }, {
        "name": "Michal",
        "address": "39 Northport Court",
        "mobile": "219-613-0294",
        "work": "Cost Accountant",
        "home": "432-618-1242",
        "email": "mhablotd@census.gov",
        "github": "mdepportd",
        "user_id": 2
      }, {
        "name": "Ario",
        "address": "3025 Fulton Place",
        "mobile": "910-466-7581",
        "work": "Payment Adjustment Coordinator",
        "home": "633-326-7476",
        "email": "abentincke@narod.ru",
        "github": "aheinzlere",
        "user_id": 1
      }, {
        "name": "Gwendolin",
        "address": "6 Anniversary Park",
        "mobile": "965-908-2858",
        "work": "Desktop Support Technician",
        "home": "919-902-3423",
        "email": "gmccrief@g.co",
        "github": "gbartolijnf",
        "user_id": 2
      }, {
        "name": "Aubrette",
        "address": "935 Carioca Park",
        "mobile": "826-408-9679",
        "work": "Web Developer IV",
        "home": "196-235-1138",
        "email": "afinnimoreg@reuters.com",
        "github": "akohrtg",
        "user_id": 2
      }, {
        "name": "Dehlia",
        "address": "8 Memorial Parkway",
        "mobile": "410-438-0697",
        "work": "Graphic Designer",
        "home": "406-578-3495",
        "email": "dmaccarih@goo.gl",
        "github": "dharsenth",
        "user_id": 3
      }, {
        "name": "Henderson",
        "address": "835 Dovetail Trail",
        "mobile": "817-873-1025",
        "work": "Quality Engineer",
        "home": "922-276-3410",
        "email": "hstuehmeyeri@ovh.net",
        "github": "hhubbardi",
        "user_id": 3
      }, {
        "name": "Henriette",
        "address": "7241 Laurel Street",
        "mobile": "566-653-1509",
        "work": "Senior Quality Engineer",
        "home": "578-747-6983",
        "email": "hharderj@goodreads.com",
        "github": "hhendrickj",
        "user_id": 2
      }, {
        "name": "Berty",
        "address": "7290 Lotheville Center",
        "mobile": "649-645-3043",
        "work": "Account Coordinator",
        "home": "698-902-7274",
        "email": "bsemirask@e-recht24.de",
        "github": "bjosefssonk",
        "user_id": 2
      }, {
        "name": "Fredra",
        "address": "62337 Charing Cross Way",
        "mobile": "732-479-6299",
        "work": "Software Test Engineer I",
        "home": "197-240-8701",
        "email": "fbishl@amazonaws.com",
        "github": "fslatorl",
        "user_id": 2
      }, {
        "name": "Phyllida",
        "address": "7634 Old Gate Street",
        "mobile": "739-277-1181",
        "work": "Speech Pathologist",
        "home": "756-499-3964",
        "email": "pdibartolomeom@sogou.com",
        "github": "pgerriessenm",
        "user_id": 1
      }, {
        "name": "Corrie",
        "address": "85376 Forest Avenue",
        "mobile": "142-490-7719",
        "work": "Staff Accountant I",
        "home": "903-516-7433",
        "email": "clampbrechtn@cpanel.net",
        "github": "carborn",
        "user_id": 3
      }, {
        "name": "Gallard",
        "address": "3 Lakeland Crossing",
        "mobile": "395-170-5618",
        "work": "Professor",
        "home": "133-285-0062",
        "email": "gdollaro@mayoclinic.com",
        "github": "galejandreo",
        "user_id": 1
      }, {
        "name": "L;urette",
        "address": "35 Acker Way",
        "mobile": "938-381-2515",
        "work": "Design Engineer",
        "home": "636-508-8242",
        "email": "lwittsp@hhs.gov",
        "github": "lsaffonp",
        "user_id": 1
      }, {
        "name": "Delcina",
        "address": "1 South Terrace",
        "mobile": "337-115-3988",
        "work": "Research Associate",
        "home": "920-743-6425",
        "email": "dstelliq@weather.com",
        "github": "dsummerlyq",
        "user_id": 1
      }, {
        "name": "Cristal",
        "address": "80407 Almo Center",
        "mobile": "146-394-0788",
        "work": "Help Desk Operator",
        "home": "922-369-9193",
        "email": "cbeltznerr@dell.com",
        "github": "cszreterr",
        "user_id": 3
      }, {
        "name": "Ignatius",
        "address": "671 Lyons Crossing",
        "mobile": "248-926-4829",
        "work": "Chemical Engineer",
        "home": "136-175-9934",
        "email": "iadamowiczs@4shared.com",
        "github": "ileatherborrows",
        "user_id": 2
      }, {
        "name": "Gretna",
        "address": "19098 Superior Parkway",
        "mobile": "728-788-0906",
        "work": "Senior Developer",
        "home": "357-115-8716",
        "email": "gcollistert@stumbleupon.com",
        "github": "gmcdonoght",
        "user_id": 1
      }, {
        "name": "Link",
        "address": "2 Tony Center",
        "mobile": "998-906-0969",
        "work": "Health Coach II",
        "home": "338-405-9169",
        "email": "ljoscelinu@scientificamerican.com",
        "github": "lpolandu",
        "user_id": 1
      }, {
        "name": "Beatriz",
        "address": "18824 Dorton Hill",
        "mobile": "113-584-3274",
        "work": "Director of Sales",
        "home": "647-679-8138",
        "email": "bcasterouv@state.tx.us",
        "github": "brabidgev",
        "user_id": 1
      }, {
        "name": "Emmey",
        "address": "59 Upham Hill",
        "mobile": "487-110-9315",
        "work": "Payment Adjustment Coordinator",
        "home": "964-287-4009",
        "email": "eenrdigow@cnbc.com",
        "github": "eatwillw",
        "user_id": 1
      }, {
        "name": "Phillie",
        "address": "2231 Jackson Parkway",
        "mobile": "726-664-3208",
        "work": "Research Nurse",
        "home": "795-495-3201",
        "email": "podonohoex@merriam-webster.com",
        "github": "pgilleanx",
        "user_id": 3
      }, {
        "name": "Bev",
        "address": "5 Buena Vista Plaza",
        "mobile": "878-351-0781",
        "work": "Civil Engineer",
        "home": "260-602-6106",
        "email": "bgreenroay@auda.org.au",
        "github": "bfurphyy",
        "user_id": 3
      }, {
        "name": "Tyrus",
        "address": "1 Chinook Alley",
        "mobile": "606-541-2194",
        "work": "Account Coordinator",
        "home": "345-346-6151",
        "email": "tglaviasz@instagram.com",
        "github": "tshyresz",
        "user_id": 1
      }, {
        "name": "Courtney",
        "address": "97 Grayhawk Street",
        "mobile": "119-693-5138",
        "work": "General Manager",
        "home": "390-745-6658",
        "email": "cmoukes10@edublogs.org",
        "github": "cwaterfall10",
        "user_id": 1
      }, {
        "name": "Verney",
        "address": "404 Westerfield Court",
        "mobile": "447-953-8281",
        "work": "Junior Executive",
        "home": "308-517-8637",
        "email": "vlarrie11@china.com.cn",
        "github": "vgritland11",
        "user_id": 2
      }, {
        "name": "Waylin",
        "address": "0320 Delladonna Circle",
        "mobile": "719-487-3430",
        "work": "Quality Engineer",
        "home": "197-340-9953",
        "email": "wwilkie12@unblog.fr",
        "github": "wbadsey12",
        "user_id": 1
      }, {
        "name": "Mela",
        "address": "0 Mitchell Pass",
        "mobile": "431-379-2002",
        "work": "Associate Professor",
        "home": "552-861-1810",
        "email": "mbaughen13@unc.edu",
        "github": "mhrihorovich13",
        "user_id": 3
      }, {
        "name": "Allene",
        "address": "7 Heath Park",
        "mobile": "184-953-7011",
        "work": "Graphic Designer",
        "home": "672-154-2665",
        "email": "afridaye14@google.cn",
        "github": "apetkovic14",
        "user_id": 2
      }, {
        "name": "Rahel",
        "address": "93 Sachtjen Avenue",
        "mobile": "989-238-1323",
        "work": "VP Accounting",
        "home": "447-966-4381",
        "email": "rbridal15@reddit.com",
        "github": "rspilling15",
        "user_id": 1
      }, {
        "name": "Kiley",
        "address": "63 Center Court",
        "mobile": "961-463-4455",
        "work": "Pharmacist",
        "home": "797-316-2460",
        "email": "kdornan16@deliciousdays.com",
        "github": "kjillis16",
        "user_id": 2
      }, {
        "name": "Connie",
        "address": "302 Bultman Court",
        "mobile": "542-403-8051",
        "work": "Computer Systems Analyst II",
        "home": "423-873-8402",
        "email": "cabramov17@shinystat.com",
        "github": "cmullett17",
        "user_id": 2
      }, {
        "name": "Tonnie",
        "address": "1 8th Avenue",
        "mobile": "380-238-7110",
        "work": "Librarian",
        "home": "587-398-7812",
        "email": "tmeller18@naver.com",
        "github": "tphorsby18",
        "user_id": 2
      }, {
        "name": "Corrie",
        "address": "8 Petterle Center",
        "mobile": "331-915-5952",
        "work": "Technical Writer",
        "home": "241-379-6901",
        "email": "civanyukov19@yellowpages.com",
        "github": "cfeander19",
        "user_id": 2
      }, {
        "name": "Jackson",
        "address": "58832 Westridge Point",
        "mobile": "108-676-2616",
        "work": "Registered Nurse",
        "home": "189-914-3466",
        "email": "jheale1a@addtoany.com",
        "github": "jager1a",
        "user_id": 3
      }, {
        "name": "Sisely",
        "address": "0589 1st Plaza",
        "mobile": "250-604-0215",
        "work": "Chief Design Engineer",
        "home": "863-894-4468",
        "email": "sochterlonie1b@zdnet.com",
        "github": "svanderkrui1b",
        "user_id": 3
      }, {
        "name": "Graig",
        "address": "2025 Barnett Pass",
        "mobile": "860-494-5705",
        "work": "Professor",
        "home": "115-652-7697",
        "email": "gmcgilvray1c@youtu.be",
        "github": "greggio1c",
        "user_id": 2
      }, {
        "name": "Molli",
        "address": "7712 Gerald Place",
        "mobile": "563-190-7897",
        "work": "Account Representative I",
        "home": "904-909-8879",
        "email": "mkier1d@reuters.com",
        "github": "mhiland1d",
        "user_id": 1
      }, {
        "name": "Norene",
        "address": "357 Northview Hill",
        "mobile": "808-879-3723",
        "work": "Analyst Programmer",
        "home": "278-675-5032",
        "email": "nbagg1e@google.pl",
        "github": "ndosdell1e",
        "user_id": 2
      }, {
        "name": "Riki",
        "address": "152 Roth Parkway",
        "mobile": "816-934-3106",
        "work": "Community Outreach Specialist",
        "home": "612-899-7001",
        "email": "regarr1f@dedecms.com",
        "github": "rmullinder1f",
        "user_id": 2
      }, {
        "name": "Coral",
        "address": "8396 Paget Plaza",
        "mobile": "138-303-9835",
        "work": "Human Resources Assistant I",
        "home": "475-508-6508",
        "email": "catling1g@ustream.tv",
        "github": "ccolt1g",
        "user_id": 1
      }, {
        "name": "Iolanthe",
        "address": "85 Shasta Hill",
        "mobile": "536-281-6252",
        "work": "Sales Representative",
        "home": "130-621-1954",
        "email": "isargant1h@flickr.com",
        "github": "ibysh1h",
        "user_id": 1
      }, {
        "name": "Hercules",
        "address": "828 Mitchell Terrace",
        "mobile": "766-509-5719",
        "work": "Registered Nurse",
        "home": "602-165-0283",
        "email": "hdabbes1i@woothemes.com",
        "github": "hverrillo1i",
        "user_id": 2
      }, {
        "name": "Nikki",
        "address": "1925 Mcguire Trail",
        "mobile": "611-798-0077",
        "work": "Statistician III",
        "home": "245-888-8869",
        "email": "nbeernt1j@yellowpages.com",
        "github": "ngabbetis1j",
        "user_id": 2
      }, {
        "name": "Janine",
        "address": "29751 Trailsway Road",
        "mobile": "352-640-8457",
        "work": "Nurse Practicioner",
        "home": "412-255-2902",
        "email": "jmclewd1k@so-net.ne.jp",
        "github": "jcluley1k",
        "user_id": 1
      }, {
        "name": "Abigael",
        "address": "7082 Monica Street",
        "mobile": "982-575-3905",
        "work": "Human Resources Manager",
        "home": "833-938-9976",
        "email": "acuthbertson1l@cornell.edu",
        "github": "ahiddersley1l",
        "user_id": 2
      }, {
        "name": "Lu",
        "address": "39366 Springs Trail",
        "mobile": "758-778-7273",
        "work": "Nuclear Power Engineer",
        "home": "259-807-8615",
        "email": "lhuxley1m@cargocollective.com",
        "github": "leatherton1m",
        "user_id": 1
      }, {
        "name": "Ynez",
        "address": "4991 Northview Parkway",
        "mobile": "549-343-2354",
        "work": "Analog Circuit Design manager",
        "home": "554-890-8654",
        "email": "yrobbeke1n@ftc.gov",
        "github": "ymoffat1n",
        "user_id": 1
      }, {
        "name": "Markus",
        "address": "8045 Morrow Center",
        "mobile": "279-802-9525",
        "work": "Legal Assistant",
        "home": "555-699-8389",
        "email": "mgreber1o@state.tx.us",
        "github": "mvogel1o",
        "user_id": 3
      }, {
        "name": "Gillian",
        "address": "4446 Aberg Avenue",
        "mobile": "220-898-2117",
        "work": "Analyst Programmer",
        "home": "115-907-3511",
        "email": "gdefont1p@histats.com",
        "github": "gtrittam1p",
        "user_id": 1
      }, {
        "name": "Theodoric",
        "address": "2 Hollow Ridge Center",
        "mobile": "980-438-8305",
        "work": "Data Coordiator",
        "home": "860-324-0713",
        "email": "tgrog1q@sohu.com",
        "github": "tsedgemond1q",
        "user_id": 2
      }, {
        "name": "Melony",
        "address": "00886 Mayer Drive",
        "mobile": "530-762-4946",
        "work": "Account Representative IV",
        "home": "247-691-1299",
        "email": "mglashby1r@ft.com",
        "github": "mmorfield1r",
        "user_id": 3
      }, {
        "name": "Moses",
        "address": "274 Miller Plaza",
        "mobile": "613-830-6810",
        "work": "Senior Developer",
        "home": "701-526-0763",
        "email": "mchurchard1s@nydailynews.com",
        "github": "mnorfolk1s",
        "user_id": 3
      }, {
        "name": "Lorinda",
        "address": "69 Carberry Pass",
        "mobile": "384-154-5508",
        "work": "Food Chemist",
        "home": "590-214-0964",
        "email": "lglanton1t@boston.com",
        "github": "lallicock1t",
        "user_id": 1
      }, {
        "name": "Killian",
        "address": "535 Elka Lane",
        "mobile": "323-266-5290",
        "work": "Dental Hygienist",
        "home": "724-212-2536",
        "email": "kralton1u@hatena.ne.jp",
        "github": "kingarfield1u",
        "user_id": 3
      }, {
        "name": "Jonas",
        "address": "384 Parkside Park",
        "mobile": "656-394-3214",
        "work": "Account Executive",
        "home": "255-233-0575",
        "email": "jmerredy1v@51.la",
        "github": "jkitter1v",
        "user_id": 1
      }, {
        "name": "Malynda",
        "address": "3 Lillian Hill",
        "mobile": "907-708-8395",
        "work": "Associate Professor",
        "home": "213-427-9252",
        "email": "mketteringham1w@intel.com",
        "github": "mrubinovitsch1w",
        "user_id": 2
      }, {
        "name": "Marja",
        "address": "53 Valley Edge Junction",
        "mobile": "663-774-7030",
        "work": "General Manager",
        "home": "131-549-8294",
        "email": "mrigts1x@chicagotribune.com",
        "github": "myakov1x",
        "user_id": 2
      }, {
        "name": "Grenville",
        "address": "125 Clyde Gallagher Pass",
        "mobile": "645-995-4950",
        "work": "Mechanical Systems Engineer",
        "home": "631-186-8624",
        "email": "gstockle1y@oaic.gov.au",
        "github": "gpoulson1y",
        "user_id": 2
      }, {
        "name": "Stormy",
        "address": "2106 Waywood Lane",
        "mobile": "999-889-7545",
        "work": "Data Coordiator",
        "home": "900-200-9662",
        "email": "slunnon1z@friendfeed.com",
        "github": "smccarrick1z",
        "user_id": 3
      }, {
        "name": "Ian",
        "address": "7617 Scoville Terrace",
        "mobile": "153-156-7410",
        "work": "Programmer IV",
        "home": "444-880-1401",
        "email": "iquittonden20@marriott.com",
        "github": "iomailey20",
        "user_id": 3
      }, {
        "name": "Cally",
        "address": "1584 Maple Wood Alley",
        "mobile": "798-361-5464",
        "work": "Web Designer IV",
        "home": "763-772-5495",
        "email": "ctewelson21@stumbleupon.com",
        "github": "cabisetti21",
        "user_id": 2
      }, {
        "name": "Vail",
        "address": "3 Arrowood Street",
        "mobile": "294-422-6136",
        "work": "Project Manager",
        "home": "828-405-9292",
        "email": "vferrario22@techcrunch.com",
        "github": "volifaunt22",
        "user_id": 3
      }, {
        "name": "Rae",
        "address": "65 Ridge Oak Avenue",
        "mobile": "316-506-9262",
        "work": "Budget/Accounting Analyst III",
        "home": "869-603-0584",
        "email": "rplimmer23@omniture.com",
        "github": "rgile23",
        "user_id": 1
      }, {
        "name": "Daffy",
        "address": "756 Vermont Terrace",
        "mobile": "748-516-1181",
        "work": "Registered Nurse",
        "home": "654-451-1536",
        "email": "dcockley24@globo.com",
        "github": "dnewcom24",
        "user_id": 3
      }, {
        "name": "Korella",
        "address": "1075 Dottie Plaza",
        "mobile": "757-784-9686",
        "work": "Senior Editor",
        "home": "318-824-7634",
        "email": "kvowels25@ihg.com",
        "github": "khalpine25",
        "user_id": 3
      }, {
        "name": "Wilden",
        "address": "2 Debra Trail",
        "mobile": "713-999-9225",
        "work": "Senior Cost Accountant",
        "home": "285-816-3705",
        "email": "wshord26@sakura.ne.jp",
        "github": "wjanko26",
        "user_id": 2
      }, {
        "name": "Barbara-anne",
        "address": "33 Corry Junction",
        "mobile": "180-225-6007",
        "work": "Social Worker",
        "home": "126-289-0630",
        "email": "bcarder27@mozilla.org",
        "github": "britzman27",
        "user_id": 2
      }, {
        "name": "Marwin",
        "address": "1 Bartelt Road",
        "mobile": "733-716-6115",
        "work": "Assistant Professor",
        "home": "958-425-2470",
        "email": "mhurran28@state.gov",
        "github": "mhansom28",
        "user_id": 2
      }, {
        "name": "Nannie",
        "address": "33684 Sommers Center",
        "mobile": "442-799-2128",
        "work": "Budget/Accounting Analyst III",
        "home": "730-820-9167",
        "email": "nmunsey29@bloglovin.com",
        "github": "nsterte29",
        "user_id": 1
      }, {
        "name": "Aretha",
        "address": "82635 Lake View Terrace",
        "mobile": "747-152-6573",
        "work": "Human Resources Manager",
        "home": "450-226-7318",
        "email": "ayoutead2a@i2i.jp",
        "github": "aprobart2a",
        "user_id": 1
      }, {
        "name": "Romola",
        "address": "5961 International Center",
        "mobile": "834-502-7695",
        "work": "Assistant Manager",
        "home": "644-690-5235",
        "email": "rsirr2b@cisco.com",
        "github": "rdekeyser2b",
        "user_id": 1
      }, {
        "name": "Germayne",
        "address": "77 Rowland Street",
        "mobile": "438-392-9149",
        "work": "Desktop Support Technician",
        "home": "511-475-5234",
        "email": "gmanoch2c@nsw.gov.au",
        "github": "gtreagust2c",
        "user_id": 1
      }, {
        "name": "Robb",
        "address": "7901 Dapin Place",
        "mobile": "148-226-1202",
        "work": "Automation Specialist III",
        "home": "580-198-5985",
        "email": "ringerith2d@myspace.com",
        "github": "rmatley2d",
        "user_id": 3
      }, {
        "name": "Holt",
        "address": "82810 Bayside Alley",
        "mobile": "907-300-4532",
        "work": "Operator",
        "home": "953-544-4239",
        "email": "hklemmt2e@dot.gov",
        "github": "hlovitt2e",
        "user_id": 2
      }, {
        "name": "Fernandina",
        "address": "07 Blackbird Way",
        "mobile": "133-979-4268",
        "work": "Software Test Engineer III",
        "home": "721-919-8645",
        "email": "froycroft2f@de.vu",
        "github": "fgoforth2f",
        "user_id": 1
      }, {
        "name": "Ervin",
        "address": "527 Swallow Circle",
        "mobile": "761-578-5288",
        "work": "Help Desk Operator",
        "home": "828-839-3556",
        "email": "enaerup2g@diigo.com",
        "github": "ewincom2g",
        "user_id": 2
      }, {
        "name": "Roosevelt",
        "address": "47 Hanover Junction",
        "mobile": "601-243-1723",
        "work": "Analyst Programmer",
        "home": "129-602-4838",
        "email": "rwhile2h@amazonaws.com",
        "github": "rmalinowski2h",
        "user_id": 3
      }, {
        "name": "Gusti",
        "address": "156 Swallow Park",
        "mobile": "633-731-9827",
        "work": "Geological Engineer",
        "home": "627-372-1245",
        "email": "ggreason2i@shutterfly.com",
        "github": "gscarre2i",
        "user_id": 2
      }, {
        "name": "Erl",
        "address": "8 Green Ridge Parkway",
        "mobile": "958-232-2192",
        "work": "Recruiting Manager",
        "home": "419-236-6907",
        "email": "ecocklie2j@plala.or.jp",
        "github": "ewixey2j",
        "user_id": 1
      }, {
        "name": "Wallie",
        "address": "310 Scoville Street",
        "mobile": "899-589-6433",
        "work": "Senior Developer",
        "home": "124-980-4385",
        "email": "wjacobi2k@state.tx.us",
        "github": "wbrookbank2k",
        "user_id": 2
      }, {
        "name": "Ashton",
        "address": "30806 Continental Parkway",
        "mobile": "115-718-3728",
        "work": "Occupational Therapist",
        "home": "951-503-7661",
        "email": "atolotti2l@unicef.org",
        "github": "afursland2l",
        "user_id": 2
      }, {
        "name": "Colin",
        "address": "1 Grover Road",
        "mobile": "112-368-5946",
        "work": "Programmer III",
        "home": "232-223-6817",
        "email": "cmerigon2m@army.mil",
        "github": "cord2m",
        "user_id": 1
      }, {
        "name": "Flore",
        "address": "37561 Boyd Terrace",
        "mobile": "444-556-1058",
        "work": "Senior Financial Analyst",
        "home": "341-415-7713",
        "email": "fphilips2n@instagram.com",
        "github": "fredparth2n",
        "user_id": 3
      }, {
        "name": "Jan",
        "address": "23 Rusk Place",
        "mobile": "806-317-4682",
        "work": "Biostatistician III",
        "home": "850-651-9653",
        "email": "jminihan2o@is.gd",
        "github": "jborland2o",
        "user_id": 2
      }, {
        "name": "Dorree",
        "address": "66215 Spenser Plaza",
        "mobile": "255-399-8517",
        "work": "Junior Executive",
        "home": "700-392-0140",
        "email": "dbolesma2p@bloomberg.com",
        "github": "dbatalle2p",
        "user_id": 3
      }, {
        "name": "Marcy",
        "address": "6 Shelley Plaza",
        "mobile": "515-692-8889",
        "work": "Software Engineer IV",
        "home": "729-395-5450",
        "email": "mtrevorrow2q@hhs.gov",
        "github": "mhayller2q",
        "user_id": 1
      }, {
        "name": "Misti",
        "address": "04 Milwaukee Center",
        "mobile": "416-795-3356",
        "work": "Automation Specialist IV",
        "home": "286-332-3737",
        "email": "mmurrish2r@xing.com",
        "github": "mgley2r",
        "user_id": 2
      }]);
    });
};
