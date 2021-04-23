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
        await api.contactModify({
          first_name: document.querySelector("#first_name").value,
          last_name: document.querySelector("#last_name").value,
          ssc: document.querySelector("#ssc").value,
          title: document.querySelector("#title").value,
          www: document.querySelector("#www").value,
          birth_year: document.querySelector("#birth_year").value,
          gender: document.querySelector("#gender").value,
          address: {
            country: document.querySelector("#country").value,
            city: document.querySelector("#city").value,
            postal_code: document.querySelector("#postal_code").value,
            street_address: document.querySelector("#street_address").value,
          },
          email: document.querySelector("#email").value,
          other_infos : [
            {
              id: 1,
              value: document.querySelector("#other_infos_1").value
            },
            {
              id: 2,
              value: document.querySelector("#other_infos_2").value
            },
            {
              id: 3,
              value: document.querySelector("#other_infos_3").value
            },
            {
              id: 4,
              value: document.querySelector("#other_infos_4").value
            },
            {
              id: 5,
              value: document.querySelector("#other_infos_5").value
            },
            {
              id: 6,
              value: document.querySelector("#other_infos_6").value
            },
            {
              id: 7,
              value: document.querySelector("#other_infos_7").value
            },
            {
              id: 8,
              value: document.querySelector("#other_infos_8").value
            },
            {
              id: 9,
              value: document.querySelector("#other_infos_9").value
            },
            {
              id: 10,
              value: document.querySelector("#other_infos_10").value
            },
            {
              id: 11,
              value: document.querySelector("#other_infos_11").value
            },
            {
              id: 12,
              value: document.querySelector("#other_infos_12").value
            },
            {
              id: 13,
              value: document.querySelector("#other_infos_13").value
            },
            {
              id: 14,
              value: document.querySelector("#other_infos_14").value
            },
            {
              id: 15,
              value: document.querySelector("#other_infos_15").value
            },
            {
              id: 16,
              value: document.querySelector("#other_infos_16").value
            },
            {
              id: 17,
              value: document.querySelector("#other_infos_17").value
            },
            {
              id: 18,
              value: document.querySelector("#other_infos_18").value
            },
            {
              id: 19,
              value: document.querySelector("#other_infos_19").value
            },
            {
              id: 20,
              value: document.querySelector("#other_infos_20").value
            },
            {
              id: 21,
              value: document.querySelector("#other_infos_21").value
            },
            {
              id: 22,
              value: document.querySelector("#other_infos_22").value
            },
            {
              id: 23,
              value: document.querySelector("#other_infos_23").value
            },
            {
              id: 24,
              value: document.querySelector("#other_infos_24").value
            },
            {
              id: 25,
              value: document.querySelector("#other_infos_25").value
            },
            {
              id: 26,
              value: document.querySelector("#other_infos_26").value
            },
            {
              id: 27,
              value: document.querySelector("#other_infos_27").value
            },
            {
              id: 28,
              value: document.querySelector("#other_infos_28").value
            },
            {
              id: 29,
              value: document.querySelector("#other_infos_29").value
            },
            {
              id: 30,
              value: document.querySelector("#other_infos_30").value
            },
            {
              id: 31,
              value: document.querySelector("#other_infos_31").value
            },
            {
              id: 32,
              value: document.querySelector("#other_infos_32").value
            },
            {
              id: 33,
              value: document.querySelector("#other_infos_33").value
            },
            {
              id: 34,
              value: document.querySelector("#other_infos_34").value
            },
            {
              id: 35,
              value: document.querySelector("#other_infos_35").value
            },
           ],
        });
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
