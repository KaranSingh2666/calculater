

let controls = document.querySelectorAll(".controls");
let output = document.querySelector(".output");
Array.from(controls).forEach((controls) => {
  controls.addEventListener("click", (e) => {
      switch (e.target.innerHTML) {
          case "C":
              output.innerHTML = "";
        break;

      case "Del":
        if (output.innerHTML == "Error!!!") {
          output.innerHTML = "";
        }
        output.innerHTML = output.innerHTML.slice(0, -1);
        
        break;
        
        case "=":
        try {
            output.innerHTML = eval(output.innerHTML);
        } catch {
            // str = eval(output.innerHTML);
            output.innerHTML = "Error!!!";
        }
        
        break;

        default:
            if (output.innerHTML == "0") {
                output.innerHTML = e.target.innerHTML;
            } else {
                output.innerHTML += e.target.innerHTML;
            }
            break;
        }
  });
});
