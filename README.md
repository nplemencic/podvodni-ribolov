# Podvodni ribolov

Jednostavna edukativna web stranica posvećena podvodnom ribolovu. Projekt prikazuje osnovne informacije o opremi, odijelima, podvodnim puškama, tečajevima i sigurnosti.

## Sadržaj

- [Opis projekta](#opis-projekta)
- [Tehnologije](#tehnologije)
- [JavaScript funkcionalnosti](#javascript-funkcionalnosti)
- [Struktura projekta](#struktura-projekta)
- [Pokretanje](#pokretanje)
- [Napomene](#napomene)
- [Kontakt](#kontakt)

## Opis projekta

Stranica je napravljena kao školski projekt i sastoji se od više međusobno povezanih HTML stranica. Svaka stranica obrađuje jednu temu vezanu uz podvodni ribolov, a zajednički stilovi se nalaze u jednoj CSS datoteci.

### Što stranica sadrži

- Početnu stranicu s uvodom u temu
- Stranicu s pregledom opreme
- Stranicu o odijelima
- Stranicu o vrstama podvodnih pušaka
- Stranicu o tečajevima i sigurnosti
- Stranicu s kontakt formom

## Tehnologije

- HTML5
- CSS3
- JavaScript ES moduli
- Responsive dizajn

## JavaScript funkcionalnosti

- Dinamički prikaz kartica na početnoj stranici iz podataka u JavaScriptu
- Učitavanje podataka preko `fetch` iz lokalnog JSON-a
- Pretraga s prikazom gdje je pojam pronađen na karticama
- Odabir kartice i prikaz dodatnih detalja
- Spremanje zadnje pretrage i odabrane kartice u `localStorage`
- Obrada kontakt forme bez reloadanja stranice
- Prikaz UI stanja: `loading`, `error` i `empty`

### Organizacija koda

- `scripts/main.js` - ulazna točka koja spaja sve module
- `scripts/data/featuredTopics.js` - učitavanje i fallback podaci
- `scripts/state/appState.js` - stanje aplikacije i spremanje u `localStorage`
- `scripts/ui/homepage.js` - render početne stranice i pretrage
- `scripts/ui/contactForm.js` - logika kontakt forme

## Struktura projekta

```
podvodni-ribolov/
├── index.html          # Početna stranica
├── pages/
│   ├── kontakt.html    # Kontakt forma
│   ├── odijela.html    # Vrste odijela
│   ├── onama.html      # O nama
│   ├── oprema.html     # Oprema za podvodni ribolov
│   ├── puske.html      # Vrste podvodnih pušaka
│   └── tecajevi.html   # Tečajevi i sigurnost
├── styles/
│   └── style.css       # Glavni stilovi
├── scripts/
│   ├── main.js         # Glavna JavaScript datoteka
│   ├── data/
│   │   └── featuredTopics.js
│   ├── state/
│   │   └── appState.js
│   └── ui/
│       ├── contactForm.js
│       └── homepage.js
├── data/
│   └── featured-topics.json
├── img/                # Slike korištene na stranicama
└── README.md           # Ova datoteka
```

## Pokretanje

Projekt je statički, pa ga je dovoljno otvoriti u pregledniku.

1. Otvorite mapu projekta u VS Code ili File Exploreru.
2. Pokrenite `index.html` u pregledniku ili otvorite datoteku direktno.
3. Navigacija vodi prema ostalim stranicama unutar mape `pages/`.

## Napomene

- Stilovi se nalaze u datoteci `styles/style.css`.
- Sve slike su spremljene u mapi `img/`.
- Podaci za početnu stranicu učitavaju se iz datoteke `data/featured-topics.json`.
- Kontakt forma koristi HTML validaciju preko atributa kao što su `required`, `type="email"` i `minlength`.
- Stranica je prilagođena i za mobilne uređaje.

## Kontakt

Za pitanja ili povratne informacije, kontaktirajte nas putem kontakt forme na web stranici.

## Autor

Nikola Plemenčić, UNIZD SIT 2026.

---

*Stranica je izrađena kao dio edukativnog projekta za kolegij Uvod u Web tehnologije.*
