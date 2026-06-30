export function createHomepageController({ featuredTopicsContainer, featuredTopicDetails, searchBoxes, appState }) {
    let topics = [];
    let loadState = {
        status: "idle",
        message: "",
    };

    const renderFeaturedTopicDetails = () => {
        if (!featuredTopicDetails) {
            return;
        }

        const selectedTopic = topics.find((topic) => topic.id === appState.state.selectedTopicId);

        if (!selectedTopic || loadState.status === "loading") {
            featuredTopicDetails.innerHTML = "";
            return;
        }

        featuredTopicDetails.innerHTML = `
            <h3>${selectedTopic.title}</h3>
            <p>${selectedTopic.details}</p>
        `;
    };

    const renderStateBlock = (title, description, modifierClass = "") => {
        if (!featuredTopicsContainer) {
            return;
        }

        featuredTopicsContainer.innerHTML = `
            <div class="ui-state ${modifierClass}">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        `;
    };

    const render = () => {
        if (!featuredTopicsContainer) {
            return;
        }

        if (loadState.status === "loading") {
            renderStateBlock("Učitavanje", loadState.message || "Učitavanje podataka...", "ui-state--loading");
            renderFeaturedTopicDetails();
            return;
        }

        const visibleTopics = topics.filter((topic) => {
            return (
                topic.title.toLowerCase().includes(appState.state.searchQuery) ||
                topic.text.toLowerCase().includes(appState.state.searchQuery)
            );
        });

        if (visibleTopics.length === 0) {
            renderStateBlock(
                "Nema rezultata",
                `Nismo pronašli ništa za upit "${appState.state.searchQuery}". Pokušaj drugi pojam ili očisti pretragu.`,
                "ui-state--empty"
            );
            if (featuredTopicDetails) {
                featuredTopicDetails.innerHTML = "";
            }
            return;
        }

        const errorBanner = loadState.status === "error"
            ? `
                <div class="ui-state ui-state--error">
                    <h3>Greška pri učitavanju</h3>
                    <p>${loadState.message}</p>
                </div>
            `
            : "";

        appState.ensureSelectedTopicId(visibleTopics);

        featuredTopicsContainer.innerHTML = `${errorBanner}${visibleTopics
            .map(
                (topic) => `
                    <button class="feature-card feature-card--button${topic.id === appState.state.selectedTopicId ? " is-selected" : ""}" type="button" data-topic-id="${topic.id}">
                        <div class="feature-icon" aria-hidden="true">${topic.icon}</div>
                        <h3>${topic.title}</h3>
                        <p>${topic.text}</p>
                    </button>
                `
            )
            .join("")}`;

        featuredTopicsContainer.querySelectorAll("[data-topic-id]").forEach((topicButton) => {
            topicButton.addEventListener("click", () => {
                appState.setSelectedTopicId(topicButton.dataset.topicId);
                render();
            });
        });

        renderFeaturedTopicDetails();
    };

    const setLoading = (message = "Učitavanje podataka...") => {
        loadState = { status: "loading", message };
        render();
    };

    const setTopics = (nextTopics, errorMessage = "") => {
        topics = [...nextTopics];
        loadState = {
            status: errorMessage ? "error" : "ready",
            message: errorMessage,
        };
        appState.ensureSelectedTopicId(topics);
        render();
    };

    searchBoxes.forEach((searchBox) => {
        const searchButton = searchBox.querySelector("button");
        const searchInput = searchBox.querySelector("input");

        if (!searchButton || !searchInput) {
            return;
        }

        searchInput.value = appState.state.searchQuery;

        searchButton.addEventListener("click", () => {
            searchInput.focus();
        });

        searchInput.addEventListener("input", (event) => {
            appState.setSearchQuery(event.target.value.trim().toLowerCase());
            render();
        });
    });

    return {
        setLoading,
        setTopics,
        render,
    };
}
