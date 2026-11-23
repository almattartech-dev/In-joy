 const selectedShowKey = "selectedShow";
 const selectedShow = sessionStorage.getItem(selectedShowKey);

            if (selectedShow) {
                document.querySelectorAll(".category-card .shows-dropdown a").forEach((link) => {
                    if (link.getAttribute("href") === selectedShow) {
                        link.classList.add("t-active");
                        link.closest(".category-card").open = true;
                    }
                });
            }

            document.querySelectorAll(".category-card .shows-dropdown a").forEach((link) => {
                link.addEventListener("click", () => {
                    sessionStorage.setItem(selectedShowKey, link.getAttribute("href"));
                });
            });

            const categoryCards = document.querySelectorAll(".category-card");
            const closeShowsButton = document.querySelector(".close-shows");
            const updateCloseButton = () => {
                closeShowsButton.hidden = !Array.from(categoryCards).some((card) => card.open);
            };

            document.querySelector(".explore-button").addEventListener("click", () => {
                categoryCards.forEach((card) => {
                    card.open = true;
                });
                updateCloseButton();
            });

            categoryCards.forEach((card) => {
                card.addEventListener("toggle", updateCloseButton);
            });

            closeShowsButton.addEventListener("click", () => {
                categoryCards.forEach((card) => {
                    card.open = false;
                });
                updateCloseButton();
                categoryCards[0].querySelector("summary").focus();
            });