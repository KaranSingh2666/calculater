// let controls=[

// "let cl = document.getElementById('cl')",
// "let se = document.getElementById('se')",
// "let fo = document.getElementById('fo')",
// "let on = document.getElementById('on')",
// "let perc = document.getElementById('perc')",
// "let div = document.getElementById('div')",
// "let eig = document.getElementById('eig')",
// "let fi = document.getElementById('fi')",
// "let tw = document.getElementById('tw')",
// "let ze = document.getElementById('ze')",
// "let mul = document.getElementById('mul')",
// "let ni = document.getElementById('ni')",
// "let si = document.getElementById('si')",
// "let th = document.getElementById('th')",
// "let dot = document.getElementById('dot')",
// "let bs = document.getElementById('bs')",
// "let min = document.getElementById('min')",
// "let pl = document.getElementById('pl')",
// "let eq = document.getElementById('eq')",
// ]

// controls.forEach((n,i)=>{
//     console.log(controls[i])
// eval(controls[i])
// })

let str = "";

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
