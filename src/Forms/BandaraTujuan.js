import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import "./Forms.css";

const bandara = [
  { value: "BTJ", label: "(BTJ) Banda Aceh, Sultan Iskandar Muda" },
  { value: "MES", label: "(MES) Medan, Polonia" },
  { value: "BTH", label: "(BTH) Batam, Hang Nadim" },
  { value: "TNJ", label: "(TNJ) Tanjung Pinang, Raja Haji Fisabilillah" },
  { value: "PKU", label: "(PKU) Pekanbaru, Sultan Syarif Kasim II" },
  { value: "PDG", label: "(PDG) Padang, Minangkabau" },
  { value: "PLM", label: "(PLM) Palembang, Sultan Mahmud Badaruddin II" },
  { value: "BKS", label: "(BKS) Bengkulu, Fatmawati Soekarno" },
  { value: "TKG", label: "(TKG) Bandar Lampung, Radin Inten II" },
  { value: "CGK", label: "(CGK) Jakarta, Soekarno-Hatta" },
  { value: "HLP", label: "(HLP) Jakarta, Halim Perdanakusuma" },
  { value: "SUB", label: "(SUB) Surabaya, Juanda" },
  { value: "SOC", label: "(SOC) Solo, Adisumarmo" },
  { value: "JOG", label: "(JOG) Yogyakarta, Adi Sucipto" },
  { value: "SRG", label: "(SRG) Semarang, Achmad Yani" },
  { value: "BDO", label: "(BDO) Bandung, Husein Sastranegara" },
  { value: "DPS", label: "(DPS) Denpasar, Ngurah Rai" },
  { value: "AMI", label: "(AMI) Mataram, Selaparang" },
  { value: "KOE", label: "(KOE) Kupang , El Tari" },
  { value: "BPN", label: "(BPN) Balikpapan, Sepinggan" },
  { value: "PNK", label: "(PNK) Pontianak, Supadio" },
  { value: "TRK", label: "(TRK) Tarakan, Juwata" },
  { value: "UPG", label: "(UPG) Makassar, Sultan Hasanuddin" },
  { value: "MDC", label: "(MDC) Manado, Sam Ratulangi" },
  { value: "AMQ", label: "(AMQ) Ambon, Pattimura" },
  { value: "DJJ", label: "(DJJ) Jayapura, Sentani" },
  { value: "BIK", label: "(BIK) Biak, Frans Kaisiepo" },
  { value: "TIM", label: "(TIM) Tembagapura, Mozes Kilangin" },
  { value: "MKQ", label: "(MKQ) Merauke, Mopah" },
  { value: "SBG", label: "(SBG) Sabang, Maimun Saleh" },
  { value: "LSX", label: "(LSX) Aceh Utara, Lhok Sukon" },
  { value: "LSW", label: "(LSW) Lhokseumawe, Malikus Saleh" },
  { value: "MEQ", label: "(MEQ) Nagan Raya, Cut Nyak Dhien" },
  { value: "TPK", label: "(TPK) Tapaktuan, Teuku Cut Ali" },
  { value: "SKL", label: "(SKL) Singkil, Syekh Hamzah Fansyuri" },
  { value: "SNB", label: "(SNB) Sinabang, Lasikin" },
  { value: "SIW", label: "(SIW) Toba Samosir, Sibisa" },
  { value: "SQT", label: "(SQT) Siborong-borong, Silangit" },
  { value: "SIX", label: "(SIX) Sibolga, Dr. Ferdinand Lumban Tobing" },
  { value: "AEG", label: "(AEG) Padang Sidempuan, Aek Godang" },
  { value: "GNS", label: "(GNS) Gunung Sitoli, Binaka" },
  { value: "LSE", label: "(LSE) Pulau-pulau Batu, Lasondre" },
  { value: "DUM", label: "(DUM) Dumai, Pinang Kampai" },
  { value: "SEQ", label: "(SEQ) Bengkalis, Sungai Pakning" },
  { value: "PPR", label: "(PPR) Pasir Pengaraian, Pasir Pengaraian" },
  { value: "SIQ", label: "(SIQ) Singkep, Dabo" },
  { value: "RGT", label: "(RGT) Rengat, Japura" },
  { value: "TJB", label: "(TJB) Karimun, Sei Bati" },
  { value: "NTX", label: "(NTX) Natuna, Ranai" },
  { value: "MWK", label: "(MWK) Pal Matak, Matak" },
  { value: "RKO", label: "(RKO) Sipura, Rokot" },
  { value: "DJB", label: "(DJB) Jambi, Sultan Thaha Syarifuddin" },
  { value: "KRC", label: "(KRC) Kerinci, Depati Parbo" },
  { value: "BKS", label: "(BKS) Bengkulu, Fatmawati Soekarno" },
  { value: "MPC", label: "(MPC) Mukomuko, Mukomuko" },
  { value: "PGK", label: "(PGK) Pangkalpinang, Depati Amir" },
  { value: "TJQ", label: '(TJQ) Tanjung Pandan, H. A. S. Hanandjoeddin{" "}' },
  { value: "LLG", label: "(LLG) Lubuklinggau, Silampari" },
  { value: "PDO", label: "(PDO) Empat Lawang, Pendopo" },
  { value: "PCB", label: "(PCB) Pamulang, Pondok Cabe" },
  { value: "PPJ", label: "(PPJ) Kepulauan Seribu, Pulau Panjang" },
  { value: "TSY", label: "(TSY) Tasikmalaya, Cibeureum" },
  { value: "CBN", label: "(CBN) Cirebon, Cakrabhuwana" },
  { value: "CXP", label: "(CXP) Cilacap, Tunggul Wulung" },
  { value: "PWL", label: "(PWL) Purbalingga, Wirasaba" },
  { value: "KWB", label: "(KWB) Karimunjawa, Dewa Daru" },
  { value: "CPF", label: "(CPF) Cepu, Ngloram" },
  { value: "MLG", label: "(MLG) Malang, Abdul Rachman Saleh" },
  { value: "SUP", label: "(SUP) Sumenep, Trunojoyo" },
  { value: "MSI", label: "(MSI) Masalembo, Masalembo" },
  { value: "SWQ", label: "(SWQ) Sumbawa Besar, Brangbiji" },
  { value: "LYK", label: "(LYK) Sumbawa, Lunyuk" },
  { value: "BMU", label: "(BMU) Bima, Muhammad Salahuddin" },
  { value: "KOE", label: "(KOE) Kupang, El Tari" },
  { value: "LBJ", label: "(LBJ) Manggarai Barat, Komodo" },
  { value: "RTG", label: "(RTG) Ruteng, Frans Sales Lega" },
  { value: "TMC", label: "(TMC) Waikabubak, Tambolaka" },
  { value: "WGP", label: "(WGP) Waingapu, Mau Hau" },
  { value: "BJW", label: "(BJW) Bajawa, Soa" },
  { value: "ENE", label: "(ENE) Ende, H Hasan Aroeboesman" },
  { value: "MOF", label: "(MOF) Maumere, Wai Oti" },
  { value: "LKA", label: "(LKA) Larantuka, Gewayantana" },
  { value: "LWE", label: "(LWE) Lewoleba, Wonopito" },
  { value: "ARD", label: "(ARD) Alor, Mali" },
  { value: "RTI", label: "(RTI) Rote, Lekunik" },
  { value: "SAU", label: "(SAU) Pulau Sawu, Tardamu" },
  { value: "ABU", label: "(ABU) Atambua, Haliwen" },
  { value: "KTG", label: "(KTG) Ketapang, Rahadi Oesman" },
  { value: "SQG", label: "(SQG) Sintang, Susilo" },
  { value: "NPO", label: "(NPO) Nanga Pinoh, Nanga Pinoh" },
  { value: "PSU", label: "(PSU) Putussibau, Pangsuma" },
  { value: "PKY", label: "(PKY) Palangka Raya, Tjilik Riwut" },
  { value: "PKN", label: "(PKN) Pangkalan Bun, Iskandar" },
  { value: "TBM", label: "(TBM) Katingan, Tumbang Samba" },
  { value: "SMQ", label: "(SMQ) Sampit, H. Asan" },
  { value: "MTW", label: "(MTW) Muara Teweh, Beringin" },
  { value: "BDJ", label: "(BDJ) Banjarmasin, Syamsuddin Noor" },
  { value: "TJG", label: "(TJG) Tanjung, Warukin" },
  { value: "BTW", label: "(BTW) Batulicin, Bersujud" },
  { value: "KBU", label: "(KBU) Kotabaru, Stagen" },
  { value: "SRI", label: "(SRI) Samarinda, Temindung" },
  { value: "NNX", label: "(NNX) Nunukan, Nunukan" },
  { value: "LBW", label: "(LBW) Krayan, Yuvai Semaring" },
  { value: "BYQ", label: "(BYQ) Pulau Bunyu, Bunyu" },
  { value: "MLN", label: "(MLN) Malinau, R.A. Bessing" },
  { value: "LPU", label: "(LPU) Kayan Selatan, Long Ampung" },
  { value: "TJS", label: "(TJS) Tanjung Selor, Tanjung Harapan" },
  { value: "NAF", label: "(NAF) Bulungan, Banaina" },
  { value: "BEJ", label: "(BEJ) Tanjung Redeb, Kalimarau" },
  { value: "SGQ", label: "(SGQ) Sangatta, Sangkimah" },
  { value: "BXT", label: "(BXT) Bontang, Bontang" },
  { value: "TSX", label: "(TSX) Marang Kayu, Tanjung Santan" },
  { value: "KOD", label: "(KOD) Kutai Kartanegara, Kotabangun" },
  { value: "SZH", label: "(SZH) Kutai Kartanegara, Senipah" },
  { value: "MLK", label: "(MLK) Melak, Melalan" },
  { value: "DTD", label: "(DTD) Kutai Barat, Datah Dawai" },
  { value: "TNB", label: "(TNB) Tanah Grogot, Tanah Grogot" },
  { value: "SGQ", label: "(SGQ) Tanjung Sangatta, Bara" },
  { value: "MXB", label: "(MXB) Masamba, Andi Djemma" },
  { value: "BUW", label: "(BUW) Bau-bau, Betoambari" },
  { value: "GTO", label: "(GTO) Gorontalo, Jalaluddin" },
  { value: "SQR", label: "(SQR) Sorowako, Inco Soroako Waws" },
  { value: "PSJ", label: "(PSJ) Poso, Kasiguncu" },
  { value: "TLI", label: "(TLI) Tolitoli, Lalos" },
  { value: "MJU", label: "(MJU) Mamuju, Tampa Padang" },
  { value: "MNA", label: "(MNA) Melonguane, Melonguane" },
  { value: "BJG", label: "(BJG) Bolaang Mongondow, Mopait" },
  { value: "PLW", label: "(PLW) Palu, Mutiara" },
  { value: "NAH", label: "(NAH) Tahuna, Naha" },
  { value: "UOL", label: "(UOL) Buol, Pogugol" },
  { value: "PUM", label: "(PUM) Pomalaa, Pomalaa" },
  { value: "TTR", label: "(TTR) Tana Toraja, Pongtiku" },
  { value: "RAQ", label: "(RAQ) Raha, Sugimanuru" },
  { value: "LUW", label: "(LUW) Luwuk, Syukuran Aminuddin Amir" },
  { value: "KDI", label: "(KDI) Kendari, Haluoleo" },
  { value: "KSR", label: '(KSR) H Selayar, Aroeppala{" "}' },
  { value: "WNI", label: "(WNI) Matahora Wangi-wangi, Wakatobi" },
  { value: "AHI", label: "(AHI) Masohi, Amahai" },
  { value: "NDA", label: "(NDA) Banda, Bandaneira" },
  { value: "DOB", label: "(DOB) Kepulauan Aru, Dobo" },
  { value: "LUV", label: "(LUV) Langgur, Dumatubun" },
  { value: "SQN", label: "(SQN) Sanana, Emalamo" },
  { value: "GLX", label: "(GLX) Galela, Gamarmalamo" },
  { value: "GEB", label: "(GEB) Gebe, Gebe" },
  { value: "KAZ", label: "(KAZ) Tobelo, Kuabang" },
  { value: "MAL", label: "(MAL) Mangole, Mangole" },
  { value: "NAM", label: "(NAM) Namlea, Namlea" },
  { value: "NRE", label: "(NRE) Namrole, Namrole" },
  { value: "BJK", label: "(BJK) Benjina, Nangasuri" },
  { value: "LAH", label: "(LAH) Labuha, Oesman Sadik" },
  { value: "SXK", label: "(SXK) Saumlaki, Olilit" },
  { value: "OTI", label: "(OTI) Morotai, Pitu" },
  { value: "TTE", label: "(TTE) Ternate, Sultan Babullah" },
  { value: "TAX", label: "(TAX) Taliabu, Taliabu" },
  { value: "WHI", label: "(WHI) Pulau Seram, Wahai" },
  { value: "PCG", label: "(PCG) Buli, Maba" },
  { value: "RSK", label: "(RSK) Manokwari, Abresso" },
  { value: "AGD", label: "(AGD) Anggi, Anggi" },
  { value: "AAS", label: "(AAS) Jayawijaya, Apalapsili" },
  { value: "ARJ", label: "(ARJ) Arso, Arso" },
  { value: "AYW", label: "(AYW) Sorong, Ayawasi" },
  { value: "BXB", label: "(BXB) Babo, Babo" },
  { value: "BXD", label: "(BXD) Merauke, Bade" },
  { value: "BXM", label: "(BXM) Pegunungan Bintang, Batom" },
  { value: "NTI", label: "(NTI) Bintuni, Bintuni" },
  { value: "BUI", label: "(BUI) Jayawijaya, Bokondini" },
  { value: "DRH", label: "(DRH) Puncak Jaya, Dabra" },
  { value: "ELR", label: "(ELR) Jayawijaya, Elilim" },
  { value: "EWI", label: "(EWI) Enarotali, Enarotali" },
  { value: "EWE", label: "(EWE) Merauke, Ewer" },
  { value: "ILA", label: "(ILA) Paniai, Illaga" },
  { value: "IUL", label: "(IUL) Puncak Jaya, Ilu" },
  { value: "INX", label: "(INX) Inanwatan, Inanwatan" },
  { value: "SOQ", label: "(SOQ) Sorong, Jeffman" },
  { value: "FOO", label: "(FOO) Numfor Timur, Yemburwo." },
  { value: "KBX", label: "(KBX) Sorong Selatan, Kambuaya" },
  { value: "KCD", label: "(KCD) Asmat, Kamur" },
  { value: "KBF", label: "(KBF) Jayawijaya, Karubaga" },
  { value: "KEQ", label: "(KEQ) Manokwari, Kebar" },
  { value: "LLN", label: "(LLN) Jayawijaya, Kelila" },
  { value: "KEI", label: "(KEI) Merauke, Kepi" },
  { value: "KMM", label: "(KMM) Merauke, Kimaan" },
  { value: "KOX", label: "(KOX) Mimika, Kokonao" },
  { value: "LHI", label: "(LHI) Jayapura, Lereh" },
  { value: "ZRM", label: "(ZRM) Sarmi, Mararena" },
  { value: "RDE", label: "(RDE) Manokwari, Merdey" },
  { value: "MDP", label: "(MDP) Boven Digoel, Mindiptana" },
  { value: "ONI", label: "(ONI) Dogiyai, Moanamani" },
  { value: "LII", label: "(LII) Puncak Jaya, Mulia" },
  { value: "MUF", label: "(MUF) Merauke, Muting" },
  { value: "NBX", label: "(NBX) Nabire, Nabire" },
  { value: "OBD", label: "(OBD) Nabire, Obano" },
  { value: "OKQ", label: "(OKQ) Puncak Jaya, Okaba" },
  { value: "OKL", label: "(OKL) Pegunungan Bintang, Oksibil" },
  { value: "GAV", label: "(GAV) Raja Ampat, Pulau Gag" },
  { value: "MKW", label: "(MKW) Manokwari, Rendani" },
  { value: "SEH", label: "(SEH) Keerom, Senggeh" },
  { value: "ZEG", label: "(ZEG) Mappi, Senggo" },
  { value: "NKD", label: "(NKD) Puncak Jaya, Sinak" },
  { value: "ZRI", label: "(ZRI) Serui, Sudjarwo Tjondronegoro" },
  { value: "TMH", label: "(TMH) Tanah Merah, Tanah Merah" },
  { value: "TXM", label: "(TXM) Teminabuan, Teminabuan" },
  { value: "TMY", label: "(TMY) Jayawijaya, Tiom" },
  { value: "FKQ", label: "(FKQ) Fakfak, Torea" },
  { value: "UBR", label: "(UBR) Keerom, Ubrub" },
  { value: "KNG", label: "(KNG) Kaimana, Utarom" },
  { value: "WET", label: "(WET) Deiyai, Waghete" },
  { value: "WMX", label: "(WMX) Wamena, Wamena" },
  { value: "WAR", label: "(WAR) Keerom, Waris" },
  { value: "WSR", label: "(WSR) Wasior, Wasior" },
  { value: "RUF", label: "(RUF) Jayawijaya, Yuruf" },
  { value: "UGU", label: "(UGU) Paniai, Zugapa" },
  { value: "SOQ", label: "(SOQ) Sorong, Domine Eduard Osok" },
];
export default function BandaraTujuan() {
  return <Select options={bandara} className="selectBandara" defaultValue={bandara[16]} />;
}
