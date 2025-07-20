// data.js
import auto1 from './auto1.jpg'
import auto2 from './auto2.jpg'
import auto3 from './auto3.jpg'
import auto4 from './auto4.jpg'
import auto5 from './auto5.jpg'
import auto6 from './auto6.jpg'
import bus1 from './bus1.jpg'
import bus2 from './bus2.jpg'
import bus3 from './bus3.jpg'
import bus4 from './bus4.jpg'
import ambu1 from './ambu.jpg'
import ambu2 from './ambu2.jpg'

import hotel1 from './hotel1.jpg'
import hotel2 from './hotel2.jpg'
import hotel3 from './hotel3.jpg'




export const Autokollam = [
  { id: 1,  name: "suredhran", age: "24", place: "oachira" },
  { id: 2,  name: "ramesh",    age: "26", place: "Karunagapally" },
  { id: 3,  name: "maneesh",   age: "22", place: "chavara" },
  { id: 4,  name: "sugunan",   age: "24", place: "kottarakara" },
  { id: 5,  name: "suresh",    age: "24", place: "sasthakotta" },
  { id: 6,  name: "mahesh",    age: "27", place: "kundara" },
  { id: 7,  name: "gunesh",    age: "30", place: "kollamcity" },
  { id: 8,  name: "mahesh",    age: "27", place: "kundara" },
  { id: 9,  name: "Noman",     age: "25", place: "neendakara" },
  { id: 10, name: "nolan",     age: "27", place: "chathannur" },
  { id: 11, name: "nuuman",    age: "27", place: "kottiyam" },
  { id: 12, name: "mahesh",    age: "27", place: "paaripali" },
  { id: 13, name: "mahesh",    age: "27", place: "Anchal" }
];

export const keralaDistricts = [
  "Thiruvananthapuram", // index 0 – TVM
  "Kollam",              // 1 – KLM
  "Pathanamthitta",      // 2 – PTA
  "Alappuzha",           // 3 – ALP
  "Kottayam",            // 4 – KTM
  "Idukki",              // 5 – IDK
  "Ernakulam",           // 6 – EKM
  "Thrissur",            // 7 – TSR
  "Palakkad",            // 8 – PLKD
  "Malappuram",          // 9 – MLP
  "Kozhikode",           // 10 – KKD
  "Wayanad",             // 11 – WYD
  "Kannur",              // 12 – KNR
  "Kasaragod"            // 13 – KSR
];

export const subdis = [
  { name: "Thiruvananthapuram", taluks: ["Neyyattinkara","Kattakada","Thiruvananthapuram","Nedumangad","Chirayinkeezhu","Varkala"] },
  { name: "Kollam",           taluks: ["Kollam","Karunagappally","Kunnathur","Kottarakkara","Punalur","Pathanapuram"] },
  { name: "Pathanamthitta",   taluks: ["Thiruvalla","Mallappally","Ranni","Kozhencherry","Adoor","Konni"] },
  { name: "Alappuzha",        taluks: ["Cherthala","Ambalappuzha","Kuttanad","Karthikappally","Mavelikara","Chengannur"] },
  { name: "Kottayam",         taluks: ["Changanassery","Kanjirappally","Kottayam","Meenachil","Vaikom"] },
  { name: "Idukki",           taluks: ["Thodupuzha","Idukki","Devikulam","Udumbanchola","Peerumade"] },
  { name: "Ernakulam",        taluks: ["Kochi","Kanayannur","Kothamangalam","Muvattupuzha","Perumbavoor","Aluva","Kunnathunad","Paravur"] },
  { name: "Thrissur",         taluks: ["Thrissur","Chavakkad","Kodungallur","Mukundapuram","Talappilly","Chalakudy","Kunnamkulam"] },
  { name: "Palakkad",         taluks: ["Palakkad","Alathur","Ottappalam","Mannarkkad","Chittur"] },
  { name: "Malappuram",       taluks: ["Eranad","Nilambur","Perinthalmanna","Ponnani","Tirur","Tirurangadi","Kondotty"] },
  { name: "Kozhikode",        taluks: ["Kozhikode","Koyilandy","Vadakara","Thamarassery"] },
  { name: "Wayanad",          taluks: ["Sulthan Bathery","Vythiri","Mananthavady"] },
  { name: "Kannur",           taluks: ["Kannur","Taliparamba","Thalassery","Iritty","Payyanur"] },
  { name: "Kasaragod",        taluks: ["Kasaragod","Hosdurg","Manjeshwaram","Vellarikundu"] }
];


