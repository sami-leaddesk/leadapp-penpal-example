import { LeadAppApi } from "leadapp-penpal-poc";

LeadAppApi()
  .then((api) => {
    Object.assign(window, {LeadApp: api});
    document.querySelector("#fse").addEventListener("click", () => {
      api
        .fullscreenEnable()
        .catch((err) => console.error("fullscreenEnable", err));
    });
    document.querySelector("#fsd").addEventListener("click", () => {
      api
        .fullscreenDisable()
        .catch((err) => console.error("fullscreenDisable", err));
    });
    document.querySelector("#call").addEventListener("click", () => {
      api.callStart().catch((err) => console.error("callStart", err));
    });

    document.querySelector("#transfer").addEventListener("click", async () => {
      try {
        await api.assistedCallStart({
          phoneNumber: document.querySelector("#number").value,
        });
      } catch (err) {
        console.error("child", "makeAssistedCall", err);
      }
    });

    document.querySelector("#modify").addEventListener("click", async () => {
      try {
        var modifiedContact = {};
        var mainKeys = ["first_name", "last_name", "ssc", "title", "www", "birth_year", "gender", "address", "email", "other_infos"];
        for (var i = 0; i < mainKeys.length; i++) {
          if (mainKeys[i] === "address") {
            if (document.querySelector("#country").value) {
              modifiedContact['address']['country'] = document.querySelector("#country").value
            }
            if (document.querySelector("#city").value) {
              modifiedContact['address']['city'] = document.querySelector("#city").value
            }
            if (document.querySelector("#postal_code").value) {
              modifiedContact['address']['postal_code'] = document.querySelector("#postal_code").value
            }
            if (document.querySelector("#street_address").value) {
              modifiedContact['address']['street_address'] = document.querySelector("#street_address").value
            }
          } else if (mainKeys[i] === "other_infos") {
            for (var index = 1; index <= 35; index++) {
              if (document.querySelector("#other_infos_" + index).value) {
                modifiedContact['other_infos']['id'] = index;
                modifiedContact['other_infos']['value'] = document.querySelector("#other_infos_" + index).value;
              }
            }
          } else if (document.querySelector("#" + mainKeys[i]).value) {
            modifiedContact[mainKeys[i]] = document.querySelector("#" + mainKeys[i]).value
          }
        }
        await api.contactModify(modifiedContact);
      } catch (err) {
          console.error("component", "contactModify", err);
      }
    });
  })
  .catch((err) => {
    console.error(`LeadApp API initialization failed: ${err.message}`);
  });

// Content creation functionality

document.querySelector("#add-paragraph").addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam sed mollitia sapiente omnis consectetur! In maxime totam atque dolorem optio, numquam aut nesciunt, quaerat magni incidunt laboriosam ipsa exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam sed mollitia sapiente omnis consectetur! In maxime totam atque dolorem optio, numquam aut nesciunt, quaerat magni incidunt laboriosam ipsa exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam sed mollitia sapiente omnis consectetur! In maxime totam atque dolorem optio, numquam aut nesciunt, quaerat magni incidunt laboriosam ipsa exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam sed mollitia sapiente omnis consectetur! In maxime totam atque dolorem optio, numquam aut nesciunt, quaerat magni incidunt laboriosam ipsa exercitationem?";
  document.querySelector("#content").appendChild(p);
});

document.querySelector("#add-block").addEventListener("click", () => {
  const block = document.createElement("div");
  block.style.cssText = "background: red; width: 2000px; height: 50px; ";
  document.querySelector("#content").appendChild(block);
});
