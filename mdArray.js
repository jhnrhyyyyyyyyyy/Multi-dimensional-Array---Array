function mdArray(){

    let ssubArray1 = prompt("Enter names, follow this format (e.g.,Genevieve, Juan, Luna, Gabriel, Elise");
    let ssubArray2 = prompt("Enter ages, follow this format (e.g.,24, 65, 21, 5, 9");

    let subArray1 = ssubArray1.split(",").map(name => name.trim());
    let subArray2 = ssubArray2.split(",").map(num => parseInt(num.trim())); 

    let restructuredArray = [];

    for (let i = 0; i < subArray1.length; i++) {
    restructuredArray.push([subArray1[i], subArray2[i]]);
    }


    restructuredArray.forEach(subArray => {
        prompt("Restructured Multi-Dimensional Array:", subArray);
    });
    }