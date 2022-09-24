

let controls = document.querySelectorAll(".controls");
let output = document.querySelector(".output");
let info = document.querySelector(".info");
Array.from(controls).forEach((controls) => {
  controls.addEventListener("click", (e) => {

      switch (e.target.innerText) {
          case "C":
              output.innerText = "";
        break;

      case "Del":
        if (output.innerText == "Error!!!") {
          output.innerText = "";
        }
        output.innerText = output.innerText.slice(0, -1);
        
        break;
        
        case "=":
        try {
            output.innerText = eval(output.innerText);
        } catch {
            // str = eval(output.innerHTML);
            output.innerText = "Error!!!";
        }
        
        break;

        default:
            if (output.innerHTML == "0") {
                output.innerHTML = e.target.innerText;
            } else {
                output.innerHTML += e.target.innerText;
            }
            break;
        }
  });
});


function about() {
    confirm("This is a calculator app made by Karan Singh")
    return
}
