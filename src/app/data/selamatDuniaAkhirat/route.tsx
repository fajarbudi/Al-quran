import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json([
    {
      arab: "اَللهُمَّ اِنَّا نَسْئَلُكَ سَلاَمَةً فِى الدِّيْنِ",
      latin: "Allaahumma innaa nas aluka salaamatan fiddiini,",
      arti: "Ya Allah kami mohon pada-Mu keselamatan dalam agama,",
    },
    {
      arab: "وَعَافِيَةً فِى الْجَسَدِ",
      latin: "wa 'aafiyatan fil jasadi,",
      arti: "kesehatan tubuh,",
    },
    {
      arab: "وَزِيَادَةً فِى الْعِلْمِ",
      latin: "waziaadatan fil'ilmi,",
      arti: "tambahan pada ilmu,",
    },
    {
      arab: "وَبَرَكَةً فِى الرِّزْقِ",
      latin: "wabarakatan firrizqi,",
      arti: "keberkatan pada rezeki,",
    },
    {
      arab: "وَتَوْبَةً قَبْلَ الْمَوْتِ",
      latin: "wataubatan qablal maut,",
      arti: "penerimaan tobat sebelum maut,",
    },
    {
      arab: "وَرَحْمَةً عِنْدَ الْمَوْتِ",
      latin: "warahmatan 'indal maut,",
      arti: "kasih sayang ketika maut,",
    },
    {
      arab: "وَمَغْفِرَةً بَعْدَ الْمَوْتِ",
      latin: "wamaghfiratan ba'dal maut,",
      arti: "dan keampunan setelah maut,",
    },
    {
      arab: "اَللهُمَّ هَوِّنْ عَلَيْنَا فِىْ سَكَرَاتِ الْمَوْتِ",
      latin: "allahumma hawwin 'alainaa fii sakaraatil maut,",
      arti: "Ya Allah permudahkanlah kami dalam menghadapi sakarataul maut,",
    },
    {
      arab: "وَالنَّجَاةَ مِنَ النَّارِ وَالْعَفْوَ عِنْدَ الْحِسَابِ",
      latin: "wa najjata minanaari wal 'afwa indal hisaab,",
      arti: "kelepasan dari neraka, dan ampunan ketika hisab,",
    },
    {
      arab: "رَبَّنَا لَا تُزِغْ قُلُوْبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
      latin:
        "rabbanaa laatuzig quluubanaa ba'da idz hadaitanaa wahablanaa min ladunka rahmatan innaka antal wahhaab.",
      arti: "Ya Allah jangan ragukan hati kami setelah Engkau beri petunjuk dan berilah kepada kami dari-Mu kasih sayang, sesungguhnya Engkau Maha Pemberi.",
    },
    {
      arab: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      latin:
        "rabbana aatinaa fiddunya hasanatan wafil aakhirati hasanatan waqinaa 'adzaabannaar.",
      arti: "Ya Tuhan kami, berilah kami kebaikan di dunia dan di akhirat dan peliharalah kami dari siksa neraka.",
    },
  ]);
}