export const driversByTaluk = [
  {
    district: "Kollam",
    taluk: "Kollam",
    drivers: [
      { id: "KL-02-AUTO-101", name: "Sunil Kumar",image:auto1, category: "Auto‑rickshaw", vehicleNo: "KL-02-A-1001", license: "KL-02-M1001001", phone: "9446001101" },
      { id: "KL-02-BUS-101", name: "Pradeep Nair",image:bus1, category: "Bus", vehicleNo: "KL-02-B-1101", license: "KL-02-D1001101", phone: "9487002201" },
      { id: "KL-02-AMB-101", name: "Anjali Menon",image:ambu2, category: "Ambulance (108)", vehicleNo: "KL-02-AMB-1201", license: "KL-02-E1001201", phone: "9946003301" },
      { id: "KL-02-TAXI-101", name: "Ravi Varma", image:auto2,category: "Taxi (aggregator)", vehicleNo: "KL-02-T-1301", license: "KL-02-G1001301", phone: "9846004401" },
    ]
  },
  {
    district: "Kollam",
    taluk: "Karunagappally",
    drivers: [
      { id: "KL-23-AUTO-201", name: "Rahul Raj", image:auto3, category: "Auto‑rickshaw", vehicleNo: "KL-23-A-2101", license: "KL-23-M2002101", phone: "9446005502" },
      { id: "KL-23-BUS-201", name: "Geetha Nair", image:bus3, category: "Bus (KSRTC)", vehicleNo: "KL-23-B-2201", license: "KL-23-D2002201", phone: "9487006602" },
      { id: "KL-23-AMB-201", name: "Deepak R.", image:ambu1, category: "Ambulance (Private)", vehicleNo: "KL-23-AMB-2301", license: "KL-23-E2002301", phone: "9946007702" },
      { id: "KL-23-MTN-201", name: "Leena Mathew", image:auto4, category: "Medical transport", vehicleNo: "KL-23-MT-2401", license: "KL-23-F2002401", phone: "9633008802" },
    ]
  },
  {
    district: "Kollam",
    taluk: "Kunnathur",
    drivers: [
      { id: "KL-02-AUTO-301",image:auto4, name: "Minu S.", category: "Auto‑rickshaw", vehicleNo: "KL-02-A-3101", license: "KL-02-M3003101", phone: "9446009903" },
      { id: "KL-02-BUS-301", name: "Thomas M.", image:bus3, category: "Bus (Private)", vehicleNo: "KL-02-B-3201", license: "KL-02-D3003201", phone: "9487010003" },
      { id: "KL-02-AMB-301", name: "Shyamala", image:ambu2, category: "Ambulance (Private)", vehicleNo: "KL-02-AMB-3301", license: "KL-02-E3003301", phone: "9946011103" },
      { id: "KL-02-TAXI-301", image:auto5, name: "Ajith Kurian", category: "Taxi (aggregator)", vehicleNo: "KL-02-T-3401", license: "KL-02-G3003401", phone: "9846012203" },
    ]
  },
  {
    district: "Kollam",
    taluk: "Kottarakkara",
    drivers: [
      { id: "KL-02-AUTO-401",image:auto5, name: "Rajeev Kumar", category: "Auto‑rickshaw", vehicleNo: "KL-02-A-4101", license: "KL-02-M4004101", phone: "9446013304" },
      { id: "KL-02-BUS-401", name: "Madhu P.",image:bus4, category: "Bus (KSRTC)", vehicleNo: "KL-02-B-4201", license: "KL-02-D4004201", phone: "9487014404" },
      { id: "KL-02-AMB-401", name: "Priya S.",image:ambu1, category: "Ambulance (108)", vehicleNo: "KL-02-AMB-4301", license: "KL-02-E4004301", phone: "9946015504" },
      { id: "KL-02-MTB-401",image:auto6, name: "Abdul", category: "Medical transport bike", vehicleNo: "KL-02-MTB-4401", license: "KL-02-F4004401", phone: "9633016604" },
    ]
  },
  {
    district: "Kollam",
    taluk: "Punalur",
    drivers: [
      { id: "KL-25-AUTO-601",image:auto4,  name: "Ravi Shankar", category: "Auto‑rickshaw", vehicleNo: "KL-25-A-6101", license: "KL-25-M6006101", phone: "9446021116" },
      { id: "KL-25-BUS-601", image:bus2, name: "Geetha Menon", category: "Bus (KSRTC)", vehicleNo: "KL-25-B-6201", license: "KL-25-D6006201", phone: "9487022226" },
      { id: "KL-25-AMB-601", image:ambu2, name: "Shinu Thomas", category: "Ambulance (108)", vehicleNo: "KL-25-AMB-6301", license: "KL-25-E6006301", phone: "9946023336" },
      { id: "KL-25-TAXI-601",image:auto3, name: "Leena Thomas", category: "Taxi (aggregator)", vehicleNo: "KL-25-T-6401", license: "KL-25-G6006401", phone: "9846024446" },
    ]
  },
  {
    district: "Kollam",
    taluk: "Pathanapuram",
    drivers: [
      { id: "KL-02-AUTO-501",image:auto1, name: "Azeez Khan", category: "Auto‑rickshaw", vehicleNo: "KL-02-A-5101", license: "KL-02-M5005101", phone: "9446017705" },
      { id: "KL-02-BUS-501", image:bus4, name: "Neena Kurian", category: "Bus (Private)", vehicleNo: "KL-02-B-5201", license: "KL-02-D5005201", phone: "9487018805" },
      { id: "KL-02-AMB-501", image:ambu2, name: "Rahul Joseph", category: "Ambulance (Private)", vehicleNo: "KL-02-AMB-5301", license: "KL-02-E5005301", phone: "9946019905" },
      { id: "KL-02-TAXI-501",image:auto6, name: "Vinod Kumar", category: "Taxi (aggregator)", vehicleNo: "KL-02-T-5401", license: "KL-02-G5005401", phone: "9846020005" },
    ]
  },
    {
    district: "Thiruvananthapuram",
    taluk: "Thiruvananthapuram",
    drivers: [
      { id: "KL-01-AUTO-101", image:auto1, name: "Aditya Kumar", category: "Auto‑rickshaw", vehicleNo: "KL-01-A-1101", license: "KL-01-M1011101", phone: "9446101101" },
      { id: "KL-01-BUS-101", image:bus1, name: "Suhas P.", category: "Bus (Private)", vehicleNo: "KL-01-B-1201", license: "KL-01-D1011201", phone: "9487102201" },
      { id: "KL-01-AMB-101", image:ambu1, name:"Meera Menon", category: "Ambulance (108)", vehicleNo: "KL-01-AMB-1301", license: "KL-01-E1011301", phone: "9946103301" },
      { id: "KL-01-TAXI-101", image:auto3, name: "Rohan Pillai", category: "Taxi (aggregator)", vehicleNo: "KL-01-T-1401", license: "KL-01-G1011401", phone: "9846104401" },
    ]
  },
  {
    district: "Thiruvananthapuram",
    taluk: "Neyyattinkara",
    drivers: [
      { id: "KL-19-AUTO-201", image:auto2, name: "Anwar", category: "Auto‑rickshaw", vehicleNo: "KL-19-A-2101", license: "KL-19-M2012101", phone: "9446105502" },
      { id: "KL-19-BUS-201", image:bus1, name: "Geeta", category: "Bus (KSRTC)", vehicleNo: "KL-19-B-2201", license: "KL-19-D2012201", phone: "9487106602" },
      { id: "KL-19-AMB-201", image:ambu1, name: "Leena", category: "Ambulance (Private)", vehicleNo: "KL-19-AMB-2301", license: "KL-19-E2012301", phone: "9946107702" },
      { id: "KL-19-TAXI-201", image:auto1, name: "Vijay", category: "Taxi (aggregator)", vehicleNo: "KL-19-T-2401", license: "KL-19-G2012401", phone: "9846108802" },
    ]
  },
  {
    district: "Thiruvananthapuram",
    taluk: "Nedumangad",
    drivers: [
      { id: "KL-21-AUTO-301",image:auto1, name: "Rema", category: "Auto‑rickshaw", vehicleNo: "KL-21-A-3101", license: "KL-21-M3013101", phone: "9446109903" },
      { id: "KL-21-BUS-301", image:bus4, name: "Thomas", category: "Bus (Private)", vehicleNo: "KL-21-B-3201", license: "KL-21-D3013201", phone: "9487110003" },
      { id: "KL-21-AMB-301", image:ambu2, name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL-21-AMB-3301", license: "KL-21-E3013301", phone: "9946111103" },
      { id: "KL-21-MTB-301",image:auto3, name: "Kamal", category: "Medical transport bike", vehicleNo: "KL-21-MTB-3401", license: "KL-21-F3013401", phone: "9633112203" },
    ]
  },
  {
    district: "Thiruvananthapuram",
    taluk: "Chirayinkeezhu",
    drivers: [
      { id: "KL-16-AUTO-401",image:auto4, name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL-16-A-4101", license: "KL-16-M4014101", phone: "9446113304" },
      { id: "KL-16-BUS-401", image:bus3, name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL-16-B-4201", license: "KL-16-D4014201", phone: "9487114404" },
      { id: "KL-16-AMB-401", image:ambu1, name: "Leela", category: "Ambulance (108)", vehicleNo: "KL-16-AMB-4301", license: "KL-16-E4014301", phone: "9946115504" },
      { id: "KL-16-TAXI-401",image:auto2, name: "Arun", category: "Taxi (aggregator)", vehicleNo: "KL-16-T-4401", license: "KL-16-G4014401", phone: "9846116604" },
    ]
  },
  {
    district: "Thiruvananthapuram",
    taluk: "Varkala",
    drivers: [
      { id: "KL-81-AUTO-501", image:auto5, name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL-81-A-5101", license: "KL-81-M5015101", phone: "9446117705" },
      { id: "KL-81-BUS-501", image:bus3, name: "Anitha", category: "Bus (Private)", vehicleNo: "KL-81-B-5201", license: "KL-81-D5015201", phone: "9487118805" },
      { id: "KL-81-AMB-501", image:ambu1, name: "Kannan", category: "Ambulance (Private)", vehicleNo: "KL-81-AMB-5301", license: "KL-81-E5015301", phone: "9946119905" },
      { id: "KL-81-TAXI-501",image:auto3, name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-81-T-5401", license: "KL-81-G5015401", phone: "9846120005" },
    ]
  },
  {
    district: "Thiruvananthapuram",
    taluk: "Kattakada",
    drivers: [
      { id: "KL-74-AUTO-601",image:auto3, name: "Sreelatha", category: "Auto‑rickshaw", vehicleNo: "KL-74-A-6101", license: "KL-74-M6016101", phone: "9446121116" },
      { id: "KL-74-BUS-601", image:bus4, name: "Madhu", category: "Bus (KSRTC)", vehicleNo: "KL-74-B-6201", license: "KL‑74‑D6016201", phone: "9487122226" },
      { id: "KL-74-AMB-601", image:ambu1, name: "Geetha", category: "Ambulance (108)", vehicleNo: "KL‑74-AMB-6301", license: "KL‑74‑E6016301", phone: "9946123336" },
      { id: "KL-74-TAXI-601",image:auto2, name: "Rajesh", category: "Taxi (aggregator)", vehicleNo: "KL‑74‑T‑6401", license: "KL‑74‑G6016401", phone: "9846124446" },
    ]
  },
    {
    district: "Pathanamthitta",
    taluk: "Thiruvalla",
    drivers: [
      { id: "KL‑27‑AUTO‑101", name: "Aditya Kumar", category: "Auto‑rickshaw", vehicleNo: "KL‑27‑A‑1101", license: "KL‑27‑M271101", phone: "9446102101" },
      { id: "KL‑27‑BUS‑101", name: "Suhas P.", category: "Bus (Private)", vehicleNo: "KL‑27‑B‑1201", license: "KL‑27‑D271202", phone: "9487202201" },
      { id: "KL‑27‑AMB‑101", name: "Meera Menon", category: "Ambulance (108)", vehicleNo: "KL‑27‑AMB‑1301", license: "KL‑27‑E271303", phone: "9947203301" },
      { id: "KL‑27‑TAXI‑101", name: "Rohan Pillai", category: "Taxi (aggregator)", vehicleNo: "KL‑27‑T‑1401", license: "KL‑27‑G271404", phone: "9847204401" },
    ]
  },
  {
    district: "Pathanamthitta",
    taluk: "Mallappally",
    drivers: [
      { id: "KL‑28‑AUTO‑201", name: "Anwar", category: "Auto‑rickshaw", vehicleNo: "KL‑28‑A‑2101", license: "KL‑28‑M282101", phone: "9447105502" },
      { id: "KL‑28‑BUS‑201", name: "Geetha", category: "Bus (KSRTC)", vehicleNo: "KL‑28‑B‑2201", license: "KL‑28‑D282202", phone: "9487206602" },
      { id: "KL‑28‑AMB‑201", name: "Leena", category: "Ambulance (Private)", vehicleNo: "KL‑28‑AMB‑2301", license: "KL‑28‑E282203", phone: "9947207702" },
      { id: "KL‑28‑MTB‑201", name: "Vinu", category: "Medical transport bike", vehicleNo: "KL‑28‑MTB‑2401", license: "KL‑28‑F282204", phone: "9633208802" },
    ]
  },
  {
    district: "Pathanamthitta",
    taluk: "Ranni",
    drivers: [
      { id: "KL‑29‑AUTO‑301", name: "Ravi", category: "Auto‑rickshaw", vehicleNo: "KL‑29‑A‑3101", license: "KL‑29‑M293101", phone: "9447109903" },
      { id: "KL‑29‑BUS‑301", name: "Thomas", category: "Bus (Private)", vehicleNo: "KL‑29‑B‑3201", license: "KL‑29‑D293202", phone: "9487210003" },
      { id: "KL‑29‑AMB‑301", name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL‑29‑AMB‑3301", license: "KL‑29‑E293203", phone: "9947211103" },
      { id: "KL‑29‑TAXI‑301", name: "Shyam", category: "Taxi (aggregator)", vehicleNo: "KL‑29‑T‑3401", license: "KL‑29‑G293204", phone: "9847212203" },
    ]
  },
  {
    district: "Pathanamthitta",
    taluk: "Kozhencherry",
    drivers: [
      { id: "KL‑30‑AUTO‑401", name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL‑30‑A‑4101", license: "KL‑30‑M303101", phone: "9447113304" },
      { id: "KL‑30‑BUS‑401", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL‑30‑B‑4201", license: "KL‑30‑D303202", phone: "9487214404" },
      { id: "KL‑30‑AMB‑401", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL‑30‑AMB‑4301", license: "KL‑30‑E303203", phone: "9947215504" },
      { id: "KL‑30‑MTB‑401", name: "Arun", category: "Medical transport bike", vehicleNo: "KL‑30‑MTB‑4401", license: "KL‑30‑F303204", phone: "9633216604" },
    ]
  },
  {
    district: "Pathanamthitta",
    taluk: "Adoor",
    drivers: [
      { id: "KL‑31‑AUTO‑501", name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL‑31‑A‑5101", license: "KL‑31‑M313101", phone: "9447117705" },
      { id: "KL‑31‑BUS‑501", name: "Anitha", category: "Bus (Private)", vehicleNo: "KL‑31‑B‑5201", license: "KL‑31‑D313202", phone: "9487218805" },
      { id: "KL‑31‑AMB‑501", name: "Kannan", category: "Ambulance (Private)", vehicleNo: "KL‑31‑AMB‑5301", license: "KL‑31‑E313203", phone: "9947219905" },
      { id: "KL‑31‑TAXI‑501", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL‑31‑T‑5401", license: "KL‑31‑G313204", phone: "9847220005" },
    ]
  },
  {
    district: "Pathanamthitta",
    taluk: "Konni",
    drivers: [
      { id: "KL‑32‑AUTO‑601", name: "Sreelatha", category: "Auto‑rickshaw", vehicleNo: "KL‑32‑A‑6101", license: "KL‑32‑M323101", phone: "9447121116" },
      { id: "KL‑32‑BUS‑601", name: "Madhu", category: "Bus (KSRTC)", vehicleNo: "KL‑32‑B‑6201", license: "KL‑32‑D323202", phone: "9487222226" },
      { id: "KL‑32‑AMB‑601", name: "Geetha", category: "Ambulance (108)", vehicleNo: "KL‑32‑AMB‑6301", license: "KL‑32‑E323203", phone: "9947223336" },
      { id: "KL‑32‑TAXI‑601", name: "Rajesh", category: "Taxi (aggregator)", vehicleNo: "KL‑32‑T‑6401", license: "KL‑32‑G323204", phone: "9847224446" },
    ]
  },
  {
    district: "Alappuzha",
    taluk: "Cherthala",
    drivers: [
      { id: "KL-07-AUTO-101", name: "Arun Kumar", category: "Auto‑rickshaw", vehicleNo: "KL-07-A-1101", license: "KL-07-M071101", phone: "9447301101" },
      { id: "KL-07-BUS-101", name: "Geetha Susan", category: "Bus (Private)", vehicleNo: "KL-07-B-1201", license: "KL-07-D071202", phone: "9487302201" },
      { id: "KL-07-AMB-101", name: "Rahul Menon", category: "Ambulance (108)", vehicleNo: "KL-07-AMB-1301", license: "KL-07-E071303", phone: "9947303301" },
      { id: "KL-07-TAXI-101", name: "Priya S.", category: "Taxi (aggregator)", vehicleNo: "KL-07-T-1401", license: "KL-07-G071404", phone: "9847304401" },
    ]
  },
  {
    district: "Alappuzha",
    taluk: "Ambalappuzha",
    drivers: [
      { id: "KL-47-AUTO-201", name: "Anwar", category: "Auto‑rickshaw", vehicleNo: "KL-47-A-2101", license: "KL-47-M472101", phone: "9447305502" },
      { id: "KL-47-BUS-201", name: "Nandini", category: "Bus (KSRTC)", vehicleNo: "KL-47-B-2201", license: "KL-47-D472202", phone: "9487306602" },
      { id: "KL-47-AMB-201", name: "Leena", category: "Ambulance (Private)", vehicleNo: "KL-47-AMB-2301", license: "KL-47-E472203", phone: "9947307702" },
      { id: "KL-47-MTB-201", name: "Vinu", category: "Medical transport bike", vehicleNo: "KL-47-MTB-2401", license: "KL-47-F472204", phone: "9633308802" },
    ]
  },
  {
    district: "Alappuzha",
    taluk: "Kuttanad",
    drivers: [
      { id: "KL-66-AUTO-301", name: "Ravi", category: "Auto‑rickshaw", vehicleNo: "KL-66-A-3101", license: "KL-66-M663101", phone: "9447309903" },
      { id: "KL-66-BUS-301", name: "Thomas", category: "Bus (Private)", vehicleNo: "KL-66-B-3201", license: "KL-66-D663202", phone: "9487310003" },
      { id: "KL-66-AMB-301", name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL-66-AMB-3301", license: "KL-66-E663203", phone: "9947311103" },
      { id: "KL-66-TAXI-301", name: "Shyam", category: "Taxi (aggregator)", vehicleNo: "KL-66-T-3401", license: "KL-66-G663204", phone: "9847312203" },
    ]
  },
  {
    district: "Alappuzha",
    taluk: "Karthikappally",
    drivers: [
      { id: "KL-08-AUTO-401", name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL-08-A-4101", license: "KL-08-M081101", phone: "9447313304" },
      { id: "KL-08-BUS-401", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL-08-B-4201", license: "KL-08-D081202", phone: "9487314404" },
      { id: "KL-08-AMB-401", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL-08-AMB-4301", license: "KL-08-E081203", phone: "9947315504" },
      { id: "KL-08-MTN-401", name: "Arun", category: "Medical transport", vehicleNo: "KL-08-MT-4401", license: "KL-08-F081204", phone: "9633316604" },
    ]
  },
  {
    district: "Alappuzha",
    taluk: "Chengannur",
    drivers: [
      { id: "KL-09-AUTO-501", name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL-09-A-5101", license: "KL-09-M091101", phone: "9447317705" },
      { id: "KL-09-BUS-501", name: "Anitha", category: "Bus (Private)", vehicleNo: "KL-09-B-5201", license: "KL-09-D091202", phone: "9487318805" },
      { id: "KL-09-AMB-501", name: "Kannan", category: "Ambulance (Private)", vehicleNo: "KL-09-AMB-5301", license: "KL-09-E091203", phone: "9947319905" },
      { id: "KL-09-TAXI-501", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-09-T-5401", license: "KL-09-G091204", phone: "9847320005" },
    ]
  },
  {
    district: "Alappuzha",
    taluk: "Mavelikkara",
    drivers: [
      { id: "KL-10-AUTO-601", name: "Sreelatha", category: "Auto‑rickshaw", vehicleNo: "KL-10-A-6101", license: "KL-10-M101101", phone: "9447321116" },
      { id: "KL-10-BUS-601", name: "Madhu", category: "Bus (KSRTC)", vehicleNo: "KL-10-B-6201", license: "KL-10-D101202", phone: "9487322226" },
      { id: "KL-10-AMB-601", name: "Geetha", category: "Ambulance (108)", vehicleNo: "KL-10-AMB-6301", license: "KL-10-E101203", phone: "9947323336" },
      { id: "KL-10-TAXI-601", name: "Rajesh", category: "Taxi (aggregator)", vehicleNo: "KL-10-T-6401", license: "KL-10-G101204", phone: "9847324446" },
    ]
  },
  {
    district: "Kottayam",
    taluk: "Changanacherry",
    drivers: [
      { id: "KL-05-AUTO-101", name: "Arun", category: "Auto‑rickshaw", vehicleNo: "KL-05-A-1101", license: "KL-05-M051101", phone: "9447401101" },
      { id: "KL-05-BUS-101", name: "Geetha", category: "Bus (Private)", vehicleNo: "KL-05-B-1201", license: "KL-05-D051202", phone: "9487402201" },
      { id: "KL-05-AMB-101", name: "Rahul", category: "Ambulance (108)", vehicleNo: "KL-05-AMB-1301", license: "KL-05-E051303", phone: "9947403301" },
      { id: "KL-05-TAXI-101", name: "Priya", category: "Taxi (aggregator)", vehicleNo: "KL-05-T-1401", license: "KL-05-G051404", phone: "9847404401" },
    ]
  },
  {
    district: "Kottayam",
    taluk: "Kanjirappally",
    drivers: [
      { id: "KL-34-AUTO-201", name: "Anwar", category: "Auto‑rickshaw", vehicleNo: "KL-34-A-2101", license: "KL-34-M342101", phone: "9447405502" },
      { id: "KL-34-BUS-201", name: "Nandini", category: "Bus (KSRTC)", vehicleNo: "KL-34-B-2201", license: "KL-34-D342202", phone: "9487406602" },
      { id: "KL-34-AMB-201", name: "Leena", category: "Ambulance (Private)", vehicleNo: "KL-34-AMB-2301", license: "KL-34-E342203", phone: "9947407702" },
      { id: "KL-34-MTB-201", name: "Vinu", category: "Medical transport bike", vehicleNo: "KL-34-MTB-2401", license: "KL-34-F342204", phone: "9633408802" },
    ]
  },
  {
    district: "Kottayam",
    taluk: "Kottayam",
    drivers: [
      { id: "KL-05-AUTO-301", name: "Ravi", category: "Auto‑rickshaw", vehicleNo: "KL-05-A-3101", license: "KL-05-M053101", phone: "9447409903" },
      { id: "KL-05-BUS-301", name: "Thomas", category: "Bus (Private)", vehicleNo: "KL-05-B-3201", license: "KL-05-D053202", phone: "9487410003" },
      { id: "KL-05-AMB-301", name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL-05-AMB-3301", license: "KL-05-E053203", phone: "9947411103" },
      { id: "KL-05-MTN-301", name: "Shyam", category: "Medical transport", vehicleNo: "KL-05-MT-3401", license: "KL-05-F053204", phone: "9847412203" },
    ]
  },
  {
    district: "Kottayam",
    taluk: "Meenachil",
    drivers: [
      { id: "KL-34-AUTO-401", name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL-34-A-4101", license: "KL-34-M344101", phone: "9447413304" },
      { id: "KL-34-BUS-401", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL-34-B-4201", license: "KL-34-D344202", phone: "9487414404" },
      { id: "KL-34-AMB-401", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL-34-AMB-4301", license: "KL-34-E344203", phone: "9947415504" },
      { id: "KL-34-TAXI-401", name: "Arun", category: "Taxi (aggregator)", vehicleNo: "KL-34-T-4401", license: "KL-34-G344204", phone: "9847416604" },
    ]
  },
  {
    district: "Kottayam",
    taluk: "Vaikom",
    drivers: [
      { id: "KL-36-AUTO-501", name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL-36-A-5101", license: "KL-36-M365101", phone: "9447417705" },
      { id: "KL-36-BUS-501", name: "Anitha", category: "Bus (Private)", vehicleNo: "KL-36-B-5201", license: "KL-36-D365202", phone: "9487418805" },
      { id: "KL-36-AMB-501", name: "Kannan", category: "Ambulance (Private)", vehicleNo: "KL-36-AMB-5301", license: "KL-36-E365203", phone: "9947419905" },
      { id: "KL-36-TAXI-501", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-36-T-5401", license: "KL-36-G365204", phone: "9847420005" },
    ]
  },
  {
    district: "Idukki",
    taluk: "Thodupuzha",
    drivers: [
      { id: "KL-38-AUTO-101", name: "John Varghese", category: "Auto‑rickshaw", vehicleNo: "KL-38-A-1101", license: "KL-38-M381101", phone: "9447601101" },
      { id: "KL-38-BUS-101", name: "Nisha Mathew", category: "Bus (Private)", vehicleNo: "KL-38-B-1201", license: "KL-38-D381202", phone: "9487602201" },
      { id: "KL-38-AMB-101", name: "Ravi Kumar", category: "Ambulance (108)", vehicleNo: "KL-38-AMB-1301", license: "KL-38-E381303", phone: "9947603301" },
      { id: "KL-38-TAXI-101", name: "Anil Joseph", category: "Taxi (aggregator)", vehicleNo: "KL-38-T-1401", license: "KL-38-G381404", phone: "9847604401" },
    ]
  },
  {
    district: "Idukki",
    taluk: "Idukki",
    drivers: [
      { id: "KL-06-AUTO-201", name: "Soman Kurian", category: "Auto‑rickshaw", vehicleNo: "KL-06-A-2101", license: "KL-06-M062101", phone: "9447605502" },
      { id: "KL-06-BUS-201", name: "Geetha R.", category: "Bus (KSRTC)", vehicleNo: "KL-06-B-2201", license: "KL-06-D062202", phone: "9487606602" },
      { id: "KL-06-AMB-201", name: "Leena Joseph", category: "Ambulance (Private)", vehicleNo: "KL-06-AMB-2301", license: "KL-06-E062203", phone: "9947607702" },
      { id: "KL-06-MTN-201", name: "Vijay P.", category: "Medical transport", vehicleNo: "KL-06-MT-2401", license: "KL-06-F062204", phone: "9633608802" },
    ]
  },
  {
    district: "Idukki",
    taluk: "Devikulam",
    drivers: [
      { id: "KL-68-AUTO-301", name: "Thomas E.", category: "Auto‑rickshaw", vehicleNo: "KL-68-A-3101", license: "KL-68-M683101", phone: "9447609903" },
      { id: "KL-68-BUS-301", name: "Priya K.", category: "Bus (Private)", vehicleNo: "KL-68-B-3201", license: "KL-68-D683202", phone: "9487610003" },
      { id: "KL-68-AMB-301", name: "Annamma", category: "Ambulance (Private)", vehicleNo: "KL-68-AMB-3301", license: "KL-68-E683203", phone: "9947611103" },
      { id: "KL-68-MTB-301", name: "Kamal", category: "Medical transport bike", vehicleNo: "KL-68-MTB-3401", license: "KL-68-F683204", phone: "9633612203" },
    ]
  },
  {
    district: "Idukki",
    taluk: "Udumbanchola",
    drivers: [
      { id: "KL-69-AUTO-401", name: "Ajith Kochu", category: "Auto‑rickshaw", vehicleNo: "KL-69-A-4101", license: "KL-69-M694101", phone: "9447613304" },
      { id: "KL-69-BUS-401", name: "Rema", category: "Bus (KSRTC)", vehicleNo: "KL-69-B-4201", license: "KL-69-D694202", phone: "9487614404" },
      { id: "KL-69-AMB-401", name: "Shiny", category: "Ambulance (108)", vehicleNo: "KL-69-AMB-4301", license: "KL-69-E694203", phone: "9947615504" },
      { id: "KL-69-TAXI-401", name: "Ramesh", category: "Taxi (aggregator)", vehicleNo: "KL-69-T-4401", license: "KL-69-G694204", phone: "9847616604" },
    ]
  },
  {
    district: "Idukki",
    taluk: "Peerumade",
    drivers: [
      { id: "KL-37-AUTO-501", name: "Vinod", category: "Auto‑rickshaw", vehicleNo: "KL-37-A-5101", license: "KL-37-M375101", phone: "9447617705" },
      { id: "KL-37-BUS-501", name: "Nandini", category: "Bus (Private)", vehicleNo: "KL-37-B-5201", license: "KL-37-D375202", phone: "9487618805" },
      { id: "KL-37-AMB-501", name: "Kannan", category: "Ambulance (108)", vehicleNo: "KL-37-AMB-5301", license: "KL-37-E375203", phone: "9947619905" },
      { id: "KL-37-MTB-501", name: "Neelu", category: "Medical transport bike", vehicleNo: "KL-37-MTB-5401", license: "KL-37-F375204", phone: "9633620005" },
    ]
  },
  {
    district: "Ernakulam",
    taluk: "Aluva",
    drivers: [
      { id: "KL-07-AUTO-101", name: "Arun Kumar", category: "Auto‑rickshaw", vehicleNo: "KL-07-A-1101", license: "KL-07-M071101", phone: "9447501101" },
      { id: "KL-07-BUS-101", name: "Geetha Susan", category: "Bus (Private)", vehicleNo: "KL-07-B-1201", license: "KL-07-D071202", phone: "9487502201" },
      { id: "KL-07-AMB-101", name: "Rahul Menon", category: "Ambulance (108)", vehicleNo: "KL-07-AMB-1301", license: "KL-07-E071303", phone: "9947503301" },
      { id: "KL-07-TAXI-101", name: "Priya S.", category: "Taxi (aggregator)", vehicleNo: "KL-07-T-1401", license: "KL-07-G071404", phone: "9847504401" },
    ]
  },
  {
    district: "Ernakulam",
    taluk: "Kunnathunad",
    drivers: [
      { id: "KL-17-AUTO-201", name: "Anwar", category: "Auto‑rickshaw", vehicleNo: "KL-17-A-2101", license: "KL-17-M172101", phone: "9447505502" },
      { id: "KL-17-BUS-201", name: "Nandini", category: "Bus (KSRTC)", vehicleNo: "KL-17-B-2201", license: "KL-17-D172202", phone: "9487506602" },
      { id: "KL-17-AMB-201", name: "Leena", category: "Ambulance (Private)", vehicleNo: "KL-17-AMB-2301", license: "KL-17-E172203", phone: "9947507702" },
      { id: "KL-17-MTB-201", name: "Vinu", category: "Medical transport bike", vehicleNo: "KL-17-MTB-2401", license: "KL-17-F172204", phone: "9633508802" },
    ]
  },
  {
    district: "Ernakulam",
    taluk: "Muvattupuzha",
    drivers: [
      { id: "KL-17-AUTO-301", name: "Ravi", category: "Auto‑rickshaw", vehicleNo: "KL-17-A-3101", license: "KL-17-M173101", phone: "9447509903" },
      { id: "KL-17-BUS-301", name: "Thomas", category: "Bus (Private)", vehicleNo: "KL-17-B-3201", license: "KL-17-D173202", phone: "9487510003" },
      { id: "KL-17-AMB-301", name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL-17-AMB-3301", license: "KL-17-E173203", phone: "9947511103" },
      { id: "KL-17-TAXI-301", name: "Shyam", category: "Taxi (aggregator)", vehicleNo: "KL-17-T-3401", license: "KL-17-G173204", phone: "9847512203" },
    ]
  },
  {
    district: "Ernakulam",
    taluk: "Paravur",
    drivers: [
      { id: "KL-42-AUTO-401", name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL-42-A-4101", license: "KL-42-M424101", phone: "9447513304" },
      { id: "KL-42-BUS-401", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL-42-B-4201", license: "KL-42-D424202", phone: "9487514404" },
      { id: "KL-42-AMB-401", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL-42-AMB-4301", license: "KL-42-E424203", phone: "9947515504" },
      { id: "KL-42-TAXI-401", name: "Arun", category: "Taxi (aggregator)", vehicleNo: "KL-42-T-4401", license: "KL-42-G424204", phone: "9847516604" },
    ]
  },
  {
    district: "Ernakulam",
    taluk: "Kochi",
    drivers: [
      { id: "KL-43-AUTO-501", name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL-43-A-5101", license: "KL-43-M435101", phone: "9447517705" },
      { id: "KL-43-BUS-501", name: "Anitha", category: "Bus (Private)", vehicleNo: "KL-43-B-5201", license: "KL-43-D435202", phone: "9487518805" },
      { id: "KL-43-AMB-501", name: "Kannan", category: "Ambulance (Private)", vehicleNo: "KL-43-AMB-5301", license: "KL-43-E435203", phone: "9947519905" },
      { id: "KL-43-TAXI-501", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-43-T-5401", license: "KL-43-G435204", phone: "9847520005" },
    ]
  },
  {
    district: "Ernakulam",
    taluk: "Kanayannur",
    drivers: [
      { id: "KL-07-AUTO-601", name: "Sreelatha", category: "Auto‑rickshaw", vehicleNo: "KL-07-A-6101", license: "KL-07-M076101", phone: "9447521116" },
      { id: "KL-07-BUS-601", name: "Madhu", category: "Bus (KSRTC)", vehicleNo: "KL-07-B-6201", license: "KL-07-D076202", phone: "9487522226" },
      { id: "KL-07-AMB-601", name: "Geetha", category: "Ambulance (108)", vehicleNo: "KL-07-AMB-6301", license: "KL-07-E076203", phone: "9947523336" },
      { id: "KL-07-TAXI-601", name: "Rajesh", category: "Taxi (aggregator)", vehicleNo: "KL-07-T-6401", license: "KL-07-G076204", phone: "9847524446" },
    ]
  },
  {
    district: "Ernakulam",
    taluk: "Kothamangalam",
    drivers: [
      { id: "KL-44-AUTO-701", name: "Vinod", category: "Auto‑rickshaw", vehicleNo: "KL-44-A-7101", license: "KL-44-M447101", phone: "9447525557" },
      { id: "KL-44-BUS-701", name: "Nandini", category: "Bus (KSRTC)", vehicleNo: "KL-44-B-7201", license: "KL-44-D447202", phone: "9487526667" },
      { id: "KL-44-AMB-701", name: "Kannan", category: "Ambulance (108)", vehicleNo: "KL-44-AMB-7301", license: "KL-44-E447203", phone: "9947527777" },
      { id: "KL-44-TAXI-701", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-44-T-7401", license: "KL-44-G447204", phone: "9847528887" },
    ]
  },
  {
    district: "Thrissur",
    taluk: "Chavakkad",
    drivers: [
      { id: "KL-46-AUTO-101", name: "Rahul Kumar", category: "Auto‑rickshaw", vehicleNo: "KL-46-A-1101", license: "KL-46-M461101", phone: "9447801101" },
      { id: "KL-46-BUS-101", name: "Priya Susan", category: "Bus (Private)", vehicleNo: "KL-46-B-1201", license: "KL-46-D461202", phone: "9487802201" },
      { id: "KL-46-AMB-101", name: "Asha Menon", category: "Ambulance (108)", vehicleNo: "KL-46-AMB-1301", license: "KL-46-E461303", phone: "9947803301" },
      { id: "KL-46-TAXI-101", name: "Vinod Pillai", category: "Taxi (aggregator)", vehicleNo: "KL-46-T-1401", license: "KL-46-G461404", phone: "9847804401" },
    ]
  },
  {
    district: "Thrissur",
    taluk: "Kodungallur",
    drivers: [
      { id: "KL-50-AUTO-201", name: "Anwar", category: "Auto‑rickshaw", vehicleNo: "KL-50-A-2101", license: "KL-50-M502101", phone: "9447805502" },
      { id: "KL-50-BUS-201", name: "Geetha", category: "Bus (KSRTC)", vehicleNo: "KL-50-B-2201", license: "KL-50-D502202", phone: "9487806602" },
      { id: "KL-50-AMB-201", name: "Leena", category: "Ambulance (Private)", vehicleNo: "KL-50-AMB-2301", license: "KL-50-E502203", phone: "9947807702" },
      { id: "KL-50-MTB-201", name: "Vinu", category: "Medical transport bike", vehicleNo: "KL-50-MTB-2401", license: "KL-50-F502204", phone: "9633808802" },
    ]
  },
  {
    district: "Thrissur",
    taluk: "Mukundapuram",
    drivers: [
      { id: "KL-48-AUTO-301", name: "Ravi", category: "Auto‑rickshaw", vehicleNo: "KL-48-A-3101", license: "KL-48-M483101", phone: "9447809903" },
      { id: "KL-48-BUS-301", name: "Thomas", category: "Bus (Private)", vehicleNo: "KL-48-B-3201", license: "KL-48-D483202", phone: "9487810003" },
      { id: "KL-48-AMB-301", name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL-48-AMB-3301", license: "KL-48-E483203", phone: "9947811103" },
      { id: "KL-48-TAXI-301", name: "Shyam", category: "Taxi (aggregator)", vehicleNo: "KL-48-T-3401", license: "KL-48-G483204", phone: "9847812203" },
    ]
  },
  {
    district: "Thrissur",
    taluk: "Thalappilly",
    drivers: [
      { id: "KL-46-AUTO-401", name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL-46-A-4101", license: "KL-46-M464101", phone: "9447813304" },
      { id: "KL-46-BUS-401", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL-46-B-4201", license: "KL-46-D464202", phone: "9487814404" },
      { id: "KL-46-AMB-401", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL-46-AMB-4301", license: "KL-46-E464203", phone: "9947815504" },
      { id: "KL-46-MTN-401", name: "Arun", category: "Medical transport", vehicleNo: "KL-46-MT-4401", license: "KL-46-F464204", phone: "9847816604" },
    ]
  },
  {
    district: "Thrissur",
    taluk: "Thrissur",
    drivers: [
      { id: "KL-48-AUTO-501", name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL-48-A-5101", license: "KL-48-M485101", phone: "9447817705" },
      { id: "KL-48-BUS-501", name: "Anitha", category: "Bus (Private)", vehicleNo: "KL-48-B-5201", license: "KL-48-D485202", phone: "9487818805" },
      { id: "KL-48-AMB-501", name: "Kannan", category: "Ambulance (Private)", vehicleNo: "KL-48-AMB-5301", license: "KL-48-E485203", phone: "9947819905" },
      { id: "KL-48-TAXI-501", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-48-T-5401", license: "KL-48-G485204", phone: "9847820005" },
    ]
  },
  {
    district: "Thrissur",
    taluk: "Chalakudy",
    drivers: [
      { id: "KL-47-AUTO-601", name: "Sreelatha", category: "Auto‑rickshaw", vehicleNo: "KL-47-A-6101", license: "KL-47-M476101", phone: "9447821116" },
      { id: "KL-47-BUS-601", name: "Madhu", category: "Bus (KSRTC)", vehicleNo: "KL-47-B-6201", license: "KL-47-D476202", phone: "9487822226" },
      { id: "KL-47-AMB-601", name: "Geetha", category: "Ambulance (108)", vehicleNo: "KL-47-AMB-6301", license: "KL-47-E476203", phone: "9947823336" },
      { id: "KL-47-TAXI-601", name: "Rajesh", category: "Taxi (aggregator)", vehicleNo: "KL-47-T-6401", license: "KL-47-G476204", phone: "9847824446" },
    ]
  },
  {
    district: "Palakkad",
    taluk: "Palakkad",
    drivers: [
      { id: "KL-52-AUTO-101", name: "Sunil Kumar", category: "Auto‑rickshaw", vehicleNo: "KL-52-A-1101", license: "KL-52-M521101", phone: "9447901101" },
      { id: "KL-52-BUS-101", name: "Priya Nair", category: "Bus (Private)", vehicleNo: "KL-52-B-1201", license: "KL-52-D521202", phone: "9487902201" },
      { id: "KL-52-AMB-101", name: "Rahul Joseph", category: "Ambulance (108)", vehicleNo: "KL-52-AMB-1301", license: "KL-52-E521303", phone: "9947903301" },
      { id: "KL-52-TAXI-101", name: "Leena Menon", category: "Taxi (aggregator)", vehicleNo: "KL-52-T-1401", license: "KL-52-G521404", phone: "9847904401" },
    ]
  },
  {
    district: "Palakkad",
    taluk: "Alathur",
    drivers: [
      { id: "KL-52-AUTO-201", name: "Anwar", category: "Auto‑rickshaw", vehicleNo: "KL-52-A-2101", license: "KL-52-M522101", phone: "9447905502" },
      { id: "KL-52-BUS-201", name: "Geetha", category: "Bus (KSRTC)", vehicleNo: "KL-52-B-2201", license: "KL-52-D522202", phone: "9487906602" },
      { id: "KL-52-AMB-201", name: "Leena", category: "Ambulance (Private)", vehicleNo: "KL-52-AMB-2301", license: "KL-52-E522203", phone: "9947907702" },
      { id: "KL-52-MTN-201", name: "Vinu", category: "Medical transport", vehicleNo: "KL-52-MT-2401", license: "KL-52-F522204", phone: "9633908802" },
    ]
  },
  {
    district: "Palakkad",
    taluk: "Ottappalam",
    drivers: [
      { id: "KL-52-AUTO-301", name: "Ravi", category: "Auto‑rickshaw", vehicleNo: "KL-52-A-3101", license: "KL-52-M523101", phone: "9447909903" },
      { id: "KL-52-BUS-301", name: "Thomas", category: "Bus (Private)", vehicleNo: "KL-52-B-3201", license: "KL-52-D523202", phone: "9487910003" },
      { id: "KL-52-AMB-301", name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL-52-AMB-3301", license: "KL-52-E523203", phone: "9947911103" },
      { id: "KL-52-TAXI-301", name: "Shyam", category: "Taxi (aggregator)", vehicleNo: "KL-52-T-3401", license: "KL-52-G523204", phone: "9847912203" },
    ]
  },
  {
    district: "Palakkad",
    taluk: "Mannarkkad",
    drivers: [
      { id: "KL-52-AUTO-401", name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL-52-A-4101", license: "KL-52-M524101", phone: "9447913304" },
      { id: "KL-52-BUS-401", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL-52-B-4201", license: "KL-52-D524202", phone: "9487914404" },
      { id: "KL-52-AMB-401", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL-52-AMB-4301", license: "KL-52-E524203", phone: "9947915504" },
      { id: "KL-52-TAXI-401", name: "Arun", category: "Taxi (aggregator)", vehicleNo: "KL-52-T-4401", license: "KL-52-G524204", phone: "9847916604" },
    ]
  },
  {
    district: "Palakkad",
    taluk: "Chittur",
    drivers: [
      { id: "KL-52-AUTO-501", name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL-52-A-5101", license: "KL-52-M525101", phone: "9447917705" },
      { id: "KL-52-BUS-501", name: "Anitha", category: "Bus (Private)", vehicleNo: "KL-52-B-5201", license: "KL-52-D525202", phone: "9487918805" },
      { id: "KL-52-AMB-501", name: "Kannan", category: "Ambulance (108)", vehicleNo: "KL-52-AMB-5301", license: "KL-52-E525203", phone: "9947919905" },
      { id: "KL-52-TAXI-501", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-52-T-5401", license: "KL-52-G525204", phone: "9847920005" },
    ]
  },
  {
    district: "Palakkad",
    taluk: "Pattambi",
    drivers: [ 
      { id: "KL-52-AUTO-601", name: "Sreelatha", category: "Auto‑rickshaw", vehicleNo: "KL-52-A-6101", license: "KL-52-M526101", phone: "9447921116" },
      { id: "KL-52-BUS-601", name: "Madhu", category: "Bus (KSRTC)", vehicleNo: "KL-52-B-6201", license: "KL-52-D526202", phone: "9487922226" },
      { id: "KL-52-AMB-601", name: "Geetha", category: "Ambulance (108)", vehicleNo: "KL-52-AMB-6301", license: "KL-52-E526203", phone: "9947923336" },
      { id: "KL-52-TAXI-601", name: "Rajesh", category: "Taxi (aggregator)", vehicleNo: "KL-52-T-6401", license: "KL-52-G526204", phone: "9847924446" },
    ]
  },
  {
    district: "Palakkad",
    taluk: "Attappadi",
    drivers: [
      { id: "KL-52-AUTO-701", name: "Vinod", category: "Auto‑rickshaw", vehicleNo: "KL-52-A-7101", license: "KL-52-M527101", phone: "9447925557" },
      { id: "KL-52-BUS-701", name: "Nandini", category: "Bus (KSRTC)", vehicleNo: "KL-52-B-7201", license: "KL-52-D527202", phone: "9487926667" },
      { id: "KL-52-AMB-701", name: "Kannan", category: "Ambulance (108)", vehicleNo: "KL-52-AMB-7301", license: "KL-52-E527203", phone: "9947927777" },
      { id: "KL-52-TAXI-701", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-52-T-7401", license: "KL-52-G527204", phone: "9847928887" },
    ]
  },
  {
    district: "Malappuram",
    taluk: "Eranad",
    drivers: [
      { id: "KL-53-AUTO-101", name: "Manjeri Kumar", category: "Auto‑rickshaw", vehicleNo: "KL-53-A-1101", license: "KL-53-M531101", phone: "9447801101" },
      { id: "KL-53-BUS-101", name: "Malappuram Susan", category: "Bus (Private)", vehicleNo: "KL-53-B-1201", license: "KL-53-D531202", phone: "9487802201" },
      { id: "KL-53-AMB-101", name: "Rahul", category: "Ambulance (108)", vehicleNo: "KL-53-AMB-1301", license: "KL-53-E531303", phone: "9947803301" },
      { id: "KL-53-TAXI-101", name: "Leena", category: "Taxi (aggregator)", vehicleNo: "KL-53-T-1401", license: "KL-53-G531404", phone: "9847804401" },
    ]
  },
  {
    district: "Malappuram",
    taluk: "Perinthalmanna",
    drivers: [
      { id: "KL-53-AUTO-201", name: "Angadippuram Anwar", category: "Auto‑rickshaw", vehicleNo: "KL-53-A-2101", license: "KL-53-M532101", phone: "9447805502" },
      { id: "KL-53-BUS-201", name: "Geetha", category: "Bus (KSRTC)", vehicleNo: "KL-53-B-2201", license: "KL-53-D532202", phone: "9487806602" },
      { id: "KL-53-AMB-201", name: "Leena", category: "Ambulance (Private)", vehicleNo: "KL-53-AMB-2301", license: "KL-53-E532203", phone: "9947807702" },
      { id: "KL-53-TAXI-201", name: "Vinu", category: "Medical transport bike", vehicleNo: "KL-53-MTB-2401", license: "KL-53-F532204", phone: "9633808802" },
    ]
  },
  {
    district: "Malappuram",
    taluk: "Tirur",
    drivers: [
      { id: "KL-55-AUTO-301", name: "Tirur Ravi", category: "Auto‑rickshaw", vehicleNo: "KL-55-A-3101", license: "KL-55-M553101", phone: "9447809903" },
      { id: "KL-55-BUS-301", name: "Thomas", category: "Bus (Private)", vehicleNo: "KL-55-B-3201", license: "KL-55-D553202", phone: "9487810003" },
      { id: "KL-55-AMB-301", name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL-55-AMB-3301", license: "KL-55-E553203", phone: "9947811103" },
      { id: "KL-55-TAXI-301", name: "Shyam", category: "Taxi (aggregator)", vehicleNo: "KL-55-T-3401", license: "KL-55-G553204", phone: "9847812203" },
    ]
  },
  {
    district: "Malappuram",
    taluk: "Tirurangadi",
    drivers: [
      { id: "KL-55-AUTO-401", name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL-55-A-4101", license: "KL-55-M554101", phone: "9447813304" },
      { id: "KL-55-BUS-401", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL-55-B-4201", license: "KL-55-D554202", phone: "9487814404" },
      { id: "KL-55-AMB-401", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL-55-AMB-4301", license: "KL-55-E554203", phone: "9947815504" },
      { id: "KL-55-TAXI-401", name: "Arun", category: "Taxi (aggregator)", vehicleNo: "KL-55-T-4401", license: "KL-55-G554204", phone: "9847816604" },
    ]
  },
  {
    district: "Malappuram",
    taluk: "Ponnani",
    drivers: [
      { id: "KL-54-AUTO-501", name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL-54-A-5101", license: "KL-54-M545101", phone: "9447817705" },
      { id: "KL-54-BUS-501", name: "Anitha", category: "Bus (KSRTC)", vehicleNo: "KL-54-B-5201", license: "KL-54-D545202", phone: "9487818805" },
      { id: "KL-54-AMB-501", name: "Kannan", category: "Ambulance (108)", vehicleNo: "KL-54-AMB-5301", license: "KL-54-E545203", phone: "9947819905" },
      { id: "KL-54-TAXI-501", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-54-T-5401", license: "KL-54-G545204", phone: "9847820005" },
    ]
  },
  {
    district: "Malappuram",
    taluk: "Nilambur",
    drivers: [
      { id: "KL-28-AUTO-601", name: "Vinod", category: "Auto‑rickshaw", vehicleNo: "KL-28-A-6101", license: "KL-28-M285101", phone: "9447821116" },
      { id: "KL-28-BUS-601", name: "Nandini", category: "Bus (Private)", vehicleNo: "KL-28-B-6201", license: "KL-28-D285202", phone: "9487822226" },
      { id: "KL-28-AMB-601", name: "Kannan", category: "Ambulance (108)", vehicleNo: "KL-28-AMB-6301", license: "KL-28-E285203", phone: "9947823336" },
      { id: "KL-28-TAXI-601", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL-28-T-6401", license: "KL-28-G285204", phone: "9847824446" },
    ]
  },
  {
    district: "Malappuram",
    taluk: "Kondotty",
    drivers: [
      { id: "KL-11-AUTO-701", name: "Sreelatha", category: "Auto‑rickshaw", vehicleNo: "KL-11-A-7101", license: "KL-11-M119101", phone: "9447825557" },
      { id: "KL-11-BUS-701", name: "Madhu", category: "Bus (KSRTC)", vehicleNo: "KL-11-B-7201", license: "KL-11-D119202", phone: "9487826667" },
      { id: "KL-11-AMB-701", name: "Geetha", category: "Ambulance (108)", vehicleNo: "KL-11-AMB-7301", license: "KL-11-E119203", phone: "9947827777" },
      { id: "KL-11-TAXI-701", name: "Rajesh", category: "Taxi (aggregator)", vehicleNo: "KL-11-T-7401", license: "KL-11-G119204", phone: "9847828887" },
    ]
  },
  {
    district: "Kozhikode",
    taluk: "Kozhikode",
    drivers: [
      { id: "KL-11-AUTO-101", name: "Azeez Khan", category: "Auto‑rickshaw", vehicleNo: "KL-11-A-1101", license: "KL-11-M111101", phone: "9447601101" },
      { id: "KL-11-BUS-101", name: "Anitha", category: "Bus (Private)", vehicleNo: "KL-11-B-1201", license: "KL-11-D111202", phone: "9487602201" },
      { id: "KL-11-AMB-101", name: "Kannan", category: "Ambulance (108)", vehicleNo: "KL-11-AMB-1301", license: "KL-11-E111303", phone: "9947603301" },
      { id: "KL-11-TAXI-101", name: "Leena", category: "Taxi (aggregator)", vehicleNo: "KL-11-T-1401", license: "KL-11-G111404", phone: "9847604401" },
    ]
  },
  {
    district: "Kozhikode",
    taluk: "Koyilandy",
    drivers: [
      { id: "KL-56-AUTO-201", name: "Rahul Nair", category: "Auto‑rickshaw", vehicleNo: "KL-56-A-2101", license: "KL-56-M562101", phone: "9447605502" },
      { id: "KL-56-BUS-201", name: "Geetha", category: "Bus (KSRTC)", vehicleNo: "KL-56-B-2201", license: "KL-56-D562202", phone: "9487606602" },
      { id: "KL-56-AMB-201", name: "Shalini", category: "Ambulance (Private)", vehicleNo: "KL-56-AMB-2301", license: "KL-56-E562203", phone: "9947607702" },
      { id: "KL-56-MTB-201", name: "Vinu", category: "Medical transport bike", vehicleNo: "KL-56-MTB-2401", license: "KL-56-F562204", phone: "9633808802" },
    ]
  },
  {
    district: "Kozhikode",
    taluk: "Vatakara",
    drivers: [
      { id: "KL-18-AUTO-301", name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL-18-A-3101", license: "KL-18-M183101", phone: "9447609903" },
      { id: "KL-18-BUS-301", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL-18-B-3201", license: "KL-18-D183202", phone: "9487610003" },
      { id: "KL-18-AMB-301", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL-18-AMB-3301", license: "KL-18-E183203", phone: "9947611103" },
      { id: "KL-18-TAXI-301", name: "Arun", category: "Taxi (aggregator)", vehicleNo: "KL-18-T-3401", license: "KL-18-G183204", phone: "9847612203" },
    ]
  },
  {
    district: "Kozhikode",
    taluk: "Thamarassery",
    drivers: [
      { id: "KL-34-AUTO-401", name: "Thomas", category: "Auto‑rickshaw", vehicleNo: "KL-34-A-4101", license: "KL-34-M343101", phone: "9447613304" },
      { id: "KL-34-BUS-401", name: "Anju", category: "Bus (Private)", vehicleNo: "KL-34-B-4201", license: "KL-34-D343202", phone: "9487614404" },
      { id: "KL-34-AMB-401", name: "Shyam", category: "Ambulance (Private)", vehicleNo: "KL-34-AMB-4301", license: "KL-34-E343203", phone: "9947615504" },
      { id: "KL-34-MTN-401", name: "Arun", category: "Medical transport", vehicleNo: "KL-34-MT-4401", license: "KL-34-F343204", phone: "9847616604" },
    ]
  },
  {
    district: "Wayanad",
    taluk: "Mananthavady",
    drivers: [
      { id: "KL-XX-AUTO-101", name: "Manu P.", category: "Auto‑rickshaw", vehicleNo: "KL‑XX‑A‑1101", license: "KL‑XX‑MXX1101", phone: "9447201101" },
      { id: "KL-XX-BUS-101", name: "Asha K.", category: "Bus (Private)", vehicleNo: "KL‑XX‑B‑1201", license: "KL‑XX‑DXX1201", phone: "9487202201" },
      { id: "KL-XX-AMB-101", name: "Ravi K.", category: "Ambulance (108)", vehicleNo: "KL‑XX‑AMB‑1301", license: "KL‑XX‑EXX1301", phone: "9947203301" },
      { id: "KL-XX-TAXI-101", name: "Leena M.", category: "Taxi (aggregator)", vehicleNo: "KL‑XX‑T‑1401", license: "KL‑XX‑GXX1401", phone: "9847204401" },
    ]
  },
  {
    district: "Wayanad",
    taluk: "Sulthan Bathery",
    drivers: [
      { id: "KL-XX-AUTO-201", name: "Ansar P.", category: "Auto‑rickshaw", vehicleNo: "KL‑XX‑A‑2101", license: "KL‑XX‑MXX2101", phone: "9447205502" },
      { id: "KL-XX-BUS-201", name: "Geetha V.", category: "Bus (KSRTC)", vehicleNo: "KL‑XX‑B‑2201", license: "KL‑XX‑DXX2201", phone: "9487206602" },
      { id: "KL-XX-AMB-201", name: "Shalini J.", category: "Ambulance (Private)", vehicleNo: "KL‑XX‑AMB‑2301", license: "KL‑XX‑EXX2301", phone: "9947207702" },
      { id: "KL-XX-MTB-201", name: "Vinu K.", category: "Medical transport bike", vehicleNo: "KL‑XX‑MTB‑2401", license: "KL‑XX‑FXX2401", phone: "9637208802" },
    ]
  },
  {
    district: "Wayanad",
    taluk: "Vythiri",
    drivers: [
      { id: "KL-XX-AUTO-301", name: "Sajith B.", category: "Auto‑rickshaw", vehicleNo: "KL‑XX‑A‑3101", license: "KL‑XX‑MXX3101", phone: "9447209903" },
      { id: "KL-XX-BUS-301", name: "Priya T.", category: "Bus (Private)", vehicleNo: "KL‑XX‑B‑3201", license: "KL‑XX‑DXX3201", phone: "9487210003" },
      { id: "KL-XX-AMB-301", name: "Leela S.", category: "Ambulance (108)", vehicleNo: "KL‑XX‑AMB‑3301", license: "KL‑XX‑EXX3301", phone: "9947211103" },
      { id: "KL-XX-TAXI-301", name: "Arun N.", category: "Taxi (aggregator)", vehicleNo: "KL‑XX‑T‑3401", license: "KL‑XX‑GXX3401", phone: "9847212203" },
    ]
  },
  {
    district: "Kannur",
    taluk: "Taliparamba",
    drivers: [
      { id: "KL‑13‑AUTO‑101", name: "Akhil Nair", category: "Auto‑rickshaw", vehicleNo: "KL‑13‑A‑1101", license: "KL‑13‑M131101", phone: "9447801101" },
      { id: "KL‑13‑BUS‑101", name: "Geetha P.", category: "Bus (KSRTC)", vehicleNo: "KL‑13‑B‑1201", license: "KL‑13‑D131202", phone: "9487802201" },
      { id: "KL‑13‑AMB‑101", name: "Rahul Kumar", category: "Ambulance (108)", vehicleNo: "KL‑13‑AMB‑1301", license: "KL‑13‑E131303", phone: "9947803301" },
      { id: "KL‑13‑TAXI‑101", name: "Leena Mathew", category: "Taxi (aggregator)", vehicleNo: "KL‑13‑T‑1401", license: "KL‑13‑G131404", phone: "9847804401" },
    ]
  },
  {
    district: "Kannur",
    taluk: "Kannur",
    drivers: [
      { id: "KL‑13‑AUTO‑201", name: "Anwar C.", category: "Auto‑rickshaw", vehicleNo: "KL‑13‑A‑2101", license: "KL‑13‑M132101", phone: "9447805502" },
      { id: "KL‑13‑BUS‑201", name: "Nandini R.", category: "Bus (Private)", vehicleNo: "KL‑13‑B‑2201", license: "KL‑13‑D132202", phone: "9487806602" },
      { id: "KL‑13‑AMB‑201", name: "Leena", category: "Ambulance (Private)", vehicleNo: "KL‑13‑AMB‑2301", license: "KL‑13‑E132203", phone: "9947807702" },
      { id: "KL‑13‑MTB‑201", name: "Vinu", category: "Medical transport bike", vehicleNo: "KL‑13‑MTB‑2401", license: "KL‑13‑F132204", phone: "9633808802" },
    ]
  },
  {
    district: "Kannur",
    taluk: "Thalassery",
    drivers: [
      { id: "KL‑14‑AUTO‑301", name: "Ravi C.", category: "Auto‑rickshaw", vehicleNo: "KL‑14‑A‑3101", license: "KL‑14‑M143101", phone: "9447809903" },
      { id: "KL‑14‑BUS‑301", name: "Thomas V.", category: "Bus (Private)", vehicleNo: "KL‑14‑B‑3201", license: "KL‑14‑D143202", phone: "9487810003" },
      { id: "KL‑14‑AMB‑301", name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL‑14‑AMB‑3301", license: "KL‑14‑E143203", phone: "9947811103" },
      { id: "KL‑14‑TAXI‑301", name: "Shyam", category: "Taxi (aggregator)", vehicleNo: "KL‑14‑T‑3401", license: "KL‑14‑G143204", phone: "9847812203" },
    ]
  },
  {
    district: "Kannur",
    taluk: "Iritty",
    drivers: [
      { id: "KL‑15‑AUTO‑401", name: "Sajith Kumar", category: "Auto‑rickshaw", vehicleNo: "KL‑15‑A‑4101", license: "KL‑15‑M154101", phone: "9447813304" },
      { id: "KL‑15‑BUS‑401", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL‑15‑B‑4201", license: "KL‑15‑D154202", phone: "9487814404" },
      { id: "KL‑15‑AMB‑401", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL‑15‑AMB‑4301", license: "KL‑15‑E154203", phone: "9947815504" },
      { id: "KL‑15‑MTB‑401", name: "Arun", category: "Medical transport bike", vehicleNo: "KL‑15‑MTB‑4401", license: "KL‑15‑F154204", phone: "9847816604" },
    ]
  },
  {
    district: "Kannur",
    taluk: "Payyanur",
    drivers: [
      { id: "KL‑59‑AUTO‑501", name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL‑59‑A‑5101", license: "KL‑59‑M595101", phone: "9447817705" },
      { id: "KL‑59‑BUS‑501", name: "Anitha", category: "Bus (KSRTC)", vehicleNo: "KL‑59‑B‑5201", license: "KL‑59‑D595202", phone: "9487818805" },
      { id: "KL‑59‑AMB‑501", name: "Kannan", category: "Ambulance (108)", vehicleNo: "KL‑59‑AMB‑5301", license: "KL‑59‑E595203", phone: "9947819905" },
      { id: "KL‑59‑TAXI‑501", name: "Neelu", category: "Taxi (aggregator)", vehicleNo: "KL‑59‑T‑5401", license: "KL‑59‑G595204", phone: "9847820005" },
    ]
  },
  {
    district: "Kasaragod",
    taluk: "Kasaragod",
    drivers: [
      { id: "KL-14-AUTO-101", name: "Sapna Kumar", category: "Auto‑rickshaw", vehicleNo: "KL-14-A-1101", license: "KL-14-M141101", phone: "9447001101" },
      { id: "KL-14-BUS-101", name: "Anil Menon", category: "Bus (Private)", vehicleNo: "KL-14-B-1201", license: "KL-14-D141202", phone: "9487002201" },
      { id: "KL-14-AMB-101", name: "Leela Nair", category: "Ambulance (108)", vehicleNo: "KL-14-AMB-1301", license: "KL-14-E141303", phone: "9947003301" },
      { id: "KL-14-TAXI-101", name: "Rahul Pillai", category: "Taxi (aggregator)", vehicleNo: "KL-14-T-1401", license: "KL-14-G141404", phone: "9847004401" },
    ]
  },
  {
    district: "Kasaragod",
    taluk: "Hosdurg",
    drivers: [
      { id: "KL-14-AUTO-201", name: "Geetha P.", category: "Auto‑rickshaw", vehicleNo: "KL-14-A-2101", license: "KL-14-M142101", phone: "9447005502" },
      { id: "KL-14-BUS-201", name: "Nandini R.", category: "Bus (KSRTC)", vehicleNo: "KL-14-B-2201", license: "KL-14-D142202", phone: "9487006602" },
      { id: "KL-14-AMB-201", name: "Rohini", category: "Ambulance (Private)", vehicleNo: "KL-14-AMB-2301", license: "KL-14-E142203", phone: "9947007702" },
      { id: "KL-14-MTB-201", name: "Vinu", category: "Medical transport bike", vehicleNo: "KL-14-MTB-2401", license: "KL-14-F142204", phone: "9633008802" },
    ]
  },
  {
    district: "Kasaragod",
    taluk: "Manjeshwaram",
    drivers: [
      { id: "KL-14-AUTO-301", name: "Sajith", category: "Auto‑rickshaw", vehicleNo: "KL-14-A-3101", license: "KL-14-M143101", phone: "9447009903" },
      { id: "KL-14-BUS-301", name: "Thomas V.", category: "Bus (Private)", vehicleNo: "KL-14-B-3201", license: "KL-14-D143202", phone: "9487010003" },
      { id: "KL-14-AMB-301", name: "Anju", category: "Ambulance (Private)", vehicleNo: "KL-14-AMB-3301", license: "KL-14-E143203", phone: "9947011103" },
      { id: "KL-14-TAXI-301", name: "Shyam", category: "Taxi (aggregator)", vehicleNo: "KL-14-T-3401", license: "KL-14-G143204", phone: "9847012203" },
    ]
  },
  {
    district: "Kasaragod",
    taluk: "Vellarikundu",
    drivers: [
      { id: "KL-79-AUTO-401", name: "Faisal", category: "Auto‑rickshaw", vehicleNo: "KL-79-A-4101", license: "KL-79-M793101", phone: "9447013304" },
      { id: "KL-79-BUS-401", name: "Priya", category: "Bus (KSRTC)", vehicleNo: "KL-79-B-4201", license: "KL-79-D793202", phone: "9487014404" },
      { id: "KL-79-AMB-401", name: "Leela", category: "Ambulance (108)", vehicleNo: "KL-79-AMB-4301", license: "KL-79-E793203", phone: "9947015504" },
      { id: "KL-79-TAXI-401", name: "Arun", category: "Taxi (aggregator)", vehicleNo: "KL-79-T-4401", license: "KL-79-G793204", phone: "9847016604" },
    ]
  }
];

export const shopsByTaluk = [
  {
    taluk: "Thiruvananthapuram",
    shops: [
        hotel1,
      "Chalai Market (Chala Bazaar) – spices, textiles, gold, general goods",
      "Palayam Market – vegetable, fish stalls & apparel shops",
      "Saphalyam complex (near East Fort) – clothes, accessories, stationery"
    ]
  },
  {
    taluk: "Nedumangad",
    shops: [
      "Nedumangad town central market – hill spices (pepper, cardamom)",
      "Wholesale vegetable and rubber product outlets",
    ]
  },
  {
    taluk: "Chirayinkeezhu",
    shops: [
      "Attingal town cloth & textile shops",
      "Local weekly chantha (market) for groceries & apparel"
    ]
  },
  {
    taluk: "Kattakada",
    shops: [
      "Kattakada town main street – general stores, groceries, textiles",
      "Handloom & rubber product outlets near tehsil office"
    ]
  },
  {
    taluk: "Neyyattinkara",
    shops: [
      "Neyyattinkara town market – Balaramapuram handloom sarees",
      "Local food shops (e.g. puttu-kadala at junctions)",
      "Automobile and hardware stores near town centre"
    ]
  },
  {
    taluk: "Varkala",
    shops: [
      "Varkala beach shopping street – souvenirs, beachwear, snacks",
      "Local spice and general stores near Varkala cliff / temple"
    ]
  },
  {
    taluk: "Kollam",
    shops: [
      "Downtown Big Bazaar / Chamakada – spice, rice & cloth wholesale market",
      "Kochupilamoodu cashew & export trade hubs",
      "Kavanad shopping stretch – vehicle showrooms, grocery & general stores"
    ]
  },
  {
    taluk: "Karunagappally",
    shops: [
      "Karunagappally town local markets – fish, textiles & general stores",
      "Clappana coastal market – seasonal food & seafood outlets"
    ]
  },
  {
    taluk: "Kunnathur",
    shops: [
      "Sasthamkotta fabric & coir product stores",
      "Sooranad weekly market – vegetables & local produce"
    ]
  },
  {
    taluk: "Kottarakkara",
    shops: [
      "Kottarakkara town textile & rubber goods shops",
      "Vettikkavala local markets along main road"
    ]
  },
  {
    taluk: "Pathanapuram",
    shops: [
      "Pathanapuram central market – hill spices, rubber product wholesalers",
      "Pattazhy town shops – local crafts & produce"
    ]
  },
  {
    taluk: "Punalur",
    shops: [
      "Punalur town grocery, textile & appliance shops",
      "Anchal / Thenmala belt market – daily produce & snack vendors"
    ]
  },
  {
    taluk: "Thiruvalla",
    shops: [
      "Thiruvalla town main street – clothing, banks and Reliance / Max / Zudio outlets",
      "Maramon church‑area shops – food stalls & local handicrafts",
      "Kadapra / Niranam outlets – spice shops and local saree stores"
    ]
  },
  {
    taluk: "Mallappally",
    shops: [
      "Mallappally town central market – spices, hill produce & rubber goods",
      "Perumpetty weekly chantha – fresh vegetables, fish stalls"
    ]
  },
  {
    taluk: "Ranni",
    shops: [
      "Ranni town Ittiyappara market – hill spices and general retailers",
      "Vadasserikkara shops along the bypass road"
    ]
  },
  {
    taluk: "Kozhencherry",
    shops: [
      "Kozhencherry market near bus stand – local textiles & grocery outlets",
      "Aranmula craft shops – traditional Aranmula kannadi mirrors and souvenirs"
    ]
  },
  {
    taluk: "Adoor",
    shops: [
      "Adoor town commercial stretch – Max, Reliance digital, Oxygen electronics",
      "Pandalam‑Kadampanad road shops – general stores & rubber produce outlets"
    ]
  },
  {
    taluk: "Konni",
    shops: [
      "Konni town centre shops – rubber goods boutiques and bakery outlets",
      "Seethathodu local produce markets – vegetables & hill spices"
    ]
  },
   {
    taluk: "Cherthala",
    shops: [
      "Cherthala town market – fish, cashew & clothes",
      "Arookutty weaving and coastal grocery stores"
    ]
  },
  {
    taluk: "Ambalappuzha",
    shops: [
      "Ambalappuzha central bazaar – spice and temple souvenir shops",
      "Kalavoor coir and handicraft outlets"
    ]
  },
  {
    taluk: "Kuttanad",
    shops: [
      "Champakulam — coir and local craft stalls",
      "Edathua / Nedumudi villages – rice & banana wholesale markets"
    ]
  },
  {
    taluk: "Karthikappally",
    shops: [
      "Haripad Hantex handloom store",
      "Kayamkulam town textile & fish market"
    ]
  },
  {
    taluk: "Chengannur",
    shops: [
      "Chengannur market – fresh produce & grocery",
      "Mannar craft stalls & coconut shops"
    ]
  },
  {
    taluk: "Mavelikkara",
    shops: [
      "Mavelikkara town – rubber product stores & garment shops",
      "Nooranad weekly chantha – local produce"
    ]
  },
  {
    taluk: "Changanacherry",
    shops: [
      "Changanacherry main street – clothing, spice & grocery stores",
      "Market near KCR church – local produce & general goods"
    ]
  },
  {
    taluk: "Kanjirappally",
    shops: [
      "Kanjirappally town shops – rubber product outlets & textile stores",
      "Ponkunnam local market – roadside fruit & vegetable stalls"
    ]
  },
  {
    taluk: "Kottayam",
    shops: [
      "GT Road supermarkets — Sulabha, Sylcon, Stop & Shop, Deepa Supermarket" ,
      "Clay Art Cafe & Kumarakom Craft Museum (art & handicrafts)" ,
      "Mozart Art Gallery & Kerala Album Art Gallery (art stores)" ,
      "Unison Interiors (furniture & décor)" 
    ]
  },
  {
    taluk: "Meenachil",
    shops: [
      "Pala market – bookshops & stationery stores",
      "Ettumanoor Hantex – handloom & textiles",
      "Local Cochin Road shops – groceries & general stores"
    ]
  },
  {
    taluk: "Vaikom",
    shops: [
      "Vaikom Hantex outlet – handloom garments",
      "Vaikom town – general stores & cashew sellers"
    ]
  },
  {
    taluk: "Thodupuzha",
    shops: [
      "Thodupuzha town market — groceries, spices & general stores",
      "Elappally spice shops & local produce outlets"
    ]
  },
  {
    taluk: "Idukki",
    shops: [
      "Idukki town centre — rubber product stores & vegetable stalls",
      "Kattappana shops — cardamom, pepper & essentials"
    ]
  },
  {
    taluk: "Devikulam",
    shops: [
      "Munnar town shopping – Munnar bazaar, spice shops, tea outlets",
      "Marayoor craft shops & honey vendors"
    ]
  },
  {
    taluk: "Udumbanchola",
    shops: [
      "Nedumkandam market — hill spices (pepper/cardamom) & grocery",
      "Rajakkad / Vandiperiyar roadside produce markets"
    ]
  },
  {
    taluk: "Peerumade",
    shops: [
      "Peerumade town market — spices, local handicrafts & groceries",
      "Vagamon hill market — upland tea, honey & souvenirs"
    ]
  },
  {
    taluk: "Aluva",
    shops: [
      "Aluva town central market – spices, textiles, street food",
      "Pulinchodu cloth & general stores along River Road"
    ]
  },
  {
    taluk: "Kunnathunad",
    shops: [
      "Perumbavoor town market – wholesale garments & hardware",
      "Vengola textile shops along Main Road"
    ]
  },
  {
    taluk: "Muvattupuzha",
    shops: [
      "Muvattupuzha municipal market – fruits, spices & rubber products",
      "Piravom and Koothattukulam roadside cloth & grocery outlets"
    ]
  },
  {
    taluk: "Paravur",
    shops: [
      "North Paravur Bazaar – traditional spice & textile shops",
      "Chendamangalam handloom outlets & coir product stores"
    ]
  },
  {
    taluk: "Kochi",
    shops: [
      "Broadway (Ernakulam Market area) – affordable clothes, spices, stationery, electronics" ,
      "Market Road / Jew Street – garments, accessories, budget buys" 
    ]
  },
  {
    taluk: "Kanayannur",
    shops: [
      "Nellikuzhi furniture showrooms & hardwood crafts",
      "Vyttila / Kadavanthra fashion streets – malls & boutiques"
    ]
  },
  {
    taluk: "Kothamangalam",
    shops: [
      "Kothamangalam town shops – textiles, rubber, daily groceries",
      "Neriamangalam / Kallepally area markets for local produce"
    ]
  },
  {
    taluk: "Chavakkad",
    shops: [
      "Chavakkad central market – fish, rice & textiles",
      "Local food & spice shops near town centre"
    ]
  },
  {
    taluk: "Kodungallur",
    shops: [
      "Kodungallur market street – seafood, general stores",
      "Local artifacts & temple souvenirs by waterfront"
    ]
  },
  {
    taluk: "Mukundapuram",
    shops: [
      "Irinjalakuda town shops – silk textiles & groceries",
      "Kuthampully weaving centre – traditional handloom sarees" 
    ]
  },
  {
    taluk: "Thalappilly",
    shops: [
      "Wadakkanchery weekly market – spices, textiles & groceries",
      "Local cloth shops along Main Road"
    ]
  },
  {
    taluk: "Thrissur",
    shops: [
      "Swaraj Round / M.O. Road – textile boutiques, jewelry, grocery & silks" ,
      "Hill city malls: Hi‑Lite Mall, Mall of Joy, Selex, Sobha City Mall, City Centre, Centrepoint" 
    ]
  },
  {
    taluk: "Chalakudy",
    shops: [
      "Chalakudy town little bazaar – local spices & coir crafts",
      "Chendamangalam handloom showrooms & coir outlets"
    ]
  },
  {
    taluk: "Kunnamkulam",
    shops: [
      "Kunnamkulam town shops – wholesale garments, books & general stores",
      "Local brass‑ware and all‑purpose bazaar stalls"
    ]
  },
  {
    taluk: "Palakkad",
    shops: [
      "Valiyangadi (Big Bazaar / Market Road) – wholesale spices, rice, cloth",
      "Melamuri Junction vegetable market – gateway to Big Bazaar area",
      "Zudio & Max stores along College Road for affordable clothing",
      "Grand Footwear & Metro near Sultanpet for quality shoes"
    ]
  },
  {
    taluk: "Chittur",
    shops: [
      "Kollengode weekly market – fresh vegetables & groceries",
      "Chittur town shops – coir products, textiles & general items"
    ]
  },
  {
    taluk: "Alathur",
    shops: [
      "Alathur town central market – spices & rubber produce",
      "Mathur / Mangalam Dam textile and grocery shops"
    ]
  },
  {
    taluk: "Mannarkkad",
    shops: [
      "Vaniyamkulam livestock and grain trading ground – chanda & produce",
      "Mannarkkad town fabric & roadside small general stores"
    ]
  },
  {
    taluk: "Ottappalam",
    shops: [
      "Ottappalam town Market Road – second-hand & new clothes, spices",
      "Shornur nearby shops – ceramics, hardware & grocery outlets"
    ]
  },
  {
    taluk: "Pattambi",
    shops: [
      "Pattambi town shops – fabric stores & local general goods",
      "Weekly chantha markets & spice traders along main road"
    ]
  },
  {
    taluk: "Attappadi",
    shops: [
      "Agali / Attappadi tribal markets – medicinal plants, hill produce",
      "Local weekly produce markets in tribal settlements"
    ]
  },
  {
    taluk: "Eranad",
    shops: [
      "Manjeri town market – textiles, small electronics & groceries",
      "Malappuram central bazaar – spices, stationery & mobile accessories"
    ]
  },
  {
    taluk: "Perinthalmanna",
    shops: [
      "Perinthalmanna main street – garment outlets & jewellery shops",
      "Angadippuram spice stores & gold showrooms"
    ]
  },
  {
    taluk: "Tirur",
    shops: [
      "Tirur K.M. Road – textile & book shops",
      "English Colours & Emmy Designs on Tanur Road"
    ]
  },
  {
    taluk: "Tirurangadi",
    shops: [
      "Tirurangadi town centre – general stores & food stalls",
      "Moonniyur bazaar – weekly market for groceries & apparel"
    ]
  },
  {
    taluk: "Ponnani",
    shops: [
      "Emirates Mall Edappal – modern retail mall",
      "Ponnani beach road shops – seafood, handicrafts & groceries"
    ]
  },
  {
    taluk: "Nilambur",
    shops: [
      "Nilambur town – timber & rubber good shops",
      "Edakkara commercial belt – textiles, groceries & auto spares"
    ]
  },
  {
    taluk: "Kondotty",
    shops: [
      "Kondotty market – textiles, local foods & jewellery",
      "Pallikkal Bazar – grocery, apparel & mobile shops"
    ]
  },
    {
    taluk: "Kozhikode",
    shops: [
      "S. M. Street (Mittai Theruvu) – sweets, textiles & handicrafts",
      "Broadway / Market Road – clothes, stationery, electronics & spices",
      "HiLITE Mall – major brands: Allen Solly, Zudio, Lifestyle, Mango",
      "RP Mall – Reliance Trends, PVS cinema & food court",
      "LuLu Mall Kozhikode – opened Sept 2024, multi‑cuisine food court & international brands" 
    ]
  },
  {
    taluk: "Koyilandy",
    shops: [
      "Pammy Fancy – gifts, bags, toys, footwear",
      "Minnu Fancy – ladies’ items & accessories",
      "Max Fashion outlet (near IOCL pump)"
    ]
  },
  {
    taluk: "Vatakara",
    shops: [
      "Court Road Hantex co‑op outlet – handloom fabrics & clothing",
      "Local weekly chantha – fresh groceries & apparel"
    ]
  },
  {
    taluk: "Thamarassery",
    shops: [
      "Thamarassery town textile & grocery outlets",
      "Local produce & snack markets"
    ]
  },
  {
    taluk: "Mananthavady",
    shops: [
      "Mananthavady town market – local spices, groceries & general goods",
      "Panamaram weekly chanda – vegetables & hill produce"
    ]
  },
  {
    taluk: "Sulthan Bathery",
    shops: [
      "Sulthan Bathery town centre – textiles, groceries & local handicrafts",
      "Meenangadi fish & cattle market on NH‑766"
    ]
  },
  {
    taluk: "Vythiri",
    shops: [
      "Kalpetta main shopping stretch – books, electronics, jewellery & apparel",
      "Kalpetta hypermarkets: Grand Fresh, Kannankandy Electronics, TBS Books etc."
    ]
  },
  {
    taluk: "Taliparamba",
    shops: [
      "Taliparamba central market – general stores, fabrics & local produce",
      "Thrift shops near Shoprix mall – streetwear & second‑hand items"  // community‑noted :contentReference[oaicite:3]{index=3}
    ]
  },
  {
    taluk: "Kannur",
    shops: [
      "Fort Road / South Bazar area – SupplyCo, Super Bazar, Fortlight Complex",
      "Kannur City Centre mall – Alukkas, Baskin‑Robbins, Green’s Hypermarket",
      "Retail street near railway station – handloom, fabrics & home furnishing shops"  // lead from community :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}
    ]
  },
  {
    taluk: "Thalassery",
    shops: [
      "Mukund Mall (in Thalassery) – multi-storey retail & food court",
      "Street fashion complexes behind KFC – modern streetwear & designer shops"  // user note :contentReference[oaicite:6]{index=6}
    ]
  },
  {
    taluk: "Iritty",
    shops: [
      "Iritty town market – hill spices, rubber products & general stores",
      "Kelakam outlets on Hill Highway – textiles, jewellery & hill produce"  // based on geography and commerce :contentReference[oaicite:7]{index=7}
    ]
  },
  {
    taluk: "Payyanur",
    shops: [
      "Rajadhani Super Market – modern grocery & household goods"  // mentioned for Payyanur :contentReference[oaicite:8]{index=8}
    ]
  },
  {
    taluk: "Kasaragod",
    shops: [
      "Bus‑Stand Cross Rd area – Kalyan Silks, Sulson Textiles, Planet Fashion",
      "Big Bazaar hypermarket (Square Nine / Municipal Complex)",
      "Moulavi Book Depot – stationery & books",
      "Jio Centre Kasaragod – mobiles & accessories",
      "Just Bake bakery (opposite new bus stand)",
      "Bell‑metal artifact shops for lamps & vessels (handicraft specialty)"
    ]
  },
  {
    taluk: "Hosdurg",
    shops: [
      "Kanhangad town markets – cloth, groceries",
      "Local general stores & eateries near Bekal Fort route"
    ]
  },
  {
    taluk: "Manjeshwaram",
    shops: [
      "Uppala retail stretch – noted for jewellery shops & fast‑food outlets",
      "Small street stalls selling handicrafts, spices & apparel"
    ]
  },
  {
    taluk: "Vellarikundu",
    shops: [
      "Vellarikundu town shops – textiles & groceries",
      "Panathur market stalls – hill spices & local produce"
    ]
  },
  
];

export const hospital =[  {
    taluk: "Neyyattinkara",
    hospitals: [
      {
        name: "Neyyattinkara Government Hospital",
        place: "Neyyattinkara",
        type: "Government",
        contact: "0471 222 2222",
      },
      {
        name: "CSI Mission Hospital",
        place: "Neyyattinkara",
        type: "Private",
        contact: "0471 222 2030",
      },
    ],
  },
  {
    taluk: "Kattakada",
    hospitals: [
      {
        name: "Taluk Hospital Kattakada",
        place: "Kattakada",
        type: "Government",
        contact: "0471 229 8223",
      },
      {
        name: "Sree Ramakrishna Hospital",
        place: "Kattakada",
        type: "Private",
        contact: "0471 229 0145",
      },
    ],
  },
  {
    taluk: "Thiruvananthapuram",
    hospitals: [
      {
        name: "Government Medical College",
        place: "Medical College",
        type: "Government",
        contact: "0471 252 8300",
      },
      {
        name: "KIMSHEALTH Trivandrum",
        place: "Anayara",
        type: "Private",
        contact: "0471 304 1000",
      },
      {
        name: "Sree Chitra Tirunal Institute",
        place: "Medical College",
        type: "Autonomous",
        contact: "0471 252 4200",
      },
    ],
  },
  {
    taluk: "Nedumangad",
    hospitals: [
      {
        name: "Nedumangad District Hospital",
        place: "Nedumangad",
        type: "Government",
        contact: "0472 280 0444",
      },
      {
        name: "Mahatma Gandhi Memorial Hospital",
        place: "Nedumangad",
        type: "Private",
        contact: "0472 280 0321",
      },
    ],
  },
  {
    taluk: "Chirayinkeezhu",
    hospitals: [
      {
        name: "Taluk Hospital Chirayinkeezhu",
        place: "Chirayinkeezhu",
        type: "Government",
        contact: "0470 262 6233",
      },
      {
        name: "Bless Hospital",
        place: "Chirayinkeezhu",
        type: "Private",
        contact: "0470 262 8811",
      },
    ],
  },
  {
    taluk: "Varkala",
    hospitals: [
      {
        name: "Taluk Hospital Varkala",
        place: "Varkala",
        type: "Government",
        contact: "0470 260 0200",
      },
      {
        name: "SR Hospital",
        place: "Varkala",
        type: "Private",
        contact: "0470 260 2405",
      },
    ],
  },
{
    taluk: "Kollam",
    hospitals: [
      {
        name: "District Hospital Kollam",
        place: "Taluk Kachery",
        type: "Government",
        contact: "0474 274 2366",
      },
      {
        name: "Medicity Medical Centre",
        place: "Kollam",
        type: "Private",
        contact: "0474 276 2882",
      },
    ],
  },
  {
    taluk: "Kunnathur",
    hospitals: [
      {
        name: "Taluk Hospital Sasthamcotta",
        place: "Sasthamcotta",
        type: "Government",
        contact: "0476 283 0351",
      },
      {
        name: "KIMS Sasthamcotta",
        place: "Sasthamcotta",
        type: "Private",
        contact: "0476 283 5666",
      },
    ],
  },
  {
    taluk: "Karunagappally",
    hospitals: [
      {
        name: "Taluk Hospital Karunagappally",
        place: "Karunagappally",
        type: "Government",
        contact: "0476 262 2334",
      },
      {
        name: "Holy Cross Super Speciality Hospital",
        place: "Kottiyam",
        type: "Private",
        contact: "0476 263 1333",
      },
    ],
  },
  {
    taluk: "Pathanapuram",
    hospitals: [
      {
        name: "Taluk Hospital Pathanapuram",
        place: "Pathanapuram",
        type: "Government",
        contact: "0475 235 2233",
      },
      {
        name: "SP Fort Hospital",
        place: "Pathanapuram",
        type: "Private",
        contact: "0475 235 1222",
      },
    ],
  },
  {
    taluk: "Punalur",
    hospitals: [
      {
        name: "Taluk Hospital Punalur",
        place: "Punalur",
        type: "Government",
        contact: "0475 222 2326",
      },
      {
        name: "EMS Co-operative Hospital",
        place: "Punalur",
        type: "Private",
        contact: "0475 222 4321",
      },
    ],
  },] 

export const trvWorkshopsByTaluk = [
  {
    taluk: "Thiruvananthapuram",
    workshops: [
      {
        name: "Shiju Automobiles",
        place: "Vizhinjam",
        type: "Car & bike workshop",
        contact: null
      },
      {
        name: "Sastha Automobile",
        place: "Edapazhanji",
        type: "Car workshop (multi-brand)",
        contact: null
      },
      {
        name: "Kema Auto Workshop",
        place: "Karamana",
        type: "Car repair",
        contact: "0471‑2343795"
      },
      {
        name: "Vinayaka Auto Service",
        place: "Karamana",
        type: "Car service",
        contact: "0471‑2311607"
      }
    ]
  },
  {
    taluk: "Neyyattinkara",
    workshops: [
      {
        name: "Hercules Automobiles",
        place: "Neyyattinkara",
        type: "Authorized car service",
        contact: "0471‑2234370"
      },
      {
        name: "Indus Motors (Maruti)",
        place: "Neyyattinkara",
        type: "Authorized Maruti service",
        contact: "0471‑2695030"
      },
      {
        name: "Praveen Auto Service",
        place: "Neyyattinkara",
        type: "Car & bike service (multi-brand)",
        contact: "0471‑2224463"
      },
      {
        name: "Rajan Automobiles",
        place: "Neyyattinkara",
        type: "Bike service (TVS/Bajaj/Yamaha/RE)",
        contact: "0471‑2222528"
      },
      {
        name: "Sujin Automobiles",
        place: "Neyyattinkara",
        type: "Bike service (TVS/Bajaj/Yamaha/RE)",
        contact: "0471‑2220015"
      }
    ]
  },
  {
    taluk: "Kattakada",
    workshops: [
      {
        name: "City Engineers Maruti Service Centre",
        place: "Kattakada",
        type: "Authorized Maruti service",
        contact: "9037037373"
      },
      {
        name: "Raj Auto Works Pvt Ltd",
        place: "Kattakada",
        type: "Multi-brand car service",
        contact: "0471‑2290471"
      }
    ]
  },
  {
    taluk: "Nedumangad",
    workshops: [
      {
        name: "Jeem Automobiles (Bajaj)",
        place: "Nedumangad",
        type: "Authorized Bajaj bike",
        contact: "9400533436"
      },
      {
        name: "Kallingal Automobiles",
        place: "Nedumangad",
        type: "Authorized Bajaj bike",
        contact: "9847324786"
      }
    ]
  },
  {
    taluk: "Kazhakoottam",
    workshops: [
      {
        name: "Future Auto Garage",
        place: "Kazhakoottam",
        type: "Bike workshop (multi-brand)",
        contact: null
      },
      {
        name: "Sun Motors (Bajaj)",
        place: "Kazhakoottam",
        type: "Authorized Bajaj bike",
        contact: "9847620219"
      }
    ]
  },
  {
    taluk: "Varkala",
    workshops: [
      {
        name: "Amal Automobiles",
        place: "Vallakadavu (near Varkala)",
        type: "Car & bike workshop",
        contact: null
      },
      {
        name: "Sameena Auto Service Centre",
        place: "Vallakadavu (near Varkala)",
        type: "Car service (multi-brand)",
        contact: "0471‑2502234"
      },
        {
    taluk: "Kollam",
    workshops: [
      {
        name: "Doctor Garage",
        place: "Kollam (city)",
        type: "Two‑wheeler (door‑step service)",
        contact: "+91 9898 782 381",
        source: "turn0search3"
      },
      {
        name: "Diya Motors – Hero MotoCorp",
        place: "Kadappakkada, Kollam",
        type: "Authorized Hero bike service",
        contact: "9847943333",
        source: "turn0search8"
      },
      {
        name: "Venad Automobiles – Hero MotoCorp",
        place: "Vendermukku, Kollam",
        type: "Authorized Hero bike service",
        contact: "9388221249",
        source: "turn0search8"
      },
      {
        name: "Indus Motors (Maruti)",
        place: "Punaloor Rd, Kollam",
        type: "Authorized Maruti car service",
        contact: "0474‑2719924",
        source: "turn0search10"
      },
      {
        name: "Chithira Automobiles",
        place: "Railway Station Junction, Kollam",
        type: "Authorized Maruti car service",
        contact: "0474‑451114",
        source: "turn0search10"
      }
    ]
  },
  {
    taluk: "Punalur",
    workshops: [
      {
        name: "Bharanikavil Amma Two Wheeler Workshop",
        place: "Punalur, Kollam",
        type: "Two‑wheeler workshop",
        contact: null,
        source: "turn0search4"
      },
      {
        name: "S S Motors",
        place: "Punalur, Kollam",
        type: "Two‑wheeler service",
        contact: null,
        source: "turn0search4"
      }
    ]
  },
  {
    taluk: "Kottarakkara",
    workshops: [
      {
        name: "Reno Two Wheeler Workshop",
        place: "Kottarakkara, Kollam",
        type: "Two‑wheeler workshop",
        contact: null,
        source: "turn0search4"
      },
      {
        name: "Ambiyil Two Wheeler Workshop",
        place: "Kottarakkara, Kollam",
        type: "Two‑wheeler workshop",
        contact: null,
        source: "turn0search4"
      },
      {
        name: "Johnson Two Wheeler Works",
        place: "Kottarakkara, Kollam",
        type: "Two‑wheeler workshop",
        contact: null,
        source: "turn0search4"
      },
      {
        name: "Mohan’s Two Wheeler Workshop",
        place: "Kottarakkara, Kollam",
        type: "Two‑wheeler workshop",
        contact: null,
        source: "turn0search13"
      },
      {
        name: "Maheswara Two Wheeler Works",
        place: "Kottarakkara, Kollam",
        type: "Two‑wheeler workshop",
        contact: null,
        source: "turn0search13"
      }
    ]
  },
  {
    taluk: "Pathanapuram",
    workshops: [
      {
        name: "Selvan Two Wheeler Works",
        place: "Pathanapuram, Kollam",
        type: "Two‑wheeler workshop",
        contact: null,
        source: "turn0search4"
      },
      {
        name: "Sree Muruga Two Wheeler Workshop",
        place: "Pulamon, Kollam",
        type: "Two‑wheeler workshop",
        contact: null,
        source: "turn0search4"
      },
      {
        name: "Pradeep Auto Garage",
        place: "Valakom, Pathanapuram",
        type: "Two‑wheeler/Three‑wheeler workshop",
        contact: null,
        source: "turn0search9"
      },
      {
        name: "Kuttan Auto Garage",
        place: "Pathanapuram, Kollam",
        type: "Auto garage",
        contact: null,
        source: "turn0search9"
      }
    ]
  },
  {
    taluk: "Karunagappally",
    workshops: [
      {
        name: "Triveni Motors",
        place: "Karunagappally, Kollam",
        type: "Bike service & spares (Honda, TVS)",
        contact: null,
        source: "turn0search4"
      },
      {
        name: "Friends Two Wheeler Workshop",
        place: "Karunagappally, Kollam",
        type: "Two‑wheeler workshop",
        contact: null,
        source: "turn0search4"
      }
    ]
  }

    ]
  }
];

