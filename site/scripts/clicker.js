const btn = document.querySelector('.button');
let anti_double = false;
let y_px = 0;
let floor_px = 0;
const speed = 10;
let index = 0;
const textelem = document.querySelector('.text');
const end = document.querySelector('.endscreen')
textelem.style.display = "none";
end.style.display = "none";
function fallstart() {
    if (anti_double) return;
    anti_double = true;
    const rect = btn.getBoundingClientRect();
    y_px = rect.top;
    floor_px = window.innerHeight - btn.offsetHeight;
    requestAnimationFrame(fall);
}
function fall() {
    y_px += speed;
    btn.style.top = y_px + 'px';
    if (y_px < floor_px) {
        requestAnimationFrame(fall);
    } else {
        btn.style.top = floor_px + 'px';
        textshi();
    }
}
function textshi() {
    textelem.style.display = "block";
    let delay = 0
    const messages = [
        "How could you...",
        "You broke my game...",
        "I spent 2 hours making this...",
        "Only for YOU to break it.",
        "Your such a meanie..."];
    messages.forEach((msg) => {
        setTimeout(() => {
            textelem.classList.add('shaking');
            cooltext(msg, textelem);
        }, delay);
        delay += (msg.length * 25) + 1500;
    });
    setTimeout(() => {
        end.style.display = "block";
    }, delay);
}
function cooltext(prompt,elem) {
    let index = 0;
    elem.textContent = "";

    function type() {
        if (index < prompt.length) {
            elem.textContent += prompt.charAt(index);
            index++;
            setTimeout(type, 25);
        }
    }

    type();
}
