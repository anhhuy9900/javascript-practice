// Encapsulation closure it mean if you don't anybody access functions inside closure:
//You only return object elements necessary
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "💥";
  };

  // setInterval(passTime, 1000);
  return { totalPeaceTime };
};

const ww3 = makeNuclearButton();
ww3.totalPeaceTime();
console.log('ww3.timeWithoutDestruction: ', ww3.timeWithoutDestruction);
