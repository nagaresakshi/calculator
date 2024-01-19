    var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;
            if (btntext == "=") {
                screen.value = eval(screen.value);
            } else if (btntext == "sin") {
                sin();
            } else if (btntext == "cos") {
                cos();
            } else if (btntext == "tan") {
                tan();
            } else if (btntext == "SqR") {
                sqrt();
            } else if (btntext == "x^y") {
                pow();
            } else if (btntext == "X!") {
                fact();
            } else if (btntext == "CE") {
                backspace();
            } else if (btntext == "AC") {
                allclear();
            } else {
                screen.value += btntext;
            }


        });
    }

    function sin() {
        screen.value = Math.sin(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value);
    }

    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }

    function log() {
        screen.value = Math.log(screen.value);
    }

    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }
        i = i - 1;
        screen.value = f;
    }

    function backspace() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }

    function allclear() {
        screen.value = '';
    }
    