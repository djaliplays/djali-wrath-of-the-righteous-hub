document$.subscribe(function () {
  var STORAGE_KEY = "outer-tabbed-link";

  function isTopLevel(tabbedSet) {
    return !tabbedSet.parentElement.closest(".tabbed-set");
  }

  // Wire up sync, but only for radio inputs whose tabbed-set has no ancestor tabbed-set
  document.querySelectorAll(".tabbed-set > input[type='radio']").forEach(function (input) {
    var set = input.parentElement;
    if (!isTopLevel(set)) return;

    input.addEventListener("change", function () {
      if (!input.checked) return;
      var label = document.querySelector('label[for="' + input.id + '"]');
      if (!label) return;
      var text = label.textContent.trim();

      document.querySelectorAll(".tabbed-set > .tabbed-labels > label").forEach(function (other) {
        var otherSet = other.closest(".tabbed-set");
        if (!isTopLevel(otherSet)) return;
        if (other.textContent.trim() !== text) return;
        var otherInput = document.getElementById(other.getAttribute("for"));
        if (otherInput && !otherInput.checked) otherInput.checked = true; // no .click(), so no scroll/focus side effects
      });

      try { sessionStorage.setItem(STORAGE_KEY, text); } catch (e) {}
    });
  });

  // Restore choice on load / instant-navigation, top-level only
  try {
    var saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      document.querySelectorAll(".tabbed-set > .tabbed-labels > label").forEach(function (label) {
        if (!isTopLevel(label.closest(".tabbed-set"))) return;
        if (label.textContent.trim() === saved) {
          var input = document.getElementById(label.getAttribute("for"));
          if (input) input.checked = true;
        }
      });
    }
  } catch (e) {}
});