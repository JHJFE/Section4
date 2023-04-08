function missHouseMeal(sideDishes) {
    // TODO: 여기에 코드를 작성합니다.
    let inputSet = [...sideDishes];

    function powerSet (arr) { // "eggroll", "kimchi", "fishSoup"]
        const result = [];
    
        function recursion (subset, start) { // [] 0
            
            result.push(subset.sort());
            for(let i = start; i < arr.length; i++){
                recursion([...subset, arr[i]], i+1);//[0,egroll,1]
            }
        }
    
        recursion([], 0);
        return result.sort();
    }
    
    return powerSet(inputSet);
}
let output = missHouseMeal( ['pasta', 'oysterSoup', 'beefRibs', 'tteokbokki']);
console.log(output);
/*
[ [], 
  [ 'eggroll' ], 
  [ 'eggroll', 'fishSoup' ], 
  [ 'eggroll', 'fishSoup', 'kimchi' ], 
  [ 'eggroll', 'kimchi' ], 
  [ 'fishSoup' ], 
  [ 'fishSoup', 'kimchi' ], 
  [ 'kimchi' ]
] 
*/