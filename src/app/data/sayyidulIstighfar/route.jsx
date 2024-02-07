import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json([
    {
      arab: "اَللَّهُمَّ أَنْتَ رَبِّيْ لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِيْ",
      latin: "Allâhumma anta rabbî, lâ ilâha illâ anta khalaqtanî.",
      arti: "Hai Tuhanku, Engkau Tuhanku. Tiada tuhan yang disembah selain Engkau. Engkau yang menciptakanku",
    },
    {
      arab: "وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",
      latin: "Wa anâ ‘abduka, wa anâ ‘alâ ‘ahdika wa wa‘dika mastatha‘tu.",
      arti: "Aku adalah hamba-Mu. Aku berada dalam perintah iman sesuai perjanjian-Mu sebatas kemampuanku.",
    },
    {
      arab: "أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
      latin: "A‘ûdzu bika min syarri mâ shana‘tu.",
      arti: "Aku berlindung kepada-Mu dari kejahatan yang kuperbuat.",
    },
    {
      arab: "أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ",
      latin: "Abû’u laka bini‘matika ‘alayya.",
      arti: "Kepada-Mu, aku mengakui segala nikmat-Mu padaku.",
    },
    {
      arab: "وَأَبُوْءُ بِذَنْبِيْ. فَاغْفِرْ لِيْ",
      latin: "Wa abû’u bidzanbî. Faghfirlî.",
      arti: "Aku mengakui dosaku. Maka itu ampunilah dosaku.",
    },
    {
      arab: "فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ",
      latin: "Fa innahû lâ yaghfirudz dzunûba illâ anta.",
      arti: "Sungguh tiada yang mengampuni dosa selain Engkau.",
    },
  ]);
}
