# Podvodni ribolov

Jednostavna edukativna web stranica posvećena podvodnom ribolovu. Projekt prikazuje osnovne informacije o opremi, odijelima, podvodnim puškama, tečajevima i sigurnosti.

## Sadržaj

- [Opis projekta](#opis-projekta)
- [Tehnologije](#tehnologije)
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
- Responsive dizajn

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
- Kontakt forma koristi HTML validaciju preko atributa kao što su `required`, `type="email"` i `minlength`.
- Stranica je prilagođena i za mobilne uređaje.

## Kontakt

Za pitanja ili povratne informacije, kontaktirajte nas putem kontakt forme na web stranici.

## Autor

Nikola Plemenčić, UNIZD SIT 2026.

---

*Stranica je izrađena kao dio edukativnog projekta za kolegij Uvod u Web tehnologije.*
