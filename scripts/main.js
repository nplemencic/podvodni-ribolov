import { loadFeaturedTopics, featuredTopicsFallback } from "./data/featuredTopics.js";
import { createAppState } from "./state/appState.js";
import { createHomepageController } from "./ui/homepage.js";
import { initContactForm } from "./ui/contactForm.js";

const featuredTopicsContainer = document.getElementById("featured-topics");
const featuredTopicDetails = document.getElementById("featured-topic-details");
const searchBoxes = document.querySelectorAll(".search-box");
const contactForm = document.querySelector(".kontakt-forma");

const appState = createAppState(featuredTopicsFallback[0].id);
const homepageController = createHomepageController({
    featuredTopicsContainer,
    featuredTopicDetails,
    searchBoxes,
    appState,
});

const bootstrap = async () => {
    initContactForm(contactForm);

    if (featuredTopicsContainer) {
        homepageController.setLoading();
        const { topics, errorMessage } = await loadFeaturedTopics();
        homepageController.setTopics(topics, errorMessage);
    }
};

bootstrap();
