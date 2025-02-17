class Proizvod {
  constructor(id, naziv, cijena, velicine, opis, slike) {
    (this.id = id),
      (this.naziv = naziv),
      (this.cijena = cijena),
      (this.velicine = velicine),
      (this.opis = opis),
      (this.slike = slike);
  }
}

const proizvodi = [
  new Proizvod(
    1,
    "Obična crna majica",
    100,
    ["XS", "S", "M", "L"],
    "DUKSA CRNA POLO",
    [
      "https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/9/1/9126G-99X-050-1-366963_12.jpg",
      "https://www.bolf.com.hr/scr_pl_Crna-muska-obicna-majica-kratkih-rukava-Bolf-M216-95526_4.jpg",
      "https://static.cropp.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/9/1/9126G-99X-050-1-366963_12.jpg",
      "https://lumer-shop.eu/wp-content/uploads/2019/09/muska-crna-jpg.webp",
    ]
  ),
];

export { Proizvod, proizvodi };
