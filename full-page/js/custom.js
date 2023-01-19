// Counter Options
let counters = document.querySelectorAll('.count');
let time = 300;

counters.forEach(count => {
  let updateCount = () => {
    let target = +count.getAttribute('data-target');
    let counts = +count.innerText;
  
    let increment = target / time;

    if (counts < target) {
      count.innerText = Math.ceil(counts + increment);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
