const a = 1; const b = 2; const c = 3;
       
(function firstFunction () {
  const b = 5; const c = 6;
  
  (function secondFunction () {
    const b = 8;
  
    (function thirdFunction () {  
      const a = 7; const c = 9;  
  
      (function fourthFunction () {  
        const a = 1; const c = 8;  
      })();  // picks up fourthfunction
    })(); // picks up thirdfunction
    console.log(`a: ${a}, b: ${b}, c: ${c}`);   // picks up secondfunction
  })();  // picks up firstfunction
})();  // picks up function from the top which is global scope



   
      