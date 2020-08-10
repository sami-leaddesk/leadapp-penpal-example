import { LeadAppApi } from "leadapp-penpal-poc";

LeadAppApi()
  .then((api) => {
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
