document.addEventListener("DOMContentLoaded", () => {

    const LINKED_TABS = new Set([
        "Absolute",
        "Relative"
    ]);

    function getTabLabel(label) {
        return label.textContent.trim();
    }

    let syncing = false;

    document.body.addEventListener("change", event => {

        //if (syncing) {
        //    return;
        //}

        const input = event.target;

        if (
            !(input instanceof HTMLInputElement) ||
            !input.matches(".tabbed-set input[type='radio']")
        ) {
            return;
        }

        const currentLabel = document.querySelector(
            `label[for="${input.id}"]`
        );

        if (!currentLabel) {
            return;
        }

        const labelText = getTabLabel(currentLabel);

        if (!LINKED_TABS.has(labelText)) {
            return;
        }

        //syncing = true;

        document
            .querySelectorAll(".tabbed-set label")
            .forEach(label => {

                if (getTabLabel(label) !== labelText) {
                    return;
                }

                const targetId = label.getAttribute("for");

                if (!targetId || targetId === input.id) {
                    return;
                }

                const targetInput =
                    document.getElementById(targetId);

                if (
                    targetInput &&
                    targetInput instanceof HTMLInputElement
                ) {
                    targetInput.checked = true;
                    //targetInput.click();

                }
            });
    });
});