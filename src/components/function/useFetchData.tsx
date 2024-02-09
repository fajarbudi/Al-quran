export async function getDzikir(host: any) {
  const res = await fetch(`http://${host}/data/dzikir`);
  return res.json();
}

export async function getSurah() {
  const res = await fetch("https://equran.id/api/v2/surat");
  return res.json();
}

export async function getAyat(noAyat: number) {
  const res = await fetch(`https://equran.id/api/v2/surat/${noAyat}`);
  return res.json();
}

export async function getAsmaulHusna() {
  const res = await fetch("https://asmaul-husna-api.vercel.app/api/all");
  return res.json();
}
