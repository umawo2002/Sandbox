import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createUncompList(inputText);
};

const deleteFromUncomList = (target) => {
  document.getElementById("uncomp-list").removeChild(target);
};

const createUncompList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = text;
  document.getElementById("uncomp-list").appendChild(div);

  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    deleteFromUncomList(compButton.parentNode);
    const addTarget = compButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    const retButton = document.createElement("button");
    retButton.innerText = "戻す";

    retButton.addEventListener("click", () => {
      const delTarget = retButton.parentNode;
      document.getElementById("comp-list").removeChild(delTarget);
      const text = retButton.parentNode.firstElementChild.innerText;
      createUncompList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(retButton);
    // console.log(addTarget);
    document.getElementById("comp-list").appendChild(addTarget);
  });

  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    deleteFromUncomList(delButton.parentNode);
    // document.getElementById("uncomp-list").removeChild(delTarget);
  });

  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(delButton);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
