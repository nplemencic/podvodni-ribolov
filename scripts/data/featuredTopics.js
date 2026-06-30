export const featuredTopicsFallback = [
    {
        id: "sigurno-ronjenje",
        icon: "🌊",
        title: "Sigurno ronjenje",
        text: "Pravilna oprema i stručni savjeti za siguran boravak u vodi.",
        details: "Sigurno ronjenje počinje dobrom pripremom, provjerom opreme i praćenjem uvjeta u moru.",
    },
    {
        id: "prakticna-oprema",
        icon: "🎣",
        title: "Praktična oprema",
        text: "Odijela, maske i puške odabrane za lakše i kvalitetnije iskustvo.",
        details: "Odabir kvalitetne opreme olakšava boravak u vodi i povećava udobnost tijekom ribolova.",
    },
    {
        id: "tecajevi-pocetnici",
        icon: "📘",
        title: "Tečajevi za početnike",
        text: "Upoznaj osnove ronjenja uz stručno vodstvo i sigurnosne upute.",
        details: "Tečajevi pomažu početnicima da nauče osnove tehnike, sigurnosti i pravilnog ponašanja u vodi.",
    },
];

export async function loadFeaturedTopics() {
    const featuredTopicsDataUrl = new URL("../../data/featured-topics.json", import.meta.url);

    try {
        const response = await fetch(featuredTopicsDataUrl);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const topics = await response.json();
        const validTopics = Array.isArray(topics) && topics.length > 0 ? topics : [...featuredTopicsFallback];

        return {
            topics: validTopics,
            errorMessage: Array.isArray(topics) && topics.length > 0 ? "" : "Podaci su učitani iz zamjenskog izvora jer je JSON prazan.",
        };
    } catch {
        return {
            topics: [...featuredTopicsFallback],
            errorMessage: "Podaci se ne mogu učitati. Prikazani su zadani sadržaji.",
        };
    }
}
