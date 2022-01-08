function jumlahAngkaDalamArray(data){
	let result = []
	let temp = 0
	let tempConcat = ""
	for(let i = 0 ; i < data.length; i++){
		temp += data[i]
		tempConcat += `${data[i]}`
		for(let j = i+1; j < data.length; j ++){
			temp += data[j]
			tempConcat += `+${data[j]}`
		}
		if (temp % 2 ===0) {
			tempConcat += ` = ${temp} adalah bilangan genap`
			result.push(tempConcat)
		}else{
			tempConcat += ` = ${temp} adalah bilangan ganjil`
			result.push(tempConcat)
		}
		temp = 0
		tempConcat = ""
	}
	return result
}

console.log(jumlahAngkaDalamArray([1,2,3,4]))