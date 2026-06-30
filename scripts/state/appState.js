const storageKeys = {
    searchQuery: "podvodniRibolov.searchQuery",
    selectedTopicId: "podvodniRibolov.selectedTopicId",
};

const safeRead = (key, fallbackValue) => {
    try {
        return localStorage.getItem(key) || fallbackValue;
    } catch {
        return fallbackValue;
    }
};

const safeWrite = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch {
        return;
    }
};

export function createAppState(defaultTopicId) {
    const state = {
        searchQuery: safeRead(storageKeys.searchQuery, ""),
        selectedTopicId: safeRead(storageKeys.selectedTopicId, defaultTopicId),
    };

    const persist = () => {
        safeWrite(storageKeys.searchQuery, state.searchQuery);
        safeWrite(storageKeys.selectedTopicId, state.selectedTopicId);
    };

    const setSearchQuery = (searchQuery) => {
        state.searchQuery = searchQuery;
        persist();
    };

    const setSelectedTopicId = (selectedTopicId) => {
        state.selectedTopicId = selectedTopicId;
        persist();
    };

    const ensureSelectedTopicId = (topics) => {
        if (!topics.some((topic) => topic.id === state.selectedTopicId)) {
            state.selectedTopicId = topics[0]?.id || defaultTopicId;
            persist();
        }
    };

    return {
        state,
        setSearchQuery,
        setSelectedTopicId,
        ensureSelectedTopicId,
        persist,
    };
}
